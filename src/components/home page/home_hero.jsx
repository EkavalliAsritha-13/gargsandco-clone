import React, { useState, useEffect, useRef } from 'react';
import hero_1 from '../../assets/hero_1.jpg';
import hero_2 from '../../assets/hero_2.jpg';
import hero_3 from '../../assets/hero_3.jpg';

const SLIDE_DURATION = 3500; // Time each slide stays visible
const FADE_DURATION = 600;   // Fade transition duration

// Source slides
const rawSlides = [
  {
    image: hero_1,
    tagline: "WE'RE HERE TO HELP!",
    heading: "You're Building The Future.",
    text: "Welcome to Gargs & Co.! We're dedicated to providing top-tier chartered accounting services tailored to your unique needs. With our expertise and personalized approach, we strive to exceed your expectations and help you achieve financial success. Explore our services and let's embark on a journey toward prosperity together.",
    animation: 'zoom-out'
  },
  {
    image: hero_2,
    tagline: "THE WAY FORWARD",
    heading: "Evolve Everyday",
    text: "At Gargs & Co., evolution is our ethos. Every day, we embrace change, adapt to industry advancements, and refine our strategies to better serve our clients. This commitment to growth and improvement drives us to excel, ensuring that we remain at the forefront of the accounting profession.",
    animation: 'zoom-in'
  },
  {
    image: hero_3,
    tagline: "YOUR IMAGINATION",
    heading: "Our Innovation",
    text: "At Gargs & Co., we've revolutionized traditional accounting practices with innovative digital solutions. Our cutting-edge technology streamlines processes, enhances accuracy, and delivers real-time insights, empowering clients to make informed financial decisions with confidence. Experience the future of accounting with us.",
    animation: 'zoom-out'
  },
];

// Duplicate first slide at end for smooth loop
const heroSlides = [...rawSlides, rawSlides[0]];

const HomeHero = () => {
  const [current, setCurrent] = useState(0);
  const [contentVisible, setContentVisible] = useState(true);
  const [showStep, setShowStep] = useState(0); // Controls staggered text reveal
  const [instant, setInstant] = useState(false); // Prevents unwanted transition on loop reset
  const timeoutRef = useRef(null);

  // Auto-slide logic
  useEffect(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setContentVisible(false);
      setTimeout(() => {
        if (current === heroSlides.length - 1) {
          setInstant(true);
          setCurrent(0);
          setTimeout(() => setInstant(false), 30);
        } else {
          setCurrent(current + 1);
        }
        setContentVisible(true);
      }, FADE_DURATION);
    }, SLIDE_DURATION);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  // Controls sequential step animation for tagline, heading, text, and button
  useEffect(() => {
    setShowStep(0);
    if (!contentVisible) return;
    const timers = [
      setTimeout(() => setShowStep(1), 200),
      setTimeout(() => setShowStep(2), 450),
      setTimeout(() => setShowStep(3), 700),
      setTimeout(() => setShowStep(4), 950),
    ];
    return () => timers.forEach(clearTimeout);
  }, [current, contentVisible]);

  // Manual navigation handler
  const manualSlide = (dir) => {
    clearTimeout(timeoutRef.current);
    setContentVisible(false);
    setTimeout(() => {
      let next = current + dir;
      if (next < 0) next = rawSlides.length - 1;
      else if (next >= rawSlides.length) next = 0;
      setCurrent(next);
      setContentVisible(true);
    }, FADE_DURATION);
  };

  // Calculates X translation for slide movement
  const getTransform = () => {
    return `translateX(-${current * 100}vw)`;
  };

  return (
    <div className="relative w-screen h-[720px] sm:h-[600px] xs:h-[520px] max-xs:h-[480px] overflow-hidden">
      
      {/* Slides container */}
      <div
        className={`flex h-full ${instant ? '' : 'transition-transform duration-600 ease-in-out'}`}
        style={{
          width: `${heroSlides.length * 100}vw`,
          transform: getTransform()
        }}
      >
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className="relative w-screen h-full flex-shrink-0 overflow-hidden"
          >
            <img
              src={slide.image}
              alt={slide.heading}
              className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[3500ms] ease-in-out ${
                slide.animation === 'zoom-in'
                  ? (current === idx ? 'scale-[1.20]' : 'scale-100') 
                  : (current === idx ? 'scale-100' : 'scale-[1.15]') 
              }`}
              style={{ zIndex: 1 }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(90deg,rgba(0,0,0,0.74) 40%,rgba(0,0,0,0.2) 100%)",
                zIndex: 2,
              }}
            />
          </div>
        ))}
      </div>

      {/* Slide content */}
      <div
        className={`absolute z-10 flex flex-col justify-center h-full px-4 sm:px-8 md:pl-12 transition-opacity duration-500 ${
          contentVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ maxWidth: 460, top: 0 }}
      >
        <div className={`transition-all duration-500 ${showStep > 0 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <button className="bg-[#002A7B] text-white text-xs sm:text-sm md:text-base font-bold py-2 px-4 sm:px-5 mb-3 rounded-sm shadow-md uppercase font-['Open_Sans']">
            {heroSlides[current].tagline}
          </button>
        </div>
        <h1 className={`text-white text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight mb-4 transition-all duration-500 font-[Verdana] ${showStep > 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          {heroSlides[current].heading}
        </h1>

        <p className={`text-white text-sm sm:text-base md:text-lg font-normal mb-6 leading-relaxed transition-all duration-500 font-[Verdana] ${showStep > 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          {heroSlides[current].text}
        </p>

        <div className={`transition-all duration-500 ${showStep > 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <button className="bg-[#002A7B] text-white font-bold text-sm sm:text-base py-2 sm:py-3 px-6 sm:px-8 rounded-sm shadow-md">
            Read More
          </button>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() => manualSlide(-1)}
        className="absolute left-2 sm:left-6 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/40 hover:bg-green-600 transition duration-200 z-20"
        aria-label="Prev Slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => manualSlide(1)}
        className="absolute right-2 sm:right-6 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/40 hover:bg-green-600 transition duration-200 z-20"
        aria-label="Next Slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default HomeHero;
