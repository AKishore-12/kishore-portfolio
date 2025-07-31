import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ModernNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'looking-for', label: 'What I Want' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    gsap.fromTo(nav, 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 3 }
    );
  }, []);

  useEffect(() => {
    const mainContent = document.querySelector('main');
    const navigation = navRef.current;
    
    if (isOpen) {
      gsap.to(menuRef.current, {
        y: 0,
        duration: 0.6,
        ease: "power3.out"
      });
      if (navigation) {
        gsap.to(navigation, {
          y: 80,
          duration: 0.6,
          ease: "power3.out"
        });
      }
      if (mainContent) {
        gsap.to(mainContent, {
          y: 80,
          duration: 0.6,
          ease: "power3.out"
        });
      }
    } else {
      gsap.to(menuRef.current, {
        y: "-100%",
        duration: 0.6,
        ease: "power3.out"
      });
      if (navigation) {
        gsap.to(navigation, {
          y: 0,
          duration: 0.6,
          ease: "power3.out"
        });
      }
      if (mainContent) {
        gsap.to(mainContent, {
          y: 0,
          duration: 0.6,
          ease: "power3.out"
        });
      }
    }
  }, [isOpen]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsOpen(false);
    }
  };

  return (
    <>
      <nav 
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-40 p-6"
      >
        <div className="flex justify-between items-center">
          <div className="text-white font-light text-sm tracking-wider">
            KISHORE A
          </div>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white font-light text-sm tracking-wider hover:opacity-70 transition-opacity"
            data-cursor="hover"
          >
            {isOpen ? 'CLOSE' : 'MENU'}
          </button>
        </div>
      </nav>

      {/* Top Toggle Menu */}
      <div 
        ref={menuRef}
        className="fixed top-0 left-0 right-0 h-20 bg-black/95 backdrop-blur-xl z-50 translate-y-[-100%] border-b border-white/10"
        style={{ cursor: 'none' }}
      >
        <div className="h-full flex items-center justify-center">
          <div className="flex items-center space-x-12">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-white text-sm font-light hover:opacity-70 transition-all duration-300 tracking-wider cursor-none"
                data-cursor="hover"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  cursor: 'none'
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
        
      </div>
    </>
  );
};

export default ModernNavigation;
