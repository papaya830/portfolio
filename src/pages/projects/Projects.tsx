import { useState } from 'react';
import { Link } from 'react-router-dom';
import '/src/index.css';
import './Projects.css';

type Category = 'All' | 'Software' | 'Firmware' | 'Design' | 'Robotics';

const GitHubIcon = () => (
  <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden="true">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
  </svg>
);

const categoryConfig: Record<string, { label: string; color: string }> = {
  All:      { label: "All",           color: "cat-all" },
  Software: { label: "Software",      color: "cat-software" },
  Firmware: { label: "Firmware / HW", color: "cat-firmware" },
  Design:   { label: "Design / UX",   color: "cat-design" },
  Robotics: { label: "Robotics",      color: "cat-robotics" },
};

type Project = {
  id: number;
  title: string;
  // A project can carry more than one tag (e.g. Software + Robotics)
  types: Exclude<Category, 'All'>[];
  completionTime: string;
  competitionLabel?: string;
  competitionLink?: string;
  description: string;
  details?: string;
  bullets?: string[];
  link?: string;
  linkLabel?: string;
  // Route inside this site, rendered with <Link> instead of an external <a>
  internalLink?: string;
};

const projectsData: Project[] = [
  {
    id: 10,
    title: "Humanoid Interaction Retargeting in Simulation",
    types: ["Software", "Robotics"],
    completionTime: "Oct 2026 - Present",
    description: "A modular pipeline that retargets two-person motion capture onto pairs of Unitree humanoids, replays it in MuJoCo, and compares retargeting methods across 104 clips.",
    details: "I take recorded human-human interactions (handshakes, hugs, dancing) from the InterHuman motion capture dataset and get two humanoid robots to reproduce them. The first stage is kinematic replay: poses are set frame by frame and nothing is physically simulated. I built the pipeline, compared two retargeting methods (GMR and OmniRetarget), and investigated why the robots still pass through each other.",
    bullets: [
      "Ran a batch evaluation over 104 clips: OmniRetarget brought mean hand-spacing error down from 15.2 cm (GMR) to 3.31 cm, and kept robots' feet above the floor (+1.27 cm median) versus GMR sinking through it (-7.5 cm median). 574 of 574 batch jobs completed in about 4.7 hours.",
      "Found and fixed a silent bug: MuJoCo 3.16.0 returns joint types as numpy.int32, so a Python \"in\" check in the retargeting library silently returned False and zeroed out the Jacobian's joint columns — only the pelvis moved, with no error raised. Fixed it with a runtime wrapper, without editing the upstream source; joint ranges went from about 1e-7-1e-4 rad to 0.9-2.6 rad.",
      "Built a modular rt/ package where retargeters and metrics are plug-ins, so adding a new method takes one file; includes a results cache, a CLI, and acceptance tests.",
      "Built a Gradio web app for side-by-side video comparison of two retargeting methods, a metrics table, and 1-5 ratings on four questions. Localhost only; smoke-tested 20/20, not yet used in a live session.",
      "The robots still pass through each other in places, mainly because each person is retargeted independently (the partner is never part of the optimization) and kinematic replay has no contact response. Re-solving with the partner as an obstacle cut penetrating frames on the hug clip from 100% to 75%; adding 8 cm of spacing on the handshake clip removed penetration but made the hands visibly stop meeting.",
      "Added a PD-physics mode where joints are driven by actuators with gravity and robot-vs-robot contact, so the robots bounce off each other instead of passing through, though the pelvis path is still pinned to the retargeted trajectory, so it's not full physics tracking."
    ],
    // TODO: video placeholders — dance clip (headline), hug clip (captioned as a limitation), GMR vs
    // OmniRetarget comparison, and PD on/off, with caption "Playback only sets poses frame by frame.
    // There's no physics, so bodies can pass through each other." No media field exists on this card
    // format yet, so these aren't wired in; let me know how you'd like to add them once you have clips.
  },
  {
    id: 11,
    title: "Trying NVIDIA GR00T on Simulated Humanoids",
    types: ["Software", "Robotics"],
    // TODO: confirm date — not given separately from the Humanoid Interaction Retargeting entry above,
    // assumed to fall in the same Oct 2026 window since it's described as a companion effort
    completionTime: "Oct 2026",
    description: "Running GR00T N1.7 in closed loop on a Franka arm, then testing whether the pretrained humanoid model transfers to a simulated Unitree G1.",
    details: "GR00T-N1.7-LIBERO controlled a Franka arm through a server/client setup, succeeding on 2 of 2 episodes. I also set up a G1 pick-and-place scene and fed its observations to the pretrained REAL_G1 model open loop. The output followed the state I sent, but the planned motion was nearly static, the hands never closed, and changing the image or instruction barely changed it. My read: the pretrained model doesn't act on my simulated scene, likely because it's out of its training distribution, and a manipulation demo would need fine-tuning. The rotation convention and hand joint order I used were guesses, so this is a probe, not a rigorous negative result.",
    bullets: [
      "GR00T-N1.7-LIBERO controlled a Franka arm through a server/client setup: 2 of 2 episodes succeeded.",
      "Fed a simulated Unitree G1 pick-and-place scene's observations to the pretrained REAL_G1 model open loop: it followed the input state (shifting the input wrist +10 cm shifted the output about +12 cm) but barely moved (at most 2.5 cm over 40 steps), never closed the hands, and barely reacted to a blank image or a different instruction.",
      "My conclusion: the pretrained model doesn't act on my simulated scene, likely out of its training distribution — a real manipulation demo would need fine-tuning on a larger GPU or a task-specific checkpoint."
    ],
  },
  {
    id: 9,
    title: "Robot Sgraffito",
    types: ["Software", "Robotics"],
    completionTime: "Ongoing (since May 2026)",
    description: "Simulation research for robotic sgraffito: a robot scratches through layered material to reveal the colour beneath. I characterized how tools and actions behave, and worked on an artist-facing interface for previewing carves.",
    internalLink: "/projects/software",
    linkLabel: "Project page"
  },
  {
    id: 6,
    title: "ScrollStake",
    // TODO: confirm category
    types: ["Software"],
    completionTime: "Oct 2026",
    competitionLabel: "StormHacks 2026",
    description: "An app to help you lock in: money is deducted from your account if you break the lock, enforced with a blockchain smart contract.",
    // TODO: tech stack, my role, and anything you want in the expanded details
    link: "https://devpost.com/software/scrollstake",
    linkLabel: "Devpost"
  },
  {
    id: 7,
    title: "ShelterSpace",
    // TODO: confirm category
    types: ["Software"],
    completionTime: "Summer 2025–Summer 2026",
    competitionLabel: "Enactus x Bentley iTwin4Good, 6th place",
    description: "Started as a real-time bed availability view for homeless shelters, then grew into a full-stack app that lets shelters communicate with each other.",
    details: "ShelterSpace began at the Enactus x Bentley iTwin4Good challenge in summer 2025, a six-week challenge where we used iTwin technology to show real-time bed availability in homeless shelters and placed 6th. In summer 2026, at the Enactus summer sprint challenge, it was built out into a full-stack application that lets shelters communicate with each other.",
    bullets: [
      "Summer 2025: used iTwin technology to show real-time bed availability in homeless shelters; placed 6th at Enactus x Bentley iTwin4Good",
      "Summer 2026: built out into a full-stack application for shelter-to-shelter communication at the Enactus summer sprint challenge"
    ],
    // TODO: tech stack, my role, and links (repo / demo / Devpost)
  },
  {
    id: 8,
    title: "Flow Rate Detection Device",
    // TODO: confirm category (Firmware / HW assumed since it's a physical device)
    types: ["Firmware"],
    completionTime: "Jan–Nov 2025",
    description: "A flow rate detection device I took from concept to a near-finished MVP over 250+ hours, through Ocean Wise's Ocean Bridge Ambassador program and an Ocean Action Grant.",
    details: "Started from January to May 2025 as an early, bare-bones concept for my Ocean Wise Ocean Bridge Ambassador project (120+ hours), then developed from May to November 2025 into a near-finished MVP with funding from an Ocean Action Grant, as part of the Canada Service Corps program (130+ hours).",
    // TODO: technical details to write up (hardware, sensors, firmware, results)
    internalLink: "/projects/flow-rate-device",
    linkLabel: "Project page"
  },
  // TODO: World Cup Designathon & Hackathon (Vancouver Made, Jun 2026, fashion track) — add a card once you know what you built; it's in the hackathon timeline for now
  // TODO: Fall detection device (NW Hacks, Jan 2025) — currently timeline-only; add a short "what I learned" card here if you prefer
  {
    id: 1,
    title: "GLIDE for Valkey",
    types: ["Software"],
    completionTime: "May–Dec 2024",
    description: "Open source contribution to AWS's Valkey project — implemented commands across four languages and cut CI deploy time.",
    details: "Contributed to an AWS open source project implementing 40+ Valkey commands across Java, Python, Node.js, and Go clients. Set up a CI pipeline that cut deployment time from 12h to 1h.",
    bullets: [
      "Implemented 40+ Valkey commands across Java, Python, Node.js, and Go client libraries for an AWS open source project",
      "Built a CI pipeline that reduced deployment time from 12 hours to 1 hour"
    ],
    link: "https://github.com/cyip10",
    linkLabel: "GitHub"
  },
  {
    id: 2,
    title: "Emotion Recognition CNN",
    types: ["Software"],
    completionTime: "Summer 2021",
    description: "A convolutional neural network trained to recognize human emotion from images.",
    details: "Trained a convolutional neural network on the FER2013 dataset to recognize human emotions in images. Improved accuracy from 45% to 50% through model experimentation.",
    bullets: [
      "Trained a CNN on the FER2013 dataset for facial emotion recognition",
      "Improved model accuracy from 45% to 50% through iterative experimentation"
    ],
    link: "https://sites.google.com/view/computer-vision-fer2013/home?authuser=0",
    linkLabel: "View Project"
  },
  {
    id: 3,
    title: "Jellyfish Umbrella",
    types: ["Firmware", "Robotics"],
    completionTime: "Feb–Mar 2026",
    competitionLink: "https://www.sfu.ca/fas/study/student-life/fas-competition.html",
    competitionLabel: "SFU FAS Speak Out Competition, 3rd place out of 15 teams",
    description: "An interactive jellyfish-shaped outreach demo for the 2026 SFU FAS Competition — placed 3rd, winning $1,250.",
    details: "Built with three teammates (Lauren Yip, Matthew Nikolic, Eric Cosma) for the 2026 SFU FAS Competition, an outreach challenge meant to spark curiosity about applied sciences in K-12 students. The team spent 300+ hours turning a clear plastic umbrella into an interactive jellyfish — kids can control tentacle movement and LED patterns through the software interface. My role was software interface and integration: I built the Bluetooth link between the umbrella and its control interface, wrote the Arduino code driving the motors and LED strip animations, and helped design the companion magazine. Placed 3rd of 15 finalist teams, winning $1,250.",
    bullets: [
      "Engineered the Bluetooth link between a custom outreach device and its control interface",
      "Wrote Arduino firmware driving motor movement and LED strip animations in real time",
      "Placed 3rd of 15 finalist teams at the 2026 SFU FAS Competition, earning $1,250"
    ],
    link: "https://github.com/papaya830/Jellyfish-Umbrella",
    linkLabel: "GitHub"
  },
  {
    id: 4,
    title: "EasySpeak",
    types: ["Design"],
    completionTime: "Feb–Mar 2024",
    competitionLink: "https://www.sfu.ca/fas/study/student-life/fas-competition.html",
    competitionLabel: "SFU FAS Speak Out Competition, 3rd place out of 15 teams",
    description: "An embedded device that lets students anonymously flag questions during class, built for SFU's FAS Speak Out Competition.",
    details: "I worked with three teammates to build EasySpeak as a solution for making classrooms more accessible and inclusive. Students could press a button to anonymously flag a question, which would send a notification to the instructor through a buzzer. We also built separate web dashboards for students and instructors and deployed them on Google Cloud. I led the product ideation and UI design, creating the interfaces in Figma. The full UI wasn't implemented in the final build because of time constraints, but it helped shape how we approached the product.",
    bullets: [
      "Led product ideation and UI design for a 4-person team",
      "Designed the student and instructor interfaces in Figma",
      "Built an embedded hardware + web solution focused on accessibility",
      "Placed 3rd overall at SFU's FAS Speak Out Competition, winning $1,250"
    ],
    link: "https://lnkd.in/gQEfZ-vu",
    linkLabel: "Figma"
  },
  {
    id: 5,
    title: "FETCH! Automatic Ball Retriever",
    types: ["Firmware"],
    completionTime: "2023",
    description: "A passive ramp and Arduino-controlled system that returns a hockey ball to a solo player.",
    details: "Built for SFU's ENSC 100 to help kids practice ball hockey solo. Passive ramps funnel the ball back after each shot; an Arduino-controlled linear actuator and ultrasonic sensor then lift and release it down a second ramp, sending it back out toward the player.",
    bullets: [
      "Designed an Arduino-controlled linear actuator and ultrasonic sensor system to automate ball return",
      "Built passive ramp mechanics to guide and redirect a hockey ball without manual intervention"
    ],
    link: "https://github.com/papaya830/ENSC100--Ball-Retriever-FETCH-",
    linkLabel: "GitHub"
  },
];

