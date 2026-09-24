"""Turn TTS_Ready/*.txt into TTS-clean chapter files in audiobook/build/.

- strips BOM, drops the per-chapter "RINGS OF DUST" running head
- unwraps hard-wrapped paragraphs (joins lines inside a paragraph)
- scene breaks (---) become a blank-line pause marker [[BREAK]]
- "150x" style multipliers become "150 times"
- reports anything it is unsure about
"""
import io, re, sys, pathlib
ROOT = pathlib.Path(__file__).resolve().parents[1]
SRC = ROOT / "TTS_Ready"
OUT = ROOT / "audiobook" / "build"
OUT.mkdir(parents=True, exist_ok=True)

ORDER = (
    ["The_First_Spark_Part1.txt", "The_First_Spark_Part2.txt", "The_First_Spark_Part3.txt"]
    + sorted(p.name for p in SRC.glob("Ch*.txt"))
    + ["Ep_I_Dubai.txt", "Ep_II_Nevada.txt", "Ep_III_Sequoia.txt"]
)

def unwrap(text: str) -> list[str]:
    """Split into paragraphs; join wrapped lines within a paragraph."""
    paras, cur = [], []
    for line in text.split("\n"):
        s = line.rstrip()
        if not s.strip():
            if cur:
                paras.append(" ".join(cur)); cur = []
            continue
        if s.strip() == "---":
            if cur:
                paras.append(" ".join(cur)); cur = []
            paras.append("[[BREAK]]")
            continue
        cur.append(s.strip())
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
    paras = [p for p in paras if p and p != "RINGS OF DUST"]
    # collapse doubled breaks
    out = []
    for p in paras:
        if p == "[[BREAK]]" and out and out[-1] == "[[BREAK]]":
            continue
        out.append(p)
    dst = OUT / f"{i:02d}_{name}"
    io.open(dst, "w", encoding="utf-8", newline="\n").write("\n\n".join(out) + "\n")
    chars = sum(len(p) for p in out if p != "[[BREAK]]")
    manifest.append((dst.name, len(out), chars))

tot = 0
for n, np_, c in manifest:
    tot += c
    print(f"{n:45s} paras={np_:5d} chars={c:7d}")
print(f"TOTAL chars={tot}")
