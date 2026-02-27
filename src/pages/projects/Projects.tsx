import { useState } from 'react';
import '/src/index.css';
import './Projects.css';

type Category = 'All' | 'Software' | 'Firmware' | 'Design';

const categoryConfig: Record<string, { label: string; color: string }> = {
  All:      { label: "All",           color: "cat-all" },
  Software: { label: "Software",      color: "cat-software" },
  Firmware: { label: "Firmware / HW", color: "cat-firmware" },
  Design:   { label: "Design / UX",   color: "cat-design" },
};

const projectsData = [
  {
    id: 1,
    title: "GLIDE for Valkey",
    type: "Software",
    completionTime: "May–Dec 2024",
    description: "Contributed to an AWS open source project implementing 40+ Valkey commands across Java, Python, Node.js, and Go clients. Set up a CI pipeline that cut deployment time from 12h to 1h.",
    link: "https://github.com/cyip10",
    linkLabel: "GitHub"
  },
  {
    id: 2,
    title: "Emotion Recognition CNN",
    type: "Software",
    completionTime: "Summer 2021",
    description: "Trained a convolutional neural network on the FER2013 dataset to recognize human emotions in images. Improved accuracy from 45% to 50% through model experimentation.",
    link: "https://sites.google.com/view/computer-vision-fer2013/home?authuser=0",
    linkLabel: "View Project"
  },
  {
    id: 3,
    title: "Smart Home Controller",
    type: "Software",
    completionTime: "3 weeks",
    description: "A web application that controls smart home devices using React and Node.js."
  },
  {
    id: 4,
    title: "Temperature Sensor",
    type: "Firmware",
    completionTime: "2 weeks",
    description: "An Arduino-based temperature monitoring system with WiFi connectivity."
  },
  {
    id: 5,
    title: "IoT Plant Monitor",
    type: "Firmware",
    completionTime: "3 weeks",
    description: "ESP32-based system that monitors soil moisture and plant health."
  },
  {
    id: 6,
    title: "UX Redesign",
    type: "Design",
    completionTime: "1 week",
    description: "Redesigned user interface for a mobile banking application."
  },
  {
    id: 7,
    title: "Brand Identity System",
    type: "Design",
    completionTime: "2 weeks",
    description: "Complete brand identity including logo, color scheme, and style guide."
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category | 'All'>('All');

  const filtered = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.type === activeCategory);

  return (
    <main className="projects-page">
      <div className="projects-inner">

        <div className="projects-header">
          <h1 className="projects-title">projects</h1>
          <p className="projects-subtitle">things i've built across software, hardware, and design</p>
        </div>

        <div className="category-filters">
          {(Object.keys(categoryConfig) as (Category | 'All')[]).map(cat => (
            <button
              key={cat}
              className={`filter-pill ${categoryConfig[cat].color} ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {categoryConfig[cat].label}
            </button>
          ))}
        </div>

        <p className="results-count">
          {filtered.length} project{filtered.length !== 1 ? 's' : ''}
          {activeCategory !== 'All' ? ` — ${categoryConfig[activeCategory].label}` : ''}
        </p>

        <div className="projects-grid">
          {filtered.map(project => {
            const cfg = categoryConfig[project.type];
            return (
              <div key={project.id} className={`project-card card-${project.type.toLowerCase()}`}>
                <div className="card-top">
                  <span className={`card-type-badge ${cfg.color}`}>{cfg.label}</span>
                  <span className="card-time">{project.completionTime}</span>
                </div>
                <h3 className="card-title">{project.title}</h3>
                <p className="card-desc">{project.description}</p>
                {'link' in project && project.link && (
                  <a
                    href={project.link as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-link"
                  >
                    {(project as any).linkLabel} →
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Projects;