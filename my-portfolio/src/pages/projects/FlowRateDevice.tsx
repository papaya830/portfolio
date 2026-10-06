import { Link } from 'react-router-dom';
import './Projects.css';
import './FlowRateDevice.css';

const FlowRateDevice = () => (
  <main className="projects-page">
    <div className="projects-inner">

      <Link to="/projects" className="project-page-back">← back to projects</Link>

      <div className="projects-header">
        <div className="card-top project-page-meta">
          <span className="card-type-badge cat-firmware">Firmware / HW</span>
          <span className="card-time">January 2025 - November 2025</span>
        </div>
        <h1 className="projects-title">flow rate detection device</h1>
        {/* TODO: one-line summary of what the device measures and why */}
      </div>

      <section className="project-page-section" aria-labelledby="phase-1">
        <h2 id="phase-1" className="project-page-heading">Phase 1: Ocean Bridge Ambassador</h2>
        <p className="card-time">January 2025 - May 2025</p>
        <p>
          I designed and built an early, bare-bones concept of the flow rate detection device as my
          program project as an <a href="https://ocean.org/action/become-an-ocean-bridge-ambassador/" target="_blank" rel="noopener noreferrer">Ocean Wise Ocean Bridge Ambassador</a>,
          putting in 120+ hours.
        </p>
        {/* TODO: technical details — hardware, sensors, firmware, how it was tested */}
      </section>

      <section className="project-page-section" aria-labelledby="phase-2">
        <h2 id="phase-2" className="project-page-heading">Phase 2: Ocean Action Grant</h2>
        <p className="card-time">May 2025 - November 2025</p>
        <p>
          With funding from an Ocean Action Grant, I spent another 130+ hours developing the concept
          into a near-finished MVP, as part of the Canada Service Corps program.
        </p>
        {/* TODO: exact grant name and awarding organization */}
        {/* TODO: Canada Service Corps program link */}
        {/* TODO: specifics of what was added between the concept and the MVP */}
      </section>

      {/* TODO: results / impact, photos, and repo link */}

      <p className="project-page-related">
        Related: <Link to="/experience?tab=leadership">Leadership & Volunteering</Link>
        {' · '}
        <Link to="/experience?tab=awards">Awards & Scholarships</Link>
      </p>

    </div>
  </main>
);

export default FlowRateDevice;
