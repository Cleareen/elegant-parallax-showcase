
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
            A lifelong learner, passionate teacher, and joyful coder who believes technology can change lives.
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
                src="/lovable-uploads/89050242-9fbf-45d4-bbf6-5cb9ca3dd2df.jpg" 
                alt="Eddie Mkansi" 
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
              <h3 className="text-2xl font-semibold text-portfolio-blue mb-2">My Journey</h3>
              <p className="text-gray-600 mb-4">
                Hi there! My name is Eddie, and honestly — the moment I touched a computer for the first time, I knew I had found magic. I still remember how it felt. I was just a kid, eyes wide open, heart racing, completely amazed by what a computer could do. But while others saw it as just a tool or a toy, I saw something much deeper — I wanted to know how it worked. What made it tick? How could pressing a few keys turn into something so powerful?
              </p>
              <p className="text-gray-600 mb-4">
                That curiosity quickly turned into a passion. I wasn't satisfied with just using a computer — I wanted to create with it. So I started learning on my own. I watched YouTube tutorials late at night, googled every little question I had, and slowly began teaching myself how to build websites, write code, and understand the logic behind the screen. HTML, CSS, Python, JavaScript… each new discovery felt like I was unlocking a new superpower.
              </p>
            </div>
            
            <div 
              className={`transition-all duration-700 ${
                imageInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <h3 className="text-2xl font-semibold text-portfolio-blue mb-2">Education & Teaching</h3>
              <p className="text-gray-600 mb-4">
                I didn't want to keep all that excitement to myself — I wanted to share it. That's what pushed me to pursue a Bachelor of Education, and I was beyond excited when I got accepted at the University of the Witwatersrand. I majored in Information Technology and Mathematics because I wanted to become a real problem-solver — someone who could not only understand technology but teach it in a way that makes others just as excited as I was when I first started.
              </p>
              <p className="text-gray-600">
                As a teacher, I've spent the last 5+ years teaching Computer Applications Technology (CAT), Digital Technologies, Mathematics, and Information Technology (Java and Delphi). I've helped students build their first programs, watched their eyes light up when a project finally works, and even started robotics clubs to get hands-on with tech like Arduino, Micro:bit, and LEGO Spike Prime.
              </p>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto mb-16">
          <div className={`transition-all duration-700 ${
            imageInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '600ms' }}>
            <h3 className="text-2xl font-semibold text-center text-portfolio-blue mb-6">Continuous Learning</h3>
            <p className="text-gray-600 mb-4">
              And while teaching, I never stopped learning. I've earned certifications from Google, AWS, IBM, and Cisco, and completed amazing bootcamps like ALX Software Engineering and ExploAI Data Engineering, pushing myself to grow into areas like cloud computing, data analytics, and cybersecurity.
            </p>
            <p className="text-gray-600 mb-4">
              But no matter how far I go, that childhood joy and curiosity still live in me. I still get excited when I figure out a tricky bug. I still celebrate quietly when I write a really good function. And I still believe that technology — when used with heart — can change lives, open doors, and give others the same spark I had when I first sat in front of a computer.
            </p>
            <p className="text-gray-600 text-center font-medium">
              So that's me. A lifelong learner, a passionate teacher, a joyful coder, and someone who still believes that computers are a little bit magical.
            </p>
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
