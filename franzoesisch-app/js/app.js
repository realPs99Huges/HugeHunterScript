(() => {
"use strict";
/* ═══════════ Helfer ═══════════ */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;" }[c]));
const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const sample = (a, n) => shuffle(a).slice(0, n);
const rnd = a => a[Math.floor(Math.random() * a.length)];
const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
const today = () => new Date().toISOString().slice(0, 10);
const isGerman = s => /[äöüßÄÖÜ„“]|\b(ich|wir|man|der|die|das|und|nicht|ist|Sie|Er|ein|eine|mit|auf|Wie|Was)\b/.test(s);
const NUMW = ["zéro","un","deux","trois","quatre","cinq","six","sept","huit","neuf","dix","onze","douze","treize","quatorze","quinze","seize","dix-sept","dix-huit","dix-neuf","vingt"];

/* ═══════════ Icons ═══════════ */
const P = {
 home:"M3 11 12 4l9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z",
 check:"M4 12.5 9 17.5 20 6.5",
 checklist:"M9 6h11M9 12h11M9 18h11M3.5 6l1.2 1.2L7 5M3.5 12l1.2 1.2L7 11M3.5 18l1.2 1.2L7 17",
 cards:"M4 7h12v13H4zM8 4h12v13",
 exam:"M6 3h9l4 4v14H6zM14 3v5h5M9 13h7M9 17h5",
 more:"M5 12h.01M12 12h.01M19 12h.01",
 verb:"M4 6h16M4 12h10M4 18h7M17 15l3 3-3 3",
 glass:"M6 3h12l-1.5 17h-9zM6.5 8h11",
 scale:"M12 4v16M5 20h14M4 9l3-5 3 5a3 3 0 0 1-6 0zM14 9l3-5 3 5a3 3 0 0 1-6 0zM7 4h10",
 list:"M5 4h14v16H5zM8 9h8M8 13h8M8 17h4",
 user:"M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0",
 arrow:"M4 12h14M13 6l6 6-6 6",
 question:"M9 9a3 3 0 1 1 4.5 2.6c-1 .6-1.5 1.2-1.5 2.4M12 18h.01M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z",
 book:"M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zM4 21V5M8 7h7",
 basket:"M3 10h18l-2 10H5zM8 10l4-6 4 6M9 14v3M15 14v3",
 blocks:"M3 14h8v7H3zM13 14h8v7h-8zM8 3h8v7H8z",
 article:"M5 4h14v16H5zM9 8h6M9 12h6M9 16h3",
 paint:"M19 3H8a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h11V3zM12 10v3M10 13h4v8h-4z",
 key:"M14 10a5 5 0 1 0-1.5 3.5L21 22M17 18l2-2",
 no:"M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM5 5l14 14",
 future:"M12 7v5l3 3M3 12a9 9 0 1 0 3-6.7M3 4v5h5",
 past:"M12 7v5l-3 3M21 12a9 9 0 1 1-3-6.7M21 4v5h-5",
 megaphone:"M3 11v3l12 5V6L3 11zM15 9a3 3 0 0 1 0 6M6 15l1 5h3l-1-4",
 hash:"M9 3 7 21M17 3l-2 18M4 8h17M3 16h17",
 pointer:"M8 3v11l3-3 2 6 2-1-2-6h4z",
 wave:"M7 11V6a1.5 1.5 0 0 1 3 0v4M10 10V4.5a1.5 1.5 0 0 1 3 0V10M13 10V5.5a1.5 1.5 0 0 1 3 0V12M16 9.5a1.5 1.5 0 0 1 3 0V15a6 6 0 0 1-6 6h-1a6 6 0 0 1-5-3l-3-5a1.5 1.5 0 0 1 2.5-1.5L7 13",
 school:"M2 9l10-5 10 5-10 5zM6 11v5c3 2 9 2 12 0v-5M22 9v6",
 ball:"M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 7l4 3-1.5 5h-5L8 10zM12 2v5M22 10l-6 0M2 10h6M7 21l2.5-6M17 21l-2.5-6",
 city:"M3 21V9l6-4v16M9 21V3h8v18M17 21V11h4v10M12 7h2M12 11h2M12 15h2",
 clock:"M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 6v6l4 2",
 cake:"M4 21h16v-9H4zM4 15c2 1.5 4 1.5 6 0s4-1.5 6 0 4 1.5 4 0M12 12V8M12 5v.01",
 sun:"M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zM12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4",
 heart:"M12 21s-8-5-8-11a5 5 0 0 1 8-3.5A5 5 0 0 1 20 10c0 6-8 11-8 11z",
 phone:"M7 2h10v20H7zM11 18h2",
 shirt:"M8 3 3 6l2 5 3-1v11h8V10l3 1 2-5-5-3a4 4 0 0 1-8 0z",
 chat:"M4 4h16v12H9l-5 4z",
 palette:"M12 22a10 10 0 1 1 10-10c0 3-3 3-5 3h-2a2 2 0 0 0-1 3.7c.5.4.5 1.1 0 1.6-.6.5-1.2.7-2 .7zM7.5 11h.01M10 7h.01M15 7h.01",
 spark:"M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6",
 star:"M12 2.8l2.8 5.8 6.3.9-4.6 4.4 1.1 6.3L12 17.3l-5.6 2.9 1.1-6.3L2.9 9.5l6.3-.9z",
 flame:"M12 22c4 0 7-3 7-7 0-5-5-7-5-12-3 2-4 5-4 7-1-1-2-2-2-4-2 2-3 5-3 9 0 4 3 7 7 7z",
 speaker:"M4 9v6h4l5 4V5L8 9zM16 9a4 4 0 0 1 0 6M18.5 6.5a8 8 0 0 1 0 11",
 close:"M6 6l12 12M18 6 6 18",
 back:"M15 5l-7 7 7 7",
 trophy:"M7 4h10v5a5 5 0 0 1-10 0zM7 6H4a3 3 0 0 0 3 4M17 6h3a3 3 0 0 1-3 4M12 14v4M8 21h8M9 18h6",
 pencil:"M4 20h4L19 9l-4-4L4 16zM14 6l4 4",
 ear:"M7 9a5 5 0 1 1 10 0c0 3-3 4-3 7a3 3 0 0 1-6 0M10 10a2 2 0 0 1 4 0",
 shuffle:"M3 7h4l10 10h4M3 17h4l3-3M14 10l3-3h4M18 4l3 3-3 3M18 14l3 3-3 3",
 timer:"M12 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM12 10v4l2 2M9 2h6",
 search:"M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM20 20l-4-4",
 gear:"M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z",
 box:"M3 7l9-4 9 4v10l-9 4-9-4zM3 7l9 4 9-4M12 11v10",
 plus:"M12 5v14M5 12h14",
 play:"M7 4l13 8-13 8z",
 thumbUp:"M7 10v11H3V10zM7 10l4-7a2.5 2.5 0 0 1 3 3l-1 4h6a2 2 0 0 1 2 2.3l-1.3 7A2 2 0 0 1 17.7 21H7",
 thumbSide:"M10 7H21v4H10zM10 7l-7 4a2.5 2.5 0 0 0 3 3l4-1v6a2 2 0 0 0 2.3 2l7-1.3A2 2 0 0 0 21 17.7V11",
 pin:"M12 22s7-7 7-12a7 7 0 0 0-14 0c0 5 7 12 7 12zM12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
 refresh:"M20 11a8 8 0 1 0-2.3 5.7M20 4v7h-7",
 bulb:"M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z",
 eye:"M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",
 edit:"M4 20h4L19 9l-4-4L4 16z"
};
const I = (n, cls = "") => `<svg class="ic ${cls}" viewBox="0 0 24 24" aria-hidden="true"><path d="${P[n] || P.spark}"/></svg>`;
const starRow = (n, max = 5, cls = "") => `<span class="stars ${cls}">${Array.from({ length: max }, (_, i) => `<svg viewBox="0 0 24 24" class="${i < n ? "on" : ""}"><path d="${P.star}"/></svg>`).join("")}</span>`;

/* ═══════════ Speicher ═══════════ */
const KEY = "carnet-francais-v1";
const defState = () => ({ xp:0, stars:{}, self:{}, leitner:{}, streak:{ n:0, last:null }, day:{ d:null, xp:0 }, custom:"", settings:{ theme:"system", sound:true, goal:60, exam:"" }, exams:[], drafts:{}, seenIntro:false });
let S = (() => { try { const d = JSON.parse(localStorage.getItem(KEY)); if (d) { const b = defState(); return { ...b, ...d, settings:{ ...b.settings, ...(d.settings || {}) } }; } } catch (e) {} return defState(); })();
const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} };

function addXP(n) {
  const t = today();
  if (S.day.d !== t) S.day = { d:t, xp:0 };
  S.day.xp += n; S.xp += n;
  if (S.streak.last !== t) {
    const y = new Date(Date.now() - 864e5).toISOString().slice(0, 10);
    S.streak.n = S.streak.last === y ? S.streak.n + 1 : 1;
    S.streak.last = t;
  }
  save(); updateTopStats();
}
const level = () => Math.floor(Math.sqrt(S.xp / 40)) + 1;
const levelRange = l => [40 * (l - 1) ** 2, 40 * l ** 2];

