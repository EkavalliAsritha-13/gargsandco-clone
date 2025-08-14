import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/nav_logo.png';

const Footer = () => {
  const navigate = useNavigate();

  const services = [
    'GST',
    'Financial analysis',
    'Tax & Regulatory',
    'Risk advisory Services',
    'Audit & Assurance',
    'Transaction advisory Service',
    'Accounting & Advisory Service',
    'Specialized Service',
  ];

  const handleNavigate = (service) => {
    if (service === 'Financial analysis') navigate('/financial_analysis');
    if (service === 'Tax & Regulatory') navigate('/tax_and_regulatory');
  };

  return (
    <footer
      className="text-white w-full font-sans flex flex-col"
      style={{
        background:
          'linear-gradient(to bottom, #000000 0%, #000000 40%, #003300 70%, #004400 100%)',
      }}
    >
      {/* Main content */}
      <div className="w-full flex-grow" style={{ minHeight: '500px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 lg:gap-20">
            {/* Left: logo and description */}
            <div>
              <img
                src={logo}
                alt="Gargs & Co Logo"
                className="w-40 sm:w-48 lg:w-56 mb-6 sm:mb-8"
              />
              <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-md font-['Open_Sans']">
                At Gargs&nbsp;&amp;&nbsp;Co, unlock your financial potential with decades of
                expertise and innovative solutions. From tax planning to investment strategies,
                we tailor services to meet your unique needs. Contact us today!
              </p>
            </div>

            {/* Right: services list */}
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 sm:mb-8">
                Our Services
              </h2>
              <ul className="space-y-4 sm:space-y-5">
                {services.map((service) => (
                  <li
                    key={service}
                    onClick={() => handleNavigate(service)}
                    className={`flex items-center gap-3 text-sm sm:text-base lg:text-lg ${
                      service === 'Financial analysis' || service === 'Tax & Regulatory'
                        ? 'cursor-pointer hover:text-green-400 transition-colors duration-200'
                        : ''
                    }`}
                  >
                    <span
                      className="text-green-500 font-bold"
                      style={{ fontSize: '14px', lineHeight: '1' }}
                    >
                      —
                    </span>
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="w-full h-px bg-gray-600" />

      {/* Copyright */}
      <div className="text-center py-6 sm:py-7 lg:py-8 font-['Open_Sans']">
        <p className="text-xs sm:text-sm lg:text-base text-gray-300 px-4 leading-relaxed">
          Copyright&nbsp;@&nbsp;2023&nbsp;Gargs&amp;co.&nbsp;
          Designed and&nbsp;Developed by{' '}
          <a
            href="https://inspiringwave.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-semibold hover:text-green-400 transition-colors duration-200"
          >
            INSPIRING&nbsp;WAVE
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
