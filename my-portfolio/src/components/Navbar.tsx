// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
