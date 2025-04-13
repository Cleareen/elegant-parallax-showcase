
import React, { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  index: number;
}

const ProjectCard = ({ title, description, image, technologies, liveUrl, githubUrl, index }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, threshold: 0.1 });
  
  return (
    <div 
      ref={cardRef}
      className={cn(
        "rounded-lg overflow-hidden bg-white shadow-lg border border-gray-100 transition-all duration-700",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      )}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative overflow-hidden group">
        <div className="bg-gray-200 aspect-video overflow-hidden">
          <div 
            className="w-full h-full bg-cover bg-center transform transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
          <div className="flex gap-4">
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white rounded-full p-2 text-portfolio-blue hover:text-portfolio-purple transition-colors"
            >
              <ExternalLink size={20} />
            </a>
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white rounded-full p-2 text-portfolio-blue hover:text-portfolio-purple transition-colors"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-portfolio-blue mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, i) => (
            <span 
              key={i} 
              className="text-xs font-medium px-2 py-1 rounded-full bg-portfolio-purple/10 text-portfolio-purple"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  
  const titleInView = useInView(titleRef, { once: true });
  const textInView = useInView(textRef, { once: true });
  const buttonInView = useInView(buttonRef, { once: true });

  const projects = [
    {
      title: "Modern Portfolio Website",
      description: "A sleek, responsive portfolio website with smooth animations and modern design aesthetics.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "E-Commerce Dashboard",
      description: "Admin dashboard for an e-commerce platform with sales analytics, inventory management, and order tracking.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80",
      technologies: ["React", "Material UI", "Chart.js", "Firebase"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Recipe Finder App",
      description: "A web application that helps users discover recipes based on ingredients they have at home.",
      image: "https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1065&q=80",
      technologies: ["JavaScript", "CSS3", "API Integration", "Responsive Design"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    },
    {
      title: "Meditation Mobile App",
      description: "UI/UX design for a meditation mobile app with soothing color palette and intuitive navigation.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80",
      technologies: ["Figma", "UI/UX", "Prototyping", "User Research"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 
            ref={titleRef}
            className={cn(
              "text-3xl md:text-4xl font-bold mb-4 text-portfolio-blue transition-all duration-700",
              titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            My <span className="text-portfolio-purple">Projects</span>
          </h2>
          <p 
            ref={textRef}
            className={cn(
              "text-gray-600 transition-all duration-700",
              textInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
            style={{ transitionDelay: '200ms' }}
          >
            Here are some of my recent projects that showcase my design and development skills.
            Each project represents a unique challenge and creative solution.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              index={index}
            />
          ))}
        </div>
        
        <div 
          ref={buttonRef}
          className={cn(
            "text-center transition-all duration-700",
            buttonInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <Button 
            className="bg-portfolio-purple hover:bg-portfolio-purple/90 text-white"
            onClick={() => window.open("https://github.com", "_blank")}
          >
            View More Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
