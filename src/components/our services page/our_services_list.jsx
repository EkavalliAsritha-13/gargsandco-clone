import React, { useState } from 'react';

import icon1 from '../../assets/our_service_list_icon1.png';
import icon2 from '../../assets/our_service_list_icon2.png';
import icon3 from '../../assets/our_service_list_icon3.png';
import icon4 from '../../assets/our_service_list_icon4.png';
import icon5 from '../../assets/our_service_list_icon5.png';
import icon6 from '../../assets/our_service_list_icon6.png';
import icon7 from '../../assets/our_service_list_icon7.png';

const services = [
  {
    icon: icon1,
    title: 'Audit & assurance',
    description:
      'Our audit and assurance services ensure transparency, accuracy, and compliance, providing clients with confidence and trust in their financial statements.',
  },
  {
    icon: icon2,
    title: 'Tax & regulatory',
    description:
      'Gargs & Co specializes in navigating complex tax laws and regulatory requirements, providing expert guidance and compliance solutions.',
  },
  {
    icon: icon3,
    title: 'GST',
    description:
      'Expert guidance on Goods and Services Tax (GST) compliance, planning, and optimization for businesses of all sizes and industries.',
  },
  {
    icon: icon4,
    title: 'Risk Advisory services',
    description:
      'Gargs & Co offers expert risk advisory services, identifying and mitigating potential risks to safeguard your financial interests effectively.',
  },
  {
    icon: icon5,
    title: 'Transaction Advisory Services',
    description:
      "Strategic guidance and analysis for mergers, acquisitions, and divestitures, optimizing value and minimizing risk for clients' transactions.",
  },
  {
    icon: icon6,
    title: 'Accounting and Advisory Services',
    description:
      'Tailored accounting advisory services providing strategic guidance and expertise in financial reporting, compliance, and decision-making for businesses.',
  },
  {
    icon: icon7,
    title: 'Specialized services',
    description:
      'Our specialized services offer tailored solutions, leveraging expertise and innovation to address unique financial needs and objectives effectively.',
  },
];

const OurServicesList = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleTouch = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="bg-white py-14 px-4 font-['Open_Sans']">
      <div className="w-full max-w-[1000px] mx-auto">
        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
          {services.map((service, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center group transition duration-300 cursor-pointer"
                onTouchStart={() => handleTouch(index)}
              >
                {/* Icon */}
                <img
                  src={service.icon}
                  alt={service.title}
                  className={`h-14 w-14 object-contain mb-4 transition-transform duration-500 
                    group-hover:-scale-x-100
                    ${isActive ? '-scale-x-100' : ''}`}
                />

                {/* Title */}
                <h3
                  className={`text-lg font-semibold mb-2 transition-colors duration-300 
                    group-hover:text-green-600
                    ${isActive ? 'text-green-600' : ''}`}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-base text-gray-600">{service.description}</p>
              </div>
            );
          })}

          {/* Spacer for grid symmetry */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </div>
  );
};

export default OurServicesList;
