
import React from 'react';

const HeroBackground = () => {
  return (
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
  );
};

export default HeroBackground;
