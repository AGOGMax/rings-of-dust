const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'Rings_of_Dust_READING.txt');
const outDir = path.join(__dirname, 'Chapters');

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

const text = fs.readFileSync(src, 'utf8');
const lines = text.split('\n');

const chapterFilenames = {
  "Chapter One":      "Ch01_Chapter_One",
  "Chapter Two":      "Ch02_Chapter_Two",
  "Chapter Three":    "Ch03_A_Thousand_Thrills",
  "Chapter Four":     "Ch04_Chapter_Four",
  "Chapter Five":     "Ch05_Chapter_Five",
  "Chapter Six":      "Ch06_Chapter_Six",
  "Chapter Seven":    "Ch07_Chapter_Seven",
  "Chapter Eight":    "Ch08_Chapter_Eight",
  "Chapter Nine":     "Ch09_Chapter_Nine",
  "Chapter Ten":      "Ch10_Chapter_Ten",
  "Chapter Eleven":   "Ch11_Chapter_Eleven",
  "Chapter Twelve":   "Ch12_Chapter_Twelve",
  "Chapter Thirteen": "Ch13_Chapter_Thirteen",
  "Chapter Fourteen": "Ch14_Chapter_Fourteen",
  "Chapter Eighteen": "Ch18_The_Four_Coles",
};

let currentChapter = null;
let currentLines = [];
let written = 0;

function flush() {
  if (!currentChapter || currentLines.length === 0) return;
  const filename = (chapterFilenames[currentChapter] || currentChapter.replace(/ /g, '_')) + '.txt';
  const content = currentLines.join('\n').trimEnd() + '\n';
  fs.writeFileSync(path.join(outDir, filename), content);
  const words = content.trim().split(/\s+/).length;
  console.log(`  ${filename}  (${words.toLocaleString()} words)`);
  written++;
}

for (const line of lines) {
  const trimmed = line.trim();
  if (chapterFilenames.hasOwnProperty(trimmed)) {
    flush();
    currentChapter = trimmed;
    currentLines = ['RINGS OF DUST', '', trimmed, ''];
  } else if (currentChapter) {
    currentLines.push(line);
  }
}
flush();

console.log(`\n${written} chapter files in Chapters/`);
