import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Brain, Zap, Cloud, Database, Wrench } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ModernSkills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: ['Python', 'SQL', 'Java'],
    },
    {
      title: 'Frameworks & Libraries',
      icon: Brain,
      skills: ['Scikit-learn', 'PyTorch', 'TensorFlow', 'NLTK', 'SpaCy', 'OpenCV', 'YOLOv5', 'MediaPipe', 'Langchain', 'LangGraph', 'Pandas', 'NumPy', 'Flask', 'Streamlit'],
    },
    {
      title: 'MLOps Tools',
      icon: Zap,
      skills: ['MLflow', 'DVC', 'Docker', 'Airflow', 'Jenkins', 'Kubernetes', 'Git', 'GitHub'],
    },
    {
      title: 'Cloud Platforms',
      icon: Cloud,
      skills: ['AWS (S3, EC2, SageMaker)', 'Google Cloud Platform', 'Azure'],
    },
    {
      title: 'Tools & Environments',
      icon: Database,
      skills: ['Linux', 'Jupyter', 'VS Code', 'Postman'],
    },
    {
      title: 'Soft Skills',
      icon: Wrench,
      skills: ['Problem-Solving', 'Communication', 'Team Collaboration', 'Time Management'],
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;
    if (!section || !cards) return;

    gsap.fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Animate skill cards
    const skillCards = cards.querySelectorAll('.skill-card');
    skillCards.forEach((card, index) => {
      gsap.fromTo(card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-6xl font-light text-white mb-16 text-center tracking-tight"
        >
          TECHNICAL SKILLS
        </h2>
        
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className="skill-card bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-6 leading-tight">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-white/10 text-white text-sm font-medium px-3 py-1 rounded-full border border-white/20 hover:bg-white/20 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ModernSkills;