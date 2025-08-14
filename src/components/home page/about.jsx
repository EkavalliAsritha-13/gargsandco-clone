import React from 'react';
import about_bg from '../../assets/about_bg.jpg';
import blue_zigzag from '../../assets/blue_zigzag.png';

const About = () => {
  const systemUIFont = 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif';
  const trebuchetFont = '"Trebuchet MS", sans-serif';

  return (
    <div className="bg-white py-6 sm:py-8 md:py-12 lg:py-16">
      {/* Section heading and intro text */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6 sm:mb-8 md:mb-12 max-w-[90rem]">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-800 mb-3 sm:mb-4 font-['Open_Sans']"
          style={{ fontWeight: 800 }}
        >
          About Garg's &amp; Co.
        </h2>
        <p
          className="
            text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl text-gray-600
            max-w-[68rem] mx-auto leading-relaxed px-2 sm:px-4 font-['Open_Sans']
          "
        >
          "At Gargs &amp; Co, we provide comprehensive chartered accounting services, including tax preparation,
          financial consulting, auditing, and more, tailored to meet the unique needs of our clients for
          sustainable financial success."
        </p>
        <img
          src={blue_zigzag}
          alt="Blue Zigzag"
          className="mx-auto mt-3 sm:mt-4 md:mt-6 h-3 sm:h-4 md:h-6 lg:h-8 mb-3 sm:mb-4 md:mb-8"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="relative flex flex-col lg:flex-row shadow-2xl rounded-lg overflow-hidden" style={{ minHeight: '350px' }}>
          {/* Left section - experience details */}
          <div className="bg-blue-900 bg-opacity-90 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10 lg:w-[30%]">
            <div className="text-white text-center lg:text-left max-w-lg w-full">
              <h3
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-2 sm:mb-3"
                style={{ fontFamily: systemUIFont, fontWeight: 600 }}
              >
                10+
              </h3>
              <p
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-3 sm:mb-4"
                style={{ fontFamily: systemUIFont }}
              >
                Years Of<br />Experience
              </p>
              <div className="w-12 sm:w-16 md:w-20 h-0.5 bg-blue-200 my-3 sm:my-4 mx-auto lg:mx-0" />
              <p
                className="text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6 text-blue-200"
                style={{ fontFamily: trebuchetFont }}
              >
                "At Gargs &amp; Co, we boast decades of collective experience in chartered accounting, offering
                seasoned expertise and a proven track record of success."
              </p>
              <p
                className="text-sm sm:text-base md:text-lg lg:text-xl font-bold"
                style={{ fontFamily: systemUIFont }}
              >
                CA Adarshan Reddy G
              </p>
              <p
                className="text-xs sm:text-sm md:text-base text-blue-300"
                style={{ fontFamily: systemUIFont }}
              >
                Founder Gargs &amp; Co.
              </p>
            </div>
          </div>

          {/* Right section - background image with overlay text */}
          <div
            className="relative bg-cover bg-center lg:w-[70%]"
            style={{
              backgroundImage: `url(${about_bg})`,
              minHeight: '250px',
            }}
          >
            <div className="absolute inset-0 bg-black opacity-30" />
            <div className="absolute bottom-3 sm:bottom-4 md:bottom-6 lg:bottom-8 left-3 sm:left-4 md:left-6 lg:left-20 text-white font-['Open_Sans']">
              <span className="text-sm sm:text-base md:text-lg lg:text-xl font-medium leading-tight">
                Know<br />About Us
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
