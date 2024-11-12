import React from "react";
import { NavLink } from "react-router-dom";
import './navbar.css'; // Include the navbar CSS
import './body.css'; // Include body CSS

const About: React.FC = () => {
  return (
    <>
      <div className="background-image">
        <header>
          <nav className="nav-bar">
            <ul>
              <li>
                <NavLink to="/" activeClassName="active">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" activeClassName="active">About</NavLink>
              </li>
              <li>
                <NavLink to="/projects" activeClassName="active">Projects</NavLink>
              </li>
              <li>
                <NavLink to="/contact" activeClassName="active">Contact</NavLink>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <h1>
            Chloe Yip
            <img className="headliner" src="pics-website/head-new.jpg" alt="avatar" />
            <img className="monkey-headliner" src="pics-website/monkey.jpg" alt="monkey" />
          </h1>

          <div className="content-container">
            <div className="facts">
              I guess you really wanted to learn about me😩😩. Pls don't leave jk lmfao... <br /><br />

              Here are some FUN facts about me: <br />
              - I have 2 sisters (middle child moment) and a yorkshire terrier. <br />
              - I was a part of my high school's theater program (I <3 musicals). <br />
              - I love the ocean 🐋🐡🦭🐚. <br />
              - *Lady Midnight* by Cassandra Clare is my comfort book. <br />
              - I love to travel (can't wait to have money). <br />
              - I've been playing volleyball since I was 12. My new additions are bouldering and golf.
            </div>

            <div className="professional-facts">
              Here are some professional facts about me: <br />
              - I am...
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default About;
