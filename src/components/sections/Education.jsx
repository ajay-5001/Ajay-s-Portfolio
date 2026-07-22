import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';
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
        
        <div className="glass-card p-8 max-w-3xl flex flex-col sm:flex-row items-start gap-6 relative overflow-hidden border-l-4 border-accent">
          <div className="hidden sm:flex shrink-0 items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 text-accent">
            <GraduationCap size={32} />
          </div>
          
          <div className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                {educationData.degree}
              </h3>
              {educationData.period && (
                <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold bg-slate-200/60 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-md">
                  <Calendar size={12} /> {educationData.period}
                </span>
              )}
            </div>

            <div className="text-base font-semibold text-slate-700 dark:text-slate-300">
              {educationData.institution}
            </div>

            <div className="inline-block px-3 py-1.5 bg-accent/10 text-accent font-bold text-sm rounded-lg border border-accent/20">
              Academic Score: {educationData.cgpa}
            </div>

            {educationData.highlights && educationData.highlights.length > 0 && (
              <ul className="pt-2 space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                {educationData.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-accent font-bold">▹</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
