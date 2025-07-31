
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Code, Zap, Target, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI/ML Consulting',
      description: 'Strategic guidance to transform your business with artificial intelligence and machine learning solutions.',
      features: [
        'AI Strategy Development',
        'Model Architecture Design', 
        'Performance Optimization',
        'Technical Documentation',
        'ROI Assessment'
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Code,
      title: 'Custom AI Development',
      description: 'End-to-end development of tailored AI solutions including vision systems, NLP applications, and predictive analytics.',
      features: [
        'Computer Vision Solutions',
        'Natural Language Processing',
        'Predictive Analytics',
        'Model Training & Deployment',
        'API Integration'
      ],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Zap,
      title: 'MLOps Implementation',
      description: 'Streamline your ML workflow with robust MLOps practices for scalable and maintainable AI systems.',
      features: [
        'CI/CD for ML Models',
        'Model Monitoring',
        'Automated Retraining',
        'Cloud Infrastructure',
        'Version Control'
      ],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Target,
      title: 'AI Training & Workshops',
      description: 'Comprehensive training programs to upskill your team in AI/ML technologies and best practices.',
      features: [
        'Team Training Sessions',
        'Workshop Development',
        'Hands-on Projects',
        'Best Practices Guide',
        'Ongoing Mentorship'
      ],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="services" className="py-32 bg-slate-50">
      <div className="container-width section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-playfair font-semibold mb-6 text-slate-900">
              Services & Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive AI/ML services designed to accelerate your digital transformation 
              and unlock the power of intelligent automation
            </p>
            <div className="w-24 h-1 bg-slate-900 rounded mx-auto mt-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="group bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                {/* Gradient Header */}
                <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                
                <CardHeader className="p-8">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} mb-6 shadow-lg`}>
                    <service.icon size={32} className="text-white" />
                  </div>
                  
                  <CardTitle className="text-2xl font-playfair font-semibold text-slate-900 mb-4">
                    {service.title}
                  </CardTitle>
                  
                  <CardDescription className="text-slate-600 text-lg leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="px-8 pb-8">
                  <div className="space-y-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3 group/feature">
                        <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                        <span className="text-slate-700 font-medium group-hover/feature:text-slate-900 transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h3>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
              Let's discuss how we can leverage artificial intelligence to solve your unique challenges 
              and drive innovation in your industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-slate-900 rounded-full font-medium hover:bg-slate-100 transition-all duration-300 hover:shadow-lg">
                Schedule a Consultation
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-slate-900 transition-all duration-300">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
