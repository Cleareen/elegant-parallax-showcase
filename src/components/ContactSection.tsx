
import React, { useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  delay: number;
}

const ContactInfo = ({ icon, title, content, delay }: ContactInfoProps) => {
  const infoRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(infoRef, { once: true });
  
  return (
    <div 
      ref={infoRef}
      className={cn(
        "flex items-start gap-4 transition-all duration-700",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="rounded-full p-3 bg-portfolio-purple/10 text-portfolio-purple">
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-portfolio-blue">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
};

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { toast } = useToast();
  
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  
  const titleInView = useInView(titleRef, { once: true });
  const textInView = useInView(textRef, { once: true });
  const formInView = useInView(formRef, { once: true });
  const socialsInView = useInView(socialsRef, { once: true });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setIsSubmitting(true);
    
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      setName('');
      setEmail('');
      setMessage('');
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 
            ref={titleRef}
            className={cn(
              "text-3xl md:text-4xl font-bold mb-4 text-portfolio-blue transition-all duration-700",
              titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            Get In <span className="text-portfolio-purple">Touch</span>
          </h2>
          <p 
            ref={textRef}
            className={cn(
              "text-gray-600 transition-all duration-700",
              textInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
            style={{ transitionDelay: '200ms' }}
          >
            Have a project in mind or want to discuss a potential collaboration?
            I'd love to hear from you. Reach out using the contact form or through any of the channels below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-8">
            <ContactInfo 
              icon={<Mail size={24} />}
              title="Email"
              content="contact@johndeveloper.com"
              delay={0}
            />
            <ContactInfo 
              icon={<Phone size={24} />}
              title="Phone"
              content="+1 (555) 123-4567"
              delay={200}
            />
            <ContactInfo 
              icon={<MapPin size={24} />}
              title="Location"
              content="San Francisco, CA, USA"
              delay={400}
            />
            
            <div 
              ref={socialsRef}
              className={cn(
                "pt-8 transition-all duration-700",
                socialsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{ transitionDelay: '600ms' }}
            >
              <h3 className="text-xl font-semibold text-portfolio-blue mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="rounded-full p-3 bg-portfolio-purple/10 text-portfolio-purple hover:bg-portfolio-purple hover:text-white transition-colors"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="rounded-full p-3 bg-portfolio-purple/10 text-portfolio-purple hover:bg-portfolio-purple hover:text-white transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="rounded-full p-3 bg-portfolio-purple/10 text-portfolio-purple hover:bg-portfolio-purple hover:text-white transition-colors"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className={cn(
              "rounded-lg p-6 shadow-lg bg-white border border-gray-100 transition-all duration-700",
              formInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <Input 
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input 
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea 
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your message"
                  className="w-full min-h-[150px]"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-portfolio-purple hover:bg-portfolio-purple/90 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="inline-flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="inline-flex items-center">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </span>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
