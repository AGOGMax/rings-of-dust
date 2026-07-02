# Rings of Dust — Editorial Workflow

**Source of truth:** `TTS_Ready/` is the canonical manuscript. All changes go to `TTS_Ready/` files and are committed to GitHub immediately. Do not edit Working_Draft (deleted) or any dist snapshot.

**Lore reference:** `TTS_Ready/LORE_BIBLE.txt` is the ultimate arbiter on all character, timeline, and science details. `CHAPTER_SUMMARY.md` is the chapter-by-chapter plot map.

---

## 1. The Three-Phase Edit Process

### Phase 1: Story Bible Consolidation

Before any structural pass, feed all existing notes, outlines, and reference documents to establish the source of truth.

> "You are a senior story editor working on *Rings of Dust*. I am going to give you a set of notes, outlines, and reference documents that may contain contradictions. Your job is to analyze them for contradictions and synthesize them into a clean, structured reference guide. Do not rewrite anything yet. Acknowledge when you are ready to receive the notes."

### Phase 2: Structural Overhaul (Macro-Edit)

Use the LORE_BIBLE and CHAPTER_SUMMARY as the source of truth. Upload chapter summaries, not full text.

> "Act as a brutal, highly experienced Developmental Editor. Use the lore bible as the ultimate source of truth for *Rings of Dust*, followed by the current CHAPTER_SUMMARY.md.
> Analyze the outline for the following specific issues:
> 1. Pacing dead-zones (where the plot stalls).
> 2. Character motivation drops (where a character acts out of alignment with the Story Bible).
> 3. Plot holes or unresolved setups.
> Give me a bulleted critique of where the structural integrity of the story breaks down, and suggest 2–3 ways to tighten the narrative arc."

### Phase 3: Prose Pass (Micro-Edit, one chapter at a time)

> "We are now line-editing the TTS-ready version of Chapter [X]. You must strictly adhere to the Master Story Bible.
> CRITICAL RULES:
> 1. Preserve the Voice — do not smooth out the writing into generic AI prose. Retain specific sentence structures, rhythm, and tone.
> 2. Show, Don't Tell — point out areas where emotions or backstories are explained instead of played out through action and dialogue.
> 3. Pacing — highlight sentences that are repetitive, overly wordy, or slow down the scene's momentum.
> Do not rewrite yet. First give a list of specific, actionable feedback. Then ask which changes to apply before generating an edited version."

---

## 2. AI Blindspot Fixes

- **Flat dialogue:** *"Analyze the dialogue in this scene. Identify where characters sound identical. Differentiate their voices by adjusting cadence, vocabulary, and subtext based on their Story Bible entries."*
- **Pacing in action scenes:** *"Break down sentence lengths in this scene. Where are sentences too long or complex, ruining urgency? Suggest where to use short, punchy fragments."*
- **Cliché sweep:** *"Scan this chapter and list every cliché, overused metaphor, or melodramatic phrase. Provide 3 unique, grounded, sensory-rich alternatives for each."*

---

## CHAPTER SWEEP PROMPT

Read the entire chapter from start to finish — not a keyword search, a full read. Then check every item below and report findings with line numbers and recommended fixes. If something is clean, say so. If something is wrong, say exactly what and why.

---

**1. STRUCTURAL PLACEMENT**
- Are there any named sections (MERIDIAN, INTERLUDE, INSERT, etc.) that appear to belong to a different chapter or timeline?
- Is there any content that reads like it was pasted in from another chapter or an earlier draft?
- Does the chapter start and end at the right narrative moment, or does it bleed into adjacent chapters?

**2. SPOILER / TIMING VIOLATIONS**
- Does any character describe, predict, or explain a discovery the story hasn't made yet? (e.g. Ray describing Station Libre results before Station Libre happens)
- Does the narrator reveal information the POV character wouldn't have at that point in the timeline?
- Are any plot points named or resolved here that should land later?

