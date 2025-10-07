import React, { useState, useEffect } from 'react';

const FloatingPhotos = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [positions, setPositions] = useState([]);
  
  const photos = [
    { image: '/NOT photos/group 6/pic5.jpg', link: '/visuals/quietdevourmentslideshow' },
    { image: '/NOT photos/group2/IMG_4392.jpg', link: '/visuals/echoslideshow' },
    { image: '/NOT photos/group2/ascii-flower.png', link: '#' },
    { image: '/NOT photos/group 4/Sarah_Rizvi_Final_Graphic_1.jpeg', link: '/visuals/inthewindslideshow' },
    { image: '/NOT photos/group 6/pic7.jpg', link: '/visuals/quietdevourmentslideshow' },
    { image: '/NOT photos/group3/2.jpg', link: '/visuals/airitoutslideshow' },
    { image: '/NOT photos/group2/IMG_4345.jpg', link: '/visuals/echoslideshow' },
    { image: '/NOT photos/group 4/Sarah_Rizvi_Final_Graphic_3.jpeg', link: '/visuals/inthewindslideshow' },
    { image: '/NOT photos/group 6/pic6.jpg', link: '/visuals/quietdevourmentslideshow' },
    { image: '/NOT photos/group3/11.jpg', link: '/visuals/airitoutslideshow' }
  ];
  
  useEffect(() => {
    // Generate random positions, avoiding overlap (same logic as original script.js)
    const generatePositions = () => {
      const newPositions = [];
      const size = 150; // Same size as original
      
      const isOverlapping = (x, y, size) => {
        return newPositions.some(
          (pos) =>
            x < pos.x + size &&
            x + size > pos.x &&
            y < pos.y + size &&
            y + size > pos.y
        );
      };
      
      photos.forEach((photo, index) => {
        let randomX, randomY;
        
        // Generate random positions, avoiding overlap
        do {
          randomX = Math.floor(Math.random() * (window.innerWidth - size));
          randomY = Math.floor(Math.random() * (window.innerHeight - size));
        } while (isOverlapping(randomX, randomY, size));
        
        newPositions.push({ 
          x: randomX, 
          y: randomY, 
          ...photo,
          animationDelay: Math.random() * 2 // Random delay like original
        });
      });
      
      setPositions(newPositions);
      console.log('Generated positions:', newPositions); // Debug log
    };
    
    generatePositions();
  }, []);
  
  useEffect(() => {
    // Smooth mouse movement interaction (same as original script.js)
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;
    
    const handleMouseMove = (e) => {
      targetX = e.clientX - window.innerWidth / 2;
      targetY = e.clientY - window.innerHeight / 2;
    };
    
    const handleTouchMove = (e) => {
      const touch = e.touches[0];
      targetX = touch.clientX - window.innerWidth / 2;
      targetY = touch.clientY - window.innerHeight / 2;
    };
    
    const smoothMove = () => {
      // Gradual interpolation to target positions
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;
      
      setMousePosition({ x: currentX, y: currentY });
      requestAnimationFrame(smoothMove);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    smoothMove();
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);
  
  return (
    <div className="photo-container">
      {positions.map((photo, index) => (
        <div 
          key={index}
          className="floating-photo-wrapper"
          style={{
            left: `${photo.x}px`,
            top: `${photo.y}px`,
            transform: `translate(${mousePosition.x / (10 + index)}px, ${mousePosition.y / (10 + index)}px)`,
            animationDelay: `${photo.animationDelay}s`
          }}
        >
          <a href={photo.link}>
            <img 
              src={photo.image}
              alt={`Floating photo ${index}`}
              className="floating-photo"
              style={{ 
                width: '250px',
                height: '250px',
                objectFit: 'cover',
                borderRadius: '10px',
                boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)'
              }}
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default FloatingPhotos;
