import React from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { heroData } from '../../data/portfolio';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-100 dark:bg-slate-900 py-10 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-600 dark:text-slate-400 text-sm">
          &copy; {currentYear} {heroData.name}. All rights reserved.
        </p>
        
        <div className="flex items-center gap-4">
          <a 
            href={heroData.socials.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-accent dark:text-slate-400 dark:hover:text-accent transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <a 
            href={heroData.socials.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-500 hover:text-accent dark:text-slate-400 dark:hover:text-accent transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
          <a 
            href={`mailto:${heroData.socials.email}`}
            className="text-slate-500 hover:text-accent dark:text-slate-400 dark:hover:text-accent transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
