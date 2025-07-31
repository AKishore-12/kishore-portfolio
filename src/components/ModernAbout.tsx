import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const ModernAbout = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const content = contentRef.current;
    if (!section || !title || !content) return;
    gsap.fromTo(title, {
      y: 100,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        end: "bottom 20%"
      }
    });
    gsap.fromTo(content, {
      y: 50,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: section,
        start: "top 60%",
        end: "bottom 20%"
      }
    });
  }, []);
  return <section id="about" ref={sectionRef} className="min-h-screen flex items-center py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 ref={titleRef} className="text-5xl md:text-7xl font-light text-white mb-12 leading-tight">
              About
            </h2>
          </div>
          
          <div ref={contentRef} className="space-y-8">
            <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed">
            I'm a dedicated AI/ML Engineer focused on building intelligent systems that solve real-world problems and create measurable impact. I enjoy diving deep into data, experimenting with models, and refining solutions until they're production-ready.            </p>
            
            <p className="text-lg text-white/60 leading-relaxed">
            Currently pursuing a B.Tech in Artificial Intelligence and Data Science at Panimalar Engineering College, Chennai. My journey into AI began with curiosity — and grew into a passion for creating meaningful, responsible technology.            </p>

            <p className="text-lg text-white/60 leading-relaxed">
            I thrive in collaborative environments, love learning through building, and continuously explore new ideas in deep learning, NLP, and MLOps. My goal is to contribute to AI solutions that are both impactful and human-centered.
            </p>
            
          </div>
        </div>
      </div>
    </section>;
};
export default ModernAbout;