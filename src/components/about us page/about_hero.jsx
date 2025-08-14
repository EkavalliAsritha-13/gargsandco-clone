import React from 'react';
import aboutHeroBg from '../../assets/about_hero_bg.jpg';

const AboutHero = () => {
  return (
    // Hero section with background image and overlay
    <div
      className="relative w-full bg-cover bg-center flex items-center justify-center text-white font-['Open_Sans']"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${aboutHeroBg})`,
        width: '100%',
        height: '573.97px',
      }}
    >
      {/* Centered heading and breadcrumb */}
      <div className="text-center z-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-2">About Us</h1>
        <p className="text-base md:text-lg">
          <a href="/" className="">Home</a> &gt; About Us
        </p>
      </div>
    </div>
  );
};

export default AboutHero;
