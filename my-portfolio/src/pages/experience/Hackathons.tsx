import '../projects/Projects.css';
import './Hackathons.css';

type Role = 'Participant' | 'Organizer' | 'Mentor' | 'Judge' | 'Winner';

type Win = {
  id: string;
  title: string;
  event: string;
  date: string;
  prize: string;
  description?: string;
  link?: string;
};

type TimelineEntry = {
  year: number;
  month: string;
  event: string;
  host?: string;
  role: Role;
  note?: string;
  link?: string;
};

// Featured wins, newest first
const wins: Win[] = [
  {
    id: 'askless',
    title: 'Askless',
    event: 'SSSS SystemsHack',
    date: 'Jan 2026',
    prize: 'Best Use of InternDB Track',
    description: 'An AI-powered "useless" version of Stack Overflow, complete with Stack Overflow\'s attitude.',
    link: 'https://devpost.com/software/askless',
    // TODO: tech stack and my role
  },
  {
    id: 'connect-sfu',
    title: 'Connect SFU',
    event: 'StormHacks (SFU Surge)',
    date: 'Oct 2025',
    prize: 'Best Software Systems Hack',
    description: "A centralized events portal for SFU clubs, because it's hard to know what events are happening.",
    link: 'https://devpost.com/software/connectsfu',
    // TODO: tech stack and my role
  },
  {
    id: 'brainrot-lingo',
    title: 'BrainRot Lingo',
    event: 'StormHacks (SFU Surge)',
    date: 'Oct 2024',
    prize: 'Most Innovative Project',
    // TODO: one-line description of what BrainRot Lingo does
    link: 'https://devpost.com/software/brainrot-lingo',
    // TODO: tech stack and my role
  },
  {
    id: 'wec-programming',
    title: 'Western Engineering Competition',
    event: 'SFU Qualifier, Programming',
    date: 'Nov 2023 & Nov 2025',
    prize: 'SFU Qualifier Winner (twice)',
    description: 'Won the SFU qualifier twice, representing SFU in the programming category.',
    // TODO: my role / team, and how we did at WEC itself, if you want to include it
  },
];

// Newest first
const timeline: TimelineEntry[] = [
  { year: 2026, month: 'Oct', event: 'StormHacks', host: 'SFU Surge', role: 'Participant', note: 'Built ScrollStake.', link: 'https://devpost.com/software/scrollstake' },
  { year: 2026, month: 'Jun', event: 'World Cup Designathon & Hackathon', host: 'Vancouver Made', role: 'Participant', note: 'Fashion track.', link: 'https://luma.com/erjpeza4?tk=kk1BIw' },
  { year: 2026, month: 'Summer', event: 'Enactus Summer Sprint Challenge', role: 'Participant', note: 'Built ShelterSpace out into a full-stack application.' },
  { year: 2026, month: 'Apr', event: 'SillyHacks', host: 'SFU Surge', role: 'Judge' },
  { year: 2026, month: 'Mar', event: 'Hack the Galaxy', host: 'SFU WiCS', role: 'Mentor', link: 'https://hackthegalaxy.ca/' },
  { year: 2026, month: 'Jan', event: 'SSSS SystemsHack', role: 'Winner', note: 'Best Use of InternDB Track with Askless.', link: 'https://devpost.com/software/askless' },
  { year: 2025, month: 'Nov', event: 'Western Engineering Competition', host: 'Programming Qualifier', role: 'Winner' },
  { year: 2025, month: 'Oct', event: 'StormHacks', host: 'SFU Surge', role: 'Winner', note: 'Best Software Systems Hack with Connect SFU.', link: 'https://devpost.com/software/connectsfu' },
  { year: 2025, month: 'Summer', event: 'Enactus x Bentley iTwin4Good', role: 'Participant', note: 'Placed 6th. Where ShelterSpace started.' },
  // TODO: fall detection device — currently timeline-only; tell me if you'd rather have a short "what I learned" project card
  { year: 2025, month: 'Jan', event: 'NW Hacks', host: 'NWPlus, UBC', role: 'Participant', note: "Built a fall detection device; the firmware didn't work out." },
  { year: 2024, month: 'Nov', event: 'Western Engineering Competition', host: 'Consulting', role: 'Participant' },
  { year: 2024, month: 'Oct', event: 'StormHacks', host: 'SFU Surge', role: 'Winner', note: 'Most Innovative Project with BrainRot Lingo.', link: 'https://devpost.com/software/brainrot-lingo' },
  { year: 2024, month: 'May', event: 'StormHacks', host: 'SFU Surge', role: 'Participant' },
  { year: 2024, month: 'Mar', event: 'SSSS SystemsHack', role: 'Organizer', note: 'Worked on event ideas that took place during the hackathon.' },
  { year: 2023, month: 'Nov', event: 'Western Engineering Competition', host: 'Programming Qualifier', role: 'Winner' },
  { year: 2023, month: 'Mar', event: 'SSSS SystemsHack', role: 'Organizer', note: 'Made the floor plan and took notes in calls with faculty.' },
  { year: 2023, month: 'Feb', event: 'Mountain Madness', host: 'CSSS', role: 'Participant', note: 'My first hackathon!' },
];

