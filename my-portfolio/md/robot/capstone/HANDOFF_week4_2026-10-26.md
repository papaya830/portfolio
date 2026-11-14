# Handoff: Week 4 (Oct 26, 2026) — Modular Pipeline, Web UI, Batch Eval, Physics

Tags: [V] verified (ran and read output), [R] reported, [G] guess.

## Summary of what was built this week

### 1. OmniRetarget frozen-joint bug fix [V]
- **Root cause:** MuJoCo 3.16.0 changed `jt` to `numpy.int32`; the line `if jt in (mjJNT_HINGE, mjJNT_SLIDE)` in `interaction_mesh_retargeter.py:1249` silently returned False, so the Jacobian had zero joint columns. Only the pelvis moved; all 29 joints stayed frozen.
- **Fix:** `holosoma_fixed_retarget.py` (new file in ~/isaac/interhuman/) wraps `_build_transform_qdot_to_qvel_fast` at runtime using `int(jt)`. No holosoma source edits.
- **H1-2 bonus fix:** the H1-2 free joint was included in the limits array, shifting every joint's limits by one. The wrapper rebuilds limits correctly (53 entries changed).
- **Verified:** joint ranges now 0.9–2.6 rad (was 1e-7 to 1e-4). Videos confirmed: arms and legs move naturally, feet on floor.
- **Impact:** all previous OmniRetarget results were invalid. All 14 runs recomputed in `runs_fixed/`.

### 2. Modular `rt/` pipeline package [V]
- **Location:** `~/isaac/interhuman/rt/`
- **What it does:** swappable retargeters (GMR, OmniRetarget), plug-in metrics, results cache, CLI.
- **Key files:**
  - `rt/motion.py` — standard motion format (fps, root_pos, root_rot xyzw, dof_pos)
  - `rt/robots.py` — registry for G1 and H1-2
  - `rt/retargeters/gmr.py` — wraps GMR's smplx_to_robot_headless.py
  - `rt/retargeters/omni.py` — wraps holosoma via the fixed wrapper; guard aborts if wrong model loads
  - `rt/metrics/` — plug-in metrics: floor, hand_gap, wrist_torso, tilt, jerk, foot_skate, joint_limit_violations, tool_cost, robot_robot_penetration
  - `rt/cli.py` — subcommands: `run`, `list`, `import-legacy`, `metrics`, `batch`, `summarize`, `render`
  - `docs/MOTION_FORMAT.md` — format spec for Brian (Blender→MuJoCo→Godot) and Payam (policy side)
  - `README_RT.md` — non-expert guide
- **Run with:** `cd ~/isaac/interhuman && /home/cky10/miniconda3/envs/gmr/bin/python -m rt <command>`
- **Results cache:** `runs_fixed/<clip>/<robot>/<method>/` — never writes into out/, hs_out*, h1_out/, videos/
- **import-legacy:** imported 26 existing runs from out/, hs_out/, h1_out/ etc.
- **Acceptance tests:** all passed (hand-gap 10.6 cm GMR vs 3.11 cm OmniRetarget on clip 1137; sole heights match; H1-2 guard catches wrong model loading)
- **Hand-gap error definition [V]:** mean absolute difference between the robot wrist-to-wrist distance and the human wrist-to-wrist distance scaled by leg-length ratio (G1 scale ×0.836, H1-2 ×1.044). It measures how well the robot reproduces the relative hand spacing of the two people — not whether hands actually touch. It is most meaningful on contact clips (hug 1137, handshake 377); on non-contact clips both methods can score well simply because both pairs of hands are far apart.

### 3. Gradio web UI [V]
- **Location:** `~/isaac/interhuman/webui/app.py`
- **Run:** `bash ~/isaac/interhuman/webui/run_webui.sh` (listens on 127.0.0.1:7860 only)
- **Connect from laptop:** `ssh -L 7861:localhost:7860 cky10@asb9700u-a14.csil.sfu.ca` then open `http://localhost:7861`
- **Tabs:**
  - Inspect: pick clip, robot, method A vs B — side-by-side videos, metrics table, Run/Render buttons
  - Physics toggle: Kinematic (default) or PD control
  - Compare: full table of all runs, sortable/filterable; batch summary when results/summary.csv exists
  - Rate: 1-5 ratings on 4 questions (hands meet, feet on floor, looks natural, no passing through); saves to webui/ratings.csv
  - Help: plain-language explanation for non-experts
