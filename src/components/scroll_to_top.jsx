import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  // Toggle button visibility on scroll
  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 120);
    };
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  // Smooth scroll to top
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      aria-label="Scroll to Top"
      onClick={handleClick}
      className={`
        fixed bottom-5 right-5 z-50
        w-8 h-8
        bg-gray-800
        hover:bg-green-600
        rounded
        flex items-center justify-center
        shadow-md
        transition-all
        ${visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}
      style={{ border: 'none', outline: 'none' }}
    >
      {/* Up arrow icon */}
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M7 14l5-5 5 5" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
};

export default ScrollToTop;
