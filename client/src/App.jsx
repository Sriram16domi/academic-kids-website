import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { useEffect, useState } from "react";
import { fetchGalleryImages } from "../src/services/api";import { Navbar } from "./pages/Navbar";


export default function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchGalleryImages().then(setImages);
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home images={images} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
