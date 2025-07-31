
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ModernHero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 3.2 });
    
    tl.fromTo(titleRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" }
    )
    .fromTo(subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
      "-=0.5"
    )
    .fromTo(scrollRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" },
      "-=0.3"
    );

    // Floating animation for scroll indicator
    gsap.to(scrollRef.current, {
      y: 10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

  }, []);

  return (
    <section id="home" className="h-screen flex items-center justify-center relative">
      <div className="text-center max-w-6xl mx-auto px-6">
        <h1 
          ref={titleRef}
          className="text-6xl md:text-8xl lg:text-9xl font-light text-white mb-8 leading-none tracking-tight"
        >
          <span className="block text-5xl md:text-7xl lg:text-8xl mb-6 opacity-95">
            KISHORE <span className="opacity-70">A</span>
          </span>
          AI/ML
          <br />
          <span className="block text-4xl md:text-6xl lg:text-7xl opacity-70 mt-4">
            ENGINEER
          </span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-xl md:text-2xl text-white/70 font-light max-w-3xl mx-auto leading-relaxed mb-8"
        >
          Passionate AI/ML Engineer with expertise in building production-ready machine learning systems. 
          Currently seeking opportunities to drive innovation in AI-powered solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
          <button 
            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white/10 hover:bg-white/20 border border-white/30 rounded-2xl px-8 py-4 text-white transition-all duration-300 text-lg font-light"
          >
            View My Work
          </button>
          <button 
            onClick={() => document.getElementById('resume')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-transparent hover:bg-white/10 border border-white/50 rounded-2xl px-8 py-4 text-white transition-all duration-300 text-lg font-light"
          >
            Download Resume
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-white/50">
          <span className="text-xs tracking-wider mb-4 rotate-90 origin-center transform">SCROLL</span>
          <div className="w-px h-16 bg-white/30"></div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
