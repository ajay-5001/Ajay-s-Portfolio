import React from 'react';
import { motion } from 'framer-motion';
import { aboutData } from '../../data/portfolio';

const About = () => {
  return (
    <section id="about" className="section-padding bg-slate-100/50 dark:bg-slate-900/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            About Me
          </h2>
          <div className="h-px bg-slate-300 dark:bg-slate-700 flex-grow max-w-xs"></div>
        </div>
        
        <div className="max-w-3xl">
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            {aboutData.summary}
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