/* ═══════════ Antworten prüfen ═══════════ */
function normBase(s) {
  return String(s).toLowerCase().replace(/[’‘`´]/g, "'").replace(/œ/g, "oe").replace(/æ/g, "ae")
    .replace(/[«»"“”„]/g, " ").replace(/\s*-\s*/g, "-").replace(/\s*'\s*/g, "'")
    .replace(/[.!?,;:…]/g, " ").replace(/\s+/g, " ").trim();
}
const noAcc = s => s.normalize("NFD").replace(/[̀-ͯ]/g, "");
function grade(input, accepted, opt = {}) {
  const a = normBase(input);
  if (!a) return { score:0 };
  for (const acc of accepted) if (normBase(acc) === a) return { score:1 };
  for (const acc of accepted) if (noAcc(normBase(acc)) === noAcc(a)) return { score:.5, msg:"Fast! Achte auf die Akzente (é, è, ê, à, ç …)." };
  if (opt.partial) for (const acc of opt.partial) if (normBase(acc) === a || noAcc(normBase(acc)) === noAcc(a)) return { score:.5, msg:opt.partialMsg };
  return { score:0 };
}
const ARTRE = /^(le |la |les |l'|un |une |des )/i;
function frAccepted(fr) {
  let alts = fr.split(" / ").map(s => s.trim()).filter(s => !/^(le|la|les|l')$/.test(s));
  const out = [];
  for (const a of alts) { if (a.includes("(e)")) { out.push(a.replace("(e)", ""), a.replace("(e)", "e")); } else out.push(a); }
  if (/^(le|la) \/ /.test(fr)) { const rest = fr.replace(/^(le|la) \/ /, ""); out.push(rest.replace(/^(le|la) /, "le ").replace("(e)", ""), rest.replace("(e)", "e")); }
  return out;
}
function deAccepted(de) {
  return de.split(/;|,/).map(s => s.replace(/\(.*?\)/g, "").trim()).filter(Boolean).flatMap(s => [s, s.replace(/^(der|die|das|ein|eine) /i, "")]);
}

/* ═══════════ Vokabeln ═══════════ */
const WORDS = {};
function parseSet(set) {
  set.list = set.words.trim().split("\n").map((l, i) => { const [fr, de] = l.split("|"); return { id:`${set.id}:${i}`, fr:(fr || "").trim(), de:(de || "").trim(), set:set.id }; }).filter(w => w.fr && w.de);
  set.list.forEach(w => WORDS[w.id] = w);
}
VOCAB_SETS.forEach(parseSet);
const customSet = { id:"custom", band:9, title:"Meine Vokabeln", de:"Deine eigenen Wörter", icon:"edit", words:"" };
function loadCustom() {
  customSet.words = (S.custom || "").split("\n").map(l => { const m = l.split(/\s*[|;=]\s*|\s+-\s+|\t/); return m.length >= 2 ? `${m[0].trim()}|${m.slice(1).join("; ").trim()}` : ""; }).filter(Boolean).join("\n");
  Object.keys(WORDS).filter(k => k.startsWith("custom:")).forEach(k => delete WORDS[k]);
  parseSet(customSet);
}
loadCustom();
const allSets = () => customSet.list.length ? [...VOCAB_SETS, customSet] : VOCAB_SETS;
const setById = id => id === "custom" ? customSet : VOCAB_SETS.find(s => s.id === id);

/* Lernkartei (Leitner) */
const BOXDAYS = [0, 0, 1, 3, 7, 14];
function leit(id, ok) {
  const e = S.leitner[id] || { b:0, due:0 };
  e.b = ok ? Math.min(5, e.b + 1) : 1;
  e.due = Date.now() + BOXDAYS[e.b] * 864e5 - 36e5;
  S.leitner[id] = e;
}
const dueWords = () => Object.entries(S.leitner).filter(([id, e]) => WORDS[id] && e.due <= Date.now()).map(([id]) => WORDS[id]);

/* ═══════════ Wörterbuch ═══════════ */
const DICT = new Map();
function addD(key, e) {
  key = key.toLowerCase().replace(/[’]/g, "'").replace(/\s*…\s*$/, "").replace(/[?!.]$/, "").trim();
  if (!key) return;
  if (!DICT.has(key)) DICT.set(key, []);
  const arr = DICT.get(key);
  if (!arr.some(x => x.de === e.de && x.fr === e.fr)) arr.push(e);
}
function buildDict() {
  DICT.clear();
  for (const v of VERBS) {
    addD(v.inf, { fr:v.inf, de:v.de, note:"Infinitiv" });
    const who = ["je","tu","il/elle/on","nous","vous","ils/elles"];
    v.pres.forEach((f, i) => addD(f, { fr:v.inf, de:v.de, note:`Präsens von ${v.inf} (${who[i]})` }));
    addD(v.pp, { fr:v.inf, de:v.de, note:`Partizip von ${v.inf}` });
  }
  for (const set of allSets()) for (const w of set.list) {
    for (const alt of w.fr.split(" / ")) {
      const a = alt.trim(); if (/^(le|la|les|l')$/.test(a)) continue; addD(a, { fr:w.fr, de:w.de, id:w.id });
      const s = a.replace(ARTRE, ""); if (s !== a) addD(s, { fr:w.fr, de:w.de, id:w.id });
    }
  }
  EXTRA_GLOSS.trim().split("\n").forEach(l => { const [fr, de] = l.split("|"); if (fr && de) addD(fr, { fr, de }); });
}
buildDict();
function lookup(raw) {
  let w = raw.toLowerCase().replace(/[’]/g, "'").replace(/^[^\p{L}]+|[^\p{L}]+$/gu, "");
  let pre = null, r = DICT.get(w);
  if (!r) { const m = w.match(/^(l|d|j|m|t|s|n|qu|c)'(.+)$/); if (m) { pre = m[1] + "'"; w = m[2]; r = DICT.get(w); } }
  if (!r && w.includes("-")) { const parts = w.split("-").filter(p => p && p !== "t"); for (const p of parts) { r = DICT.get(p); if (r) { w = p; break; } } }
  if (!r) for (const [a, b] of [[/s$/, ""], [/x$/, ""], [/aux$/, "al"], [/es$/, ""], [/e$/, ""], [/euses?$/, "eux"], [/ives?$/, "if"], [/ée?s?$/, "é"], [/ies?$/, "i"], [/ues?$/, "u"]]) {
    if (a.test(w)) { const k = w.replace(a, b); if (DICT.get(k)) { r = DICT.get(k); w = k; break; } }
  }
  return { word:w, pre, entries:r || [], preDe:pre ? (DICT.get(pre) || [])[0]?.de : null };
}

/* ═══════════ Sprachausgabe & Töne ═══════════ */
let frVoice = null, voiceWarned = false;
const allVoices = () => { try { return speechSynthesis.getVoices(); } catch (e) { return []; } };
const frVoices = () => allVoices().filter(v => /^fr([-_]|$)/i.test(v.lang) || /fran[cç]ais|french/i.test(v.name));
function pickVoice() {
  const vs = frVoices(), pref = S.settings.voice;
  frVoice = vs.find(v => v.voiceURI === pref) || vs.find(v => /fr[-_]FR/i.test(v.lang) && /google|premium|enhanced|natural|online|siri/i.test(v.name)) || vs.find(v => /fr[-_]FR/i.test(v.lang)) || vs[0] || null;
}
try { pickVoice(); speechSynthesis.addEventListener("voiceschanged", () => { pickVoice(); if (location.hash === "#einstellungen" && !PL) vSettings(); }); } catch (e) {}
function speak(t, rate = .92) {
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(String(t).replace(/…|\(.*?\)/g, "").replace(/ \/ /g, ", "));
    if (!frVoice) pickVoice();
    if (frVoice) { u.voice = frVoice; u.lang = frVoice.lang.replace("_", "-"); } else u.lang = "fr-FR";
    u.rate = rate;
    if (!frVoice && allVoices().length && !voiceWarned) { voiceWarned = true; toast("Keine französische Stimme gefunden – siehe Einstellungen."); }
    speechSynthesis.speak(u);
  } catch (e) {}
}
let AC = null;
function sfx(kind) {
  if (!S.settings.sound) return;
  try {
    AC = AC || new (window.AudioContext || window.webkitAudioContext)();
    const seq = { ok:[[660,.0],[880,.09]], bad:[[220,.0],[180,.12]], done:[[523,0],[659,.1],[784,.2],[1047,.3]], tap:[[520,0]] }[kind] || [];
    seq.forEach(([f, t]) => {
      const o = AC.createOscillator(), g = AC.createGain();
      o.type = kind === "bad" ? "triangle" : "sine"; o.frequency.value = f;
      g.gain.setValueAtTime(.0001, AC.currentTime + t); g.gain.exponentialRampToValueAtTime(kind === "tap" ? .05 : .14, AC.currentTime + t + .02);
      g.gain.exponentialRampToValueAtTime(.0001, AC.currentTime + t + .22);
      o.connect(g); g.connect(AC.destination); o.start(AC.currentTime + t); o.stop(AC.currentTime + t + .25);
    });
  } catch (e) {}
}
const reduceMotion = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
function confetti() {
  if (reduceMotion()) return;
  const c = document.createElement("canvas"); c.className = "confetti"; document.body.appendChild(c);
  const x = c.getContext("2d"), W = c.width = innerWidth * devicePixelRatio, H = c.height = innerHeight * devicePixelRatio;
  const cols = ["#2F5BEA","#E5484D","#F5B301","#18A35B","#8B5CF6","#06B6D4"];
  const ps = Array.from({ length:140 }, () => ({ x:W / 2, y:H * .35, vx:(Math.random() - .5) * 26 * devicePixelRatio, vy:(-Math.random() * 22 - 6) * devicePixelRatio, r:Math.random() * 6 + 4, c:rnd(cols), a:Math.random() * 6, va:(Math.random() - .5) * .4 }));
  let f = 0;
  (function tick() {
    x.clearRect(0, 0, W, H);
    ps.forEach(p => { p.vy += .7 * devicePixelRatio; p.vx *= .985; p.x += p.vx; p.y += p.vy; p.a += p.va; x.save(); x.translate(p.x, p.y); x.rotate(p.a); x.fillStyle = p.c; x.fillRect(-p.r, -p.r / 2, p.r * 2 * devicePixelRatio / 1.5, p.r * devicePixelRatio / 1.5); x.restore(); });
    if (++f < 150) requestAnimationFrame(tick); else c.remove();
  })();
}
function toast(msg) {
  const t = document.createElement("div"); t.className = "toast"; t.textContent = msg; document.body.appendChild(t);
  setTimeout(() => t.classList.add("out"), 1900); setTimeout(() => t.remove(), 2400);
}

/* ═══════════ Inhalte aufbereiten ═══════════ */
const frSpan = (fr, de, cls = "") => `<span class="fr ${cls}" ${de ? `data-de="${esc(de)}"` : ""}>${esc(fr)}</span>`;
const spk = t => `<button class="spk" data-say="${esc(t)}" aria-label="Vorlesen">${I("speaker")}</button>`;
function ruleHtml(h) {
  return h.replace(/\[([^\]|]+)\|([^\]]+)\]/g, (_, fr, de) => `<span class="exi"><span class="fr" data-de="${esc(de)}">${esc(fr)}</span>${spk(fr)}<span class="exde">${esc(de)}</span></span>`);
}
function verbTable(v, tense = "pres") {
  const forms = conjugate(v, tense);
  return `<div class="vt"><div class="vt-h"><b class="fr">${esc(v.inf)}</b><span>${esc(v.de)}</span>${spk(forms.map((f, i) => withPronoun(i, f[0])).join(", "))}</div>
  ${forms.map((f, i) => `<div class="vt-r"><span class="vt-p">${i === 0 && /^[aeiouéèêh]/.test(f[0]) ? "j'" : PRONOUNS[i]}</span><b class="fr">${esc(f[0].replace("(e)", "(e)"))}</b></div>`).join("")}</div>`;
}
function fillVerbGrids(root) { $$(".verbgrid", root).forEach(g => { g.innerHTML = g.dataset.verbs.split(" ").map(inf => VERBS.find(v => v.inf === inf)).filter(Boolean).map(v => verbTable(v)).join(""); }); }

function parseItems(kind, text, extra = {}) {
  return text.trim().split("\n").map(l => l.trim()).filter(Boolean).map(l => {
    const p = l.split(" | ").map(s => s.trim());
    if (kind === "gap") {
      let s = p[0], sit = null; const m = s.match(/^\{(.+?)\}\s*/); if (m) { sit = m[1]; s = s.slice(m[0].length); }
      return { k:"gap", s, sit, a:(p[1] || "").split(" ; ").map(x => x.split(" / ").map(t => t.trim())), de:p[2], ex:p[3], ...extra };
    }
    if (kind === "mc") {
      const o = (p[1] || "").split(" ~ ").map(s => s.trim()); const c = o.find(x => x.startsWith("*")).slice(1);
      return { k:"mc", q:p[0], o:o.map(x => x.replace(/^\*/, "")), c, de:p[2], ex:p[3], ...extra };
    }
    if (kind === "order") return { k:"order", s:p[0], de:p[1], extra:(p[2] || "").split(" ").filter(x => x.startsWith("+")).map(x => x.slice(1)), ...extra };
    if (kind === "tr") { const [de, fr] = l.split(" => "); return { k:"tr", q:de.trim(), a:fr.split(" // ").map(s => s.trim()), ...extra }; }
    if (kind === "tf") { const [q, rest] = l.split(" => "); const r = rest.split(" | "); return { k:"tf", q:q.trim(), a:r[0].split(" // ").map(s => s.trim()), de:r[1], ...extra }; }
  });
}

/* Kurse zusammenstellen */
const COLORS = ["blue","teal","orange","pink","violet","green","red","amber","cyan","lime","indigo"];
const c10 = COURSES.find(c => c.id === "c10"); c10.lessons = MARKET_LESSONS;
const c9 = COURSES.find(c => c.id === "c9"); c9.lessons = TEXTS.map(t => ({ id:"r-" + t.id, t:t.title, k:"read", text:t.id, sub:t.focus }));
function vocabLessons(set) {
  const out = [], n = Math.ceil(set.list.length / 10);
  for (let i = 0; i < n; i++) {
    const from = i * 10 + 1, to = Math.min(set.list.length, (i + 1) * 10);
    out.push({ id:`v-${set.id}-${i}a`, t:`Wörter ${from}–${to}: Kennenlernen`, k:"vlearn", set:set.id, chunk:i, sec:i === 0 ? set.title : null });
    out.push({ id:`v-${set.id}-${i}b`, t:`Wörter ${from}–${to}: Schreiben`, k:"vwrite", set:set.id, chunk:i });
  }
  out.push({ id:`v-${set.id}-hear`, t:"Hörtraining", k:"vlisten", set:set.id });
  out.push({ id:`v-${set.id}-match`, t:"Paare finden", k:"vmatch", set:set.id });
  out.push({ id:`v-${set.id}-test`, t:"Großer Vokabeltest", k:"vtest", set:set.id, boss:1 });
  return out;
}
const c8 = COURSES.find(c => c.id === "c8"); c8.lessons = c8.sets.flatMap(id => vocabLessons(setById(id)));
COURSES.forEach(c => { if (!c.kind && c.lessons) c.lessons.push({ id:c.id + "-test", t:"Thementest", k:"mix", boss:1 }); });
function vocabCourses() {
  return allSets().map((s, i) => ({ id:"v-" + s.id, kind:"vocabset", set:s.id, group:"vocab", icon:s.icon, color:s.exam ? "amber" : COLORS[(i + 2) % COLORS.length], title:s.title, short:s.title, fr:s.de, band:s.band, lessons:vocabLessons(s), rules:[] }));
}
let VCOURSES = vocabCourses();
const allCourses = () => [...COURSES, ...VCOURSES];
const getCourse = id => allCourses().find(c => c.id === id);
function courseProgress(c) {
  const ls = c.lessons || []; let got = 0;
  ls.forEach(l => got += S.stars[l.id] || 0);
  return { got, max:ls.length * 5, pct:ls.length ? got / (ls.length * 5) : 0, done:ls.filter(l => (S.stars[l.id] || 0) > 0).length, n:ls.length };
}
const starsFor = p => p >= .95 ? 5 : p >= .85 ? 4 : p >= .7 ? 3 : p >= .5 ? 2 : p >= .25 ? 1 : 0;

/* Aufgaben einer Lektion erzeugen */
function lessonPool(course, l) {
  if (l.items) { l._p = l._p || parseItems(l.k, l.items, l.choices ? { choices:l.choices } : {}); return l._p; }
  return [];
}
function conjQuick(verbs, tense, n) {
  const vs = verbs.split(" ").map(i => VERBS.find(v => v.inf === i)).filter(Boolean);
  const all = []; vs.forEach(v => conjugate(v, tense).forEach((f, i) => all.push({ k:"conjq", v:v.inf, i, a:f, tense })));
  return sample(all, n);
}
function vocabItems(l) {
  const set = setById(l.set); const list = set.list;
  const chunk = l.chunk != null ? list.slice(l.chunk * 10, l.chunk * 10 + 10) : list;
  if (l.k === "vlearn") return shuffle(chunk).map(w => ({ k:"vmc", w:w.id, dir:"fd" }));
  if (l.k === "vwrite") return shuffle(chunk).map(w => ({ k:"vtype", w:w.id }));
  if (l.k === "vlisten") return sample(list, 10).map(w => ({ k:"vlisten", w:w.id }));
  if (l.k === "vmatch") return [0, 1, 2].map(() => ({ k:"match", ws:sample(list, 6).map(w => w.id) }));
  if (l.k === "vtest") return sample(list, 15).map((w, i) => i % 3 === 0 ? { k:"vtype", w:w.id } : { k:"vmc", w:w.id, dir:i % 3 === 1 ? "fd" : "df" });
  return [];
}
function dialogItems() {
  const [p1, p2, p3, p4] = sample(PRODUCTS, 4);
  const total = p1.price + p2.price + p3.price, bill = total <= 10 ? 10 : 20;
  const de4 = /^[aeiouéœh]/i.test(p4.noun) ? "d'" + p4.noun : "de " + p4.noun;
  const steps = [
    { v:"Bonjour ! Vous désirez ?", o:[`*Bonjour Monsieur ! Je voudrais ${p1.q}, s'il vous plaît.`, `Bonjour ! Je voudrais ${p1.bad}, s'il vous plaît.`, "Au revoir, Monsieur !"], ex:"Nach einer Mengenangabe steht nur de – ohne Artikel." },
    { v:"Voilà. Et avec ça ?", o:[`*Avez-vous ${p2.part} ?`, `Avez-tu ${p2.part} ?`, `Vous avez-vous ${p2.part} ?`], ex:"Inversion: Verb und Pronomen tauschen → Avez-vous … ?" },
    { v:"Oui, bien sûr. Combien en voulez-vous ?", o:[`*${cap(p2.q)}, s'il vous plaît.`, `${cap(p2.bad)}, s'il vous plaît.`, "Je voudrais combien."], ex:"Mengenangabe + de, ohne Artikel." },
    { v:"Très bien. Il vous faut autre chose ?", o:[`*Oui, il me faut aussi ${p3.q}.`, `Oui, je faut aussi ${p3.q}.`, `Oui, il faut moi ${p3.q}.`], ex:"il me faut = ich brauche. „il faut“ gibt es nur mit il." },
    { v:"Voilà. C'est tout ?", o:[`*Non. Avez-vous aussi ${p4.part} ?`, `Non. Avez-vous aussi ${p4.bad} ?`, "Non. Vous désirez ?"], ex:"Den Satz „Vous désirez ?“ sagt der Verkäufer, nicht der Kunde." },
    { v:`Ah, désolé, je n'ai plus ${de4}.`, o:["*Ce n'est pas grave. Alors, c'est tout.", "Ce n'est pas grave. Je voudrais aussi " + p4.part + ".", "Merci, c'est tout pas."], ex:"Der Verkäufer hat es nicht mehr, also passt „Ce n'est pas grave“." },
    { v:"(Du möchtest wissen, wie viel du bezahlen musst.)", o:["*Ça fait combien ?", "Ça fait quel ?", "Combien tu fais ?"], ex:"Ça fait combien ? = Wie viel macht das?" },
    { v:`Ça fait ${NUMW[total]} euros, s'il vous plaît.`, o:[`*Voilà ${NUMW[bill]} euros.`, "Voilà votre monnaie.", "Bonjour, Madame !"], ex:"„Voilà votre monnaie“ sagt der Verkäufer, wenn er das Wechselgeld gibt." },
    { v:"Merci ! Et voilà votre monnaie. Bonne journée !", o:["*Merci, au revoir ! Bonne journée à vous aussi !", "Salut, à plus !", "Bonjour, Monsieur !"], ex:"„Salut, à plus“ ist zu locker für einen Verkäufer – sag „au revoir“." }
  ];
  return steps.map(s => { const c = s.o.find(x => x.startsWith("*")).slice(1); return { k:"mc", chat:s.v, q:"Was antwortest du?", o:s.o.map(x => x.replace(/^\*/, "")), c, ex:s.ex }; });
}
function readingItems(tid) {
  const t = TEXTS.find(x => x.id === tid);
  const qs = t.q.trim().split("\n").map(l => {
    const m = l.match(/^(tf|mc):\s*(.+)$/); const p = m[2].split(" | ");
    if (m[1] === "tf") return { k:"mc", q:p[0], o:["vrai","faux"], c:p[1].trim(), ex:p[2], text:tid, keep:1 };
    const o = p[1].split(" ~ "); return { k:"mc", q:p[0], o:o.map(x => x.replace(/^\*/, "").trim()), c:o.find(x => x.startsWith("*")).slice(1).trim(), text:tid };
  });
  return [{ k:"readtext", text:tid, noScore:1 }, ...qs];
}
function buildItems(course, l) {
  if (l.k === "conj") return l.verbs.split(" ").map(inf => ({ k:"conj", v:inf, tense:l.tense }));
  if (l.k === "conjq") return conjQuick(l.verbs, l.tense, l.n || 12);
  if (["vlearn","vwrite","vlisten","vmatch","vtest"].includes(l.k)) return vocabItems(l);
  if (l.k === "dialog") return dialogItems();
  if (l.k === "read") return readingItems(l.text);
  if (l.k === "mix") {
    const pool = course.lessons.filter(x => x.items).flatMap(x => lessonPool(course, x));
    const conj = course.lessons.find(x => x.k === "conjq" || x.k === "conj");
    let items = sample(pool, conj ? 9 : 12);
    if (conj) items = shuffle([...items, ...conjQuick(conj.verbs, conj.tense, 3)]);
    return items;
  }
  if (l.k === "verbdrill") return [{ k:"conj", v:l.v, tense:l.tense }, ...conjQuick(l.v, l.tense, 6)];
  if (l.k === "cards") return l.words.map(id => ({ k:"card", w:id }));
  const pool = lessonPool(course, l);
  return sample(pool, Math.min(pool.length, l.n || 10));
}

/* ═══════════ Aufgaben-Renderer ═══════════ */
const R = {};
const inputAttrs = `autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false"`;
function sitTag(it) { return it.sit ? `<div class="sit">${I("pin")}<span>${esc(it.sit)}</span></div>` : ""; }

R.gap = (it, el, ctx) => {
  const parts = it.s.split("___");
  let h = sitTag(it) + `<p class="sentence fr" data-de="${esc(it.de || "")}">`;
  parts.forEach((p, i) => { h += esc(p); if (i < parts.length - 1) { const w = Math.max(3, ...it.a[i].map(x => x.length)) + 1.5; h += `<input class="gapin tin" data-i="${i}" style="width:${w}ch" ${inputAttrs} aria-label="Lücke ${i + 1}">`; } });
  h += "</p>";
  if (it.choices) h += `<div class="chipbank">${it.choices.map(c => `<button type="button" class="chip" data-v="${esc(c)}">${esc(c)}</button>`).join("")}</div>`;
  el.innerHTML = h;
  const ins = $$(".gapin", el); let last = ins[0];
  ins.forEach(x => { x.addEventListener("focus", () => last = x); x.addEventListener("input", ctx.changed); x.addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); const nx = ins[ins.indexOf(x) + 1]; if (nx) nx.focus(); else ctx.enter(); } }); });
  $$(".chip", el).forEach(b => b.onclick = () => {
    const t = (last && !last.value) ? last : ins.find(x => !x.value) || last;
    t.value = b.dataset.v; t.classList.remove("popped"); void t.offsetWidth; t.classList.add("popped"); sfx("tap");
    last = ins.find(x => !x.value) || t; ctx.changed();
  });
  return {
    ready: () => ins.every(x => x.value.trim()),
    focus: () => { if (!it.choices && ctx.mode === "lesson") ins[0]?.focus({ preventScroll:true }); },
    check() {
      let sc = 0, msg = null;
      ins.forEach((x, i) => { const g = grade(x.value, it.a[i]); sc += g.score; if (g.msg) msg = g.msg; x.classList.add(g.score === 1 ? "ok" : g.score > 0 ? "half" : "bad"); x.disabled = true; if (g.score < 1) x.insertAdjacentHTML("afterend", `<span class="corr">${esc(it.a[i][0])}</span>`); });
      let k = 0; const sol = esc(it.s).replace(/___/g, () => `<b>${esc(it.a[k++][0])}</b>`);
      return { ratio:sc / ins.length, sol, de:it.de, ex:it.ex, msg };
    }
  };
};

