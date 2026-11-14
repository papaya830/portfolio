# Robot Sgraffito: portfolio notes (v2)

Rewritten after reading your CMPT 415 report and the research-day poster. Formats follow your `portfolio` repo: `Projects.tsx` cards, and `Experience.tsx` entries (title, org, date, bullets, link, captioned visuals).

**Attribution (changed from v1).** Your report states that the canvas and tool representation, the geometric and physics-based simulators, and the ergodic planner were developed by Prof. SiQi Zhou, and that your contribution is the experimental design, evaluation and analysis. The poster says it builds on her framework and ergodic planner. So the notes below say "I worked within Prof. Zhou's framework" and describe your own work as the experiments, the artist-facing interface and the poster. Items marked **[confirm]** need your check.

---

## 1. Project card (`Projects.tsx` fields)

```ts
{
  id: 7,
  title: "Robot Sgraffito",
  type: "Software",
  completionTime: "Ongoing (since May 2026)",
  description: "Simulation research for robotic sgraffito: a robot scratches through layered material to reveal the colour beneath. I characterized how tools and actions behave, and worked on an artist-facing interface for previewing carves."
}
```

`Projects.tsx` only allows the types Software, Firmware and Design, and `Software.tsx` is still "Coming soon...". The longer page below could go there.

---

## 2. Experience-style entry (`Experience.tsx` format)

**Robotics Research & Development Assistant**
Simon Fraser University, School of Computing Science (supervisor: Prof. SiQi Zhou)
In collaboration with Dr. Lidia Atanasova, Technical University of Munich
May 2026 - Present

- Used Prof. Zhou's robotic sgraffito simulation framework (layered canvases, parameterized tools, scrape, trace and dot primitives, an ergodic planner, and geometric and physics-based solvers) to design and run experiments on how tools and actions affect layered materials. Co-authored the CMPT 415 technical report with Gaurika Sharma.
- Found that contact forces of 2 to 12 N and commanded scrape depths of 0.8 to 2.5 mm both approached the same depth ceiling of about 0.9 mm in the physics solver, which suggests a limit of the simulated material response. Showed that tool tilt had little effect on the revealed layer at matched depth, and that penetration depth alone selects which colour layer is exposed.
- Designed an artist-facing interface (a Jupyter notebook, then a web UI) that takes an image through stylization, editable carving rules and planning to a simulated carve preview, so artists can see the result before a robot touches any material. **[confirm how this was split with Gaurika]**
- Ported the DiSECt differentiable cutting simulator to JAX. When the port's cutting force differed from the original by roughly 8x, I traced it to the mesh layout (a uniform grid versus DiSECt's irregular mesh) and not a code bug. **[confirm wording]**
- Presented the work as a poster, "Tool-Aware Ergodic Stroke Planning and Voxel Simulation for Robotic Sgraffito", at the SFU Computing Science research day.

