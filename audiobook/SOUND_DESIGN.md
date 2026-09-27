# Rings of Dust — sound design (music + SFX)

Owner briefs, logged as given. Cues are generated in ElevenLabs Music / Sound
Effects, then placed in the Audiobooks project (or mixed in post if the editor
cannot layer them). Nothing here is generated until the owner says go per cue.

## The First Spark — Part One

### Music
| Cue | Brief (owner, 2026-09-26) | Length | Status |
|---|---|---|---|
| Part One intro | **airy, austere, cold, suspenseful.** Lead-in under the part title and the first paragraph (sponsors arriving, Iceland 1938). | 1:30 | **generated 2026-09-26** in-project (Music panel, v2, instrumental): 3 takes "Cold Expedition 1938", "Iceland 1938 Expedition", "Iceland 1938 Ground" (~4k credits). **Owner picked "Iceland 1938 Expedition"; placed 2026-09-26 on the music track from 0:00 of the Part One intro chapter.** Owner: "too loud, and you can't hear the wind" → interstitial built: clip 1 at 35% vol, fade in 3 s, fade out 25 s (dips from 1:05 into the wind at 1:03); clip 2 (same take) at 1:28, 30% vol, fade in 10 s, fade out 20 s (music returns under the wind's tail). |

### SFX (Part One intro / Chapter One)
| Cue | Brief | Placement | Status |
|---|---|---|---|
| Cars pulling up | three vehicles on a rough track: engines approaching, tyres on frozen gravel, doors | "The sponsors arrived in three separate cars…" / "The cars stopped. The doors opened." | generated 2026-09-26, 4 takes × 20 s. Take 1 was placed at 3:00, then REPLACED 2026-09-26: owner said the multi-car takes "sound like crunches and noises, not an automobile". New cue "Old-fashioned vintage automobile… brakes squeal and screech as it stops" (20 s), **owner picked take 2; placed 2:46–3:06 (owner: screech was ~2 s late at 2:48, nudged back) so the brake screech lands on "The cars stopped." (~2:59).** Owner note: these are early-1930s cars, barely past horse-and-carriage (Model T feel: thin sputtering engines, rattle, hand-crank era). Alternate "Model T era" cue generated 2026-09-26 (4 takes × 20 s, in SFX History at the top): thin sputtering engines, rattling bodywork, leaf springs, tinny doors. Owner to compare against the placed take. |
| Wind | steady cold Icelandic wind, exposed ridge, no rain | under the ridge paragraphs | generated 2026-09-26, 4 takes × 30 s, Loop on. **Owner picked take 2; placed at the Hengill ridge paragraph.** Owner: "very hard to hear" → clip volume raised to 180% (editor max 200). |
| Footsteps on snow | crunching snow, several people walking | after the doors open | generated 2026-09-26, 3 takes × 10 s. **Owner picked take 2; placed at 3:34 (the Fekete "came out of the Horch" paragraph) on the sound-effects track.** |

## Rules
- Music under narration sits well below the voice; ducking, not a bed at full level.
- No cue may carry burn/attrition vocabulary in its label (see CAST.md rules).

## Notes
- In-project SFX panel: Duration "Auto" gave 1–3 s clips; set Custom explicitly (max 30 s). Each generate = 3 takes. Two junk gens from the first pass (1 s cars, 3 s snow) are in History; ignore.
- No "auto-suggest sound effects from text" feature found in the Audiobooks editor (2026-09-26); SFX are placed by hand per paragraph.
- Placement method that works: expand the timeline, seek the playhead by clicking the target paragraph in the editor, hover the History row, click its "+" (left of "···"). Toast confirms "imported successfully". Clip lands at the playhead on a music/SFX track.
- Clips snap to paragraph starts; a 2 s nudge by dragging snaps back. Working method: delete the clip, click the ruler at the wanted time (playhead), re-import from History with "+". Deleting a clip moves the playhead, so set the playhead after the delete.
- Owner: "music should come on before we hear the title" → four 3 s breaks (editor max 3 s each) inserted before the "Rings of Dust" heading = 12 s music lead-in (owner: "music needs to hit like 10 seconds before the title"). Music clip stays at 0:00. SFX/music clips are anchored to the speech and moved with it, so wind/car/snow stayed aligned.
- Pronunciation alias for Reykjavik revised again: "Rayk-yah-vik", then "Rake-yuh-vik" (owner dictated) (owner: the "ya" was swallowed in "Rake-yavik"). Intro paragraphs 1 and 3 regenerated; Chapter Ten line regenerated earlier with the prior alias, redo if it matters.
- 2026-09-26 late: owner reports music "not coming in until 20 seconds". Cause: the "Iceland 1938 Expedition" take itself has a ~20 s quiet build (waveform), not the clip position (clip is at 0:00). Clip volume raised 35→60, fade-in 0. Left-edge trim by drag is not supported in the editor. Re-generating a take that "starts at full presence from the first second" (3 takes, 1:30) for the owner to choose.
- Reykjavik alias now "Rake ya vik" (owner: "Rake-yuh-vik" read as "rake you vic"; he wants "rake ya vic"). Intro paragraphs 1 and 3 regenerated. Reliable regen method: LEFT-click into the paragraph text (Edit panel switches to "Edit Speech", top button reads "Regenerate"), then click Regenerate.
- Owner ruling 2026-09-26: cut the first 16 s of "Iceland 1938 Expedition" so seconds 16–26 play under the 12 s lead-in before the title; also wind before the title. Done offline: `ffmpeg -ss 16` → Downloads/Iceland_1938_Expedition_from16s.mp3 (74 s, 0.3 s fade-in), uploaded via the Files panel, placed at 0:00 (60%, fade-out 10 s). Original music clip 1 deleted; the 1:28 return clip stays.
- Files-panel placement: hover the tile → "+" (top-right of tile) inserts at the playhead; set the playhead by clicking the ruler first. Dragging tiles/clips does not work. Note: ElevenLabs warns uploaded audio "cannot be published to distribution platforms" (export is fine).
- Wind take 2 also placed at 0:00–0:30 under the lead-in (owner: "I kind of want to hear some wind before the title too"), 180%, 5 s fade-out. The ridge-paragraph wind clip stays.
- Owner pass 2026-09-26 (late): car clip 100→90%; music clips 60→50% (intro cut) and 30→27% (1:28 return); new cue "Three 1930s cars rolling to a stop… doors creak open and slam" (10 s, 4 takes), take 1 placed at the start of "The cars stopped. The doors opened." (~3:20 with the 12 s lead-in); wind replaced: "Strong gusting wind… distinct gusts, not white noise" (30 s loop, 4 takes), take 1 placed at 0:00 and at the Hengill ridge paragraph (~1:14), both to be 200%. Old steady-wind clips deleted.
- Gotcha: the compact SFX History list reorders; the full "History >" list is ordered newest generation first, so read the row label before pressing its "+". Two mis-imports (car-doors at 0:00 and 1:17) were deleted.
- Owner pass 3 (2026-09-26): BOTH car clips removed (approach+screech, and engines-off/doors) as "loud and not matching the story". Single new cue "old 1930s car braking: brakes squeak and squeal as it stops… doors creak open, then slam" (10 s, 3 takes), take 1 placed at the start of "The cars stopped. The doors opened." (3:20), 70%. Music after the first cue halved: 1:28 return clip 27→13%.
- Owner pass 4 (2026-09-26): the 10 s brakes+doors cue replaced by TWO short cues: "Starts instantly… brakes squeak and squeal… to a stop" (5 s) at 3:20, the first word of "The cars stopped."; "Two heavy vintage car doors… creak open… slam shut" (7 s) at 3:22, on "The doors opened." Both at 35% (owner: "fifty percent too loud").

### Sound scan of the Part One intro chapter (text-driven cue list, 2026-09-26)
| Where | Text beat | Cue | Status |
|---|---|---|---|
| 0:00 | title lead-in | gusty wind + music | placed |
| ~1:14 | "The track ran along… Hengill" | gusty ridge wind | placed |
| 3:20 | "The cars stopped." | brake squeal | placed |
| 3:22 | "The doors opened." | doors creak open, slam | placed |
| ~3:46 | Fekete steps out | footsteps on snow | placed |
| ritual | "The chanting was not melodic… tonal, sustained" (paras ~36–44) | low tonal chant drone, sustained, under the Latin | proposed |
| ritual | "Then silence." | hard cut of the chant drone | proposed (comes free with the drone ending) |
| ritual | "The resonance arrived… as though the air itself was listening" (~51–56, six minutes) | very low sub-bass hum, barely audible, no rhythm | proposed |
| mine mouth | "They went in." → "the lamp-light was gone" (~82–96) | cave-mouth ambience: hollow air, distant drips, faint echo | proposed |
| mine mouth | "They went in." | boots on stone receding into echo | proposed |
| end | "Coffee," / thermos | thermos cap, pour | proposed (small) |
Nothing else in the chapter names a sound. The calf and the blood are written without sound and should stay that way.
