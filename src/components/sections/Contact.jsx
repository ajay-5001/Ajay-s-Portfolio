import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Send, Loader2, CheckCircle, XCircle, Copy, Check, Sparkles, ShieldCheck } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { heroData } from '../../data/portfolio';

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedField, setCopiedField] = useState(null);
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null); // { type: 'success' | 'error', message: string } | null
  const toastTimeoutRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear field-specific error as user types
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const showToast = (type, message) => {
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    setToast({ type, message });
    toastTimeoutRef.current = setTimeout(() => {
      setToast(null);
    }, 5000);
  };

  useEffect(() => {
    return () => {
      if (toastTimeoutRef.current) {
        clearTimeout(toastTimeoutRef.current);
      }
    };
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.from_name || !formData.from_name.trim()) {
      newErrors.from_name = 'Name is required';
    }
    
    if (!formData.from_email || !formData.from_email.trim()) {
      newErrors.from_email = 'Email is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.from_email)) {
        newErrors.from_email = 'Valid email is required';
      }
    }
    
    if (!formData.subject || !formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message || !formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );
      
      showToast('success', 'Message sent successfully!');
      setFormData({
        from_name: '',
        from_email: '',
        company: '',
        subject: '',
        message: ''
      });
      setErrors({});
    } catch (error) {
      console.error('EmailJS submit error:', error);
      showToast('error', 'Failed to send message. Please try again.');
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
          Have a project in mind, an opportunity, or a data analytics query? Drop a message below and I will get back to you as soon as possible!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Details & Info Card */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card p-6 border-l-4 border-accent space-y-4">
              <div className="flex items-center gap-2 text-accent font-semibold text-sm">
                <Sparkles size={18} />
                <span>DIRECT RESPONSE CHANNEL</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Direct Communication Channel
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Messages sent via this form go straight to <strong className="text-slate-800 dark:text-slate-200">ajayselvam1609@gmail.com</strong>. I'll read and respond to your email as soon as possible.
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
            <form ref={form} onSubmit={handleSubmit} noValidate className="glass-card p-8 space-y-5 relative">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  Send a Message
                </h3>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium bg-teal-500/10 text-teal-600 dark:text-teal-400 rounded-full">
                  <ShieldCheck size={14} /> Secure Submission
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="from_name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="from_name" 
                    name="from_name" 
                    value={formData.from_name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border ${
                      errors.from_name ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-200 dark:border-slate-700 focus:ring-accent'
                    } text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:border-transparent transition-all text-sm`}
                    placeholder="Alex Morgan"
                  />
                  {errors.from_name && (
                    <span className="text-xs text-rose-500 mt-1 block font-medium">
                      {errors.from_name}
                    </span>
                  )}
                </div>

                <div>
                  <label htmlFor="from_email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    Your Email <span className="text-rose-500">*</span>
                  </label>
                  <input 
                    type="email" 
                    id="from_email" 
                    name="from_email" 
                    value={formData.from_email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border ${
                      errors.from_email ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-200 dark:border-slate-700 focus:ring-accent'
                    } text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:border-transparent transition-all text-sm`}
                    placeholder="alex@example.com"
                  />
                  {errors.from_email && (
                    <span className="text-xs text-rose-500 mt-1 block font-medium">
                      {errors.from_email}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="company" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    Company <span className="text-slate-400 dark:text-slate-500 text-[10px]">(Optional)</span>
                  </label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company" 
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-sm"
                    placeholder="Acme Corp"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                    Subject / Reason <span className="text-rose-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border ${
                      errors.subject ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-200 dark:border-slate-700 focus:ring-accent'
                    } text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:border-transparent transition-all text-sm`}
                    placeholder="Collaboration / Opportunity"
                  />
                  {errors.subject && (
                    <span className="text-xs text-rose-500 mt-1 block font-medium">
                      {errors.subject}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-2">
                  Message <span className="text-rose-500">*</span>
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border ${
                    errors.message ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-200 dark:border-slate-700 focus:ring-accent'
                  } text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:border-transparent transition-all resize-none text-sm`}
                  placeholder="Hi Ajay, I'd like to discuss a data analytics project or opportunity..."
                ></textarea>
                {errors.message && (
                  <span className="text-xs text-rose-500 mt-1 block font-medium">
                    {errors.message}
                  </span>
                )}
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full btn-primary py-3.5 text-sm font-semibold tracking-wide disabled:opacity-70 disabled:cursor-not-allowed group shadow-lg shadow-accent/10"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <Loader2 size={18} className="animate-spin mr-2" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <Send size={18} className="mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </motion.div>

      {/* Floating Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className={`fixed bottom-5 right-5 z-50 max-w-sm w-full p-4 rounded-xl shadow-lg border flex items-start gap-3 pointer-events-auto ${
              toast.type === 'success'
                ? 'bg-emerald-50 border-emerald-200 text-emerald-800 dark:bg-emerald-950/90 dark:border-emerald-800 dark:text-emerald-200'
                : 'bg-rose-50 border-rose-200 text-rose-800 dark:bg-rose-950/90 dark:border-rose-800 dark:text-rose-200'
            }`}
          >
            <div className="shrink-0 mt-0.5">
              {toast.type === 'success' ? (
                <CheckCircle className="text-emerald-500" size={20} />
              ) : (
                <XCircle className="text-rose-500" size={20} />
              )}
            </div>
            <div className="flex-grow">
              <p className="font-semibold text-sm">
                {toast.type === 'success' ? 'Success' : 'Error'}
              </p>
              <p className="text-xs mt-0.5 opacity-90">{toast.message}</p>
            </div>
            <button
              onClick={() => setToast(null)}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors shrink-0 text-sm font-semibold ml-auto"
            >
              ×
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
