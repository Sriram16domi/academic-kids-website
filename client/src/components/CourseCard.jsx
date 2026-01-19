import { Link } from 'react-router-dom';
import '../styles/CourseCard.css';

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <div className="course-card-image">
        <img src={course.image} alt={course.title} />
      </div>
      <div className="course-card-content">
        <h3 className="course-card-title">{course.title}</h3>
        <Link to={`/courses/${course.id}`} className="course-card-btn">
          Learn More →
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;
