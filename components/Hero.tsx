import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-0">

      {/* --- REVISED AURORA BOREALIS EFFECT (V3 - Lighter & Wavier) --- */}
      <div className="absolute inset-0 -z-10 w-full h-full pointer-events-none">

        {/* Layer 1: Deep Base (Dark Teal/Forest) - The anchor */}
        <motion.div
          initial={{ x: "-10%", skewY: -5, opacity: 0.4 }}
          animate={{
            x: ["-10%", "5%", "-10%"],
            skewY: [-5, 0, -5],
            scaleY: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] left-[-20%] w-[150%] h-[90vh] bg-gradient-to-r from-transparent via-brand-900/60 to-transparent blur-[100px] transform-gpu"
        />

        {/* Layer 2: Middle Structure (Primary Teal) - The main wave */}
        <motion.div
          initial={{ x: "0%", skewY: -12 }}
          animate={{
            x: ["-5%", "5%", "-5%"],
            skewY: [-12, -8, -12],
            rotate: [-2, 2, -2],
            scaleY: [1, 1.1, 1],
            borderRadius: ["20%", "40%", "20%"] // Creates the organic curve feeling
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[5%] left-[-25%] w-[150%] h-[60vh] bg-gradient-to-r from-transparent via-brand-600/40 to-transparent blur-[80px] mix-blend-screen transform-gpu"
        />

        {/* Layer 3: The Glow (Mint/Bright Teal) - Defined curves */}
        <motion.div
          initial={{ x: "-10%", skewY: -8 }}
          animate={{
            x: ["0%", "-10%", "0%"],
            skewY: [-8, -15, -8],
            rotate: [1, -3, 1],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[-10%] w-[120%] h-[50vh] bg-gradient-to-r from-transparent via-brand-300/30 to-transparent blur-[60px] mix-blend-screen transform-gpu"
        />

        {/* Layer 4: The Highlights (Ice/White Mint) - Sharp, fast energy peaks */}
        <motion.div
          initial={{ x: "0%", skewY: -20, opacity: 0 }}
          animate={{
            x: ["-5%", "10%", "-5%"],
            skewY: [-20, -10, -20],
            opacity: [0.1, 0.5, 0.1],
            scaleY: [0.8, 1.2, 0.8]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[25%] left-[-20%] w-[140%] h-[30vh] bg-gradient-to-r from-transparent via-brand-100/40 to-transparent blur-[50px] mix-blend-overlay transform-gpu"
        />

        {/* Noise Texture Overlay for realism */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT COLUMN: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Gradient Border Badge */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block relative p-[1px] rounded-full bg-gradient-to-r from-brand-300 via-brand-500 to-brand-300 mb-6"
            >
              <div className="px-4 py-1.5 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-md">
                <span className="text-xs font-bold tracking-widest uppercase bg-clip-text text-transparent bg-gradient-to-r from-brand-700 to-brand-500 dark:from-brand-300 dark:to-brand-100">
                  {t.hero.badge}
                </span>
              </div>
            </motion.div>

            {/* Typography scaled down from 5xl/7xl/8xl to 4xl/5xl/6xl/7xl */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight mb-8 text-gray-900 dark:text-white drop-shadow-sm leading-tight">
              José Miguel Díaz <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-700 via-brand-500 to-brand-300 dark:from-brand-500 dark:via-brand-300 dark:to-brand-100 animate-gradient-x">
                {t.hero.role}
              </span>
            </h1>

            <p
              className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mb-10 leading-relaxed font-light"
              dangerouslySetInnerHTML={{ __html: t.hero.description }}
            />

            <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#portfolio"
                className="px-8 py-4 rounded-full bg-gray-900 dark:bg-white text-white dark:text-brand-950 font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-brand-500/20 transition-all z-20"
              >
                {t.hero.ctaPortfolio}
                <ArrowRight size={20} />
              </motion.a>

              {/* Gradient Border Button */}
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="group relative p-[2px] rounded-full bg-gradient-to-r from-brand-300 via-brand-500 to-brand-300 dark:from-brand-700 dark:via-brand-400 dark:to-brand-700 overflow-hidden z-20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-300 via-brand-500 to-brand-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                <div className="relative px-8 py-3.5 rounded-full bg-white dark:bg-black transition-colors group-hover:bg-opacity-90 dark:group-hover:bg-opacity-90 flex items-center justify-center">
                  <span className="font-semibold text-gray-900 dark:text-white group-hover:text-brand-700 dark:group-hover:text-brand-300 transition-colors">
                    {t.hero.ctaContact}
                  </span>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Profile Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            {/* Image container resized: w-64/80/400px instead of w-72/96/500px */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] group">
              {/* Glowing backdrop */}
              <div className="absolute inset-0 rounded-full bg-brand-500/30 blur-3xl group-hover:bg-brand-400/40 transition-colors duration-500" />

              {/* Floating Container - Animation Removed */}
              <div
                className="relative w-full h-full"
              >
                <img
                  src="/home-hero-avatar.webp"
                  alt="José Miguel Díaz Avatar"
                  className="w-full h-full object-cover rounded-full border-4 border-white/20 dark:border-white/10 shadow-2xl relative z-10 backdrop-blur-sm"
                />

                {/* Decorative Rotating Ring 1 */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-20px] rounded-full border border-brand-400/20 dark:border-brand-300/10 border-dashed"
                />

                {/* Decorative Rotating Ring 2 (Counter) */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-40px] rounded-full border border-brand-500/10 dark:border-brand-300/5 opacity-50 scale-90"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;