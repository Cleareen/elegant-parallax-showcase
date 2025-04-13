
import React from 'react';
import { Code, Zap, Laptop, Rocket } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FloatingElementsProps {
  parallaxRef: React.RefObject<HTMLDivElement>;
}

const FloatingElements: React.FC<FloatingElementsProps> = ({ parallaxRef }) => {
  return (
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
          { icon: <Rocket size={50} className="text-white" />, top: '65%', left: '85%' }
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
  );
};

export default FloatingElements;