**3. LORE BIBLE COMPLIANCE**
- Check all technical mechanics: void sacrifice (no push — carry cells down the east tunnel until gravity lets go of them, then release), DarkX awareness/behavior, Rapture date (November 22, 2033), ring plane sealing, FuelCell cycle terminology (11-day standard cycle; 33-day lock = 10× interior yield; 180-day lock = 100× interior yield + all 740 cells begin continuous exterior cycling every 11 days)
- Check all rank/patch details: correct symbol per tier, always hidden under clothing, bronze/silver/gold metal rule, Sam has wrench patch until Ep_III
- Check the Von Grutzen / Verguld bloodline connection: The name FIRST appears in Ch16 — Petra reads from the founder's records; the founder's name at the top and bottom of the page is Von Grutzen; Jill goes still; Petra folds the paper without comment. Ch22 (The Pull) is a SECOND moment where the name surfaces again in a different context — do not treat Ch22 as the first reveal. Tyler never names it in either chapter.
- Check the power hierarchy framing where relevant: Marcus → Alpha Corp → Federation → Populace

**4. CHARACTER NAMING**
- Cole is "Jackpot" from: Heavy/Ricardo, Taylor, Federation personnel, engineers
- Cole is "Cole" from: Emily, Sharon, Gracie, Sam (intimate contexts), DarkX visions
- iRIS capitalization: always lowercase-i, uppercase RIS — "iRIS" (never "IRiS" or "IRIS")
- Collective rank order: Informant → Operator (Jr/Sr/Lead) → Agent/Field Agent (sunglasses patch) → Navigator → Grand Admiral — "Technician" is not a rank
- Check any other character with a call sign or nickname — is it used consistently by the right people?

**5. DIALOGUE ATTRIBUTION**
- Are all dialogue lines clearly attributed? Any orphaned quotes where the speaker is ambiguous?
- Does any character speak in a voice that doesn't match their established register?

**6. CONTINUITY WITH ADJACENT CHAPTERS**
- Does anything in this chapter contradict what was established in the chapter before it?
- Does anything here give away what happens in the next chapter in a way that kills the landing?

**7. DATES AND TIMELINE**
- Any dates mentioned — do they match the canonical timeline? (Story present = early 2030s, Golden Dawn mission = 2033, Rapture = November 22, 2033)
- Does the chapter's internal timeline (days passing, events in sequence) hold together?
- Jill's colony timeline: arrival → 15-day first stay → departs → Day 23 she returns (Ch22)

**8. PROSE INTEGRITY**
- Any unfinished sentences, mid-scene cuts, or passages that trail off without resolution?
- Any duplicate passages — same scene or information appearing twice?
- Any formatting artifacts (ALL CAPS headers, bracketed notes, [INSERT], draft annotations, voice-transcription fragments)?

---

Report format:
> **[ISSUE TYPE] Line X:** What's wrong. Recommended fix.

If the chapter is clean on a given item, write **[CLEAN]** next to it. Don't skip items. After completing all 8 checks, compare any flagged items against the Lore Bible before finalizing recommendations.

---

## OPEN DEV EDIT ISSUES

Structural gaps flagged for attention. Verify whether each has been addressed in current TTS_Ready files before acting — some may have been resolved in recent passes.

1. **Emily disappears Ch05–Ch11** — no Emily POV between the highway ambush and Pier Nine. Needs at least one interstitial beat showing her grief and rage building before she resurfaces at Ch12 (Pier Nine).

2. **Cole's grief has no oxygen Ch08–Ch17** — gap between learning Sharon is dead (Ch08, Proximity) and the reckoning (Ch17, The Locked Bay). Needs a beat between the wound and the acknowledgment.

3. **Conrad's graphite mark needs a callback** — mark transfers in Ch02 (Las Vegas). Pays off in Ch19 (The Secret Site). 17 chapters with no mention in between. Suggested: Emily notices it at the motel, in the car, or at the pier before the payoff.

4. **The Rapture needs to be seeded as a ticking clock** — Saturn's closing window (Nov 22, 2033) is a plot constraint but may not be established as such before it becomes relevant. Needs at least one early chapter reference.

5. **Sam needs one POV window** — set up as the most perceptive person on the Golden Dawn but has no perspective scene of her own.

6. **DeMint reading fabricated comms** — the fabricated message needs to land on-page before Ch11 (DeMint) so his reaction reads as payoff, not introduction.

7. **Greenbaum's setup in Ch02 needs weight** — his humiliation in the Las Vegas elevator needs enough presence that his return in Ch05 (Launch and the Ambush) reads as a pre-established threat, not a stranger with a gun.
