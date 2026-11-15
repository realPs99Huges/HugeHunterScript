"""Baut die installierbare Web-App (PWA) in einen Ordner.

Aufruf: python3 tools/build_web.py <ausgabe-ordner>

index.html ist im Artifact-Format geschrieben (ohne <html>/<head>). Dieses Skript
setzt ein vollständiges Dokument darum, hängt Manifest, Icons und Service Worker an
und versieht CSS/JS mit Versions-Parametern, damit Updates sofort ankommen.
"""
import hashlib
import json
import shutil
import sys
from pathlib import Path

SRC = Path(__file__).resolve().parent.parent
FILES = ["style.css", "js/vocab.js", "js/verbs.js", "js/courses.js", "js/texts.js", "js/app.js"]
ICONS = ["icon-192.png", "icon-512.png", "icon-maskable-512.png", "apple-touch-icon.png", "favicon-32.png"]


def digest(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()[:10]


def main(out: Path) -> None:
    if out.exists():
        for child in out.iterdir():
            if child.name == ".git":
                continue
            shutil.rmtree(child) if child.is_dir() else child.unlink()
    out.mkdir(parents=True, exist_ok=True)

    versions = {f: digest(SRC / f) for f in FILES}
    for f in FILES:
        (out / f).parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(SRC / f, out / f)
    (out / "icons").mkdir(exist_ok=True)
    for f in ICONS:
        shutil.copy2(SRC / "icons" / f, out / "icons" / f)

    head, body = [], []
    for line in (SRC / "index.html").read_text(encoding="utf-8").splitlines():
        s = line.strip()
        if s.startswith(("<title", "<meta", "<link")):
            for f, v in versions.items():
                s = s.replace(f'href="{f}"', f'href="{f}?v={v}"')
            if 'name="claude:' not in s:
                head.append(s)
        else:
            for f, v in versions.items():
                line = line.replace(f'src="{f}"', f'src="{f}?v={v}"')
            body.append(line)

    build = hashlib.sha256("".join(versions.values()).encode()).hexdigest()[:10]
    html = "\n".join([
        "<!doctype html>",
        '<html lang="de">',
        "<head>",
        '<meta charset="utf-8">',
        '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">',
        '<meta name="description" content="Französisch lernen mit Découvertes 1–2: Lernpfad mit Sternen, Grammatik, Vokabeln und Klassenarbeit.">',
        '<meta name="theme-color" content="#FFFFFF" media="(prefers-color-scheme: light)">',
        '<meta name="theme-color" content="#171F38" media="(prefers-color-scheme: dark)">',
        '<meta name="mobile-web-app-capable" content="yes">',
        '<meta name="apple-mobile-web-app-capable" content="yes">',
        '<meta name="apple-mobile-web-app-title" content="Carnet">',
        '<meta name="apple-mobile-web-app-status-bar-style" content="default">',
        '<link rel="manifest" href="manifest.webmanifest">',
        '<link rel="icon" type="image/png" sizes="32x32" href="icons/favicon-32.png">',
        '<link rel="apple-touch-icon" href="icons/apple-touch-icon.png">',
        "<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}"
        "body{margin:0}img{max-width:100%}[hidden]{display:none!important}</style>",
        *head,
        "<script>window.CARNET_WEB=true;</script>",
        "</head>",
        "<body>",
        *body,
        "<script>if('serviceWorker' in navigator){addEventListener('load',function(){"
        "navigator.serviceWorker.register('sw.js').catch(function(){});});}</script>",
        "</body>",
        "</html>",
        "",
    ])
    (out / "index.html").write_text(html, encoding="utf-8")
    (out / "404.html").write_text(html, encoding="utf-8")

    manifest = {
        "name": "Carnet de Français",
        "short_name": "Carnet",
        "description": "Französisch lernen mit Découvertes 1–2",
        "lang": "de",
        "start_url": "./",
        "scope": "./",
        "display": "standalone",
        "orientation": "portrait",
        "background_color": "#EDF1FA",
        "theme_color": "#2F5BEA",
        "icons": [
            {"src": "icons/icon-192.png", "sizes": "192x192", "type": "image/png"},
            {"src": "icons/icon-512.png", "sizes": "512x512", "type": "image/png"},
            {"src": "icons/icon-maskable-512.png", "sizes": "512x512", "type": "image/png", "purpose": "maskable"},
        ],
    }
    (out / "manifest.webmanifest").write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8")

    assets = ["./", "index.html", "manifest.webmanifest"] + [f"{f}?v={v}" for f, v in versions.items()] + [f"icons/{f}" for f in ICONS]
    sw = (SRC / "tools" / "sw.template.js").read_text(encoding="utf-8")
    sw = sw.replace("__BUILD__", build).replace("__ASSETS__", json.dumps(assets))
    (out / "sw.js").write_text(sw, encoding="utf-8")
    (out / ".nojekyll").write_text("", encoding="utf-8")
    print(f"built {build} -> {out}")


if __name__ == "__main__":
    if len(sys.argv) != 2:
        sys.exit("usage: build_web.py <output-dir>")
    main(Path(sys.argv[1]).resolve())