R.mc = (it, el, ctx) => {
  const opts = it.keep ? it.o : shuffle(it.o);
  const qfr = !isGerman(it.q);
  let h = sitTag(it);
  if (it.chat) h += `<div class="chatline"><div class="avatar">${I("basket")}</div><div class="bubble fr" data-de="">${esc(it.chat)}${spk(it.chat)}</div></div>`;
  if (it.text && ctx.mode === "lesson") h += `<button type="button" class="ghost sm showtext">${I("book")} Text ansehen</button>`;
  h += `<p class="sentence ${qfr ? "fr" : ""}" ${it.de ? `data-de="${esc(it.de)}"` : ""}>${esc(it.q).replace(/___/g, '<span class="blank">___</span>')}</p>`;
  h += `<div class="opts ${opts.every(o => o.length < 14) ? "grid2" : ""}">${opts.map((o, i) => `<button type="button" class="opt ${isGerman(o) ? "" : "fr"}" data-o="${esc(o)}"><span class="key">${"ABCD"[i]}</span><span>${esc(o)}</span></button>`).join("")}</div>`;
  el.innerHTML = h;
  let sel = null;
  $$(".opt", el).forEach(b => b.onclick = () => { if (b.disabled) return; $$(".opt", el).forEach(x => x.classList.remove("sel")); b.classList.add("sel"); sel = b.dataset.o; sfx("tap"); ctx.changed(); if (ctx.mode === "lesson") ctx.enter(); });
  const st = $(".showtext", el); if (st) st.onclick = () => showTextSheet(it.text);
  return {
    ready: () => sel != null,
    keys: k => { const b = $$(".opt", el)[k]; if (b) b.click(); },
    check() {
      const ok = sel === it.c;
      $$(".opt", el).forEach(b => { b.disabled = true; if (b.dataset.o === it.c) b.classList.add("ok"); else if (b.dataset.o === sel) b.classList.add("bad"); });
      const sol = it.q.includes("___") ? esc(it.q).replace("___", `<b>${esc(it.c)}</b>`) : `<b>${esc(it.c)}</b>`;
      return { ratio:ok ? 1 : 0, sol, de:it.de, ex:it.ex };
    }
  };
};

function tokenize(s) {
  let words = s.split(/\s+/).filter(Boolean), punct = "";
  while (words.length && /^[?!.]$/.test(words[words.length - 1])) punct = words.pop() + punct;
  const m = words[words.length - 1].match(/^(.*?)([.!?]+)$/); if (m && m[1]) { words[words.length - 1] = m[1]; punct = m[2] + punct; }
  return { words, punct };
}
R.order = (it, el, ctx) => {
  const { words, punct } = tokenize(it.s);
  const bank = shuffle([...words, ...(it.extra || [])].map((w, i) => ({ w, i })));
  const placed = [];
  el.innerHTML = `<p class="prompt-de">${esc(it.de || "")}</p><div class="line" aria-label="Dein Satz"></div><div class="bank"></div>`;
  const line = $(".line", el), bk = $(".bank", el);
  function draw() {
    line.innerHTML = placed.map(k => `<button type="button" class="tok fr in" data-k="${k}">${esc(bank[k].w)}</button>`).join("") + (punct ? `<span class="punct">${esc(punct)}</span>` : "");
    bk.innerHTML = bank.map((t, k) => `<button type="button" class="tok fr ${placed.includes(k) ? "used" : ""}" data-k="${k}" ${placed.includes(k) ? 'tabindex="-1"' : ""}>${esc(t.w)}</button>`).join("");
    $$(".tok", line).forEach(b => b.onclick = () => { if (done) return; placed.splice(placed.indexOf(+b.dataset.k), 1); sfx("tap"); draw(); ctx.changed(); });
    $$(".tok:not(.used)", bk).forEach(b => b.onclick = () => { if (done) return; placed.push(+b.dataset.k); sfx("tap"); draw(); ctx.changed(); });
  }
  let done = false; draw();
  return {
    ready: () => placed.length >= words.length,
    check() {
      done = true;
      const ans = placed.map(k => bank[k].w).join(" ");
      const ok = normBase(ans) === normBase(words.join(" "));
      line.classList.add(ok ? "ok" : "bad");
      return { ratio:ok ? 1 : 0, sol:esc(it.s), de:it.de };
    }
  };
};

function textInputItem(it, el, ctx, promptHtml) {
  el.innerHTML = `${promptHtml}<div class="tinwrap"><input class="tin big" ${inputAttrs} placeholder="Deine Antwort …" aria-label="Antwort"></div>`;
  const inp = $(".tin", el);
  inp.addEventListener("input", ctx.changed);
  inp.addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); ctx.enter(); } });
  return {
    ready: () => !!inp.value.trim(),
    focus: () => { if (ctx.mode === "lesson") inp.focus({ preventScroll:true }); },
    check() {
      const g = grade(inp.value, it.a, it.partial ? { partial:it.partial, partialMsg:it.partialMsg } : {});
      inp.classList.add(g.score === 1 ? "ok" : g.score > 0 ? "half" : "bad"); inp.disabled = true;
      return { ratio:g.score, sol:`<span class="fr">${esc(it.a[0])}</span>`, de:it.de, msg:g.msg, ex:it.ex };
    }
  };
}
R.tr = (it, el, ctx) => textInputItem(it, el, ctx, `<p class="prompt-de big">${esc(it.q)}</p>`);
R.tf = (it, el, ctx) => textInputItem(it, el, ctx, `<p class="sentence fr">${esc(it.q)}</p>`);

R.conj = (it, el, ctx) => {
  const v = VERBS.find(x => x.inf === it.v), forms = conjugate(v, it.tense);
  const tname = { pres:"Präsens", pc:"Passé composé", fut:"Futur composé" }[it.tense];
  el.innerHTML = `<div class="conjhead"><b class="fr">${esc(v.inf)}</b> <span>${esc(v.de)}</span><span class="pill">${tname}</span></div>
  <div class="conjtbl">${forms.map((f, i) => `<label class="cj"><span class="cj-p">${i === 0 && /^[aeiouéèêh]/.test(f[0]) ? "j'" : PRONOUNS[i]}</span><input class="tin" data-i="${i}" ${inputAttrs} aria-label="${PRONOUNS[i]}"></label>`).join("")}</div>`;
  const ins = $$(".tin", el);
  ins.forEach((x, i) => { x.addEventListener("input", ctx.changed); x.addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); if (ins[i + 1]) ins[i + 1].focus(); else ctx.enter(); } }); });
  return {
    ready: () => ins.every(x => x.value.trim()),
    focus: () => { if (ctx.mode === "lesson") ins[0].focus({ preventScroll:true }); },
    check() {
      let sc = 0, msg = null;
      ins.forEach((x, i) => { const acc = forms[i].map(f => f.replace(/^j'/, "")); const g = grade(x.value.replace(/^(je |j'|tu |elles |ils |elle |il |on |nous |vous )/i, ""), acc); sc += g.score; if (g.msg) msg = g.msg; x.classList.add(g.score === 1 ? "ok" : g.score ? "half" : "bad"); x.disabled = true; if (g.score < 1) x.insertAdjacentHTML("afterend", `<span class="corr">${esc(forms[i][0])}</span>`); });
      return { ratio:sc / 6, sol:`<span class="fr">${forms.map((f, i) => esc(withPronoun(i, f[0]))).join(", ")}</span>`, msg };
    }
  };
};
R.conjq = (it, el, ctx) => {
  const v = VERBS.find(x => x.inf === it.v);
  const pro = it.i === 0 && /^[aeiouéèêh]/.test(it.a[0]) ? "j'" : ["je","tu","il / elle","nous","vous","ils / elles"][it.i];
  const tname = { pres:"Präsens", pc:"Passé composé", fut:"Futur composé" }[it.tense];
  return textInputItem({ a:it.a, de:`${v.inf} = ${v.de}` }, el, ctx, `<div class="conjq"><span class="pill">${tname}</span><p class="sentence"><span class="fr">${esc(pro)}</span> <span class="blank">___</span> <span class="hint">(${esc(v.inf)})</span></p></div>`);
};

