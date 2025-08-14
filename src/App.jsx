import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Topbar from './components/topbar';
import Navbar from './components/navbar';
import Footer from './components/footer';

// Home page components
import HomeHero from './components/home page/home_hero';
import Features from './components/home page/features';
import About from './components/home page/about';
import OurBestServices from './components/home page/our_best_services';
import Portfolio from './components/home page/portfolio';
import ContactForm from './components/home page/contact_form';

// About page components
import AboutHero from './components/about us page/about_hero';
import Welcome from './components/about us page/welcome';
import RecentWork from './components/about us page/recent_work';

// Our Services page components
import ServicesHero from './components/our services page/services_hero';
import OurServicesList from './components/our services page/our_services_list';

// Contact page components
import ContactHero from './components/contact page/contact_hero';
import ContactFormDetails from './components/contact page/contact_form_details';
import ContactTouch from './components/contact page/contact_touch';

// Additional service/detail pages
import FinancialAnalysis from './components/financial_analysis';
import TaxAndRegulatory from './components/tax_and_regulatory';

// Scroll-to-top button
import ScrollToTopButton from './components/scroll_to_top';

// Scroll restoration helper
const ScrollToTopRoute = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Home page
function HomePage() {
  return (
    <>
      <HomeHero />
      <Features />
      <div className="w-full max-w-[1112px] mx-auto h-px bg-gray-200" />
      <About />
      <OurBestServices />
      <Portfolio />
      <ContactForm />
    </>
  );
}

// About page
function AboutPage() {
  return (
    <>
      <AboutHero />
      <Welcome />
      <RecentWork />
    </>
  );
}

// Our Services page
function OurServicesPage() {
  return (
    <>
      <ServicesHero />
      <OurServicesList />
    </>
  );
}

// Contact page
function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactFormDetails />
      <ContactTouch />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTopRoute />
      {/* Fixed header with Topbar + Navbar */}
      <header className="fixed top-0 w-full z-50">
        <Topbar />
        <Navbar />
      </header>

      {/* Push main content below fixed header height - Different padding for mobile vs desktop */}
      <main className="pt-[70px] md:pt-[118px]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<OurServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/financial_analysis" element={<FinancialAnalysis />} />
          <Route path="/tax_and_regulatory" element={<TaxAndRegulatory />} />
        </Routes>
      </main>

      <ScrollToTopButton />
      <Footer />
    </Router>
  );
}

export default App;
