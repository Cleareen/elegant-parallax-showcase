
import React from 'react';
import { ArrowUp, Terminal, Code, BrainCircuit, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 bg-portfolio-dark text-portfolio-code-text relative overflow-hidden">
      {/* Code-themed background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-portfolio-code-highlight/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-portfolio-code-highlight/10 to-transparent"></div>
        <div className="grid grid-cols-12 h-full">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-portfolio-code-highlight/5 h-full"></div>
          ))}
        </div>
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-xl font-bold font-mono inline-flex items-center">
              <Terminal size={18} className="mr-2 text-portfolio-code-highlight" />
              <span className="text-portfolio-code-highlight">&lt;</span>
              <span className="text-portfolio-code-text">Anna</span>
              <span className="text-portfolio-code-variable">.</span>
              <span className="text-portfolio-lightBlue">dev</span>
              <span className="text-portfolio-code-highlight">/&gt;</span>
            </a>
            <p className="mt-2 text-portfolio-code-comment text-sm font-mono">
              <span className="text-portfolio-code-comment">// </span>
              &copy; {currentYear} Anna Smith. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <nav className="flex flex-wrap justify-center gap-4">
              {['home', 'about', 'skills', 'qualifications', 'projects', 'contact'].map((section) => (
                <a 
                  key={section}
                  href={`#${section}`} 
                  className="text-portfolio-code-text/70 hover:text-portfolio-code-variable transition-colors text-sm font-mono"
                >
                  <span className="text-portfolio-code-highlight">&lt;</span>
                  {section}
                  <span className="text-portfolio-code-highlight">/&gt;</span>
                </a>
              ))}
            </nav>
            
            <div className="flex gap-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                className="text-portfolio-code-text/70 hover:text-portfolio-code-highlight transition-colors">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="text-portfolio-code-text/70 hover:text-portfolio-code-variable transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                className="text-portfolio-code-text/70 hover:text-portfolio-lightBlue transition-colors">
                <Twitter size={18} />
              </a>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="rounded-full p-2 bg-portfolio-code-highlight/20 text-portfolio-code-highlight hover:bg-portfolio-code-highlight hover:text-portfolio-dark transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-portfolio-code-highlight/10 text-center font-mono text-xs text-portfolio-code-comment">
          <p className="flex items-center justify-center gap-2">
            <Code size={14} className="text-portfolio-code-highlight" />
            <span>Built with React, TypeScript, and Tailwind CSS</span>
            <BrainCircuit size={14} className="text-portfolio-lightBlue" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
