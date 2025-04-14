
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

  const programmingSkills = [
    { name: 'Python', percentage: 92, color: '#3776ab' },
    { name: 'JavaScript', percentage: 85, color: '#f7df1e' },
    { name: 'Dart', percentage: 80, color: '#0175c2' },
    { name: 'HTML/CSS', percentage: 90, color: '#e34c26' },
  ];
  
  const dataSkills = [
    { name: 'Apache Spark', percentage: 85, color: '#e25a1c' },
    { name: 'Pandas', percentage: 90, color: '#150458' },
    { name: 'Power BI', percentage: 88, color: '#f2c811' },
    { name: 'SQL', percentage: 85, color: '#0074a3' },
  ];

  const additionalSkills = [
    { title: 'Frameworks & Tools', skills: ['Flutter', 'React', 'Firebase', 'Node.js', 'Streamlit'] },
    { title: 'Databases', skills: ['PostgreSQL', 'MySQL', 'NoSQL'] },
    { title: 'Cloud Services', skills: ['AWS', 'Firebase', 'Google Cloud'] },
    { title: 'Soft Skills', skills: ['Problem-solving', 'Team collaboration', 'Public speaking', 'Teaching & mentoring', 'Project planning'] }
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
            I've developed expertise in various technologies and tools across software development, data engineering, 
            and educational technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-16">
          <div>
            <h3 className="text-xl font-semibold text-portfolio-blue mb-6">Programming Skills</h3>
            {programmingSkills.map((skill, index) => (
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
            <h3 className="text-xl font-semibold text-portfolio-blue mb-6">Data & Analytics Skills</h3>
            {dataSkills.map((skill, index) => (
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
