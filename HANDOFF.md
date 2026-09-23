# Rings of Dust — Session Handoff

## Project

Prose editing session for *Rings of Dust*, a sci-fi manuscript. All canonical
files live in `TTS_Ready/`. The repo is **AGOGMax/rings-of-dust** on GitHub,
`main` branch.

---

## Git Discipline (non-negotiable)

- **Stage by exact file path only.** Never `git add .` or `git add -A`.
  Lef leaves WIP Solidity in the tree; broad staging clobbers it.
- **Co-author line** on every commit:
  `Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>`
- Commit after every edit. Push after every commit. Verify on GitHub.
- PowerShell heredocs require `@'...'@` syntax (single-quoted); Bash `<<'EOF'`
  also works. Never use `--no-verify`.

---

## What Was Done This Session

### 2026-09-23 — epilogues + book-wide "the way X does Y" sweep
- **Ep_III:** road atlas cut (Emily + Sommi shelling walnuts on the porch steps);
  Gracie paragraph in plain English; "Rachel was the architect"; Rachel's two
  questions now on the page ("Who holds it when you're done?" / "And who is
  allowed to stop you?"); Sam's sunglasses named as a Collective patch (Special
  Agent, gold); everyone in the room reads the bronze star; ends on Ricardo
  pulling Fight Club — "Care for a cinematic experience, Jackpot?"
- **Ch28:** now ends on Sharon — "It was always in the reaching," she said. /
  She reached. (moved from Ep_III so the book doesn't end twice the same way).
- **Ep_II rewritten:** nine weeks in Federation holding outside Reno → envelope
  (ticket, cash, Dale Custer license) → he reads it as Alpha extraction. Watch
  taken: "Marcus wants what belongs to him." It WAS Marcus — payment for the
  unsanctioned road attack on Cole and Ricardo (matches LORE:476/762). "Marcus
  was the noise" line cut — it contradicted the Lore Bible. Foreshadow: one road
  out, the town will take its time.
- **Road atlas:** now only the Sharon/Emily shared thing (Ch04, Ch12, Ch15 map
  use, Ch26, Ch28). Cut the comfort-object callbacks in Ch19, Ch23, Ch27 and
  Ch15's re-explanation (which also contradicted Ch12 on where she bought it).
- **Book-wide sweep — 104 cuts across 30 files:** every "X did Y the way a
  person/someone/you does Y when..." explanation and every "the way he always
  did it" tautology. Concrete similes with a real image were KEPT (stone in deep
  water, pilot light, wave through a buoy, cathedral, fungus, chessboard).
  Add to the formula table below: `the way a [person] [verb]s when` — cut on sight.
- **Continuity fix:** Ch21:1155/1159 had Sam as "his checklist" / "he thought".
  Sam is she everywhere else. Fixed.
### 2026-09-17 — LORE_BIBLE timeline sync + pending audit
- **LORE_BIBLE.txt:849** — rewritten from "Jun–Jul 2033 — Day 180 confirmed:
  100× interior" to "Aug 2033 — Day 231: 150× / Grade 4 HIGH CHARGE / all 777
  cycling since cycle 1 / Elsa projection to Day 627" per Ch24. Unlock-experiment
  clause dropped (Ch24 has no unlock experiment; only the EXTENDED LOCK SCENARIO
  projection at Ch24:431). Pending item 1 closed.
- **NEW pending (bigger than 849):** LORE_BIBLE.txt:742, 744, 746 still carry the
  old mechanic — "holds there until Day 180", "Stakers lock for 180 days",
  "Day 180 breakthrough: interior at 100×", "exterior deposits cycling ... for as
  long as the lock holds". All contradict LORE:12/130 and Ch24 (ladder: 33/66/
  132/231; exterior cycling from cycle 1, never gated). Needs author ruling on
  whether the lock/stake framing survives at all before those three paragraphs
  are rewritten. Not touched.
- **"in the way" list (pending 2) — verdicts, not applied:**
  Ch05:376 filler (drop "in": "the way it always had") · Ch08:571 borderline ·
  Ch14:598 earned, keep · Ch15:220 earned (clause pays off), keep ·
  Ch16:203 the phrase is the least of it — the whole line is a five-"and" run-on,
  needs chopping · Ch18:167 tautology filler, cut · Ch21:612 earned, keep.
- **Ch28:416/428 (pending 3):** second pair sets up the porch payoff — keep.
  First pair could drop to one line. Author call.
- HANDOFF.md was untracked on arrival — committed this session.

### Ch28_Cosmic_Lanes.txt (primary file — extensive)
- Sharon car opening: cut all recovery/invalid framing → she watches the road,
  both eyes on it, Cole looks at her and either she catches it or she doesn't
- Gracie added to bowling alley holographically; bowls a holographic ball,
  passes through pins, "Geometrically, that was a strike"
- Ring continuity fixed: Cole gives Sharon the copper-wire ring back during
  the bowling alley conversation (not on the plane in Ch27)
  Ring dialogue: "How did you know I'd want it back?" / "Gracie. She said you
  never took it off. Not once. Not until you couldn't." / "Smart girl."
- Sam's proposal: "She knew what was coming. She was letting it come."
  (cut "Sam had been watching him the entire time")
- After Sharon's speech: "Something in the vicinity of Cole's chest performed
  a structural event that he had no current word for. He would find one later."
  (cut the cheesy Gracie phone/ring reveal entirely)
- Vending machine: "The approach was methodical. The exploitation was efficient.
  The extraction phase lasted four minutes. Then Sam noticed the alcove was quiet."
