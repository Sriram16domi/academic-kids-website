/**
 * CloudStep Component - Production-Ready Cloud UI
 * 
 * A premium, playful cloud-shaped button component for EdTech applications.
 * Features organic cloud silhouette with depth, shadow, and smooth animations.
 */

import '../styles/CloudStep.css';

const CloudStep = ({ step, isActive, onClick }) => {
  return (
    <div
      className={`cloud-step-wrapper ${isActive ? 'active' : ''}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
        }
      }}
    >
      {/* Cloud Shape Container */}
      <div className={`cloud-shape ${step.color}`}>
        {/* Soft shadow layer - creates floating effect */}
        <div className="cloud-shadow"></div>
        
        {/* Inner content - positioned above cloud shape */}
        <div className="cloud-inner">
          <div className="cloud-number">{step.number}</div>
          <div className="cloud-content">
            <h3 className="cloud-title">{step.title}</h3>
            {step.topic && <p className="cloud-topic">{step.topic}</p>}
          </div>
        </div>

        {/* Soft highlight on top-left - creates glossy effect */}
        <div className="cloud-highlight"></div>
      </div>
    </div>
  );
};

export default CloudStep;

/**
 * ===== USAGE EXAMPLE =====
 * 
 * In Program.jsx:
 * 
 * const steps = [
 *   {
 *     id: 1,
 *     number: '1',
 *     title: 'Vocabulary Bank',
 *     topic: 'Lexicon',
 *     color: 'teal',
 *     position: 'left',
 *     content: 'Learn foundational vocabulary...'
 *   },
 *   ...
 * ];
 * 
 * {steps.map((step) => (
 *   <CloudStep
 *     key={step.id}
 *     step={step}
 *     isActive={activeCloud === step.id}
 *     onClick={() => setActiveCloud(step.id)}
 *   />
 * ))}
 * 
 * ===== PROPS =====
 * 
 * - step (object): Contains id, number, title, topic, color, position, content
 * - isActive (boolean): Triggers active state and pop animation
 * - onClick (function): Handler for click events
 * 
 * ===== SUPPORTED COLORS =====
 * 
 * - teal (gradient: #26c6da → #00acc1)
 * - coral (gradient: #ef5350 → #e53935)
 * - green (gradient: #26a69a → #009688)
 * - orange (gradient: #ffa726 → #fb8c00)
 * - pink (gradient: #ec407a → #c2185b)
 * - magenta (gradient: #ab47bc → #6a1b9a)
 * - burnt-orange (gradient: #ff7043 → #d84315)
 * - purple (gradient: #5e35b1 → #3f2c70)
 * 
 * ===== ANIMATION DETAILS =====
 * 
 * IDLE STATE:
 * - Continuous floating up-down motion (4-6px)
 * - Duration: 5 seconds
 * - Curve: ease-in-out (natural movement)
 * 
 * HOVER STATE:
 * - Lifts up 12px
 * - Shadow expands beneath
 * - Number circle scales 1.1x
 * - Smooth spring easing
 * 
 * ACTIVE STATE:
 * - Pop animation: scale from 0.95 → 1.08 → 1.06
 * - Highlight glow animation
 * - Shadow intensifies
 * - Content area fades in from below
 * 
 * FOCUS STATE (Keyboard Accessibility):
 * - Enhanced shadow outline
 * - White focus ring
 * - Clear visual feedback
 * 
 * ===== FEATURES =====
 * 
 * ✓ Organic cloud shape using clip-path (no SVG needed)
 * ✓ Layered shadow system for depth
 * ✓ Soft gradient highlight for glossy effect
 * ✓ Smooth spring animations (cubic-bezier easing)
 * ✓ Responsive design (desktop, tablet, mobile)
 * ✓ Keyboard accessible (Enter/Space support)
 * ✓ CSS-only (no animation libraries)
 * ✓ Performance optimized
 * ✓ Kid-focused storybook aesthetic
 * ✓ Playful micro-interactions
 * 
 * ===== PERFORMANCE NOTES =====
 * 
 * - Uses GPU-accelerated transform and opacity
 * - clip-path used instead of SVG for performance
 * - Minimal repaints during animations
 * - No JavaScript animation loops
 * - Smooth 60fps on modern browsers
 * 
 * ===== BROWSER SUPPORT =====
 * 
 * - Chrome/Edge: Full support
 * - Firefox: Full support
 * - Safari: Full support (iOS 13+)
 * - Mobile browsers: Full support
 * 
 * clip-path support: All modern browsers (IE 11 not supported)
 */
