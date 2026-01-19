const ContentPanel = ({ step, onClose }) => {
  return (
    <div className="content-panel-overlay" onClick={onClose}>
      <div className="content-panel" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <div className={`content-header ${step.color}`}>
          <h2>{step.title}</h2>
          {step.topic && <p className="content-topic">{step.topic}</p>}
        </div>
        <div className="content-body">
          <p>{step.content}</p>
        </div>
      </div>
    </div>
  );
};

export default ContentPanel;
