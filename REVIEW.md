# Copy review

Text I wrote myself rather than copying from your existing content or your instructions. "Removed" means the field was in the first commit (`Redesign: home, projects, tickets, experience (unreviewed copy)`) and was taken out in the second. Strings you dictated (card summaries, highlights, accomplishments, the HIR-2 numbers, cause and fix, Experience roles) are not listed.

| Page / ticket | Field | My text | Source sentence |
|---|---|---|---|
| HIR-1 | summary | "Ran both retargeting methods over every clip and compared hand spacing and floor contact. 574 of 574 batch jobs completed in about 4.7 hours." | Partly original: "574 of 574 batch jobs completed in about 4.7 hours." The rest is mine. **Removed** |
| HIR-1 | before / after labels | "GMR mean hand-spacing error" / "OmniRetarget mean hand-spacing error" | "OmniRetarget brought mean hand-spacing error down from 15.2 cm (GMR) to 3.31 cm". **Removed** |
| HIR-1 | symptom | "GMR left the two robots' hands far apart on interactions like handshakes, and sank feet through the floor (−7.5 cm median)." | Feet figure from the original. "far apart on interactions like handshakes" is none. **Removed** |
| HIR-1 | cause | "GMR retargets each person independently with no notion of keeping the interaction contacts." | None. The original says each person is retargeted independently, but not that GMR does so. **Removed** |
| HIR-1 | fix | "Switched the pipeline to OmniRetarget, which keeps feet above the floor (+1.27 cm median) and brings hands together." | "OmniRetarget brought mean hand-spacing error down… and kept robots' feet above the floor (+1.27 cm median)". The "switched the pipeline" framing is mine. **Removed** |
| HIR-1 | howFound | "A batch job over all 104 clips with automatic metrics for hand spacing and foot height." | None. **Removed** |
| HIR-1 | tools / skills | "Python, MuJoCo, GMR, OmniRetarget" / "Evaluation design, batch tooling" | Tools from the original. Skills are none. **Removed** |
| HIR-1 | outcome | "OmniRetarget cut mean hand-spacing error from 15.2 to 3.31 cm over 104 clips." | "OmniRetarget brought mean hand-spacing error down from 15.2 cm (GMR) to 3.31 cm" |
| HIR-1 | What I did | Condensed from the original bullet. | The 104-clips batch evaluation bullet |
| HIR-2 | outcome | "Joint ranges went from ~1e-7–1e-4 rad to 0.9–2.6 rad: the robot finally moved." | "joint ranges went from about 1e-7-1e-4 rad to 0.9-2.6 rad". "the robot finally moved" is mine. |
| HIR-2 | summary | "Only the pelvis moved and nothing raised an error." | "only the pelvis moved, with no error raised" |
| HIR-2 | symptom | "Retargeted robots barely moved: only the pelvis followed the motion, with no error raised." | Same sentence. "barely moved" is mine. |
| HIR-2 | tools | "Python, MuJoCo 3.16.0, NumPy" | MuJoCo 3.16.0 and numpy.int32 are in the original. Listing "Python" and "NumPy" as tools is mine. |
| HIR-2 | skills | "Debugging, numerical code" | None |
| HIR-2 | howFound | empty | You asked for this to stay empty. With the new rule the section is hidden, so there is no "[to fill in]" reminder any more. |
| HIR-3 | outcome | "Adding a new retargeting method takes one file." | "adding a new method takes one file" |
| HIR-3 | summary / fix / tools / skills | "A modular rt/ package where retargeters and metrics are plug-ins." / "Built a results cache, a CLI, and acceptance tests around a small plug-in interface." / "Python" / "Software architecture, testing" | Summary and fix from the original bullet. "around a small plug-in interface", tools and skills are mine. **Removed** |
| HIR-4 | outcome | "A Gradio web app for comparing two retargeting methods side by side." | Gradio web app bullet |
| HIR-4 | summary / tools / skills | summary rephrases the bullet; "Python, Gradio" / "UI, evaluation tooling" | Summary from the original. Tools and skills are mine. **Removed** |
| HIR-5 | outcome | "Penetrating frames on the hug clip cut from 100% to 75% so far." | "cut penetrating frames on the hug clip from 100% to 75%". "so far" is mine. |
| HIR-5 | before / after labels | "hug frames penetrating" | Same source. **Removed** |
| HIR-5 | symptom | "The robots pass through each other in places." | "The robots still pass through each other in places" (near verbatim). **Removed** |
| HIR-5 | cause | Paraphrase | "each person is retargeted independently… and kinematic replay has no contact response". **Removed** |
| HIR-5 | fix | Paraphrase | "Re-solving with the partner as an obstacle… adding 8 cm of spacing…". **Removed** |
| HIR-5 | tools / skills | "Python, MuJoCo" / "Optimization, collision handling" | Tools inferred. Skills are none. **Removed** |
| HIR-6 | outcome | "Robots bounce off each other instead of passing through." | "so the robots bounce off each other instead of passing through" |
| HIR-6 | summary / tools / skills | summary paraphrases the bullet; "MuJoCo" / "Simulation, control" | Summary from the original. Tools and skills are mine. **Removed** |
| Humanoid page | oneLiner | "Two humanoid robots replay hugs, handshakes and dances taken from human motion capture." | "I take recorded human-human interactions (handshakes, hugs, dancing)… get two humanoid robots to reproduce them" |
| Humanoid page | facts box | When "Oct 2026 – present"; Data "InterHuman motion capture, 104 clips"; Robots "Pairs of Unitree humanoids"; Stack "Python · MuJoCo · Gradio" | Dates from the original card. Data and robots paraphrase the details text. Stack: MuJoCo and Gradio are in the original, "Python" is inferred. |
| Humanoid page | headline media caption | "Playback only sets poses frame by frame. There's no physics, so bodies can pass through each other." | The TODO comment you left in `Projects.tsx` |
| Humanoid page | What's next | "Make the partner part of the optimization so the robots stop passing through each other, and run the comparison app in a live rating session." | The partner-as-obstacle bullet and "not yet used in a live session". The plan itself is mine. |
| Humanoid page | status line | "In progress · Software / Robotics" | Derived from `status: 'current'` |
| Projects | Sgraffito featured bullet 1 | "Characterized how carving tools and actions behave in simulation" | "I characterized how tools and actions behave" |
| Projects | Sgraffito featured bullet 2 | "Built an artist-facing interface to preview carves before they run" | "worked on an artist-facing interface for previewing carves". "before they run" is mine. |
| Projects | Sgraffito featured bullet 3 | "Presented as a poster, report and Research Day video" | None. Inferred from the files in `public/docs`. |
| Projects | Sgraffito summary | "Simulation research for robotic sgraffito: a robot scratches through layered clay to reveal the colour beneath." | Original says "layered material", not "clay". |
| Projects | Sgraffito highlight (data only, not displayed) | "Artist-facing carve preview" | None |
| Projects | Earlier: EasySpeak | "A button that lets students anonymously flag questions to the instructor during class." | "press a button to anonymously flag a question, which would send a notification to the instructor" |
| Projects | Earlier: FETCH! | "Ramps and an Arduino actuator that return a hockey ball to a solo player." | "A passive ramp and Arduino-controlled system that returns a hockey ball to a solo player." |
| Projects | Earlier: Emotion Recognition CNN | "A CNN trained to recognize human emotion from images." | "A convolutional neural network trained to recognize human emotion from images." |
| Projects | Earlier: EasySpeak highlight (data only) | "3rd of 15 teams, SFU FAS · $1,250" | Original EasySpeak details |
| Projects | Pill label | "Design" (was "Design / UX") | You asked for "Design" |
| Projects | Empty-filter message | "Nothing here yet." | None |
| Project / ticket pages | Not-found messages | "Not found", "There is no page for that project yet.", "There is no ticket at that address." | None |
| Project / ticket pages | Labels | "What it accomplished", "Pieces I worked on", "What I did" | The first two are yours. "What I did" is yours. |
| Placeholder | ScrollStake | "[ScrollStake screenshot]" | None |
| Placeholder | ShelterSpace | "[ShelterSpace screenshot]" | None |
| Placeholder | Flow Rate Detection Device | "[Device photo]" | None |
| Placeholder | Jellyfish Umbrella | "[Jellyfish photo]" | None |
| Placeholder | GLIDE for Valkey | "[GLIDE]" | None |
| Placeholder | Humanoid / GR00T | "[Dance clip still]", "[Franka arm in sim]" | Yours |
| Placeholder | Generic project page media fallback | "[Headline media]" | None. It is unused for Humanoid, which shows the "[Dance clip still]" label. |
| Experience | Tab "Research" | Label for the old "Robotics Research Experience" tab | You asked for "Research" |
| Experience | Role company "Improving" | Dropped "(formerly BitQuill Technologies)" | You gave "Improving". The old note is gone from the Work tab. |

Roles and their wording on the Experience Work tab follow your list, with these exceptions: the Kardium "$25K–$40K/year" employee-time estimate and the Improving "25% social engagement" figure from the old page are no longer shown, because they were not in your list.
