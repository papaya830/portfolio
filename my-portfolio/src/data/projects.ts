import carvePreview from '../assets/images/projects/sgraffito-carve-preview.png';

export type Category = 'Robotics' | 'ML' | 'Software' | 'Firmware' | 'Design';
export type TicketStatus = 'Done' | 'Fixed' | 'Built' | 'In progress' | 'Partial';

export type Stat = { value: string; label: string };

export type Ticket = {
  id: string;
  slug: string;
  title: string;
  status: TicketStatus;
  outcome: string;
  summary?: string;
  /** Short paragraph built from the original project text */
  whatIDid?: string;
  before?: Stat;
  after?: Stat;
  symptom?: string;
  cause?: string;
  fix?: string;
  howFound?: string;
  tools?: string;
  skills?: string;
};

export type ProjectLink = { label: string; href: string; external?: boolean };

export type Project = {
  slug: string;
  title: string;
  categories: Category[];
  when: string;
  status: 'current' | 'done';
  tier: 'featured' | 'recent' | 'earlier';
  /** One sentence, at most 20 words */
  summary: string;
  /** One short result */
  highlight: string;
  /** Competition results get a pink highlight box */
  highlightIsResult?: boolean;
  image?: string;
  placeholderLabel?: string;
  placeholderTint?: string;
  links: ProjectLink[];
  /** Existing /projects/<page> route for hand-built pages */
  path?: string;
  /** Short year shown in the "Earlier" list */
  year?: string;

  // Original long-form content, kept so nothing is lost
  details?: string;
  bullets?: string[];
  competitionLabel?: string;
  competitionLink?: string;

  // Optional detail-page fields
  oneLiner?: string;
  facts?: { when: string; data: string; robots: string; stack: string };
  mediaCaption?: string;
  accomplishments?: Stat[];
  next?: string;
  tickets?: Ticket[];
};