function wordDistractors(w, field, n = 3) {
  const set = setById(w.set); let pool = set.list.filter(x => x[field] !== w[field]);
  if (pool.length < n) pool = Object.values(WORDS).filter(x => x[field] !== w[field]);
  return sample(pool, n).map(x => x[field]);
}
R.vmc = (it, el, ctx) => {
  const w = WORDS[it.w];
  const fd = it.dir === "fd";
  const item = { q:fd ? w.fr : w.de, o:[fd ? w.de : w.fr, ...wordDistractors(w, fd ? "de" : "fr")], c:fd ? w.de : w.fr };
  el.innerHTML = `<div class="wordcard ${fd ? "fr" : ""}"><span class="wc-l">${fd ? "Was bedeutet …" : "Wie heißt auf Französisch …"}</span><b>${esc(item.q)}</b>${fd ? spk(w.fr) : ""}</div>
  <div class="opts">${shuffle(item.o).map((o, i) => `<button type="button" class="opt ${fd ? "" : "fr"}" data-o="${esc(o)}"><span class="key">${"ABCD"[i]}</span><span>${esc(o)}</span></button>`).join("")}</div>`;
  if (fd && ctx.mode === "lesson") setTimeout(() => speak(w.fr), 250);
  let sel = null;
  $$(".opt", el).forEach(b => b.onclick = () => { if (b.disabled) return; $$(".opt", el).forEach(x => x.classList.remove("sel")); b.classList.add("sel"); sel = b.dataset.o; ctx.changed(); if (ctx.mode === "lesson") ctx.enter(); });
  return {
    ready: () => sel != null,
    keys: k => $$(".opt", el)[k]?.click(),
    check() {
      const ok = sel === item.c; leit(w.id, ok); if (!fd) speak(w.fr);
      $$(".opt", el).forEach(b => { b.disabled = true; if (b.dataset.o === item.c) b.classList.add("ok"); else if (b.dataset.o === sel) b.classList.add("bad"); });
      return { ratio:ok ? 1 : 0, sol:`<span class="fr">${esc(w.fr)}</span> = ${esc(w.de)}` };
    }
  };
};
R.vtype = (it, el, ctx) => {
  const w = WORDS[it.w];
  const acc = frAccepted(w.fr);
  const noArt = acc.filter(a => ARTRE.test(a)).map(a => a.replace(ARTRE, ""));
  const c = textInputItem({ a:acc, partial:noArt, partialMsg:"Fast! Lern das Wort mit Artikel." }, el, ctx, `<div class="wordcard"><span class="wc-l">Schreib auf Französisch</span><b>${esc(w.de)}</b></div>`);
  const orig = c.check;
  c.check = () => { const r = orig(); leit(w.id, r.ratio === 1); speak(w.fr); r.sol = `<span class="fr">${esc(w.fr)}</span>`; return r; };
  return c;
};
R.vlisten = (it, el, ctx) => {
  const w = WORDS[it.w];
  const o = shuffle([w.de, ...wordDistractors(w, "de")]);
  el.innerHTML = `<div class="listen"><button type="button" class="bigplay" aria-label="Abspielen">${I("speaker")}</button><button type="button" class="ghost sm slow">Langsam</button><span class="wc-l">Was hörst du?</span></div>
  <div class="opts">${o.map((x, i) => `<button type="button" class="opt" data-o="${esc(x)}"><span class="key">${"ABCD"[i]}</span><span>${esc(x)}</span></button>`).join("")}</div>`;
  $(".bigplay", el).onclick = () => speak(w.fr); $(".slow", el).onclick = () => speak(w.fr, .6);
  if (ctx.mode === "lesson") setTimeout(() => speak(w.fr), 300);
  let sel = null;
  $$(".opt", el).forEach(b => b.onclick = () => { if (b.disabled) return; $$(".opt", el).forEach(x => x.classList.remove("sel")); b.classList.add("sel"); sel = b.dataset.o; ctx.changed(); ctx.enter(); });
  return {
    ready: () => sel != null,
    keys: k => $$(".opt", el)[k]?.click(),
    check() { const ok = sel === w.de; leit(w.id, ok); $$(".opt", el).forEach(b => { b.disabled = true; if (b.dataset.o === w.de) b.classList.add("ok"); else if (b.dataset.o === sel) b.classList.add("bad"); }); return { ratio:ok ? 1 : 0, sol:`<span class="fr">${esc(w.fr)}</span> = ${esc(w.de)}` }; }
  };
};
R.match = (it, el, ctx) => {
  const ws = it.ws.map(id => WORDS[id]);
  const L = shuffle(ws), Rr = shuffle(ws);
  el.innerHTML = `<p class="prompt-de">Tippe die Paare an, die zusammengehören.</p><div class="match"><div class="mcol">${L.map(w => `<button type="button" class="mt fr" data-id="${w.id}" data-s="l">${esc(w.fr)}</button>`).join("")}</div><div class="mcol">${Rr.map(w => `<button type="button" class="mt" data-id="${w.id}" data-s="r">${esc(w.de.split(";")[0])}</button>`).join("")}</div></div>`;
  let a = null, mistakes = 0, found = 0;
  $$(".mt", el).forEach(b => b.onclick = () => {
    if (b.classList.contains("done")) return;
    if (!a || a.dataset.s === b.dataset.s) { $$(".mt.sel", el).forEach(x => x.classList.remove("sel")); a = b; b.classList.add("sel"); if (b.dataset.s === "l") speak(WORDS[b.dataset.id].fr); return; }
    if (a.dataset.id === b.dataset.id) {
      [a, b].forEach(x => { x.classList.remove("sel"); x.classList.add("done"); }); sfx("ok"); found++; leit(b.dataset.id, true);
      if (found === ws.length) setTimeout(() => ctx.enter(), 450);
    } else { [a, b].forEach(x => { x.classList.remove("sel"); x.classList.add("shake"); setTimeout(() => x.classList.remove("shake"), 450); }); mistakes++; sfx("bad"); }
    a = null; ctx.changed();
  });
  return { ready: () => found === ws.length, check: () => ({ ratio:Math.max(0, 1 - mistakes * .15), sol:mistakes ? `${mistakes} Fehlversuch${mistakes > 1 ? "e" : ""}` : "Alle Paare ohne Fehler!", silent:1 }) };
};
function textHtml(t) {
  return `<article class="reading"><h3 class="fr">${esc(t.title)}</h3><p class="rd-sub">${esc(t.de)} · ${esc(t.focus)}</p>${t.body.trim().split("\n").map(l => { const [fr, de] = l.split(" | "); return `<span class="fr rs" data-de="${esc(de)}">${esc(fr)}</span> `; }).join("")}<div class="rd-tools"><button type="button" class="ghost sm readall">${I("speaker")} Ganzen Text vorlesen</button><button type="button" class="ghost sm toggle-de">${I("eye")} Übersetzung zeigen</button></div><div class="rd-de" hidden>${t.body.trim().split("\n").map(l => esc(l.split(" | ")[1])).join(" ")}</div></article>`;
}
function wireText(root, t) {
  const ra = $(".readall", root); if (ra) ra.onclick = () => speak(t.body.trim().split("\n").map(l => l.split(" | ")[0]).join(" "));
  const td = $(".toggle-de", root); if (td) td.onclick = () => { const d = $(".rd-de", root); d.hidden = !d.hidden; td.lastChild.textContent = d.hidden ? " Übersetzung zeigen" : " Übersetzung ausblenden"; };
}
R.readtext = (it, el, ctx) => {
  const t = TEXTS.find(x => x.id === it.text);
  el.innerHTML = `<div class="tip-dbl">${I("pointer")} Doppeltippe auf ein Wort, um es zu übersetzen.</div>` + textHtml(t);
  wireText(el, t);
  return { ready: () => true, check: () => ({ ratio:1, skip:1 }) };
};
R.card = (it, el, ctx) => {
  const w = WORDS[it.w];
  el.innerHTML = `<div class="flip" tabindex="0"><div class="flip-in"><div class="face front fr"><b>${esc(w.fr)}</b>${spk(w.fr)}<span class="wc-l">Tippen zum Umdrehen</span></div><div class="face back"><b>${esc(w.de)}</b><span class="fr small">${esc(w.fr)}</span></div></div></div>
  <div class="cardbtns" hidden><button type="button" class="btn bad-b" data-r="0">${I("refresh")} Nochmal</button><button type="button" class="btn good-b" data-r="1">${I("check")} Gewusst</button></div>`;
  const f = $(".flip", el); let res = null;
  setTimeout(() => speak(w.fr), 200);
  const flip = () => { f.classList.toggle("turned"); $(".cardbtns", el).hidden = false; };
  f.onclick = e => { if (e.target.closest(".spk")) return; flip(); };
  f.onkeydown = e => { if (e.key === " " || e.key === "Enter") { e.preventDefault(); flip(); } };
  $$(".cardbtns .btn", el).forEach(b => b.onclick = () => { res = +b.dataset.r; leit(w.id, !!res); ctx.enter(); });
  return { ready: () => res != null, check: () => ({ ratio:res, silent:1, sol:"" }), selfButtons:1 };
};

/* ═══════════ Lektions-Player ═══════════ */
let PL = null;
const PRAISE = ["Super !","Génial !","Bravo !","Parfait !","Très bien !","Excellent !","Chapeau !"];
function openLesson(courseId, lessonId, opt = {}) {
  const course = getCourse(courseId); const l = opt.lesson || course.lessons.find(x => x.id === lessonId);
  if (l.k === "write") return openWrite(courseId, l);
  const items = opt.items || buildItems(course, l);
  if (!items.length) { toast("Für diese Aufgabe gibt es noch keine Inhalte."); return; }
  PL = { course, l, items, i:0, res:[], wrong:[], noStars:!!opt.noStars, phase:"q" };
  const ov = $("#player"); ov.hidden = false; ov.style.setProperty("--cc", `var(--c-${course.color || "blue"})`);
  document.body.classList.add("noscroll");
  $("#pl-title").textContent = l.t;
  renderStep();
}
function closeLesson() { $("#player").hidden = true; document.body.classList.remove("noscroll"); hideAccents(); PL = null; try { speechSynthesis.cancel(); } catch (e) {} route(); }
function renderStep() {
  const { items, i } = PL; const it = items[i];
  const scored = items.filter(x => !x.noScore).length;
  $("#pl-bar").style.width = `${(PL.res.length / Math.max(1, scored)) * 100}%`;
  $("#pl-count").textContent = `${Math.min(PL.res.length + 1, scored)} / ${scored}`;
  const body = $("#pl-body");
  body.innerHTML = `<div class="qcard enter"><p class="instr">${esc(instrFor(it))}</p><div class="qbody"></div></div>`;
  const host = $(".qbody", body);
  const ctx = { mode:"lesson", changed:() => updateCheckBtn(), enter:() => { if (PL.phase === "q" && PL.ctrl.ready()) doCheck(); else if (PL.phase === "f") nextStep(); } };
  PL.ctrl = R[it.k](it, host, ctx); PL.phase = "q";
  const fb = $("#pl-feedback"); fb.className = "feedback"; fb.innerHTML = "";
  updateCheckBtn();
  $("#pl-check").hidden = !!PL.ctrl.selfButtons;
  $("#pl-idk").hidden = !!PL.ctrl.selfButtons || ["readtext", "match"].includes(it.k);
  $("#pl-check").textContent = it.k === "readtext" ? "Zu den Fragen" : "Prüfen";
  setTimeout(() => PL?.ctrl.focus?.(), 380);
  body.scrollTop = 0;
}
function instrFor(it) {
  if (it.k === "readtext") return "Lies den Text.";
  if (it.chat) return "Dialog am Markt";
  if (PL.l.d && !["vlearn","vwrite","vlisten","vmatch","vtest","mix","read"].includes(PL.l.k)) return PL.l.d;
  return { gap:"Fülle die Lücke.", mc:it.text ? "Beantworte die Frage zum Text." : "Wähle die richtige Antwort.", order:"Bilde den Satz.", tr:"Übersetze ins Französische.", tf:"Forme den Satz um.", conj:"Konjugiere das Verb.", conjq:"Setze die richtige Form ein.", vmc:"Wähle die Übersetzung.", vtype:"Schreib das Wort.", vlisten:"Hör genau hin.", match:"Finde die Paare.", card:"Karteikarte" }[it.k] || "";
}
function updateCheckBtn() { if (!PL) return; const b = $("#pl-check"); b.disabled = PL.phase === "q" && !PL.ctrl.ready(); }
function doCheck(idk = false) {
  const it = PL.items[PL.i];
  const r = PL.ctrl.check(); PL.phase = "f";
  if (idk) r.ratio = 0;
  $("#pl-idk").hidden = true;
  hideAccents();
  if (!r.skip) { PL.res.push(r.ratio); if (r.ratio < 1) PL.wrong.push(it); }
  if (r.skip) return nextStep();
  const fb = $("#pl-feedback");
  const good = r.ratio === 1, half = r.ratio > 0 && r.ratio < 1;
  if (!r.silent && !idk) sfx(good ? "ok" : "bad");
  if (it.k === "card" || (it.k === "match")) { nextStep(); return; }
  fb.className = `feedback show ${good ? "good" : half ? "half" : "bad"}`;
  fb.innerHTML = `<div class="fb-in"><div class="fb-head">${good ? I("check") : half ? I("bulb") : I("close")}<b>${good ? rnd(PRAISE) : half ? "Fast richtig!" : idk ? "Kein Problem – so geht's:" : "Leider falsch"}</b></div>
   ${!good && r.sol ? `<div class="fb-sol"><span>${idk ? "Lösung:" : "Richtig:"}</span> ${r.sol}</div>` : good && r.sol && it.k !== "vmc" ? `<div class="fb-sol okk">${r.sol}</div>` : ""}
   ${r.msg ? `<div class="fb-msg">${esc(r.msg)}</div>` : ""}
   ${r.de ? `<div class="fb-de">${esc(r.de)}</div>` : ""}
   ${r.ex ? `<div class="fb-ex">${I("bulb")} ${esc(r.ex)}</div>` : ""}
   ${PL.l.tip != null && !good && PL.course.rules?.[PL.l.tip] ? `<button type="button" class="ghost sm fb-rule">${I("book")} Regel ansehen</button>` : ""}
   <button type="button" class="btn ${good ? "good-b" : "bad-b"} fb-next">Weiter</button></div>`;
  $(".fb-next", fb).onclick = nextStep;
  const fr = $(".fb-rule", fb); if (fr) fr.onclick = () => showRuleSheet(PL.course, PL.l.tip);
  $("#pl-check").hidden = true;
  setTimeout(() => $(".fb-next", fb)?.focus({ preventScroll:true }), 50);
}
function nextStep() {
  if (!PL) return;
  PL.i++;
  if (PL.i >= PL.items.length) return finishLesson();
  $("#pl-check").hidden = false;
  renderStep();
}
function finishLesson() {
  const n = PL.res.length, sum = PL.res.reduce((a, b) => a + b, 0);
  const pct = n ? sum / n : 1, st = starsFor(pct);
  const prev = S.stars[PL.l.id] || 0;
  if (!PL.noStars && st > prev) S.stars[PL.l.id] = st;
  const xp = Math.round(sum * 10) + st * 4; addXP(xp); save();
  $("#pl-bar").style.width = "100%";
  sfx("done"); if (st >= 4) confetti();
  const msgs = ["Weiter üben – du schaffst das!","Ein Anfang! Schau dir die Regel nochmal an.","Ganz okay! Noch eine Runde?","Gut gemacht!","Sehr gut!","Parfait ! Alles richtig!"];
  const course = PL.course, l = PL.l, idx = course.lessons.indexOf(l), nextL = idx >= 0 ? course.lessons[idx + 1] : null;
  $("#pl-feedback").className = "feedback";
  $("#pl-check").hidden = true; $("#pl-idk").hidden = true;
  $("#pl-body").innerHTML = `<div class="result enter">
   <div class="res-stars">${Array.from({ length:5 }, (_, i) => `<svg viewBox="0 0 24 24" class="rs-star ${i < st ? "on" : ""}" style="--d:${i * 140}ms"><path d="${P.star}"/></svg>`).join("")}</div>
   <h2 class="hand">${["Oh là là …","Pas mal !","Bien !","Très bien !","Super !","Parfait !"][st]}</h2>
   <p class="res-msg">${msgs[st]}</p>
   <div class="res-stats"><div><b>${Math.round(pct * 100)}%</b><span>richtig</span></div><div><b>${Math.round(sum * 10) / 10}/${n}</b><span>Punkte</span></div><div><b>+${xp}</b><span>XP</span></div></div>
   ${!PL.noStars && st > prev && prev > 0 ? `<p class="res-new">${I("trophy")} Neuer Rekord! Vorher ${prev} Sterne.</p>` : ""}
   ${!PL.noStars && st <= prev && prev > 0 ? `<p class="res-old">Dein Rekord bleibt ${prev} Sterne.</p>` : ""}
   <div class="res-btns">
     <button type="button" class="btn" id="res-again">${I("refresh")} Ganze Aufgabe wiederholen</button>
     ${PL.wrong.length ? `<button type="button" class="btn ghost" id="res-wrong">${I("pencil")} Nur Fehler üben (${PL.wrong.length})</button>` : ""}
     ${nextL && !PL.noStars ? `<button type="button" class="btn good-b" id="res-next">${I("arrow")} Nächste Aufgabe</button>` : ""}
     <button type="button" class="btn ghost" id="res-close">Fertig</button>
   </div></div>`;
  $("#res-again").onclick = () => openLesson(course.id, l.id, { lesson:l, noStars:PL.noStars });
  const rw = $("#res-wrong"); if (rw) rw.onclick = () => { const w = PL.wrong.map(x => ({ ...x })); openLesson(course.id, l.id, { lesson:l, items:w, noStars:true }); };
  const rn = $("#res-next"); if (rn) rn.onclick = () => openLesson(course.id, nextL.id);
  $("#res-close").onclick = closeLesson;
}
function showSheet(html, cls = "") {
  const sh = $("#sheet"); $("#sheet-body").innerHTML = html; sh.className = "sheet " + cls; sh.hidden = false;
  requestAnimationFrame(() => sh.classList.add("open"));
  fillVerbGrids(sh);
}
function closeSheet() { const sh = $("#sheet"); sh.classList.remove("open"); setTimeout(() => sh.hidden = true, 250); }
function showRuleSheet(course, idx) { const r = course.rules[idx]; showSheet(`<h3>${esc(r.h)}</h3><div class="rule">${ruleHtml(r.html)}</div>`); }
function showTextSheet(tid) { const t = TEXTS.find(x => x.id === tid); showSheet(textHtml(t)); wireText($("#sheet"), t); }

