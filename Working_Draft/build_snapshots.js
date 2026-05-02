/*
 * build_snapshots.js
 *
 * Reads Chapters/Ch*.txt files (per-chapter source of truth) and writes:
 *   - dist/<date>/Rings_of_Dust_FULL_<date>.docx  (whole book stitched)
 *   - dist/<date>/Ch01_..._<date>.docx
 *   - dist/<date>/Ch02_..._<date>.docx
 *   - ... one .docx per chapter file
 *
 * Default <date> = today (YYYY-MM-DD). Override with --date=2026-05-15.
 *
 * Workflow:
 *   - Edit chapter prose in Chapters/Ch*.txt as usual.
 *   - Before a major edit session, run:   node build_snapshots.js
 *     (this captures the pre-edit state under today's date)
 *   - Make edits.
 *   - Run again with a tomorrow's date or a "_post" suffix to capture after.
 *   - In LibreOffice, open the older snapshot, then:
 *       Edit → Track Changes → Compare Document → pick the newer snapshot
 *     LibreOffice will mark every difference inline.
 */

const { Document, Packer, Paragraph, TextRun, AlignmentType, PageBreak } = require("docx");
const fs = require("fs");
const path = require("path");

const ROOT = __dirname;
const CHAPTERS_DIR = path.join(ROOT, "Chapters");

const dateArg = process.argv.find((a) => a.startsWith("--date="));
const date = dateArg ? dateArg.split("=")[1] : new Date().toISOString().slice(0, 10);

const DIST_DIR = path.join(ROOT, "dist", date);
fs.mkdirSync(DIST_DIR, { recursive: true });

// Discover chapter files (Ch01_*.txt, Ch02_*.txt, ...)
const chapterFiles = fs
  .readdirSync(CHAPTERS_DIR)
  .filter((f) => /^Ch\d{2}_.+\.txt$/.test(f))
  .sort();

if (chapterFiles.length === 0) {
  console.error(`No chapter files found in ${CHAPTERS_DIR}`);
  process.exit(1);
}

const ROMAN_NUMERAL_RE =
  /^Chapter (One|Two|Three|Four|Five|Six|Seven|Eight|Nine|Ten|Eleven|Twelve|Thirteen|Fourteen|Fifteen|Sixteen|Seventeen|Eighteen|Nineteen|Twenty|Twenty-One|Twenty-Two|Twenty-Three|Twenty-Four|Twenty-Five)$/;

function buildParagraphsFromText(rawText, opts = {}) {
  const { isFirstChapterInDoc = false } = opts;
  const lines = rawText.split(/\r?\n/);
  const children = [];
  let sawChapterHeader = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Skip the per-chapter "RINGS OF DUST" header — we handle the book title at the top of the full doc
    if (trimmed === "RINGS OF DUST") continue;

    // Chapter header (e.g. "Chapter Fourteen")
    if (ROMAN_NUMERAL_RE.test(trimmed)) {
      if (!isFirstChapterInDoc && !sawChapterHeader) {
        children.push(new Paragraph({ children: [new PageBreak()] }));
      }
      sawChapterHeader = true;
      children.push(
        new Paragraph({
          children: [new TextRun({ text: trimmed, bold: true, size: 36, font: "Georgia" })],
          alignment: AlignmentType.CENTER,
          spacing: { before: 400, after: 120 },
        })
      );
      continue;
    }

    // Chapter subtitle (short non-quoted line right after a chapter header)
    if (i > 0) {
      const prev = lines[i - 1].trim();
      if (ROMAN_NUMERAL_RE.test(prev) && trimmed.length > 0 && trimmed.length < 60 && !trimmed.includes('"')) {
        children.push(
          new Paragraph({
            children: [new TextRun({ text: trimmed, italics: true, size: 24, font: "Georgia" })],
            alignment: AlignmentType.CENTER,
            spacing: { after: 400 },
          })
        );
        continue;
      }
    }

    // Section breaks (--- or * * *)
    if (trimmed === "---" || trimmed === "* * *") {
      children.push(
        new Paragraph({
          text: "* * *",
          alignment: AlignmentType.CENTER,
          spacing: { before: 200, after: 200 },
        })
      );
      continue;
    }

    // Empty line
    if (trimmed === "") {
      children.push(new Paragraph({ text: "", spacing: { after: 80 } }));
      continue;
    }

    // Regular paragraph
    children.push(
      new Paragraph({
        children: [new TextRun({ text: trimmed, size: 24, font: "Georgia" })],
        spacing: { after: 120 },
        indent: { firstLine: 720 },
      })
    );
  }

  return children;
}

async function writeDoc(children, outName) {
  const doc = new Document({
    sections: [
      {
        properties: {
          page: { margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 } },
        },
        children,
      },
    ],
  });
  const buffer = await Packer.toBuffer(doc);
  const outPath = path.join(DIST_DIR, outName);
  fs.writeFileSync(outPath, buffer);
  return { path: outPath, sizeKB: (buffer.length / 1024).toFixed(0) };
}

function titlePageChildren(subtitle) {
  return [
    new Paragraph({
      children: [new TextRun({ text: "RINGS OF DUST", bold: true, size: 52, font: "Georgia" })],
      alignment: AlignmentType.CENTER,
      spacing: { before: 1200, after: 240 },
    }),
    new Paragraph({
      children: [new TextRun({ text: subtitle, italics: true, size: 28, font: "Georgia" })],
      alignment: AlignmentType.CENTER,
      spacing: { after: 600 },
    }),
    new Paragraph({
      children: [new TextRun({ text: `Snapshot ${date}`, size: 22, font: "Georgia", color: "888888" })],
      alignment: AlignmentType.CENTER,
      spacing: { after: 400 },
    }),
    new Paragraph({ children: [new PageBreak()] }),
  ];
}

(async () => {
  console.log(`\nBuilding snapshots for ${date} → dist/${date}/\n`);

  // Per-chapter .docx
  for (const file of chapterFiles) {
    const text = fs.readFileSync(path.join(CHAPTERS_DIR, file), "utf8");
    const children = buildParagraphsFromText(text, { isFirstChapterInDoc: true });
    const outName = `${file.replace(/\.txt$/, "")}_${date}.docx`;
    const { sizeKB } = await writeDoc(children, outName);
    const words = text.trim().split(/\s+/).length;
    console.log(`  ${outName.padEnd(50)} ${String(words).padStart(6)} words   ${sizeKB} KB`);
  }

  // Combined full-book .docx
  const fullChildren = [...titlePageChildren("A Novel")];
  let isFirst = true;
  let totalWords = 0;
  for (const file of chapterFiles) {
    const text = fs.readFileSync(path.join(CHAPTERS_DIR, file), "utf8");
    totalWords += text.trim().split(/\s+/).length;
    fullChildren.push(...buildParagraphsFromText(text, { isFirstChapterInDoc: isFirst }));
    isFirst = false;
  }
  const fullName = `Rings_of_Dust_FULL_${date}.docx`;
  const { sizeKB: fullSize } = await writeDoc(fullChildren, fullName);
  console.log(`\n  ${fullName.padEnd(50)} ${String(totalWords).padStart(6)} words   ${fullSize} KB`);

  console.log(`\nDone. ${chapterFiles.length + 1} files in ${DIST_DIR}\n`);
})();
