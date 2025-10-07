import React, { useEffect, useRef } from 'react';

const HeroSection = () => {
  const videoRef = useRef(null);
  
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().then(() => {
        // If video plays, it will loop as intended
        video.style.display = "block";
      }).catch(() => {
        // If video cannot autoplay, show fallback image
        video.style.display = "none";
      });
    }
  }, []);
  
  return (
    <div className="hero-section">
      <div className="overlay"></div>
      <video 
        ref={videoRef}
        autoPlay 
        muted 
        loop 
        playsInline 
        poster="assets/hero videos/fallback.jpg"
      >
        <source src="assets/hero videos/NOTgroup2vid.mp4" type="video/mp4" />
        <source src="assets/hero videos/NOTgroup2vid.mp4" type="video/mp4" media="(max-width: 480px)" />
      </video>
    </div>
  );
};

export default HeroSection;
