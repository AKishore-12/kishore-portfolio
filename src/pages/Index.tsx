
import { useState, useEffect } from 'react';
import Preloader from '@/components/Preloader';
import Projects from '@/components/Projects';
import SmoothScroll from '@/components/SmoothScroll';
import AnimatedBackground from '@/components/AnimatedBackground';
import ModernNavigation from '@/components/ModernNavigation';
import ModernHero from '@/components/ModernHero';
import ModernAbout from '@/components/ModernAbout';
import ModernWork from '@/components/ModernWork';
import ModernSkills from '@/components/ModernSkills';
import ModernCertifications from '@/components/ModernCertifications';
import ModernAchievements from '@/components/ModernAchievements';
import ModernContact from '@/components/ModernContact';
import WhatImLookingFor from '@/components/WhatImLookingFor';
import Resume from '@/components/Resume';

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Prevent scrolling during loading
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [loading]);

  const handlePreloaderComplete = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && <Preloader onComplete={handlePreloaderComplete} />}
      
      <div className={`${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        <AnimatedBackground />
        
        <SmoothScroll>
          <ModernNavigation />
          <main>
            <ModernHero />
            <ModernAbout />
            <ModernWork />
            <ModernSkills />
            <ModernCertifications />
            <ModernAchievements />
            <WhatImLookingFor />
            <Resume />
            <ModernContact />
          </main>
        </SmoothScroll>
      </div>
    </>
  );
};

export default Index;
