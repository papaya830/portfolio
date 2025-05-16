import '/src/index.css';
import './Projects.css';

// Sample project data - you can replace this with your actual data
const projectsData = [
  {
    id: 1,
    title: "Smart Home Controller",
    type: "Software",
    completionTime: "3 weeks",
    description: "A web application that controls smart home devices using React and Node.js."
  },
  {
    id: 2,
    title: "Temperature Sensor",
    type: "Firmware",
    completionTime: "2 weeks",
    description: "An Arduino-based temperature monitoring system with WiFi connectivity."
  },
  {
    id: 3,
    title: "UX Redesign",
    type: "Design",
    completionTime: "1 week",
    description: "Redesigned user interface for a mobile banking application."
  },
  {
    id: 4,
    title: "Data Visualization Dashboard",
    type: "Software",
    completionTime: "4 weeks",
    description: "Interactive dashboard for visualizing complex datasets using D3.js and React."
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
    title: "Brand Identity System",
    type: "Design",
    completionTime: "2 weeks",
    description: "Complete brand identity including logo, color scheme, and style guide."
  }
];

const Projects = () => {
  return (
    <main className="home">
      <div className="content-container">
        <div className="projects-grid">
          {projectsData.map(project => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <div className="project-tags">
                <span className={`project-type-tag ${project.type.toLowerCase()}`}>
                  {project.type}
                </span>
                <span className="project-time-tag">
                  {project.completionTime}
                </span>
              </div>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;