- **Smoke test:** 20/20 passed
- **Privacy:** localhost only, share=False, no public link, dataset never exposed

### 4. Batch evaluation [V]
- **Command:** `bash ~/isaac/interhuman/tasks/run_week.sh batch` (plain Python, no Claude usage)
- **Result:** 574/574 ok, 0 failed, finished in 282 min (~4.7 hours), 2 workers
- **Summarize:** `python -m rt --runs-dir runs_fixed summarize` → `results/summary.csv`, `results/SUMMARY.md`
- **Key headline numbers (G1, 104 clips) [V]:** hand-gap error = mean absolute difference between robot and leg-length-scaled human wrist-to-wrist distance (see definition above). Sole median = median lowest sole height before floor snap. Most clips are non-contact (walking, gesturing); only 2 of the 6 known clips are contact clips (hug 1137, handshake 377). No clip labels exist yet, so a contact-only subset cannot be computed.

| Method | Hand-gap err (104 clips) | Hand-gap err (6 known clips) | Sole median p1 | Foot skate | Tilt mean |
|---|---|---|---|---|---|
| GMR | 15.2 cm | 13 cm | -7.5 cm (sinking) | 30.6 cm/s | 18.4° |
| OmniRetarget | 3.31 cm | 3.22 cm | +1.27 cm (above floor) | 20.3 cm/s | 11.8° |

OmniRetarget hand-gap error is 3.31 cm vs GMR 15.2 cm (4.6× lower) across 104 clips, and 3.22 cm vs 13 cm on the 6 known clips. OmniRetarget keeps feet above the floor; GMR median sole is -7.5 cm (sinking through the floor). OmniRetarget also has lower foot skate and lower tilt.

**Why GMR hand-gap error is large even on non-contact clips [G]:** GMR sinks the robot's feet 7–15 cm below the floor and produces higher torso tilt (mean 18.4°). Both distort the wrist positions relative to the scaled-human reference, so hand-gap error is large even when the two people are simply walking near each other. This is a guess — the exact contribution of foot sink vs tilt vs arm retargeting error has not been decomposed. The numbers do not show that OmniRetarget's 3.31 cm is "flattering" (inflated by easy non-contact clips): GMR is worse on the 104-clip set than on the 6 known clips (15.2 vs 13 cm), which is the opposite of what "flattering" would predict.

### 5. Joint retargeting investigation [V/R]
- **Penetration metric:** `rt/metrics/robot_robot.py` — collides robot 1 vs robot 2 only, reports signed distance per frame
- **Findings:** hug clip 1137 penetrates 95–100% of frames (max 9.6 cm GMR, 5.6 cm OmniRetarget); handshake 377 and walk clips have near 0%
- **Partner-as-obstacle attempt:** `holosoma_partner_retarget.py` — person 2 re-solved with person 1's robot as static obstacle; penetrating frames 100% → 75% on hug, but many QP iterations infeasible
- **Spacing offset (option D):** +8 cm offset on handshake 377 → 0% penetration, 1.5 cm hand-gap error, but hands visibly don't meet
- **Why they go through each other (5-sentence answer):**
  1. The human SMPL-X bodies themselves overlap by ~5 cm in the hug (525 vertices at 2.0 s).
  2. Both GMR and OmniRetarget retarget each person independently, so the partner is never part of the optimization.
  3. The kinematic replay sets poses each frame with no contact response, so overlapping poses are played back as-is.
  4. The G1 model only has collision geoms on the feet, so torso/arm contact isn't detected during retargeting.
  5. A true fix needs either joint retargeting with partner-as-obstacle (partially tried, limited improvement) or physics tracking with contact response.
- **README_JOINT.md** has the full table and write-up.

