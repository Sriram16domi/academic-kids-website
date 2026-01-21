

import '../styles/Exam.css';
import Examimg1 from '../assets/Examimg-1.webp'
import Examimg2 from '../assets/Examimg-2.webp'
import Examimg3 from '../assets/Examimg-3.webp'
import Examimg4 from '../assets/Examimg-4.png'

const Exam = () => {
  return (
    <div className="exam-container">
      {/* Header Section */}
      <section className="exam-header">
        <div className="exam-header-content">
          <h1 className="exam-main-title">Cambridge English <span className="highlight">IELTS</span></h1>
          <p className="exam-header-description">
            Prepare for your Cambridge English exam with our comprehensive courses designed to help you succeed
          </p>
        </div>
      </section>

      {/* Cambridge Starters */}
      <section className="exam-course purple-section">
        <div className="course-container">
          <div className="course-text">
            <h2>Cambridge Starters</h2>
            <p className="course-subtitle">A1 Level</p>
            <p className="course-description">
              Cambridge English Starters is the first exam in the Cambridge English Qualifications suite.
            </p>
            <div className="course-details">
              <div className="detail-item">
                <h4>Duration:</h4>
                <p>45 minutes</p>
              </div>
              <div className="detail-item">
                <h4>Format:</h4>
                <p>Reading, Writing & Speaking</p>
              </div>
              <div className="detail-item">
                <h4>Who is it for:</h4>
                <p>Children ages 7-8</p>
              </div>
            </div>
          </div>
          <div className="course-image">
            <img src={Examimg1} alt="Cambridge Starters" />
          </div>
        </div>

        <div className="expectations-section">
          <div className="expectation-col">
            <h3>What to Expect</h3>
            <ul>
              <li>Reading & Writing (20 minutes)</li>
              <li>Listening (20 minutes)</li>
              <li>Speaking (3-5 minutes)</li>
            </ul>
          </div>
          <div className="expectation-col">
            <h3>Benefits</h3>
            <ul>
              <li>Foundation in English</li>
              <li>Build confidence</li>
              <li>International recognition</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cambridge Movers */}
      <section className="exam-course pink-section">
        <div className="course-container">
          <div className="course-image">
            <img src={Examimg2} alt="Cambridge Movers" />
          </div>
          <div className="course-text">
            <h2>Cambridge Movers</h2>
            <p className="course-subtitle">A1-A2 Level</p>
            <p className="course-description">
              Cambridge English Movers is the second exam, designed for young learners progressing in their English journey.
            </p>
            <div className="course-details">
              <div className="detail-item">
                <h4>Duration:</h4>
                <p>50 minutes</p>
              </div>
              <div className="detail-item">
                <h4>Format:</h4>
                <p>Reading, Writing & Speaking</p>
              </div>
              <div className="detail-item">
                <h4>Who is it for:</h4>
                <p>Children ages 8-9</p>
              </div>
            </div>
          </div>
        </div>

        <div className="expectations-section">
          <div className="expectation-col">
            <h3>What to Expect</h3>
            <ul>
              <li>Reading & Writing (30 minutes)</li>
              <li>Listening (25 minutes)</li>
              <li>Speaking (5-7 minutes)</li>
            </ul>
          </div>
          <div className="expectation-col">
            <h3>Benefits</h3>
            <ul>
              <li>Improved vocabulary</li>
              <li>Grammar mastery</li>
              <li>Enhanced speaking skills</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cambridge Flyers */}
      <section className="exam-course coral-section">
        <div className="course-container">
          <div className="course-text">
            <h2>Cambridge Flyers</h2>
            <p className="course-subtitle">A2 Level</p>
            <p className="course-description">
              Cambridge English Flyers is the third and final exam for young learners in this suite.
            </p>
            <div className="course-details">
              <div className="detail-item">
                <h4>Duration:</h4>
                <p>60 minutes</p>
              </div>
              <div className="detail-item">
                <h4>Format:</h4>
                <p>Reading, Writing & Speaking</p>
              </div>
              <div className="detail-item">
                <h4>Who is it for:</h4>
                <p>Children ages 9-10</p>
              </div>
            </div>
          </div>
          <div className="course-image">
            <img src={Examimg3} alt="Cambridge Flyers" />
          </div>
        </div>

        <div className="expectations-section">
          <div className="expectation-col">
            <h3>What to Expect</h3>
            <ul>
              <li>Reading & Writing (40 minutes)</li>
              <li>Listening (25 minutes)</li>
              <li>Speaking (7-9 minutes)</li>
            </ul>
          </div>
          <div className="expectation-col">
            <h3>Benefits</h3>
            <ul>
              <li>Advanced proficiency</li>
              <li>Confident communication</li>
              <li>Ready for secondary school</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key English Test */}
      <section className="exam-course yellow-section">
        <div className="course-container">
          <div className="course-image">
            <img src={Examimg1} alt="Key English Test" />
          </div>
          <div className="course-text">
            <h2>Key English Test</h2>
            <p className="course-subtitle">A2 Level</p>
            <p className="course-description">
              Demonstrates that you can use English for basic everyday purposes.
            </p>
            <div className="course-details">
              <div className="detail-item">
                <h4>Duration:</h4>
                <p>70 minutes</p>
              </div>
              <div className="detail-item">
                <h4>Format:</h4>
                <p>Reading, Writing & Speaking</p>
              </div>
              <div className="detail-item">
                <h4>Who is it for:</h4>
                <p>Teens & Adults</p>
              </div>
            </div>
          </div>
        </div>

        <div className="expectations-section">
          <div className="expectation-col">
            <h3>What to Expect</h3>
            <ul>
              <li>Reading & Writing (60 minutes)</li>
              <li>Speaking (8-10 minutes)</li>
            </ul>
          </div>
          <div className="expectation-col">
            <h3>Benefits</h3>
            <ul>
              <li>Entry-level qualification</li>
              <li>Workplace ready</li>
              <li>International credential</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Preliminary English Test */}
      <section className="exam-course green-section">
        <div className="course-container">
          <div className="course-text">
            <h2>Preliminary English Test</h2>
            <p className="course-subtitle">B1 Level</p>
            <p className="course-description">
              Shows that you can use English to communicate in practical situations.
            </p>
            <div className="course-details">
              <div className="detail-item">
                <h4>Duration:</h4>
                <p>120 minutes</p>
              </div>
              <div className="detail-item">
                <h4>Format:</h4>
                <p>Reading, Writing & Speaking</p>
              </div>
              <div className="detail-item">
                <h4>Who is it for:</h4>
                <p>Teens & Adults</p>
              </div>
            </div>
          </div>
          <div className="course-image">
            <img src={Examimg2} alt="Preliminary English Test" />
          </div>
        </div>

        <div className="expectations-section">
          <div className="expectation-col">
            <h3>What to Expect</h3>
            <ul>
              <li>Reading & Writing (90 minutes)</li>
              <li>Speaking (10-12 minutes)</li>
            </ul>
          </div>
          <div className="expectation-col">
            <h3>Benefits</h3>
            <ul>
              <li>Intermediate proficiency</li>
              <li>Career advancement</li>
              <li>Higher education access</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FCE */}
      <section className="exam-course blue-section">
        <div className="course-container">
          <div className="course-image">
            <img src={Examimg4} alt="First Certificate in English" />
          </div>
          <div className="course-text">
            <h2>First Certificate in English</h2>
            <p className="course-subtitle">B2 Level</p>
            <p className="course-description">
              Demonstrates upper-intermediate level English proficiency for study and work.
            </p>
            <div className="course-details">
              <div className="detail-item">
                <h4>Duration:</h4>
                <p>210 minutes</p>
              </div>
              <div className="detail-item">
                <h4>Format:</h4>
                <p>Reading, Writing, Listening & Speaking</p>
              </div>
              <div className="detail-item">
                <h4>Who is it for:</h4>
                <p>Advanced Learners</p>
              </div>
            </div>
          </div>
        </div>

        <div className="expectations-section">
          <div className="expectation-col">
            <h3>What to Expect</h3>
            <ul>
              <li>Reading (75 minutes)</li>
              <li>Writing (80 minutes)</li>
              <li>Listening (40 minutes)</li>
              <li>Speaking (14 minutes)</li>
            </ul>
          </div>
          <div className="expectation-col">
            <h3>Benefits</h3>
            <ul>
              <li>Advanced qualification</li>
              <li>Global recognition</li>
              <li>Career opportunities</li>
            </ul>
          </div>
        </div>
      </section>

     <div className="Exam-Conclusion">
      <h1>Conclusion</h1>
      <p>The Cambridge English pathway takes students from beginners to advanced users step by step. By choosing the right level, you can improve your English, build confidence, and open global opportunities in education, work, and travel.</p>
     </div>

    </div>


  );
};

export default Exam;