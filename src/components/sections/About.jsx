import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, User, Sparkles } from 'lucide-react';
import { aboutData, heroData } from '../../data/portfolio';

const About = () => {
  return (
    <section id="about" className="section-padding bg-slate-100/50 dark:bg-slate-900/50 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            About Me
          </h2>
          <div className="h-px bg-slate-300 dark:bg-slate-700 flex-grow max-w-xs"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              {aboutData.summary}
            </p>

            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <Sparkles size={16} className="text-accent" /> Key Strengths & Core Expertise
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {aboutData.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 glass-card p-3.5 border-l-2 border-accent">
                    <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-snug">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Info Sidebar */}
          <div className="lg:col-span-5 glass-card p-6 space-y-4 border-l-4 border-accent">
            <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
              <div className="p-2.5 bg-accent/10 rounded-lg text-accent">
                <User size={22} />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">{heroData.name}</h4>
                <p className="text-xs text-accent font-medium">Data Analyst & Python Developer</p>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between py-1.5 border-b border-slate-200/60 dark:border-slate-800/60">
                <span className="font-semibold text-slate-500">Degree</span>
                <span className="text-slate-800 dark:text-slate-200 font-medium">B.Tech (IT)</span>
              </div>

              <div className="flex justify-between py-1.5 border-b border-slate-200/60 dark:border-slate-800/60">
                <span className="font-semibold text-slate-500">Academic Score</span>
                <span className="text-slate-800 dark:text-slate-200 font-medium">CGPA: 8.2 / 10</span>
              </div>

              <div className="flex justify-between py-1.5 border-b border-slate-200/60 dark:border-slate-800/60">
                <span className="font-semibold text-slate-500">Location</span>
                <span className="text-slate-800 dark:text-slate-200 font-medium">{heroData.socials.location}</span>
              </div>

              <div className="flex justify-between py-1.5">
                <span className="font-semibold text-slate-500">Primary Email</span>
                <a href={`mailto:${heroData.socials.email}`} className="text-accent font-medium hover:underline truncate max-w-[200px]">
                  {heroData.socials.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
