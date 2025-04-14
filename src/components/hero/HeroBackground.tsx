
import React, { useEffect, useRef } from 'react';

const HeroBackground = () => {
  const backgroundRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Animate code background elements
    const interval = setInterval(() => {
      if (backgroundRef.current) {
        const codeSnippets = backgroundRef.current.querySelectorAll('.code-snippet');
        codeSnippets.forEach(snippet => {
          const opacity = parseFloat(getComputedStyle(snippet).opacity);
          snippet.setAttribute('style', `opacity: ${opacity < 0.2 ? 0.4 : 0.1}; transition: opacity 2s ease;`);
        });
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={backgroundRef} className="absolute inset-0 z-0 overflow-hidden bg-portfolio-code-bg">
      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-portfolio-blue/95 to-portfolio-purple/95 mix-blend-multiply z-20"></div>
      
      {/* Matrix-like falling code */}
      <div className="absolute inset-0 z-10 opacity-5">
        <div className="matrix-rain w-full h-full"></div>
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 z-10 opacity-15">
        <div className="absolute inset-0 grid grid-cols-12 h-full">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-r border-portfolio-code-highlight/10 h-full"></div>
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-12 w-full">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-b border-portfolio-code-highlight/10 w-full"></div>
          ))}
        </div>
      </div>
      
      {/* Code snippets in background */}
      <div className="absolute inset-0 font-mono text-xs md:text-sm overflow-hidden z-0">
        <div className="code-snippet absolute top-[10%] left-[5%] text-portfolio-code-highlight/20 transition-opacity duration-2000">
          <pre>{`function createPortfolio() {
  const skills = ['React', 'TypeScript', 'Tailwind'];
  return (
    <div className="portfolio">
      {skills.map(skill => <Skill key={skill} name={skill} />)}
    </div>
  );
}`}</pre>
        </div>
        <div className="code-snippet absolute top-[30%] right-[5%] text-portfolio-lightBlue/20 transition-opacity duration-2000">
          <pre>{`// Custom hook for animations
const useAnimation = (el, options) => {
  const [state, setState] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setState(entry.isIntersecting),
      options
    );
    
    observer.observe(el.current);
    return () => observer.disconnect();
  }, [el, options]);
  
  return state;
};`}</pre>
        </div>
        <div className="code-snippet absolute bottom-[20%] left-[15%] text-portfolio-code-comment/20 transition-opacity duration-2000">
          <pre>{`/** 
 * Component that renders a project card
 * @param {Object} props - Component props
 * @param {string} props.title - Project title
 * @param {string} props.description - Project description
 * @param {string[]} props.technologies - Technologies used
 */
export const ProjectCard = ({ title, description, technologies }) => {
  return (
    <article className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="technologies">
        {technologies.map(tech => <span key={tech}>{tech}</span>)}
      </div>
    </article>
  );
};`}</pre>
        </div>
        <div className="code-snippet absolute bottom-[40%] right-[15%] text-portfolio-code-text/20 transition-opacity duration-2000">
          <pre>{`// Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 }
  }
};`}</pre>
        </div>
      </div>

      {/* Terminal-like cursor */}
      <div className="absolute bottom-[15%] left-[50%] transform -translate-x-1/2 w-6 h-12 border-r-2 border-portfolio-code-highlight animate-pulse"></div>
    </div>
  );
};

export default HeroBackground;
