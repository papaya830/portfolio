import { useState, useEffect, useRef } from 'react';
import { showSlides, plusSlides } from './slideshow';
import '/src/Experience.css';

const Experience = () => {
  // Define a type for the tab options
  type TabType = 'work' | 'leadership' | 'education';

  // State to track which tab is active
  const [activeTab, setActiveTab] = useState<TabType>('work');

  // State to track if images are loaded
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Reference to track if slideshow is initialized
  const slideshowInitialized = useRef(false);

  // Define image paths centrally for better management
  const imagePaths = [
    "src/assets/images/projects/ai-fer.png",
    "src/assets/images/projects/ai-res.png"
  ];

  // Function to preload images
  const preloadImages = (srcs: string[]) => {
    const promises = srcs.map(src => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(src);
        img.onerror = () => {
          console.warn(`Failed to preload image: ${src}`);
          resolve(src); // Resolve anyway to prevent Promise.all from failing
        };
        img.src = src;
      });
    });

    return Promise.all(promises);
  };

  // Tab change handler with proper type annotation
  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);

    // If switching to education tab, initialize slideshow after DOM update
    if (tab === 'education') {
      // First preload the images
      setImagesLoaded(false);
      preloadImages(imagePaths)
        .then(() => {
          setImagesLoaded(true);
          // Use setTimeout to ensure DOM is updated before initializing slideshow
          setTimeout(() => {
            if (!slideshowInitialized.current) {
              showSlides(1); // Initialize with first slide
              slideshowInitialized.current = true;

              // Add dot indicators
              addDotIndicators();
            }
          }, 300); // Increased timeout for more reliability
        });
    }
  };

  // Function to add dot indicators for the slideshow
  const addDotIndicators = () => {
    const slides = document.getElementsByClassName("images");
    const dotsContainer = document.querySelector('.slideshow-dots');

    if (!dotsContainer || !slides.length) return;

    // Clear existing dots
    dotsContainer.innerHTML = '';

    // Add a dot for each slide
    for (let i = 0; i < slides.length; i++) {
      const dot = document.createElement('span');
      dot.className = 'slideshow-dot';
      dot.onclick = function() {
        currentSlide(i + 1);
      };
      dotsContainer.appendChild(dot);
    }

    // Make the first dot active
    const dots = document.getElementsByClassName("slideshow-dot");
    if (dots.length > 0) {
      dots[0].className += " active";
    }
  };

  // Function to go to a specific slide (needed for dot navigation)
  const currentSlide = (n: number) => {
    showSlides(n);
  };

  // Initialize slideshow if education tab is active by default
  useEffect(() => {
    if (activeTab === 'education') {
      setImagesLoaded(false);
      preloadImages(imagePaths)
        .then(() => {
          setImagesLoaded(true);
          setTimeout(() => {
            if (!slideshowInitialized.current) {
              showSlides(1);
              slideshowInitialized.current = true;
              addDotIndicators();
            }
          }, 300);
        });
    }
  }, [activeTab]);

  return (
    <main className="experience-page">
      {/* Tabs at the top in a row */}
      <div className="info-tabs-container">
        <div
          className={`info-tab ${activeTab === 'work' ? 'active' : ''}`}
          onClick={() => handleTabChange('work')}
        >
          <h3>Work Experience</h3>
          <p>
            Part-time roles and co-op positions that have shaped my professional journey in the tech industry.
          </p>
        </div>

        <div
          className={`info-tab ${activeTab === 'leadership' ? 'active' : ''}`}
          onClick={() => handleTabChange('leadership')}
        >
          <h3>Leadership & Volunteering</h3>
          <p>
            Club leadership experience and volunteer activities where I've contributed to communities and developed soft skills.
          </p>
        </div>

        <div
          className={`info-tab ${activeTab === 'education' ? 'active' : ''}`}
          onClick={() => handleTabChange('education')}
        >
          <h3>Educational Programs</h3>
          <p>
            Specialized learning opportunities and bootcamps where I've expanded my technical knowledge.
          </p>
        </div>
      </div>

      {/* Only show the active content section */}
      <div className="content-display">
        {activeTab === 'work' && (
          <div className="content-section">
            <h2 className="section-title">Work Experience</h2>
            <div className="section-content">
              <h3 className="job-title">Software Developer Intern</h3>
              <p className="company">
                <a href="https://www.improving.com/">Improving</a>
                <span className="company-note">(formerly BitQuill Technologies)</span>
              </p>
              <p className="date">May 2024 - December 2024</p>
              <ul className="experience-list">
                <li>Developed and maintained client-facing web applications using React, TypeScript, and Node.js</li>
                <li>Collaborated with cross-functional teams to implement new features and improve existing functionality</li>
                <li>Participated in code reviews and contributed to the company's internal development standards</li>
                <li>Assisted in troubleshooting and resolving software issues in production environments</li>
              </ul>
              <p>
                View my code contributions on <a href="https://github.com/cyip10">GitHub</a>
              </p>
            </div>
          </div>
        )}

        {activeTab === 'leadership' && (
          <div className="content-section">
            <h2 className="section-title">Leadership & Volunteering</h2>
            <div className="section-content">
              <h3 className="job-title">Director of Activities</h3>
              <p className="company">Software Systems Student Society</p>
              <p className="date">October 2022 - January 2025</p>
              <ul className="experience-list">
                <li>Lead a team of 10 executive members to organize events and workshops for over 200 students</li>
                <li>Established partnerships with local tech companies for sponsorships and mentorship opportunities</li>
                <li>Coordinated networking events connecting students with industry professionals</li>
              </ul>

              <h3 className="job-title second-job">Volunteer Instructor</h3>
              <p className="company">Code for Kids</p>
              <p className="date">January 2023 - April 2024</p>
              <ul className="experience-list">
                <li>Taught introductory programming concepts to middle school students</li>
                <li>Developed curriculum materials for Python and Scratch courses</li>
                <li>Mentored students on small coding projects and provided technical guidance</li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'education' && (
          <div className="content-section">
            <h2 className="section-title">Educational Programs</h2>
            <div className="section-content">
              <h3 className="job-title">Student</h3>
              <p className="company">AI4ALL</p>
              <p className="date">Summer 2021 (2 weeks)</p>
              <ul className="experience-list">
                <li>Received a full ride scholarship to participate in the AI4ALL 2021 SFU cohort, a program
                designed to teach high school students about AI</li>
                <li>Collaborated in a group of 4 to train a convolutional neural network with the FER2013 dataset to recognize human emotions in images</li>
                <li>Increased training accuracy from 45% to 50% by experimenting with different language models</li>
                <li>
                  <a href="https://sites.google.com/view/computer-vision-fer2013/home?authuser=0" target="_blank">
                    Learn more about the project here
                  </a>
                </li>
              </ul>

              {/* Project Slideshow */}
              <div className="project-slideshow">
                <h4>Project Visuals</h4>

                {/* Loading indicator */}
                {!imagesLoaded && (
                  <div className="slideshow-loading">
                    <div className="loading-spinner"></div>
                    <p>Loading images...</p>
                  </div>
                )}

                <div className="slideshow-container">
                  {/* Slide 1 */}
                  <div className="images fade">
                    <img
                      src={imagePaths[0]}
                      alt="Explanation of FER2013"
                      style={{ width: '100%' }}
                      onError={() => {
                        console.warn(`Image failed to load: ${imagePaths[0]}`);
                        // You could set a fallback image here if needed
                      }}
                    />
                    <div className="caption">Explanation of FER2013</div>
                  </div>

                  {/* Slide 2 */}
                  <div className="images fade">
                    <img
                      src={imagePaths[1]}
                      alt="Results"
                      style={{ width: '100%' }}
                      onError={() => {
                        console.warn(`Image failed to load: ${imagePaths[1]}`);
                        // You could set a fallback image here if needed
                      }}
                    />
                    <div className="caption">Our results!</div>
                  </div>

                  {/* Navigation buttons */}
                  <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
                  <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
                </div>

                {/* Dot indicators container */}
                <div className="slideshow-dots"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default Experience;