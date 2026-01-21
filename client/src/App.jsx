import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Footer from "./pages/Footer";
import Program from "./pages/Program";
import About from "./pages/About";
import Exam from "./pages/Exam";
import Trainers from "./pages/Trainers";
import CourseList from "./pages/CourseList";
import CourseDetail from "./pages/CourseDetail";
import {Navbar}  from "./pages/Navbar";
import Gallery from "./pages/gallery";
import { useEffect, useState } from "react";
import { fetchGalleryImages } from "../src/services/api";


export default function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchGalleryImages().then(setImages);
  }, []);
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home images={images} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/program" element={<Program />} />
        <Route path="/gallery" element={<Gallery images={images} />} />
        <Route path="/about" element={<About />} />
        <Route path="/exam" element={<Exam />} />
        <Route path="/trainers" element={<Trainers images={images} />} />
        <Route path="/courses" element={<CourseList />} />
        <Route path="/courses/:courseId" element={<CourseDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
