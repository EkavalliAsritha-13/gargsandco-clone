import React from 'react';
import { Link } from 'react-router-dom';
import contactBg from '../../assets/contact_page_hero.jpg';

const ContactHero = () => {
  return (
    // Hero section with background image
    <div
      className="w-full flex items-center justify-center relative font-['Open_Sans']"
      style={{
        backgroundImage: `url(${contactBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '573.97px',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-[42px] font-bold leading-tight mb-2">
          Contact
        </h1>
        <div className="text-[16.5px] font-normal">
          <Link
            to="/"
            className="text-white hover:cursor-pointer hover:text-white"
          >
            Home
          </Link>
          <span className="mx-2">{'>'}</span>
          <span className="text-white">Contact</span>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;
