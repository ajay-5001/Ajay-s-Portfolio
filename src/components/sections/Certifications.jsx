import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { certificationsData } from '../../data/portfolio';

const Certifications = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };

  return (
    <section id="certifications" className="section-padding">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Certifications
          </h2>
          <div className="h-px bg-slate-300 dark:bg-slate-700 flex-grow max-w-xs"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="glass-card p-6 flex items-start gap-4 group cursor-default"
            >
              <div className="shrink-0 p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-400 group-hover:text-accent group-hover:bg-accent/10 transition-colors">
                <Award size={24} />
              </div>
              <p className="text-slate-800 dark:text-slate-200 font-medium leading-snug">
                {cert}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;
