"""Regenerate Source_Material/LORE_BIBLE.md as a verbatim mirror of TTS_Ready/LORE_BIBLE.txt."""
import io, pathlib
R = pathlib.Path(__file__).resolve().parents[1]
src = io.open(R/"TTS_Ready"/"LORE_BIBLE.txt", encoding="utf-8-sig", newline="").read()
hdr = ("# RINGS OF DUST — MASTER LORE BIBLE (mirror)

"
       "> **Canonical copy: `TTS_Ready/LORE_BIBLE.txt`.** This file is a verbatim mirror regenerated from it
"
       "> (`python scripts/sync_lore_mirror.py`). Do not edit here — edit the canonical file and re-run the sync.

")
io.open(R/"Source_Material"/"LORE_BIBLE.md", "w", encoding="utf-8", newline="").write(hdr+src)
print("mirror written")
