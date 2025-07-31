
import { Code, Brain, Cloud, Database, Zap, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['Python', 'SQL'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Machine Learning & AI',
      icon: Brain,
      skills: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'NLP', 'Computer Vision'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'MLOps & Tools',
      icon: Zap,
      skills: ['MLflow', 'Airflow', 'DVC', 'DAGsHub', 'Docker'],
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      skills: ['AWS (S3, EC2)', 'Azure (basic)'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Libraries & Frameworks',
      icon: Database,
      skills: ['OpenCV', 'MediaPipe', 'Flask', 'Pandas', 'NumPy'],
      color: 'from-teal-500 to-teal-600'
    },
    {
      title: 'Development Tools',
      icon: Wrench,
      skills: ['Jupyter', 'GitHub', 'Git'],
      color: 'from-rose-500 to-rose-600'
    }
  ];

  return (
    <section id="skills" className="py-32 bg-white">
      <div className="container-width section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-playfair font-semibold mb-6 text-slate-900">
              Technical Expertise
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A comprehensive toolkit spanning machine learning, cloud computing, and modern development practices
            </p>
            <div className="w-24 h-1 bg-slate-900 rounded mx-auto mt-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  {/* Background Gradient */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${category.color}`}></div>
                  
                  {/* Icon */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.color} mb-6 shadow-lg`}>
                    <category.icon size={24} className="text-white" />
                  </div>
                  
                  <h3 className="text-xl font-playfair font-semibold mb-6 text-slate-900 group-hover:text-slate-700 transition-colors">
                    {category.title}
                  </h3>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center space-x-3 group/skill">
                        <div className="w-2 h-2 bg-slate-300 rounded-full group-hover/skill:bg-slate-600 transition-colors"></div>
                        <span className="text-slate-700 font-medium group-hover/skill:text-slate-900 transition-colors">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-50/0 to-slate-50/0 group-hover:from-slate-50/50 group-hover:to-transparent transition-all duration-500 pointer-events-none rounded-2xl"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Skills Summary */}
          <div className="mt-20 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold text-white mb-6">
              Continuous Learning & Growth
            </h3>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
              methodologies, and best practices to stay at the forefront of AI/ML innovation.
            </p>
            <div className="flex justify-center mt-8 space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">5+</div>
                <div className="text-slate-400 text-sm">Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">3+</div>
                <div className="text-slate-400 text-sm">Major Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">15+</div>
                <div className="text-slate-400 text-sm">Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
