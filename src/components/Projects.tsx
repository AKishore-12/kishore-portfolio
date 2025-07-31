
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, ExternalLink, Eye, Award } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'News AI Agent',
      description: 'A multi-agent system for researching and writing news articles about technology trends using CrewAI and Google Gemini LLM. Reduces manual effort by 80%.',
      longDescription: 'Features senior researcher and writer agents, automates tech news writing, and outputs SEO-optimized articles in markdown. Uses CrewAI and Google Gemini for LLM tasks.',
      techStack: ['Python', 'CrewAI', 'Google Gemini LLM'],
      category: 'AI Agents',
      featured: true,
      impact: '80% reduction in manual effort',
      github: 'https://github.com/AKishore-12/News_AI_Agent',
      image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&h=600&fit=crop',
    },
    {
      title: 'Build Transformer from Scratch',
      description: 'A minimal, educational implementation of a GPT-style Transformer language model using PyTorch. Demonstrates core ideas behind modern LLMs.',
      longDescription: 'Implements a character-level Transformer (GPT) from scratch in a single Python file. Trains on any text file, generates new text samples, and is simple and readable for educational purposes.',
      techStack: ['Python', 'PyTorch', 'NumPy'],
      category: 'Deep Learning',
      featured: true,
      impact: 'Educational LLM implementation',
      github: 'https://github.com/AKishore-12/Build_Transformer_from_scratch',
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=800&h=600&fit=crop',
    },
    {
      title: 'Student Performance Indicator',
      description: 'A predictive analytics system using machine learning to forecast student academic performance. Achieves R² of 0.89.',
      longDescription: 'Implements and containerizes a Flask web app for predicting math scores. Uses Scikit-learn, MLflow for experiment tracking, and Docker for deployment.',
      techStack: ['Python', 'Scikit-learn', 'MLflow', 'Docker'],
      category: 'Machine Learning',
      featured: true,
      impact: '0.89 R² score, 30% tuning efficiency',
      github: 'https://github.com/AKishore-12/student-performance-indicator',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
    },
    {
      title: 'NeuroBlink',
      description: 'AI-powered eye-blink Morse code communication system for users with motor impairments. Enables 10x faster communication.',
      longDescription: 'Built with OpenCV and MediaPipe for real-time eye tracking, integrated with Gemini LLM for intelligent text processing and Twilio API for seamless communication.',
      techStack: ['OpenCV', 'MediaPipe', 'Gemini LLM', 'Twilio API', 'Python'],
      category: 'Assistive Technology',
      featured: true,
      impact: '10x faster communication',
      github: 'https://github.com/AKishore-12/Neuro-Blink',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop',
    },
    {
      title: 'Document Q&A RAG',
      description: 'A Streamlit app for question answering over a directory of PDF documents using RAG with Google Gemini and LangChain. Enables instant document Q&A.',
      longDescription: 'Loads PDFs, creates a vector store for fast retrieval, and provides context-aware answers. Uses Streamlit, Google Gemini LLM, LangChain, and FAISS.',
      techStack: ['Streamlit', 'Google Gemini LLM', 'LangChain', 'FAISS'],
      category: 'NLP',
      featured: false,
      impact: 'Instant document Q&A',
      github: 'https://github.com/AKishore-12/Document_QA_RAG',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop',
    },
    {
      title: 'Text-to-SQL Query Generator',
      description: 'A Streamlit app that converts natural language questions into SQL queries using Google Gemini LLM and executes them on a sample student database.',
      longDescription: 'Automatically generates and executes SQL queries from plain English, demonstrating LLM-powered text-to-SQL for portfolio and demo purposes.',
      techStack: ['Streamlit', 'Google Gemini LLM', 'SQLite'],
      category: 'NLP',
      featured: false,
      impact: 'Natural language to SQL automation',
      github: 'https://github.com/AKishore-12/Text_SQL_Queries',
      image: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3b43?w=800&h=600&fit=crop',
    },
  ];

  return (
    <section id="projects" className="py-32 bg-slate-50">
      <div className="container-width section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-playfair font-semibold mb-6 text-gradient">
              Featured Work
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              A collection of projects that showcase my expertise in AI/ML development, 
              from assistive technologies to predictive analytics systems.
            </p>
            <div className="w-24 h-1 bg-slate-900 rounded mx-auto mt-8"></div>
          </div>
          
          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card key={index} className={`group overflow-hidden transition-all duration-500 hover:shadow-2xl border-0 ${
                project.featured 
                  ? 'bg-gradient-to-br from-white to-slate-50 shadow-xl' 
                  : 'bg-white shadow-lg hover:shadow-xl'
              }`}>
                <div className={`grid ${project.featured ? 'lg:grid-cols-2' : 'lg:grid-cols-3'} gap-0`}>
                  {/* Image Section */}
                  <div className={`relative overflow-hidden ${project.featured ? 'lg:order-last' : ''}`}>
                    <div className="aspect-[4/3] lg:aspect-auto lg:h-full">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Overlay Actions */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="flex space-x-4">
                          <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300 hover:scale-110">
                            <Eye size={20} className="text-slate-900" />
                          </button>
                          <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300 hover:scale-110">
                            <Github size={20} className="text-slate-900" />
                          </button>
                          <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all duration-300 hover:scale-110">
                            <ExternalLink size={20} className="text-slate-900" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className={`${project.featured ? 'lg:col-span-1' : 'lg:col-span-2'}`}>
                    <CardHeader className={`${project.featured ? 'p-8 lg:p-12' : 'p-8'}`}>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                            project.category === 'Assistive Technology' 
                              ? 'bg-green-100 text-green-800 border border-green-200'
                              : project.category === 'Machine Learning'
                              ? 'bg-blue-100 text-blue-800 border border-blue-200'
                              : 'bg-purple-100 text-purple-800 border border-purple-200'
                          }`}>
                            {project.category}
                          </span>
                          {project.featured && (
                            <span className="flex items-center space-x-1 text-xs font-medium text-amber-600">
                              <Award size={12} />
                              <span>Featured</span>
                            </span>
                          )}
                        </div>
                        <span className="text-sm font-semibold text-slate-900 bg-slate-100 px-3 py-1 rounded-full">
                          {project.impact}
                        </span>
                      </div>
                      
                      <CardTitle className={`${project.featured ? 'text-3xl mb-4' : 'text-2xl mb-3'} font-playfair text-slate-900 leading-tight`}>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:underline">{project.title}</a>
                      </CardTitle>
                      
                      <CardDescription className={`${project.featured ? 'text-lg mb-6' : 'text-base mb-4'} text-slate-600 leading-relaxed`}>
                        {project.featured ? project.longDescription : project.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className={`${project.featured ? 'px-8 lg:px-12 pb-8 lg:pb-12' : 'px-8 pb-8'}`}>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="text-sm bg-slate-100 text-slate-700 border border-slate-200 px-3 py-1 rounded-full hover:border-slate-300 hover:bg-slate-200 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex space-x-4">
                        <button className="flex items-center space-x-2 text-slate-900 hover:text-slate-700 font-medium transition-colors">
                          <Github size={16} />
                          <span>View Code</span>
                        </button>
                        <button className="flex items-center space-x-2 text-slate-900 hover:text-slate-700 font-medium transition-colors">
                          <ExternalLink size={16} />
                          <span>Live Demo</span>
                        </button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
