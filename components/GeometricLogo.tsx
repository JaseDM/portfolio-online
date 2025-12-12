import React from 'react';
import { motion } from 'framer-motion';

const GeometricLogo: React.FC = () => {
    // Animation variants for the drawing effect
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
        <div className="relative w-[280px] h-[280px]">
            <svg width="100%" height="100%" viewBox="0 0 200 200" className="drop-shadow-2xl">
                <defs>
                    {/* Grid Pattern */}
                    <pattern id="geo-blueprint-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" strokeOpacity="0.3" />
                    </pattern>
                    {/* Gradient for the card background */}
                    <linearGradient id="geo-blueprint-grad-fill" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0f766e" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#115e59" stopOpacity="0.95" />
                    </linearGradient>
                    <marker id="geo-arrowhead" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
                        <polygon points="0 0, 5 2.5, 0 5" fill="white" fillOpacity="0.5" />
                    </marker>
                </defs>

                {/* Background Card with Rounded Corners */}
                <rect x="5" y="5" width="190" height="190" rx="20" fill="url(#geo-blueprint-grad-fill)" className="shadow-lg" />
                <rect x="5" y="5" width="190" height="190" rx="20" fill="url(#geo-blueprint-grid)" />

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
                    <line x1="170" y1="40" x2="170" y2="160" stroke="white" strokeWidth="0.5" markerEnd="url(#geo-arrowhead)" markerStart="url(#geo-arrowhead)" />
                    <text x="175" y="100" fill="white" fontSize="8" fontFamily="monospace" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>120px</text>

                    <line x1="40" y1="170" x2="160" y2="170" stroke="white" strokeWidth="0.5" markerEnd="url(#geo-arrowhead)" markerStart="url(#geo-arrowhead)" />
                    <text x="90" y="182" fill="white" fontSize="8" fontFamily="monospace">120px</text>
                </g>

                {/* THE LOGO (Geometric S M Monogram) - Animated Drawing */}
                <g transform="translate(100, 100)" className="stroke-white" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    {/* 'S' Shape constructed from geometric arcs/lines */}
                    {/* Upper Arc of S */}
                    <motion.path
                        d="M 15 -20 A 15 15 0 1 0 -15 -20"
                        variants={draw}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        custom={1}
                    />
                    {/* Spine of S */}
                    <motion.path
                        d="M -15 -20 L 15 20"
                        variants={draw}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        custom={2}
                    />
                    {/* Lower Arc of S */}
                    <motion.path
                        d="M 15 20 A 15 15 0 1 1 -15 20"
                        variants={draw}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        custom={3}
                    />

                    {/* M Shape overlay or surrounding accents */}
                    <motion.path
                        d="M -30 -30 L -30 30"
                        variants={draw}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        custom={4}
                        opacity={0.5}
                    />
                    <motion.path
                        d="M 30 -30 L 30 30"
                        variants={draw}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        custom={4}
                        opacity={0.5}
                    />

                    {/* Central Axis Point */}
                    <motion.circle
                        cx="0" cy="0" r="3" fill="white" stroke="none"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: "spring", repeat: Infinity, repeatType: "reverse", repeatDelay: 4.5, duration: 0.5 }}
                    />
                </g>
            </svg>
        </div>
    );
};

export default GeometricLogo;
