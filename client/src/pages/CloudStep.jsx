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
        {/* Soft shadow layer */}
        <div className="cloud-shadow"></div>
        
        {/* Main cloud body with lobes */}
        <div className="cloud-body">
          {/* Cloud lobes created with pseudo-elements */}
        </div>

        {/* Inner content */}
        <div className="cloud-inner">
          <div className="cloud-number">{step.number}</div>
          <div className="cloud-content">
            <h3 className="cloud-title">{step.title}</h3>
            {step.topic && <p className="cloud-topic">{step.topic}</p>}
          </div>
        </div>

        {/* Soft highlight on top-left */}
        <div className="cloud-highlight"></div>
      </div>
    </div>
  );
};

export default CloudStep;
