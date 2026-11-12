import { useSearchParams } from 'react-router-dom';
import './Experience.css';
import WorkExperience from './WorkExperience';
import Leadership from './Leadership';
import Education from './Education';
import Awards from './Awards';
import Hackathons from './Hackathons';
import Robotics from './Robotics';

type TabType = 'work' | 'robotics' | 'leadership' | 'awards' | 'hackathons' | 'education';

const tabs: { id: TabType; title: string }[] = [
  { id: 'work', title: 'Work' },
  { id: 'robotics', title: 'Research' },
  { id: 'leadership', title: 'Leadership' },
  { id: 'awards', title: 'Awards' },
  { id: 'hackathons', title: 'Hackathons' },
  { id: 'education', title: 'Education' },
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

      <h1 className="exp-title">Experience</h1>
      <p className="exp-subtitle">One line each. Click a role for what I actually did.</p>

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
            {tab.title}
          </button>
        ))}
      </div>

      <div
        className={activeTab === 'work' ? '' : 'content-display'}
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
