
import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/use-in-view';

interface SkillProps {
  name: string;
  percentage: number;
  color: string;
  delay: number;
}

const Skill = ({ name, percentage, color, delay }: SkillProps) => {
  const skillRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(skillRef, { once: true });
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setWidth(percentage);
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [isInView, percentage, delay]);
  
  return (
    <div ref={skillRef} className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="font-medium text-gray-700">{name}</span>
        <span className="text-sm text-gray-500">{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out`}
          style={{ 
            width: `${width}%`,
            backgroundColor: color,
            transitionDelay: `${delay}ms`
          }}
        ></div>
      </div>
    </div>
  );
};

interface SkillCardProps {
  title: string;
  skills: string[];
  delay: number;
}

const SkillCard = ({ title, skills, delay }: SkillCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true });
  
  return (
    <div 
      ref={cardRef}
      className={cn(
        "bg-white rounded-lg p-6 shadow-lg border border-gray-100 transition-all duration-700",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="text-xl font-semibold text-portfolio-blue mb-4">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center">
            <span className="w-2 h-2 rounded-full bg-portfolio-purple mr-2"></span>
            <span className="text-gray-700">{skill}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  
  const titleInView = useInView(titleRef, { once: true });
  const descInView = useInView(descRef, { once: true });

  const frontendSkills = [
    { name: 'React', percentage: 90, color: '#61dafb' },
    { name: 'JavaScript/TypeScript', percentage: 85, color: '#f7df1e' },
    { name: 'HTML/CSS', percentage: 95, color: '#e34c26' },
    { name: 'Tailwind CSS', percentage: 88, color: '#38bdf8' },
  ];
  
  const backendSkills = [
    { name: 'Node.js', percentage: 82, color: '#68a063' },
    { name: 'Python', percentage: 78, color: '#3776ab' },
    { name: 'SQL/NoSQL', percentage: 85, color: '#0074a3' },
    { name: 'GraphQL', percentage: 75, color: '#e535ab' },
  ];

  const additionalSkills = [
    { title: 'Tools & DevOps', skills: ['Git/GitHub', 'Docker', 'CI/CD', 'AWS', 'Vercel', 'Netlify'] },
    { title: 'Other Skills', skills: ['Responsive Design', 'Performance Optimization', 'SEO', 'Accessibility'] },
    { title: 'Design Tools', skills: ['Figma', 'Adobe XD', 'Photoshop', 'Sketch'] },
    { title: 'Soft Skills', skills: ['Problem Solving', 'Communication', 'Team Collaboration', 'Project Management'] }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 
            ref={titleRef}
            className={cn(
              "text-3xl md:text-4xl font-bold mb-4 text-portfolio-blue transition-all duration-700",
              titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            My <span className="text-portfolio-purple">Skills</span>
          </h2>
          <p 
            ref={descRef}
            className={cn(
              "text-gray-600 transition-all duration-700",
              descInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
            style={{ transitionDelay: '200ms' }}
          >
            I've honed my skills in various technologies and tools over the years.
            Here's an overview of my technical expertise and capabilities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div>
            <h3 className="text-xl font-semibold text-portfolio-blue mb-6">Frontend Development</h3>
            {frontendSkills.map((skill, index) => (
              <Skill
                key={index}
                name={skill.name}
                percentage={skill.percentage}
                color={skill.color}
                delay={index * 200}
              />
            ))}
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-portfolio-blue mb-6">Backend Development</h3>
            {backendSkills.map((skill, index) => (
              <Skill
                key={index}
                name={skill.name}
                percentage={skill.percentage}
                color={skill.color}
                delay={index * 200}
              />
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalSkills.map((skillSet, index) => (
            <SkillCard
              key={index}
              title={skillSet.title}
              skills={skillSet.skills}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
