
const About = () => {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="container-width section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-playfair font-semibold mb-6 text-slate-900">
              About Me
            </h2>
            <div className="w-24 h-1 bg-slate-900 rounded mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Main Content */}
            <div className="space-y-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-slate-600 leading-relaxed mb-8 font-light">
                  I'm a passionate <span className="text-slate-900 font-medium">Machine Learning Engineer</span> who 
                  transforms complex data into intelligent solutions that make a real difference in people's lives.
                </p>
                
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  With expertise spanning <span className="text-slate-900 font-medium">Python, Scikit-learn, TensorFlow, and PyTorch</span>, 
                  I specialize in building end-to-end AI systems—from computer vision applications that enhance accessibility 
                  to predictive models that drive business decisions.
                </p>

                <p className="text-lg text-slate-600 leading-relaxed">
                  My approach combines technical excellence with practical impact. Whether developing assistive technologies 
                  for users with motor impairments or creating safety analytics systems, I believe AI should be 
                  <span className="text-slate-900 font-medium"> accessible, ethical, and transformative</span>.
                </p>
              </div>

              {/* Skills Highlight */}
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                <h3 className="text-xl font-playfair font-medium mb-6 text-slate-900">Core Expertise</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    'Machine Learning',
                    'Deep Learning',
                    'Computer Vision',
                    'Natural Language Processing',
                    'MLOps & Deployment',
                    'Cloud Platforms'
                  ].map((skill, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                      <span className="text-slate-700 font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right Column - Education & Certifications */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-playfair font-medium mb-6">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg">B.Tech in AI & Data Science</h4>
                    <p className="text-slate-300 mb-2">Panimalar Engineering College, Chennai</p>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400 text-sm">2022–2026</span>
                      <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">CGPA: 8.59</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-xl font-playfair font-medium text-slate-900">Certifications</h3>
                <div className="space-y-4">
                  {[
                    { title: 'CS50', org: 'Harvard University', highlight: true },
                    { title: 'Machine Learning Specialization', org: 'DeepLearning.AI' },
                    { title: 'Deep Learning Specialization', org: 'DeepLearning.AI' },
                    { title: 'NLP Specialization', org: 'DeepLearning.AI' },
                    { title: 'AWS Cloud Foundations', org: 'AWS Academy' }
                  ].map((cert, index) => (
                    <div key={index} className={`p-4 rounded-lg border transition-all duration-300 hover:shadow-md ${
                      cert.highlight 
                        ? 'bg-slate-50 border-slate-300' 
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium text-slate-900">{cert.title}</h4>
                          <p className="text-sm text-slate-600">{cert.org}</p>
                        </div>
                        {cert.highlight && (
                          <span className="bg-slate-900 text-white px-2 py-1 rounded text-xs font-medium">
                            Featured
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
