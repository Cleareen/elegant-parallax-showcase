
import React, { useEffect, useRef } from 'react';
import HeroBackground from './hero/HeroBackground';
import FloatingElements from './hero/FloatingElements';
import HeroContent from './hero/HeroContent';
import ScrollIndicator from './hero/ScrollIndicator';

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
      <HeroBackground />
      
      {/* Floating elements */}
      <FloatingElements parallaxRef={parallaxRef} />
      
      {/* Hero content */}
      <HeroContent textRef={textRef} />
      
      {/* Scroll down indicator */}
      <ScrollIndicator onClick={scrollToNextSection} />
    </section>
  );
};

export default HeroSection;
