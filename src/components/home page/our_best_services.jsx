import React, { useState } from 'react';
import service_1 from '../../assets/service_1.png';
import service_2 from '../../assets/service_2.png';
import service_3 from '../../assets/service_3.png';
import service_4 from '../../assets/service_4.png';
import service_5 from '../../assets/service_5.png';
import service_6 from '../../assets/service_6.png';
import service_7 from '../../assets/service_7.png';
import service_8 from '../../assets/service_8.png';
import service_9 from '../../assets/service_9.png';
import white_zigzag from '../../assets/white_zigzag.png';

const services = [
  { title: 'Financial Analysis', desc: 'Expert financial analysis providing insights for informed decision-making, optimizing strategies and maintaining financial performance and stability.', icon: service_1 },
  { title: 'Tax & Regulatory', desc: 'Gargs & Co specializes in navigating complex tax laws and providing expert guidance on compliance solutions.', icon: service_2 },
  { title: 'GST', desc: 'Expert guidance on Goods and Services Tax (GST) compliance, planning and implementation for businesses of all sizes and industries.', icon: service_3 },
  { title: 'Risk Advisory service', desc: 'Gargs & Co offers expert risk advisory services, identifying and mitigating potential risks to safeguard your financial interests effectively.', icon: service_4 },
  { title: 'Transaction Advisory Service', desc: 'Strategic guidance and analysis for mergers, acquisitions, and divestitures. Objective advice and minimizing risk for client transactions.', icon: service_5 },
  { title: 'Accounting & advisory service', desc: 'Tailored accounting advisory services providing strategic financial reporting, compliance, and decision-making for businesses.', icon: service_6 },
  { title: 'Cross-Platform Services', desc: 'Gargs & Co ensures seamless service delivery across multiple platforms.', icon: service_7 },
  { title: 'Development & Testing', desc: 'Gargs & Co rigorously develops and tests services for optimal performance.', icon: service_8 },
  { title: 'Specialized Service', desc: 'Gargs & Co offers specialized services tailored towards unique business needs with enhanced accuracy and objectivity.', icon: service_9 },
];

const OurBestServices = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="bg-black text-white py-12 sm:py-16 md:py-20 lg:py-20 px-4 flex justify-center items-center font-['Open_Sans']">
      <div className="w-full max-w-[1112px] flex flex-col justify-start">

        {/* Section header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-12">
          <h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-6xl mb-4 sm:mb-5 md:mb-4 lg:mb-4"
            style={{ fontFamily: '"Open Sans", sans-serif', fontWeight: 800 }}
          >
            Our Best Services
          </h2>
          <img
            src={white_zigzag}
            alt="divider"
            className="mx-auto w-6 sm:w-8 md:w-10 lg:w-12 h-auto"
          />
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-0">
          {services.map((service, index) => {
            const isLastColumn = (index + 1) % 3 === 0;
            const isLastRow = index >= services.length - 3;
            const isLastColumnSm = (index + 1) % 2 === 0;
            const isLastRowSm = index >= services.length - 2;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                className={`group p-7 sm:p-8 md:p-9 lg:p-6 flex items-start gap-4 sm:gap-5 md:gap-4 lg:gap-4 border-gray-700 transition-all duration-300 cursor-pointer min-h-[180px] sm:min-h-[200px] md:min-h-[180px]
                  ${!isLastColumn ? 'lg:border-r' : ''}
                  ${!isLastRow ? 'lg:border-b' : ''}
                  ${!isLastColumnSm ? 'sm:border-r lg:border-r-0' : ''}
                  ${!isLastRowSm ? 'sm:border-b lg:border-b-0' : ''}
                  ${index !== services.length - 1 ? 'border-b sm:border-b-0 lg:border-b' : ''}
                  ${isHovered ? 'bg-green-600' : ''}
                `}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onTouchStart={() => setHoveredIndex(index)}
                onTouchEnd={() => setTimeout(() => setHoveredIndex(null), 2000)}
              >
                {/* Icon flip on hover */}
                <img
                  src={service.icon}
                  alt={service.title}
                  className={`w-12 h-12 sm:w-13 sm:h-13 md:w-14 md:h-14 lg:w-10 lg:h-10 mt-1 flex-shrink-0 transition-transform duration-500 ${
                    isHovered ? 'scale-x-[-1]' : 'scale-x-[1]'
                  }`}
                />

                {/* Service text content */}
                <div className="flex-1 py-2">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-lg font-semibold mb-3 sm:mb-4 md:mb-3 lg:mb-1 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg lg:text-sm text-gray-300 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default OurBestServices;
