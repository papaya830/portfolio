import { Link } from 'react-router-dom';
import './Personal.css';

const Personal = () => {
  return (
    <main className="personal-page">
      <div className="personal-inner">

        {/* Back link */}
        <Link to="/" className="back-link">← back to the professional stuff</Link>

        {/* Header */}
        <div className="personal-header">
          <h1 className="personal-title">the other side of me</h1>
          <p className="personal-subtitle">athletics, writing, travel, and everything in between</p>
        </div>

        {/* Sections */}
        <div className="personal-sections">

          {/* Athletics */}
          <section className="personal-section section-athletics">
            <div className="section-label">athletics</div>
            <h2 className="section-heading">sports & fitness</h2>
            <p className="section-body">
              Add a blurb about your sports life here — volleyball, running, whatever you're into. 
              What do you play, how long have you been doing it, what does it mean to you?
            </p>
            {/* Add specific sports, races, teams, stats here */}
          </section>

          {/* Creative Writing */}
          <section className="personal-section section-writing">
            <div className="section-label">creative writing</div>
            <h2 className="section-heading">essays & blog posts</h2>
            <p className="section-body">
              Your writing will live here. Drop a short line about what you write about 
              and link out to pieces as you publish them.
            </p>
            <div className="writing-list">
              {/* Add posts here like:
              <a href="/your-link" className="writing-item">
                <span className="writing-title">Post title</span>
                <span className="writing-date">Month Year</span>
              </a>
              */}
              <p className="placeholder-text">first post coming soon.</p>
            </div>
          </section>

          {/* Travel */}
          <section className="personal-section section-travel">
            <div className="section-label">travel</div>
            <h2 className="section-heading">places i've been</h2>
            <p className="section-body">
              Describe your travel life here — are you a frequent traveller? Spontaneous trips or planned adventures?
              Any places that really stuck with you?
            </p>
            {/* Could add a list of countries/cities, photos, etc */}
          </section>

          {/* Random interests */}
          <section className="personal-section section-interests">
            <div className="section-label">random interests</div>
            <h2 className="section-heading">things i'm into</h2>
            <p className="section-body">
              A catch-all for everything else — shows you're watching, things you're learning, 
              hobbies, obsessions, whatever makes you you.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
};

export default Personal;