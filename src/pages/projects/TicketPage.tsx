import { Link, useParams } from 'react-router-dom';
import './ProjectsPage.css';
import { getProject, categoryLabels } from '../../data/projects';
import { StatusPill } from './ProjectDetail';

const TicketPage = () => {
  const { slug, ticketSlug } = useParams();
  const project = slug ? getProject(slug) : undefined;
  const index = project?.tickets?.findIndex((t) => t.slug === ticketSlug) ?? -1;

  if (!project || !project.tickets || index < 0) {
    return (
      <main className="pj-page">
        <Link to="/projects" className="pd-back">← All projects</Link>
        <h1 className="pj-title">Not found</h1>
        <p>There is no ticket at that address.</p>
      </main>
    );
  }

  const ticket = project.tickets[index];
  const prev = project.tickets[index - 1];
  const next = project.tickets[index + 1];

  const sections: [string, string | undefined][] = [
    ['Symptom', ticket.symptom],
    ['Cause', ticket.cause],
    ['Fix', ticket.fix],
    ['How I tracked it down', ticket.howFound],
  ];

  return (
    <main className="pj-page">
      <nav className="tk-crumbs" aria-label="Breadcrumb">
        <Link to="/projects">Projects</Link> / <Link to={`/projects/${project.slug}`}>{project.title}</Link> / {ticket.id}
      </nav>

      <div className="tk-layout">
        <div className="tk-main">
          <div className="tk-head">
            <span className="pd-ticket-id">{ticket.id}</span>
            <StatusPill status={ticket.status} />
          </div>
          <h1 className="tk-title">{ticket.title}</h1>
          <p className="tk-summary">{ticket.summary ?? ticket.outcome}</p>

          {(ticket.before || ticket.after) && (
            <div className="tk-ba">
              {ticket.before && (
                <div className="tk-tile before">
                  <div className="tk-tile-tag">Before</div>
                  <div className="tk-tile-value">{ticket.before.value}</div>
                  <div className="tk-tile-label">{ticket.before.label}</div>
                </div>
              )}
              {ticket.after && (
                <div className="tk-tile after">
                  <div className="tk-tile-tag">After</div>
                  <div className="tk-tile-value">{ticket.after.value}</div>
                  <div className="tk-tile-label">{ticket.after.label}</div>
                </div>
              )}
            </div>
          )}

          {sections.map(([heading, text]) => {
            if (!text && !import.meta.env.DEV) return null;
            return (
              <section key={heading} className="tk-section">
                <h2>{heading}</h2>
                {text ? <p>{text}</p> : <p className="tk-todo">[to fill in]</p>}
              </section>
            );
          })}

          <div className="tk-nav">
            {prev ? <Link to={`/projects/${project.slug}/${prev.slug}`}>← {prev.id} {prev.title}</Link> : <span />}
            {next ? <Link to={`/projects/${project.slug}/${next.slug}`}>{next.id} {next.title} →</Link> : <span />}
          </div>
        </div>

        <dl className="tk-side">
          <div><dt>Project</dt><dd><Link to={`/projects/${project.slug}`}>{project.title}</Link></dd></div>
          <div><dt>Area</dt><dd>{project.categories.map((c) => categoryLabels[c]).join(' / ')}</dd></div>
          {ticket.tools && <div><dt>Tools</dt><dd>{ticket.tools}</dd></div>}
          {ticket.skills && <div><dt>Skills</dt><dd>{ticket.skills}</dd></div>}
        </dl>
      </div>
    </main>
  );
};

export default TicketPage;
