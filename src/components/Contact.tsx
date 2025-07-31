
import { Mail, Github, Linkedin, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'arumaikannankishore@gmail.com',
      href: 'mailto:arumaikannankishore@gmail.com',
      description: 'Primary communication channel',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/kishore-ai',
      href: 'https://linkedin.com/in/kishore-ai',
      description: 'Professional networking',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/AKishore-12',
      href: 'https://github.com/AKishore-12',
      description: 'Code repositories & projects',
      color: 'from-gray-700 to-gray-800'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 63827 07597',
      href: 'tel:+916382707597',
      description: 'Direct contact line',
      color: 'from-green-500 to-green-600'
    }
  ];

  const additionalInfo = [
    {
      icon: MapPin,
      label: 'Location',
      value: 'Chennai, Tamil Nadu, India'
    },
    {
      icon: Clock,
      label: 'Response Time',
      value: 'Within 24 hours'
    }
  ];

  return (
    <section id="contact" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(0,0,0,0.3) 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container-width section-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-playfair font-semibold mb-6 text-slate-900">
              Let's Connect
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your AI vision to life? I'm here to help you navigate the possibilities 
              and create intelligent solutions that drive real impact.
            </p>
            <div className="w-24 h-1 bg-slate-900 rounded mx-auto mt-8"></div>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {/* Contact Methods */}
            <div className="lg:col-span-2">
              <div className="grid md:grid-cols-2 gap-6">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.href}
                    target={method.href.startsWith('mailto:') || method.href.startsWith('tel:') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div className="bg-white rounded-2xl p-8 border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                      {/* Gradient Background */}
                      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${method.color}`}></div>
                      
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${method.color} shadow-lg`}>
                          <method.icon size={24} className="text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-xl font-playfair font-semibold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
                            {method.label}
                          </h3>
                          <p className="text-slate-600 text-sm mb-3">{method.description}</p>
                          <p className="text-slate-800 font-medium text-sm break-all group-hover:text-slate-600 transition-colors">
                            {method.value}
                          </p>
                        </div>
                      </div>
                      
                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-50/0 to-slate-50/0 group-hover:from-slate-50/30 group-hover:to-transparent transition-all duration-500 pointer-events-none rounded-2xl"></div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg">
                <h3 className="text-xl font-playfair font-semibold text-slate-900 mb-6">
                  Quick Info
                </h3>
                <div className="space-y-6">
                  {additionalInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="p-2 bg-slate-100 rounded-lg">
                        <info.icon size={20} className="text-slate-700" />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-900 mb-1">{info.label}</h4>
                        <p className="text-slate-600 text-sm">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <h3 className="text-lg font-playfair font-semibold text-green-800">
                    Available for Projects
                  </h3>
                </div>
                <p className="text-green-700 text-sm leading-relaxed">
                  Currently accepting new projects and collaborations. 
                  Let's discuss how we can work together to bring your AI ideas to life.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-playfair font-semibold text-white mb-6">
              Ready to Start Your AI Journey?
            </h3>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed mb-8">
              Whether you have a specific project in mind or just want to explore the possibilities, 
              I'm here to help you harness the power of artificial intelligence.
            </p>
            <Button 
              onClick={() => window.location.href = 'mailto:arumaikannankishore@gmail.com'}
              className="px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 rounded-full font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <Send size={20} className="mr-2" />
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
