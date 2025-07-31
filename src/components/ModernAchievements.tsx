import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ModernAchievements = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const achievements = [
    {
      title: 'Top 10 Finalist, MozoHack 6.0 Hackathon',
      description: 'Selected as one of the top 10 teams out of 250+ at MozoHack 6.0 Hackathon (SRMKZILLA, SRM University, 2025).',
      year: '2025',
      category: 'Hackathon',
    },
    {
      title: 'TCS CodeVita Season 12',
      description: 'Global Rank 4869 (Top 5%) among 100,000+ participants in TCS CodeVita Season 12.',
      year: '2024',
      category: 'Competitive Programming',
    },
    {
      title: 'Coding Problem Solver',
      description: 'Solved 400+ coding problems across LeetCode, GeeksforGeeks, and HackerRank.',
      year: '2022-2024',
      category: 'Programming',
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

    // Animate achievement cards
    const cards = section.querySelectorAll('.achievement-card');
    cards.forEach((card, index) => {
      gsap.fromTo(card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: index * 0.15,
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
      id="achievements" 
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-6xl font-light text-white mb-16 text-center tracking-tight"
        >
          ACHIEVEMENTS
        </h2>
        
        <div className="space-y-8">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.title}
              className="achievement-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-white/60 text-sm px-3 py-1 bg-white/10 rounded-full">
                      {achievement.category}
                    </span>
                    <span className="text-white/60 text-sm">{achievement.year}</span>
                  </div>
                  <h3 className="text-white font-light text-xl mb-3 leading-tight">
                    {achievement.title}
                  </h3>
                  <p className="text-white/70 text-base leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernAchievements;