import { useState } from 'react';
import '/src/Experience.css';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('work');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <main className="experience-page">
      {/* Brief info tabs at the top */}
      <div className="info-tabs-container">
        <div
          className={`info-tab ${activeTab === 'work' ? 'active' : ''}`}
          onClick={() => handleTabChange('work')}
        >
          <h3>Work Experience</h3>
          <p>
            Part-time roles and co-op positions that have shaped my professional journey in the tech industry.
          </p>
        </div>

        <div
          className={`info-tab ${activeTab === 'leadership' ? 'active' : ''}`}
          onClick={() => handleTabChange('leadership')}
        >
          <h3>Leadership & Volunteering</h3>
          <p>
            Club leadership experience and volunteer activities where I've contributed to communities and developed soft skills.
          </p>
        </div>

        <div
          className={`info-tab ${activeTab === 'education' ? 'active' : ''}`}
          onClick={() => handleTabChange('education')}
        >
          <h3>Educational Programs</h3>
          <p>
            Specialized learning opportunities and bootcamps where I've expanded my technical knowledge.
          </p>
        </div>
      </div>

      {/* Only show the active content section */}
      <div className="content-display">
        {activeTab === 'work' && (
          <div className="content-section">
            <h2 className="section-title">Work Experience</h2>
            <div className="section-content">
              <h3 className="job-title">Software Developer Intern</h3>
              <p className="company">
                <a href="https://www.improving.com/">Improving</a>
                <span className="company-note">(formerly BitQuill Technologies)</span>
              </p>
              <p className="date">May 2024 - December 2024</p>
              <ul className="experience-list">
                <li>Developed and maintained client-facing web applications using React, TypeScript, and Node.js</li>
                <li>Collaborated with cross-functional teams to implement new features and improve existing functionality</li>
                <li>Participated in code reviews and contributed to the company's internal development standards</li>
                <li>Assisted in troubleshooting and resolving software issues in production environments</li>
              </ul>
              <p>
                View my code contributions on <a href="https://github.com/cyip10">GitHub</a>
              </p>
            </div>
          </div>
        )}

        {activeTab === 'leadership' && (
          <div className="content-section">
            <h2 className="section-title">Leadership & Volunteering</h2>
            <div className="section-content">
              <h3 className="job-title">Director of Activities</h3>
              <p className="company">Software Systems Student Society</p>
              <p className="date">October 2022 - January 2025</p>
              <ul className="experience-list">
                <li>Lead a team of 10 executive members to organize events and workshops for over 200 students</li>
                <li>Established partnerships with local tech companies for sponsorships and mentorship opportunities</li>
                <li>Coordinated networking events connecting students with industry professionals</li>
              </ul>

              <h3 className="job-title second-job">Volunteer Instructor</h3>
              <p className="company">Code for Kids</p>
              <p className="date">January 2023 - April 2024</p>
              <ul className="experience-list">
                <li>Taught introductory programming concepts to middle school students</li>
                <li>Developed curriculum materials for Python and Scratch courses</li>
                <li>Mentored students on small coding projects and provided technical guidance</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'education' && (
          <div className="content-section">
            <h2 className="section-title">Educational Programs</h2>
            <div className="section-content">
              <h3 className="job-title">Full Stack Development Bootcamp</h3>
              <p className="company">Tech Accelerator Program</p>
              <p className="date">Summer 2023 (8 weeks)</p>
              <ul className="experience-list">
                <li>Completed an intensive bootcamp focused on modern web development technologies</li>
                <li>Built full-stack applications using React, Node.js, and MongoDB</li>
                <li>Collaborated with peers on team projects simulating real-world development workflows</li>
                <li>Learned industry best practices for testing, deployment, and version control</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Experience;