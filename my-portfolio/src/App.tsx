import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Experience from "./pages/experience/Experience";
import Contact from "./pages/contact/Contact";
import Creative from "./pages/creative/Creative";
import Personal from "./pages/personal/Personal";

import Software from "./pages/projects/Software";
import Firmware from "./pages/projects/Firmware";
import Design from "./pages/projects/Design";
import FlowRateDevice from "./pages/projects/FlowRateDevice";
import ProjectDetail from "./pages/projects/ProjectDetail";
import TicketPage from "./pages/projects/TicketPage";

import SparkleCursor from './components/SparkleCursor';

import './App.css';
import headImage from './assets/images/head-new.jpg';
import monkeyImage from './assets/images/monkey.jpg';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <SparkleCursor />

        <div className="header-nav-wrapper">
          <header className="site-header">
            <Link to="/" className="brand">
              <h1 className="site-name">Chloe Yip</h1>
              <div className="header-images">
                <img className="headliner" src={headImage} alt="avatar" />
                <img className="monkey-headliner" src={monkeyImage} alt="monkey" />
              </div>
            </Link>

            <nav className="navbar">
              <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
              <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Projects</NavLink>
              <NavLink to="/experience" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Experience</NavLink>
              <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink>
              <a className="nav-link nav-resume" href="https://drive.google.com/file/d/1vY8bK3Tg8X-Gejup67GxtURgFe9fZy_2/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
            </nav>
          </header>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/software" element={<Software />} />
          <Route path="/projects/firmware" element={<Firmware />} />
          <Route path="/projects/design" element={<Design />} />
          <Route path="/projects/flow-rate-device" element={<FlowRateDevice />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/projects/:slug/:ticketSlug" element={<TicketPage />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/creative" element={<Creative />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;