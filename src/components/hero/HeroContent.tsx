
import React from 'react';
import { Button } from '@/components/ui/button';
import { Terminal, Code, ExternalLink } from 'lucide-react';

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
      className="container px-4 mx-auto z-10 relative"
    >
      <div className="bg-portfolio-dark/30 backdrop-blur-sm p-8 md:p-12 rounded-lg border border-portfolio-code-highlight/20 max-w-3xl mx-auto">
        <div className="animate-fade-in-up flex items-center gap-2 mb-4" style={{ animationDelay: '0.2s' }}>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-portfolio-code-error"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-xs text-portfolio-code-comment ml-2 font-mono">~/portfolio/main.tsx</div>
        </div>
        
        <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-sm md:text-base font-mono text-portfolio-code-comment mb-2">
            <span>// Hello, World! I'm</span>
          </h2>
        </div>
        
        <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-portfolio-code-text mb-4 font-mono">
            <span className="text-portfolio-code-highlight">const</span> <span className="text-portfolio-code-variable">developer</span> = <span className="text-portfolio-code-string">"Anna Smith"</span>;
          </h1>
        </div>
        
        <div className="animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="flex flex-wrap gap-2 mb-4 font-mono text-sm md:text-base">
            <span className="bg-portfolio-code-highlight/20 text-portfolio-code-highlight px-2 py-1 rounded">Frontend</span>
            <span className="bg-portfolio-lightBlue/20 text-portfolio-lightBlue px-2 py-1 rounded">React</span>
            <span className="bg-portfolio-code-function/20 text-portfolio-code-function px-2 py-1 rounded">TypeScript</span>
            <span className="bg-portfolio-code-variable/20 text-portfolio-code-variable px-2 py-1 rounded">UI/UX</span>
          </div>
        </div>
        
        <div className="animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <pre className="bg-portfolio-blue/50 p-4 rounded border border-portfolio-code-highlight/20 text-portfolio-code-text mb-6 overflow-x-auto text-xs md:text-sm">
            <span className="text-portfolio-code-comment">/**</span><br />
            <span className="text-portfolio-code-comment"> * I create beautiful, responsive websites</span><br />
            <span className="text-portfolio-code-comment"> * Passionate about clean design and user experience</span><br />
            <span className="text-portfolio-code-comment"> * that drives results.</span><br />
            <span className="text-portfolio-code-comment"> */</span>
          </pre>
        </div>
        
        <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center md:justify-start" style={{ animationDelay: '1.2s' }}>
          <Button 
            className="bg-portfolio-code-highlight hover:bg-portfolio-code-highlight/90 text-white relative overflow-hidden group font-mono"
            onClick={() => scrollToSection('contact')}
          >
            <Terminal className="mr-2 h-4 w-4" />
            <span className="relative z-10">.contact()</span>
          </Button>
          <Button 
            variant="outline" 
            className="border-portfolio-code-variable text-portfolio-code-variable hover:bg-portfolio-code-variable/10 relative overflow-hidden group font-mono"
            onClick={() => scrollToSection('projects')}
          >
            <Code className="mr-2 h-4 w-4" />
            <span className="relative z-10">.viewProjects()</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
