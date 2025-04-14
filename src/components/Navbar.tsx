
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Twitter, Terminal } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
      closeMenu();
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'qualifications', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4",
      scrolled ? "bg-portfolio-dark/95 backdrop-blur-md shadow-md shadow-black/20 border-b border-portfolio-code-highlight/10" : "bg-transparent"
    )}>
      <div className="container px-4 mx-auto flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-white font-mono inline-flex items-center">
          <Terminal size={20} className="mr-2 text-portfolio-code-highlight" />
          <span className="text-portfolio-code-highlight">&lt;</span>
          <span className="text-portfolio-code-text">Anna</span>
          <span className="text-portfolio-code-variable">.</span>
          <span className="text-portfolio-lightBlue">dev</span>
          <span className="text-portfolio-code-highlight">/&gt;</span>
        </a>
        
        {isMobile && (
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden text-white bg-portfolio-blue/50 p-2 rounded"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        )}
        
        {!isMobile && (
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={cn(
                  "font-mono transition-colors text-sm tracking-wide px-3 py-1.5 rounded",
                  activeSection === link.id 
                    ? "bg-portfolio-code-highlight/20 text-portfolio-code-highlight border border-portfolio-code-highlight/30" 
                    : "text-portfolio-code-text hover:bg-portfolio-blue/50 hover:text-portfolio-code-highlight"
                )}
              >
                {activeSection === link.id 
                  ? <><span className="text-portfolio-code-highlight">{"<"}</span>{link.label}<span className="text-portfolio-code-highlight">{"/>"}</span></>
                  : link.label
                }
              </button>
            ))}
          </nav>
        )}
        
        {!isMobile && (
          <div className="hidden lg:flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
              className="text-portfolio-code-text/70 hover:text-portfolio-code-highlight transition-colors bg-portfolio-blue/50 rounded-full p-2">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
              className="text-portfolio-code-text/70 hover:text-portfolio-code-variable transition-colors bg-portfolio-blue/50 rounded-full p-2">
              <Linkedin size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
              className="text-portfolio-code-text/70 hover:text-portfolio-lightBlue transition-colors bg-portfolio-blue/50 rounded-full p-2">
              <Twitter size={18} />
            </a>
          </div>
        )}
        
        {/* Mobile menu */}
        {isMobile && (
          <div className={cn(
            "fixed inset-0 bg-portfolio-dark/95 backdrop-blur-xl z-40 transition-transform duration-300 transform",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}>
            <div className="flex flex-col h-full p-8">
              <div className="flex justify-end">
                <button onClick={closeMenu} aria-label="Close menu" className="text-portfolio-code-text p-2 bg-portfolio-blue/50 rounded">
                  <X size={20} />
                </button>
              </div>
              
              <nav className="flex flex-col items-center justify-center gap-6 mt-20">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={cn(
                      "text-lg font-mono transition-colors px-4 py-2 rounded w-full text-center",
                      activeSection === link.id 
                        ? "bg-portfolio-code-highlight/20 text-portfolio-code-highlight border border-portfolio-code-highlight/30" 
                        : "text-portfolio-code-text hover:bg-portfolio-blue/50"
                    )}
                  >
                    {activeSection === link.id 
                      ? <><span className="text-portfolio-code-highlight">{"<"}</span>{link.label}<span className="text-portfolio-code-highlight">{"/>"}</span></>
                      : link.label
                    }
                  </button>
                ))}
              </nav>
              
              <div className="flex justify-center gap-6 mt-auto mb-10">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                  className="text-portfolio-code-text/70 hover:text-portfolio-code-highlight transition-colors bg-portfolio-blue/50 rounded-full p-3">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                  className="text-portfolio-code-text/70 hover:text-portfolio-code-variable transition-colors bg-portfolio-blue/50 rounded-full p-3">
                  <Linkedin size={24} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                  className="text-portfolio-code-text/70 hover:text-portfolio-lightBlue transition-colors bg-portfolio-blue/50 rounded-full p-3">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
