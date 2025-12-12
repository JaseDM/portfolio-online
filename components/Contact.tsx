import React from 'react';
import GlassCard from './GlassCard';
import { Mail, Github, Twitter, Linkedin, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="pt-32 pb-64 relative overflow-hidden">
        
        {/* Animated Gradient Background for Section */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-full h-full bg-gradient-to-br from-brand-900/10 via-brand-500/10 to-brand-900/10 animate-gradient-xy opacity-70 blur-3xl rounded-full transform scale-150" />
        </div>

        {/* Static Decorative background element (secondary) */}
        <div className="absolute right-0 bottom-0 w-1/3 h-1/2 bg-gradient-to-t from-brand-500/20 to-transparent blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Info Side */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              {t.contact.titleLine1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600 animate-gradient-x">{t.contact.titleLine2}</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
              {t.contact.desc}
            </p>

            <div className="space-y-6">
              <a href="mailto:hola@soulmarket.com" className="flex items-center gap-4 text-gray-800 dark:text-white hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
                <div className="p-3 bg-gray-200 dark:bg-white/10 rounded-full">
                  <Mail size={24} />
                </div>
                <span className="text-lg">hola@soulmarket.com</span>
              </a>
              
              <div className="flex gap-4 mt-8">
                {[Github, Twitter, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="p-3 bg-gray-200 dark:bg-white/5 rounded-full text-gray-700 dark:text-gray-300 hover:bg-brand-500 hover:text-white transition-all duration-300 hover:-translate-y-1">
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form Side */}
          <GlassCard className="p-8 md:p-10 border-t border-brand-500/20">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{t.contact.form.name}</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-black/40 border border-gray-200 dark:border-white/10 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-gray-900 dark:text-white"
                    placeholder={t.contact.form.namePlaceholder}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{t.contact.form.email}</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-black/40 border border-gray-200 dark:border-white/10 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-gray-900 dark:text-white"
                    placeholder={t.contact.form.emailPlaceholder}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{t.contact.form.message}</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-black/40 border border-gray-200 dark:border-white/10 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 outline-none transition-all text-gray-900 dark:text-white resize-none"
                  placeholder={t.contact.form.messagePlaceholder}
                />
              </div>

              <button 
                type="submit"
                className="w-full relative group overflow-hidden rounded-lg shadow-lg hover:shadow-brand-500/25 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-600 via-brand-400 to-brand-600 animate-gradient-x opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="relative py-4 flex items-center justify-center gap-2 text-white font-bold">
                    {t.contact.form.submit}
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </form>
          </GlassCard>

        </div>
        
        <div className="mt-24 pt-8 border-t border-gray-200 dark:border-white/10 text-center text-gray-500 text-sm">
          <p>&copy; <span suppressHydrationWarning>{new Date().getFullYear()}</span> {t.contact.footer}</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;