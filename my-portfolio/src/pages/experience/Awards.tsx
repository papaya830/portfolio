import { Link } from 'react-router-dom';
import './Awards.css';

type Award = {
  id: string;
  name: string;
  org?: string;
  date: string;
  amount?: string;
  note?: string;
  link?: string;
  internalLink?: { to: string; label: string };
  highlight?: boolean;
};

// Newest first
const awards: Award[] = [
  {
    id: 'women-in-tech',
    name: 'Women in Technology Scholarship',
    org: 'BC Scholarships Society',
    date: 'July 2026',
    amount: '$10,000',
    // TODO: one-line description, if you want one
    link: 'https://www.bcscholarshipsociety.ca/women-in-tech/about-this-scholarship/',
  },
  {
    id: 'grace-hopper',
    name: 'Grace Hopper Grant',
    org: 'SFU Faculty',
    date: 'May 2026',
    amount: '$1,400',
    note: 'Covered my trip to the 2026 Grace Hopper Celebration (GHC). Awarded to a dedicated community member.',
    // TODO: link, if there is one
    highlight: true,
  },
  {
    id: 'ocean-action',
    // TODO: exact grant name and awarding organization
    name: 'Ocean Action Grant',
    date: 'May 2025',
    amount: '$5,000',
    note: 'Funded the continuation of my flow rate detection device project.',
    internalLink: { to: '/projects/flow-rate-device', label: 'See the project' },
  },
  {
    id: 'csss',
    name: 'CSSS Undergraduate Award',
    org: 'Computing Science Student Society',
    date: 'November 2023',
    amount: '$3,000',
    note: 'Awarded for community involvement.',
    // No dedicated link — intentionally not linking to the generic SFU scholarships page
  },
  {
    id: 'rajan',
    name: 'Rajan Family Entrance Scholarship',
    // TODO: awarding organization (e.g. SFU?) and link, if any
    date: '2022',
    amount: '$20,000',
    note: 'Entrance scholarship awarded to a girl studying computer science.',
    highlight: true,
  },
];

const AwardMeta = ({ award }: { award: Award }) => (
  <>
    {award.org && <span className="award-org">{award.org}</span>}
    {award.org && <span className="award-sep" aria-hidden="true">·</span>}
    <span className="award-date">{award.date}</span>
  </>
);

const AwardLinks = ({ award }: { award: Award }) => (
  <>
    {award.link && (
      <a className="award-link" href={award.link} target="_blank" rel="noopener noreferrer">
        Learn more →
      </a>
    )}
    {award.internalLink && (
      <Link className="award-link" to={award.internalLink.to}>
        {award.internalLink.label} →
      </Link>
    )}
  </>
);

const Awards = () => {
  const highlights = awards.filter(a => a.highlight);

  return (
    <div className="content-section">
      <h2 className="section-title">Awards & Scholarships</h2>
      <div className="section-content">

        <div className="award-highlights">
          {highlights.map(award => (
            <article key={award.id} className="award-highlight-card">
              <span className="award-highlight-badge">Highlight</span>
              <h3 className="award-highlight-name">{award.name}</h3>
              <p className="award-meta"><AwardMeta award={award} /></p>
              {award.amount && <p className="award-amount">{award.amount}</p>}
              {award.note && <p className="award-note">{award.note}</p>}
              <AwardLinks award={award} />
            </article>
          ))}
        </div>

        <h3 className="award-list-heading">All awards</h3>
        <ul className="award-list">
          {awards.map(award => (
            <li key={award.id} className="award-item">
              <div className="position-dot" aria-hidden="true"></div>
              <div className="award-item-head">
                <h4 className="position-title">{award.name}</h4>
                {award.amount && <span className="award-amount-tag">{award.amount}</span>}
              </div>
              <p className="position-date award-meta"><AwardMeta award={award} /></p>
              {award.note && <p className="award-note">{award.note}</p>}
              <AwardLinks award={award} />
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
};

export default Awards;
