const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, PageBreak } = require("docx");
const fs = require("fs");
const path = require("path");

const inputPath = path.join(__dirname, "The_Complete_First_Draft.txt");
const outputPath = path.join(__dirname, "The_Complete_First_Draft.docx");

const rawText = fs.readFileSync(inputPath, "utf8");
const lines = rawText.split("\n");

const children = [];
let inPlaceholder = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const trimmed = line.trim();

  // Divider lines (placeholder blocks)
  if (trimmed.startsWith("━━━")) {
    inPlaceholder = !inPlaceholder;
    children.push(new Paragraph({ text: "", spacing: { after: 100 } }));
    continue;
  }

  // Title line (first non-empty)
  if (trimmed === "RINGS OF DUST" && i < 10) {
    children.push(new Paragraph({
      children: [new TextRun({ text: "RINGS OF DUST", bold: true, size: 52, font: "Georgia" })],
      alignment: AlignmentType.CENTER,
      spacing: { after: 200 },
    }));
    continue;
  }

  if (trimmed === "A Novel" && i < 15) {
    children.push(new Paragraph({
      children: [new TextRun({ text: "A Novel", size: 32, font: "Georgia", italics: true })],
      alignment: AlignmentType.CENTER,
      spacing: { after: 120 },
    }));
    continue;
  }

  if (trimmed === "By [Author]" && i < 20) {
    children.push(new Paragraph({
      children: [new TextRun({ text: "By [Author]", size: 28, font: "Georgia" })],
      alignment: AlignmentType.CENTER,
      spacing: { after: 600 },
    }));
    // Page break after title block
    children.push(new Paragraph({ children: [new PageBreak()] }));
    continue;
  }

  // Chapter headers
  if (/^Chapter (One|Two|Three|Four|Five|Six|Seven|Eight|Nine|Ten|Eleven|Twelve|Thirteen|Fourteen|Fifteen|Sixteen|Seventeen|Eighteen|Nineteen|Twenty|Twenty-One|Twenty-Two|Twenty-Three|Twenty-Four|Twenty-Five)$/.test(trimmed)) {
    // Page break before chapters (except first)
    if (children.length > 5) {
      children.push(new Paragraph({ children: [new PageBreak()] }));
    }
    children.push(new Paragraph({
      children: [new TextRun({ text: trimmed, bold: true, size: 36, font: "Georgia" })],
      alignment: AlignmentType.CENTER,
      spacing: { before: 400, after: 120 },
    }));
    continue;
  }

  // Chapter subtitle (line right after chapter header that's short and not a regular sentence)
  if (i > 0) {
    const prevTrimmed = lines[i-1].trim();
    if (/^Chapter /.test(prevTrimmed) && trimmed.length > 0 && trimmed.length < 60 && !trimmed.includes('"')) {
      children.push(new Paragraph({
        children: [new TextRun({ text: trimmed, italics: true, size: 24, font: "Georgia" })],
        alignment: AlignmentType.CENTER,
        spacing: { after: 400 },
      }));
      continue;
    }
  }

  // Placeholder/draft note lines (inside divider blocks or the draft notes section)
  if (inPlaceholder || (i > 3 && i < 20 && trimmed.length > 0)) {
    children.push(new Paragraph({
      children: [new TextRun({ text: trimmed, italics: true, size: 18, color: "888888", font: "Calibri" })],
      spacing: { after: 40 },
    }));
    continue;
  }

  // Separator line (---)
  if (trimmed === "---") {
    children.push(new Paragraph({ text: "* * *", alignment: AlignmentType.CENTER, spacing: { before: 200, after: 200 } }));
    continue;
  }

  // Empty line
  if (trimmed === "") {
    children.push(new Paragraph({ text: "", spacing: { after: 80 } }));
    continue;
  }

  // Regular paragraph — support [EDIT]...[/EDIT] blue markup
  if (trimmed.includes("[EDIT]")) {
    const runs = [];
    const parts = trimmed.split(/(\[EDIT\]|\[\/EDIT\])/);
    let inEdit = false;
    for (const part of parts) {
      if (part === "[EDIT]") { inEdit = true; continue; }
      if (part === "[/EDIT]") { inEdit = false; continue; }
      if (part.length === 0) continue;
      runs.push(new TextRun({ text: part, size: 24, font: "Georgia", color: inEdit ? "0057D8" : "000000" }));
    }
    children.push(new Paragraph({ children: runs, spacing: { after: 120 }, indent: { firstLine: 720 } }));
  } else {
    children.push(new Paragraph({
      children: [new TextRun({ text: trimmed, size: 24, font: "Georgia" })],
      spacing: { after: 120 },
      indent: { firstLine: 720 },
    }));
  }
}

const doc = new Document({
  sections: [{
    properties: {
      page: {
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }, // 1in margins
      },
    },
    children,
  }],
});

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync(outputPath, buffer);
  console.log("Created: " + outputPath);
  console.log("Size: " + (buffer.length / 1024).toFixed(0) + " KB");
});
