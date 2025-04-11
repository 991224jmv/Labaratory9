import React, { useEffect, useState } from 'react';

const ShootingStar = () => {
  const [stars, setStars] = useState([]);
  
  useEffect(() => {
    // Create initial stars
    generateStars();
    
    // Add new stars periodically
    const interval = setInterval(() => {
      addStar();
    }, 1500);
    
    return () => clearInterval(interval);
  }, []);
  
  const generateStars = () => {
    const initialStars = [];
    for (let i = 0; i < 15; i++) {
      initialStars.push(createStar());
    }
    setStars(initialStars);
  };
  
  const createStar = () => {
    const size = Math.random() * 3 + 1;
    return {
      id: Math.random().toString(36).substring(2, 9),
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: size,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.5 + 0.5
    };
  };
  
  const addStar = () => {
    setStars(prevStars => {
      // Remove a random star to keep performance in check
      const newStars = [...prevStars];
      if (newStars.length > 30) {
        const randomIndex = Math.floor(Math.random() * newStars.length);
        newStars.splice(randomIndex, 1);
      }
      return [...newStars, createStar()];
    });
  };
  
  return (
    <div className="shooting-stars-container">
      {stars.map(star => (
        <div
          key={star.id}
          className="shooting-star"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            width: `${star.size * 30}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`
          }}
        />
      ))}
    </div>
  );
};

export default ShootingStar;