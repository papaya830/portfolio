import { useState } from 'react';
import './Leadership.css';

const Leadership = () => {
  const [expanded, setExpanded] = useState(false);
  const [treehouseExpanded, setTreehouseExpanded] = useState(false);

  return (
  <div className="content-section">
    <h2 className="section-title">Leadership & Volunteering</h2>
    <div className="section-content">
      <h3 className="job-title">Founder & Host</h3>
      <p className="company">
        <a href="https://treehouse.place/">Treehouse</a> — <a href="https://socratica.info/">SFU Socratica Node</a>
      </p>
      <p className="date">May 2025 - Present</p>

      <button className="expand-toggle" onClick={() => setTreehouseExpanded(!treehouseExpanded)}>
        {treehouseExpanded ? 'show less ↑' : 'read the full story ↓'}
      </button>

      {treehouseExpanded && (
        <>
          <p>
            Treehouse is a weekly peer co-working space I co-founded with Brian Rahadi and Avni Kapoor at SFU for
            students who wanted somewhere to work alongside other people, whether they were building software,
            making art, writing, or working on something completely different.
          </p>
          <p>
            I started Treehouse because I wanted to <strong>meet more people who were excited about building cool
            things</strong> and have a place where we could work alongside each other. We intentionally based
            Treehouse at <strong>SFU Surrey</strong>, where the commuter-campus environment can make it even harder
            to build a sense of campus culture and community. We wanted to create a space where students could show
            up, work on their own thing, meet other people building things, and feel like they were part of something.
          </p>
          <p>
            Since May 2025, Treehouse has grown to <strong>60+ members across four terms</strong>, with over{' '}
            <strong>240 hours of co-working sessions</strong>. I handle everything from booking rooms and managing
            the budget to planning sessions, coordinating member leads, running Discord and Luma, and making sure
            the space actually feels welcoming when people arrive.
          </p>
          <p>
            One of the biggest things I've learned from Treehouse is how much being a host matters. When I first
            started, I focused heavily on making sure every detail was taken care of myself, which sometimes made
            the sessions feel more like a responsibility than something I could actually enjoy. Over time, I learned
            to <strong>delegate meaningful responsibilities across the team</strong>, trust other people to take
            ownership, and give myself room to actually participate in and enjoy the community I was building.
          </p>
          <p>
            I also organized the first <strong>Treehouse Showcase</strong>, bringing together 100+ attendees to
            share projects, performances, and things they had been working on. It was a fun way to take what started
            as a small weekly co-working session and turn it into something the broader SFU community could
            participate in.
          </p>
          <p>
            Treehouse has taught me a lot about{' '}
            <strong>community building, event planning, delegation, and leadership</strong>, especially the
            importance of building a team that can share responsibility rather than trying to carry everything
            yourself. More importantly, it gave me a place to meet people who are excited to make things and keep
            building alongside them.
          </p>
        </>
      )}

      <h3 className="job-title second-job">Software Systems Student Society</h3>
      <p className="date">September 2022 - Present</p>

      <div className="position-group">
        <div className="position-item">
          <div className="position-dot"></div>
          <div className="position-content">
            <h4 className="position-title">General Executive</h4>
            <p className="position-date">December 2024 - February 2025</p>
          </div>
        </div>
        <div className="position-item">
          <div className="position-dot"></div>
          <div className="position-content">
            <h4 className="position-title">Director of Activities & Events Committee Lead</h4>
            <p className="position-date">May 2023 - April 2024</p>
          </div>
        </div>
        <div className="position-item">
          <div className="position-dot"></div>
          <div className="position-content">
            <h4 className="position-title">First-Year Representative</h4>
            <p className="position-date">September 2022 - August 2023</p>
          </div>
        </div>
        <div className="position-item">
          <div className="position-dot"></div>
          <div className="position-content">
            <h4 className="position-title">General Volunteer</h4>
            <p className="position-date">September 2022 - Present</p>
          </div>
        </div>
      </div>

      <button className="expand-toggle" onClick={() => setExpanded(!expanded)}>
        {expanded ? 'show less ↑' : 'read the full story ↓'}
      </button>

      {expanded && (
        <>
          <p>
            I've been part of the Software Systems Student Society (SSSS) since Fall 2022, first as a general volunteer
            and First-Year Representative. Some of the tasks I did during my first-year term included: logistics
            planning member for the 2023 RootHacks SystemsHack hackathon, organizing first year oriented events,
            launching the first Girlies Events, and creating a Discord server for the 2022 Fall SoSy cohort.
          </p>
          <p>
            From May 2023 to April 2024, I served as Director of Activities and the Events Committee lead. During my
            term, I hosted around 25 events for the student society. I would frequently collaborate with other student
            societies on my campus including the Mechatronics Systems Engineering Student Society and the Sustainable
            Engineering Student Society. I ran everything from simple events such as Pizza and Board Game Night,
            starting the first Pancake Breakfast Event for the Surrey Faculty of Applied Sciences (FAS), and the first
            social event for the women of the FAS at the Surrey campus.
          </p>
          <p>
            As the Events Committee lead, I held monthly meetings and open forums to allow non executive members a
            chance to plan their own events with the support of the executive team.
          </p>
          <p>
            I decided to run for President for the 2024–2025 term, but rejected my position as I wanted to explore my
            interest in firmware development with SFU Team Phantom SAE.
          </p>
          <p>
            I returned back as a General Executive from December 2024 to February 2025. I primarily worked on finding
            sponsors for the 2025 DreamsHack SystemsHack hackathon.
          </p>
          <p>The main things I learned from my experience as an executive member on the Software Systems Student Society:</p>
          <ul className="experience-list">
            <li>
              I grew my confidence and decisiveness through my time as Director of Activities. During my first term,
              I found it hard to give directions to volunteers which resulted in doing more work myself. Overtime, I
              became more comfortable giving more context and better direction to those around me and felt generally
              less nervous when directing those I did not know.
            </li>
            <li>
              Preparing and planning events take a lot of time and effort. Being in an events executive position
              doesn't give much leeway to procrastinate due to the nature depending on people to fill out grants,
              visual promotions, etc. To have high quality event success, proper preparation needs to take place.
            </li>
            <li>
              To have a good event, you need to be a good host. A big regret I had was not being a better host
              during my time as the Director of Activities. It was difficult to be friendly when I was stressed
              trying to execute the logistics on the day of the event. Having a good host mindset was something I
              was able to adopt overtime with more experience, and when I first started Treehouse, SFU's Socratica node.
            </li>
          </ul>
        </>
      )}
    </div>
  </div>
  );
};

export default Leadership;