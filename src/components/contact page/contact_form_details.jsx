import { useState, useEffect } from 'react';
import contact_page_info_icon1 from '../../assets/contact_page_info_icon1.png';
import contact_page_info_icon2 from '../../assets/contact_page_info_icon2.png';
import contact_page_info_icon3 from '../../assets/contact_page_info_icon3.png';

const contactDetails = [
  {
    icon: contact_page_info_icon1,
    title: 'Address Location',
    description: (
      <span className="block leading-relaxed text-center">
        Flat no 105, Surekha Chambers,<br />
        Pillar no 1434, Ameerpet,<br />
        Hyderabad 500016
      </span>
    ),
  },
  {
    icon: contact_page_info_icon2,
    title: 'Email Address',
    description: <span>info@gargsandco.com</span>,
  },
  {
    icon: contact_page_info_icon3,
    title: 'Phone Number',
    description: <span>+91 810 680 4211</span>,
    customSize: 'w-20 h-14', // reduced size for phone icon
  },
];

const ContactFormDetails = () => {
  // Detect mobile screen size
  const [flippedIndex, setFlippedIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMobileFlip = (idx) => {
    if (isMobile) {
      setFlippedIndex(flippedIndex === idx ? null : idx);
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-8 py-10 bg-white min-h-[400px] font-['Open_Sans']">
      {/* Contact detail items */}
      {contactDetails.map((item, idx) => {
        const isFlipped =
          (isMobile && flippedIndex === idx) ||
          (!isMobile && hoveredIndex === idx);

        return (
          <div
            key={idx}
            className="flex flex-col items-center text-center w-full md:w-1/3 px-4 cursor-pointer"
            onClick={() => handleMobileFlip(idx)}
            onMouseEnter={() => !isMobile && setHoveredIndex(idx)}
            onMouseLeave={() => !isMobile && setHoveredIndex(null)}
          >
            <div
              className={`${
                item.customSize || 'w-28 h-20'
              } mb-4 transition-transform duration-300 transform`}
            >
              <img
                src={item.icon}
                alt={item.title}
                className={`transition-transform duration-300 ${
                  isFlipped ? '-scale-x-100 scale-105' : 'scale-100'
                }`}
              />
            </div>
            <div className="font-semibold text-xl mb-2">{item.title}</div>
            <div className="text-gray-600 text-base">{item.description}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ContactFormDetails;
