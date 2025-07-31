import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Download, ExternalLink, Calendar, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Resume = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const content = contentRef.current;

    if (!section || !title || !content) return;

    // Title animation
    gsap.fromTo(title,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 50%",
          scrub: false,
        }
      }
    );

    // Content animation
    gsap.fromTo(content,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.3,
        scrollTrigger: {
          trigger: content,
          start: "top 85%",
          end: "top 50%",
          scrub: false,
        }
      }
    );

  }, []);

  const experience = [
    {
      role: 'Machine Learning Engineer Intern',
      company: 'Astellas Pharma Inc.',
      location: 'Remote',
      period: 'Jun 2024 - Present',
      achievements: [
        'Developed computer vision models for pharmaceutical quality control achieving 92% accuracy',
        'Implemented MLOps pipelines using MLflow and Docker, reducing model deployment time by 60%',
        'Built automated data validation systems improving data quality by 45% and reducing manual effort'
      ]
    },
    {
      role: 'Data Science Intern',
      company: 'Bajaj Finserv',
      location: 'Pune, India',
      period: 'Jan 2024 - May 2024',
      achievements: [
        'Created predictive models for credit risk assessment with 87% accuracy using ensemble methods',
        'Developed automated reporting dashboards saving 20+ hours weekly for the analytics team',
        'Implemented A/B testing framework for model validation and performance monitoring'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      institution: 'VIT Chennai',
      location: 'Chennai, India',
      period: '2022 - 2026',
      details: 'CGPA: 8.43/10 | Relevant Coursework: Machine Learning, Deep Learning, Computer Vision, Data Structures'
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="resume"
      className="min-h-screen py-32 px-6 relative"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          ref={titleRef}
          className="text-4xl md:text-6xl font-light text-white mb-20 text-center"
        >
          Professional
          <span className="block text-5xl md:text-7xl mt-4 opacity-70">
            Resume
          </span>
        </h2>

        <div ref={contentRef} className="space-y-16">
          {/* Download Button */}
          <div className="text-center">
            <a 
              href="https://drive.google.com/file/d/1xm-SOzcv93rFRa6GnkQqO-fzUm3rgxtD/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/30 rounded-2xl px-8 py-4 text-white transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              <span>Download PDF Resume</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Experience Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-8">Education</h3>
            <div className="border-l-2 border-white/30 pl-6 relative mb-6">
              <div className="absolute -left-2 top-0 w-3 h-3 bg-white rounded-full"></div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h4 className="text-xl font-medium text-white">Bachelor of Technology in Artificial Intelligence and Data Science</h4>
                <div className="flex items-center gap-4 text-white/60 text-sm">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Nov 2022 – May 2026
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    Chennai, Tamilnadu
                  </span>
                </div>
              </div>
              <p className="text-white/90 text-lg mb-2">Panimalar Engineering College Chennai City Campus</p>
              <p className="text-white/70 text-lg mb-2">CGPA: 8.59</p>
              <p className="text-white/70">Courses: Operating Systems, Data Structures, Algorithms, Artificial Intelligence, Distributed Systems, Computer Networks, Databases</p>
            </div>
            <div className="border-l-2 border-white/30 pl-6 relative">
              <div className="absolute -left-2 top-0 w-3 h-3 bg-white rounded-full"></div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h4 className="text-xl font-medium text-white">Higher Secondary Education</h4>
                <div className="flex items-center gap-4 text-white/60 text-sm">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Jun 2018 – Mar 2020
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    Karaikudi, Tamilnadu
                  </span>
                </div>
              </div>
              <p className="text-white/90 text-lg mb-2">Vidhya Giri Higher Secondary School</p>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-8">Experience</h3>
            <div className="border-l-2 border-white/30 pl-6 relative mb-6">
              <div className="absolute -left-2 top-0 w-3 h-3 bg-white rounded-full"></div>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h4 className="text-xl font-medium text-white">AI Intern</h4>
                <div className="flex items-center gap-4 text-white/60 text-sm">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Oct 2024 – Nov 2024
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    Remote
                  </span>
                </div>
              </div>
              <p className="text-white/90 text-lg mb-2">Infosys Springboard</p>
              <ul className="list-disc pl-6 text-white/70 text-lg mb-2">
                <li>Developed a full-stack ML pipeline (Pandas, Scikit-learn) processing a food-allergen dataset, achieving 99% F1-score with a Random Forest model.</li>
                <li>Built a Streamlit web interface for real-time prediction of nut, gluten, and dairy allergens with responsive sub-second latency.</li>
                <li>Hosted the application on Render, and exposed a RESTful Flask API for seamless integration.</li>
                <li>Authored reproducible code and documentation with GitHub, Jupyter Notebooks, and CI/CD, supporting peer review and collaborative development.</li>
              </ul>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-8">Key Projects</h3>
            <div className="space-y-6">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h4 className="text-lg font-medium text-white mb-3">News AI Agent</h4>
                <p className="text-white/60 text-sm mb-3">Python, CrewAI, Google Gemini LLM</p>
                <p className="text-white/70 text-sm leading-relaxed">A multi-agent system for researching and writing news articles about technology trends using CrewAI and Google Gemini LLM. Reduces manual effort by 80%. Features senior researcher and writer agents, automates tech news writing, and outputs SEO-optimized articles in markdown. Uses CrewAI and Google Gemini for LLM tasks.</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h4 className="text-lg font-medium text-white mb-3">Build Transformer from Scratch</h4>
                <p className="text-white/60 text-sm mb-3">Python, PyTorch, NumPy</p>
                <p className="text-white/70 text-sm leading-relaxed">A minimal, educational implementation of a GPT-style Transformer language model using PyTorch. Demonstrates core ideas behind modern LLMs. Implements a character-level Transformer (GPT) from scratch in a single Python file. Trains on any text file, generates new text samples, and is simple and readable for educational purposes.</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h4 className="text-lg font-medium text-white mb-3">Student Performance Indicator</h4>
                <p className="text-white/60 text-sm mb-3">Python, Scikit-learn, MLflow, Docker</p>
                <p className="text-white/70 text-sm leading-relaxed">A predictive analytics system using machine learning to forecast student academic performance. Achieves R² of 0.89. Implements and containerizes a Flask web app for predicting math scores. Uses Scikit-learn, MLflow for experiment tracking, and Docker for deployment.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;