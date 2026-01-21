export default function GalleryItem({
  image,
  index,
  totalOnString,
  stringIndex,
  onClick,
}) {
  // Calculate randomish but consistent rotation and position
  const rotationSeed = (stringIndex * 7 + index * 13) % 360;
  const rotation = (rotationSeed % 12) - 6; // ±6 degrees
  const yOffset = Math.sin(rotationSeed * 0.1) * 15; // subtle height variation
  const swayDelay = (stringIndex * 0.3 + index * 0.15) % 6; // stagger sway animation

  // Distribute images across the string width
  const positionPercentage = ((index + 1) / (totalOnString + 1)) * 100;

  return (
    <div
      className="photo-container"
      style={{
        left: `${positionPercentage}%`,
        "--rotation": `${rotation}deg`,
        "--y-offset": `${yOffset}px`,
        "--sway-delay": `${swayDelay}s`,
      }}
    >
      {/* Light bulbs on string */}
      <div className="light-bulb light-left"></div>
      <div className="light-bulb light-right"></div>

      {/* Photo clip/pin at top */}
      <div className="photo-clip"></div>

      {/* Photo card with Polaroid style */}
      <div className="photo-card" onClick={onClick}>
        <div className="photo-frame">
          <img
            src={image.thumbUrl}
            alt={`Gallery photo ${index + 1}`}
            loading="lazy"
            className="photo-image"
          />
        </div>
        {/* Polaroid-style white border at bottom */}
        <div className="polaroid-label"></div>
      </div>
    </div>
  );
}
