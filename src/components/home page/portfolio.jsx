import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import blue_zigzag from '../../assets/blue_zigzag.png';
import portfolio_bg from '../../assets/portfolio_bg.jpg';

const stats = [
  { number: 10, label: 'Years Of Experience' },
  { number: 349, label: 'Projects Complete' },
  { number: 3261, label: 'Satisfied Customers' },
  { number: 18, label: 'Award Winning' },
];

const Portfolio = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <div className="bg-white text-black flex flex-col items-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 font-['Open_Sans']">
      {/* Heading */}
      <div className="w-full max-w-7xl text-center mb-6 sm:mb-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
          Our Portfolio
        </h2>
        <div className="flex justify-center mt-2">
          <img
            src={blue_zigzag}
            alt="zigzag"
            className="w-16 sm:w-20 md:w-24 lg:w-32 h-auto object-contain"
          />
        </div>
      </div>

      {/* Description */}
      <div className="w-full max-w-6xl mx-auto mb-6 sm:mb-8">
        <p className="text-base sm:text-lg lg:text-xl leading-7 sm:leading-8 text-gray-600 text-center px-2 sm:px-4">
          Gargs & Co proudly presents our diverse portfolio of services, meticulously crafted to meet the evolving needs of our clients. With decades of collective experience in chartered accounting, we offer comprehensive solutions tailored to optimize financial success. From expert financial analysis to strategic investment planning, we empower clients with personalized guidance and support. Our commitment to innovation drives us to foster open dialogue and refine ideas for maximum impact. Seamlessly integrating social media and analytics expertise, we ensure our services transcend platforms, delivering measurable results. At Gargs & Co, we evolve, test, and devolve services rigorously to achieve excellence in every endeavor.
        </p>
      </div>

      {/* Button */}
      <div className="mb-8 sm:mb-12 lg:mb-16">
        <button
          className="text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 lg:px-8 rounded-md text-sm sm:text-base hover:opacity-90 transition-opacity duration-300"
          style={{ backgroundColor: '#153BA3' }}
        >
          View Our Portfolio
        </button>
      </div>

      {/* Stats Section */}
      <div
        ref={ref}
        className="relative w-full"
        style={{ minHeight: '350px' }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${portfolio_bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
          }}
        />
        {/* Dark overlay */}
        <div 
          className="absolute inset-0 bg-black"
          style={{ opacity: 0.6 }}
        />

        {/* Stats */}
        <div className="relative z-10 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 text-center text-white">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center py-4 sm:py-2">
                  <h3
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium mb-3 sm:mb-4"
                    style={{ fontFamily: '"Roboto", sans-serif' }}
                  >
                    {inView ? <CountUp end={stat.number} duration={1.5} separator="" /> : 0}
                  </h3>
                  <p
                    className="text-base sm:text-lg lg:text-xl font-normal text-center leading-tight px-2"
                    style={{ fontFamily: 'Verdana, sans-serif' }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Portfolio;
