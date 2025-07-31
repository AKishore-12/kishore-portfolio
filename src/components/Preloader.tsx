
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Counter animation
    gsap.to(counterRef.current, {
      textContent: 100,
      duration: 2.5,
      ease: "power2.inOut",
      snap: { textContent: 1 },
      onUpdate: function() {
        if (counterRef.current) {
          counterRef.current.textContent = Math.round(Number(counterRef.current.textContent)) + '%';
        }
      }
    });

    // Progress bar animation
    gsap.to(progressRef.current, {
      scaleX: 1,
      duration: 2.5,
      ease: "power2.inOut"
    });

    // Exit animation
    tl.to(preloaderRef.current, {
      y: "-100%",
      duration: 1,
      ease: "power3.inOut",
      delay: 2.8,
      onComplete: onComplete
    });

  }, [onComplete]);

  return (
    <div 
      ref={preloaderRef}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
    >
      <div className="text-center">
        <span 
          ref={counterRef}
          className="block text-6xl font-light text-white mb-8"
        >
          0%
        </span>
        <div className="w-64 h-px bg-white/20 relative">
          <div 
            ref={progressRef}
            className="absolute left-0 top-0 h-full bg-white origin-left scale-x-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
