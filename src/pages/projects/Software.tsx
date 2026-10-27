import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { showSlides, plusSlides } from '../../utils/slideshow';
import './Projects.css';
import './FlowRateDevice.css';
import '../experience/Education.css';
import './Software.css';

import studioHome from '../../assets/images/projects/sgraffito-studio-home.png';
import uploadSlab from '../../assets/images/projects/sgraffito-upload-slab.png';
import slabSettings from '../../assets/images/projects/sgraffito-slab-settings.png';
import carvePreview from '../../assets/images/projects/sgraffito-carve-preview.png';
import exportFiles from '../../assets/images/projects/sgraffito-export.png';

import posterImage from '../../assets/images/projects/sgraffito-poster.jpg';
import reportPage1 from '../../assets/images/projects/sgraffito-report-page-1.jpg';
import reportPage2 from '../../assets/images/projects/sgraffito-report-page-2.jpg';
import reportPage3 from '../../assets/images/projects/sgraffito-report-page-3.jpg';
import reportPage4 from '../../assets/images/projects/sgraffito-report-page-4.jpg';
import reportPage5 from '../../assets/images/projects/sgraffito-report-page-5.jpg';
import reportPage6 from '../../assets/images/projects/sgraffito-report-page-6.jpg';
import reportPage7 from '../../assets/images/projects/sgraffito-report-page-7.jpg';

const reportPages = [reportPage1, reportPage2, reportPage3, reportPage4, reportPage5, reportPage6, reportPage7];

const slides = [
  {
    src: studioHome,
    alt: 'Sgraffito Studio landing page',
    caption: 'Sgraffito Studio home: upload a drawing and slab description, then step through marks found, rules, plan and carve preview.',
  },
  {
    src: uploadSlab,
    alt: 'Upload and slab step, with drawing and slip/clay colour choices',
    caption: 'Step 1, upload and slab: the drawing, slip and clay colour choices, and a top-down preview of where the plan will cut.',
  },
  {
    src: slabSettings,
    alt: 'Slab dimensions and clay body settings',
    caption: 'Slab dimensions, clay and slip thickness, clay condition and body surface controls, with a live top-down and side-view preview.',
  },
  {
    src: carvePreview,
    alt: 'Drawing compared against the simulated carve',
    caption: 'The drawing compared against the simulated carve, with a legend for uncut slip, dents and areas cut through to the body.',
  },
  {
    src: exportFiles,
    alt: 'Export step with downloadable plan and slab files',
    caption: 'The export step: downloadable plan, rules, marks, slab description, run summary and compare files, plus slab files for the simulator.',
  },
];

const experiments = [
  {
    experiment: 'Tool tilt (loop tool, 0° versus 60°, straight scrape and S-curve)',
    result: 'At matched depth, tilt mainly changes how the tool approaches the material and leaves the revealed layer similar.',
  },
  {
    experiment: 'Dot contact force (2, 6, 12 N)',
    result: 'All three approached about 0.9 mm depth. Higher force got there faster and left a wider mark, but not a deeper one.',
  },
  {
    experiment: 'Commanded scrape depth (0.8, 1.5, 2.5 mm over 16 mm strokes)',
    result: 'Achieved depth tracked the command at first, then plateaued near 0.9 mm.',
  },
  {
    experiment: 'Depth-controlled colour reveal',
    result: 'Shallow, medium and deep passes exposed the white, red and lower white layers. Colour can be chosen by depth alone.',
  },
  {
    experiment: 'Ergodic-planned flower',
    result: 'A posterized flower image became per-layer target densities and then a planned set of actions. This is a qualitative demonstration only.',
  },
];

const posterResults = [
  { design: 'Circles', cut: '90.9%', overCut: '0', missed: '43.5' },
  { design: 'Branch', cut: '62.9%', overCut: '0', missed: '346.5' },
  { design: 'Portrait', cut: '74.5%', overCut: '48', missed: '432.2' },
  { design: 'Pyramid', cut: '92.4%', overCut: '168', missed: '222.2' },
  { design: 'Mixed', cut: '75.5%', overCut: '0', missed: '1023.8' },
  { design: 'Sun', cut: '80.5%', overCut: '0', missed: '160.2' },
];

