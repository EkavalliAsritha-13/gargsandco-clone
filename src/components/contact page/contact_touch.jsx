import greenZigzag from '../../assets/green_zigzag.png';

const ContactTouch = () => {
  return (
    // Contact section container with Open Sans font
    <div className="w-full bg-gray-100 pt-8 pb-16 flex flex-col items-center font-['Open_Sans']">
      {/* Heading */}
      <h2 className="text-5xl font-bold text-center mb-3 tracking-tight text-gray-900">
        Get In Touch
      </h2>
      {/* Subheading */}
      <p className="text-lg text-center text-gray-700 mb-5">
        Get started with your amazing project
      </p>
      {/* Decorative zigzag */}
      <img
        src={greenZigzag}
        alt="Green Zigzag Decorative Element"
        className="mt-0 mb-10 w-16"
        style={{ filter: 'drop-shadow(0 1px 0 #34d399)' }}
      />
      {/* Contact form */}
      <form className="w-full flex flex-col items-center">
        {/* Input fields grid */}
        <div className="w-full max-w-[90%] md:max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-7">
          <input
            type="text"
            placeholder="Your Name*"
            className="px-4 py-3 border border-gray-300 rounded bg-white focus:outline-none text-base transition-all duration-200"
          />
          <input
            type="email"
            placeholder="Your-mail@gmail.com*"
            className="px-4 py-3 border border-gray-300 rounded bg-white focus:outline-none text-base transition-all duration-200"
          />
          <input
            type="text"
            placeholder="Your Subject"
            className="px-4 py-3 border border-gray-300 rounded bg-white focus:outline-none text-base transition-all duration-200"
          />
        </div>
        {/* Comment textarea */}
        <textarea
          placeholder="Comment*"
          className="w-full max-w-[90%] md:max-w-6xl px-4 py-5 border border-gray-300 rounded bg-white focus:outline-none text-base mb-6 transition-all duration-200"
          rows={6}
        />
        {/* Submit button */}
        <button
          type="submit"
          className="w-40 py-3 bg-green-600 text-white font-semibold text-lg hover:bg-green-700 transition-all rounded-none"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactTouch;
