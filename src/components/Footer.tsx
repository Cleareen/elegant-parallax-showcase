
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-10 bg-portfolio-blue text-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-xl font-bold">
              <span className="text-portfolio-lightPurple">Dev</span>Portfolio
            </a>
            <p className="mt-2 text-gray-300 text-sm">
              &copy; {new Date().getFullYear()} John Developer. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <nav className="flex gap-6">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </nav>
            
            <button 
              onClick={scrollToTop}
              className="rounded-full p-3 bg-portfolio-lightPurple/20 text-portfolio-lightPurple hover:bg-portfolio-lightPurple hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