Links: [sgraffito-canvas](https://github.com/introboticslab/sgraffito-canvas) and [robot-sgraffito](https://github.com/introboticslab/robot-sgraffito) (Prof. Zhou's repositories, cited in your report). **[confirm they're public before linking]**

---

## 3. Longer project page

### Overview
Sgraffito is a decorative technique, popular in Renaissance architecture and ceramics, where carving through a top layer reveals a contrasting colour beneath. Carving can't be undone, so a robot needs to know what a design will look like before it cuts. This project studies robotic sgraffito in simulation: how different tools and actions change layered material, and how an image can be turned into a carving plan that an artist can preview.

### Context and my role
The project uses a simulation and planning framework built by my supervisor, Prof. SiQi Zhou (SFU), and is a collaboration with Dr. Lidia Atanasova (TUM). Gaurika Sharma and I worked on it together. My part was the experimental design and analysis of how tools and primitives behave, the artist-facing interface, and the research-day poster.

### The framework I worked in
- A layered canvas (each layer has its own colour and physical properties) and a tool defined by its geometry and tilt.
- Three action primitives: **scrape** (a straight pass at a set depth), **trace** (a curved path) and **dot** (a point press that compacts material without removing it).
- An **ergodic planner** that turns a target image into scrape and dot placements by matching a target coverage density.
- Two simulators: a fast geometric one (boolean subtraction on signed distance fields) and a physics-based one that is still being calibrated.
- Export to Blender for a photorealistic view.

### What I found (experiments)
Each condition was run once, so I report no variance.

| Experiment | Result |
|---|---|
| Tool tilt (loop tool, 0° versus 60°, straight scrape and S-curve) | At matched depth, tilt mainly changes how the tool approaches the material and leaves the revealed layer similar. |
| Dot contact force (2, 6, 12 N) | All three approached about 0.9 mm depth. Higher force got there faster and left a wider mark, but not a deeper one. |
| Commanded scrape depth (0.8, 1.5, 2.5 mm over 16 mm strokes) | Achieved depth tracked the command at first, then plateaued near 0.9 mm. |
| Depth-controlled colour reveal | Shallow, medium and deep passes exposed the white, red and lower white layers. Colour can be chosen by depth alone. |
| Ergodic-planned flower | A posterized flower image became per-layer target densities and then a planned set of actions. This is a qualitative demonstration only. |

Limitations I'd state plainly: single runs, the physics solver uses estimated material parameters that haven't been validated against real material, and the 0.9 mm ceiling has only been tested with the loop tool.

### Poster results (simulated)
On six designs, the voxel simulation (0.25 mm voxels) cut between 62.9% and 92.4% of each design's area. Over-cut was zero on four of the six designs. These are simulated carves, not real ones.

| Design | Cut | Over-cut (mm²) | Missed (mm²) |
|---|---|---|---|
| Circles | 90.9% | 0 | 43.5 |
| Branch | 62.9% | 0 | 346.5 |
| Portrait | 74.5% | 48 | 432.2 |
| Pyramid | 92.4% | 168 | 222.2 |
| Mixed | 75.5% | 0 | 1023.8 |
| Sun | 80.5% | 0 | 160.2 |

Coverage of the ergodic fill rises quickly and then flattens (28%, 44%, 60% and 76% after 10, 20, 40 and 210 strokes), so 40 strokes already give about 80% of the coverage that 210 do.

### The artist-facing interface
A web interface where an artist uploads a drawing, picks a slab, plans the carve, and sees the simulated result before a robot runs. The pipeline stages are Prepare, Design, Rules, Decompose, Plan, Simulate and Render. The Design step offers four stylizations (regions, outlines, hatching and stipple) that all convert to one shape format, and the Rules step lets the artist control how shapes are carved. **[confirm you want to describe the rules editor and the four styles as your work]**

### How the project changed
The first month used demonstration videos of dot, line and curve motions, with a vision-language model (Qwen) and OpenCV to recognize which primitive was being drawn. That approach was only roughly accurate, so from July the focus moved to simulation and image-driven planning. Learning primitives from demonstrations stays a long-term goal in the report.

### Next steps (from the report)
Calibrate the physics solver against real material measurements, extend the planner to trace primitives, and test whether the 0.9 mm ceiling is specific to the loop tool.

### Tech
Python, JAX, OpenVDB, OpenCV, Blender, MuJoCo and Pinocchio (arm simulation), Jupyter, a web UI **[confirm stack]**, Git.

---

## 4. Visuals and captions

| Visual | Caption |
|---|---|
| Your web UI screenshots (send them and I'll caption each) | The artist interface: upload a design, pick a style, and preview the carve before the robot runs. |
| Poster section 4 (input next to voxel-simulated carve) | A design (left) and its voxel-simulated carve (right). |
| Report Fig. 7 (three-depth scrape) | Three passes at different depths expose three colour layers. |
| Report Figs. 4 and 8 | Contact force and commanded depth both level off near 0.9 mm. |
| Report Figs. 2 and 3 | Loop tool at 0° and 60° tilt: a different approach and a similar reveal. |
| Report Fig. 9 (flower) | An image becomes per-layer target densities for the planner. |
| Poster pipeline strip | Prepare, Design, Rules, Decompose, Plan, Simulate, Render. |

Since there's no live demo, you could add the poster PDF and the report as download links, plus the clips behind the poster's QR code.

---

## 5. Things only you can fill in

- Whether to name Dr. Atanasova and Gaurika, and how to word the split of work with Gaurika.
- A link for the clips on the poster's QR code.
- Whether the repos are public, and permission from Prof. Zhou to link them.
- Whether the poster and report can be posted publicly.
