// src/components/our-services-page/ServicesHero.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import servicesBg from '../../assets/our_services_bg.jpg';

const ServicesHero = () => (
  // Hero section with background image and overlay
  <div
    className="w-full bg-cover bg-center relative flex items-center justify-center font-['Open_Sans']"
    style={{ backgroundImage: `url(${servicesBg})`, height: '600px' }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black opacity-30" />

    {/* Content */}
    <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-bold text-white mb-4">
        Our Services
      </h1>
      <nav className="text-white text-sm sm:text-base">
        <Link to="/" className="hover:no-underline">
          Home
        </Link>
        <span className="mx-2">{'>'}</span>
        <span>Our Services</span>
      </nav>
    </div>
  </div>
);

export default ServicesHero;