- Exodus: coordinated exit, window between Bitboy-has-had-an-inadvisable-amount
  and Bitboy-is-in-the-parking-lot
- Lane attendant joke: CUT ENTIRELY (tried twice, both times wrong)
- Sharon parking lot: comes out on her own a few minutes later, no explanation
- Bitboy → car via Gracie: Gracie steps out of Cole's pocket thumb-high,
  speaks in Bitboy's register, six limbs retract one at a time,
  "He'll get in the car." / "We have an understanding."
- California: appears ONCE only — "They drove away into the California night"
- Porch epilogue: added Cole/Sharon scene (he stays up with her; she asks about
  the structural event; he explains the Four Coles/DarkX compound, the version
  of himself that decided grief was the safe bet; "He's gone"; she says "Good";
  he goes inside)
- Ending rewritten: "She had a hole in her head once. They had taken pieces of
  her and replaced them with metal and light and she had looked at the new shape
  and decided it would do. She had never been interested in what she used to be.
  She was interested in what she would do next. She was not done."
- Sierras line fixed: "mountains that have been standing eons"

### Ch27_Earth_Return.txt
- Fixed "outside the recovery facility" → "on the Golden Dawn" (ring continuity)
- Cut the plane ring-giving scene entirely

### Ch04, Ch05, Ch06, Ch21 (formula sweep)
- Cut all "in the [adj] way that" formula phrases book-wide (6 instances fixed)

### Book-wide: "thought about" stacking (14 blocks across 9 chapters)
All converted to flash-fragment form. Files touched:
Ch10, Ch14 (3 blocks), Ch18, Ch19 (2 blocks), Ch20, Ch21 (2 blocks),
Ch23 (2 blocks), Ch25, Ch26

---

## Formula Patterns Being Eliminated

These are chronic formula phrases the author has flagged. Cut on sight when
they appear as pure filler:

| Pattern | Status |
|---|---|
| `in the [adj] way that` / `in the way` | Book-wide sweep done; residual instances in Ch05/Ch08/Ch14/Ch15/Ch16/Ch18/Ch21 — some are earned, some may still be filler |
| `he/she thought about` stacking (3+ in proximity) | DONE — all 14 confirmed stacks fixed |
| `the way a [person/someone/you] [verb]s when...` | Book-wide sweep DONE 2026-09-23 (104 cuts). Cut on sight if it reappears |
| `the expression of a person who` | Cut on sight |
| `which was consistent with` | Cut on sight |
| `the particular quality of` | Cut on sight |
| `containing everything without comment` | Cut — do not reintroduce |
| Road atlas gag | PERMANENTLY DEAD — never reintroduce Emily + road atlas |
| Run-on sentences chained with "and" | Cut throughout epilogue |

---

## Ring Continuity (copper-wire ring)

Full chain — do not break:
- **Ch04**: Cole makes it / gives it to Sharon
- **Ch08**: Cole doesn't know where it is
- **Ch14**: its absence noted (against his ribs)
- **Ch21**: Hexo gives it to Cole on the Golden Dawn
- **Ch27**: Cole has it / waiting
- **Ch28**: Cole gives it back to Sharon during bowling alley scene

---

## Character Notes

**Sharon**: At 99% by Ch28. NOT recovering, NOT an invalid. The "Calibrating"
joke at the bowling alley is about equipment mastery, not about her being
diminished. Half robot — she accepted the new shape and decided it would do.
She's fierce, practical, never asks for sympathy. Keep her fire.

**Cole**: The Four Coles / DarkX experience (Ch20) burned off the version of
him that had decided grief was the safe bet. "His own warden" — that one is gone.
Now he hears things the right way. The structural event in his chest at the
bowling alley is the evidence of that.

**Gracie**: Descended from Bitboy's code architecture (established Ch21). This
is why she can interface with him directly — shared code ancestry. She is
present holographically at the bowling alley. She bowled a holographic ball.

**Bitboy**: Six limbs. Vending machine incident. The window between
inadvisable-amount and parking-lot is exactly as long as it takes him to get
outside. They know the window.

**Heavy/Ricardo**: He pressed his shirt. The ring explanation was his favorite
part. "Moissanite is harder than sapphire, almost as hard as diamond... I have
already begun being useful to you financially."

---

## Pending Items

1. **LORE_BIBLE.txt line 849**: Still says "Day 180 confirmed: 100× interior
   growth" — needs updating to reflect grade ladder discovery at Day 231 per
   Ch24 rewrite. (Flagged multiple sessions, not yet done.)

2. **Remaining "in the way" instances** — not yet fixed, may be earned or may
   be filler, need author judgment:
   - Ch05:376 — "The harness pressed against his chest in the way it always had"
   - Ch08:571 — "went dark in the deliberate way of something configured not to cooperate"
   - Ch14:598 — "the way a man looked at a place he had been to before"
   - Ch15:220 — "relaxed in the specific way that trained people relax, where the relaxation is a posture rather than a state"
   - Ch16:203 — "in the way it always went quiet"
   - Ch18:167 — "in the way he always turned the math over"
   - Ch21:612 — "And in the way she said it, Cole understood..."

3. **Ch28 borderline**: Lines 416 and 428 — two internal pairs of "he thought
   about" that are 12 lines apart. Not stacking, but two pairs in close
   succession. Author may want to review.

---

## Recent Commits (for context)

```
6bfe1c9  Cut all 'thought about' stacking across 9 chapters
b60b13b  Ch28 epilogue: add Cole/Sharon porch scene, rewrite ending
6c0cd69  Book-wide: cut 'in the [adj] way' formula across Ch04/05/06/21/28
```
