import '../styles/CourseHero.css';

const CourseHero = ({ course, onApplyClick }) => {
  return (
    <section className="course-hero">
      <div className="course-hero-container">
        <div className="course-hero-content">
          <h1 className="course-hero-title">{course.title}</h1>
          <p className="course-hero-subtitle">{course.subtitle}</p>
          <p className="course-hero-range">{course.range}</p>
          <button className="course-apply-btn" onClick={onApplyClick}>
            Apply Now
          </button>
        </div>
        <div className="course-hero-image">
          <div className="hero-image-wrapper">
            <img src={course.heroImage} alt={course.title} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseHero;
