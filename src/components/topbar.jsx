import React, { useState, useEffect } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const TopBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY === 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []); 

  return (
    <div
      className={`bg-[#f1f1f1] w-full font-[Open_Sans] transition-all duration-300 hidden md:block ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
      }`}
    >
      <div
        className="
          max-w-[1320px] mx-auto flex items-center
          justify-start
          h-[48px]
          px-6 pl-[64px]
          gap-[48px]
        "
      >
        {/* Phone contact information */}
        <div className="flex items-center gap-1.5 cursor-pointer group transition-colors duration-200">
          <FaPhoneAlt className="text-[#555555] group-hover:text-[#0d3f9c] text-[15px] transition-colors duration-200" />
          <span className="text-[#555555] group-hover:text-[#0d3f9c] transition-colors duration-200 text-base">
            ‪‪‪‪+91 810 680 4211‬‬‬‬‬
          </span>
        </div>

        {/* Email contact information */}
        <div className="flex items-center gap-1.5 cursor-pointer group transition-colors duration-200">
          <MdEmail className="text-[#555555] group-hover:text-[#0d3f9c] text-[16px] transition-colors duration-200" />
          <span className="text-[#555555] group-hover:text-[#0d3f9c] transition-colors duration-200 text-base">
            info@gargsandco.com
          </span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;