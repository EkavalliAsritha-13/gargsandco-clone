import React, { useRef, useEffect, useState } from "react";
import green_zigzag from '../../assets/green_zigzag.png';

function AnimatedCounter({ target, label, duration = 500, trigger }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) {
      setCount(0);
      return;
    }
    let start = 0;
    const increment = target / (duration / 16);
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(interval);
  }, [trigger, target, duration]);

  return (
    <div className="flex flex-col items-center justify-center">
      <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">{count}</span>
      <span
        className="text-sm sm:text-base lg:text-lg text-white mt-2"
        style={{ fontFamily: 'Verdana, sans-serif' }}
      >
        {label}
      </span>
    </div>
  );
}

export default function RecentWork() {
  const statsRef = useRef();
  const [statsInView, setStatsInView] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setStatsInView(entry.isIntersecting);
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, []);

  return (
    <section className="w-full overflow-x-hidden py-12 sm:py-16 lg:py-20 bg-white relative">
      {/* Container */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 sm:mb-6"
            style={{ fontFamily: '"Open Sans", sans-serif' }}
          >
            Recent Work
          </h2>
          <img
            src={green_zigzag}
            alt="Green Zigzag"
            className="w-16 sm:w-20 md:w-24 h-auto object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="text-gray-700 text-left space-y-6 sm:space-y-8 mb-16 sm:mb-20 lg:mb-24">
          <div className="text-sm sm:text-base lg:text-lg leading-relaxed">
            <strong>1. Startup Success Story:</strong> We had the pleasure of working with a promising startup in the tech industry, providing comprehensive financial consulting and strategic planning services. Through our guidance and support, the startup was able to secure funding, expand their operations, and achieve significant growth within a short period of time.
          </div>
          <div className="text-sm sm:text-base lg:text-lg leading-relaxed">
            <strong>2. Small Business Growth:</strong> A local family-owned business approached us seeking assistance with financial management and growth strategies. Leveraging our expertise in budgeting, cash flow management, and tax planning, we helped the business optimize their operations, increase profitability, and position themselves for long-term success in a competitive market.
          </div>
          <div className="text-sm sm:text-base lg:text-lg leading-relaxed">
            <strong>3. Corporate Restructuring:</strong> We collaborated with a multinational corporation undergoing a major restructuring initiative. Our team provided expert financial analysis, risk assessment, and strategic guidance throughout the process, ensuring a smooth transition and minimizing disruptions to the company's operations.
          </div>
          <div className="text-sm sm:text-base lg:text-lg leading-relaxed">
            <strong>4. Individual Financial Planning:</strong> We worked closely with several high-net-worth individuals to develop personalized investment plans tailored to their unique financial goals and risk tolerances. By leveraging our expertise in portfolio management and wealth preservation strategies, we helped our clients build and protect their wealth for future generations.
          </div>
          <div className="text-sm sm:text-base lg:text-lg leading-relaxed">
            <strong>5. Nonprofit Support:</strong> Garg & Co is committed to giving back to the community, and we are proud to have supported several nonprofit organizations with pro bono financial consulting services. From budgeting and grant management to compliance and reporting, we have helped these organizations maximize their impact and fulfill their missions.
          </div>
          <div className="pt-4 text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed">
            These are just a few examples of the recent work we have done at Gargs & Co. Each client engagement is a testament to our commitment to excellence, innovation, and client satisfaction. Whether you're a startup looking to take your business to the next level or a multinational corporation seeking strategic financial guidance, we have the expertise and resources to help you succeed.
          </div>
        </div>
      </div>

      {/* Stats */}
      <div
        ref={statsRef}
        className="w-full h-[400px] sm:h-[450px] relative"
        style={{
          backgroundImage: "url('/src/assets/about_recent_work_bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60" />
        <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 text-center">
            <AnimatedCounter target={10} label="Years Of Experience" trigger={statsInView} duration={600} />
            <AnimatedCounter target={349} label="Projects Complete" trigger={statsInView} duration={800} />
            <AnimatedCounter target={3261} label="Satisfied Customers" trigger={statsInView} duration={1000} />
            <AnimatedCounter target={18} label="Award Winning" trigger={statsInView} duration={600} />
          </div>
        </div>
      </div>
    </section>
  );
}
