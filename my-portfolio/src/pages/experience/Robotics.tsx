import { Link } from 'react-router-dom';
import './Robotics.css';

const Robotics = () => (
  <div className="content-section">
    <h2 className="section-title">Robotics Research Experience</h2>
    <div className="section-content">

      <h3 className="job-title">Humanoid Researcher</h3>
      <p className="company">
        SFU <a href="https://www.rosielab.ca/" target="_blank" rel="noopener noreferrer">Rosie Lab</a> (supervisor: Payam Jome Yazdian) — Software Systems Capstone Project
      </p>
      <p className="date">October 2026 - Present</p>
      <ul className="experience-list">
        <li>Built a pipeline that converts motion-capture recordings of two people (InterHuman) into joint movements for two Unitree humanoid robots, and plays them back together in a MuJoCo simulation with video output.</li>
        <li>Designed an evaluation framework from a survey of five retargeting papers, scoring single-person motion quality and two-person contact, and applied it to both kinematic replay and PD-controlled physics playback in MuJoCo.</li>
        <li>Compared two retargeting methods (GMR and OmniRetarget) on about 100 clips: the robots’ hands were on average 3.3 cm off from the real people’s with OmniRetarget, versus 15.2 cm with GMR.</li>
        <li>Debugged a data type mismatch that silently froze all 29 robot joints in OmniRetarget’s output, fixed it with a run-time wrapper (no library changes), and re-ran affected results.</li>
      </ul>
      {/* TODO: video placeholders — dance clip (headline), hug clip (captioned as a limitation), GMR vs
        OmniRetarget comparison, and PD on/off, with caption "Playback only sets poses frame by frame.
        There's no physics, so bodies can pass through each other." No media field exists on this page
        yet; let me know how you'd like to add them once you have clips. */}

      <h3 className="job-title second-job">Robotics Researcher</h3>
      <p className="company">
        SFU <a href="https://introboticslab.com/" target="_blank" rel="noopener noreferrer">Introbotics Lab</a> (supervisor: SiQi Zhou)
      </p>
      <p className="company">
        In collaboration with Dr. Lidia Atanasova, Technical University of Munich
      </p>
      <p className="date">May 2026 - Present</p>
      <ul className="experience-list">
        <li>Built a web app (Python, FastAPI, HTML/JavaScript) that turns a photo and artist-defined rules into robot carving plans, then simulates the carve so artists can preview designs before cutting physical material.</li>
        <li>Reduced rendering time by 42% (592s to 341s) by running Blender renders across multiple GPU processes, and added a two-stage pipeline that plays a draft video within minutes while the full-quality version renders.</li>
        <li>Ported the DiSECt cutting simulator to JAX and fixed a mesh-translation force discrepancy, as groundwork for a physics-based carve model.</li>
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
