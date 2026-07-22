import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Folder } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projectsData } from '../../data/portfolio';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="section-padding">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Projects
          </h2>
          <div className="h-px bg-slate-300 dark:bg-slate-700 flex-grow max-w-xs"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="glass-card flex flex-col h-full p-8 group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -z-10 transition-transform group-hover:scale-125 duration-500"></div>
              
              <div className="flex justify-between items-center mb-6">
                <Folder size={40} className="text-accent" />
                <div className="flex items-center gap-3">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-accent dark:text-slate-400 dark:hover:text-accent transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub size={22} />
                    </a>
                  )}
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-accent dark:text-slate-400 dark:hover:text-accent transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={22} />
                    </a>
                  )}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              
              <div className="flex-grow space-y-4 mb-8">
                <div>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider block mb-1">Problem</span>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <span className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wider block mb-1">Solution</span>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>
              
              <ul className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-slate-500 dark:text-slate-400 mt-auto">
                {project.techStack.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
