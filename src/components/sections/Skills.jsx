import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Code2, Database, BarChart3, Cpu, Wrench, Globe } from 'lucide-react';
import { skillsData } from '../../data/portfolio';

const Skills = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  const tags = ['All', 'Languages', 'Web & ML', 'Data', 'Analytics', 'AI/ML', 'Tools'];

  const getCategoryIcon = (category) => {
    if (category.includes('Programming')) return <Code2 size={20} className="text-accent" />;
    if (category.includes('Frameworks')) return <Globe size={20} className="text-accent" />;
    if (category.includes('Databases')) return <Database size={20} className="text-accent" />;
    if (category.includes('Analytics')) return <BarChart3 size={20} className="text-accent" />;
    if (category.includes('AI')) return <Cpu size={20} className="text-accent" />;
    return <Wrench size={20} className="text-accent" />;
  };

  const filteredCategories = skillsData.map(group => {
    // Tag match
    const tagMatches = selectedTag === 'All' || group.tag === selectedTag;
    
    // Search match
    const matchingSkills = group.skills.filter(s => 
      s.toLowerCase().includes(searchTerm.toLowerCase()) ||
      group.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return {
      ...group,
      visible: tagMatches && (searchTerm === '' || matchingSkills.length > 0),
      displaySkills: searchTerm ? matchingSkills : group.skills
    };
  }).filter(g => g.visible && g.displaySkills.length > 0);

  return (
    <section id="skills" className="section-padding bg-slate-100/50 dark:bg-slate-900/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              Technical Skills
            </h2>
            <div className="h-px bg-slate-300 dark:bg-slate-700 w-24"></div>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text"
              placeholder="Search skills (e.g. Python, SQL)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent transition-all"
            />
          </div>
        </div>

        {/* Tag Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                selectedTag === tag
                  ? 'bg-accent text-white shadow-md shadow-accent/20'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent border border-slate-200 dark:border-slate-700/60'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        
        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((group, index) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={group.category} 
                className="glass-card p-6 space-y-4 hover:border-accent/40 transition-all duration-300"
              >
                <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    {getCategoryIcon(group.category)}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {group.displaySkills.map((skill, sIdx) => {
                    const isMatched = searchTerm && skill.toLowerCase().includes(searchTerm.toLowerCase());
                    return (
                      <span 
                        key={sIdx} 
                        className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all cursor-default ${
                          isMatched 
                            ? 'bg-accent text-white border-accent shadow-sm'
                            : 'bg-slate-100/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-slate-200/80 dark:border-slate-700/80 hover:border-accent dark:hover:border-accent hover:text-accent dark:hover:text-accent'
                        }`}
                      >
                        {skill}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 text-slate-500 dark:text-slate-400">
            No matching skills found for "{searchTerm}".
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Skills;
