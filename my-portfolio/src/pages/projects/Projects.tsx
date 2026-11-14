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
const filters: Filter[] = ['All', 'Robotics', 'ML', 'Software', 'Firmware', 'Design'];

const filterLabel = (f: Filter) => (f === 'All' ? 'All' : categoryLabels[f]);

const CardShell = ({ project, className, children }: { project: Project; className: string; children: React.ReactNode }) => {
  const href = projectHref(project);
  if (!href) return <div className={className}>{children}</div>;
  if (isInternalHref(href)) return <Link to={href} className={className}>{children}</Link>;
  return <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>;
};

type View = 'grid' | 'list';

const Projects = () => {
  const [active, setActive] = useState<Filter>('All');
  const [view, setView] = useState<View>('grid');

  const visible = projects.filter((p) => active === 'All' || p.categories.includes(active));

  return (
    <main className="pj-page">
      <h1 className="pj-title">Projects</h1>
      <p className="pj-subtitle">
        Robotics, software and hardware. Newest first; hackathon wins are on{' '}
        <Link to="/experience?tab=hackathons">Experience</Link>.
      </p>

      <div className="pj-toolbar">
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

        <div className="pj-view" role="group" aria-label="Layout">
          <button type="button" className={view === 'grid' ? 'active' : ''} aria-pressed={view === 'grid'} onClick={() => setView('grid')}>
            Icons
          </button>
          <button type="button" className={view === 'list' ? 'active' : ''} aria-pressed={view === 'list'} onClick={() => setView('list')}>
            List
          </button>
        </div>
      </div>

      {visible.length === 0 && <p className="pj-empty">Nothing here yet.</p>}

      <div className={view === 'grid' ? 'pj-grid' : 'pj-list'}>
        {visible.map((p) => (
          <CardShell key={p.slug} project={p} className="pj-card">
            {p.image ? (
              <img className="pj-card-media" src={p.image} alt="" />
            ) : (
              <div className="pj-card-media pj-placeholder" style={p.placeholderTint ? { background: p.placeholderTint } : undefined}>
                {p.placeholderLabel ?? '[Case study image]'}
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
    </main>
  );
};

export default Projects;
