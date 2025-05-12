import '/src/index.css';
// Import images directly
import headImage from '/src/assets/images/head-new.jpg';
import monkeyImage from '/src/assets/images/monkey.jpg';

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