import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/home/Home";
import Projects from "./pages/projects/Projects";
import Experience from "./pages/experience/Experience";
import Contact from "./pages/contact/Contact";
import Creative from "./pages/creative/Creative";
import Personal from "./pages/personal/Personal";

import Software from "./pages/projects/Software";
import Firmware from "./pages/projects/Firmware";
import Design from "./pages/projects/Design";

import './App.css';
import headImage from './assets/images/head-new.jpg';
import monkeyImage from './assets/images/monkey.jpg';

function App() {
  return (
    <BrowserRouter>
      <div className="app">

        <div className="header-nav-wrapper">
          {/* Header — name left, images right */}
          <header className="site-header">
            <h1 className="site-name">Chloe Yip</h1>
            <div className="header-images">
              <img className="headliner" src={headImage} alt="avatar" />
              <img className="monkey-headliner" src={monkeyImage} alt="monkey" />
            </div>
          </header>

          {/* Nav — sliding pink underline */}
          <nav className="navbar">
            <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
            <NavLink to="/projects" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Projects</NavLink>
            <NavLink to="/experience" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Experience</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Contact</NavLink>
          </nav>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/software" element={<Software />} />
          <Route path="/projects/firmware" element={<Firmware />} />
          <Route path="/projects/design" element={<Design />} />
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