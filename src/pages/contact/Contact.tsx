import './Contact.css';

const Contact = () => {
  return (
    <main className="contact-page">
      <div className="contact-inner">

        <div className="contact-header">
          <h1 className="contact-title">contact</h1>
          <p className="contact-subtitle">let's connect</p>
        </div>

        <div className="contact-section">
          <p className="contact-label">email</p>
          <a href="mailto:makewithchloe@gmail.com" className="contact-value">makewithchloe@gmail.com</a>
        </div>

        <div className="contact-section">
          <p className="contact-label">links</p>
          <div className="contact-links">
            <a href="https://drive.google.com/file/d/1vY8bK3Tg8X-Gejup67GxtURgFe9fZy_2/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="contact-link-item">Generic SWE Resume ↗</a>
            <a href="https://github.com/papaya830" target="_blank" rel="noopener noreferrer" className="contact-link-item">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/chloe-yip830/" target="_blank" rel="noopener noreferrer" className="contact-link-item">LinkedIn ↗</a>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Contact;