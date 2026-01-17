import { useEffect, useState } from "react";
import { fetchGalleryImages } from "../services/api";

export default function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchGalleryImages().then(setImages);
  }, []);

  return (
    <div className="grid">
      {images.map((img, i) => (
        <img
          key={i}
          src={img.thumbUrl}
          loading="lazy"
          alt="gallery"
        />
      ))}
    </div>
  );
}
