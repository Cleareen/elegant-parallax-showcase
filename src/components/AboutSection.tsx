
import React, { useEffect, useRef } from 'react';
import { Code, Server, Palette, Monitor } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard = ({ icon, title, description, delay }: ServiceCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <div 
      ref={ref}
      className={`p-6 rounded-lg backdrop-blur-sm bg-white/80 shadow-lg border border-gray-100 transition-all duration-500 hover:translate-y-[-5px] ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="rounded-full w-12 h-12 flex items-center justify-center bg-portfolio-purple/10 text-portfolio-purple mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-portfolio-blue mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const AboutSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  const titleInView = useInView(titleRef, { once: true });
  const textInView = useInView(textRef, { once: true });
  const imageInView = useInView(imageRef, { once: true });

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 
            ref={titleRef}
            className={`text-3xl md:text-4xl font-bold mb-4 text-portfolio-blue transition-all duration-700 ${
              titleInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            About <span className="text-portfolio-purple">Me</span>
          </h2>
          <p 
            ref={textRef}
            className={`text-gray-600 transition-all duration-700 ${
              textInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '200ms' }}
          >
            I'm a passionate software engineer with expertise in building modern web applications.
            With a strong foundation in both frontend and backend technologies, I create seamless 
            digital experiences that solve real-world problems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-20 items-center">
          <div 
            ref={imageRef}
            className={`relative transition-all duration-1000 ${
              imageInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="relative glowing rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-portfolio-blue/20 to-portfolio-purple/20 z-0"></div>
              <div className="bg-gradient-to-r from-portfolio-blue to-portfolio-purple aspect-[4/3] rounded-lg overflow-hidden">
                <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80')] bg-cover bg-center mix-blend-overlay"></div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-portfolio-purple rounded-lg z-[-1] opacity-20"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-portfolio-blue rounded-lg z-[-1] opacity-20"></div>
          </div>
          
          <div className="space-y-6">
            <div 
              className={`transition-all duration-700 ${
                imageInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              <h3 className="text-2xl font-semibold text-portfolio-blue mb-2">Who I Am</h3>
              <p className="text-gray-600 mb-4">
                I'm a software engineer with 5+ years of experience specializing in full-stack development.
                I blend technical expertise with creative problem-solving to build elegant, efficient solutions.
              </p>
            </div>
            
            <div 
              className={`transition-all duration-700 ${
                imageInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <h3 className="text-2xl font-semibold text-portfolio-blue mb-2">My Approach</h3>
              <p className="text-gray-600">
                I approach each project with a focus on clean code, performance, and user experience.
                I believe in continuous learning and staying updated with the latest technologies and best practices.
              </p>
            </div>
          </div>
        </div>
        
        <h3 className="text-2xl font-semibold text-center text-portfolio-blue mb-10">What I Do</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard 
            icon={<Code size={24} />}
            title="Web Development"
            description="Building responsive, modern websites and web applications using the latest technologies."
            delay={0}
          />
          <ServiceCard 
            icon={<Server size={24} />}
            title="Backend Solutions"
            description="Crafting robust server-side applications and APIs that power your digital products."
            delay={200}
          />
          <ServiceCard 
            icon={<Palette size={24} />}
            title="UI/UX Design"
            description="Creating intuitive, engaging user interfaces with attention to detail and aesthetics."
            delay={400}
          />
          <ServiceCard 
            icon={<Monitor size={24} />}
            title="Tech Consulting"
            description="Providing expert advice on technology choices, architecture, and development strategies."
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
