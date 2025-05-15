import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  // State to track which dropdown is open (if any)
  const [openDropdown, setOpenDropdown] = useState(null);

  // Toggle function for handling dropdowns
  const handleToggle = (dropdown) => {
    if (openDropdown === dropdown) {
      // If clicking the already open dropdown, close it
      setOpenDropdown(null);
    } else {
      // Otherwise open the clicked dropdown
      setOpenDropdown(dropdown);
    }
  };

  return (
    <nav className="nav-bar">
      <Link to="/" className="nav-link">Home</Link>

      {/* About dropdown */}
      <div className="dropdown">
        <div
          className="nav-link"
          onClick={() => handleToggle('about')}
        >
          About
        </div>
        <div className={`dropdown-menu ${openDropdown === 'about' ? 'active' : ''}`}>
          <Link to="/about/Travel" className="dropdown-item">Travel</Link>
        </div>
      </div>

      {/* Projects dropdown */}
      <div className="dropdown">
        <div
          className="nav-link"
          onClick={() => handleToggle('projects')}
        >
          Projects
        </div>
        <div className={`dropdown-menu ${openDropdown === 'projects' ? 'active' : ''}`}>
          <Link to="/projects/Software" className="dropdown-item">Software</Link>
          <Link to="/projects/Firmware" className="dropdown-item">Firmware</Link>
          <Link to="/projects/Design" className="dropdown-item">Design</Link>
        </div>
      </div>

      <Link to="/experience" className="nav-link">Experience</Link>
      <Link to="/contact" className="nav-link">Contact</Link>
    </nav>
  );
};

export default Navbar;