### 6. PD physics control [V]
- **File:** `play_g1_mujoco_pd.py` (copy of player, original untouched)
- **Flag:** `--physics pd` (default: kinematic)
- **What it does:** drives joints with MuJoCo PD actuators + gravity + robot-vs-robot contact; pelvis path is pinned to retargeted trajectory (not simulated)
- **Result on 1137 GMR:** robots bounce off each other instead of passing through; tracking error 2.4× higher with collision on vs off (expected); peak force 10 kN
- **Gain tuning:** tried 6 gain sets; crit07 (critical damping × 0.7) is the default — best tracking with collision on (0.062 rad RMS, 3.4 kN peak)
- **Limitation:** bouncing is physically correct but looks unnatural; a balance controller would absorb impacts but needs training (solar cluster, future sprint)
- **Videos:** `runs_fixed/1137/g1/gmr/pd_tuned_on/video.mp4` and `pd_tuned_off/video.mp4`

### 7. Demo and repo prep
- **INSTALL.md:** step-by-step setup from scratch for Payam; marks verified vs unverified steps; notes that /home/cky10 is hardcoded (sed fix included)
- **demo.sh:** checks envs, fills missing results for clips 1137 and 2367, launches the web UI, prints the URL
- **Known issue:** /home/cky10 hardcoded in many scripts — not portable without the sed fix

## File map (all in ~/isaac/interhuman unless noted)
```
rt/                          modular pipeline package
  retargeters/gmr.py omni.py omni_partner.py template.py
  metrics/feet.py hand_gap.py two_person.py robot_robot.py quality.py tool.py
  cli.py batch.py summarize.py render.py motion.py robots.py
holosoma_fixed_retarget.py   OmniRetarget wrapper (the bug fix)
holosoma_partner_retarget.py partner-as-obstacle retargeter
play_g1_mujoco_pd.py         PD physics player
webui/app.py run_webui.sh smoke_webui.py
tasks/setup_week4.sh run_week.sh rt_modular.md webui_gradio.md batch_eval.md joint_retarget.md
docs/MOTION_FORMAT.md
README_RT.md README_JOINT.md README_PD.md README_BATCH.md README_WEBUI.md
INSTALL.md demo.sh
WORKLOG_rt.md WORKLOG_webui.md WORKLOG_batch.md WORKLOG_joint.md
NEEDS_HUMAN_rt.md NEEDS_HUMAN_batch.md
runs_fixed/                  all valid results (fixed OmniRetarget + GMR)
results/summary.csv results/SUMMARY.md results/summary_by_method.csv
clips_100.txt                100 clip IDs for the batch
logs/                        batch.log, webui.log, rt.log etc.
```

## What does NOT work / known limits
- Gradio app needs restart after app.py edits (run_webui.sh stop then start)
- /home/cky10 hardcoded in many scripts — not portable for other users without sed fix
- H1-2 feet still sink -3.7 cm with OmniRetarget (G1 is +1.27 cm); cause not fully investigated
- PD physics bouncing looks unnatural — needs balance controller (future work)
- Partner-as-obstacle only modestly helps (100% → 75% penetrating frames on hug)
- Solar cluster access still blocked (needed for GR00T fine-tuning and SONIC training)
- OmniRetarget right elbow starts at 1.0 rad (line 420 bug in holosoma); minor with joints moving

