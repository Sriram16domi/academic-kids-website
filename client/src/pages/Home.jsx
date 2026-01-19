import { Link } from "react-router-dom";
import whyparimg1 from "../assets/home-image-1.png";
import whyparimg2 from "../assets/home-image-2.png";
import whyparimg3 from "../assets/home-image-3.png";
import whyparimg4 from "../assets/home-image-4.png";
import ourprogramimg1 from "../assets/ourprogram-img-1.png";
import ourprogramimg2 from "../assets/ourprogram-img-2.png";
import ourprogramimg3 from "../assets/ourprogram-img-3.png";
import ourprogramimg4 from "../assets/ourprogram-img-4.png";
import achievementimg1 from "../assets/Achievement-img-1.webp";
import achievementimg2 from "../assets/Achievement-img-2.webp";
import achievementimg3 from "../assets/Achievement-img-3.webp";
import gallerybtnpanda from "../assets/gallery-bvtn-panda.webp";
import calltoaction from "../assets/CalltoAction-img.webp";
import { FaArrowRight } from "react-icons/fa6";
import imageicon from "../assets/image-icon.png";
import "../styles/Home.css";


export default function Home({ images }) {
  const image = images.filter(img =>
    [4, 3, 5, 7].includes(img.order)
  );


  return (


    <>

      <div className="Hero-Content">
        <div className="Content">
          <h1>Bubbly Training & Courses</h1>
          <p> Dedicated to nurturing the abilities of children with special needs through care, creativity, and innovation.
          </p>
          <button>All Training & Courses</button>
        </div>
      </div>

      <div className="infinite-image-bubble">
        <div className="bubble-images">
          {image.map(img => (
            <img
              key={img.order}
              src={img.thumbUrl}
              loading="lazy"
              alt="featured"
            />
          ))}
        </div>
      </div>


      <div className="About-home-section-par">
        <div className="About-home-section">
          <div className="About-home-contents">
            <h1>About The <span>Institute</span></h1>
            <p>At <span>Bubble Institute</span>, we believe that every child is unique and every ability matters. For over <span>6 years</span>, we have been helping children with special needs achieve their highest potential through personalized education, therapy, and skill development programs.</p>
            <div className="about-image-section">
              <img src="\src\assets\panfa.png" alt="about bubble institute" />
            </div>

          </div>

        </div>
        <button>What Is Bubble ?</button>
      </div>

      <div className="Why-parent-chooseus-section">
        <div className="Why-Parentchoose-Us">
          <h1>Why Parent <span>Choose Us</span></h1>
          <div className="Why-Parentchoose-Us-content">


            <div className="parentchoose-headings">
              <div className="parentchoose-heading">
                <img src={whyparimg1} alt="" /> <h1>Expert Mentors</h1>
              </div>
              <p>Trained professionals who understand special needs education.</p>
            </div>

            <div className="parentchoose-headings">
              <div className="parentchoose-heading">
                <img src={whyparimg2} alt="" /> <h1>Customized Learning</h1>
              </div>
              <p>Personalized teaching methods for every student.</p>
            </div>

            <div className="parentchoose-headings">
              <div className="parentchoose-heading">
                <img src={whyparimg3} alt="" /> <h1>Safe Environment</h1>
              </div>
              <p>A caring, secure, and joyful space for students.</p>
            </div>

            <div className="parentchoose-headings">
              <div className="parentchoose-heading">
                <img src={whyparimg4} alt="" /> <h1> Proven Results</h1>
              </div>
              <p>Transforming lives and unlocking hidden potential.</p>
            </div>

          </div>
        </div>

      </div>

      <div className="OurProgram-Section">
        <div className="OurProgram-Content-Heading">
          <h1>Our<span> Programs</span></h1>
          <p>We offer a wide range of specialized programs designed to improve learning, communication, social skills, and overall development.</p>
        </div>
        <div className="OurProgram-Content-Grids">
          <div className="OurProgram-Content-Grid">
            <img src={ourprogramimg1} alt="" />
            <h1>Speech Therapy</h1>
            <p>Helping children improve their communication skills through tailored speech therapy sessions.</p>
          </div>
          <div className="OurProgram-Content-Grid">
            <img src={ourprogramimg2} alt="" />
            <h1>Occupational Therapy</h1>
            <p>Enhancing daily living skills and sensory processing through specialized occupational therapy.</p>
          </div>
          <div className="OurProgram-Content-Grid">
            <img src={ourprogramimg3} alt="" />
            <h1>Behavioral Therapy</h1>
            <p>Using evidence-based techniques to promote positive behaviors and reduce challenges.</p>
          </div>
          <div className="OurProgram-Content-Grid">
            <img src={ourprogramimg4} alt="" />
            <h1>Social Skills Training</h1>
            <p>Fostering social interaction and relationship-building skills in a supportive environment.</p>
          </div>
        </div>
        <div className="OurProgram-Content-button">
          <Link to={'/program'}><button>View All Programs <FaArrowRight /></button></Link>
        </div>
      </div>

      <div className="Achievements-Section">
        <div className="Achievements-Heading">
          <h1>Achieve<span>ments</span></h1>
        </div>
        <div className="Achievements-Content">
          <div className="Achievements-Image-Section">
            <img src={achievementimg1} alt="achievement" />
            <img src={achievementimg2} alt="achievement" />
            <img src={achievementimg3} alt="achievement" />
          </div>
          <div className="Achievements-Para-Section">
            <p>Our achievements highlight the hard work, creativity, and dedication of our team.</p>
            <p>From academic success to innovative projects, each milestone adds to our journey of growth.
              These accomplishments inspire us to keep learning and reaching new goals.
            </p>
            <button>Explore More</button>
          </div>
        </div>

      </div>

      <div className="Gallery-Section">
        <div className="Gallery-Heading">
          <h1><span>Gall</span>ery</h1>
          <img src={imageicon} alt="" />
        </div>
        <div className="Gallery-Container">
          <div className="Gallery-Image-grids">
            {image.map((img) => (
              <div key={img.order} className="Gallery-Image-grid">
                <img src={img.thumbUrl} alt={`Gallery Image ${img.order}`} />
              </div>
            ))}
          </div>
        </div>
        <div className="Button-Section-Gallery">
          <Link to={'/gallery'}>
           <button>View Full Gallery  </button>
       
        </Link>
        <img className="gallery-panda" src={gallerybtnpanda} alt="" />
        </div>
      </div>

      <div className="Calltoaction-Section">
        <div className="Calltoaction-Heading">
          <h1>Call-To-<span>Action</span></h1>
        </div>
        <div className="Calltoaction-Content">
          <img src={calltoaction} alt="" />
          <div className="Calltoaction-right-content">
            <p>Every child deserves a chance to shine. Let’s build their future together.</p>
            <div className="Right-Content-btns">
              <Link to={'/register'}><button>Contact Us</button></Link>
            </div>
          </div>
        </div>  
      </div>


    </>
  );
}

