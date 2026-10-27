import { useSearchParams } from 'react-router-dom';
import './Experience.css';
import WorkExperience from './WorkExperience';
import Leadership from './Leadership';
import Education from './Education';
import Awards from './Awards';
import Hackathons from './Hackathons';
import Robotics from './Robotics';

type TabType = 'work' | 'robotics' | 'leadership' | 'awards' | 'hackathons' | 'education';

const tabs: { id: TabType; title: string; desc: string }[] = [
  {
    id: 'work',
    title: 'Work Experience',
    desc: "Part-time roles and co-op positions in tech and other fun stuff.",
  },
  {
    id: 'robotics',
    title: 'Robotics Research Experience',
    desc: "Research and development work on robotic systems, from simulation to the artist-facing tools around them.",
  },
  {
    id: 'leadership',
    title: 'Leadership & Volunteering',
    desc: "Club leadership experience and volunteer activities.",
  },
  {
    id: 'awards',
    title: 'Awards & Scholarships',
    desc: "Scholarships, grants, and awards, newest first.",
  },
  {
    id: 'hackathons',
    title: 'Hackathons & Competitions',
    desc: "Wins, plus every event I've hacked, organized, mentored, or judged.",
  },
  {
    id: 'education',
    title: 'Educational Programs',
    desc: "Specialized learning opportunities and bootcamps.",
  },
];

const isTab = (value: string | null): value is TabType =>
  tabs.some(tab => tab.id === value);

const Experience = () => {
  // Tab lives in the URL (?tab=awards) so other pages can deep-link to a section
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');
  const activeTab: TabType = isTab(tabParam) ? tabParam : 'work';

  const selectTab = (id: TabType) => setSearchParams({ tab: id }, { replace: true });

  return (
    <main className="experience-page">

      <div className="info-tabs-container" role="tablist" aria-label="Experience sections">
        {tabs.map(tab => (
          <button
            key={tab.id}
            id={`tab-${tab.id}`}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls="experience-panel"
            className={`info-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => selectTab(tab.id)}
          >
            <h3>{tab.title}</h3>
            <p>{tab.desc}</p>
          </button>
        ))}
      </div>

      <div
        className="content-display"
        id="experience-panel"
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
      >
        {activeTab === 'work'       && <WorkExperience />}
        {activeTab === 'robotics'   && <Robotics />}
        {activeTab === 'leadership' && <Leadership />}
        {activeTab === 'awards'     && <Awards />}
        {activeTab === 'hackathons' && <Hackathons />}
        {activeTab === 'education'  && <Education />}
      </div>

    </main>
  );
};

export default Experience;
