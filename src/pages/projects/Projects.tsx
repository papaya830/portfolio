import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProjectsPage.css';
import {
  projects,
  categoryLabels,
  projectHref,
  isInternalHref,
  type Category,
  type Project,
} from '../../data/projects';

type Filter = 'All' | Category;
const filters: Filter[] = ['All', 'Robotics', 'Software', 'Firmware', 'Design'];

const filterLabel = (f: Filter) => (f === 'All' ? 'All' : categoryLabels[f]);

const CardShell = ({ project, className, children }: { project: Project; className: string; children: React.ReactNode }) => {
  const href = projectHref(project);
  if (!href) return <div className={className}>{children}</div>;
  if (isInternalHref(href)) return <Link to={href} className={className}>{children}</Link>;
  return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>;
};

const Projects = () => {
  const [active, setActive] = useState<Filter>('All');

  const visible = projects.filter((p) => active === 'All' || p.categories.includes(active));
  const featured = visible.filter((p) => p.tier === 'featured');
  const recent = visible.filter((p) => p.tier === 'recent');
  const earlier = visible.filter((p) => p.tier === 'earlier');

  return (
    <main className="pj-page">
      <h1 className="pj-title">Projects</h1>
      <p className="pj-subtitle">
        Robotics, software and hardware. Newest first; hackathon wins are on{' '}
        <Link to="/experience?tab=hackathons">Experience</Link>.
      </p>

      <div className="pj-filters" role="group" aria-label="Filter projects by category">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            className={`pj-pill ${active === f ? 'active' : ''}`}
            aria-pressed={active === f}
            onClick={() => setActive(f)}
          >
            {filterLabel(f)}
          </button>
        ))}
      </div>

      {visible.length === 0 && <p className="pj-empty">Nothing here yet.</p>}

      {featured.map((p) => (
        <article key={p.slug} className="pj-featured">
          <div className="pj-featured-img">
            {p.image && <img src={p.image} alt={`${p.title} carve preview`} />}
          </div>
          <div className="pj-featured-body">
            <div className="pj-chips">
              {p.categories.map((c) => (
                <span key={c} className="pj-chip">{categoryLabels[c]}</span>
              ))}
            </div>
            <h2>{p.title}</h2>
            <p>{p.summary}</p>
            <ul>
              <li>Characterized how carving tools and actions behave in simulation</li>
              <li>Built an artist-facing interface to preview carves before they run</li>
              <li>Presented as a poster, report and Research Day video</li>
            </ul>
            <div className="pj-featured-links">
              {p.links.map((l) =>
                l.external ? (
                  <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer">{l.label} ↗</a>
                ) : (
                  <Link key={l.label} to={l.href}>{l.label} →</Link>
                ),
              )}
            </div>
          </div>
        </article>
      ))}

      {recent.length > 0 && (
        <section>
          <h2 className="pj-section">Recent</h2>
          <div className="pj-grid">
            {recent.map((p) => (
              <CardShell key={p.slug} project={p} className="pj-card">
                {p.image ? (
                  <img className="pj-card-media" src={p.image} alt="" />
                ) : (
                  <div className="pj-card-media pj-placeholder" style={p.placeholderTint ? { background: p.placeholderTint } : undefined}>
                    {p.placeholderLabel}
                  </div>
                )}
                <div className="pj-card-body">
                  <div className="pj-meta">{p.categories.map((c) => categoryLabels[c]).join(' / ')} · {p.when}</div>
                  <h3>{p.title}</h3>
                  <p>{p.summary}</p>
                  {p.highlight && (
                    <div className={`pj-highlight ${p.highlightIsResult ? 'result' : ''}`}>{p.highlight}</div>
                  )}
                </div>
              </CardShell>
            ))}
          </div>
        </section>
      )}

      {earlier.length > 0 && (
        <section>
          <h2 className="pj-section">Earlier</h2>
          <ul className="pj-earlier">
            {earlier.map((p) => {
              const link = p.links[0];
              return (
                <li key={p.slug}>
                  <span className="pj-year">{p.year}</span>
                  <span className="pj-earlier-text"><strong>{p.title}</strong> · {p.summary}</span>
                  {link && <a href={link.href} target="_blank" rel="noopener noreferrer">{link.label} ↗</a>}
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </main>
  );
};

export default Projects;
