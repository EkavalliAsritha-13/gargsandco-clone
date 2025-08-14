import React from 'react';
import feature_1 from '../../assets/feature_1.png';
import feature_2 from '../../assets/feature_2.png';
import feature_3 from '../../assets/feature_3.png';
import feature_4 from '../../assets/feature_4.png';

const Features = () => {
  // Feature data array — each object holds icon, title, and description
  const features = [
    {
      logo: feature_1,
      title: "Expert Advice",
      description:
        "Gargs & Co delivers expert advice honed by years of experience, guiding clients toward financial success with precision and insight.",
    },
    {
      logo: feature_2,
      title: "Result Based",
      description:
        "At Gargs & Co, our results-based approach ensures tangible outcomes, empowering clients to achieve their financial goals with confidence.",
    },
    {
      logo: feature_3,
      title: "Professional Team",
      description:
        "At Gargs & Co, our professional team consists of seasoned chartered accountants committed to delivering excellence through personalized service and expertise.",
    },
    {
      logo: feature_4,
      title: "Optimal Planning",
      description:
        "At Gargs & Co, we ensure optimal planning, maximizing efficiency and minimizing risks to help clients achieve their financial objectives.",
    },
  ];

  return (
    <div className="py-16 pb-4 bg-white">
      <div className="container mx-auto px-4 max-w-screen-xl">
        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flip-card w-full max-w-xs sm:max-w-sm mx-auto"
            >
              <div className="flip-card-inner">
                <div className="flip-card-front bg-transparent p-6 sm:p-8 rounded-md flex flex-col items-center justify-center">
                  {/* Feature Icon */}
                  <img
                    src={feature.logo}
                    alt={feature.title}
                    className="mx-auto h-16 sm:h-20 mb-4 hover-reflect"
                  />
                  {/* Feature Title */}
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 font-['Open_Sans']">
                    {feature.title}
                  </h3>
                  {/* Feature Description */}
                  <p className="text-gray-600 text-sm sm:text-base font-['Open_Sans']">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inline styles for flip animation */}
      <style jsx>{`
        .flip-card {
          background-color: transparent;
          perspective: 1000px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transform-style: preserve-3d;
        }
        .flip-card-front {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }
        .hover-reflect {
          transition: transform 0.8s ease-in-out;
        }
        .flip-card:hover .hover-reflect {
          transform: rotateY(180deg);
        }

        /* Mobile fix: let height adapt */
        @media (max-width: 640px) {
          .flip-card {
            max-width: 100%;
          }
          .flip-card-front {
            padding: 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Features;