## Open questions for Payam
1. Which metrics does he want next week?
2. Contact-only clip subset for averages (needs clip labels)? InterHuman has text annotations (7897 entries) — rough labels (hug, handshake, hold) may be extractable from those. Not attempted yet. [G]
3. How should his team access the web app (screen share, CSIL access)?
4. Is physics tracking (SONIC) in scope for the next sprint?
5. Does the policy side (Payam's work) need the motion format — see docs/MOTION_FORMAT.md?
6. How was clips_100.txt chosen? [V] The 6 known clips are listed first, then 94 additional clips drawn from data/motions/ using `shuf --random-source=<(yes)` (deterministic pseudo-random, same result every run). The selection is reproducible but not stratified by interaction type. If a contact-stratified sample is needed, clip labels would have to come first.

## Portfolio notes (for chloeyip.ca)

**Project:** Humanoid Interaction Retargeting in Simulation
**Stack:** Python · MuJoCo · GMR · OmniRetarget · Gradio · Isaac Sim · GR00T · Unitree G1/H1-2
**Period:** Oct 2026 – Present

**What I did:**
- Built an end-to-end pipeline retargeting two-person mocap (InterHuman, SMPL-X) onto two Unitree humanoid robots (G1, H1-2) and replaying them in MuJoCo
- Diagnosed and worked around a silent bug in holosoma (OmniRetarget) caused by a MuJoCo 3.16.0 type mismatch: a `numpy.int32` joint-type value failed a Python `in` check, zeroing the Jacobian's joint columns and freezing all 29 joints while only the pelvis moved. Fixed with a runtime wrapper (`holosoma_fixed_retarget.py`) that patches one method using `int(jt)` — no upstream source edits were made.
- Designed a modular `rt/` Python package with swappable retargeters and plug-in metrics, so new methods can be added in one file
- Built a Gradio web interface for side-by-side video comparison, metrics, and a subjective rating form (smoke-tested 20/20; not yet used in a live supervisor session)
- Ran batch evaluation over 104 clips (6 known + 98 additional, pseudo-randomly chosen): OmniRetarget reduces mean wrist-spacing error (robot vs leg-length-scaled human) from 15.2 cm to 3.31 cm and keeps median sole height at +1.27 cm above the floor vs GMR sinking to -7.5 cm (median)
- Added PD physics control mode (`play_g1_mujoco_pd.py`): joints are driven by MuJoCo PD actuators with gravity and robot-vs-robot contact; the pelvis path is pinned to the retargeted trajectory, so it is not full physics tracking. Robots push against each other instead of passing through.
- Evaluated GR00T N1.7 in Isaac Sim — diagnosed why the pretrained REAL_G1 policy doesn't transfer to the sim scene and identified fine-tuning as the requirement

**Key numbers:** OmniRetarget wrist-spacing error 3.31 cm vs GMR 15.2 cm (4.6× lower) over 104 clips; OmniRetarget feet +1.27 cm above floor vs GMR -7.5 cm (median); 574/574 batch jobs succeeded; OmniRetarget frozen-joint bug found and worked around in MuJoCo 3.16.0

---

## Changelog (corrections applied to this document)

1. **Hand-gap metric defined precisely** in §2 (acceptance tests) and §4 (batch table header): now reads "mean absolute difference between robot and leg-length-scaled human wrist-to-wrist distance." Clarified it measures relative hand spacing, not contact, and is most meaningful on contact clips. [V]
2. **Batch caveat added:** table now shows both 104-clip and 6-known-clip columns; prose notes that most clips are non-contact and no contact-only subset exists yet. [V]
3. **"Flattering" claim removed:** analysis shows GMR is worse on 104 clips than on 6 known clips (15.2 vs 13 cm), opposite of what "flattering" predicts. Replaced with a [G]-tagged explanation of why GMR error is large even on non-contact clips (foot sink + tilt distort wrist positions).
4. **Sole median labelled as median** (was just "-7.5 cm"). [V]
5. **"100 random clips" corrected:** clips_100.txt has 104 entries (6 known + 98 additional); selection is pseudo-random but deterministic (`shuf --random-source=<(yes)`), not truly random. Changed to "104 clips (6 known + 98 additional, pseudo-randomly chosen)." [V from setup_week4.sh]
6. **"6 labelled clips" → "6 known clips"** — no labels exist. [V]
7. **Portfolio: supervisor web UI claim softened** — "used by the supervisor" removed; now "smoke-tested 20/20; not yet used in a live supervisor session." [V]
8. **Portfolio: PD mode clarified** — pelvis pinned, not full physics tracking. [V]
9. **Portfolio: bug fix wording** — now says "worked around with a runtime wrapper, no upstream source edits." [V]
10. **Open questions: added Q6** on how clips_100.txt was chosen and Q2 expanded with note on InterHuman text annotations as a possible source of contact labels. [V/G]

## What could not be verified in this update
- Whether InterHuman's text annotations (7897 entries) contain usable contact-type labels (hug, handshake) — not checked, marked [G].
- The exact decomposition of GMR hand-gap error into foot-sink vs tilt vs arm retargeting contributions — marked [G].