// "Winner" is an outcome, not a role — a win means I was there as a participant
const roleCount = new Set(timeline.map(t => (t.role === 'Winner' ? 'Participant' : t.role))).size;
const winCount = timeline.filter(t => t.role === 'Winner').length;
const years = [...new Set(timeline.map(t => t.year))];

const Hackathons = () => (
  <div className="content-section">
    <h2 className="section-title">Hackathons & Competitions</h2>
    <div className="section-content">

      <p className="hack-headline">
        <strong>{timeline.length} hackathons and competitions</strong> across {roleCount} roles,
        with <strong>{winCount} wins</strong>.
      </p>

      <h3 className="hack-subheading">Winners</h3>
      <div className="hack-wins-grid">
        {wins.map(win => (
          <article key={win.id} className="hack-win-card">
            <div className="card-top">
              <span className="hack-winner-badge">🏆 Winner</span>
              <span className="card-time">{win.date}</span>
            </div>
            <h4 className="card-title">{win.title}</h4>
            <p className="hack-win-event">{win.event}</p>
            <p className="hack-win-prize">{win.prize}</p>
            {win.description && <p className="card-desc">{win.description}</p>}
            {win.link && (
              <a
                className="card-link"
                href={win.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${win.title} on Devpost`}
              >
                Devpost →
              </a>
            )}
          </article>
        ))}
      </div>

      <h3 className="hack-subheading">Timeline</h3>
      <div className="hack-timeline">
        {years.map(year => (
          <section key={year} className="hack-year" aria-labelledby={`hack-year-${year}`}>
            <h4 id={`hack-year-${year}`} className="hack-year-label">{year}</h4>
            <ul className="hack-year-list">
              {timeline.filter(t => t.year === year).map(entry => (
                <li key={`${entry.year}-${entry.month}-${entry.event}`} className="hack-entry">
                  <span className="hack-entry-month">{entry.month}</span>
                  <div className="hack-entry-body">
                    <div className="hack-entry-head">
                      {entry.link ? (
                        <a className="hack-entry-event" href={entry.link} target="_blank" rel="noopener noreferrer">
                          {entry.event}
                        </a>
                      ) : (
                        <span className="hack-entry-event">{entry.event}</span>
                      )}
                      {entry.host && <span className="hack-entry-host">{entry.host}</span>}
                      <span className={`hack-role-tag role-${entry.role.toLowerCase()}`}>{entry.role}</span>
                    </div>
                    {entry.note && <p className="hack-entry-note">{entry.note}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

    </div>
  </div>
);

export default Hackathons;
