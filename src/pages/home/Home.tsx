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

const Home = () => {
  useEffect(() => {
    showSlides(1);
  }, []);

  return (
    <main className="home-container">
      <div className="home-inner">

        <div className="home-header">
          <h1 className="home-title-text">hi, i'm chloe</h1>
          <p className="home-subtitle">software systems student at SFU</p>
        </div>

        <div className="home-body">
          <div className="home-text">
            <p>
              Third year <a href="https://www.sfu.ca/fas/study/future-undergraduates/programs/major/software-systems-bachelor-science.html">Software Systems</a> major at SFU doing an engineering minor in Computer and Electronics design. I'm interested in pursuing a career in software development, technical management, and computer engineering.
            </p>
            <p>
              Dive into my <Link to="/projects">Projects</Link> to see what I've built, or check out my <Link to="/experience">Experience</Link> to explore my professional journey. <Link to="/contact">Say hi</Link> if you want to connect.
            </p>
            <Link to="/personal" className="personal-side-btn">
              there's more to me than this →
            </Link>
          </div>

          <div className="slideshow-container">
            <div className="images"><img src={meWithPumpkin} alt="me with a pumpkin" /></div>
            <div className="images"><img src={mePomo} alt="me at port moody" /></div>
            <div className="images"><img src={meTheater} alt="me at theater" /></div>
            <div className="images"><img src={meAlcatraz} alt="me at alcatraz" /></div>
            <div className="images"><img src={meDiscord} alt="me at discord" /></div>
            <div className="images"><img src={meRun} alt="me at sun run" /></div>
            <a className="slide-arrow prev-arrow" onClick={() => plusSlides(-1)}>&#10094;</a>
            <a className="slide-arrow next-arrow" onClick={() => plusSlides(1)}>&#10095;</a>
          </div>
        </div>

        <div className="instagram-blob">
          <span className="insta-emoji">📸</span>
          <p>into creative stuff? check out my instagram <a href="https://www.instagram.com/creatingwithcy" target="_blank" rel="noopener noreferrer">@creatingwithcy</a> for fun things i make outside of code ✨</p>
        </div>

      </div>
    </main>
  );
};

export default Home;