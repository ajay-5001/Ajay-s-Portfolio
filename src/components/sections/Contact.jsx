import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Send, Loader2, CheckCircle, XCircle, Copy, Check, Sparkles, ShieldCheck } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { heroData } from '../../data/portfolio';

// Default EmailJS keys (can be overridden by .env variables)
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || '';
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '';
const EMAILJS_AUTO_REPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID || '';
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '';

// FormSubmit Endpoint Fallback (Direct delivery to ajayselvam1609@gmail.com with autorespond)
const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/ajayselvam1609@gmail.com';

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [copiedField, setCopiedField] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Check if EmailJS keys exist in environment
    if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY) {
      try {
        // 1. Send notification to Ajay S
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject || `Portfolio Inquiry from ${formData.name}`,
            message: formData.message,
            to_email: 'ajayselvam1609@gmail.com'
          },
          EMAILJS_PUBLIC_KEY
        );

        // 2. Trigger Auto-Reply email to sender if template is provided
        if (EMAILJS_AUTO_REPLY_TEMPLATE_ID) {
          try {
            await emailjs.send(
              EMAILJS_SERVICE_ID,
              EMAILJS_AUTO_REPLY_TEMPLATE_ID,
              {
                to_name: formData.name,
                to_email: formData.email,
                user_message: formData.message
              },
              EMAILJS_PUBLIC_KEY
            );
          } catch (autoErr) {
            console.warn('Auto-reply template error:', autoErr);
          }
        }

        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } catch (error) {
        console.error('EmailJS Error, falling back to FormSubmit:', error);
        await handleFormSubmitFallback();
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // FormSubmit Fallback with built-in auto-response to sender
      await handleFormSubmitFallback();
    }
  };

  const handleFormSubmitFallback = async () => {
    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json', 
          'Accept': 'application/json' 
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _replyto: formData.email,
          _subject: `[Portfolio Contact] ${formData.subject || 'Inquiry from ' + formData.name}`,
          message: formData.message,
          _autorespond: `Hi ${formData.name},\n\nThank you for reaching out to Ajay S! I have received your message:\n\n"${formData.message}"\n\nI will review your message and reply directly to your email (${formData.email}) shortly.\n\nBest regards,\nAjay S\nData Analyst & Python Developer`,
          _template: "table",
          _captcha: false
        }),
      });

      const data = await response.json();

      if (data.success === 'true' || data.success === true || response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      console.error('Contact Form error:', err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-slate-100/50 dark:bg-slate-900/50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Let's Connect
          </h2>
          <div className="h-px bg-slate-300 dark:bg-slate-700 flex-grow max-w-xs"></div>
        </div>
        
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mb-12">
          Have a project in mind, an opportunity, or a data analytics query? Drop a message below and an instant automated acknowledgment will be delivered to your inbox!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Details & Info Card */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card p-6 border-l-4 border-accent space-y-4">
              <div className="flex items-center gap-2 text-accent font-semibold text-sm">
                <Sparkles size={18} />
                <span>INSTANT AUTO-REPLY ACTIVE</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Direct Communication Channel
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Messages sent via this form go straight to <strong className="text-slate-800 dark:text-slate-200">ajayselvam1609@gmail.com</strong>. You will receive an immediate automated confirmation email.
              </p>
            </div>

            {/* Quick Contact Buttons */}
            <div className="space-y-3">
              {/* Email item with copy */}
              <div className="glass-card p-4 flex items-center justify-between group hover:border-accent/40 transition-all">
                <a href={`mailto:${heroData.socials.email}`} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-accent dark:hover:text-accent overflow-hidden">
                  <div className="p-2.5 bg-accent/10 rounded-lg text-accent shrink-0">
                    <Mail size={20} />
                  </div>
                  <div className="truncate">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email Address</p>
                    <p className="font-medium text-sm text-slate-800 dark:text-slate-200 truncate">{heroData.socials.email}</p>
                  </div>
                </a>
                <button
                  onClick={() => copyToClipboard(heroData.socials.email, 'email')}
                  className="p-2 text-slate-400 hover:text-accent dark:hover:text-accent rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all shrink-0"
                  title="Copy email to clipboard"
                >
                  {copiedField === 'email' ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} />}
                </button>
              </div>

              {/* Phone item with copy */}
              <div className="glass-card p-4 flex items-center justify-between group hover:border-accent/40 transition-all">
                <a href={`tel:${heroData.socials.phone}`} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-accent dark:hover:text-accent">
                  <div className="p-2.5 bg-accent/10 rounded-lg text-accent shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Phone / WhatsApp</p>
                    <p className="font-medium text-sm text-slate-800 dark:text-slate-200">{heroData.socials.phone}</p>
                  </div>
                </a>
                <button
                  onClick={() => copyToClipboard(heroData.socials.phone, 'phone')}
                  className="p-2 text-slate-400 hover:text-accent dark:hover:text-accent rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all shrink-0"
                  title="Copy phone to clipboard"
                >
                  {copiedField === 'phone' ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} />}
                </button>
              </div>

              {/* Social Links */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a 
                  href={heroData.socials.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="glass-card p-3 flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-accent dark:hover:text-accent hover:border-accent/40 transition-all"
                >
                  <FaLinkedin size={20} className="text-accent shrink-0" />
                  <span className="text-xs font-semibold truncate">LinkedIn</span>
                </a>
                <a 
                  href={heroData.socials.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="glass-card p-3 flex items-center gap-3 text-slate-700 dark:text-slate-300 hover:text-accent dark:hover:text-accent hover:border-accent/40 transition-all"
                >
                  <FaGithub size={20} className="text-accent shrink-0" />
                  <span className="text-xs font-semibold truncate">GitHub</span>
                </a>
              </div>
            </div>
          </div>
          
          {/* Main Contact Form */}
          <div className="lg:col-span-3">
            <form ref={formRef} onSubmit={handleSubmit} className="glass-card p-8 space-y-5 relative">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  Send a Message
                </h3>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full">
                  <ShieldCheck size={14} /> Auto-Reply Enabled
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-sm"
                    placeholder="Alex Morgan"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    Your Email <span className="text-rose-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-sm"
                    placeholder="alex@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  Subject / Reason
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-sm"
                  placeholder="Data Analyst Opportunity / Collaboration"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  Message <span className="text-rose-500">*</span>
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none text-sm"
                  placeholder="Hi Ajay, I'd like to discuss a data analytics project or opportunity..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full btn-primary py-3.5 text-sm font-semibold tracking-wide disabled:opacity-70 disabled:cursor-not-allowed group shadow-lg shadow-accent/10"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <Loader2 size={18} className="animate-spin mr-2" />
                    Sending Message...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <Send size={18} className="mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message & Get Auto-Reply
                  </span>
                )}
              </button>

              {/* Status Alert Notifications */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-lg bg-emerald-50 text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300 flex items-start gap-3 border border-emerald-200 dark:border-emerald-800/60 shadow-sm"
                  >
                    <CheckCircle size={22} className="text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">Message Delivered Successfully!</p>
                      <p className="text-xs text-emerald-700 dark:text-emerald-400 mt-0.5">
                        Your message was sent to <strong>ajayselvam1609@gmail.com</strong>. An automated confirmation email has also been sent to your inbox.
                      </p>
                    </div>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-lg bg-rose-50 text-rose-800 dark:bg-rose-950/40 dark:text-rose-300 flex items-start gap-3 border border-rose-200 dark:border-rose-800/60 shadow-sm"
                  >
                    <XCircle size={22} className="text-rose-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm">Submission Error</p>
                      <p className="text-xs text-rose-700 dark:text-rose-400 mt-0.5">
                        Something went wrong while dispatching the message. Please email me directly at <a href="mailto:ajayselvam1609@gmail.com" className="underline font-bold">ajayselvam1609@gmail.com</a>.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
