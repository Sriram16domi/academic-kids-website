import { useState } from 'react';
import '../styles/CourseTabs.css';

const CourseTabs = ({ tabs, onTabChange }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    onTabChange(tabId);
  };

  return (
    <div className="course-tabs">
      <div className="tabs-nav">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CourseTabs;