export const projects: Project[] = [
  {
    slug: 'robot-sgraffito',
    title: 'Robot Sgraffito',
    categories: ['Robotics', 'Software'],
    when: 'May 2026 – present',
    status: 'current',
    tier: 'featured',
    summary:
      'Simulation research for robotic sgraffito: a robot scratches through layered clay to reveal the colour beneath.',
    highlight: 'Artist-facing carve preview',
    image: carvePreview,
    path: '/projects/software',
    links: [
      { label: 'Case study', href: '/projects/software' },
      { label: 'Poster PDF', href: '/docs/robot-sgraffito-poster.pdf', external: true },
      { label: 'Research Day video', href: '/docs/robot-sgraffito-research-day-video.mp4', external: true },
    ],
    details:
      'Simulation research for robotic sgraffito: a robot scratches through layered material to reveal the colour beneath. I characterized how tools and actions behave, and worked on an artist-facing interface for previewing carves.',
    bullets: [
      'Characterized how carving tools and actions behave in simulation',
      'Built an artist-facing interface for previewing carves before they run',
      'Presented as a poster, report and Research Day video',
    ],
  },
  {
    slug: 'humanoid-retargeting',
    title: 'Humanoid Interaction Retargeting',
    categories: ['Software', 'Robotics'],
    when: 'Oct 2026 – present',
    status: 'current',
    tier: 'recent',
    summary: 'Two-person mocap replayed on pairs of Unitree humanoids in MuJoCo.',
    highlight: '15.2 → 3.31 cm hand-spacing error across 104 clips',
    placeholderLabel: '[Dance clip still]',
    placeholderTint: '#EEE6FF',
    links: [],
    oneLiner:
      'Two humanoid robots replay hugs, handshakes and dances taken from human motion capture.',
    facts: {
      when: 'Oct 2026 – present',
      data: 'InterHuman motion capture, 104 clips',
      robots: 'Pairs of Unitree humanoids',
      stack: 'Python · MuJoCo · Gradio',
    },
    mediaCaption:
      "Playback only sets poses frame by frame. There's no physics, so bodies can pass through each other.",
    accomplishments: [
      { value: '15.2 → 3.31 cm', label: 'mean hand-spacing error after switching to OmniRetarget' },
      { value: '104 clips', label: 'evaluated end to end, 574 of 574 jobs completed' },
      { value: 'Feet on the floor', label: '+1.27 cm median vs −7.5 cm sinking with GMR' },
      { value: '1 file', label: 'to plug in a new retargeting method' },
    ],
    next: 'Make the partner part of the optimization so the robots stop passing through each other, and run the comparison app in a live rating session.',
    details:
      'I take recorded human-human interactions (handshakes, hugs, dancing) from the InterHuman motion capture dataset and get two humanoid robots to reproduce them. The first stage is kinematic replay: poses are set frame by frame and nothing is physically simulated. I built the pipeline, compared two retargeting methods (GMR and OmniRetarget), and investigated why the robots still pass through each other.',
    bullets: [
      "Ran a batch evaluation over 104 clips: OmniRetarget brought mean hand-spacing error down from 15.2 cm (GMR) to 3.31 cm, and kept robots' feet above the floor (+1.27 cm median) versus GMR sinking through it (-7.5 cm median). 574 of 574 batch jobs completed in about 4.7 hours.",
      'Found and fixed a silent bug: MuJoCo 3.16.0 returns joint types as numpy.int32, so a Python "in" check in the retargeting library silently returned False and zeroed out the Jacobian\'s joint columns — only the pelvis moved, with no error raised. Fixed it with a runtime wrapper, without editing the upstream source; joint ranges went from about 1e-7-1e-4 rad to 0.9-2.6 rad.',
      'Built a modular rt/ package where retargeters and metrics are plug-ins, so adding a new method takes one file; includes a results cache, a CLI, and acceptance tests.',
      'Built a Gradio web app for side-by-side video comparison of two retargeting methods, a metrics table, and 1-5 ratings on four questions. Localhost only; smoke-tested 20/20, not yet used in a live session.',
      'The robots still pass through each other in places, mainly because each person is retargeted independently (the partner is never part of the optimization) and kinematic replay has no contact response. Re-solving with the partner as an obstacle cut penetrating frames on the hug clip from 100% to 75%; adding 8 cm of spacing on the handshake clip removed penetration but made the hands visibly stop meeting.',
      "Added a PD-physics mode where joints are driven by actuators with gravity and robot-vs-robot contact, so the robots bounce off each other instead of passing through, though the pelvis path is still pinned to the retargeted trajectory, so it's not full physics tracking.",
    ],
    tickets: [
      {
        id: 'HIR-1',
        slug: 'batch-evaluation',
        title: 'Batch evaluation: GMR vs OmniRetarget',
        status: 'Done',
        outcome: 'OmniRetarget cut mean hand-spacing error from 15.2 to 3.31 cm over 104 clips.',
        whatIDid:
          "Ran a batch evaluation over 104 clips comparing GMR and OmniRetarget. OmniRetarget brought mean hand-spacing error down from 15.2 cm (GMR) to 3.31 cm, and kept robots' feet above the floor (+1.27 cm median) versus GMR sinking through it (-7.5 cm median). 574 of 574 batch jobs completed in about 4.7 hours.",
      },
      {
        id: 'HIR-2',
        slug: 'silent-jacobian-bug',
        title: 'The silent Jacobian bug',
        status: 'Fixed',
        outcome: 'Joint ranges went from ~1e-7–1e-4 rad to 0.9–2.6 rad: the robot finally moved.',
        summary: 'Only the pelvis moved and nothing raised an error.',
        before: { value: '~1e-7 to 1e-4 rad', label: 'joint ranges' },
        after: { value: '0.9 to 2.6 rad', label: 'joint ranges' },
        symptom: 'Retargeted robots barely moved: only the pelvis followed the motion, with no error raised.',
        cause:
          'MuJoCo 3.16.0 returns joint types as numpy.int32, so a Python `in` check in the retargeting library silently returned False and zeroed the Jacobian\'s joint columns.',
        fix: 'Added a runtime wrapper that fixes the type check. The upstream source is untouched.',
        howFound: '',
        tools: 'Python, MuJoCo 3.16.0, NumPy',
        skills: 'Debugging, numerical code',
      },
      {
        id: 'HIR-3',
        slug: 'plug-in-pipeline',
        title: 'Plug-in retargeting pipeline',
        status: 'Done',
        outcome: 'Adding a new retargeting method takes one file.',
        whatIDid:
          'Built a modular rt/ package where retargeters and metrics are plug-ins, so adding a new method takes one file; includes a results cache, a CLI, and acceptance tests.',
      },
      {
        id: 'HIR-4',
        slug: 'comparison-app',
        title: 'Side-by-side comparison app',
        status: 'Built',
        outcome: 'A Gradio web app for comparing two retargeting methods side by side.',
        whatIDid:
          'Built a Gradio web app for side-by-side video comparison of two retargeting methods, a metrics table, and 1-5 ratings on four questions. Localhost only; smoke-tested 20/20, not yet used in a live session.',
      },
      {
        id: 'HIR-5',
        slug: 'partner-aware-retargeting',
        title: 'Partner-aware retargeting',
        status: 'In progress',
        outcome: 'Penetrating frames on the hug clip cut from 100% to 75% so far.',
        whatIDid:
          'The robots still pass through each other in places, mainly because each person is retargeted independently (the partner is never part of the optimization) and kinematic replay has no contact response. Re-solving with the partner as an obstacle cut penetrating frames on the hug clip from 100% to 75%; adding 8 cm of spacing on the handshake clip removed penetration but made the hands visibly stop meeting.',
      },
      {
        id: 'HIR-6',
        slug: 'pd-physics-mode',
        title: 'PD physics mode',
        status: 'Partial',
        outcome: 'Robots bounce off each other instead of passing through.',
        whatIDid:
          "Added a PD-physics mode where joints are driven by actuators with gravity and robot-vs-robot contact, so the robots bounce off each other instead of passing through, though the pelvis path is still pinned to the retargeted trajectory, so it's not full physics tracking.",
      },
    ],
  },
  {
    slug: 'groot-sim-humanoids',
    title: 'NVIDIA GR00T on Simulated Humanoids',
    categories: ['Software', 'Robotics'],
    when: 'Oct 2026',
    status: 'current',
    tier: 'recent',
    summary: 'Does a pretrained robot model transfer to my own sim scene? A probe.',
    highlight: '2 / 2 closed-loop Franka episodes succeeded',
    placeholderLabel: '[Franka arm in sim]',
    links: [],
    details:
      "GR00T-N1.7-LIBERO controlled a Franka arm through a server/client setup, succeeding on 2 of 2 episodes. I also set up a G1 pick-and-place scene and fed its observations to the pretrained REAL_G1 model open loop. The output followed the state I sent, but the planned motion was nearly static, the hands never closed, and changing the image or instruction barely changed it. My read: the pretrained model doesn't act on my simulated scene, likely because it's out of its training distribution, and a manipulation demo would need fine-tuning. The rotation convention and hand joint order I used were guesses, so this is a probe, not a rigorous negative result.",
    bullets: [
      'GR00T-N1.7-LIBERO controlled a Franka arm through a server/client setup: 2 of 2 episodes succeeded.',
      'Fed a simulated Unitree G1 pick-and-place scene\'s observations to the pretrained REAL_G1 model open loop: it followed the input state (shifting the input wrist +10 cm shifted the output about +12 cm) but barely moved (at most 2.5 cm over 40 steps), never closed the hands, and barely reacted to a blank image or a different instruction.',
      "My conclusion: the pretrained model doesn't act on my simulated scene, likely out of its training distribution — a real manipulation demo would need fine-tuning on a larger GPU or a task-specific checkpoint.",
    ],
  },
  {
    slug: 'tactilegen',
    title: 'TactileGen: Tactile Charts for Blind and Low-Vision Students',
    categories: ['ML', 'Software'],
    when: 'Oct – Nov 2026',
    status: 'done',
    tier: 'recent',
    summary:
      'Turns chart images into tactile braille graphics for blind and low-vision students, replacing a manual process.',
    highlight: '96.6% of PlotQA charts read to within 1%',
    placeholderLabel: '[TactileGen output]',
    links: [{ label: 'GitHub', href: 'https://github.com/karyao/TactileGen', external: true }],
    details:
      "Co-founded an open-source tool (RBC Let's Solve It program) that converts chart images into tactile braille graphics, replacing a 20–30 minute manual process; reads 96.6% of PlotQA test charts to within 1% of true values. Python, YOLOv8, OCR.",
    bullets: [
      "Co-founded an open-source tool (RBC Let's Solve It program) that converts chart images into tactile braille graphics, replacing a 20–30 minute manual process; reads 96.6% of PlotQA test charts to within 1% of true values.",
      'Built the reconstruction step that joins YOLO object-detection output with OCR text into structured chart data, including axis calibration, bar heights, category labels and legend-based series.',
      'Fixed a chart-title error in the OCR pipeline, raising title accuracy from 49.0% to 98.9% on 11,242 test images.',
      'Diagnosed why the detector missed short bars and built a pixel-based fallback that recovers them; doubling image resolution raised bar recall only from 93.8% to 94.2%, so it was solved in post-processing.',
    ],
  },
  {
    slug: 'scrollstake',
    title: 'ScrollStake',
    categories: ['Software'],
    when: 'Oct 2026',
    status: 'done',
    tier: 'recent',
    summary: 'A focus lock with stakes: break it and a smart contract takes your money.',
    highlight: 'StormHacks 2026',
    highlightIsResult: true,
    placeholderLabel: '[ScrollStake screenshot]',
    links: [{ label: 'Devpost', href: 'https://devpost.com/software/scrollstake', external: true }],
    competitionLabel: 'StormHacks 2026',
    details:
      'An app to help you lock in: money is deducted from your account if you break the lock, enforced with a blockchain smart contract.',
  },
  {
    slug: 'sheltersspace',
    title: 'ShelterSpace',
    categories: ['Software'],
    when: 'Summer 2025 – Summer 2026',
    status: 'done',
    tier: 'recent',
    summary:
      'Live bed availability for homeless shelters, grown into a full-stack app for shelters to talk to each other.',
    highlight: '6th place, Enactus × Bentley iTwin4Good',
    highlightIsResult: true,
    placeholderLabel: '[ShelterSpace screenshot]',
    links: [],
    competitionLabel: 'Enactus x Bentley iTwin4Good, 6th place',
    details:
      'ShelterSpace began at the Enactus x Bentley iTwin4Good challenge in summer 2025, a six-week challenge where we used iTwin technology to show real-time bed availability in homeless shelters and placed 6th. In summer 2026, at the Enactus summer sprint challenge, it was built out into a full-stack application that lets shelters communicate with each other.',
    bullets: [
      'Summer 2025: used iTwin technology to show real-time bed availability in homeless shelters; placed 6th at Enactus x Bentley iTwin4Good',
      'Summer 2026: built out into a full-stack application for shelter-to-shelter communication at the Enactus summer sprint challenge',
    ],
  },
  {
    slug: 'resting-hr-predictor',
    title: 'Resting Heart Rate Predictor',
    categories: ['ML', 'Software'],
    when: 'May – Aug 2026',
    status: 'done',
    tier: 'recent',
    summary:
      'Predicts resting heart rate from nine months of wearable data using rolling-average features and Ridge regression.',
    highlight: 'Error cut 29% over baseline (MAE 1.90 vs 2.67 bpm)',
    placeholderLabel: '[Prediction plot]',
    links: [{ label: 'GitHub', href: 'https://github.com/papaya830/resting-hr-predictor', external: true }],
    details:
      'Python, pandas, scikit-learn. Built a data pipeline integrating four data sources into a daily dataset and modeled 9 months of wearable data with Ridge regression to predict resting heart rate.',
    bullets: [
      'Built a Python/pandas data pipeline integrating four data sources into a daily dataset, engineering 7-day and 30-day rolling-average features to separate short-term efforts from long-term fitness (sustained conditioning gains).',
      'Modeled 9 months of wearable data with Ridge regression to predict resting heart rate, cutting prediction error 29% over baseline (MAE 1.90 vs 2.67 bpm), using temporal cross-validation to prevent time-series leakage.',
    ],
  },
  {
    slug: 'flow-rate-device',
    title: 'Flow Rate Detection Device',
    categories: ['Firmware'],
    when: 'Jan – Nov 2025',
    status: 'done',
    tier: 'recent',
    summary: 'From concept to near-finished MVP with Ocean Wise and an Ocean Action Grant.',
    highlight: '250+ hours, funded by an Ocean Action Grant',
    highlightIsResult: true,
    placeholderLabel: '[Device photo]',
    path: '/projects/flow-rate-device',
    links: [{ label: 'Project page', href: '/projects/flow-rate-device' }],
    details:
      'Started from January to May 2025 as an early, bare-bones concept for my Ocean Wise Ocean Bridge Ambassador project (120+ hours), then developed from May to November 2025 into a near-finished MVP with funding from an Ocean Action Grant, as part of the Canada Service Corps program (130+ hours).',
  },
  {
    slug: 'jellyfish-umbrella',
    title: 'Jellyfish Umbrella',
    categories: ['Firmware', 'Robotics'],
    when: 'Feb – Mar 2026',
    status: 'done',
    tier: 'recent',
    summary: 'Kids steer tentacles and LEDs over Bluetooth. I wrote the link and the Arduino firmware.',
    highlight: '3rd of 15 teams, SFU FAS · $1,250',
    highlightIsResult: true,
    placeholderLabel: '[Jellyfish photo]',
    links: [{ label: 'GitHub', href: 'https://github.com/papaya830/Jellyfish-Umbrella', external: true }],
    competitionLink: 'https://www.sfu.ca/fas/study/student-life/fas-competition.html',
    competitionLabel: 'SFU FAS Speak Out Competition, 3rd place out of 15 teams',
    details:
      'Built with three teammates (Lauren Yip, Matthew Nikolic, Eric Cosma) for the 2026 SFU FAS Competition, an outreach challenge meant to spark curiosity about applied sciences in K-12 students. The team spent 300+ hours turning a clear plastic umbrella into an interactive jellyfish — kids can control tentacle movement and LED patterns through the software interface. My role was software interface and integration: I built the Bluetooth link between the umbrella and its control interface, wrote the Arduino code driving the motors and LED strip animations, and helped design the companion magazine. Placed 3rd of 15 finalist teams, winning $1,250.',
    bullets: [
      'Engineered the Bluetooth link between a custom outreach device and its control interface',
      'Wrote Arduino firmware driving motor movement and LED strip animations in real time',
      'Placed 3rd of 15 finalist teams at the 2026 SFU FAS Competition, earning $1,250',
    ],
  },
  {
    slug: 'glide-valkey',
    title: 'GLIDE for Valkey',
    categories: ['Software'],
    when: 'May – Dec 2024',
    status: 'done',
    tier: 'recent',
    summary: "Open-source client work on AWS's Valkey project.",
    highlight: '40+ commands in 4 languages · CI 12h → 1h',
    placeholderLabel: '[GLIDE]',
    links: [{ label: 'GitHub', href: 'https://github.com/cyip10', external: true }],
    details:
      'Contributed to an AWS open source project implementing 40+ Valkey commands across Java, Python, Node.js, and Go clients. Set up a CI pipeline that cut deployment time from 12h to 1h.',
    bullets: [
      'Implemented 40+ Valkey commands across Java, Python, Node.js, and Go client libraries for an AWS open source project',
      'Built a CI pipeline that reduced deployment time from 12 hours to 1 hour',
    ],
  },
  {
    slug: 'easyspeak',
    title: 'EasySpeak',
    categories: ['Design'],
    when: 'Feb – Mar 2024',
    year: '2024',
    status: 'done',
    tier: 'earlier',
    summary: 'A button that lets students anonymously flag questions to the instructor during class.',
    highlight: '3rd of 15 teams, SFU FAS · $1,250',
    highlightIsResult: true,
    links: [{ label: 'Figma', href: 'https://lnkd.in/gQEfZ-vu', external: true }],
    competitionLink: 'https://www.sfu.ca/fas/study/student-life/fas-competition.html',
    competitionLabel: 'SFU FAS Speak Out Competition, 3rd place out of 15 teams',
    details:
      "I worked with three teammates to build EasySpeak as a solution for making classrooms more accessible and inclusive. Students could press a button to anonymously flag a question, which would send a notification to the instructor through a buzzer. We also built separate web dashboards for students and instructors and deployed them on Google Cloud. I led the product ideation and UI design, creating the interfaces in Figma. The full UI wasn't implemented in the final build because of time constraints, but it helped shape how we approached the product.",
    bullets: [
      'Led product ideation and UI design for a 4-person team',
      'Designed the student and instructor interfaces in Figma',
      'Built an embedded hardware + web solution focused on accessibility',
      "Placed 3rd overall at SFU's FAS Speak Out Competition, winning $1,250",
    ],
  },
  {
    slug: 'fetch-ball-retriever',
    title: 'FETCH! Ball Retriever',
    categories: ['Firmware'],
    when: '2023',
    year: '2023',
    status: 'done',
    tier: 'earlier',
    summary: 'Ramps and an Arduino actuator that return a hockey ball to a solo player.',
    highlight: '',
    links: [
      { label: 'GitHub', href: 'https://github.com/papaya830/ENSC100--Ball-Retriever-FETCH-', external: true },
    ],
    details:
      "Built for SFU's ENSC 100 to help kids practice ball hockey solo. Passive ramps funnel the ball back after each shot; an Arduino-controlled linear actuator and ultrasonic sensor then lift and release it down a second ramp, sending it back out toward the player.",
    bullets: [
      'Designed an Arduino-controlled linear actuator and ultrasonic sensor system to automate ball return',
      'Built passive ramp mechanics to guide and redirect a hockey ball without manual intervention',
    ],
  },
  {
    slug: 'emotion-recognition-cnn',
    title: 'Emotion Recognition CNN',
    categories: ['ML', 'Software'],
    when: 'Summer 2021',
    year: '2021',
    status: 'done',
    tier: 'earlier',
    summary: 'A CNN trained to recognize human emotion from images.',
    highlight: '',
    links: [
      {
        label: 'View project',
        href: 'https://sites.google.com/view/computer-vision-fer2013/home?authuser=0',
        external: true,
      },
    ],
    details:
      'Trained a convolutional neural network on the FER2013 dataset to recognize human emotions in images. Improved accuracy from 45% to 50% through model experimentation.',
    bullets: [
      'Trained a CNN on the FER2013 dataset for facial emotion recognition',
      'Improved model accuracy from 45% to 50% through iterative experimentation',
    ],
  },
];

export const categoryLabels: Record<Category, string> = {
  Robotics: 'Robotics',
  ML: 'Machine Learning',
  Software: 'Software',
  Firmware: 'Firmware / HW',
  Design: 'Design',
};

export const projectHref = (p: Project): string | undefined =>
  p.path ?? (p.tickets?.length ? `/projects/${p.slug}` : p.links.find((l) => l.external)?.href);

export const isInternalHref = (href: string) => href.startsWith('/') && !href.startsWith('/docs/');

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
