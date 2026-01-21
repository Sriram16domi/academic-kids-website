import { useEffect, useState } from "react";
import { fetchGalleryImages } from "../services/api";
import GalleryItem from "../components/GalleryItem";
import "../styles/Gallery.css";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetchGalleryImages()
      .then(setImages)
      .catch((err) => setError("Failed to load gallery images"))
      .finally(() => setLoading(false));
  }, []);

  // Distribute images across multiple strings
  const groupImagesByString = (imgs, imagesPerString = 5) => {
    const groups = [];
    for (let i = 0; i < imgs.length; i += imagesPerString) {
      groups.push(imgs.slice(i, i + imagesPerString));
    }
    return groups;
  };

  if (loading) {
    return (
      <div className="gallery-container">
        <div className="loading">Loading gallery...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="gallery-container">
        <div className="error-message">{error}</div>
      </div>
    );
  }

  const imageGroups = groupImagesByString(images);

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Our <span>Gallery</span></h1>
      
      <div className="string-lights-container">
        {imageGroups.map((group, stringIndex) => (
          <div key={stringIndex} className="string-line">
            {/* SVG Curved String */}
            <svg
              className="string-svg"
              viewBox="0 0 1200 200"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient
                  id={`stringGradient-${stringIndex}`}
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#c4a57b" />
                  <stop offset="50%" stopColor="#d4b896" />
                  <stop offset="100%" stopColor="#c4a57b" />
                </linearGradient>
              </defs>
              {/* Curved string path */}
              <path
                d={`M 0,${40 + stringIndex * 5} Q 600,${30 + stringIndex * 3} 1200,${40 + stringIndex * 5}`}
                stroke={`url(#stringGradient-${stringIndex})`}
                strokeWidth="2.5"
                fill="none"
                strokeLinecap="round"
              />
            </svg>

            {/* Photos on this string */}
            <div className="photos-on-string">
              {group.map((img, photoIndex) => (
                <GalleryItem
                  key={`${stringIndex}-${photoIndex}`}
                  image={img}
                  index={photoIndex}
                  totalOnString={group.length}
                  stringIndex={stringIndex}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-btn"
              onClick={() => setSelectedImage(null)}
              aria-label="Close modal"
            >
              ✕
            </button>
            <img
              src={selectedImage.fullUrl || selectedImage.thumbUrl}
              alt="Full view"
              className="modal-image"
            />
          </div>
        </div>
      )}
    </div>
  );
}