const Software = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const slideshowInitialized = useRef(false);

  const preloadImages = (srcs: string[]) =>
    Promise.all(srcs.map(src => new Promise(resolve => {
      const img = new Image();
      img.onload = () => resolve(src);
      img.onerror = () => resolve(src);
      img.src = src;
    })));

  const addDotIndicators = () => {
    const slideEls = document.getElementsByClassName('images');
    const dotsContainer = document.querySelector('.slideshow-dots');
    if (!dotsContainer || !slideEls.length) return;
    dotsContainer.innerHTML = '';
    for (let i = 0; i < slideEls.length; i++) {
      const dot = document.createElement('span');
      dot.className = 'slideshow-dot';
      dot.onclick = () => showSlides(i + 1);
      dotsContainer.appendChild(dot);
    }
    const dots = document.getElementsByClassName('slideshow-dot');
    if (dots.length > 0) dots[0].className += ' active';
  };

  useEffect(() => {
    setImagesLoaded(false);
    slideshowInitialized.current = false;
    preloadImages(slides.map(s => s.src)).then(() => {
      setImagesLoaded(true);
      setTimeout(() => {
        if (!slideshowInitialized.current) {
          showSlides(1);
          slideshowInitialized.current = true;
          addDotIndicators();
        }
      }, 300);
    });
  }, []);

  return (
    <main className="projects-page">
      <div className="projects-inner">

        <Link to="/projects" className="project-page-back">← back to projects</Link>

        <div className="projects-header">
          <div className="card-top project-page-meta">
            <span className="card-type-badge cat-software">Software</span>
            <span className="card-time">Ongoing (since May 2026)</span>
          </div>
          <h1 className="projects-title">robot sgraffito</h1>
          <p>
            Simulation research for robotic sgraffito: a robot scratches through layered material to
            reveal the colour beneath. I characterized how tools and actions behave, and worked on an
            artist-facing interface for previewing carves.
          </p>
        </div>

        <section className="project-page-section" aria-labelledby="overview">
          <h2 id="overview" className="project-page-heading">Overview</h2>
          <p>
            Sgraffito is a decorative technique, popular in Renaissance architecture and ceramics, where
            carving through a top layer reveals a contrasting colour beneath. Carving can't be undone, so a
            robot needs to know what a design will look like before it cuts. This project studies robotic
            sgraffito in simulation: how different tools and actions change layered material, and how an
            image can be turned into a carving plan that an artist can preview.
          </p>
        </section>

        <section className="project-page-section" aria-labelledby="context-role">
          <h2 id="context-role" className="project-page-heading">Context and my role</h2>
          <p>
            The project uses a simulation and planning framework built by my supervisor, Prof. SiQi Zhou
            (SFU), and is a collaboration with Dr. Lidia Atanasova (TUM). Gaurika Sharma and I worked on it
            together. My part was the experimental design and analysis of how tools and primitives behave,
            the artist-facing interface, and the research-day poster.
          </p>
        </section>

        <section className="project-page-section" aria-labelledby="framework">
          <h2 id="framework" className="project-page-heading">The framework I worked in</h2>
          <ul className="card-bullets">
            <li>A layered canvas (each layer has its own colour and physical properties) and a tool defined by its geometry and tilt.</li>
            <li>Three action primitives: scrape (a straight pass at a set depth), trace (a curved path) and dot (a point press that compacts material without removing it).</li>
            <li>An ergodic planner that turns a target image into scrape and dot placements by matching a target coverage density.</li>
            <li>Two simulators: a fast geometric one (boolean subtraction on signed distance fields) and a physics-based one that is still being calibrated.</li>
            <li>Export to Blender for a photorealistic view.</li>
          </ul>
        </section>

        <section className="project-page-section" aria-labelledby="experiments">
          <h2 id="experiments" className="project-page-heading">What I found (experiments)</h2>
          <p className="project-note">Each condition was run once, so I report no variance.</p>
          <div className="project-table-wrap">
            <table className="project-table">
              <thead>
                <tr><th>Experiment</th><th>Result</th></tr>
              </thead>
              <tbody>
                {experiments.map(row => (
                  <tr key={row.experiment}>
                    <td>{row.experiment}</td>
                    <td>{row.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Limitations I'd state plainly: single runs, the physics solver uses estimated material
            parameters that haven't been validated against real material, and the 0.9 mm ceiling has only
            been tested with the loop tool.
          </p>
        </section>

        <section className="project-page-section" aria-labelledby="poster-results">
          <h2 id="poster-results" className="project-page-heading">Poster results (simulated)</h2>
          <p>
            On six designs, the voxel simulation (0.25 mm voxels) cut between 62.9% and 92.4% of each
            design's area. Over-cut was zero on four of the six designs. These are simulated carves, not
            real ones.
          </p>
          <div className="project-table-wrap">
            <table className="project-table">
              <thead>
                <tr><th>Design</th><th>Cut</th><th>Over-cut (mm²)</th><th>Missed (mm²)</th></tr>
              </thead>
              <tbody>
                {posterResults.map(row => (
                  <tr key={row.design}>
                    <td>{row.design}</td>
                    <td>{row.cut}</td>
                    <td>{row.overCut}</td>
                    <td>{row.missed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p>
            Coverage of the ergodic fill rises quickly and then flattens (28%, 44%, 60% and 76% after 10,
            20, 40 and 210 strokes), so 40 strokes already give about 80% of the coverage that 210 do.
          </p>
        </section>

        <section className="project-page-section" aria-labelledby="interface">
          <h2 id="interface" className="project-page-heading">The artist-facing interface</h2>
          <p>
            A web interface where an artist uploads a drawing, picks a slab, plans the carve, and sees the
            simulated result before a robot runs. The pipeline stages are Prepare, Design, Rules,
            Decompose, Plan, Simulate and Render.
          </p>
          {/*
            TODO [confirm]: notes flag this next claim for my review before publishing —
            "The Design step offers four stylizations (regions, outlines, hatching and stipple) that all
            convert to one shape format, and the Rules step lets the artist control how shapes are
            carved." Confirm I want to describe the rules editor and the four styles as my own work, then
            move this sentence into the paragraph above.
          */}
        </section>

        <section className="project-page-section" aria-labelledby="changed">
          <h2 id="changed" className="project-page-heading">How the project changed</h2>
          <p>
            The first month used demonstration videos of dot, line and curve motions, with a
            vision-language model (Qwen) and OpenCV to recognize which primitive was being drawn. That
            approach was only roughly accurate, so from July the focus moved to simulation and
            image-driven planning. Learning primitives from demonstrations stays a long-term goal in the
            report.
          </p>
        </section>

        <section className="project-page-section" aria-labelledby="next-steps">
          <h2 id="next-steps" className="project-page-heading">Next steps</h2>
          <p>
            Calibrate the physics solver against real material measurements, extend the planner to trace
            primitives, and test whether the 0.9 mm ceiling is specific to the loop tool.
          </p>
        </section>

        <section className="project-page-section" aria-labelledby="tech">
          <h2 id="tech" className="project-page-heading">Tech</h2>
          <p className="project-tech-line">
            Python, JAX, OpenVDB, OpenCV, Blender, MuJoCo and Pinocchio (arm simulation), Jupyter, Git.
          </p>
          {/*
            TODO [confirm stack]: notes also listed "a web UI" in the tech stack but flagged the stack for
            confirmation. Specify the actual framework (e.g. React, Streamlit, Gradio) before adding it
            back to the line above.
          */}
        </section>

        <section className="project-page-section" aria-labelledby="research-day">
          <h2 id="research-day" className="project-page-heading">Research day</h2>
          <p>
            Presented as a poster, "Tool-Aware Ergodic Stroke Planning and Voxel Simulation for Robotic
            Sgraffito," at the SFU Computing Science research day, where the project was shortlisted for
            Best Undergraduate Project. There's no live demo, so here's the presentation video, the
            poster, and the full CMPT 415 report.
          </p>

          <h3 className="project-subheading">Video</h3>
          <video className="project-video" controls preload="metadata">
            <source src="/docs/robot-sgraffito-research-day-video.mp4" type="video/mp4" />
            Your browser doesn't support embedded video.{' '}
            <a href="/docs/robot-sgraffito-research-day-video.mp4" target="_blank" rel="noopener noreferrer">Watch it here</a> instead.
          </video>

          <h3 className="project-subheading">Poster</h3>
          <img
            className="project-poster-image"
            src={posterImage}
            alt="Tool-Aware Ergodic Stroke Planning and Voxel Simulation for Robotic Sgraffito — research-day poster"
          />
          <a className="project-pdf-link" href="/docs/robot-sgraffito-poster.pdf" target="_blank" rel="noopener noreferrer">
            Open the poster at full size →
          </a>

          <h3 className="project-subheading">Report</h3>
          <div className="project-report-pages">
            {reportPages.map((src, i) => (
              <img key={src} className="project-report-page" src={src} alt={`CMPT 415 report, page ${i + 1}`} />
            ))}
          </div>
          <a className="project-pdf-link" href="/docs/robot-sgraffito-report.pdf" target="_blank" rel="noopener noreferrer">
            Open the full report →
          </a>
        </section>

        <div className="project-slideshow">
          <h2 className="project-visuals-heading">Visuals</h2>

          {!imagesLoaded && (
            <div className="slideshow-loading">
              <div className="loading-spinner"></div>
              <p>Loading images...</p>
            </div>
          )}

          <div className="slideshow-container">
            {slides.map(slide => (
              <div className="images fade" key={slide.src}>
                <img src={slide.src} alt={slide.alt} style={{ width: '100%' }} />
                <div className="caption">{slide.caption}</div>
              </div>
            ))}
            <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
            <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
          </div>

          <div className="slideshow-dots"></div>
          {/*
            TODO: the poster and report also have figures worth showing here — the design-next-to-
            voxel-carve comparison, the three-depth scrape photos, the force/depth plots, the tilt
            comparison, the flower density map, and the pipeline strip. None are exported as standalone
            image files yet; add them to src/assets/images/projects/ and this slideshow once they are.
          */}
        </div>

      </div>
    </main>
  );
};

export default Software;
