
import React from 'react';
import { Button } from '@/components/ui/button';

interface HeroContentProps {
  textRef: React.RefObject<HTMLDivElement>;
}

const HeroContent: React.FC<HeroContentProps> = ({ textRef }) => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div 
      ref={textRef}
      className="container px-4 mx-auto z-10 text-center"
    >
      <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <h2 className="text-lg md:text-xl font-medium text-portfolio-lightPurple mb-4">
          Hello, I'm
        </h2>
      </div>
      
      <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-portfolio-lightPurple">Anna Smith</span>
        </h1>
      </div>
      
      <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <h3 className="text-xl md:text-2xl text-gray-100 mb-8">
          <span className="relative">
            <span className="absolute -inset-1 blur-sm bg-portfolio-lightPurple/30 rounded-lg"></span>
            <span className="relative">Frontend Developer & UI/UX Designer</span>
          </span>
        </h3>
      </div>
      
      <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
        <p className="max-w-lg mx-auto text-gray-200 mb-10">
          I create beautiful, responsive websites with modern technologies.
          Passionate about clean design and user experience that drives results.
        </p>
      </div>
      
      <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: '1s' }}>
        <Button 
          className="bg-gradient-to-r from-portfolio-purple to-portfolio-lightPurple hover:from-portfolio-lightPurple hover:to-portfolio-purple text-white backdrop-blur-sm border border-white/10 relative overflow-hidden group"
          onClick={() => scrollToSection('contact')}
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-portfolio-lightPurple to-portfolio-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span className="relative z-10">Get in Touch</span>
        </Button>
        <Button 
          variant="outline" 
          className="border-white text-white hover:bg-white/10 backdrop-blur-sm relative overflow-hidden group"
          onClick={() => scrollToSection('projects')}
        >
          <span className="absolute inset-0 w-full h-full bg-white/0 group-hover:bg-white/10 transition-colors duration-300"></span>
          <span className="relative z-10">View My Work</span>
        </Button>
      </div>
    </div>
  );
};

export default HeroContent;
