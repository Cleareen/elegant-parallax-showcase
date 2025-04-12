
import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      // Update navbar style on scroll
      setScrolled(window.scrollY > 20);
      
      // Find active section based on scroll position
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
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 py-4",
      scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="container px-4 mx-auto flex justify-between items-center">
        <a href="#home" className="text-xl font-bold text-portfolio-blue">
          <span className="text-portfolio-purple">Dev</span>Portfolio
        </a>
        
        {/* Mobile menu button */}
        {isMobile && (
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden text-portfolio-blue"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
        
        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={cn(
                  "link-highlight font-medium transition-colors",
                  activeSection === link.id 
                    ? "text-portfolio-purple" 
                    : "text-portfolio-blue hover:text-portfolio-purple"
                )}
              >
                {link.label}
              </button>
            ))}
          </nav>
        )}
        
        {/* Social icons - desktop only */}
        {!isMobile && (
          <div className="hidden lg:flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
              className="text-gray-600 hover:text-portfolio-purple transition-colors">
              <GitHub size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
              className="text-gray-600 hover:text-portfolio-purple transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
              className="text-gray-600 hover:text-portfolio-purple transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        )}
        
        {/* Mobile Navigation Overlay */}
        {isMobile && (
          <div className={cn(
            "fixed inset-0 bg-white z-40 transition-transform duration-300 transform",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}>
            <div className="flex flex-col h-full p-8">
              <div className="flex justify-end">
                <button onClick={closeMenu} aria-label="Close menu">
                  <X size={24} className="text-portfolio-blue" />
                </button>
              </div>
              
              <nav className="flex flex-col items-center justify-center gap-8 mt-20">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={cn(
                      "text-xl font-medium transition-colors",
                      activeSection === link.id 
                        ? "text-portfolio-purple" 
                        : "text-portfolio-blue"
                    )}
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
              
              <div className="flex justify-center gap-8 mt-12">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                  className="text-gray-600 hover:text-portfolio-purple transition-colors">
                  <GitHub size={24} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                  className="text-gray-600 hover:text-portfolio-purple transition-colors">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:contact@example.com"
                  className="text-gray-600 hover:text-portfolio-purple transition-colors">
                  <Mail size={24} />
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
