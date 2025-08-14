import React from 'react';

const Welcome = () => {
  return (
    // Main container
    <div className="bg-white text-gray-800 font-sans flex flex-col items-center justify-center py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 mx-auto min-h-screen">
      
      {/* Heading */}
      <div className="text-center mb-6 sm:mb-8 lg:mb-12 w-full max-w-4xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight">
          Welcome to Gargs & Co.
        </h1>
      </div>

      {/* Main content */}
      <div className="w-full max-w-5xl text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-700 space-y-4 sm:space-y-5 lg:space-y-6 px-2 sm:px-4 lg:px-8 mb-12 sm:mb-16 lg:mb-20">
        <p className="text-justify">
          Welcome to Gargs & Co, where excellence meets expertise in the realm of chartered accounting.
          Founded with a vision to redefine the standards of financial services, Gargs & Co has established
          itself as a trusted partner for individuals and businesses alike. With a legacy of integrity,
          innovation, and impeccable service, we take pride in our commitment to delivering tailored
          solutions that drive sustainable financial success.
        </p>

        <p className="text-justify">
          At the heart of Gargs & Co lies a team of seasoned chartered accountants, each bringing
          decades of experience and a deep-rooted passion for excellence. Our professionals are not just
          numbers experts; they are strategic advisors, partners in progress, and trusted confidants
          dedicated to helping clients navigate the complexities of modern finance with confidence.
        </p>

        <p className="text-justify">
          Our comprehensive suite of services encompasses every aspect of chartered accounting,
          ensuring that our clients have access to the expertise they need, precisely when they need it.
          From tax planning and preparation to financial reporting, auditing, and beyond, we offer a holistic
          approach that addresses the unique needs and objectives of each client.
        </p>

        <p className="text-justify">
          What sets Gargs & Co apart is our relentless pursuit of innovation and excellence. We
          understand that the financial landscape is constantly evolving, and we are committed to staying
          ahead of the curve. By leveraging cutting-edge technology, data-driven insights, and industry best
          practices, we empower our clients to make informed decisions and seize opportunities for
          growth.
        </p>

        <p className="text-justify">
          But our dedication to excellence goes beyond the services we provide. At Gargs & Co, we believe
          in fostering genuine relationships built on trust, transparency, and integrity. We take the time to
          understand our clients' goals, challenges, and aspirations, working collaboratively to develop
          tailored solutions that align with their vision for success.
        </p>

        <p className="text-justify">
          In addition to our core accounting services, we offer specialized expertise in areas such as
          financial analysis, investment planning, and strategic development. Whether you're a startup
          looking to establish a solid financial foundation or a seasoned entrepreneur seeking to optimize
          your portfolio, Gargs & Co has the knowledge and resources to help you achieve your goals.
        </p>

        <p className="text-justify">
          Furthermore, we recognize the importance of leveraging digital platforms to enhance our clients'
          experience and streamline processes. Through our social media and analytics services, we help
          businesses harness the power of data-driven insights to drive engagement, enhance brand
          visibility, and unlock new opportunities for growth.
        </p>

        <p className="text-justify">
          At Gargs & Co, our mission is simple: to empower individuals and businesses to achieve their full
          financial potential. Whether you're just starting your journey or looking to take your business to
          new heights, we're here to provide the expertise, guidance, and support you need to succeed.
          Welcome to Gargs & Co, where your success is our priority.
        </p>
      </div>
    </div>
  );
};

export default Welcome;
