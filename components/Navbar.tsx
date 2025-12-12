import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, Globe } from 'lucide-react';
import { Theme, Language } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  
  const { language, setLanguage, t } = useLanguage();

  // Handle scroll effects: Navbar background and Active Section detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'services', 'portfolio', 'contact'];
      
      if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50) {
        setActiveSection('contact');
        return;
      }

      const scrollPosition = window.scrollY + 150; 

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setIsOpen(false);
    }
  };

  const cycleLanguage = () => {
    if (language === 'es') setLanguage('en');
    else if (language === 'en') setLanguage('ca');
    else setLanguage('es');
  };

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.portfolio, href: '#portfolio' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-4 bg-white/60 dark:bg-black/60 backdrop-blur-md border-b border-brand-200/20 dark:border-brand-500/10' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* LOGO AREA */}
        <a 
          href="#home" 
          onClick={(e) => scrollToSection(e, '#home')}
          className="flex items-center gap-3 group relative z-50"
        >
          {/* SVG Icon recreated from reference image */}
          <div className="relative w-11 h-11 transition-transform duration-500 group-hover:scale-110">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
              <defs>
                <linearGradient id="logo-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0f766e" /> {/* brand-700 */}
                  <stop offset="100%" stopColor="#5eead4" /> {/* brand-300 */}
                </linearGradient>
              </defs>
              
              {/* Rounded Hexagon Background */}
              {/* Using stroke-width and stroke-linejoin round to create smooth rounded corners */}
              <path 
                d="M50 10 L85 30 L85 70 L50 90 L15 70 L15 30 Z" 
                fill="url(#logo-gradient)" 
                stroke="url(#logo-gradient)" 
                strokeWidth="15" 
                strokeLinejoin="round" 
              />
              
              {/* Internal Network Structure (White) */}
              <g stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
                 {/* Center Junction to Nodes */}
                 <path d="M50 50 L25 35" /> {/* To TL */}
                 <path d="M50 50 L75 35" /> {/* To TR */}
                 <path d="M50 50 L50 80" /> {/* To BM */}

                 {/* Outer Connections */}
                 <path d="M25 35 L25 65" /> {/* TL to BL */}
                 <path d="M75 35 L75 65" /> {/* TR to BR */}
                 
                 <path d="M25 65 L50 80" /> {/* BL to BM */}
                 <path d="M75 65 L50 80" /> {/* BR to BM */}
              </g>

              {/* Dots */}
              <g fill="white">
                <circle cx="25" cy="35" r="5" /> {/* Top Left */}
                <circle cx="75" cy="35" r="5" /> {/* Top Right */}
                <circle cx="25" cy="65" r="5" /> {/* Bottom Left */}
                <circle cx="75" cy="65" r="5" /> {/* Bottom Right */}
                <circle cx="50" cy="80" r="5" /> {/* Bottom Middle */}
              </g>

            </svg>
          </div>

          {/* Text Logo */}
          <span className="text-2xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-brand-600 to-brand-400 dark:from-white dark:to-brand-200">
            SoulMarket
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a 
                key={link.href} 
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`relative text-sm font-medium uppercase tracking-wider transition-colors px-2 py-1 ${
                  isActive 
                    ? 'text-brand-600 dark:text-brand-400' 
                    : 'text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-brand-600 dark:bg-brand-400 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
          
          <div className="flex items-center gap-2 border-l border-gray-300 dark:border-white/20 pl-6">
            {/* Language Switcher */}
            <button
              onClick={cycleLanguage}
              className="px-2 py-1 rounded text-sm font-bold text-brand-600 dark:text-brand-300 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors uppercase w-10"
              aria-label="Switch Language"
            >
              {language}
            </button>

            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-white/10 text-gray-800 dark:text-white hover:scale-110 transition-transform"
              aria-label="Toggle Theme"
            >
              {theme === Theme.DARK ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4 relative z-50">
           <button
              onClick={cycleLanguage}
              className="px-2 py-1 rounded text-xs font-bold text-brand-600 dark:text-brand-300 hover:bg-gray-200 dark:hover:bg-white/10 transition-colors uppercase border border-brand-600/20"
              aria-label="Switch Language"
            >
              {language}
            </button>
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-white/10 text-gray-800 dark:text-white"
          >
            {theme === Theme.DARK ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 dark:text-white"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-0 left-0 w-full min-h-screen bg-white dark:bg-black flex flex-col items-center justify-center space-y-8 z-40"
          >
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`text-2xl font-bold ${
                  activeSection === link.href.substring(1)
                  ? 'text-brand-600 dark:text-brand-400'
                  : 'text-gray-800 dark:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;