import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Users, TrendingUp, MapPin, Clock, DollarSign } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const WhatImLookingFor = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const cards = cardsRef.current?.children;

    if (!section || !title || !cards) return;

    // Title animation
    gsap.fromTo(title,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 50%",
          scrub: false,
        }
      }
    );

    // Cards animation
    gsap.fromTo(cards,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 85%",
          end: "top 50%",
          scrub: false,
        }
      }
    );

  }, []);

  const preferences = [
    {
      icon: Target,
      title: 'Role Type',
      description: 'AI/ML Engineer, Data Scientist, or Machine Learning Researcher',
      details: 'Hands-on technical roles building production ML systems'
    },
    {
      icon: Users,
      title: 'Team Size',
      description: 'Small to medium teams (5-50 people)',
      details: 'Collaborative environment with direct impact visibility'
    },
    {
      icon: TrendingUp,
      title: 'Growth Stage',
      description: 'Early to growth stage startups or innovation teams',
      details: 'Fast-moving environments with learning opportunities'
    },
    {
      icon: MapPin,
      title: 'Location',
      description: 'Remote or hybrid opportunities preferred',
      details: 'Open to relocation for exceptional opportunities'
    },
    {
      icon: Clock,
      title: 'Timeline',
      description: 'Available immediately for the right opportunity',
      details: 'Can start within 2-4 weeks notice period'
    },
    {
      icon: DollarSign,
      title: 'Compensation',
      description: 'Competitive package with equity potential',
      details: 'Open to discussing based on role and company stage'
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="looking-for"
      className="min-h-screen py-32 px-6 relative"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          ref={titleRef}
          className="text-4xl md:text-6xl font-light text-white mb-20 text-center"
        >
          What I'm
          <span className="block text-5xl md:text-7xl mt-4 opacity-70">
            Looking For
          </span>
        </h2>

        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {preferences.map((pref, index) => {
            const IconComponent = pref.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4">
                  {pref.title}
                </h3>
                
                <p className="text-white/80 text-lg mb-4 leading-relaxed">
                  {pref.description}
                </p>
                
                <p className="text-white/60 text-sm leading-relaxed">
                  {pref.details}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed">
            I'm passionate about joining a team where I can contribute to meaningful AI solutions 
            while continuing to grow as an engineer. I value transparency, collaboration, and 
            the opportunity to work on challenging technical problems that have real-world impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatImLookingFor;