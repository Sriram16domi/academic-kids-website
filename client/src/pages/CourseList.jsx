import { useNavigate,Link } from 'react-router-dom';
import coursesData from '../data/coursesData';
import CourseCard from '../components/CourseCard';
import cambridgeChart from '../assets/cambridge-img.webp';
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
            <img src={cambridgeChart} alt="" />
          </div>
          <p className="cambridge-description">
            At our play school, children get the chance to learn, explore, and grow through fun and engaging exams. We prepare kids step by step with <span className="highlight-text">Cambridge English exams</span>, which help build the skills with confidence.
          </p>
          <Link to={'/exam'}><button className="know-more-btn">Know More</button></Link>
          
        </div>
      </section>
    </div>
  );
};

export default CourseList;
