// navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import navLogo from '../assets/nav_logo.png';
import TopBar from './topbar';

const Navbar = () => {
  // State for showing/hiding navbar and top bar
  const [showNavbar, setShowNavbar] = useState(true);
  const [heroPassed, setHeroPassed] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll to toggle navbar visibility based on hero section
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight;

      if (currentScrollY >= heroHeight) {
        setHeroPassed(true);
        setShowNavbar(true);
        setShowTopBar(false);
      } else {
        setHeroPassed(false);
        if (currentScrollY === 0) {
          setShowNavbar(true);
          setShowTopBar(true);
        } else {
          setShowNavbar(false);
          setShowTopBar(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.hamburger-btn')) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const location = useLocation();

  // Toggle the mobile menu
  const toggleMobileMenu = (e) => {
    e.stopPropagation();
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close the mobile menu
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* TopBar visible only when showTopBar is true */}
      {showTopBar && <TopBar />}

      {/* Main Navbar */}
      <nav
        className={`
          w-full z-40 fixed transition-transform duration-300
          ${showNavbar ? 'translate-y-0' : '-translate-y-full'}
          bg-white shadow-md font-['Open_Sans']
          ${heroPassed ? 'top-0' : showNavbar ? 'md:top-[48px] top-0' : 'top-0'}
        `}
      >
        <div className="max-w-screen-xl mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 md:ml-[52px]">
            <img src={navLogo} alt="Gargs and Co Logo" className="h-10 md:h-14 object-contain" />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8 font-semibold text-[15px] text-gray-700">
            <Link
              to="/"
              className={`transition hover:text-[#002A7B] ${
                location.pathname === '/' ? 'text-[#002A7B]' : 'text-gray-700'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`transition hover:text-[#002A7B] ${
                location.pathname === '/about' ? 'text-[#002A7B]' : 'text-gray-700'
              }`}
            >
              About Us
            </Link>
            <Link
              to="/services"
              className={`transition hover:text-[#002A7B] ${
                location.pathname === '/services' ? 'text-[#002A7B]' : 'text-gray-700'
              }`}
            >
              Our Services
            </Link>
            <Link
              to="/contact"
              className={`transition hover:text-[#002A7B] ${
                location.pathname === '/contact' ? 'text-[#002A7B]' : 'text-gray-700'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Hamburger Menu Button (Mobile) */}
          <button
            onClick={toggleMobileMenu}
            className="hamburger-btn md:hidden p-2 rounded-md text-gray-700 hover:text-[#002A7B] hover:bg-gray-100 transition-colors duration-200 z-50 relative"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-5 h-0.5 bg-current transform transition duration-300 ease-in-out ${
                  mobileMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-current transform transition duration-300 ease-in-out ${
                  mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 bg-current transform transition duration-300 ease-in-out ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
                }`}
              ></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity duration-300" />
      )}

      {/* Mobile Slide-out Menu */}
      <div
        className={`mobile-menu md:hidden fixed top-0 left-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out font-['Open_Sans'] ${
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={closeMobileMenu}
            className="p-2 text-gray-600 hover:text-gray-800"
            aria-label="Close menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Links */}
        <div className="px-8 py-4 space-y-8">
          <Link
            to="/"
            className={`block text-lg font-medium transition-colors duration-200 ${
              location.pathname === '/'
                ? 'text-[#002A7B]'
                : 'text-gray-700 hover:text-[#002A7B]'
            }`}
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          
          <Link
            to="/about"
            className={`block text-lg font-medium transition-colors duration-200 ${
              location.pathname === '/about'
                ? 'text-[#002A7B]'
                : 'text-gray-700 hover:text-[#002A7B]'
            }`}
            onClick={closeMobileMenu}
          >
            About Us
          </Link>
          
          <Link
            to="/services"
            className={`block text-lg font-medium transition-colors duration-200 ${
              location.pathname === '/services'
                ? 'text-[#002A7B]'
                : 'text-gray-700 hover:text-[#002A7B]'
            }`}
            onClick={closeMobileMenu}
          >
            Our Services
          </Link>
          
          <Link
            to="/contact"
            className={`block text-lg font-medium transition-colors duration-200 ${
              location.pathname === '/contact'
                ? 'text-[#002A7B]'
                : 'text-gray-700 hover:text-[#002A7B]'
            }`}
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
