# Rings of Dust — Edit & Diff Workflow

How to view changes between any two versions of the book. Two systems are wired up:

1. **LibreOffice Compare Documents** — visual diff with strikethrough/underline inside a Word doc you read in LibreOffice
2. **Git** — line-level diff of every chapter, with full history and one-click rollback

---

## System 1 — LibreOffice Compare (the way you've been working)

### Files

`Working_Draft/dist/<YYYY-MM-DD>/` holds dated `.docx` snapshots.

Each date folder contains:
- `Rings_of_Dust_FULL_<date>.docx` — the whole book stitched together
- `Ch01_Chapter_One_<date>.docx` — per-chapter docs, one per chapter

Per-chapter files are much faster to compare than the full book when you only want to see what changed in one chapter.

### How to generate a new snapshot

After (or before) any significant edit session:

```bash
cd "Desktop/AG/Rings_of_Dust_Book/Working_Draft"
node build_snapshots.js
```

That writes today's snapshots into `dist/<today>/`. To override the date (e.g. capture as a labeled "pre-edit" version):

```bash
node build_snapshots.js --date=2026-05-02-pre-edit
```

### How to see the difference between two snapshots in LibreOffice

1. Open the **older** snapshot in LibreOffice (e.g. `Rings_of_Dust_FULL_2026-05-01.docx`).
2. Menu: **Edit → Track Changes → Compare Document...**
3. In the file picker, choose the **newer** snapshot (e.g. `Rings_of_Dust_FULL_2026-05-02.docx`).
4. LibreOffice opens a manage-changes panel. Every difference is shown inline:
   - **Red strikethrough** = text removed from old → new
   - **Yellow/colored underline** = text added in new
   - **Margin bars** show which paragraphs changed
5. You can scroll, jump-to-next-change, or use the panel to Accept/Reject — but for read-only reviewing, just scroll.

### Per-chapter compare (faster)

If you only want to see what changed in Chapter 18:

1. Open `dist/2026-05-01/Ch18_The_Four_Coles_2026-05-01.docx`* in LibreOffice
2. Edit → Track Changes → Compare Document → pick `dist/2026-05-02/Ch18_The_Four_Coles_2026-05-02.docx`

\* *If a per-chapter snapshot doesn't exist for an older date — for example, the May 1 baseline only has the full-book file — diff against the FULL doc and use Find (Ctrl+F) to jump to the chapter heading.*

---

## System 2 — Git (under the hood)

The whole `Rings_of_Dust_Book/` folder is now a git repo. Every commit is a versioned snapshot of every file in it (chapters, source material, notes, snapshots themselves).

### See what's changed since the last commit

```bash
cd "Desktop/AG/Rings_of_Dust_Book"
git status                    # which files have been edited
git diff Working_Draft/Chapters/Ch18_The_Four_Coles.txt   # see the actual line-by-line changes
```

### See history

```bash
git log --oneline             # list of all commits
git log -p Working_Draft/Chapters/Ch18_The_Four_Coles.txt   # full history of one chapter
```

### Roll back a chapter to a prior version

```bash
git checkout <commit-hash> -- Working_Draft/Chapters/Ch18_The_Four_Coles.txt
```

### Visual diff in VS Code

If you open the `Rings_of_Dust_Book/` folder in VS Code, the Source Control panel (Ctrl+Shift+G) shows every changed file. Click any file to see a side-by-side diff with the last committed version. The Timeline view (in the Explorer sidebar) shows every prior commit's version of the file you have open.

### Commit your own milestones

Whenever you want to mark a checkpoint:

```bash
cd "Desktop/AG/Rings_of_Dust_Book"
git add -A
git commit -m "Working draft after listening pass on Ch 14"
```

Or just ask me to commit at a natural stopping point and I'll do it.

---

## Recommended cadence

- **Every time I (Claude) make significant edits**, I'll run `node build_snapshots.js` to capture the post-edit state and `git commit` to mark the milestone.
- **Before you start a listening / review session**, optionally run `node build_snapshots.js` yourself to capture the pre-listening state, so any notes-driven edits afterward will have a clean before/after.
- **Don't worry about manually managing files** — the system handles itself. Just open the dated `.docx` you want and use Compare Document to see what changed.

---

## Ignored files

Per `.gitignore`:
- `node_modules/` — npm deps, regeneratable
- `Audio/*.mp3` — audio is hundreds of MB, store separately
- `Source_Material/frames*/` — video stills, large PNG sets
- IDE / OS metadata files

If you want one of these tracked, edit `.gitignore` (or ask me to).
