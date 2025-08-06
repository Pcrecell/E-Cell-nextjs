"use client"

import React, { useState, useEffect, useRef } from 'react';

const StatisticsCard = ({ number, description }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);
  const imageUrl = 'https://ik.imagekit.io/fhervghik/E-Cell%20Website/texture.webp?updatedAt=1754223615990';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '100px' }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div ref={cardRef} className="relative group w-[250px] h-[300px] md:w-[300px] md:h-[350px] rounded-lg overflow-visible">
      <div className="absolute -top-2 -left-2 w-[calc(100%+16px)] h-[calc(100%+16px)] border-2 border-[#26a8da] rounded-lg group-hover:border-[#26a8da] transition-colors duration-300 z-30 pointer-events-none"></div>

      <div
        className="absolute inset-0 z-0 rounded-lg"
        style={{
          backgroundImage: isVisible ? `url(${imageUrl})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'background-image 1s ease-in-out',
        }}
      />

      <div className="absolute inset-0 z-10 rounded-lg bg-gradient-radial pointer-events-none"></div>

      <div className="relative z-20 flex flex-col justify-center items-center h-full rounded-lg transition-colors duration-300 group-hover:bg-[#26a8da]">
        <h2 className="text-7xl md:text-8xl font-bold mb-4 text-white transition-colors duration-300 items">
          {number}
        </h2>
        <p className="text-white text-center text-lg md:max-w-lg max-w-md">{description}</p>
      </div>

      <style jsx>{`
        .bg-gradient-radial {
          background: radial-gradient(
            ellipse at center,
            rgba(0, 0, 0, 0) 20%,
            rgba(0, 0, 0, 0.9) 80%
          );
        }
      `}</style>
    </div>
  );
};

export default StatisticsCard;