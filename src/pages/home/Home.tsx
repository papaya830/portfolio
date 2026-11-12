import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import './home.css';
import { plusSlides, showSlides } from '../../utils/slideshow';

import meWithPumpkin from '/src/assets/images/me-pumpkin.jpg';
import mePomo from '/src/assets/images/me-pomo.jpg';
import meTheater from '/src/assets/images/me-theater.jpg';
import meAlcatraz from '/src/assets/images/me-alcatraz.jpg';
import meDiscord from '/src/assets/images/me-disc.jpg';
import meRun from '/src/assets/images/me-run.jpg';
import sgraffitoHome from '../../assets/images/projects/sgraffito-studio-home.png';

const experience = [
  { role: 'Software Developer Co-op', company: 'Kardium', years: '2025–26' },
  { role: 'Fellow', company: 'Stan', years: '2026' },
  { role: 'Software Developer Co-op', company: 'Improving (AWS open source)', years: '2024' },
  { role: 'Founder & Host', company: 'Treehouse at SFU', years: '2025–now' },
  { role: 'Mentor', company: 'Women in Computing Science', years: '2024–now' },
];

const Home = () => {
  useEffect(() => {
    showSlides(1);
  }, []);

  return (
    <main className="home-container">
      <section className="hero">
        <div className="hero-left">
          <h1 className="hero-title">Hi, I'm Chloe</h1>
          <p className="hero-subtitle">
            5th-year{' '}
            <a href="https://www.sfu.ca/fas/study/future-undergraduates/programs/major/software-systems-bachelor-science.html">Software Systems</a>{' '}
            student at Simon Fraser University · Engineering minor in Computer and Electronics Design
          </p>
          <p className="hero-desc">
            I’m interested in building software that interacts with the real world through robotics.
            I’m hoping to grow as a software developer while eventually taking on more technical leadership.
            I want to build technology that makes a meaningful difference in people’s lives and the world around us.
          </p>

          <div className="exp-card">
            <div className="exp-card-head">
              <h2>Experience</h2>
              <Link to="/experience">All experience →</Link>
            </div>
            <ul>
              {experience.map((e) => (
                <li key={e.role + e.company}>
                  <strong>{e.role}</strong>, {e.company}
                  <span className="exp-years"> · {e.years}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="hero-right">
          <div className="slide-frame">
            <div className="images"><img src={meWithPumpkin} alt="me with a pumpkin" /></div>
            <div className="images"><img src={mePomo} alt="me at port moody" /></div>
            <div className="images"><img src={meTheater} alt="me at theater" /></div>
            <div className="images"><img src={meAlcatraz} alt="me at alcatraz" /></div>
            <div className="images"><img src={meDiscord} alt="me at discord" /></div>
            <div className="images"><img src={meRun} alt="me at sun run" /></div>
          </div>
          <div className="slide-controls">
            <button type="button" className="slide-btn" aria-label="Previous photo" onClick={() => plusSlides(-1)}>&#10094;</button>
            <button type="button" className="slide-btn" aria-label="Next photo" onClick={() => plusSlides(1)}>&#10095;</button>
          </div>
        </div>
      </section>

      <section className="current-projects">
        <div className="section-head">
          <h2>Current projects</h2>
          <Link to="/projects">All projects →</Link>
        </div>
        <div className="project-grid">
          <Link to="/projects/humanoid-retargeting" className="project-card">
            <div className="project-thumb placeholder lilac">[Dance clip still]</div>
            <h3>Humanoid Interaction Retargeting</h3>
            <p>Two humanoids replay hugs and handshakes from mocap.</p>
          </Link>
          <Link to="/projects/software" className="project-card">
            <div className="project-thumb"><img src={sgraffitoHome} alt="Robot Sgraffito studio" /></div>
            <h3>Robot Sgraffito</h3>
            <p>A robot carves layered clay to reveal colour.</p>
          </Link>
          <Link to="/projects" className="project-card">
            <div className="project-thumb placeholder">[Franka arm in sim]</div>
            <h3>NVIDIA GR00T on Simulated Humanoids</h3>
            <p>Does a pretrained robot model work in my own sim scene?</p>
          </Link>
        </div>
      </section>

      <footer className="home-footer">
        <p>Say hi: <a href="mailto:makewithchloe@gmail.com">makewithchloe@gmail.com</a></p>
        <p>Into creative stuff? I post things I make outside code at{' '}
          <a href="https://www.instagram.com/creatingwithcy" target="_blank" rel="noopener noreferrer">@creatingwithcy</a>
        </p>
      </footer>
    </main>
  );
};

export default Home;
