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
            - <a href="https://drive.google.com/file/d/1pBtt-IRdro4QStNrQbE56FuFslQM3u9g/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Epic new Software Engineering Resume</a> <br />
            - <a href="https://ontariospca.ca/blog/pet-health-corner-common-reasons-why-cats-meow-at-their-owners/" target="_blank" rel="noopener noreferrer">Epic new PM Resume</a> <br />
            - <a href="https://github.com/papaya830" target="_blank" rel="noopener noreferrer">GitHub</a> <br />
            - <a href="https://www.linkedin.com/in/chloe-yip830/" target="_blank" rel="noopener noreferrer">LinkedIn</a> <br />
          </div>
        </div>
      </main>
    );
  };
  export default Contact;