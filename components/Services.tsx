import React from 'react';
import GlassCard from './GlassCard';
import { Palette, Server, Bot, Check, Star, Code } from 'lucide-react';
import { ServiceCategory, ServiceBundle } from '../types';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import GeometricLogo from './GeometricLogo';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const specialties: ServiceCategory[] = [
    {
      id: 'design',
      title: t.services.categories.design.title,
      icon: 'Palette',
      description: t.services.categories.design.desc,
      items: t.services.categories.design.items
    },
    {
      id: 'tech',
      title: t.services.categories.tech.title,
      icon: 'Code',
      description: t.services.categories.tech.desc,
      items: t.services.categories.tech.items
    },
    {
      id: 'ai',
      title: t.services.categories.ai.title,
      icon: 'Bot',
      description: t.services.categories.ai.desc,
      items: t.services.categories.ai.items
    }
  ];

  const bundles: ServiceBundle[] = [
    {
      id: 'starter',
      title: t.services.bundles.starter.title,
      features: t.services.bundles.starter.features,
      recommended: false
    },
    {
      id: 'growth',
      title: t.services.bundles.growth.title,
      features: t.services.bundles.growth.features,
      recommended: true
    },
    {
      id: 'automation',
      title: t.services.bundles.automation.title,
      features: t.services.bundles.automation.features,
      recommended: false
    }
  ];

  const getIcon = (name: string) => {
    switch (name) {
      case 'Palette': return <Palette size={32} className="text-brand-400" />;
      case 'Code': return <Code size={32} className="text-brand-600" />;
      case 'Bot': return <Bot size={32} className="text-brand-500" />;
      default: return <Star size={32} />;
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[100px] -z-10 pointer-events-none"
      />

      {/* Blueprint Geometric Logo - Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="absolute top-[30%] -left-[5%] md:left-[2%] z-0 hidden md:block"
      >
        <GeometricLogo />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white"
          >
            {t.services.title}
          </motion.h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        {/* SECTION 1: Specialties Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
          {specialties.map((spec, index) => (
            <GlassCard key={spec.id} delay={index * 0.1} className="p-8 h-full flex flex-col">
              <div className="mb-6 p-4 rounded-2xl bg-gray-100 dark:bg-white/5 w-fit">
                {getIcon(spec.icon)}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{spec.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">{spec.description}</p>

              <div className="mt-auto space-y-6">
                {spec.items.map((item, idx) => (
                  <div key={idx} className="group">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-brand-500 transition-colors flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-500 ml-3.5 mt-1">{item.detail}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>

        {/* SECTION 2: Combined Bundles */}
        <div className="relative">
          <div className="text-center mb-12">
            {/* Gradient Border Badge */}
            <div className="inline-block relative p-[1px] rounded-full bg-gradient-to-r from-brand-300 via-brand-500 to-brand-300 mb-4">
              <div className="px-3 py-1 rounded-full bg-white dark:bg-black/80 backdrop-blur-md">
                <span className="text-xs font-bold tracking-widest uppercase text-brand-600 dark:text-brand-300">
                  {t.services.bundles.badge}
                </span>
              </div>
            </div>

            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{t.services.bundles.title}</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-2">{t.services.bundles.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {bundles.map((bundle, index) => (
              <GlassCard
                key={bundle.id}
                delay={0.2 + (index * 0.1)}
                className={`p-8 relative ${bundle.recommended ? 'transform md:-translate-y-4' : ''}`}
              >
                {/* Animated Gradient Border for Recommended Card */}
                {bundle.recommended && (
                  <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-br from-brand-400 via-brand-600 to-brand-400 animate-gradient-xy -z-10" />
                )}

                {bundle.recommended && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-brand-600 to-brand-400 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                    {t.services.bundles.popular}
                  </div>
                )}

                {/* Card Content Background (to sit on top of gradient border) */}
                <div className={`h-full ${bundle.recommended ? 'bg-white/90 dark:bg-black/90 rounded-xl -m-7 p-7' : ''}`}>
                  <h4 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">{bundle.title}</h4>

                  <ul className="space-y-4 mb-8">
                    {bundle.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300">
                        <Check size={18} className="text-brand-500 mt-0.5 shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 rounded-lg font-semibold transition-all ${bundle.recommended
                    ? 'bg-gradient-to-r from-brand-600 to-brand-400 text-white shadow-lg hover:shadow-brand-500/25'
                    : 'bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-white/20'
                    }`}>
                    {t.services.bundles.cta}
                  </button>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;