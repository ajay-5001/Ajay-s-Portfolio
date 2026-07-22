import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { educationData } from '../../data/portfolio';

const Education = () => {
  return (
    <section id="education" className="section-padding bg-slate-100/50 dark:bg-slate-900/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Education
          </h2>
          <div className="h-px bg-slate-300 dark:bg-slate-700 flex-grow max-w-xs"></div>
        </div>
        
        <div className="glass-card p-8 max-w-3xl flex items-start gap-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-accent"></div>
          
          <div className="hidden sm:flex shrink-0 items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent">
            <GraduationCap size={32} />
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              {educationData.degree}
            </h3>
            <div className="text-lg font-medium text-slate-700 dark:text-slate-300 mb-2">
              {educationData.institution}
            </div>
            <div className="inline-block px-3 py-1 bg-accent/10 text-accent font-semibold rounded-md">
              CGPA: {educationData.cgpa}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
