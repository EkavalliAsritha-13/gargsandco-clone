import React from 'react';
import blue_zigzag from '../../assets/blue_zigzag.png';

const ContactForm = () => {
  return (
    <div className="bg-gray-100 flex justify-center items-center py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 min-h-[600px] sm:min-h-[650px] lg:min-h-[700px] font-['Open_Sans']">
      <div className="w-full max-w-6xl bg-gray-100 text-center">
        
        {/* Heading */}
        <div className="mb-4 sm:mb-6">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            <span className="block sm:hidden">
              Request a Call
              <br />
              Back
            </span>
            <span className="hidden sm:inline">Request a Call Back</span>
          </h2>
        </div>

        {/* Subheading */}
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 mt-4 mb-6">
          WE ARE ALWAYS READY
        </p>

        {/* Divider */}
        <div className="my-6 sm:my-8">
          <img 
            src={blue_zigzag} 
            alt="divider" 
            className="mx-auto w-16 sm:w-20 md:w-24 h-auto" 
          />
        </div>

        {/* Contact Form */}
        <form className="w-full px-2 sm:px-4 lg:px-8 mt-8 sm:mt-10">
          {/* Input fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
            <input
              type="text"
              placeholder="Your Name*"
              className="w-full p-4 sm:p-5 border border-gray-300 rounded-md text-base sm:text-lg focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your-mail@gmail.com*"
              className="w-full p-4 sm:p-5 border border-gray-300 rounded-md text-base sm:text-lg focus:outline-none"
            />
            <input
              type="text"
              placeholder="Your Subject"
              className="w-full p-4 sm:p-5 border border-gray-300 rounded-md text-base sm:text-lg focus:outline-none sm:col-span-2 lg:col-span-1"
            />
          </div>

          {/* Message textarea */}
          <textarea
            placeholder="Comment*"
            rows={6}
            className="w-full p-4 sm:p-5 border border-gray-300 rounded-md text-base sm:text-lg focus:outline-none mb-8 sm:mb-10 resize-vertical min-h-[160px] sm:min-h-[180px]"
          />

          {/* Submit button */}
          <button
            type="submit"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 bg-[#12A85F] text-white font-semibold text-sm sm:text-base hover:bg-[#0f8c4f] transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
