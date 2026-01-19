import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import coursesData from '../data/coursesData';
import CourseHero from '../components/CourseHero';
import CourseTabs from '../components/CourseTabs';
import '../styles/CourseDetail.css';

const CourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundCourse = coursesData.find(c => c.id === courseId);
    if (foundCourse) {
      setCourse(foundCourse);
      setLoading(false);
      window.scrollTo(0, 0);
    }
  }, [courseId]);

  if (loading || !course) {
    return <div className="course-loading">Loading...</div>;
  }

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'details', label: 'Details' },
    { id: 'features', label: 'Features' },
    { id: 'outcomes', label: 'Outcomes' }
  ];

  const handleRelatedCourseClick = (relatedCourseId) => {
    navigate(`/courses/${relatedCourseId}`);
  };

  const getRelatedCoursesData = () => {
    return course.relatedCourses
      .map(id => coursesData.find(c => c.id === id))
      .filter(Boolean);
  };

  return (
    <div className="course-detail-page">
      <CourseHero course={course} onApplyClick={() => alert('Apply now!')} />

      <section className="course-tabs-section">
        <CourseTabs tabs={tabs} onTabChange={setActiveTab} />
      </section>

      {activeTab === 'overview' && (
        <section className="course-section overview-section fade-in">
          <div className="section-container">
            <h2 className="section-title">Overview</h2>
            <p className="section-text">{course.overview}</p>
          </div>
        </section>
      )}

      {activeTab === 'details' && (
        <section className="course-section details-section fade-in">
          <div className="section-container">
            <h2 className="section-title">Details</h2>
            <div className="details-grid">
              <div className="detail-column">
                <h3 className="detail-subtitle">Entry Requirements</h3>
                <p className="detail-text">{course.details.entryRequirements}</p>
              </div>
              <div className="detail-column">
                <h3 className="detail-subtitle">Duration</h3>
                <p className="detail-text">{course.details.duration}</p>
              </div>
            </div>
            <div className="details-grid">
              <div className="detail-column">
                <h3 className="detail-subtitle">Next Courses</h3>
                <p className="detail-text">{course.details.nextCourses}</p>
              </div>
              <div className="detail-column">
                <h3 className="detail-subtitle">Benefits</h3>
                <ul className="detail-list">
                  {course.details.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {activeTab === 'features' && (
        <section className="course-section features-section fade-in">
          <div className="section-container">
            <h2 className="section-title">Features</h2>
            <div className="features-grid">
              {course.features.map((feature, idx) => (
                <div key={idx} className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3 className="feature-title">{feature.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeTab === 'outcomes' && (
        <section className="course-section outcomes-section fade-in">
          <div className="section-container">
            <h2 className="section-title">Outcomes</h2>
            <ol className="outcomes-list">
              {course.outcomes.map((outcome, idx) => (
                <li key={idx}>{outcome}</li>
              ))}
            </ol>
          </div>
        </section>
      )}

      <section className="course-section related-courses-section">
        <div className="section-container">
          <h2 className="section-title">Related Courses</h2>
          <div className="related-courses-grid">
            {getRelatedCoursesData().map((relatedCourse) => (
              <div
                key={relatedCourse.id}
                className="related-course-card"
                onClick={() => handleRelatedCourseClick(relatedCourse.id)}
              >
                <div className="related-course-image">
                  <img src={relatedCourse.image} alt={relatedCourse.title} />
                </div>
                <div className="related-course-info">
                  <h3 className="related-course-title">{relatedCourse.title}</h3>
                  <p className="related-course-text">{relatedCourse.subtitle}</p>
                  <button className="related-course-btn">Learn More →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;
