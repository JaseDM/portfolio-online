import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={`
        relative overflow-hidden
        backdrop-blur-xl
        bg-white/40 dark:bg-black/40
        border border-white/20 dark:border-white/10
        shadow-xl
        rounded-2xl
        transition-all duration-300
        hover:shadow-2xl hover:bg-white/50 dark:hover:bg-black/50
        transform-gpu will-change-transform
        ${className}
      `}
    >
      {/* Glossy reflection effect */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none opacity-50" />
      
      {children}
    </motion.div>
  );
};

export default GlassCard;