import '../index.css';
// Import images directly
import headImage from '../assets/images/head-new.jpg'; // Make sure filename matches exactly
import monkeyImage from '../assets/images/monkey.jpg'; // Make sure filename matches exactly

const Projects = () => { return (
    <main className="home">
        <h1>
            Chloe Yip
            <img className="headliner" src={headImage} alt="avatar" />
            <img className="monkey-headliner" src={monkeyImage} alt="monkey" />
        </h1>

        <div className="content-container">
            <div>
                <p>Coming soon...</p>
            </div>
        </div>
    </main>
    );
};

export default Projects;