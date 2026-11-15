"""Erzeugt die App-Icons (PNG) für die Web-App. Aufruf: python3 tools/make_icons.py"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter

OUT = Path(__file__).resolve().parent.parent / "icons"
BG = (237, 241, 250)
BLUE, WHITE, RED = (47, 91, 234), (247, 247, 251), (226, 67, 75)


def icon(size: int, card: float, bg=BG) -> Image.Image:
    s = size * 4  # supersampling for smooth edges
    img = Image.new("RGBA", (s, s), bg + (255,))
    w = int(s * card)
    tile = Image.new("RGBA", (w, w), (0, 0, 0, 0))
    mask = Image.new("L", (w, w), 0)
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, w - 1, w - 1], radius=int(w * 0.26), fill=255)
    stripes = Image.new("RGBA", (w, w))
    d = ImageDraw.Draw(stripes)
    third = w / 3
    for i, col in enumerate((BLUE, WHITE, RED)):
        d.rectangle([int(i * third), 0, int((i + 1) * third) + 1, w], fill=col + (255,))
    tile.paste(stripes, (0, 0), mask)
    shadow = Image.new("RGBA", (w, w), (23, 32, 74, 70))
    sh = Image.new("RGBA", (s, s), (0, 0, 0, 0))
    off = (s - w) // 2
    sh.paste(shadow, (off, off + int(s * 0.03)), mask)
    sh = sh.rotate(-7, resample=Image.BICUBIC).filter(ImageFilter.GaussianBlur(s * 0.02))
    img.alpha_composite(sh)
    layer = Image.new("RGBA", (s, s), (0, 0, 0, 0))
    layer.paste(tile, (off, off), tile)
    layer = layer.rotate(-7, resample=Image.BICUBIC)
    img.alpha_composite(layer)
    return img.resize((size, size), Image.LANCZOS).convert("RGB")


def main() -> None:
    OUT.mkdir(exist_ok=True)
    icon(192, 0.70).save(OUT / "icon-192.png")
    icon(512, 0.70).save(OUT / "icon-512.png")
    icon(512, 0.52).save(OUT / "icon-maskable-512.png")
    icon(180, 0.72).save(OUT / "apple-touch-icon.png")
    icon(32, 0.84).save(OUT / "favicon-32.png")
    print("icons written to", OUT)


if __name__ == "__main__":
    main()
