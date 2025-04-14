
import React from 'react';

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-blue/90 to-portfolio-purple/90 mix-blend-multiply z-20"></div>
      
      {/* Code-like grid patterns */}
      <div className="absolute inset-0 z-10 opacity-20">
        <div className="absolute inset-0 grid grid-cols-12 h-full">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-portfolio-lightPurple/20 h-full"></div>
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-12 w-full">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-b border-portfolio-lightPurple/20 w-full"></div>
          ))}
        </div>
      </div>
      
      {/* Tech code snippets in background */}
      <div className="absolute inset-0 opacity-10 font-mono text-xs md:text-sm overflow-hidden z-0">
        <div className="absolute top-[10%] left-[5%] text-portfolio-lightPurple">
          <pre>{"function initPortfolio() {\n  const skills = ['React', 'UI/UX', 'Tailwind'];\n  return skills.map(skill => <Skill key={skill} name={skill} />);\n}"}</pre>
        </div>
        <div className="absolute top-[30%] right-[5%] text-portfolio-lightBlue">
          <pre>{"const Project = ({ title, desc }) => (\n  <div className=\"project\">\n    <h2>{title}</h2>\n    <p>{desc}</p>\n  </div>\n);"}</pre>
        </div>
        <div className="absolute bottom-[20%] left-[15%] text-portfolio-code-comment">
          <pre>{"// Building beautiful interfaces\nimport { motion } from 'framer-motion';\n\nexport const AnimatedButton = () => {\n  return <motion.button whileHover={{ scale: 1.05 }} />;\n}"}</pre>
        </div>
        <div className="absolute bottom-[40%] right-[15%] text-portfolio-code-text">
          <pre>{"const technologies = [\n  'HTML', 'CSS', 'JavaScript',\n  'React', 'Tailwind', 'Figma'\n];"}</pre>
        </div>
      </div>
    </div>
  );
};

export default HeroBackground;
