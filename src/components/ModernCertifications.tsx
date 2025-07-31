import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ModernCertifications = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const certifications = [
    {
      title: 'CS50’s Introduction to Computer Science',
      issuer: 'Harvard University',
      year: '2024',
      description: 'Comprehensive introduction to computer science, programming, and problem-solving using C, Python, SQL, and JavaScript.'
    },
    {
      title: 'Machine Learning Specialization',
      issuer: 'DeepLearning.AI',
      year: '2024',
      description: 'Covers supervised and unsupervised learning, best practices, and real-world ML applications.'
    },
    {
      title: 'Deep Learning Specialization',
      issuer: 'DeepLearning.AI',
      year: '2024',
      description: 'In-depth coverage of neural networks, deep learning, CNNs, RNNs, and sequence models.'
    },
    {
      title: 'Natural Language Processing Specialization',
      issuer: 'DeepLearning.AI',
      year: '2024',
      description: 'Covers NLP fundamentals, text processing, sequence models, and transformer architectures.'
    },
    {
      title: 'AWS Academy Cloud Foundations',
      issuer: 'AWS Academy Graduate',
      year: '2024',
      description: 'Fundamentals of AWS cloud infrastructure, services, and best practices.'
    },
    {
      title: 'Artificial Intelligence for Real World Application',
      issuer: 'TCS iON',
      year: '2023',
      description: 'Industry-oriented certification covering practical AI applications, deployment strategies, and ethical considerations for real-world business problems.'
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

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

    // Animate certification cards
    const cards = section.querySelectorAll('.cert-card');
    cards.forEach((card, index) => {
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
      id="certifications" 
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-6xl font-light text-white mb-16 text-center tracking-tight"
        >
          CERTIFICATIONS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={cert.title}
              className="cert-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-white/60 text-sm mb-2">{cert.year}</div>
              <h3 className="text-white font-light text-lg mb-2 leading-tight">
                {cert.title}
              </h3>
              <div className="text-white/70 text-sm mb-4">{cert.issuer}</div>
              <p className="text-white/60 text-sm leading-relaxed">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernCertifications;