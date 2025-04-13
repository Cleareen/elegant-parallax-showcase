
import React from 'react';
import { GraduationCap, School, BookOpen, Clock, Calendar, Certificate } from 'lucide-react';
import { Card } from '@/components/ui/card';

const QualificationsSection = () => {
  return (
    <section id="qualifications" className="py-20 bg-gradient-to-br from-portfolio-blue/5 to-portfolio-purple/5">
      <div className="container px-4 mx-auto section-reveal">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-blue mb-4">Education & Qualifications</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">My academic journey and professional development through formal education and specialized bootcamps.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Formal Education */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="text-portfolio-purple mr-3" size={28} />
              <h3 className="text-2xl font-bold text-portfolio-blue">Formal Education</h3>
            </div>
            
            <div className="relative pl-8 border-l-2 border-portfolio-purple/30 space-y-10">
              <QualificationCard 
                title="Bachelor of Science in Computer Science"
                institution="University of Technology"
                date="2016 - 2020"
                description="Graduated with honors. Specialized in Human-Computer Interaction and Software Engineering."
                icon={<School size={20} className="text-portfolio-purple" />}
              />
              
              <QualificationCard 
                title="Master's in User Experience Design"
                institution="Design Institute"
                date="2020 - 2022"
                description="Focused on interactive design systems and usability research methodologies."
                icon={<BookOpen size={20} className="text-portfolio-purple" />}
              />
            </div>
          </div>
          
          {/* Bootcamps & Certifications */}
          <div>
            <div className="flex items-center mb-8">
              <Certificate className="text-portfolio-purple mr-3" size={28} />
              <h3 className="text-2xl font-bold text-portfolio-blue">Bootcamps & Certifications</h3>
            </div>
            
            <div className="relative pl-8 border-l-2 border-portfolio-purple/30 space-y-10">
              <QualificationCard 
                title="Advanced React Development"
                institution="Frontend Masters Bootcamp"
                date="2023"
                description="Intensive 12-week program covering advanced React patterns, state management, and performance optimization."
                icon={<Certificate size={20} className="text-portfolio-purple" />}
              />
              
              <QualificationCard 
                title="UI/UX Design Specialization"
                institution="Design+Code"
                date="2022"
                description="Comprehensive program on design systems, prototyping, and design thinking methodologies."
                icon={<Certificate size={20} className="text-portfolio-purple" />}
              />
              
              <QualificationCard 
                title="Full Stack JavaScript"
                institution="Tech Accelerator Program"
                date="2021"
                description="Intensive bootcamp focused on modern JavaScript stack including Node.js, Express, and MongoDB."
                icon={<Certificate size={20} className="text-portfolio-purple" />}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface QualificationCardProps {
  title: string;
  institution: string;
  date: string;
  description: string;
  icon: React.ReactNode;
}

const QualificationCard = ({ title, institution, date, description, icon }: QualificationCardProps) => {
  return (
    <div className="relative">
      <div className="absolute -left-12 top-1 w-6 h-6 bg-white rounded-full border-2 border-portfolio-purple flex items-center justify-center">
        {icon}
      </div>
      <Card className="p-6 backdrop-blur-sm bg-white/50 border border-white/20 hover:shadow-md hover:shadow-portfolio-purple/5 transition-all duration-300 group">
        <div className="flex items-start justify-between mb-2">
          <h4 className="font-bold text-lg text-portfolio-blue group-hover:text-portfolio-purple transition-colors">{title}</h4>
        </div>
        <div className="mb-2 flex items-center text-sm text-gray-500">
          <Calendar size={14} className="mr-1" /> 
          <span>{date}</span>
        </div>
        <div className="mb-3 flex items-center text-sm text-gray-600 font-medium">
          <School size={14} className="mr-1" /> 
          <span>{institution}</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </Card>
    </div>
  );
};

export default QualificationsSection;
