import '/src/index.css';
// Import images directly
import headImage from '/src/assets/images/head-new.jpg';
import monkeyImage from '/src/assets/images/monkey.jpg';

const About = () => { return (
    <main className="home">
        <h1>
            Chloe Yip
            <img className="headliner" src={headImage} alt="avatar" />
            <img className="monkey-headliner" src={monkeyImage} alt="monkey" />
        </h1>

        <div className="content-container">
            <div className="general-text">
                Here are some FUN facts about me: <br />
                - I have 2 sisters(middle child moment) and a Yorkshire terrier.<br />
                - I was a part of my high school's theater program (I &lt;3 musicals)<br />
                - I love the ocean 🐋🐡🦭🐚<br />
                - I love to travel (can't wait to have money)<br />
                - I've been playing volleyball since I was 12. My newest additions are running, bouldering, and golf.
            </div>
        </div>
    </main>
    );
};
export default About;