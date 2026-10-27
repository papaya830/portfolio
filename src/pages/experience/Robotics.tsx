import { Link } from 'react-router-dom';
import './Robotics.css';

const Robotics = () => (
  <div className="content-section">
    <h2 className="section-title">Robotics Research Experience</h2>
    <div className="section-content">

      <h3 className="job-title">Research Assistant</h3>
      {/* TODO: confirm exact role title — not given, inferred to match the Robot Sgraffito title below */}
      <p className="company">
        <a href="https://www.rosielab.ca/" target="_blank" rel="noopener noreferrer">Rosie Lab</a>, SFU — Software Systems Capstone Project
      </p>
      <p className="date">October 2026 - Present</p>
      <ul className="experience-list">
        <li>Built an end-to-end pipeline that retargets two-person motion capture (handshakes, hugs, dancing) onto pairs of Unitree humanoid robots and replays it in MuJoCo, then compared two retargeting methods across 104 clips.</li>
        <li>Found and fixed a silent bug: MuJoCo 3.16.0 returns joint types as numpy.int32, so a Python "in" check in the retargeting library silently returned False and zeroed out the Jacobian's joint columns — only the pelvis moved, with no error raised. Fixed it with a runtime wrapper, without editing the upstream source.</li>
        <li>Designed a modular Python package where retargeters and metrics are plug-ins, so adding a new method takes one file, and built a Gradio web app for side-by-side video comparison, a metrics table, and a subjective rating form.</li>
        <li>Investigated why the robots still pass through each other during playback and added a PD-physics mode where robot-vs-robot contact makes them bounce off each other instead.</li>
      </ul>
      {/* TODO: video placeholders — dance clip (headline), hug clip (captioned as a limitation), GMR vs
        OmniRetarget comparison, and PD on/off, with caption "Playback only sets poses frame by frame.
        There's no physics, so bodies can pass through each other." No media field exists on this page
        yet; let me know how you'd like to add them once you have clips. */}

      <h3 className="job-title second-job">Robotics Research & Development Assistant</h3>
      <p className="company">
        Simon Fraser University, School of Computing Science (supervisor: Prof. SiQi Zhou)
      </p>
      <p className="company">
        In collaboration with Dr. Lidia Atanasova, Technical University of Munich
      </p>
      <p className="date">May 2026 - Present</p>
      <ul className="experience-list">
        <li>Used Prof. Zhou's robotic sgraffito simulation framework (layered canvases, parameterized tools, scrape, trace and dot primitives, an ergodic planner, and geometric and physics-based solvers) to design and run experiments on how tools and actions affect layered materials. Co-authored the CMPT 415 technical report with Gaurika Sharma.</li>
        <li>Found that contact forces of 2 to 12 N and commanded scrape depths of 0.8 to 2.5 mm both approached the same depth ceiling of about 0.9 mm in the physics solver, which suggests a limit of the simulated material response. Showed that tool tilt had little effect on the revealed layer at matched depth, and that penetration depth alone selects which colour layer is exposed.</li>
        <li>Designed an artist-facing interface (a Jupyter notebook, then a web UI) that takes an image through stylization, editable carving rules and planning to a simulated carve preview, so artists can see the result before a robot touches any material.</li>
        {/* TODO: confirm how the interface work above was split with Gaurika before publishing it this way */}
        <li>Presented the work as a poster, "Tool-Aware Ergodic Stroke Planning and Voxel Simulation for Robotic Sgraffito," at the SFU Computing Science research day.</li>
      </ul>
      {/* TODO [confirm wording]: notes also describe porting the DiSECt differentiable cutting simulator
        to JAX and investigating an 8x force discrepancy traced to mesh layout, not a code bug — left out
        until the wording is confirmed. */}
      <p>See the <Link to="/projects/software">Robot Sgraffito project page</Link> for the full write-up.</p>

    </div>
  </div>
);

export default Robotics;
