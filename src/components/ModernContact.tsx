
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ModernContact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const content = contentRef.current;

    if (!section || !title || !content) return;

    gsap.fromTo(title,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        }
      }
    );

    gsap.fromTo(content,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 60%",
        }
      }
    );

  }, []);

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="min-h-screen flex items-center py-32"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 
              ref={titleRef}
              className="text-5xl md:text-7xl font-light text-white mb-12 leading-tight"
            >
              Let's Talk
            </h2>
          </div>
          
          <div ref={contentRef} className="space-y-12">
            <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed">
              Ready to bring your AI vision to life? Let's create something extraordinary together.
            </p>
            
            <div className="space-y-8">
              <a 
                href="mailto:arumaikannankishore@gmail.com"
                className="block group"
                data-cursor="hover"
              >
                <span className="text-sm text-white/40 tracking-wider mb-2 block">EMAIL</span>
                <span className="text-xl text-white group-hover:translate-x-4 transition-transform duration-300 block">
                  arumaikannankishore@gmail.com
                </span>
              </a>
              
              <a 
                href="https://linkedin.com/in/kishore-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
                data-cursor="hover"
              >
                <span className="text-sm text-white/40 tracking-wider mb-2 block">LINKEDIN</span>
                <span className="text-xl text-white group-hover:translate-x-4 transition-transform duration-300 block">
                  linkedin.com/in/kishore-ai
                </span>
              </a>
              
              <a 
                href="https://github.com/AKishore-12"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
                data-cursor="hover"
              >
                <span className="text-sm text-white/40 tracking-wider mb-2 block">GITHUB</span>
                <span className="text-xl text-white group-hover:translate-x-4 transition-transform duration-300 block">
                  github.com/AKishore-12
                </span>
              </a>
            </div>

            <div className="pt-8">
              <span className="text-sm text-white/40 tracking-wider">AVAILABILITY</span>
              <div className="flex items-center mt-2">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-white/60">Available for new projects</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-20 pt-8">
          <div className="flex justify-between items-center text-white/40 text-sm">
            <span>© 2024 Kishore</span>
            <span>Chennai, India</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernContact;
