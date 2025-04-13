
import React from 'react';
import { ArrowDown } from 'lucide-react';

interface ScrollIndicatorProps {
  onClick: () => void;
}

const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({ onClick }) => {
  return (
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-10">
      <ArrowDown 
        size={32} 
        className="text-white opacity-70"
        onClick={onClick}
      />
    </div>
  );
};

export default ScrollIndicator;
