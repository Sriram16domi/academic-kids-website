import React, { useState } from 'react';
import '../styles/Program.css';
import CloudStep from './CloudStep';
import ContentPanel from './ContentPanel';

const Program = () => {
  const [activeCloud, setActiveCloud] = useState(null);

  const steps = [
    {
      id: 1,
      number: '1',
      title: 'Vocabulary bank',
      topic: 'Lexicon',
      color: 'teal',
      position: 'left',
      content: 'Learn foundational vocabulary through engaging visual methods and interactive games.'
    },
    {
      id: 2,
      number: '2',
      title: 'Sound System',
      topic: 'Phonology',
      color: 'coral',
      position: 'right',
      content: 'Master pronunciation and sound patterns through phonetic exercises.'
    },
    {
      id: 3,
      number: '3',
      title: 'Spelling System',
      topic: 'Orthography',
      color: 'green',
      position: 'left',
      content: 'Develop spelling skills with systematic rules and memory techniques.'
    },
    {
      id: 4,
      number: '4',
      title: 'Blending word Formation',
      topic: 'Morphology',
      color: 'orange',
      position: 'right',
      content: 'Understand word formation and how to combine morphemes effectively.'
    },
    {
      id: 5,
      number: '5',
      title: 'Word Meanings',
      topic: 'Semantics',
      color: 'pink',
      position: 'left',
      content: 'Explore word meanings, synonyms, and contextual usage.'
    },
    {
      id: 6,
      number: '6',
      title: 'Word Combination',
      topic: 'Phraseology',
      color: 'magenta',
      position: 'right',
      content: 'Learn how to combine words into meaningful phrases and expressions.'
    },
    {
      id: 7,
      number: '7',
      title: 'High Frequency words',
      topic: '',
      color: 'burnt-orange',
      position: 'left',
      content: 'Focus on the most common words used in everyday communication.'
    },
    {
      id: 8,
      number: '8',
      title: 'Sentence with grammar',
      topic: 'Syntax',
      color: 'purple',
      position: 'right',
      content: 'Master grammar rules and construct grammatically correct sentences.'
    }
  ];

  return (
    <div className="program-page">
      {/* Hero Section */}
      <section className="program-hero">
        <div className="program-header-content">
          <div className="mascot-image">
            <img src="https://via.placeholder.com/100x100" alt="Mascot" />
          </div>
          <h1 className="program-title">Our Fun & <span className="highlight">Interactive Programs</span></h1>
          <p className="program-subtitle">Making learning exciting, creative, and effective for every child</p>
        </div>
      </section>

      {/* Flow Section */}
      <section className="program-flow">
        {/* Curved Path */}
        <svg className="flow-path" viewBox="0 0 100 1000" preserveAspectRatio="none">
          <path
            d="M 50 50 Q 30 150, 50 250 Q 70 350, 50 450 Q 30 550, 50 650 Q 70 750, 50 850 Q 30 900, 50 950"
            fill="none"
            stroke="#000"
            strokeWidth="2"
            strokeDasharray="5,5"
            opacity="0.3"
          />
        </svg>

        {/* Cloud Steps */}
        <div className="clouds-container">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`cloud-wrapper ${step.position} ${activeCloud === step.id ? 'active' : ''}`}
            >
              <CloudStep
                step={step}
                isActive={activeCloud === step.id}
                onClick={() => setActiveCloud(step.id)}
              />
            </div>
          ))}
        </div>

        {/* Mission Accomplished */}
        <div className="mission-section">
          <div className="mission-mascot">
            <img src="https://via.placeholder.com/120x120" alt="Mission Accomplished" />
          </div>
          <div className="mission-badge">
            <span className="badge-text">Mission Accomplished!</span>
          </div>
        </div>
      </section>

      {/* Content Panel */}
      {activeCloud && (
        <ContentPanel
          step={steps.find(s => s.id === activeCloud)}
          onClose={() => setActiveCloud(null)}
        />
      )}
    </div>
  );
};

export default Program;