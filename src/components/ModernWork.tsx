
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ModernWork = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const projectsRef = useRef<HTMLDivElement[]>([]);

  const projects = [
    {
      title: 'News AI Agent',
      category: 'Multi-Agent Systems',
      year: '2024',
      description:
        'A multi-agent system that automates research and writing of tech news articles using Google Gemini. Incorporates a senior researcher agent and a writer agent to generate structured, markdown-ready content.',
      tech: ['CrewAI', 'Google Gemini LLM', 'Python'],
      impact: 'Generated 10+ articles with 80% reduction in content creation time',
      github: 'https://github.com/AKishore-12/News_AI_Agent',
    },
    {
      title: 'Build Transformer from Scratch',
      category: 'Deep Learning',
      year: '2024',
      description:
        'Minimal educational GPT-style Transformer built from the ground up in PyTorch. Demonstrates core concepts like self-attention, tokenization, and autoregressive generation in under 500 lines of code.',
      tech: ['PyTorch', 'NumPy', 'Python'],
      impact: 'Simplified Transformer concepts for 100+ learners via clean codebase',
      github: 'https://github.com/AKishore-12/Build_Transformer_from_scratch',
    },
    {
      title: 'Student Performance Indicator',
      category: 'Machine Learning',
      year: '2024',
      description:
        'End-to-end ML pipeline predicting student academic outcomes with 87% accuracy. Includes automated report generation and actionable intervention recommendations.',
      tech: ['Flask', 'Scikit-learn', 'MLflow', 'PostgreSQL'],
      impact: 'Reduced dropout risk by 23% through predictive analytics',
      github: 'https://github.com/AKishore-12/student-performance-indicator',
    },
    {
      title: 'NeuroBlink Communication System',
      category: 'Assistive Technology',
      year: '2024',
      description:
        'AI-powered communication system using eye-blink Morse code recognition for users with motor impairments. Achieved 95% gesture recognition accuracy.',
      tech: ['OpenCV', 'MediaPipe', 'Gemini LLM', 'Python'],
      impact: 'Enabled communication for 50+ motor-impaired users',
      github: 'https://github.com/AKishore-12/Neuro-Blink',
    },
    {
      title: 'Document Q&A RAG',
      category: 'LLM Applications',
      year: '2024',
      description:
        'Streamlit app for answering questions over PDF documents using Retrieval-Augmented Generation (RAG) with Gemini LLM and LangChain. Includes vector store search and contextual answers.',
      tech: ['Streamlit', 'LangChain', 'Gemini LLM', 'FAISS'],
      impact: 'Delivered 90% accurate responses across 50+ PDF queries',
      github: 'https://github.com/AKishore-12/Document_QA_RAG',
    },
    {
      title: 'Text-to-SQL Query Generator',
      category: 'Natural Language Interfaces',
      year: '2024',
      description:
        'Streamlit app that translates plain English questions into executable SQL queries using Google Gemini. Works on a sample student database with live results.',
      tech: ['Streamlit', 'Gemini LLM', 'SQLite', 'Python'],
      impact: 'Converted 100+ queries with 92% SQL accuracy on test cases',
      github: 'https://github.com/AKishore-12/Text_SQL_Queries',
    },
  ];
  
  

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;

    if (!section || !title) return;

    gsap.fromTo(title,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        }
      }
    );

    projectsRef.current.forEach((project, index) => {
      if (project) {
        gsap.fromTo(project,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
            delay: index * 0.2,
            scrollTrigger: {
              trigger: project,
              start: "top 80%",
            }
          }
        );
      }
    });

  }, []);

  return (
    <section 
      id="work" 
      ref={sectionRef}
      className="min-h-screen py-32"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 
          ref={titleRef}
          className="text-5xl md:text-7xl font-light text-white mb-20 leading-tight"
        >
          Featured Projects
        </h2>
        
        <div className="space-y-1">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={el => { if (el) projectsRef.current[index] = el; }}
              className="group border-b border-white/10 hover:border-white/30 transition-colors duration-500"
              data-cursor="hover"
            >
              <div className="py-12 grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-1">
                  <span className="text-white/40 text-sm font-light">
                    0{index + 1}
                  </span>
                </div>
                
                <div className="lg:col-span-4">
                  <h3 className="text-2xl md:text-3xl font-light text-white group-hover:translate-x-4 transition-transform duration-500">
                    {project.title}
                  </h3>
                </div>
                
                <div className="lg:col-span-3">
                  <p className="text-white/60 text-sm leading-relaxed mb-2">
                    {project.description}
                  </p>
                  <p className="text-white/40 text-xs font-medium">
                    {project.impact}
                  </p>
                </div>
                
                <div className="lg:col-span-2">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="text-xs text-white/40 border border-white/20 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="lg:col-span-2 text-right">
                  <div className="space-y-2">
                    <div>
                      <span className="text-white/40 text-sm font-light">
                        {project.category}
                      </span>
                      <br />
                      <span className="text-white/60 text-xs">
                        {project.year}
                      </span>
                    </div>
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white text-xs underline transition-colors duration-300"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModernWork;
