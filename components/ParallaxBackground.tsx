import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Theme } from '../types';

interface ParallaxBackgroundProps {
  theme: Theme;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({ theme }) => {
  const { scrollY } = useScroll();
  
  // Smooth scroll values
  const springConfig = { stiffness: 100, damping: 30, bounce: 0 };
  const scrollYSpring = useSpring(scrollY, springConfig);

  // --- Blob Movements ---
  const y1 = useTransform(scrollYSpring, [0, 2000], [0, 400]);
  const y2 = useTransform(scrollYSpring, [0, 2000], [0, -300]);
  const y3 = useTransform(scrollYSpring, [0, 2000], [0, 200]);
  const rotate1 = useTransform(scrollYSpring, [0, 2000], [0, 90]);
  const rotate2 = useTransform(scrollYSpring, [0, 2000], [0, -45]);

  // --- Geometric Shapes Movements ---
  const yGeo1 = useTransform(scrollYSpring, [0, 2000], [0, -500]); 
  const rotateGeo1 = useTransform(scrollYSpring, [0, 2000], [0, 180]);
  
  const yGeo2 = useTransform(scrollYSpring, [0, 2000], [0, 300]);
  const scaleGeo2 = useTransform(scrollYSpring, [0, 1000], [1, 1.2]);

  const yGeo3 = useTransform(scrollYSpring, [0, 2000], [0, -250]);
  const rotateGeo3 = useTransform(scrollYSpring, [0, 2000], [45, 90]);

  // --- Blueprint / Logo Creation Movement ---
  const yBlueprint = useTransform(scrollYSpring, [0, 1500], [0, -200]);
  const rotateBlueprint = useTransform(scrollYSpring, [0, 1500], [-5, 10]);

  // Animation variants for the drawing effect - Looping
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => {
      const delay = 0.5 + (i * 0.5);
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 3, bounce: 0, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
      
      {/* 1. Base Gradient Layer */}
      <div className={`absolute inset-0 transition-colors duration-500 ${theme === Theme.DARK ? 'mesh-gradient-bg' : 'light-mesh-bg'}`} />

      {/* 2. Ambient Blobs (Soft Layer) */}
      <motion.div
        style={{ y: y1, rotate: rotate1 }}
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand-600/20 dark:bg-brand-900/30 blur-[100px] mix-blend-multiply dark:mix-blend-screen"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{ y: y2, rotate: rotate2 }}
        className="absolute top-[30%] right-[-5%] w-[400px] h-[400px] rounded-full bg-brand-400/20 dark:bg-brand-800/20 blur-[80px] mix-blend-multiply dark:mix-blend-screen"
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] rounded-full bg-brand-500/10 dark:bg-brand-900/20 blur-[120px] mix-blend-multiply dark:mix-blend-screen"
        animate={{ x: [-20, 20, -20] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 3. Geometric Accents (Tech Layer) */}

      {/* NEW: Blueprint / Logo Creation Effect */}
      <motion.div
        style={{ y: yBlueprint, rotate: rotateBlueprint }}
        className="absolute top-[15%] right-[5%] md:right-[10%] w-[280px] h-[280px] z-0"
      >
        <svg width="100%" height="100%" viewBox="0 0 200 200" className="drop-shadow-2xl">
          <defs>
            {/* Grid Pattern */}
            <pattern id="blueprint-grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.3" />
            </pattern>
            {/* Gradient for the card background */}
            <linearGradient id="blueprint-grad-fill" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0f766e" stopOpacity="0.9" /> {/* brand-700 */}
              <stop offset="100%" stopColor="#115e59" stopOpacity="0.95" /> {/* brand-800 */}
            </linearGradient>
            <marker id="arrowhead" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
                <polygon points="0 0, 5 2.5, 0 5" fill="white" fillOpacity="0.5" />
            </marker>
          </defs>

          {/* Background Card with Rounded Corners */}
          <rect x="5" y="5" width="190" height="190" rx="20" fill="url(#blueprint-grad-fill)" className="shadow-lg" />
          <rect x="5" y="5" width="190" height="190" rx="20" fill="url(#blueprint-grid)" />

          {/* Blueprint Border Line */}
          <rect x="15" y="15" width="170" height="170" rx="15" fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.3" strokeDasharray="10 5" />

          {/* Construction Guidelines (Rotating) */}
          <motion.g
             animate={{ rotate: 360 }}
             transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
             style={{ originX: "100px", originY: "100px" }}
          >
             <circle cx="100" cy="100" r="60" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.4" />
             <line x1="100" y1="20" x2="100" y2="180" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.3" />
             <line x1="20" y1="100" x2="180" y2="100" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.3" />
          </motion.g>

          {/* Measurement Lines (Static/Tech feel) */}
          <g opacity="0.6">
            <line x1="170" y1="40" x2="170" y2="160" stroke="white" strokeWidth="0.5" markerEnd="url(#arrowhead)" markerStart="url(#arrowhead)" />
            <text x="175" y="100" fill="white" fontSize="8" fontFamily="monospace" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>120px</text>
            
            <line x1="40" y1="170" x2="160" y2="170" stroke="white" strokeWidth="0.5" markerEnd="url(#arrowhead)" markerStart="url(#arrowhead)" />
            <text x="90" y="182" fill="white" fontSize="8" fontFamily="monospace">120px</text>
          </g>

          {/* THE LOGO (Compass Style) - Animated Drawing */}
          <g transform="translate(100, 100)" className="stroke-white" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
             {/* 1. The Head/Loop */}
             <motion.path 
                d="M 0 -35 L 0 -20 M 0 -20 A 12 12 0 1 1 0.1 -20" 
                variants={draw}
                initial="hidden"
                animate="visible"
                custom={1}
             />
             
             {/* 2. Left Leg */}
             <motion.path 
                d="M -4 -8 L -30 45" 
                variants={draw}
                initial="hidden"
                animate="visible"
                custom={2}
             />

             {/* 3. Right Leg */}
             <motion.path 
                d="M 4 -8 L 30 45" 
                variants={draw}
                initial="hidden"
                animate="visible"
                custom={2}
             />

             {/* 4. The Crossbar (Arc) */}
             <motion.path 
                d="M -20 25 Q 0 35 20 25" 
                variants={draw}
                initial="hidden"
                animate="visible"
                custom={3}
             />
             
             {/* 5. Center Axis Point */}
             <motion.circle 
                cx="0" cy="-20" r="3" fill="white" stroke="none"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", repeat: Infinity, repeatType: "reverse", repeatDelay: 4.5, duration: 0.5 }}
             />
          </g>
        </svg>
      </motion.div>

      {/* Shape 1: Wireframe Hexagon (Top Right) */}
      <motion.div
        style={{ y: yGeo1, rotate: rotateGeo1 }}
        className="absolute top-[15%] right-[5%] opacity-60 dark:opacity-40 text-brand-600 dark:text-brand-400"
      >
        <svg width="300" height="300" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 2L184.87 51V149L100 198L15.13 149V51L100 2Z" stroke="currentColor" strokeWidth="1.5" strokeDasharray="10 5" />
            <circle cx="100" cy="100" r="4" fill="currentColor" />
            <circle cx="100" cy="2" r="2" fill="currentColor" />
            <circle cx="184.87" cy="51" r="2" fill="currentColor" />
            <circle cx="184.87" cy="149" r="2" fill="currentColor" />
            <circle cx="100" cy="198" r="2" fill="currentColor" />
            <circle cx="15.13" cy="149" r="2" fill="currentColor" />
            <circle cx="15.13" cy="51" r="2" fill="currentColor" />
        </svg>
      </motion.div>

      {/* Shape 2: Thin Circle Ring (Middle Left) */}
      <motion.div 
        style={{ y: yGeo2, scale: scaleGeo2 }}
        className="absolute top-[40%] left-[-10%] w-[500px] h-[500px] rounded-full border border-brand-300/30 dark:border-brand-100/10 opacity-60 dark:opacity-40"
      >
        <div className="absolute top-1/2 left-0 w-2 h-2 bg-brand-500 rounded-full shadow-lg shadow-brand-500/50" />
      </motion.div>

      {/* Shape 3: Floating Square (Bottom Right) */}
      <motion.div 
        style={{ y: yGeo3, rotate: rotateGeo3 }}
        className="absolute bottom-[15%] right-[15%] w-40 h-40 border-2 border-brand-400/30 dark:border-brand-400/20 rounded-3xl backdrop-blur-[2px] opacity-70 dark:opacity-50"
      >
        <div className="absolute inset-0 bg-white/5 dark:bg-white/5" />
      </motion.div>
      
      {/* 4. Texture Overlay (Noise) */}
      <div 
        className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 dark:opacity-10 mix-blend-overlay pointer-events-none"
      />
    </div>
  );
};

export default ParallaxBackground;