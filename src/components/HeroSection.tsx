
import React, { useEffect, useRef } from 'react';
import { ArrowDown, Code, Zap, Laptop, RocketLaunch } from 'lucide-react';
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
      {/* Futuristic background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-portfolio-blue/90 to-portfolio-purple/90 mix-blend-multiply z-20"></div>
        
        {/* Animated grid lines */}
        <div className="absolute inset-0 z-10 opacity-20">
          <div className="absolute inset-0 grid grid-cols-12 h-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-white/10 h-full"></div>
            ))}
          </div>
          <div className="absolute inset-0 grid grid-rows-12 w-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-b border-white/10 w-full"></div>
            ))}
          </div>
        </div>
        
        {/* Tech image gallery in grid */}
        <div className="absolute inset-0 grid grid-cols-3 md:grid-cols-4 gap-1 opacity-40 z-0">
          <div className="bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')" }}></div>
          <div className="bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')" }}></div>
          <div className="bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')" }}></div>
          <div className="bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')" }}></div>
          <div className="bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')" }}></div>
          <div className="bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')" }}></div>
          <div className="bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')" }}></div>
          <div className="bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')" }}></div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div 
        ref={parallaxRef}
        className="absolute inset-0 opacity-60 z-5"
      >
        <div className="absolute inset-0 opacity-30">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i}
              className={cn(
                "absolute rounded-full blur-md",
                "animate-float",
                i % 3 === 0 ? "bg-portfolio-lightPurple/40" : 
                i % 3 === 1 ? "bg-cyan-400/40" : "bg-blue-500/40"
              )}
              style={{
                width: `${Math.random() * 200 + 50}px`,
                height: `${Math.random() * 200 + 50}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${Math.random() * 5 + 5}s`,
              }}
            />
          ))}
        </div>
        
        {/* Animated code symbols */}
        <div className="absolute inset-0 opacity-20">
          {[
            { icon: <Code size={40} className="text-white" />, top: '15%', left: '10%' },
            { icon: <Zap size={40} className="text-white" />, top: '25%', left: '80%' },
            { icon: <Laptop size={50} className="text-white" />, top: '70%', left: '15%' },
            { icon: <RocketLaunch size={50} className="text-white" />, top: '65%', left: '85%' }
          ].map((item, i) => (
            <div 
              key={i}
              className="absolute animate-float"
              style={{ 
                top: item.top, 
                left: item.left,
                animationDelay: `${i * 0.8}s`,
                animationDuration: '6s'
              }}
            >
              {item.icon}
            </div>
          ))}
        </div>
      </div>
      
      {/* Hero content */}
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
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-portfolio-lightPurple to-portfolio-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative z-10">Get in Touch</span>
          </Button>
          <Button 
            variant="outline" 
            className="border-white text-white hover:bg-white/10 backdrop-blur-sm relative overflow-hidden group"
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
            <span className="absolute inset-0 w-full h-full bg-white/0 group-hover:bg-white/10 transition-colors duration-300"></span>
            <span className="relative z-10">View My Work</span>
          </Button>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-10">
        <ArrowDown 
          size={32} 
          className="text-white opacity-70"
          onClick={scrollToNextSection}
        />
      </div>
    </section>
  );
};

export default HeroSection;
