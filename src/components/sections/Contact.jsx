import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, Loader2, CheckCircle, XCircle } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { heroData } from '../../data/portfolio';

// ============================================================
// CONTACT FORM — uses Formsubmit.co (no signup needed!)
//
// HOW IT WORKS:
//   1. First submission triggers a confirmation email to your inbox.
//   2. Click the confirmation link in that email.
//   3. After that, every submission goes straight to your inbox.
//
// TO SWAP SERVICES:
//   - Formspree: change the URL to "https://formspree.io/f/YOUR_FORM_ID"
//   - EmailJS: uncomment the emailjs import + sendForm block, comment out fetch
//   - Serverless (Resend/Nodemailer): point the URL to your /api/contact endpoint
// ============================================================

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/ajayselvam1609@gmail.com';

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Contact: ${formData.name}`,
          _captcha: false,
        }),
      });

      const data = await response.json();

      if (data.success === 'true' || data.success === true || response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section id="contact" className="section-padding bg-slate-100/50 dark:bg-slate-900/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Let's Connect
          </h2>
          <div className="h-px bg-slate-300 dark:bg-slate-700 flex-grow max-w-xs"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Get In Touch
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>
            
            <div className="space-y-4">
              <a href={`mailto:${heroData.socials.email}`} className="flex items-center gap-4 text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent transition-colors group">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm group-hover:shadow-md transition-all">
                  <Mail size={20} className="text-accent" />
                </div>
                <span className="font-medium">{heroData.socials.email}</span>
              </a>
              
              <a href={`tel:${heroData.socials.phone}`} className="flex items-center gap-4 text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent transition-colors group">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm group-hover:shadow-md transition-all">
                  <Phone size={20} className="text-accent" />
                </div>
                <span className="font-medium">{heroData.socials.phone}</span>
              </a>
              
              <a href={heroData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent transition-colors group">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm group-hover:shadow-md transition-all">
                  <FaLinkedin size={20} className="text-accent" />
                </div>
                <span className="font-medium">LinkedIn Profile</span>
              </a>
              
              <a href={heroData.socials.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent transition-colors group">
                <div className="p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm group-hover:shadow-md transition-all">
                  <FaGithub size={20} className="text-accent" />
                </div>
                <span className="font-medium">GitHub Profile</span>
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="md:col-span-3">
            <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <Loader2 size={20} className="animate-spin mr-2" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <Send size={20} className="mr-2" />
                    Send Message
                  </span>
                )}
              </button>
              
              {/* Form Status Messages */}
              {submitStatus === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  className="p-4 rounded-lg bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 flex items-center border border-emerald-200 dark:border-emerald-800"
                >
                  <CheckCircle size={20} className="mr-3 shrink-0" />
                  <p className="text-sm font-medium">Message sent successfully! I'll get back to you soon.</p>
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  className="p-4 rounded-lg bg-rose-50 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400 flex items-center border border-rose-200 dark:border-rose-800"
                >
                  <XCircle size={20} className="mr-3 shrink-0" />
                  <p className="text-sm font-medium">Oops! Something went wrong. Please try again or email me directly.</p>
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
