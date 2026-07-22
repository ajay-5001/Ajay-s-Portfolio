import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { heroData } from '../../data/portfolio';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 section-padding relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent-light/20 dark:bg-accent/5 rounded-full blur-3xl -z-10"></div>
      
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h2 className="text-accent font-medium tracking-wide mb-4 text-lg">Hi, my name is</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6">
            {heroData.name}.
          </h1>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-600 dark:text-slate-400 mb-8 leading-tight">
            {heroData.tagline}
          </h3>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl leading-relaxed">
            {heroData.intro}
          </p>
          
          <div className="flex flex-wrap items-center gap-6">
            <a href="#projects" className="btn-primary group">
              View Projects
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a href={heroData.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary group">
              <Download size={18} className="mr-2 group-hover:-translate-y-1 transition-transform" />
              Download Resume
            </a>
            
            <div className="flex items-center gap-4 ml-2">
              <a 
                href={heroData.socials.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-slate-600 hover:text-accent dark:text-slate-400 dark:hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a 
                href={heroData.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 text-slate-600 hover:text-accent dark:text-slate-400 dark:hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
