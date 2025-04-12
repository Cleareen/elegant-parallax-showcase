
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.5}px)`;
      }
      
      if (textRef.current) {
        const scrollPosition = window.scrollY;
        textRef.current.style.transform = `translateY(-${scrollPosition * 0.2}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background pattern with parallax effect */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 bg-gradient-to-b from-blue-50 to-purple-50 opacity-60 z-0"
      >
        <div className="absolute inset-0 opacity-10">
          {[...Array(10)].map((_, i) => (
            <div 
              key={i}
              className={cn(
                "absolute rounded-full",
                "animate-float",
                i % 2 === 0 ? "bg-portfolio-blue/20" : "bg-portfolio-purple/20"
              )}
              style={{
                width: `${Math.random() * 200 + 50}px`,
                height: `${Math.random() * 200 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Content with counter-parallax effect */}
      <div 
        ref={textRef}
        className="container px-4 mx-auto z-10 text-center"
      >
        <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-lg md:text-xl font-medium text-portfolio-purple mb-4">
            Hello, I'm
          </h2>
        </div>
        
        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-portfolio-blue mb-6">
            John Developer
          </h1>
        </div>
        
        <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-xl md:text-2xl text-gray-600 mb-8">
            Software Engineer & Full-Stack Developer
          </h3>
        </div>
        
        <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <p className="max-w-lg mx-auto text-gray-500 mb-10">
            I build elegant, responsive, and high-performance applications 
            with modern technologies and best practices.
          </p>
        </div>
        
        <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: '1s' }}>
          <Button 
            className="bg-portfolio-purple hover:bg-portfolio-purple/90 text-white"
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                window.scrollTo({
                  top: contactSection.offsetTop - 80,
                  behavior: 'smooth'
                });
              }
            }}
          >
            Get in Touch
          </Button>
          <Button 
            variant="outline" 
            className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue/5"
            onClick={() => {
              const projectsSection = document.getElementById('projects');
              if (projectsSection) {
                window.scrollTo({
                  top: projectsSection.offsetTop - 80,
                  behavior: 'smooth'
                });
              }
            }}
          >
            View My Work
          </Button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer">
        <ArrowDown 
          size={32} 
          className="text-portfolio-blue opacity-70"
          onClick={scrollToNextSection}
        />
      </div>
    </section>
  );
};

export default HeroSection;
