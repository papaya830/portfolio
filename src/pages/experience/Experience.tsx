import { useState } from 'react';
import './Experience.css';
import WorkExperience from './WorkExperience';
import Leadership from './Leadership';
import Education from './Education';

type TabType = 'work' | 'leadership' | 'education';

const tabs: { id: TabType; title: string; desc: string }[] = [
  {
    id: 'work',
    title: 'Work Experience',
    desc: "Part-time roles and co-op positions in tech and other fun stuff.",
  },
  {
    id: 'leadership',
    title: 'Leadership & Volunteering',
    desc: "Club leadership experience and volunteer activities.",
  },
  {
    id: 'education',
    title: 'Educational Programs',
    desc: "Specialized learning opportunities and bootcamps.",
  },
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState<TabType>('work');

  return (
    <main className="experience-page">

      <div className="info-tabs-container">
        {tabs.map(tab => (
          <div
            key={tab.id}
            className={`info-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <h3>{tab.title}</h3>
            <p>{tab.desc}</p>
          </div>
        ))}
      </div>

      <div className="content-display">
        {activeTab === 'work'       && <WorkExperience />}
        {activeTab === 'leadership' && <Leadership />}
        {activeTab === 'education'  && <Education />}
      </div>

    </main>
  );
};

export default Experience;