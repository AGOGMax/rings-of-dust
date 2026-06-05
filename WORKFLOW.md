Your job is to analyze them for contradictions and synthesize them into a clean, structured reference guide. Do not rewrite anything yet. Acknowledge if you are ready to receive the notes."

### Phase 2: The Structural Structural Overhaul (Macro-Edit)
Instead of uploading the whole book, upload your Chapter Outline or short summaries of each rewritten chapter alongside your new Master Story Bible.


The Prompt:
> "Act as a brutal, highly experienced Developmental Editor. Use the lore bible as the ultimate source of truth for Rings of Dust, followed by the current Chapter guide.md.
> Analyze the outline for the following specific issues:
>  1. Pacing dead-zones (where the plot stalls).
>  2. Character motivation drops (where a character acts out of alignment with the Story Bible).
>  3. Plot holes or unresolved setups.
> Give me a bulleted critique of where the structural integrity of the story breaks down, and suggest 2-3 ways to tighten the narrative arc."
 
### Phase 3: The "Chunking" Prose Pass (Micro-Edit)
Once your structure is solid, you edit one chapter at a time. To keep the AI from writing generic, boring prose, you must give it strict styling boundaries and safety rails.
The Prompt:
> "We are now line-editing the TTS ready version of Chapter [X]. You must strictly adhere to the Master Story Bible we created.
> CRITICAL RULES FOR EDITING:
>  1. Preserve the Voice: Do not smooth out my writing into generic AI prose. Retain my specific sentence structures, rhythm, and tone.
>  2. Show, Don't Tell: Point out areas where I am explaining emotions or backstories instead of letting them play out through action/dialogue.
>  3. Pacing: Highlight sentences that are repetitive, overly wordy, or slow down the scene's momentum.
> Do not rewrite the chapter for me yet. First, provide a list of specific, actionable feedback on how to improve this chapter's prose. Then, ask me which changes I agree with before we generate an edited version."
> 
## 3. Advanced Prompts for Fixing Specific "AI Blindspots"
Because AI naturally defaults to cliché tropes and overly dramatic "the air was thick with tension" phrasing, use these hyper-targeted prompt modifiers to break its bad habits:
 * To fix flat dialogue: *"Analyze the dialogue in this scene. Identify where characters sound exactly the same. Help me differentiate their voices by adjusting their cadence, vocabulary, and subtext based on their personalities in our Story Bible."*
 * To fix pacing issues: *"Look at this action/suspense scene. Break down the sentence lengths. Where are the sentences too long or complex, ruining the urgency? Suggest where to use short, punchy fragments to increase the tension."*
 * The "Cliché Vacuum": *"Scan this chapter and list every single cliché, overused metaphor, or melodramatic phrase. Provide 3 unique, grounded, and sensory-rich alternatives for each."*
 Here's the comprehensive per-chapter sweep prompt:

---

## CHAPTER SWEEP PROMPT

Read the entire chapter from start to finish — not a keyword search, a full read. Then check every item below and report findings with line numbers and recommended fixes. If something is clean, say so. If something is wrong, say exactly what and why.

---

**1. STRUCTURAL PLACEMENT**
- Are there any named sections (MERIDIAN, INTERLUDE, INSERT, etc.) that appear to belong to a different chapter or timeline?
- Is there any content that reads like it was pasted in from another chapter or an earlier draft?
- Does the chapter start and end at the right narrative moment, or does it bleed into adjacent chapters?

**2. SPOILER / TIMING VIOLATIONS**
- Does any character describe, predict, or explain a discovery that the story hasn't made yet? (e.g. Ray describing Station Libre results before Station Libre happens)
- Does the narrator reveal information the POV character wouldn't have at that point in the timeline?
- Are any plot points named or resolved here that should land later?

**3. LORE BIBLE COMPLIANCE**
- Check all technical mechanics: void sacrifice (no push, carry until they lift free), DarkX awareness/behavior, Rapture date (November 22, 2033), ring plane sealing, FuelCell cycle terminology
- Check all rank/patch details: correct symbol per tier, always hidden, bronze/silver/gold metal rule, Sam has wrench patch until Ep_III
- Check the Von Grutzen / Verguld connection: not named to Jill before Ch16 (The Void), not named by Tyler
- Check the power hierarchy framing where relevant (Marcus → Alpha → Federation → Populace)

**4. CHARACTER NAMING**
- Cole is "Jackpot" from: Heavy/Ricardo, Taylor, Bitboy, Federation personnel, engineers
- Cole is "Cole" from: Emily, Sharon, Gracie, Sam (intimate contexts), DarkX visions
- Check any other character who has a call sign or nickname — is it used consistently by the right people?

**5. DIALOGUE ATTRIBUTION**
- Are all dialogue lines clearly attributed? Any orphaned quotes where the speaker is ambiguous?
- Does any character speak in a voice that doesn't match their established register?

**6. CONTINUITY WITH ADJACENT CHAPTERS**
- Does anything in this chapter contradict what was established in the chapter before it?
- Does anything here give away what happens in the next chapter in a way that kills the landing?

**7. DATES AND TIMELINE**
- Any dates mentioned — do they match the canonical timeline? (Story present = early 2030s, Rapture = November 22, 2033, Golden Dawn mission = 2033)
- Does the chapter's internal timeline (days passing, events in sequence) hold together?

**8. PROSE INTEGRITY**
- Any unfinished sentences, mid-scene cuts, or passages that trail off without resolution?
- Any duplicate passages — same scene or information appearing twice?
- Any formatting artifacts (ALL CAPS headers, bracketed notes, [INSERT], draft annotations)?

---

Report format:
> **[ISSUE TYPE] Line X:** What's wrong. Recommended fix.

If the chapter is clean on a given item, write **[CLEAN]** next to it. Don't skip items.

---

write every suggestion out and show me the full pros also after you go through all of these steps go back and compare all of these changes to the lore Bible.
## Summary Checklist for Success
 1. Never do a "mega-prompt" where you ask it to fix grammar, plot, and character all at once. It will fail. Pick *one* focus per prompt.
 2. Always use a multi-stage chat. Keep the Story Bible at the very top of the chat thread so the model's attention mechanism constantly weights it heavily.
 3. Be the boss. If the AI outputs a rewrite that feels soulless, reject it immediately: *"That sounds like a robot wrote it. It lost the grit/emotion of the original. Try again, but keep 90% of my original phrasing and only change the structural flow."*
