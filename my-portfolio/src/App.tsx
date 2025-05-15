import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

import Travel from "./pages/about/Travel";
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
        {/* Title with images - ABOVE NAVBAR */}
        <h1 className="home-title">
          Chloe Yip
          <img className="headliner" src={headImage} alt="avatar" />
          <img className="monkey-headliner" src={monkeyImage} alt="monkey" />
        </h1>

        {/* Navigation bar */}
        <nav className="navbar">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/experience">Experience</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>

        {/* Routes for different pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/travel" element={<Travel />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/software" element={<Software />} />
          <Route path="/projects/firmware" element={<Firmware />} />
          <Route path="/projects/design" element={<Design />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;