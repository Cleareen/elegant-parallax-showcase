
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
    <footer className="py-10 bg-portfolio-blue text-white relative overflow-hidden">
      {/* Futuristic background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-portfolio-lightPurple to-transparent"></div>
        <div className="grid grid-cols-12 h-full">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-portfolio-lightPurple/10 h-full"></div>
          ))}
        </div>
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-xl font-bold">
              <span className="text-portfolio-lightPurple">Anna</span>Smith
            </a>
            <p className="mt-2 text-gray-300 text-sm">
              &copy; {new Date().getFullYear()} Anna Smith. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <nav className="flex flex-wrap justify-center gap-6">
              <a href="#home" className="text-gray-300 hover:text-portfolio-lightPurple transition-colors text-sm">Home</a>
              <a href="#about" className="text-gray-300 hover:text-portfolio-lightPurple transition-colors text-sm">About</a>
              <a href="#skills" className="text-gray-300 hover:text-portfolio-lightPurple transition-colors text-sm">Skills</a>
              <a href="#qualifications" className="text-gray-300 hover:text-portfolio-lightPurple transition-colors text-sm">Education</a>
              <a href="#projects" className="text-gray-300 hover:text-portfolio-lightPurple transition-colors text-sm">Projects</a>
              <a href="#contact" className="text-gray-300 hover:text-portfolio-lightPurple transition-colors text-sm">Contact</a>
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
