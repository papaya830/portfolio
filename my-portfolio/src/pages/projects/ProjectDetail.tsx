import { Link, useParams } from 'react-router-dom';
import './ProjectsPage.css';
import { getProject, categoryLabels, type TicketStatus } from '../../data/projects';

export const StatusPill = ({ status }: { status: TicketStatus }) => {
  const wip = status === 'In progress' || status === 'Partial';
  return <span className={`pd-pill ${wip ? 'wip' : 'ok'}`}>{status}</span>;
};

const NotFound = () => (
  <main className="pj-page">
    <Link to="/projects" className="pd-back">← All projects</Link>
    <h1 className="pj-title">Not found</h1>
    <p>There is no page for that project yet.</p>
  </main>
);

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = slug ? getProject(slug) : undefined;
  if (!project || !project.tickets?.length) return <NotFound />;

  const cats = project.categories.map((c) => categoryLabels[c]).join(' / ');

  return (
    <main className="pj-page">
      <Link to="/projects" className="pd-back">← All projects</Link>

      <div className="pd-top">
        <div className="pd-top-main">
          <div className="pd-status">
            <span className="pd-dot" aria-hidden="true" />
            {project.status === 'current' ? 'In progress' : 'Done'} · {cats}
          </div>
          <h1 className="pd-title">{project.title}</h1>
          {project.oneLiner && <p className="pd-oneliner">{project.oneLiner}</p>}
        </div>

        {project.facts && (
          <dl className="pd-facts">
            <div><dt>When</dt><dd>{project.facts.when}</dd></div>
            <div><dt>Data</dt><dd>{project.facts.data}</dd></div>
            <div><dt>Robots</dt><dd>{project.facts.robots}</dd></div>
            <div><dt>Stack</dt><dd>{project.facts.stack}</dd></div>
          </dl>
        )}
      </div>

      <figure className="pd-media">
        <div className="pd-media-box">{project.placeholderLabel ?? '[Headline media]'}</div>
        {project.mediaCaption && <figcaption>{project.mediaCaption}</figcaption>}
      </figure>

      {project.accomplishments && (
        <section>
          <h2 className="pd-h2">What it accomplished</h2>
          <div className="pd-stats">
            {project.accomplishments.map((a) => (
              <div key={a.value} className="pd-stat">
                <div className="pd-stat-value">{a.value}</div>
                <div className="pd-stat-label">{a.label}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 className="pd-h2">Pieces I worked on</h2>
        <div className="pd-tickets">
          {project.tickets.map((t) => (
            <Link key={t.id} to={`/projects/${project.slug}/${t.slug}`} className="pd-ticket">
              <div className="pd-ticket-head">
                <span className="pd-ticket-id">{t.id}</span>
                <StatusPill status={t.status} />
              </div>
              <h3>{t.title}</h3>
              <p>{t.outcome}</p>
              <span className="pd-ticket-open">Open ticket →</span>
            </Link>
          ))}
        </div>
      </section>

      {project.next && (
        <section className="pd-next">
          <h2>What's next</h2>
          <p>{project.next}</p>
        </section>
      )}
    </main>
  );
};

export default ProjectDetail;
