import './WorkExperience.css';

const WorkExperience = () => (
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
        <li>Contributed to the open source project, GLIDE-for-Valkey for AWS, to develop the Java, Python, Node.js, and Go client, implementing over 40 Valkey commands, enhancing functionality and user command options.</li>
        <li>Set up a CI pipeline with GitHub Actions to automate Java releases, cutting deployment time from 12h to 1h.</li>
        <li>Designed and implemented integration, unit, and transaction tests for Valkey commands, with a focus on designing transaction tests for the Java JSON module commands, covering 22 distinct commands.</li>
        <li>Initiated and facilitated company-wide networking sessions involving over 35 diverse employees to solve company problems and build connections with members from other teams. Increased social engagement by over 25%.</li>
        <li>Spoke as a panelist for a company wide meeting related to my journey as a women in S.T.E.M. Other notable panelists include the company's Chief of Staff and CTO.</li>
      </ul>
      <p>View my code contributions on <a href="https://github.com/cyip10">GitHub</a></p>

      <h3 className="job-title second-job">Volleyball Coach</h3>
      <p className="company">
        <a href="https://volleyballbc.org/">Volleyball BC</a>
      </p>
      <p className="date">October 2021 - February 2024</p>
      <ul className="experience-list">
        <li>Instructed beginner athletes (ages 7–16) in fundamental volleyball skills and game rules.</li>
        <li>Designed and implemented structured practice plans tailored to skill level and progression.</li>
        <li>Fostered a positive and inclusive team environment to build confidence, teamwork, and sportsmanship.</li>
      </ul>

      <h3 className="job-title second-job">Information Officer & Registration Officer</h3>
      <p className="company">
        <a href="https://www.elections.ca/home.aspx">Elections Canada</a>
      </p>
      <p className="date">October 2021 and April 2025</p>
      <ul className="experience-list">
        <li>Managed the registration desk, verified voter ID and address information, and guided electors through the registration, vouching, and assisted voting processes.</li>
        <li>Supported polling place setup and ballot counting on election night to ensure a smooth and accurate voting experience.</li>
        <li>Oversaw polling station setup, greeted electors, and directed them to the correct registration or voting table.</li>
        <li>Assisted with vote counting at the polling station, ensuring accuracy and integrity for over 500 ballots.</li>
      </ul>

    </div>
  </div>
);

export default WorkExperience;