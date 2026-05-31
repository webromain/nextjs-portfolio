import "./career.css";

function Experience({ type, title, company, period, description }) {
  return (
    <div className="experience-section">
      <div className="experience-timeline">
        <div className="experience-bullet"></div>
        <div className="experience-bar"></div>
      </div>
      <div className="experience card">
        <div className="experience-header">
          <h3 className="experience-title">{title}</h3>
          <p className="experience-company">{company}</p>
          <p className="experience-type">{type}</p>
        </div>
        <p className="experience-period">{period}</p>
        <p className="experience-description">{description}</p>
      </div>
    </div>
  );
}

export default Experience;
