import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaBook,
  FaPhone,
  FaBars,
  FaTimes
} from "react-icons/fa";
import "../styles/navbar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Imprima&display=swap');
      </style>

      {/* ================= MAIN NAV ================= */}
      <nav className="main-nav">
        <img
          src="/src/assets/bubblelogo.png"
          alt="Bubble Logo"
          className="logo"
        />

        {/* DESKTOP NAV LINKS */}
        <ul className="nav-links desktop-nav">
          <li><Link to="/"><FaHome /> Home</Link></li>
          <li><Link to="/about"><FaInfoCircle /> About Us</Link></li>
          <li><Link to="/course"><FaBook /> Course</Link></li>
          <li><Link to="/contact"><FaPhone /> Contact Us</Link></li>
        </ul>

        {/* REGISTER (DESKTOP) */}
        <Link to="/register" className="register-btn">
          <button>Register</button>
        </Link>

        {/* SINGLE HAMBURGER (MOBILE) */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* MOBILE MENU (MAIN + SUB NAV) */}
        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <ul className="nav-links">
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
            <li><Link to="/course" onClick={() => setMenuOpen(false)}>Course</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
          </ul>

          <ul className="sub-links">
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Training</Link></li>
            <li><Link to="/about" onClick={() => setMenuOpen(false)}>All Training & Course</Link></li>
            <li><Link to="/course" onClick={() => setMenuOpen(false)}>Training Information Session</Link></li>
            <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Our Trainers</Link></li>
          </ul>
        </div>
      </nav>

      {/* ================= SUB NAV (DESKTOP ONLY) ================= */}
      <div className="sub-nav desktop-only">
        <nav>
          <ul>
            <li><Link to="/">Training</Link></li>
            <li><Link to="/about">All Training & Course</Link></li>
            <li><Link to="/course">Training Information Session</Link></li>
            <li><Link to="/contact">Our Trainers</Link></li>
          </ul>
        </nav>
      </div>
    </>
  );
};




