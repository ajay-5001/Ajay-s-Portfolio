import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck } from 'lucide-react';
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
            Industry Certifications
          </h2>
          <div className="h-px bg-slate-300 dark:bg-slate-700 flex-grow max-w-xs"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => {
            const title = typeof cert === 'object' ? cert.title : cert;
            const issuer = typeof cert === 'object' ? cert.issuer : 'Professional';

            return (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="glass-card p-6 flex items-start gap-4 group cursor-default hover:border-accent/40 transition-all"
              >
                <div className="shrink-0 p-3 bg-accent/10 rounded-xl text-accent group-hover:scale-110 transition-transform">
                  <Award size={24} />
                </div>
                <div className="space-y-1">
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    <ShieldCheck size={12} className="text-accent" /> {issuer}
                  </span>
                  <p className="text-slate-800 dark:text-slate-200 font-semibold leading-snug text-sm sm:text-base">
                    {title}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;
