import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Folder, Star, Code } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projectsData } from '../../data/portfolio';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'AI & LLMs', 'Data Analytics'];

  const filteredProjects = activeCategory === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              Featured Projects
            </h2>
            <div className="h-px bg-slate-300 dark:bg-slate-700 w-24"></div>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all ${
                  activeCategory === cat
                    ? 'bg-accent text-white shadow-md shadow-accent/20'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mb-10">
          A showcase of analytics dashboards, full-stack AI platforms, and Python data pipelines built to solve real-world problems.
        </p>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project.id || project.title}
                className="glass-card flex flex-col h-full p-8 group relative overflow-hidden hover:border-accent/40 transition-all duration-300"
              >
                {/* Accent Background Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -z-10 transition-transform group-hover:scale-150 duration-500"></div>
                
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-accent/10 rounded-xl text-accent">
                      <Folder size={28} />
                    </div>
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-full">
                        <Star size={12} className="fill-amber-400" /> Featured
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 text-slate-500 hover:text-accent dark:text-slate-400 dark:hover:text-accent rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                        title="GitHub Repository"
                      >
                        <FaGithub size={20} />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 text-slate-500 hover:text-accent dark:text-slate-400 dark:hover:text-accent rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                        title="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <div className="mb-2">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <div className="flex-grow space-y-4 mb-8">
                  <div className="bg-slate-50/80 dark:bg-slate-900/60 p-3.5 rounded-lg border border-slate-200/50 dark:border-slate-800/50">
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">
                      Problem Statement
                    </span>
                    <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  <div>
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-1">
                      Technical Solution
                    </span>
                    <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>
                
                <ul className="flex flex-wrap gap-2 text-xs font-medium text-slate-600 dark:text-slate-400 mt-auto pt-4 border-t border-slate-200 dark:border-slate-800">
                  {project.techStack.map((tech, i) => (
                    <li key={i} className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 rounded-md text-slate-700 dark:text-slate-300">
                      {tech}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
