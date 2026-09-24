"""Turn TTS_Ready/*.txt into TTS-clean chapter files in audiobook/build/.

- strips BOM, drops running heads ("RINGS OF DUST", "THE FIRST SPARK",
  "A Rings of Dust Prequel", "Chapters 11-16" TOC notes)
- keeps the title block one line per paragraph so build_epub.py can read it
- unwraps hard-wrapped paragraphs (joins lines inside a paragraph)
- scene breaks (---) become a pause marker [[BREAK]]
- "150x" style multipliers become "150 times"
"""
import io, re, pathlib
ROOT = pathlib.Path(__file__).resolve().parents[1]
SRC = ROOT / "TTS_Ready"
OUT = ROOT / "audiobook" / "build"
OUT.mkdir(parents=True, exist_ok=True)

ORDER = (
    ["The_First_Spark_Part1.txt", "The_First_Spark_Part2.txt", "The_First_Spark_Part3.txt"]
    + sorted(p.name for p in SRC.glob("Ch*.txt"))
    + ["Ep_I_Dubai.txt", "Ep_II_Nevada.txt", "Ep_III_Sequoia.txt"]
)
DROP = re.compile(r"^(RINGS OF DUST|THE FIRST SPARK|A Rings of Dust Prequel|Chapters \d+[–-]\d+)$")

def unwrap(text: str) -> list[str]:
    """Split into paragraphs; join wrapped lines within a paragraph.
    A leading block of short lines (title block) is kept one line per paragraph."""
    lines = text.split("\n")
    paras, i = [], 0
    while i < len(lines) and lines[i].strip() and len(lines[i].strip()) < 70:
        paras.append(lines[i].strip()); i += 1
    if i < len(lines) and lines[i].strip():      # ran into body text: not a title block
        paras, i = [], 0
    cur = []
    for line in lines[i:]:
        s = line.strip()
        if not s:
            if cur:
                paras.append(" ".join(cur)); cur = []
            continue
        if s == "---":
            if cur:
                paras.append(" ".join(cur)); cur = []
            paras.append("[[BREAK]]")
            continue
        cur.append(s)
    if cur:
        paras.append(" ".join(cur))
    return paras

def clean(p: str) -> str:
    p = re.sub(r"(\d[\d,]*)\s*×", r"\1 times", p)
    p = p.replace("×", " times ")
    p = re.sub(r"\s{2,}", " ", p)
    return p.strip()

manifest = []
for i, name in enumerate(ORDER, 1):
    raw = io.open(SRC / name, encoding="utf-8-sig").read().replace("\r\n", "\n")
    paras = [clean(p) for p in unwrap(raw)]
    paras = [p for p in paras if p and not DROP.match(p)]
    out = []
    for p in paras:
        if p == "[[BREAK]]" and (not out or out[-1] == "[[BREAK]]"):
            continue
        out.append(p)
    dst = OUT / f"{i:02d}_{name}"
    io.open(dst, "w", encoding="utf-8", newline="\n").write("\n\n".join(out) + "\n")
    manifest.append((dst.name, len(out), sum(len(p) for p in out if p != "[[BREAK]]")))

tot = 0
for n, np_, c in manifest:
    tot += c
    print(f"{n:45s} paras={np_:5d} chars={c:7d}")
print(f"TOTAL chars={tot}")
