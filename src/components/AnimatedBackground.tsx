
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedBackground = () => {
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const gradient = gradientRef.current;
    if (!gradient) return;

    gsap.to(gradient, {
      background: "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(120, 219, 255, 0.3) 0%, transparent 50%)",
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(gradient, {
      transform: "scale(1.1) rotate(5deg)",
      duration: 20,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <div 
        ref={gradientRef}
        className="absolute inset-0 opacity-60 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20 blur-3xl"
      />
      <div className="absolute inset-0 bg-black/90" />
      <footer className="text-center text-white/40 py-4 text-xs">
        &copy; Kishore
      </footer>
    </div>
  );
};

export default AnimatedBackground;
