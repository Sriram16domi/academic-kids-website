import "../styles/Footer.css";
import logo from "../assets/bubblelogo.png";
import { FaYoutube, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* LEFT SECTION */}
        <div className="footer-left">
          <div className="footer-logo">
            <img src={logo} alt="Bubblee Institution" />
            <h2>
              BUBBLEE <br /> INSTITUTION
            </h2>
          </div>

          <p className="footer-desc">
            We believe Montessori education can empower the next generation
            to be happier, more fulfilled and better able to make a positive
            difference to their family, their community and the planet.
          </p>

          <button className="footer-btn">About Us</button>
        </div>

        {/* RIGHT SECTION */}
        <div className="footer-right">
          <h3>
            Quick <span>links</span>
          </h3>
          <ul>
            <li>About Us</li>
            <li>Contact</li>
            <li>Work With us</li>
            <li>Gallery</li>
            <li>Achievements</li>
          </ul>
        </div>
      </div>

      {/* MIDDLE BAR */}
      <div className="footer-middle">
        <div className="footer-links">
          <span>Contact</span>
          <span>Privacy <span className="highlight">Policy</span></span>
        </div>

        <div className="footer-socials">
          <FaXTwitter />
          <FaYoutube />
          <FaLinkedinIn />
          <FaInstagram />
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2025 All Rights Reserved</p>
        <p>
          We believe Montessori education can empower the next generation to
          be happier, more fulfilled and better able to make a positive
          difference to their family, their community and the planet.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
