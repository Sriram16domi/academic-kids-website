import { useNavigate } from 'react-router-dom';
import coursesData from '../data/coursesData';
import CourseCard from '../components/CourseCard';
import '../styles/CourseList.css';

const CourseList = () => {
  const navigate = useNavigate();

  const handleCourseClick = (courseId) => {
    navigate(`/courses/${courseId}`);
  };

  return (
    <div className="course-list-page">
      <section className="courses-grid-section">
        <div className="section-container">
          <h2 className="grid-title">All Training & Courses</h2>
          <div className="courses-grid">
            {coursesData.map((course) => (
              <div
                key={course.id}
                onClick={() => handleCourseClick(course.id)}
                className="course-card-wrapper"
              >
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cambridge-section">
        <div className="section-container">
          <h2 className="cambridge-title">CAMBRIDGE <span className="highlight">EXAM</span></h2>
          <div className="cambridge-chart">
            <svg viewBox="0 0 400 300" className="exam-chart">
              <ellipse cx="200" cy="150" rx="180" ry="120" fill="none" stroke="#ddd" strokeWidth="2" />
              <text x="200" y="160" textAnchor="middle" className="chart-text">
                Comprehensive Exam Preparation
              </text>
            </svg>
          </div>
          <p className="cambridge-description">
            At our play school, children get the chance to learn, explore, and grow through fun and engaging exams. We prepare kids step by step with <span className="highlight-text">Cambridge English exams</span>, which help build the skills with confidence.
          </p>
          <button className="know-more-btn">Know More</button>
        </div>
      </section>
    </div>
  );
};

export default CourseList;
