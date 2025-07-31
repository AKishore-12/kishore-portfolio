
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    if (!cursor || !follower) return;

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX - 2,
        y: e.clientY - 3,
        duration: 0
      });
      
      gsap.to(follower, {
        x: e.clientX - 16,
        y: e.clientY - 16,
        duration: 0.3
      });
    };

    const onMouseEnter = () => {
      gsap.to([cursor, follower], {
        opacity: 1,
        duration: 0.3
      });
    };

    const onMouseLeave = () => {
      gsap.to([cursor, follower], {
        opacity: 0,
        duration: 0.3
      });
    };

    const onHoverEnter = () => {
      gsap.to(follower, {
        scale: 2,
        duration: 0.3
      });
    };

    const onHoverLeave = () => {
      gsap.to(follower, {
        scale: 1,
        duration: 0.3
      });
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);

    // Add hover effects to interactive elements
    const hoverElements = document.querySelectorAll('a, button, [data-cursor="hover"]');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', onHoverEnter);
      el.addEventListener('mouseleave', onHoverLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      hoverElements.forEach(el => {
        el.removeEventListener('mouseenter', onHoverEnter);
        el.removeEventListener('mouseleave', onHoverLeave);
      });
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef}
        className="fixed w-4 h-6 pointer-events-none z-[60] opacity-0"
        style={{
          background: 'linear-gradient(45deg, transparent 0%, transparent 40%, white 40%, white 60%, transparent 60%)',
          clipPath: 'polygon(0 0, 70% 0, 100% 30%, 30% 100%, 0 70%)'
        }}
      />
      <div 
        ref={followerRef}
        className="fixed w-8 h-8 border border-white/50 rounded-full pointer-events-none z-[59] opacity-0"
      />
    </>
  );
};

export default AnimatedCursor;
