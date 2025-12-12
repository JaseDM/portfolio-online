import React, { useState } from 'react';
import GlassCard from './GlassCard';
import { ExternalLink, Filter } from 'lucide-react';
import { Project, ProjectCategory } from '../types';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const categories: ProjectCategory[] = ['Todo', 'Branding', 'Web', 'Fotografía', 'Video', 'AI Art'];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('Todo');
  const { t } = useLanguage();

  const allProjects: Project[] = [
    {
      id: 1,
      title: "Brand Evolution",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop",
      heightClass: "h-64",
      description: t.portfolio.projects[1]
    },
    {
      id: 2,
      title: "Eco Store",
      category: "Web",
      image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=800&auto=format&fit=crop",
      heightClass: "h-96",
      description: t.portfolio.projects[2]
    },
    {
      id: 3,
      title: "Urban Portraits",
      category: "Fotografía",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
      heightClass: "h-80",
      description: t.portfolio.projects[3]
    },
    {
      id: 4,
      title: "Neural Dreams",
      category: "AI Art",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
      heightClass: "h-72",
      description: t.portfolio.projects[4]
    },
    {
      id: 5,
      title: "Crypto Dashboard",
      category: "Web",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      heightClass: "h-64",
      description: t.portfolio.projects[5]
    },
    {
      id: 6,
      title: "Cinematic Reel",
      category: "Video",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop",
      heightClass: "h-96",
      description: t.portfolio.projects[6]
    },
    {
      id: 7,
      title: "Server Arch",
      category: "Web",
      image: "https://images.unsplash.com/photo-1558494949-ef2a278891f6?q=80&w=800&auto=format&fit=crop",
      heightClass: "h-72",
      description: t.portfolio.projects[7]
    },
    {
      id: 8,
      title: "Minimal Logo",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1626785774573-4b799312c95d?q=80&w=800&auto=format&fit=crop",
      heightClass: "h-80",
      description: t.portfolio.projects[8]
    }
  ];

  const filteredProjects = activeCategory === 'Todo' 
    ? allProjects 
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 relative bg-gray-50 dark:bg-black/20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header & Filter */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">{t.portfolio.title}</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl">
              {t.portfolio.subtitle}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 justify-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/25'
                    : 'bg-white dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/10'
                }`}
              >
                {cat === 'Todo' ? t.portfolio.all : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="break-inside-avoid"
              >
                <GlassCard className="group cursor-pointer overflow-hidden !rounded-xl !border-0 !p-0">
                  <div className="relative">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-brand-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="text-xs font-bold text-brand-300 uppercase tracking-wider mb-2 block">
                          {project.category}
                        </span>
                        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                        <p className="text-gray-200 text-sm line-clamp-2 mb-4">{project.description}</p>
                        <span className="inline-flex items-center gap-2 text-white font-medium text-sm border-b border-white/30 pb-0.5 hover:border-white transition-colors">
                          {t.portfolio.viewProject} <ExternalLink size={14} />
                        </span>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;