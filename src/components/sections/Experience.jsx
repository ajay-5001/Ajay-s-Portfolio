import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experienceData } from '../../data/portfolio';

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-slate-100/50 dark:bg-slate-900/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Experience
          </h2>
          <div className="h-px bg-slate-300 dark:bg-slate-700 flex-grow max-w-xs"></div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {experienceData.map((job, index) => (
            <div key={index} className="relative pl-8 md:pl-0">
              <div className="md:grid md:grid-cols-4 md:gap-8 items-baseline">
                {/* Timeline dot and line for mobile */}
                <div className="md:hidden absolute left-0 top-1.5 w-3 h-3 bg-accent rounded-full ring-4 ring-slate-100 dark:ring-slate-900 z-10"></div>
                {index !== experienceData.length - 1 && (
                  <div className="md:hidden absolute left-1.5 top-3 bottom-[-3rem] w-0.5 bg-slate-200 dark:bg-slate-800"></div>
                )}
                
                {/* Date/Company for Desktop */}
                <div className="hidden md:block col-span-1 text-right mt-1">
                  <div className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
                    {job.period || "Internship"}
                  </div>
                  <div className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                    {job.company}
                  </div>
                </div>
                
                {/* Content */}
                <div className="md:col-span-3 relative pb-8 md:pb-0">
                  {/* Timeline dot and line for desktop */}
                  <div className="hidden md:block absolute -left-[2.35rem] top-2 w-3 h-3 bg-accent rounded-full ring-4 ring-slate-100 dark:ring-slate-900 z-10"></div>
                  {index !== experienceData.length - 1 && (
                    <div className="hidden md:block absolute -left-9 top-4 bottom-[-3rem] w-0.5 bg-slate-200 dark:bg-slate-800"></div>
                  )}
                  
                  <div className="md:hidden mb-2">
                    <span className="text-sm font-medium text-slate-500 dark:text-slate-400 bg-slate-200/50 dark:bg-slate-800/50 px-2 py-1 rounded">
                      {job.period || "Internship"}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-1">
                    {job.role}
                  </h3>
                  
                  <div className="md:hidden text-lg font-semibold text-slate-700 dark:text-slate-300 mb-4">
                    {job.company}
                  </div>
                  
                  <ul className="mt-4 space-y-3">
                    {job.description.map((desc, i) => (
                      <li key={i} className="flex text-slate-600 dark:text-slate-400">
                        <span className="text-accent mr-3 mt-1.5">▹</span>
                        <span className="leading-relaxed">{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
