import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaBook, FaPhone } from "react-icons/fa";
import { Navbar } from "./Navbar";
import "../styles/Home.css";


export default function Home({ images }) {
  const image = images.filter(img =>
    [1, 3, 5, 7].includes(img.order)
  );


  return (


    <>
      <Navbar />
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

      <div className="Why-parent-chooseus-par">
        <div className="Why-Parentchoose-Us">
          <h1>Why Parent <span>Choose Us</span></h1>
        </div>

      </div>


    </>
  );
}

