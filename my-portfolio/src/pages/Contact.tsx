import '../index.css';

const Contact = () => {
    return (
      <main>
        <h1>
          Chloe Yip
          <img className="headliner" src="/pics-website/head-new.jpg" alt="avatar" />
          <img className="monkey-headliner" src="/pics-website/monkey.jpg" alt="monkey" />
        </h1>
  
        <div className="content-container">
          <div className="general-text">
            Feel free to reach me through my personal email: 
            <a href="mailto:chloecocoyip@gmail.com"> chloecocoyip@gmail.com</a> <br /><br />
            
            <strong>Links:</strong> <br />
            - <a href="/path/to/software-engineering-resume.pdf" target="_blank" rel="noopener noreferrer">Epic new Software Engineering Resume</a> <br />
            - <a href="/path/to/pm-resume.pdf" target="_blank" rel="noopener noreferrer">Epic new PM Resume</a> <br />
            - <a href="https://github.com/cyip10" target="_blank" rel="noopener noreferrer">GitHub (Improving and Personal)</a> <br />
            - <a href="https://www.linkedin.com/in/chloeyip/" target="_blank" rel="noopener noreferrer">LinkedIn</a> <br />
          </div>
        </div>
      </main>
    );
  };
  export default Contact;