const placeholderCategories: string[] = [];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filtered = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.types.includes(activeCategory));

  const isPlaceholderCategory = placeholderCategories.includes(activeCategory);

  return (
    <main className="projects-page">
      <div className="projects-inner">

        <div className="projects-header">
          <h1 className="projects-title">projects</h1>
          <p className="projects-subtitle">things i've built across software, hardware, and design</p>
          <p className="projects-subtitle projects-subtitle-link">
            looking for hackathon wins? see <Link to="/experience?tab=hackathons">hackathons & competitions →</Link>
          </p>
        </div>

        <div className="category-filters">
          {(Object.keys(categoryConfig) as (Category | 'All')[]).map(cat => (
            <button
              key={cat}
              className={`filter-pill ${categoryConfig[cat].color} ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {categoryConfig[cat].label}
            </button>
          ))}
        </div>

        {isPlaceholderCategory ? (
          <div className="projects-placeholder">
            <p>i actually have some projects here — will update when i find the time 🙂</p>
          </div>
        ) : (
          <>
            <p className="results-count">
              {filtered.length} project{filtered.length !== 1 ? 's' : ''}
              {activeCategory !== 'All' ? ` — ${categoryConfig[activeCategory].label}` : ''}
            </p>
            <div className="projects-grid">
              {filtered.map(project => {
                const isExpanded = expandedId === project.id;
                return (
                  <div
                    key={project.id}
                    className={`project-card card-${project.types[0].toLowerCase()} ${isExpanded ? 'expanded' : ''}`}
                    onClick={() => setExpandedId(isExpanded ? null : project.id)}
                  >
                    <div className="card-top">
                      <div className="card-type-badges">
                        {project.types.map(t => (
                          <span key={t} className={`card-type-badge ${categoryConfig[t].color}`}>{categoryConfig[t].label}</span>
                        ))}
                      </div>
                      <span className="card-time">{project.completionTime}</span>
                    </div>
                    <h3 className="card-title">{project.title}</h3>
                    {project.competitionLabel && (project.competitionLink ? (
                      <a
                        href={project.competitionLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="card-competition-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {project.competitionLabel}
                      </a>
                    ) : (
                      <span className="card-competition-link">{project.competitionLabel}</span>
                    ))}
                    <p className="card-desc">{project.description}</p>
                    {isExpanded && project.details && (
                      <p className="card-details">{project.details}</p>
                    )}
                    {isExpanded && project.bullets && project.bullets.length > 0 && (
                      <ul className="card-bullets">
                        {project.bullets.map((bullet, i) => (
                          <li key={i}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                    <div className="card-bottom">
                      {project.internalLink && (
                        <Link
                          to={project.internalLink}
                          className="card-link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {project.linkLabel} →
                        </Link>
                      )}
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="card-link"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {project.linkLabel === "GitHub" && <GitHubIcon />}
                          {project.linkLabel} →
                        </a>
                      )}
                      {(project.details || (project.bullets && project.bullets.length > 0)) && (
                        <button
                          type="button"
                          className="card-expand-toggle"
                          aria-expanded={isExpanded}
                          aria-label={`${isExpanded ? 'Show less' : 'Read more'} about ${project.title}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setExpandedId(isExpanded ? null : project.id);
                          }}
                        >
                          {isExpanded ? "show less ↑" : "read more ↓"}
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default Projects;