/* ═══════════ Schreibwerkstatt ═══════════ */
const WRITE_CRIT = [
  { id:"greet", t:"Begrüßung (Bonjour …)", re:/\bbonjour\b/i, pts:1 },
  { id:"vend", t:"Verkäufer fragt (Vous désirez ? / Et avec ça ?)", re:/vous désirez|vous voulez|et avec ça|autre chose|qu'est-ce que vous/i, pts:1 },
  { id:"prod", t:"Alle Produkte kommen vor", pts:2 },
  { id:"qty", t:"Mengenangabe mit de (un kilo de …)", re:/\b(kilos?|grammes?|litres?|bouteilles?|paquets?|bo[iî]tes?|pots?|morceaux?|tranches?|livres?|barquettes?|douzaine|beaucoup|peu|assez|trop)\s+d(e\s|')/i, pts:1 },
  { id:"part", t:"Teilungsartikel (du, de la, de l', des)", re:/\b(du|de la|de l'|des)\s+\p{L}/iu, pts:1 },
  { id:"inv", t:"Inversionsfrage (Avez-vous … ?)", re:/\b\p{L}+-(vous|tu|t-il|t-elle|t-on|il|elle|ils|elles|nous)\b[^.!?]*\?/iu, pts:1 },
  { id:"faut", t:"il faut / il me faut", re:/\bil (me |te |vous |nous |lui |leur )?faut\b/i, pts:1 },
  { id:"price", t:"Preis nennen (… euros)", re:/(\d+|un|deux|trois|quatre|cinq|six|sept|huit|neuf|dix|onze|douze|treize|quatorze|quinze|seize|vingt)[\s-]*(euros?|€)/i, pts:1 },
  { id:"bye", t:"Verabschiedung (au revoir / bonne journée)", re:/au revoir|bonne journée|à bientôt|bonne soirée|à samedi/i, pts:1 }
];
function writeTask(seed) {
  const ps = seed || sample(PRODUCTS, 5);
  const miss = ps[4];
  const missDe = miss.de.replace(/^[\d.,]+\s*(kg|g|Kilo|Liter|Flasche|Glas|Schale|Packung|Stück|Scheiben)?\s*/i, "");
  return { ps, list:ps.slice(0, 4), miss, missDe };
}
function analyzeWriting(txt, task) {
  const words = (txt.match(/\p{L}+/gu) || []).length;
  const res = WRITE_CRIT.map(c => {
    if (c.id === "prod") { const hit = task.list.filter(p => new RegExp(p.key, "i").test(txt)).length; return { ...c, got:hit / task.list.length * c.pts, ok:hit === task.list.length, note:`${hit}/${task.list.length}` }; }
    const ok = c.re.test(txt); return { ...c, got:ok ? c.pts : 0, ok };
  });
  let pts = res.reduce((a, b) => a + b.got, 0);
  const lenF = Math.min(1, words / 60); pts = Math.round(pts * lenF * 2) / 2;
  return { res, pts, max:10, words, lenF };
}
function modelSolution(task) {
  const [p1, p2, p3, p4] = task.list; const m = task.miss;
  const pr = p2.pl ? (p2.f ? "Elles" : "Ils") : (p2.f ? "Elle" : "Il"); const adj = "bon" + (p2.f ? "ne" : "") + (p2.pl ? "s" : "");
  const total = p1.price + p2.price + p3.price + p4.price, bill = total <= 10 ? 10 : total <= 20 ? 20 : 50;
  const de4 = /^[aeiouéœh]/i.test(m.noun) ? "d'" + m.noun : "de " + m.noun;
  return [
    ["V", "Bonjour Madame ! Vous désirez ?"], ["C", `Bonjour Monsieur ! Je voudrais ${p1.q}, s'il vous plaît.`],
    ["V", "Voilà. Et avec ça ?"], ["C", `Avez-vous ${p2.part} ?`],
    ["V", `Oui, bien sûr ! ${pr} ${p2.pl ? "sont" : "est"} très ${adj} aujourd'hui. Combien en voulez-vous ?`], ["C", `${cap(p2.q)}, s'il vous plaît.`],
    ["V", "Il vous faut autre chose ?"], ["C", `Oui, il me faut aussi ${p3.q} et ${p4.q}. Et avez-vous ${m.part} ?`],
    ["V", `Ah, désolé, je n'ai plus ${de4}. Je mets tout dans votre panier ?`], ["C", "Ce n'est pas grave. Oui, merci. Ça fait combien ?"],
    ["V", `Ça fait ${total} euros, s'il vous plaît.`], ["C", `Voilà ${bill} euros.`],
    ["V", `Merci. Et voilà votre monnaie : ${bill - total} euros. Bonne journée !`], ["C", "Merci, au revoir ! Bonne journée à vous aussi !"]
  ];
}
function writeTaskHtml(task) {
  return `<div class="task"><p><b>Situation:</b> Du bist mit deiner Austauschfamilie in Lyon und kaufst auf dem Markt ein. Schreibe einen Verkaufsdialog zwischen dir (C = client/cliente) und dem Verkäufer (V). <b>Der Verkäufer hat kein(e) ${esc(task.missDe)} mehr.</b></p>
  <div class="shoplist"><span class="sl-h">Einkaufsliste</span>${task.list.map(p => `<span class="sl-i">${I("check")} ${esc(p.de)}</span>`).join("")}<span class="sl-i miss">${I("close")} ${esc(task.miss.de)} <small>(ausverkauft)</small></span></div>
  <p class="small muted">Mindestens 60 Wörter. Benutze Mengenangaben, Teilungsartikel, eine Inversionsfrage und il faut.</p></div>`;
}
function critListHtml(a) {
  return `<ul class="crit">${a.res.map(r => `<li class="${r.ok ? "ok" : r.got ? "half" : ""}">${I(r.ok ? "check" : "close")}<span>${esc(r.t)}${r.note ? ` <small>(${r.note})</small>` : ""}</span><b>${r.got ? Math.round(r.got * 10) / 10 : 0}/${r.pts}</b></li>`).join("")}<li class="${a.words >= 60 ? "ok" : ""}">${I(a.words >= 60 ? "check" : "close")}<span>Länge: ${a.words} Wörter (mind. 60)</span><b></b></li></ul>`;
}
function openWrite(courseId, l) {
  const course = getCourse(courseId);
  const task = writeTask();
  const ov = $("#player"); ov.hidden = false; ov.style.setProperty("--cc", `var(--c-${course.color})`); document.body.classList.add("noscroll");
  $("#pl-title").textContent = l.t; $("#pl-bar").style.width = "0%"; $("#pl-count").textContent = "";
  $("#pl-check").hidden = true; $("#pl-idk").hidden = true; $("#pl-feedback").className = "feedback";
  PL = { course, l, items:[], i:0, res:[], wrong:[], phase:"w" };
  const draft = S.drafts.write || "";
  $("#pl-body").innerHTML = `<div class="qcard enter writecard">${writeTaskHtml(task)}
   <details class="phrases"><summary>${I("book")} Redemittel anzeigen</summary>${phraseBankHtml()}</details>
   <textarea id="w-text" class="wtext fr-input" rows="12" placeholder="V : Bonjour Madame ! Vous désirez ?&#10;C : …" ${inputAttrs}>${esc(draft)}</textarea>
   <div class="wlive"><span id="w-count">0 Wörter</span><span id="w-pts"></span></div>
   <div id="w-crit"></div>
   <div class="res-btns"><button type="button" class="btn good-b" id="w-done">${I("check")} Abgeben & bewerten</button><button type="button" class="btn ghost" id="w-new">${I("shuffle")} Neue Einkaufsliste</button></div>
   <div id="w-model"></div></div>`;
  const ta = $("#w-text");
  const upd = () => { const a = analyzeWriting(ta.value, task); $("#w-count").textContent = `${a.words} Wörter`; $("#w-crit").innerHTML = critListHtml(a); $("#w-pts").textContent = `${a.pts} / 10 Punkte`; S.drafts.write = ta.value; save(); };
  ta.addEventListener("input", upd); upd();
  $("#w-new").onclick = () => openWrite(courseId, l);
  $("#w-done").onclick = () => {
    const a = analyzeWriting(ta.value, task); const st = starsFor(a.pts / 10);
    if (st > (S.stars[l.id] || 0)) S.stars[l.id] = st; addXP(a.pts * 3); save(); sfx("done"); if (st >= 4) confetti();
    $("#w-model").innerHTML = `<div class="wres"><div class="res-stars small">${starRow(st)}</div><p><b>${a.pts} von 10 Punkten.</b> Die App prüft Inhalt und Redemittel. Rechtschreibung und Grammatik vergleichst du selbst mit der Musterlösung.</p>
     <h4>Musterlösung</h4><div class="dialog">${modelSolution(task).map(([w, t]) => `<div class="dl ${w}"><span class="who">${w}</span><span class="fr">${esc(t)}</span>${spk(t)}</div>`).join("")}</div></div>`;
    $("#w-model").scrollIntoView({ behavior:reduceMotion() ? "auto" : "smooth", block:"start" });
  };
}
function phraseBankHtml() {
  return `<div class="pbank">${MARKET_PHRASES.map(g => `<div class="pb-g"><h5>${esc(g.g)}</h5>${g.v.map(x => { const [f, d] = x.split("|"); return `<div class="pb v"><span class="who">V</span><span class="fr" data-de="${esc(d)}">${esc(f)}</span>${spk(f)}<small>${esc(d)}</small></div>`; }).join("")}${g.c.map(x => { const [f, d] = x.split("|"); return `<div class="pb c"><span class="who">C</span><span class="fr" data-de="${esc(d)}">${esc(f)}</span>${spk(f)}<small>${esc(d)}</small></div>`; }).join("")}</div>`).join("")}</div>`;
}

/* ═══════════ Ansichten ═══════════ */
const main = () => $("#main");
const courseTab = {};
function header(title, sub, back) {
  return `<header class="vh">${back ? `<a class="backbtn" href="#${back}" aria-label="Zurück">${I("back")}</a>` : ""}<div><h1>${title}</h1>${sub ? `<p>${sub}</p>` : ""}</div></header>`;
}
function courseTile(c) {
  const p = courseProgress(c);
  return `<a class="tile" href="#kurs-${c.id}" style="--cc:var(--c-${c.color})"><span class="tile-ic">${c.n ? `<i class="num">${c.n}</i>` : ""}${I(c.icon)}</span><span class="tile-tx"><b>${esc(c.short || c.title)}</b><small class="${c.fr && c.group !== "vocab" ? "fr" : ""}">${esc(c.fr || "")}</small><span class="tile-bar"><i style="width:${p.pct * 100}%"></i></span></span><span class="tile-st">${I("star")}<b>${p.got}</b><small>/${p.max}</small></span></a>`;
}
function nextLessonGlobal() {
  for (const c of COURSES.filter(c => c.group === "check")) { const l = (c.lessons || []).find(l => (S.stars[l.id] || 0) < 3); if (l) return { c, l }; }
  return null;
}
function vStart() {
  const lv = level(), [a, b] = levelRange(lv), dayxp = S.day.d === today() ? S.day.xp : 0, goal = S.settings.goal;
  const tot = COURSES.filter(c => c.group === "check").map(courseProgress).reduce((x, y) => ({ got:x.got + y.got, max:x.max + y.max }), { got:0, max:0 });
  const nx = nextLessonGlobal(); const due = dueWords().length;
  let examLine = "";
  if (S.settings.exam) { const d = Math.ceil((new Date(S.settings.exam) - new Date(today())) / 864e5); if (d >= 0) examLine = `<div class="countdown">${I("timer")}<span>${d === 0 ? "Heute ist die Klassenarbeit. Bonne chance !" : `Noch <b>${d}</b> Tag${d === 1 ? "" : "e"} bis zur Klassenarbeit`}</span></div>`; }
  const ring = (v, max) => { const r = 26, C = 2 * Math.PI * r, f = Math.min(1, v / max); return `<svg class="ring" viewBox="0 0 64 64"><circle cx="32" cy="32" r="${r}" class="ring-bg"/><circle cx="32" cy="32" r="${r}" class="ring-fg" style="stroke-dasharray:${C};stroke-dashoffset:${C * (1 - f)}"/></svg>`; };
  main().innerHTML = `
  <section class="hero enter">
    <div class="hero-l"><p class="hand hello">Bonjour !</p><h1>Dein Französisch-Heft</h1><p class="muted">Découvertes Band 1 & 2 · Klassenarbeit Unité 4 & 6</p>${examLine}</div>
    <div class="goal">${ring(dayxp, goal)}<div class="goal-tx"><b>${dayxp}</b><small>/ ${goal} XP heute</small></div></div>
  </section>
  <div class="statrow enter" style="--i:1">
    <div class="stat">${I("flame", "fl")}<b>${S.streak.last === today() || S.streak.last === new Date(Date.now() - 864e5).toISOString().slice(0, 10) ? S.streak.n : 0}</b><small>Tage am Stück</small></div>
    <div class="stat">${I("star", "gold")}<b>${Object.values(S.stars).reduce((x, y) => x + y, 0)}</b><small>Sterne</small></div>
    <div class="stat lvl"><span class="lvl-n">${lv}</span><div><b>Level ${lv}</b><span class="lvlbar"><i style="width:${((S.xp - a) / (b - a)) * 100}%"></i></span><small>${S.xp} XP</small></div></div>
  </div>
  ${nx ? `<button type="button" class="continue enter" style="--i:2;--cc:var(--c-${nx.c.color})" id="go-next"><span class="tile-ic">${I(nx.c.icon)}</span><span><small>Weiter lernen</small><b>${esc(nx.l.t)}</b><span class="muted small">${esc(nx.c.title)}</span></span>${I("play", "playic")}</button>` : ""}
  <div class="quick enter" style="--i:3">
    <a href="#klassenarbeit" class="qa" style="--cc:var(--c-red)">${I("exam")}<b>Klassenarbeit</b><small>gemischt & bewertet</small></a>
    <a href="#lernkartei" class="qa" style="--cc:var(--c-amber)">${I("box")}<b>Lernkartei</b><small>${due ? `${due} Wörter fällig` : "alles erledigt"}</small></a>
    <a href="#verben" class="qa" style="--cc:var(--c-blue)">${I("verb")}<b>Verben</b><small>alle Tabellen</small></a>
    <a href="#woerterbuch" class="qa" style="--cc:var(--c-teal)">${I("search")}<b>Wörterbuch</b><small>${DICT.size} Einträge</small></a>
  </div>
  <section class="enter" style="--i:4"><div class="sec-h"><h2>Checkliste Klassenarbeit</h2><a href="#checkliste" class="link">${tot.got}/${tot.max} ${I("star", "gold sm")}</a></div>
  <div class="tiles">${COURSES.filter(c => c.group === "check").map(courseTile).join("")}</div></section>
  <section class="enter" style="--i:5"><div class="sec-h"><h2>Grammatik extra</h2></div><div class="tiles">${COURSES.filter(c => c.group === "extra").map(courseTile).join("")}</div></section>
  <section class="enter" style="--i:6"><div class="sec-h"><h2>Vokabeln</h2><a href="#vokabeln" class="link">alle ansehen</a></div><div class="tiles">${VCOURSES.filter(c => c.band === 2).slice(0, 6).map(courseTile).join("")}</div></section>`;
  const g = $("#go-next"); if (g) g.onclick = () => openLesson(nx.c.id, nx.l.id);
}
function autoThumb(c) { const p = courseProgress(c).pct; return p >= .75 ? 2 : p >= .35 ? 1 : p > 0 ? 0 : -1; }
function vCheck() {
  const rows = COURSES.filter(c => c.group === "check");
  main().innerHTML = header("Checkliste", "Schätze dich selbst ein – die App zeigt dir zusätzlich, wie gut deine Übungen gelaufen sind.") + `
  <div class="cl enter">
   <div class="cl-head"><span>Themenbereich</span><span class="cl-th" title="kann ich noch nicht">${I("thumbUp", "down")}</span><span class="cl-th" title="geht so">${I("thumbUp", "side")}</span><span class="cl-th" title="kann ich">${I("thumbUp")}</span></div>
   ${rows.map(c => { const s = S.self[c.id], a = autoThumb(c), p = courseProgress(c); return `<div class="cl-row" style="--cc:var(--c-${c.color})">
     <a class="cl-t" href="#kurs-${c.id}"><i class="num">${c.n}</i><span><b>${esc(c.title)}</b><small>${p.got}/${p.max} Sterne · App sagt: <em class="as as${a}">${["noch üben","geht so","sitzt"][a] || "noch nicht geübt"}</em></small><span class="tile-bar"><i style="width:${p.pct * 100}%"></i></span></span></a>
     ${[0, 1, 2].map(v => `<button type="button" class="cl-b ${s === v ? "on v" + v : ""}" data-c="${c.id}" data-v="${v}" aria-label="${["kann ich noch nicht","geht so","kann ich"][v]}">${I("thumbUp", ["down","side",""][v])}</button>`).join("")}</div>`; }).join("")}
  </div>
  <p class="muted small center">Tipp: Fang mit den Themen an, bei denen du den Daumen nach unten hast.</p>`;
  $$(".cl-b").forEach(b => b.onclick = () => { S.self[b.dataset.c] = S.self[b.dataset.c] === +b.dataset.v ? undefined : +b.dataset.v; save(); sfx("tap"); vCheck(); });
}
function vVocab() {
  const groups = [[1, "Band 1"], [2, "Band 2"], [0, "Extra"], [9, "Eigene"]];
  main().innerHTML = header("Vokabeln", `${Object.keys(WORDS).length} Wörter aus Découvertes 1 & 2 · thematisch sortiert`) + `
  <div class="vtools enter"><a href="#lernkartei" class="btn ghost">${I("box")} Lernkartei (${dueWords().length} fällig)</a><a href="#eigene" class="btn ghost">${I("plus")} Eigene Vokabeln</a></div>
  ${groups.map(([b, t]) => { const cs = VCOURSES.filter(c => c.band === b); return cs.length ? `<section class="enter"><div class="sec-h"><h2>${t}</h2></div><div class="tiles">${cs.map(c => courseTile(c).replace(`href="#kurs-${c.id}"`, `href="#kurs-${c.id}"`)).join("")}</div></section>` : ""; }).join("")}
  <p class="muted small">Klassenarbeit: <b>Au marché</b> und <b>Entre amis</b> (gelb markiert) – die gleichen Wörter findest du auch unter Thema 8 der Checkliste.</p>`;
}
function pathHtml(c) {
  const offs = [0, 1, 1.5, 1, 0, -1, -1.5, -1];
  const nextIdx = c.lessons.findIndex(l => (S.stars[l.id] || 0) < 3);
  return `<div class="path">${c.lessons.map((l, i) => {
    const st = S.stars[l.id] || 0;
    const ic = l.boss ? "trophy" : { gap:"pencil", mc:"check", order:"blocks", tr:"chat", tf:"refresh", conj:"verb", conjq:"spark", vlearn:"cards", vwrite:"pencil", vlisten:"ear", vmatch:"blocks", vtest:"trophy", read:"book", dialog:"chat", write:"edit", mix:"trophy" }[l.k] || "star";
    return `${l.sec ? `<div class="path-sec">${esc(l.sec)}</div>` : ""}<div class="pnode ${st ? "done" : ""} ${i === nextIdx ? "next" : ""} ${l.boss ? "boss" : ""}" style="--x:${offs[i % 8]};--i:${i}">
      <button type="button" class="pbtn" data-l="${l.id}" aria-label="${esc(l.t)}">${I(ic)}${i === nextIdx ? `<span class="pstart">${st ? "Weiter" : "Start"}</span>` : ""}</button>
      <div class="plabel"><b>${esc(l.t)}</b>${l.sub ? `<small>${esc(l.sub)}</small>` : ""}${starRow(st, 5, "sm")}</div></div>`;
  }).join("")}</div>`;
}
function vCourse(id) {
  const c = getCourse(id); if (!c) return vStart();
  const tabs = [["ueben", "Üben"]];
  if (c.rules && c.rules.length) tabs.push(["regeln", c.kind === "reading" ? "Tipps" : c.kind === "vocab" ? "Lerntipps" : "Regeln"]);
  if (c.kind === "vocabset" || c.kind === "vocab") tabs.push(["liste", "Wortliste"], ["karten", "Karteikarten"]);
  if (c.kind === "reading") tabs.push(["texte", "Alle Texte"]);
  if (c.kind === "market") tabs.push(["redemittel", "Redemittel"]);
  if (["c1", "c2"].includes(c.id)) tabs.push(["tabellen", "Verbtabellen"]);
  let tab = courseTab[id] || (c.rules && c.rules.length && !c.kind && !Object.keys(S.stars).some(k => c.lessons.some(l => l.id === k)) ? "regeln" : "ueben");
  if (!tabs.some(t => t[0] === tab)) tab = "ueben";
  const p = courseProgress(c);
  main().innerHTML = `<div class="chead enter" style="--cc:var(--c-${c.color})"><a class="backbtn" href="#${c.group === "vocab" ? "vokabeln" : "start"}" aria-label="Zurück">${I("back")}</a>
   <span class="tile-ic big">${c.n ? `<i class="num">${c.n}</i>` : ""}${I(c.icon)}</span><div class="chead-tx"><small>${c.group === "check" ? `Thema ${c.n} der Checkliste` : c.group === "vocab" ? "Vokabeln" : "Grammatik extra"}</small><h1>${esc(c.title)}</h1>
   <div class="chead-p"><span class="tile-bar"><i style="width:${p.pct * 100}%"></i></span><span>${p.got}/${p.max} ${I("star", "gold sm")}</span></div></div></div>
   <nav class="tabs enter" style="--i:1;--cc:var(--c-${c.color})" role="tablist">${tabs.map(([k, t]) => `<button type="button" role="tab" class="tab ${k === tab ? "on" : ""}" data-t="${k}" aria-selected="${k === tab}">${t}</button>`).join("")}</nav>
   <div class="tabbody enter" style="--i:2;--cc:var(--c-${c.color})" id="tabbody"></div>`;
  $$(".tab").forEach(b => b.onclick = () => { courseTab[id] = b.dataset.t; vCourse(id); });
  const tb = $("#tabbody");
  if (tab === "ueben") {
    tb.innerHTML = (c.rules?.length && !c.kind ? `<button type="button" class="rulehint" data-go="regeln">${I("bulb")}<span><b>Erst die Regeln lesen?</b><small>${c.rules.length} Erklärungen mit Beispielen</small></span>${I("arrow")}</button>` : "") + pathHtml(c);
    $$(".pbtn", tb).forEach(b => b.onclick = () => openLesson(c.id, b.dataset.l));
    const rh = $(".rulehint", tb); if (rh) rh.onclick = () => { courseTab[id] = "regeln"; vCourse(id); };
  } else if (tab === "regeln") {
    tb.innerHTML = `<div class="rules">${c.rules.map((r, i) => `<details class="rcard" ${i === 0 ? "open" : ""}><summary><i class="rnum">${i + 1}</i><b>${esc(r.h)}</b>${I("back", "chev")}</summary><div class="rule">${ruleHtml(r.html)}</div></details>`).join("")}</div>
     <div class="tip-dbl">${I("pointer")} Tippe auf ${I("speaker", "sm")} zum Anhören. Doppeltippe ein französisches Wort zum Übersetzen.</div>
     ${c.lessons?.length ? `<button type="button" class="btn good-b wide" id="go-practice">${I("play")} Jetzt üben</button>` : ""}`;
    fillVerbGrids(tb);
    const gp = $("#go-practice"); if (gp) gp.onclick = () => { courseTab[id] = "ueben"; vCourse(id); };
  } else if (tab === "liste") {
    const sets = c.kind === "vocab" ? c.sets.map(setById) : [setById(c.set)];
    tb.innerHTML = `<input class="search" id="wl-q" placeholder="Wort suchen …" ${inputAttrs}><div id="wl">${sets.map(s => `<h3 class="wl-h">${esc(s.title)} <small>${esc(s.de)}</small></h3><div class="wlist">${s.list.map(w => wordRow(w)).join("")}</div>`).join("")}</div>`;
    $("#wl-q").oninput = e => { const q = normBase(e.target.value); $$(".wrow", tb).forEach(r => r.hidden = q && !normBase(r.textContent).includes(q) && !noAcc(normBase(r.textContent)).includes(noAcc(q))); };
  } else if (tab === "karten") {
    const sets = c.kind === "vocab" ? c.sets.map(setById) : [setById(c.set)];
    const all = sets.flatMap(s => s.list);
    tb.innerHTML = `<div class="cardstart"><div class="fakecard">${I("cards")}<b>${all.length} Karteikarten</b><small>Französisch vorne, Deutsch hinten. Sag dir selbst, ob du es wusstest.</small></div>
     <div class="res-btns"><button type="button" class="btn good-b" id="kc-20">${I("shuffle")} 20 zufällige Karten</button><button type="button" class="btn ghost" id="kc-all">Alle ${all.length} Karten</button></div></div>`;
    const go = n => openLesson(c.id, null, { lesson:{ id:"cards-" + c.id, t:"Karteikarten", k:"cards", words:sample(all, n).map(w => w.id) }, noStars:true });
    $("#kc-20").onclick = () => go(20); $("#kc-all").onclick = () => go(all.length);
  } else if (tab === "texte") {
    tb.innerHTML = TEXTS.map(t => `<div class="textblock">${textHtml(t)}<button type="button" class="btn good-b" data-l="r-${t.id}">${I("play")} Fragen zum Text</button></div>`).join("");
    TEXTS.forEach(t => wireText($$(".textblock", tb)[TEXTS.indexOf(t)], t));
    $$("[data-l]", tb).forEach(b => b.onclick = () => openLesson(c.id, b.dataset.l));
  } else if (tab === "redemittel") {
    tb.innerHTML = phraseBankHtml();
  } else if (tab === "tabellen") {
    tb.innerHTML = `<div class="verbgrid" data-verbs="${c.id === "c1" ? "être avoir faire aller prendre voir pouvoir vouloir savoir devoir venir dire lire écrire partir attendre acheter manger commencer préférer appeler" : "boire mettre connaître choisir finir"}"></div><a class="btn ghost wide" href="#verben">Alle Verben & Zeiten</a>`;
    fillVerbGrids(tb);
  }
}
function wordRow(w) { return `<div class="wrow"><span class="fr" data-de="${esc(w.de)}">${esc(w.fr)}</span>${spk(w.fr)}<span class="wde">${esc(w.de)}</span>${S.leitner[w.id] ? `<span class="box b${S.leitner[w.id].b}" title="Fach ${S.leitner[w.id].b}">${S.leitner[w.id].b}</span>` : ""}</div>`; }

let verbSel = { v:"boire", t:"pres" };
function vVerbs() {
  const groups = [["Klassenarbeit (neu)", VERBS.filter(v => v.nouveau)], ["Unregelmäßig & wichtig", VERBS.filter(v => !v.nouveau && !v.reg && v.g !== "-er mit è" && !/-er mit/.test(v.g))], ["-er mit Besonderheit", VERBS.filter(v => /-er mit/.test(v.g))], ["Regelmäßig auf -er", VERBS.filter(v => v.reg)]];
  const v = VERBS.find(x => x.inf === verbSel.v);
  main().innerHTML = header("Verben", `${VERBS.length} Verben in drei Zeiten. Wähle ein Verb, dann üben.`) + `
  <nav class="tabs enter" style="--cc:var(--c-blue)">${[["pres", "Präsens"], ["pc", "Passé composé"], ["fut", "Futur composé"]].map(([k, t]) => `<button type="button" class="tab ${verbSel.t === k ? "on" : ""}" data-t="${k}">${t}</button>`).join("")}</nav>
  <div class="verbview enter" style="--i:1">
    <div class="vsel">${groups.map(([t, vs]) => `<h4>${t}</h4><div class="vchips">${vs.map(x => `<button type="button" class="chip fr ${x.inf === verbSel.v ? "on" : ""}" data-v="${x.inf}">${esc(x.inf)}${S.stars[`verb-${x.inf}-${verbSel.t}`] ? `<i class="ministar">${S.stars[`verb-${x.inf}-${verbSel.t}`]}★</i>` : ""}</button>`).join("")}</div>`).join("")}</div>
    <div class="vshow">${verbTable(v, verbSel.t)}<p class="muted small">${esc(v.g)}${verbSel.t === "pc" ? ` · Hilfsverb: <b>${v.aux}</b>` : ""}</p>
    <button type="button" class="btn good-b wide" id="v-drill">${I("play")} ${esc(v.inf)} üben</button>
    ${starRow(S.stars[`verb-${v.inf}-${verbSel.t}`] || 0)}</div>
  </div>`;
  $$(".tabs .tab").forEach(b => b.onclick = () => { verbSel.t = b.dataset.t; vVerbs(); });
  $$(".vchips .chip").forEach(b => b.onclick = () => { verbSel.v = b.dataset.v; vVerbs(); if (innerWidth < 760) $(".vshow").scrollIntoView({ behavior:"smooth", block:"start" }); });
  $("#v-drill").onclick = () => openLesson("c1", null, { lesson:{ id:`verb-${v.inf}-${verbSel.t}`, t:`${v.inf} · ${{ pres:"Präsens", pc:"Passé composé", fut:"Futur composé" }[verbSel.t]}`, k:"verbdrill", v:v.inf, tense:verbSel.t } });
}
function vDict() {
  main().innerHTML = header("Wörterbuch", "Französisch ⇄ Deutsch · auch konjugierte Formen wie „boivent“") + `<input class="search big enter" id="dq" placeholder="z. B. fromage, trinken, buvons …" ${inputAttrs} autofocus><div id="dres" class="wlist enter" style="--i:1"></div>`;
  const run = () => {
    const q = normBase($("#dq").value); const out = $("#dres");
    if (!q) { out.innerHTML = `<p class="muted">Tippe ein Wort ein. Oder doppeltippe irgendwo in der App auf ein französisches Wort.</p>`; return; }
    const hits = [];
    const lk = lookup(q); lk.entries.forEach(e => hits.push(e));
    for (const w of Object.values(WORDS)) { if (hits.length > 60) break; const f = noAcc(normBase(w.fr)), d = noAcc(normBase(w.de)), qq = noAcc(q); if ((f.includes(qq) || d.includes(qq)) && !hits.some(h => h.fr === w.fr && h.de === w.de)) hits.push({ fr:w.fr, de:w.de }); }
    for (const v of VERBS) if (noAcc(normBase(v.de)).includes(noAcc(q)) && !hits.some(h => h.fr === v.inf)) hits.push({ fr:v.inf, de:v.de, note:"Verb" });
    out.innerHTML = hits.length ? hits.map(h => `<div class="wrow"><span class="fr">${esc(h.fr)}</span>${spk(h.fr)}<span class="wde">${esc(h.de)}${h.note ? ` <small class="muted">· ${esc(h.note)}</small>` : ""}</span></div>`).join("") : `<p class="muted">Nichts gefunden.</p>`;
  };
  $("#dq").oninput = run; run();
}
function vLeitner() {
  const counts = [1, 2, 3, 4, 5].map(b => Object.values(S.leitner).filter(e => e.b === b).length);
  const due = dueWords(); const max = Math.max(1, ...counts);
  main().innerHTML = header("Lernkartei", "Richtig beantwortete Wörter wandern ein Fach weiter und kommen seltener dran. Falsche fangen wieder in Fach 1 an.") + `
  <div class="boxes enter">${counts.map((n, i) => `<div class="lbox"><div class="lb-bar"><i style="height:${(n / max) * 100}%"></i></div><b>${n}</b><small>Fach ${i + 1}</small><small class="muted">${["sofort", "sofort", "1 Tag", "3 Tage", "7 Tage"][i] || ""}</small></div>`).join("")}</div>
  <div class="cardstart enter" style="--i:1"><div class="fakecard">${I("box")}<b>${due.length} Wörter fällig</b><small>${Object.keys(S.leitner).length ? "Wiederhole sie jetzt, solange sie frisch sind." : "Übe zuerst ein paar Vokabel-Aufgaben – die Wörter landen dann automatisch hier."}</small></div>
  <div class="res-btns">${due.length ? `<button type="button" class="btn good-b" id="lk-go">${I("play")} ${Math.min(25, due.length)} Karten wiederholen</button>` : ""}<a href="#vokabeln" class="btn ghost">Zu den Vokabeln</a></div></div>`;
  const g = $("#lk-go"); if (g) g.onclick = () => openLesson("v-b2u4", null, { lesson:{ id:"leitner", t:"Lernkartei", k:"cards", words:sample(due, 25).map(w => w.id) }, noStars:true });
}
function vCustom() {
  main().innerHTML = header("Eigene Vokabeln", "Schreib Wörter aus deinem Buch hier rein – eine Zeile pro Wort: französisch ; deutsch", "vokabeln") + `
  <textarea id="cv" class="wtext" rows="12" placeholder="la pêche ; der Pfirsich&#10;goûter ; probieren&#10;un pot de ; ein Glas" ${inputAttrs}>${esc(S.custom)}</textarea>
  <div class="res-btns"><button type="button" class="btn good-b" id="cv-save">${I("check")} Speichern</button>${customSet.list.length ? `<a class="btn ghost" href="#kurs-v-custom">Üben (${customSet.list.length} Wörter)</a>` : ""}</div>
  <p class="muted small">Trennzeichen: Semikolon, senkrechter Strich, Tab oder „ - “. Die Wörter erscheinen dann als eigenes Vokabel-Thema mit allen Übungen.</p>`;
  $("#cv-save").onclick = () => { S.custom = $("#cv").value; save(); loadCustom(); VCOURSES = vocabCourses(); buildDict(); toast(`${customSet.list.length} Wörter gespeichert`); vCustom(); };
}
function vMore() {
  main().innerHTML = header("Mehr", "") + `<div class="morelist enter">
   ${[["verben", "verb", "Verben", "Alle Tabellen in Präsens, Passé composé & Futur"], ["woerterbuch", "search", "Wörterbuch", "Suchen in beide Richtungen"], ["lernkartei", "box", "Lernkartei", "Wiederholen mit 5 Fächern"], ["eigene", "plus", "Eigene Vokabeln", "Wörter aus dem Buch hinzufügen"], ["kurs-c9", "book", "Lesetexte", "6 Texte mit Fragen"], ["kurs-c10", "basket", "Markt-Dialog", "Redemittel & Schreibwerkstatt"], ["einstellungen", "gear", "Einstellungen", "Design, Ton, Datum der Arbeit"]].map(([h, i, t, s]) => `<a href="#${h}" class="morerow">${I(i)}<span><b>${t}</b><small>${s}</small></span>${I("arrow", "chev2")}</a>`).join("")}</div>`;
}
function vSettings() {
  const st = S.settings;
  main().innerHTML = header("Einstellungen", "", "mehr") + `<div class="settings enter">
   <div class="set"><b>Design</b><div class="seg">${[["system", "System"], ["light", "Hell"], ["dark", "Dunkel"]].map(([k, t]) => `<button type="button" class="${st.theme === k ? "on" : ""}" data-th="${k}">${t}</button>`).join("")}</div></div>
   <div class="set"><b>Töne</b><div class="seg">${[[true, "An"], [false, "Aus"]].map(([k, t]) => `<button type="button" class="${st.sound === k ? "on" : ""}" data-snd="${k}">${t}</button>`).join("")}</div></div>
   <div class="set"><b>Tagesziel</b><div class="seg">${[30, 60, 100, 150].map(k => `<button type="button" class="${st.goal === k ? "on" : ""}" data-goal="${k}">${k} XP</button>`).join("")}</div></div>
   <div class="set"><label for="exd"><b>Datum der Klassenarbeit</b></label><input type="date" id="exd" value="${esc(st.exam)}"></div>
   <div class="set voiceset"><label for="vsel"><b>Französische Stimme</b></label>${frVoices().length ? `<select id="vsel" class="vsel">${frVoices().map(v => `<option value="${esc(v.voiceURI)}" ${frVoice && frVoice.voiceURI === v.voiceURI ? "selected" : ""}>${esc(v.name)} (${esc(v.lang)})</option>`).join("")}</select>` : `<span class="pill">keine gefunden</span>`}
     <button type="button" class="btn ghost" id="voice">${I("speaker")} Bonjour, je m'appelle Léa !</button>
     ${frVoices().length ? "" : `<div class="note voicehelp"><b>Dein Gerät hat keine französische Stimme.</b> Ohne sie liest die Stimme den Text auf Deutsch oder Englisch vor. So installierst du sie (danach die Seite neu laden):<ul class="list"><li><b>iPhone / iPad:</b> Einstellungen → Bedienungshilfen → Gesprochene Inhalte → Stimmen → Französisch → eine Stimme laden (z. B. Thomas oder Amélie).</li><li><b>Android:</b> Einstellungen → System (bzw. Allgemeine Verwaltung) → Sprache → Sprachausgabe → Google-Sprachausgabe → Sprachdaten installieren → Französisch (Frankreich).</li><li><b>Windows:</b> Einstellungen → Zeit und Sprache → Sprache → Sprache hinzufügen → Französisch (Frankreich) mit „Text-to-Speech“, dann Browser neu starten.</li><li><b>Mac:</b> Systemeinstellungen → Bedienungshilfen → Gesprochene Inhalte → Systemstimme → Stimmen verwalten → Französisch.</li></ul></div>`}</div>
   <div class="set danger"><b>Fortschritt zurücksetzen</b><button type="button" class="btn bad-b" id="reset">Alles löschen</button><div id="reset-confirm" hidden><p>Wirklich alle Sterne, XP und die Lernkartei löschen?</p><button type="button" class="btn bad-b" id="reset-yes">Ja, löschen</button> <button type="button" class="btn ghost" id="reset-no">Abbrechen</button></div></div></div>`;
  $$("[data-th]").forEach(b => b.onclick = () => { st.theme = b.dataset.th; save(); applyTheme(); vSettings(); });
  $$("[data-snd]").forEach(b => b.onclick = () => { st.sound = b.dataset.snd === "true"; save(); vSettings(); });
  $$("[data-goal]").forEach(b => b.onclick = () => { st.goal = +b.dataset.goal; save(); vSettings(); });
  $("#exd").onchange = e => { st.exam = e.target.value; save(); toast("Datum gespeichert"); };
  $("#voice").onclick = () => speak("Bonjour, je m'appelle Léa !");
  const vs = $("#vsel"); if (vs) vs.onchange = () => { st.voice = vs.value; save(); pickVoice(); speak("Bonjour, je m'appelle Léa !"); };
  $("#reset").onclick = () => $("#reset-confirm").hidden = false;
  $("#reset-no").onclick = () => $("#reset-confirm").hidden = true;
  $("#reset-yes").onclick = () => { const keep = S.settings; S = defState(); S.settings = keep; save(); toast("Fortschritt gelöscht"); location.hash = "#start"; };
}
function applyTheme() { const t = S.settings.theme; if (t === "system") document.documentElement.removeAttribute("data-theme"); else document.documentElement.dataset.theme = t; }

/* ═══════════ Klassenarbeit ═══════════ */
let EX = null;
const pool = (cid, lid) => lessonPool(getCourse(cid), getCourse(cid).lessons.find(l => l.id === lid));
function genExam(opt) {
  const tbVerb = rnd(["boire", "mettre", "connaître", "choisir", "finir", "prendre", "vouloir", "pouvoir", "faire"]);
  const text = rnd(TEXTS);
  const vocab = [...sample(setById("b2u4").list, 6), ...sample(setById("b2u6").list, 4)];
  const secs = [
    { t:"Verben im Präsens", topic:"c1", info:"Setze die richtige Verbform ein.", items:[...conjQuick("être avoir faire aller prendre voir pouvoir vouloir savoir", "pres", 3), ...sample(pool("c1", "c1d"), 3)] },
    { t:"boire, mettre, connaître, choisir, finir", topic:"c2", info:"Konjugiere und setze ein.", items:[{ k:"conj", v:tbVerb, tense:"pres", pts:3 }, ...sample([...pool("c2", "c2c"), ...pool("c2", "c2d")], 3), ...sample(pool("c2", "c2e"), 2)] },
    { t:"Mengenangaben & Teilungsartikel", topic:"c3", info:"du, de la, de l', des oder de / d'?", items:[...sample(pool("c3", "c3a"), 2), ...sample(pool("c3", "c3b"), 2), ...sample(pool("c3", "c3c"), 1), ...sample(pool("c3", "c3d"), 2)].map(x => ({ ...x, choices:null })) },
    { t:"il faut", topic:"c4", info:"Ergänze oder wähle aus.", items:[...sample(pool("c4", "c4a"), 2), ...sample(pool("c4", "c4b"), 1), ...sample(pool("c4", "c4e"), 1)] },
    { t:"Objektpronomen me, te, nous, vous", topic:"c5", info:"Setze ein oder antworte mit Pronomen.", items:[...sample(pool("c5", "c5a"), 3).map(x => ({ ...x, choices:null })), ...sample(pool("c5", "c5c"), 1)] },
    { t:"Indirekte Objektpronomen lui, leur", topic:"c6", info:"Setze ein oder ersetze.", items:[...sample(pool("c6", "c6a"), 2).map(x => ({ ...x, choices:null })), ...sample(pool("c6", "c6b"), 1), ...sample(pool("c6", "c6c"), 2)] },
    { t:"Inversionsfrage", topic:"c7", info:"Forme in eine Inversionsfrage um.", items:[...sample(pool("c7", "c7a"), 2), ...sample(pool("c7", "c7b"), 1), ...sample(pool("c7", "c7c"), 2)] },
    { t:"Vokabeln Unité 4 & 6", topic:"c8", info:"Übersetze ins Französische (mit Artikel).", items:vocab.map(w => ({ k:"vtype", w:w.id })) },
    { t:"Leseverstehen", topic:"c9", info:"Lies den Text und beantworte die Fragen.", text:text.id, items:readingItems(text.id).filter(x => !x.noScore) },
    { t:"Schreibaufgabe: Verkaufsdialog am Markt", topic:"c10", info:"", write:writeTask(), items:[] }
  ];
  let s = opt.shuffleSecs ? [...shuffle(secs.slice(0, 7)), ...secs.slice(7)] : secs;
  s = s.filter(x => opt.parts.includes(x.topic));
  s.forEach(x => { if (opt.shuffleItems) x.items = shuffle(x.items); x.items.forEach(it => it.pts = it.pts || ptsFor(it)); x.max = x.write ? 10 : x.items.reduce((a, b) => a + b.pts, 0); });
  return { secs:s, start:Date.now(), timer:opt.timer, done:false };
}
function ptsFor(it) { if (it.k === "gap") return it.a.length; if (["tf", "tr", "order"].includes(it.k)) return 2; if (it.k === "conj") return 3; return 1; }
let exOpt = { shuffleSecs:false, shuffleItems:true, timer:false, parts:["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10"] };
function vExam() {
  if (EX && !EX.done) return renderExam();
  const hist = S.exams.slice(-6).reverse();
  main().innerHTML = header("Klassenarbeit", "Eine komplette Probe-Arbeit zu allen 10 Themen der Checkliste – jedes Mal neu gemischt.") + `
  <div class="exstart enter">
   <div class="paper-prev"><div class="pp-h"><b>Contrôle de français</b><span>Unités 4 & 6</span></div>${COURSES.filter(c => c.group === "check").map(c => `<label class="pp-r"><input type="checkbox" data-p="${c.id}" ${exOpt.parts.includes(c.id) ? "checked" : ""}><i class="num" style="--cc:var(--c-${c.color})">${c.n}</i><span>${esc(c.title)}</span></label>`).join("")}</div>
   <div class="exopts">
    <label class="tog"><input type="checkbox" id="o-items" ${exOpt.shuffleItems ? "checked" : ""}><span></span>Aufgaben mischen</label>
    <label class="tog"><input type="checkbox" id="o-secs" ${exOpt.shuffleSecs ? "checked" : ""}><span></span>Reihenfolge der Teile mischen</label>
    <label class="tog"><input type="checkbox" id="o-timer" ${exOpt.timer ? "checked" : ""}><span></span>Mit 45-Minuten-Timer</label>
    <button type="button" class="btn good-b wide" id="ex-go">${I("shuffle")} Neue Klassenarbeit erstellen</button>
    <p class="muted small">Benotung: 1 ab 92 % · 2 ab 81 % · 3 ab 67 % · 4 ab 50 % · 5 ab 30 %</p>
   </div></div>
  ${hist.length ? `<section class="enter" style="--i:2"><div class="sec-h"><h2>Deine letzten Arbeiten</h2></div><div class="hist">${hist.map(h => `<div class="hrow"><span class="note n${h.grade}">${h.grade}</span><span><b>${h.pts} / ${h.max} Punkte</b><small>${new Date(h.date).toLocaleDateString("de-DE", { day:"numeric", month:"long" })} · ${Math.round(h.pct * 100)} %</small></span></div>`).join("")}</div></section>` : ""}`;
  $$("[data-p]").forEach(b => b.onchange = () => { exOpt.parts = $$("[data-p]").filter(x => x.checked).map(x => x.dataset.p); });
  $("#o-items").onchange = e => exOpt.shuffleItems = e.target.checked;
  $("#o-secs").onchange = e => exOpt.shuffleSecs = e.target.checked;
  $("#o-timer").onchange = e => exOpt.timer = e.target.checked;
  $("#ex-go").onclick = () => { if (!exOpt.parts.length) return toast("Wähle mindestens ein Thema aus."); EX = genExam(exOpt); renderExam(); scrollTo(0, 0); };
}
let exTimer = null;
function renderExam() {
  let n = 0;
  const L = "ABCDEFGHIJ";
  const tot = EX.secs.reduce((a, b) => a + b.max, 0);
  main().innerHTML = `<div class="exbar"><button type="button" class="ghost sm" id="ex-quit">${I("close")} Abbrechen</button><b>Klassenarbeit</b>${EX.timer ? `<span class="extimer" id="ex-time">45:00</span>` : `<span class="muted">${tot} Punkte</span>`}</div>
  <div id="ex-result"></div>
  <div class="paper">${EX.secs.map((s, si) => `<section class="exsec" data-s="${si}"><h3><i class="exl">${L[si]}</i>${esc(s.t)}<span class="expts">/ ${s.max} P.</span></h3>${s.info ? `<p class="muted">${esc(s.info)}</p>` : ""}
    ${s.text ? `<div class="extext">${textHtml(TEXTS.find(t => t.id === s.text))}</div>` : ""}
    ${s.write ? `${writeTaskHtml(s.write)}<textarea class="wtext" id="ex-write" rows="12" placeholder="V : Bonjour ! Vous désirez ?&#10;C : …" ${inputAttrs}></textarea><div class="wlive"><span id="exw-count">0 Wörter</span></div><div id="exw-res"></div>` : ""}
    ${s.items.map((it, ii) => `<div class="exitem" data-k="${si}-${ii}"><span class="exn">${++n}</span><div class="exbody"></div><span class="exp">${it.pts} P.</span></div>`).join("")}</section>`).join("")}
    <button type="button" class="btn good-b wide" id="ex-submit">${I("check")} Abgeben</button></div>`;
  EX.ctrls = {};
  EX.secs.forEach((s, si) => s.items.forEach((it, ii) => { const host = $(`.exitem[data-k="${si}-${ii}"] .exbody`); EX.ctrls[`${si}-${ii}`] = R[it.k](it, host, { mode:"exam", changed:() => {}, enter:() => {} }); }));
  EX.secs.forEach(s => s.text && wireText($(".exsec .extext"), TEXTS.find(t => t.id === s.text)));
  const wt = $("#ex-write"); if (wt) wt.oninput = () => $("#exw-count").textContent = `${(wt.value.match(/\p{L}+/gu) || []).length} Wörter`;
  $("#ex-submit").onclick = submitExam;
  $("#ex-quit").onclick = () => { if (EX.done || confirmInline()) { EX = null; clearInterval(exTimer); vExam(); } };
  clearInterval(exTimer);
  if (EX.timer && !EX.done) { const tick = () => { const left = Math.max(0, 45 * 60 - Math.floor((Date.now() - EX.start) / 1000)); const el = $("#ex-time"); if (!el) return clearInterval(exTimer); el.textContent = `${String(Math.floor(left / 60)).padStart(2, "0")}:${String(left % 60).padStart(2, "0")}`; el.classList.toggle("warn", left < 300); if (!left) { clearInterval(exTimer); toast("Zeit ist um!"); submitExam(); } }; tick(); exTimer = setInterval(tick, 1000); }
}
let quitArm = 0;
function confirmInline() { if (Date.now() - quitArm < 3000) return true; quitArm = Date.now(); toast("Nochmal tippen zum Abbrechen – dein Fortschritt geht verloren."); return false; }
function submitExam() {
  if (EX.done) return;
  EX.done = true; clearInterval(exTimer); hideAccents();
  let pts = 0, max = 0; const per = [];
  EX.secs.forEach((s, si) => {
    let sp = 0;
    if (s.write) { const a = analyzeWriting($("#ex-write").value, s.write); sp = a.pts; $("#ex-write").disabled = true; $("#exw-res").innerHTML = critListHtml(a) + `<details class="phrases"><summary>${I("eye")} Musterlösung</summary><div class="dialog">${modelSolution(s.write).map(([w, t]) => `<div class="dl ${w}"><span class="who">${w}</span><span class="fr">${esc(t)}</span></div>`).join("")}</div></details>`; }
    s.items.forEach((it, ii) => {
      const r = EX.ctrls[`${si}-${ii}`].check(); const got = Math.round(r.ratio * it.pts * 2) / 2; sp += got;
      const box = $(`.exitem[data-k="${si}-${ii}"]`); box.classList.add(r.ratio === 1 ? "ok" : r.ratio > 0 ? "half" : "bad");
      $(".exp", box).textContent = `${got}/${it.pts}`;
      if (r.ratio < 1 && r.sol) $(".exbody", box).insertAdjacentHTML("beforeend", `<div class="exsol">${I("check")} <span>${r.sol}</span>${r.de ? `<small>${esc(r.de)}</small>` : ""}</div>`);
    });
    sp = Math.min(sp, s.max); pts += sp; max += s.max; per.push({ s, sp });
    $(`.exsec[data-s="${si}"] .expts`).textContent = `${sp} / ${s.max} P.`;
  });
  pts = Math.round(pts * 2) / 2;
  const pct = max ? pts / max : 0;
  const grade = pct >= .92 ? 1 : pct >= .81 ? 2 : pct >= .67 ? 3 : pct >= .5 ? 4 : pct >= .3 ? 5 : 6;
  S.exams.push({ date:Date.now(), pts, max, pct, grade }); addXP(Math.round(pts)); save();
  sfx("done"); if (grade <= 2) confetti();
  const weak = per.filter(x => x.s.max && x.sp / x.s.max < .7).map(x => COURSES.find(c => c.id === x.s.topic));
  $("#ex-result").innerHTML = `<div class="exres enter"><div class="bignote n${grade}">${grade}</div><div><h2>${["", "Sehr gut", "Gut", "Befriedigend", "Ausreichend", "Mangelhaft", "Ungenügend"][grade]}</h2><p><b>${pts} von ${max} Punkten</b> · ${Math.round(pct * 100)} %</p>
    <div class="secbars">${per.map(x => `<div class="sb"><span>${esc(x.s.t)}</span><span class="tile-bar"><i style="width:${x.s.max ? x.sp / x.s.max * 100 : 0}%"></i></span><b>${x.sp}/${x.s.max}</b></div>`).join("")}</div>
    ${weak.length ? `<p class="muted">Üb noch: ${weak.map(c => `<a href="#kurs-${c.id}">${esc(c.short)}</a>`).join(", ")}</p>` : ""}
    <div class="res-btns"><button type="button" class="btn good-b" id="ex-new">${I("shuffle")} Neue Arbeit mischen</button><button type="button" class="btn ghost" id="ex-same">Gleiche Einstellungen nochmal</button></div></div></div>`;
  $("#ex-submit").hidden = true;
  $("#ex-new").onclick = () => { EX = null; vExam(); scrollTo(0, 0); };
  $("#ex-same").onclick = () => { EX = genExam(exOpt); renderExam(); scrollTo(0, 0); };
  scrollTo({ top:0, behavior:reduceMotion() ? "auto" : "smooth" });
}

/* ═══════════ Router ═══════════ */
const NAV = { start:"start", checkliste:"checkliste", vokabeln:"vokabeln", klassenarbeit:"klassenarbeit", mehr:"mehr" };
function route() {
  if (PL) return;
  const h = (location.hash || "#start").slice(1) || "start";
  let navKey = "mehr";
  closeSheet(); closePop();
  if (h === "start") { vStart(); navKey = "start"; }
  else if (h === "checkliste") { vCheck(); navKey = "checkliste"; }
  else if (h === "vokabeln") { vVocab(); navKey = "vokabeln"; }
  else if (h === "klassenarbeit") { vExam(); navKey = "klassenarbeit"; }
  else if (h.startsWith("kurs-")) { const id = h.slice(5); vCourse(id); const c = getCourse(id); navKey = c?.group === "vocab" ? "vokabeln" : c?.group === "check" ? "checkliste" : "start"; }
  else if (h === "verben") vVerbs();
  else if (h === "woerterbuch") vDict();
  else if (h === "lernkartei") { vLeitner(); navKey = "vokabeln"; }
  else if (h === "eigene") { vCustom(); navKey = "vokabeln"; }
  else if (h === "einstellungen") vSettings();
  else if (h === "mehr") vMore();
  else { vStart(); navKey = "start"; }
  $$(".nav a").forEach(a => a.classList.toggle("on", a.dataset.k === navKey));
  updateTopStats();
}
let lastHash = null;
addEventListener("hashchange", () => { if (PL) closeLessonSilently(); route(); if (lastHash !== location.hash) scrollTo(0, 0); lastHash = location.hash; });
function closeLessonSilently() { $("#player").hidden = true; document.body.classList.remove("noscroll"); PL = null; }
function updateTopStats() { const el = $("#topstats"); if (el) el.innerHTML = `<span>${I("flame", "fl")}${S.streak.last === today() ? S.streak.n : S.streak.n && S.streak.last === new Date(Date.now() - 864e5).toISOString().slice(0, 10) ? S.streak.n : 0}</span><span>${I("star", "gold")}${Object.values(S.stars).reduce((a, b) => a + b, 0)}</span><span class="tlv">Lv ${level()}</span>`; }

/* ═══════════ Doppeltipp-Übersetzung ═══════════ */
function wordAt(x, y) {
  let node, off;
  if (document.caretPositionFromPoint) { const p = document.caretPositionFromPoint(x, y); if (!p) return null; node = p.offsetNode; off = p.offset; }
  else if (document.caretRangeFromPoint) { const r = document.caretRangeFromPoint(x, y); if (!r) return null; node = r.startContainer; off = r.startOffset; }
  if (!node || node.nodeType !== 3) return null;
  const t = node.textContent, re = /[\p{L}'’\-]/u; let s = off, e = off;
  while (s > 0 && re.test(t[s - 1])) s--; while (e < t.length && re.test(t[e])) e++;
  const w = t.slice(s, e).replace(/^[-'’]+|[-'’]+$/g, "");
  return w || null;
}
function closePop() { const p = $("#pop"); if (p) p.hidden = true; }
function showPop(word, x, y, target) {
  if (!word) return;
  const lk = lookup(word);
  const sent = target.closest("[data-de]")?.dataset.de;
  const sentFr = target.closest("[data-de]")?.textContent.trim();
  const p = $("#pop");
  const e0 = lk.entries[0];
  p.innerHTML = `<div class="pop-h"><b class="fr">${esc(word)}</b>${spk(word)}<button type="button" class="pop-x" aria-label="Schließen">${I("close")}</button></div>
   ${lk.entries.length ? lk.entries.slice(0, 3).map(e => `<div class="pop-e">${e.fr.toLowerCase() !== lk.word ? `<span class="fr small">${esc(e.fr)}</span>` : ""}<b>${esc(e.de)}</b>${e.note ? `<small>${esc(e.note)}</small>` : ""}</div>`).join("") : `<div class="pop-e muted">Nicht im Wörterbuch.</div>`}
   ${lk.pre && lk.preDe ? `<div class="pop-e"><small><b>${esc(lk.pre)}</b> = ${esc(lk.preDe)}</small></div>` : ""}
   ${sent ? `<div class="pop-s"><small>Ganzer Satz</small>${sentFr && sentFr.length < 220 ? `<span class="fr">${esc(sentFr)}</span>` : ""}<b>${esc(sent)}</b></div>` : ""}
   ${e0?.id && !S.leitner[e0.id] ? `<button type="button" class="ghost sm pop-add">${I("plus")} In die Lernkartei</button>` : ""}`;
  p.hidden = false;
  const W = p.offsetWidth, H = p.offsetHeight;
  let left = Math.min(innerWidth - W - 12, Math.max(12, x - W / 2)), top = y + 18;
  if (top + H > innerHeight - 12) top = Math.max(12, y - H - 18);
  p.style.left = left + "px"; p.style.top = top + "px";
  $(".pop-x", p).onclick = closePop;
  const add = $(".pop-add", p); if (add) add.onclick = () => { S.leitner[e0.id] = { b:1, due:0 }; save(); toast("In der Lernkartei gespeichert"); closePop(); };
  speak(word);
}
let lastTap = { t:0, x:0, y:0 }, lastTouchHandled = 0;
document.addEventListener("pointerup", e => {
  if (e.pointerType === "mouse") return;
  const now = Date.now();
  if (now - lastTap.t < 380 && Math.hypot(e.clientX - lastTap.x, e.clientY - lastTap.y) < 36) {
    const fr = e.target.closest(".fr"); if (fr && !e.target.closest("input,textarea,button.opt,.tok,.mt")) { lastTouchHandled = now; showPop(wordAt(e.clientX, e.clientY), e.clientX, e.clientY, e.target); }
    lastTap.t = 0; return;
  }
  lastTap = { t:now, x:e.clientX, y:e.clientY };
});
document.addEventListener("dblclick", e => {
  if (Date.now() - lastTouchHandled < 700) return;
  const fr = e.target.closest(".fr"); if (!fr || e.target.closest("input,textarea")) return;
  let w = (getSelection()?.toString() || "").trim(); if (!w || /\s/.test(w)) w = wordAt(e.clientX, e.clientY);
  try { getSelection().removeAllRanges(); } catch (er) {}
  showPop(w, e.clientX, e.clientY, e.target);
});
document.addEventListener("pointerdown", e => { const p = $("#pop"); if (p && !p.hidden && !p.contains(e.target)) closePop(); });

/* ═══════════ Akzent-Leiste ═══════════ */
const ACC = ["é","è","ê","à","â","ç","ù","û","î","ï","ô","œ","ë","'"];
let accTarget = null;
function showAccents(inp) {
  const bar = $("#accents"); accTarget = inp;
  const r = inp.getBoundingClientRect();
  bar.hidden = false;
  const W = bar.offsetWidth;
  bar.style.left = Math.max(8, Math.min(innerWidth - W - 8, r.left)) + "px";
  bar.style.top = (r.bottom + 6 + scrollY) + "px";
  bar.style.position = "absolute";
  if (inp.closest("#player")) { bar.style.position = "fixed"; bar.style.top = (r.bottom + 6) + "px"; }
}
function hideAccents() { const b = $("#accents"); if (b) b.hidden = true; accTarget = null; }
document.addEventListener("focusin", e => { if (e.target.matches(".tin, .wtext")) showAccents(e.target); else if (!e.target.closest("#accents")) hideAccents(); });
document.addEventListener("focusout", e => { setTimeout(() => { if (!document.activeElement?.matches?.(".tin, .wtext")) hideAccents(); }, 120); });
document.addEventListener("scroll", () => { if (accTarget) showAccents(accTarget); }, { passive:true, capture:true });

/* ═══════════ Start ═══════════ */
function init() {
  applyTheme();
  $("#accents").innerHTML = ACC.map(c => `<button type="button" tabindex="-1" data-c="${c}">${c}</button>`).join("");
  $("#accents").addEventListener("pointerdown", e => e.preventDefault());
  $("#accents").addEventListener("click", e => {
    const b = e.target.closest("button"); if (!b || !accTarget) return;
    const t = accTarget, s = t.selectionStart ?? t.value.length, en = t.selectionEnd ?? t.value.length;
    t.value = t.value.slice(0, s) + b.dataset.c + t.value.slice(en); t.setSelectionRange(s + 1, s + 1); t.dispatchEvent(new Event("input", { bubbles:true })); t.focus();
  });
  $("#pl-close").onclick = closeLesson;
  $("#pl-idk").onclick = () => { if (PL && PL.phase === "q") doCheck(true); };
  $("#pl-check").onclick = () => { if (!PL) return; if (PL.phase === "q") { if (PL.items[PL.i].k === "readtext") { PL.ctrl.check(); nextStep(); } else doCheck(); } };
  $("#sheet").addEventListener("click", e => { if (e.target.id === "sheet" || e.target.closest(".sheet-x")) closeSheet(); });
  document.addEventListener("click", e => { const b = e.target.closest(".spk"); if (b) { e.preventDefault(); e.stopPropagation(); speak(b.dataset.say); b.classList.remove("ping"); void b.offsetWidth; b.classList.add("ping"); } }, true);
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") { if (!$("#pop").hidden) return closePop(); if (!$("#sheet").hidden) return closeSheet(); }
    if (!PL || e.target.matches("input, textarea")) return;
    if (e.key === "Enter") { e.preventDefault(); if (PL.phase === "q" && PL.ctrl?.ready?.()) $("#pl-check").click(); else if (PL.phase === "f") nextStep(); }
    if (PL.phase === "q" && /^[1-4]$/.test(e.key) && PL.ctrl?.keys) PL.ctrl.keys(+e.key - 1);
  });
  route();
}
init();
})();
