import './WorkExperience.css';

const WorkExperience = () => (
  <div className="content-section">
    <h2 className="section-title">Work Experience</h2>
    <div className="section-content">

      <h3 className="job-title">Stan Fellow</h3>
      <p className="company">
        <a href="https://www.stan.store/">Stan</a>
      </p>
      <p className="date">February 2026 - April 2026</p>
      <ul className="experience-list">
        <li>Published <strong>two LinkedIn posts per week</strong> using Stan's AI content tool, <strong>Stanley</strong>, building a consistent content cadence and personal brand presence.</li>
        <li>Grew reach to <strong>over 200K impressions</strong> across <strong>two months</strong> through consistent posting and active engagement on LinkedIn.</li>
      </ul>

      <h3 className="job-title second-job">Software Developer Co-op</h3>
      <p className="company">
        <a href="https://www.kardium.com/">Kardium</a>
      </p>
      <p className="date">September 2025 - May 2026</p>
      <ul className="experience-list">
        <li>Developed a full-stack document review and workflow management tool in <strong>C#/.NET</strong> with a MudBlazor front end and SQL Server backend, coordinating review assignments for <strong>30+ employees across 5 cross-functional teams</strong>.</li>
        <li>Worked closely with a key stakeholder to gather requirements and transform a manual, email-based review process into a centralized workflow, estimated to save <strong>10–15 hours/week (~$25K–$40K/year)</strong> in employee time.</li>
        <li>Researched and replicated an existing <strong>ZPL label generation workflow</strong>, conducting extensive testing and comparison to produce <strong>byte-for-byte identical</strong> label files while replacing a licensed third-party tool.</li>
        <li>Built and validated the replacement label pipeline, saving approximately <strong>$3,000 CAD/year</strong> in licensing costs while maintaining compatibility with the existing printing workflow.</li>
        <li>Participated in Kardium's <strong>Women's ERG and Early Career ERG</strong>, contributing to mentorship, community, and professional development initiatives.</li>
      </ul>

      <h3 className="job-title second-job">Software Developer Co-op</h3>
      <p className="company">
        <a href="https://www.improving.com/">Improving</a>
        <span className="company-note">(formerly BitQuill Technologies)</span>
      </p>
      <p className="date">May 2024 - December 2024</p>
      <ul className="experience-list">
        <li>Contributed to the open source project, GLIDE-for-Valkey for AWS, to develop the <strong>Java, Python, Node.js, and Go</strong> client, implementing over <strong>40 Valkey commands</strong>, enhancing functionality and user command options.</li>
        <li>Set up a CI pipeline with <strong>GitHub Actions</strong> to automate Java releases, cutting deployment time <strong>from 12h to 1h</strong>.</li>
        <li>Designed and implemented integration, unit, and transaction tests for Valkey commands, with a focus on designing transaction tests for the Java JSON module commands, covering <strong>22 distinct commands</strong>.</li>
        <li>Initiated and facilitated company-wide networking sessions involving <strong>over 35 employees</strong> to solve company problems and build connections with members from other teams. Increased social engagement by <strong>over 25%</strong>.</li>
        <li>Spoke as a panelist for a company-wide meeting related to my journey as a woman in S.T.E.M. Other notable panelists included the company's <strong>Chief of Staff and CTO</strong>.</li>
      </ul>
      <p>View my code contributions on <a href="https://github.com/cyip10">GitHub</a></p>

      <h3 className="job-title second-job">Volleyball Coach</h3>
      <p className="company">
        <a href="https://volleyballbc.org/">Volleyball BC</a>
      </p>
      <p className="date">October 2021 - February 2024</p>
      <ul className="experience-list">
        <li>Coached beginner athletes ages <strong>7–16</strong>, teaching fundamental volleyball skills, game strategy, and rules while adapting instruction to different experience levels.</li>
        <li>Planned and led structured practices focused on <strong>progressive skill development</strong>, from foundational techniques to game application.</li>
        <li>Built a supportive and inclusive team environment, helping young athletes develop <strong>confidence, communication, teamwork, and sportsmanship</strong>.</li>
        <li>Provided individualized feedback and encouragement to help athletes identify areas for improvement and build confidence in their abilities.</li>
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
        <li>Assisted with vote counting at the polling station, ensuring accuracy and integrity for <strong>over 500 ballots</strong>.</li>
      </ul>

    </div>
  </div>
);

export default WorkExperience;