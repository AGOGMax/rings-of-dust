"""Build audiobook/dist/Rings_of_Dust.epub from audiobook/build/*.txt.

Run normalize.py first. One XHTML file per chapter with an <h1> so ElevenLabs
Audiobooks detects chapters. Scene breaks ([[BREAK]]) become an empty spacer
paragraph — safer than an SSML tag that a document import might read aloud.

    python audiobook/normalize.py && python audiobook/build_epub.py [--prequel-last]
"""
import io, re, sys, zipfile, pathlib, html, uuid, datetime
ROOT = pathlib.Path(__file__).resolve().parents[1]
BUILD = ROOT / "audiobook" / "build"
DIST = ROOT / "audiobook" / "dist"
DIST.mkdir(parents=True, exist_ok=True)
PREQUEL_LAST = "--prequel-last" in sys.argv

files = sorted(BUILD.glob("*.txt"))
prequel = [f for f in files if "First_Spark" in f.name]
rest = [f for f in files if "First_Spark" not in f.name]
files = rest + prequel if PREQUEL_LAST else prequel + rest

ROMAN = {"I": "One", "II": "Two", "III": "Three"}
EP_PLACE = {"I": "Dubai", "II": "Eureka", "III": "Sequoia"}

def split_title(name, paras):
    """Return (title, subtitle_or_None, body_paras)."""
    if "First_Spark" in name:
        # THE FIRST SPARK / Part One: ... / Iceland, 1938
        return f"The First Spark — {paras[0]}", None, paras[1:]
    if name.split("_", 1)[1].startswith("Ch"):
        # Chapter One / The Polaris
        return f"{paras[0]}: {paras[1]}", None, paras[2:]
    m = re.match(r"EPILOGUE (I+)", paras[0])
    if m:
        n = m.group(1)
        return f"Epilogue {n}: {EP_PLACE[n]}", None, paras[1:]
    return paras[0], None, paras[1:]

chapters = []
for i, f in enumerate(files, 1):
    paras = [p for p in io.open(f, encoding="utf-8").read().split("\n\n") if p.strip()]
    title, _, body = split_title(f.name, paras)
    xml = [f"<h1>{html.escape(title)}</h1>"]
    for p in body:
        if p == "[[BREAK]]":
            xml.append('<p class="brk">&#160;</p>')
        else:
            xml.append(f"<p>{html.escape(p)}</p>")
    chapters.append((f"ch{i:02d}", title, "\n".join(xml)))

bid = str(uuid.uuid4())
now = datetime.datetime.utcnow().strftime("%Y-%m-%dT%H:%M:%SZ")
out = DIST / ("Rings_of_Dust_prequel-last.epub" if PREQUEL_LAST else "Rings_of_Dust.epub")

with zipfile.ZipFile(out, "w") as z:
    z.writestr("mimetype", "application/epub+zip", compress_type=zipfile.ZIP_STORED)
    z.writestr("META-INF/container.xml", """<?xml version="1.0" encoding="UTF-8"?>
<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
  <rootfiles><rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/></rootfiles>
</container>""", compress_type=zipfile.ZIP_DEFLATED)
    z.writestr("OEBPS/style.css", "body{font-family:serif;line-height:1.5} h1{text-align:center;margin:2em 0} p{margin:0 0 1em} p.brk{margin:2em 0}",
               compress_type=zipfile.ZIP_DEFLATED)
    manifest, spine, nav, ncx = [], [], [], []
    for n, (cid, title, body) in enumerate(chapters, 1):
        doc = f"""<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops">
<head><title>{html.escape(title)}</title><link rel="stylesheet" type="text/css" href="style.css"/></head>
<body epub:type="bodymatter">
<section epub:type="chapter">
{body}
</section>
</body></html>"""
        z.writestr(f"OEBPS/{cid}.xhtml", doc, compress_type=zipfile.ZIP_DEFLATED)
        manifest.append(f'<item id="{cid}" href="{cid}.xhtml" media-type="application/xhtml+xml"/>')
        spine.append(f'<itemref idref="{cid}"/>')
        nav.append(f'<li><a href="{cid}.xhtml">{html.escape(title)}</a></li>')
        ncx.append(f'<navPoint id="{cid}" playOrder="{n}"><navLabel><text>{html.escape(title)}</text></navLabel><content src="{cid}.xhtml"/></navPoint>')
    z.writestr("OEBPS/nav.xhtml", f"""<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops">
<head><title>Contents</title></head>
<body><nav epub:type="toc" id="toc"><h1>Contents</h1><ol>
{chr(10).join(nav)}
</ol></nav></body></html>""", compress_type=zipfile.ZIP_DEFLATED)
    z.writestr("OEBPS/toc.ncx", f"""<?xml version="1.0" encoding="UTF-8"?>
<ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1">
<head><meta name="dtb:uid" content="urn:uuid:{bid}"/></head>
<docTitle><text>Rings of Dust</text></docTitle>
<navMap>{chr(10).join(ncx)}</navMap></ncx>""", compress_type=zipfile.ZIP_DEFLATED)
    z.writestr("OEBPS/content.opf", f"""<?xml version="1.0" encoding="UTF-8"?>
<package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifier="bookid">
<metadata xmlns:dc="http://purl.org/dc/elements/1.1/">
  <dc:identifier id="bookid">urn:uuid:{bid}</dc:identifier>
  <dc:title>Rings of Dust</dc:title>
  <dc:creator>AGOGMax</dc:creator>
  <dc:language>en</dc:language>
  <meta property="dcterms:modified">{now}</meta>
</metadata>
<manifest>
  <item id="nav" href="nav.xhtml" media-type="application/xhtml+xml" properties="nav"/>
  <item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml"/>
  <item id="css" href="style.css" media-type="text/css"/>
  {chr(10).join(manifest)}
</manifest>
<spine toc="ncx">{chr(10).join(spine)}</spine>
</package>""", compress_type=zipfile.ZIP_DEFLATED)

print(f"wrote {out} ({out.stat().st_size//1024} KB), {len(chapters)} chapters")
for _, t, _ in chapters:
    print("  ", t)
