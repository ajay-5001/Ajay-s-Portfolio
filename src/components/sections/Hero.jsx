import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Sparkles, Folder, Award, GraduationCap, Globe, Eye, X, FileText, CheckCircle } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { heroData, statsData, educationData, experienceData, skillsData, certificationsData } from '../../data/portfolio';

const Hero = () => {
  const [showResumeModal, setShowResumeModal] = useState(false);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Folder': return <Folder size={20} className="text-accent" />;
      case 'Award': return <Award size={20} className="text-accent" />;
      case 'GraduationCap': return <GraduationCap size={20} className="text-accent" />;
      case 'Globe': return <Globe size={20} className="text-accent" />;
      default: return <Sparkles size={20} className="text-accent" />;
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-16 section-padding relative overflow-hidden">
      {/* Dynamic Background Glowing Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent-light/20 dark:bg-accent/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="w-full max-w-6xl mx-auto">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold uppercase tracking-wider mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          <span>{heroData.availability}</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
              {heroData.name}
            </h1>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent mb-4 leading-snug">
              {heroData.tagline}
            </h2>

            <p className="text-lg font-medium text-slate-600 dark:text-slate-300 mb-6">
              {heroData.subTagline}
            </p>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-2xl">
              {heroData.intro}
            </p>
            
            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a href="#projects" className="btn-primary group shadow-lg shadow-accent/15">
                View Projects
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <button 
                onClick={() => setShowResumeModal(true)}
                className="btn-secondary group flex items-center gap-2"
              >
                <FileText size={18} className="group-hover:text-accent transition-colors" />
                View & Download Resume
              </button>

              <div className="flex items-center gap-3 border-l border-slate-300 dark:border-slate-800 pl-4 ml-1">
                <a 
                  href={heroData.socials.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-accent dark:hover:text-accent hover:border-accent transition-all"
                  aria-label="GitHub Profile"
                >
                  <FaGithub size={20} />
                </a>
                <a 
                  href={heroData.socials.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-accent dark:hover:text-accent hover:border-accent transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Metric Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {statsData.map((stat, idx) => (
              <div key={idx} className="glass-card p-5 group hover:border-accent/50 transition-all duration-300">
                <div className="p-2.5 bg-accent/10 rounded-lg w-fit mb-3 group-hover:scale-110 transition-transform">
                  {getIcon(stat.icon)}
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Complete Interactive Resume Modal */}
      <AnimatePresence>
        {showResumeModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="glass-card max-w-3xl w-full p-6 sm:p-8 space-y-6 relative bg-white dark:bg-slate-900 shadow-2xl border border-slate-200 dark:border-slate-800 my-8 max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setShowResumeModal(false)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 dark:hover:text-white rounded-lg transition-colors"
                title="Close"
              >
                <X size={20} />
              </button>

              {/* Resume Header */}
              <div className="border-b border-slate-200 dark:border-slate-800 pb-4 space-y-2">
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
                  AJAY S
                </h3>
                <p className="text-accent font-semibold text-sm sm:text-base">
                  AI Engineer / Data Analyst
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 flex flex-wrap gap-4">
                  <span>📞 {heroData.socials.phone}</span>
                  <span>✉️ {heroData.socials.email}</span>
                  <span>📍 {heroData.socials.location}</span>
                </p>
              </div>

              {/* Summary */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Professional Summary</h4>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-950 p-3.5 rounded-lg border border-slate-200/60 dark:border-slate-800/60">
                  Aspiring AI Engineer / Data Analyst with hands-on experience across Python, SQL, Generative AI, and cloud-based application development. Skilled in building RAG pipelines, LLM-powered applications, and Power BI dashboards.
                </p>
              </div>

              {/* Experience Highlights */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Internship Experience</h4>
                <div className="space-y-3">
                  {experienceData.map((exp, i) => (
                    <div key={i} className="text-xs sm:text-sm bg-slate-50/60 dark:bg-slate-950/60 p-3 rounded-lg border border-slate-200/50 dark:border-slate-800/50">
                      <div className="flex justify-between font-semibold text-slate-900 dark:text-white mb-1">
                        <span>{exp.role} — {exp.company}</span>
                        <span className="text-slate-400 text-xs">{exp.period}</span>
                      </div>
                      <ul className="space-y-1 text-slate-600 dark:text-slate-400 text-xs">
                        {exp.description.map((d, idx) => (
                          <li key={idx}>• {d}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education & Certifications */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Education</h4>
                  <div className="text-xs sm:text-sm bg-slate-50/60 dark:bg-slate-950/60 p-3 rounded-lg border border-slate-200/50 dark:border-slate-800/50">
                    <p className="font-bold text-slate-900 dark:text-white">{educationData.degree}</p>
                    <p className="text-slate-600 dark:text-slate-400">{educationData.institution}</p>
                    <p className="text-accent font-semibold mt-1">CGPA: {educationData.cgpa}</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Certifications</h4>
                  <div className="text-xs sm:text-sm bg-slate-50/60 dark:bg-slate-950/60 p-3 rounded-lg border border-slate-200/50 dark:border-slate-800/50 space-y-1">
                    {certificationsData.map((c, i) => (
                      <p key={i} className="text-slate-700 dark:text-slate-300">• {c.title}</p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a 
                  href={heroData.resumeUrl} 
                  download="Ajay_S_Resume.pdf"
                  className="btn-primary flex-grow justify-center py-3"
                >
                  <Download size={18} className="mr-2" />
                  Download Resume PDF
                </a>
                <button 
                  onClick={() => setShowResumeModal(false)}
                  className="btn-secondary px-6 py-3"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
