import { useState, useEffect, useRef } from 'react';
import { showSlides, plusSlides } from '../../utils/slideshow';
import './Education.css';

const imagePaths = [
  "src/assets/images/projects/ai-fer.png",
  "src/assets/images/projects/ai-res.png"
];

const Education = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const slideshowInitialized = useRef(false);

  const preloadImages = (srcs: string[]) => {
    return Promise.all(srcs.map(src => new Promise(resolve => {
      const img = new Image();
      img.onload = () => resolve(src);
      img.onerror = () => resolve(src);
      img.src = src;
    })));
  };

  const addDotIndicators = () => {
    const slides = document.getElementsByClassName("images");
    const dotsContainer = document.querySelector('.slideshow-dots');
    if (!dotsContainer || !slides.length) return;
    dotsContainer.innerHTML = '';
    for (let i = 0; i < slides.length; i++) {
      const dot = document.createElement('span');
      dot.className = 'slideshow-dot';
      dot.onclick = () => showSlides(i + 1);
      dotsContainer.appendChild(dot);
    }
    const dots = document.getElementsByClassName("slideshow-dot");
    if (dots.length > 0) dots[0].className += " active";
  };

  useEffect(() => {
    setImagesLoaded(false);
    slideshowInitialized.current = false;
    preloadImages(imagePaths).then(() => {
      setImagesLoaded(true);
      setTimeout(() => {
        if (!slideshowInitialized.current) {
          showSlides(1);
          slideshowInitialized.current = true;
          addDotIndicators();
        }
      }, 300);
    });
  }, []);

  return (
    <div className="content-section">
      <h2 className="section-title">Educational Programs</h2>
      <div className="section-content">

        <h3 className="job-title">Student</h3>
        <p className="company">AI4ALL</p>
        <p className="date">Summer 2021 (2 weeks)</p>
        <ul className="experience-list">
          <li>Received a full ride scholarship to participate in the AI4ALL 2021 SFU cohort, a program designed to teach high school students about AI</li>
          <li>Collaborated in a group of 4 to train a convolutional neural network with the FER2013 dataset to recognize human emotions in images</li>
          <li>Increased training accuracy from 45% to 50% by experimenting with different language models</li>
          <li>
            <a href="https://sites.google.com/view/computer-vision-fer2013/home?authuser=0" target="_blank" rel="noopener noreferrer">
              Learn more about the project here
            </a>
          </li>
        </ul>

        <div className="project-slideshow">
          <h4 className="project-visuals-heading">Project Visuals</h4>

          {!imagesLoaded && (
            <div className="slideshow-loading">
              <div className="loading-spinner"></div>
              <p>Loading images...</p>
            </div>
          )}

          <div className="slideshow-container">
            <div className="images fade">
              <img src={imagePaths[0]} alt="Explanation of FER2013" style={{ width: '100%' }} />
              <div className="caption">Explanation of FER2013</div>
            </div>
            <div className="images fade">
              <img src={imagePaths[1]} alt="Results" style={{ width: '100%' }} />
              <div className="caption">Our results!</div>
            </div>
            <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
            <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
          </div>

          <div className="slideshow-dots"></div>
        </div>

      </div>
    </div>
  );
};

export default Education;