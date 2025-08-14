import React from 'react';

const TaxAndRegulatory = () => {
  return (
    // Page container
    <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 font-['Open_Sans']">
      {/* Content wrapper */}
      <div className="w-full max-w-[1600px] px-6 text-gray-600">

        {/* Main title - single line */}
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold lg:font-semibold mb-4 text-left text-[#1e2939] leading-snug whitespace-nowrap">
          Tax & Regulatory Services
        </h1>

        <p className="text-lg mb-8">
          At Gargs & Co, we offer comprehensive tax and regulatory services to help individuals and businesses navigate the complex world of taxation and compliance with ease.
        </p>

        {/* What We Do */}
        <h2 className="text-2xl font-semibold mb-3 mt-8 text-center text-gray-600">
          What we do
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li>
            <b>Tax Planning</b> : We provide strategic tax planning services to minimize tax liabilities and maximize savings, ensuring compliance with relevant tax laws and regulations.
          </li>
          <li>
            <b>Tax Preparation</b> : Our team of experts handles all aspects of tax preparation, from gathering necessary documents to filing tax returns accurately and on time.
          </li>
          <li>
            <b>Compliance</b> : We assist clients in understanding and complying with various tax laws and regulations, including income tax, sales tax, payroll tax, and more.
          </li>
          <li>
            <b>Regulatory Compliance</b> : We help businesses navigate regulatory requirements and ensure compliance with laws and regulations relevant to their industry, minimizing risks and avoiding penalties.
          </li>
        </ul>

        {/* How We Help */}
        <h2 className="text-2xl font-semibold mb-3 text-center text-gray-600">
          How We Help
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li>
            <b>Maximized Savings</b> : Our tax planning strategies help individuals and businesses maximize tax savings, allowing them to keep more of their hard-earned money.
          </li>
          <li>
            <b>Reduced Risks</b> : By ensuring compliance with tax and regulatory requirements, we help mitigate risks and avoid potential penalties, protecting clients from legal and financial consequences.
          </li>
          <li>
            <b>Peace of Mind</b> : Our expert guidance and support provide clients with peace of mind, knowing that their tax and regulatory obligations are being managed effectively and efficiently.
          </li>
        </ul>

        {/* Why Choose Us */}
        <h2 className="text-2xl font-semibold mb-3 text-center text-gray-600">
          Why Choose Us
        </h2>
        <ul className="list-disc pl-5 space-y-2 mb-8">
          <li>
            <b>Expertise</b> : Our team of tax professionals has extensive knowledge and expertise in tax laws and regulations, ensuring accurate and reliable advice tailored to your specific situation.
          </li>
          <li>
            <b>Personalized Service</b> : We take a personalized approach to each client, understanding their unique needs and goals to provide customized solutions that meet their requirements.
          </li>
          <li>
            <b>Timely and Efficient</b> : We prioritize timeliness and efficiency in our tax and regulatory services, ensuring that all filings and compliance requirements are met promptly and accurately.
          </li>
        </ul>

        {/* Contact Us */}
        <h2 className="text-2xl font-semibold mb-3 text-center text-gray-600">
          Contact Us
        </h2>
        <p className="mb-2">
          Ready to take the stress out of tax and regulatory compliance? Contact Gargs & Co today to learn more about how our tax and regulatory services can benefit you or your business.
        </p>

      </div>
    </div>
  );
};

export default TaxAndRegulatory;
