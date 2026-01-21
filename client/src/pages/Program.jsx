import React, { useState, useEffect, useRef } from 'react';
import '../styles/Program.css';
import CloudStep from './CloudStep';
import ContentPanel from './ContentPanel';
import flightpanda from '../assets/flight-panda.png';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Program = () => {
  const [activeCloud, setActiveCloud] = useState(null);
  const pandaRef = useRef(null);
  const flowSectionRef = useRef(null);

  useEffect(() => {
    if (!pandaRef.current || !flowSectionRef.current) return;

    const flowSection = flowSectionRef.current;
    const sectionHeight = flowSection.offsetHeight;
    const sectionTop = flowSection.getBoundingClientRect().top;

    // Set initial position to visible at start
    gsap.set(pandaRef.current, {
      opacity: 1,
      rotation: 0
    });

    // Create scroll animation with optimal performance
    const ctx = gsap.context(() => {
      gsap.to(pandaRef.current, {
        scrollTrigger: {
          trigger: flowSectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.2, // Smooth scrubbing with 1.2s lag
          markers: false,
          onUpdate: (self) => {
            // Calculate progress from 0 to 1
            const progress = self.progress;
            
            // SVG viewBox: 0 0 100 1000
            // Path: M 50 50 Q 30 150, 50 250 Q 70 350, 50 450 Q 30 550, 50 650 Q 70 750, 50 850 Q 30 900, 50 950
            const pathSegments = [
              { x: 50, y: 50, qx: 30, qy: 150, ex: 50, ey: 250 },
              { x: 50, y: 250, qx: 70, qy: 350, ex: 50, ey: 450 },
              { x: 50, y: 450, qx: 30, qy: 550, ex: 50, ey: 650 },
              { x: 50, y: 650, qx: 70, qy: 750, ex: 50, ey: 850 },
              { x: 50, y: 850, qx: 30, qy: 900, ex: 50, ey: 950 }
            ];
            
            // Find which segment we're on
            const segmentProgress = progress * pathSegments.length;
            const segmentIndex = Math.floor(segmentProgress) % pathSegments.length;
            const localProgress = segmentProgress - segmentIndex;
            
            const segment = pathSegments[segmentIndex];
            
            // Quadratic bezier interpolation
            const t = Math.min(localProgress, 1);
            const mt = 1 - t;
            
            // P(t) = (1-t)²P0 + 2(1-t)tP1 + t²P2
            const svgX = mt * mt * segment.x + 
                         2 * mt * t * segment.qx + 
                         t * t * segment.ex;
            
            const svgY = mt * mt * segment.y + 
                         2 * mt * t * segment.qy + 
                         t * t * segment.ey;
            
            // Get flow section dimensions
            const flowRect = flowSection.getBoundingClientRect();
            
            // Convert SVG coordinates to pixel positions within the flow section
            // SVG width is 100 units, height is 1000 units
            const pixelX = (svgX / 100) * flowRect.width - 50; // Center offset (panda width)
            const pixelY = (svgY / 1000) * sectionHeight;
            
            gsap.set(pandaRef.current, {
              left: pixelX + 'px',
              top: pixelY + 'px',
              rotation: 0, // No rotation
              opacity: 1
            });
          }
        }
      });
    });

    return () => ctx.revert();
  }, []);

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
      <section className="program-flow" ref={flowSectionRef}>
        <img className='flightpanda' src={flightpanda} alt="Flight Panda" ref={pandaRef} />
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