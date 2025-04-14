
import React, { useRef } from 'react';
import { Code, Laptop, School, GraduationCap } from 'lucide-react';
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
            I'm a passionate, multi-talented educator turned software engineer, data analyst, and aspiring tech entrepreneur.
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
              <img 
                src="/lovable-uploads/c073f43a-1c8a-4665-9e40-e364adcd8e79.png" 
                alt="Eddie Mkansi at a border sign between South Africa and Mozambique" 
                className="relative z-10 w-full h-auto rounded-lg"
              />
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
                With a rock-solid background in teaching Computer Applications Technology (CAT), 
                Information Technology (IT), Digital Technologies, and Mathematics, I've spent 
                over 4 years in the classroom, inspiring young minds—and now I'm building 
                intelligent systems that solve real-world problems.
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
                While my journey began in education, my love for technology and innovation led 
                me to explore software development, data engineering, business intelligence, and 
                cybersecurity. Today, I'm equally comfortable in a classroom and a codebase, creating 
                apps, analyzing data, building educational tech tools, and helping others do the same.
              </p>
            </div>
          </div>
        </div>
        
        <h3 className="text-2xl font-semibold text-center text-portfolio-blue mb-10">What I Do</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard 
            icon={<Code size={24} />}
            title="Software Development"
            description="Building applications with Python, JavaScript, Dart, and React, with a focus on clean, efficient code."
            delay={0}
          />
          <ServiceCard 
            icon={<Laptop size={24} />}
            title="Data Engineering"
            description="Creating data pipelines, analytics solutions, and dashboards using tools like Apache Spark, Pandas, and Power BI."
            delay={200}
          />
          <ServiceCard 
            icon={<School size={24} />}
            title="Education & Training"
            description="Teaching IT, CAT, Digital Technologies and Mathematics, with integration of robotics and coding."
            delay={400}
          />
          <ServiceCard 
            icon={<GraduationCap size={24} />}
            title="Tech Entrepreneurship"
            description="Developing innovative solutions and building a multi-faceted tech business offering development, data, and cybersecurity services."
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
