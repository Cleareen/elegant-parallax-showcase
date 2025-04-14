
import React from 'react';
import { GraduationCap, School, BookOpen, Calendar, Award } from 'lucide-react';
import { Card } from '@/components/ui/card';

const QualificationsSection = () => {
  return (
    <section id="qualifications" className="py-20 bg-gradient-to-br from-portfolio-dark/90 to-portfolio-blue/90">
      <div className="container px-4 mx-auto section-reveal">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-portfolio-code-text mb-4">Education & Qualifications</h2>
          <p className="text-portfolio-code-comment max-w-2xl mx-auto">My academic journey and professional development through formal education and specialized bootcamps.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Formal Education */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="text-portfolio-lightBlue mr-3" size={28} />
              <h3 className="text-2xl font-bold text-portfolio-code-text">Formal Education</h3>
            </div>
            
            <div className="relative pl-8 border-l-2 border-portfolio-code-highlight/30 space-y-10">
              <QualificationCard 
                title="Bachelor of Science in Computer Science"
                institution="University of Technology"
                date="2016 - 2020"
                description="Graduated with honors. Specialized in Human-Computer Interaction and Software Engineering."
                icon={<School size={20} className="text-portfolio-lightBlue" />}
                imageUrl="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              />
              
              <QualificationCard 
                title="Master's in User Experience Design"
                institution="Design Institute"
                date="2020 - 2022"
                description="Focused on interactive design systems and usability research methodologies."
                icon={<BookOpen size={20} className="text-portfolio-lightBlue" />}
                imageUrl="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              />
            </div>
          </div>
          
          {/* Bootcamps & Certifications */}
          <div>
            <div className="flex items-center mb-8">
              <Award className="text-portfolio-lightBlue mr-3" size={28} />
              <h3 className="text-2xl font-bold text-portfolio-code-text">Bootcamps & Certifications</h3>
            </div>
            
            <div className="relative pl-8 border-l-2 border-portfolio-code-highlight/30 space-y-10">
              <QualificationCard 
                title="Advanced React Development"
                institution="Frontend Masters Bootcamp"
                date="2023"
                description="Intensive 12-week program covering advanced React patterns, state management, and performance optimization."
                icon={<Award size={20} className="text-portfolio-lightBlue" />}
                imageUrl="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              />
              
              <QualificationCard 
                title="UI/UX Design Specialization"
                institution="Design+Code"
                date="2022"
                description="Comprehensive program on design systems, prototyping, and design thinking methodologies."
                icon={<Award size={20} className="text-portfolio-lightBlue" />}
                imageUrl="https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              />
              
              <QualificationCard 
                title="Full Stack JavaScript"
                institution="Tech Accelerator Program"
                date="2021"
                description="Intensive bootcamp focused on modern JavaScript stack including Node.js, Express, and MongoDB."
                icon={<Award size={20} className="text-portfolio-lightBlue" />}
                imageUrl="https://images.unsplash.com/photo-1544256718-3bcf237f3974?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
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
  imageUrl?: string;
}

const QualificationCard = ({ title, institution, date, description, icon, imageUrl }: QualificationCardProps) => {
  return (
    <div className="relative">
      <div className="absolute -left-12 top-1 w-6 h-6 bg-portfolio-dark rounded-full border-2 border-portfolio-lightBlue flex items-center justify-center">
        {icon}
      </div>
      <Card className="p-6 bg-portfolio-dark/70 border border-portfolio-code-highlight/20 hover:shadow-md hover:shadow-portfolio-lightBlue/10 transition-all duration-300 group overflow-hidden">
        {imageUrl && (
          <div className="absolute inset-0 opacity-10 bg-cover bg-center z-0" style={{ backgroundImage: `url(${imageUrl})` }}></div>
        )}
        <div className="relative z-10">
          <div className="flex items-start justify-between mb-2">
            <h4 className="font-bold text-lg text-portfolio-code-text group-hover:text-portfolio-lightBlue transition-colors">{title}</h4>
          </div>
          <div className="mb-2 flex items-center text-sm text-portfolio-code-comment">
            <Calendar size={14} className="mr-1" /> 
            <span>{date}</span>
          </div>
          <div className="mb-3 flex items-center text-sm text-portfolio-code-comment font-medium">
            <School size={14} className="mr-1" /> 
            <span>{institution}</span>
          </div>
          <p className="text-portfolio-code-text">{description}</p>
        </div>
      </Card>
    </div>
  );
};

export default QualificationsSection;

