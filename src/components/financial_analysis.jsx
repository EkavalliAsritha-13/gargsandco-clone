import React from 'react';

const FinancialAnalysis = () => {
  return (
    // Page container
    <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 font-['Open_Sans']">
      {/* Content wrapper */}
      <div className="w-full max-w-[1600px] px-6 text-gray-600">
        
        {/* Main title - further reduced font size */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 text-left text-[#232B39] leading-snug whitespace-nowrap -ml-4">
          Financial Analysis
        </h1>

        <p className="text-lg mb-8">
          At Gargs & Co, we offer expert financial analysis services to help you make
          informed decisions and maximize your financial potential. Our team of
          professionals specializes in analysing financial data to provide valuable
          insights into your current financial situation and future prospects.
        </p>

        {/* What We Do */}
        <h2 className="text-2xl font-semibold mb-3 mt-8 text-center text-gray-600">
          What We Do
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li>
            <b>Comprehensive Review</b> : We conduct a thorough review of your financial statements,
            including income statements, balance sheets, and cash flow statements, to gain a clear
            understanding of your financial position.
          </li>
          <li>
            <b>Trend Analysis</b> : We analyse historical financial data to identify trends and
            patterns that can help predict future performance and inform strategic decision-making.
          </li>
          <li>
            <b>Ratio Analysis</b> : We calculate key financial ratios to evaluate your financial
            health and performance.
          </li>
          <li>
            <b>Benchmarking</b> : We compare your performance to industry benchmarks and competitors.
          </li>
        </ul>

        {/* How We Help */}
        <h2 className="text-2xl font-semibold mb-3 text-center text-gray-600">
          How We Help
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li>
            <b>Informed Decision-Making</b> : Our analysis provides you insights to make informed
            investment, operational, and strategic decisions.
          </li>
          <li>
            <b>Optimized Strategies</b> : We help you develop strategies to optimize performance,
            reduce risks, and achieve goals.
          </li>
          <li>
            <b>Maximized Financial Performance</b> : We identify opportunities for growth and
            efficiency.
          </li>
        </ul>

        {/* Why Choose Us */}
        <h2 className="text-2xl font-semibold mb-3 text-center text-gray-600">
          Why Choose Us
        </h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <b>Expertise</b> : Our team has extensive experience in financial analysis.
          </li>
          <li>
            <b>Customized Approach</b> : We tailor our analysis to your unique requirements.
          </li>
          <li>
            <b>Commitment to Excellence</b> : We deliver accurate and timely reports to help you
            succeed.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FinancialAnalysis;
