
import { Trophy, Award, Star, Calendar } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: 'Top 10 Finalist – MozoHack 6.0',
      organization: 'SRM University',
      year: '2025',
      description: 'Selected among top 10 teams in a competitive hackathon focused on innovative tech solutions, competing against 500+ participants.',
      icon: Trophy,
      color: 'from-amber-500 to-amber-600',
      featured: true
    },
    {
      title: 'Global Rank 4869 – CodeVita Season 12',
      organization: 'TCS',
      year: '2024',
      description: 'Achieved global ranking in one of the world\'s largest coding competitions with 200,000+ participants worldwide.',
      icon: Award,
      color: 'from-blue-500 to-blue-600',
      featured: false
    }
  ];

  return (
    <section id="achievements" className="py-32 bg-white">
      <div className="container-width section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-playfair font-semibold mb-6 text-slate-900">
              Recognition & Awards
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Milestones that reflect my commitment to excellence and innovation in the field of technology
            </p>
            <div className="w-24 h-1 bg-slate-900 rounded mx-auto mt-8"></div>
          </div>
          
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <div key={index} className={`group ${achievement.featured ? 'lg:scale-105' : ''}`}>
                <div className={`relative overflow-hidden bg-gradient-to-br ${
                  achievement.featured 
                    ? 'from-white via-slate-50 to-slate-100' 
                    : 'from-white to-slate-50'
                } rounded-2xl border ${
                  achievement.featured 
                    ? 'border-slate-300 shadow-xl' 
                    : 'border-slate-200 shadow-lg'
                } hover:shadow-2xl transition-all duration-500 hover:-translate-y-1`}>
                  
                  {/* Background Pattern */}
                  {achievement.featured && (
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                      <Star size={128} className="text-slate-900" />
                    </div>
                  )}
                  
                  <div className="grid lg:grid-cols-4 gap-8 p-8 lg:p-12">
                    {/* Icon Section */}
                    <div className="lg:col-span-1 flex flex-col items-center lg:items-start">
                      <div className={`inline-flex p-6 rounded-2xl bg-gradient-to-r ${achievement.color} shadow-lg mb-4`}>
                        <achievement.icon size={40} className="text-white" />
                      </div>
                      
                      {achievement.featured && (
                        <span className="inline-flex items-center space-x-2 text-sm font-medium text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                          <Star size={14} />
                          <span>Featured</span>
                        </span>
                      )}
                    </div>
                    
                    {/* Content Section */}
                    <div className="lg:col-span-3">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div className="flex-1">
                          <h3 className={`${
                            achievement.featured ? 'text-2xl lg:text-3xl' : 'text-xl lg:text-2xl'
                          } font-playfair font-semibold text-slate-900 mb-2 leading-tight`}>
                            {achievement.title}
                          </h3>
                          <div className="flex items-center space-x-4 text-slate-600 mb-4">
                            <span className="font-medium text-lg">{achievement.organization}</span>
                            <div className="flex items-center space-x-2">
                              <Calendar size={16} />
                              <span className="font-medium">{achievement.year}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <p className={`text-slate-700 leading-relaxed ${
                        achievement.featured ? 'text-lg' : 'text-base'
                      }`}>
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Gradient Border */}
                  <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${achievement.color} opacity-60`}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-20 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-playfair font-semibold text-white mb-4">
                By the Numbers
              </h3>
              <p className="text-slate-300 text-lg">
                Quantifying excellence in competitive programming and innovation
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-white">2</div>
                <div className="text-slate-300">Major Awards</div>
                <div className="text-slate-400 text-sm">Recognition for technical excellence</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-white">500+</div>
                <div className="text-slate-300">Competitors Surpassed</div>
                <div className="text-slate-400 text-sm">In hackathon competitions</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-white">200K+</div>
                <div className="text-slate-300">Global Participants</div>
                <div className="text-slate-400 text-sm">In coding competitions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
