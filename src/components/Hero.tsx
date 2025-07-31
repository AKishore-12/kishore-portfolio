
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(0,0,0,0.3) 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container-width section-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Introduction */}
          <div className="stagger-children">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-slate-100 rounded-full text-sm font-medium text-slate-700 border border-slate-200">
                Available for new opportunities
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-semibold mb-8 text-slate-900 leading-[1.1] tracking-tight">
              Kishore A
              <span className="block text-3xl md:text-4xl lg:text-5xl mt-4 text-slate-600">
                AI/ML Engineer
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Crafting intelligent solutions that bridge the gap between 
              <span className="text-slate-900 font-medium"> cutting-edge AI technology</span> and 
              <span className="text-slate-900 font-medium"> real-world impact</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 text-base bg-slate-900 text-white hover:bg-slate-800 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 text-base border-2 border-slate-300 text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 rounded-full font-medium transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-16">
              <a 
                href="https://github.com/AKishore-12" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-200 hover:border-slate-300"
              >
                <Github size={20} className="text-slate-700" />
              </a>
              <a 
                href="https://linkedin.com/in/kishore-ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-200 hover:border-slate-300"
              >
                <Linkedin size={20} className="text-slate-700" />
              </a>
              <a 
                href="mailto:arumaikannankishore@gmail.com"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-slate-200 hover:border-slate-300"
              >
                <Mail size={20} className="text-slate-700" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('about')}
          className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200 hover:border-slate-300"
        >
          <ArrowDown size={20} className="text-slate-700" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
