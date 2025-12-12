import { Language } from '../types';

export const translations = {
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      portfolio: 'Portfolio',
      contact: 'Contacto',
    },
    hero: {
      badge: 'Fundador de SoulMarket',
      role: 'Creative Tech & AI',
      description: 'Un perfil híbrido donde el arte se encuentra con la ingeniería. Especialista en <span class="font-semibold text-gray-800 dark:text-white">Diseño Gráfico, Fotografía y Video</span>, combinado con una sólida base técnica en <span class="font-semibold text-gray-800 dark:text-white">Gestión de Servidores, Bases de Datos y Automatización con IA</span>.',
      ctaPortfolio: 'Ver Portfolio',
      ctaContact: 'Contactar',
    },
    services: {
      title: 'Ecosistema de Servicios',
      subtitle: 'Desde la especialización técnica hasta soluciones integrales llave en mano.',
      categories: {
        design: {
          title: 'Visual & Branding',
          desc: 'La cara visible de tu marca. Diseño que no solo se ve bien, sino que comunica.',
          items: [
            { name: 'Diseño Gráfico', detail: 'Logotipos, papelería y material publicitario.' },
            { name: 'Fotografía & Video', detail: 'Producción audiovisual profesional y edición.' },
            { name: 'UI/UX Design', detail: 'Prototipado de interfaces centradas en el usuario.' }
          ]
        },
        tech: {
          title: 'Desarrollo & Tech',
          desc: 'El motor bajo el capó. Código limpio, escalable y de alto rendimiento.',
          items: [
            { name: 'Desarrollo Web', detail: 'Astro, React, Next.js. Webs estáticas y dinámicas.' },
            { name: 'Apps Móviles', detail: 'Soluciones nativas y PWA.' },
            { name: 'Gestión de Servidores', detail: 'VPS, AWS, Docker y seguridad.' }
          ]
        },
        ai: {
          title: 'Inteligencia Artificial',
          desc: 'El futuro aplicado al presente. Automatización y generación de contenido.',
          items: [
            { name: 'Automatizaciones', detail: 'n8n, Zapier y scripts personalizados en Python.' },
            { name: 'IA Generativa', detail: 'Creación de assets visuales y textuales con modelos LLM.' },
            { name: 'Chatbots', detail: 'Asistentes virtuales entrenados con tus datos.' }
          ]
        }
      },
      bundles: {
        badge: 'Soluciones Integrales',
        title: 'Soul Packs',
        subtitle: 'Combinamos lo mejor de cada mundo para maximizar tu impacto.',
        cta: 'Solicitar Info',
        popular: 'MÁS POPULAR',
        starter: {
          title: 'Digital Starter',
          features: ['Diseño de Identidad (Logo + Manual)', 'Landing Page en Astro', 'Hosting Básico (1 año)', 'Configuración de Correo']
        },
        growth: {
          title: 'Soul Growth',
          features: ['Web Corporativa Completa', 'Sesión de Fotografía', 'Estrategia SEO Inicial', 'Mantenimiento Técnico Mensual']
        },
        automation: {
          title: 'AI Enterprise',
          features: ['Auditoría de Procesos', 'Desarrollo Web a Medida', 'Chatbot de Atención al Cliente', 'Automatización de Facturación/Leads']
        }
      }
    },
    portfolio: {
      title: 'Portfolio',
      subtitle: 'Explora una colección de trabajos seleccionados a través de diferentes disciplinas.',
      all: 'Todo',
      viewProject: 'Ver Proyecto',
      projects: {
        1: 'Rediseño completo de identidad corporativa.',
        2: 'E-commerce headless con Astro y Shopify.',
        3: 'Sesión editorial para revista de moda.',
        4: 'Generación de assets para videojuego indie.',
        5: 'Interfaz financiera en tiempo real.',
        6: 'Edición y color grading para spot publicitario.',
        7: 'Infraestructura escalable en AWS.',
        8: 'Identidad visual para startup tecnológica.'
      }
    },
    contact: {
      titleLine1: 'Hablemos de tu',
      titleLine2: 'próxima idea',
      desc: '¿Listo para transformar tu visión? Como fundador de SoulMarket, estoy aquí para ayudarte a construir algo extraordinario, desde el diseño hasta el despliegue.',
      form: {
        name: 'Nombre',
        namePlaceholder: 'Tu nombre',
        email: 'Email',
        emailPlaceholder: 'tu@email.com',
        message: 'Mensaje',
        messagePlaceholder: 'Cuéntame sobre tu proyecto...',
        submit: 'Enviar Mensaje'
      },
      footer: 'SoulMarket Portfolio. Todos los derechos reservados.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      portfolio: 'Portfolio',
      contact: 'Contact',
    },
    hero: {
      badge: 'Founder of SoulMarket',
      role: 'Creative Tech & AI',
      description: 'A hybrid profile where art meets engineering. Specialist in <span class="font-semibold text-gray-800 dark:text-white">Graphic Design, Photography & Video</span>, combined with a solid technical foundation in <span class="font-semibold text-gray-800 dark:text-white">Server Management, Databases & AI Automation</span>.',
      ctaPortfolio: 'View Portfolio',
      ctaContact: 'Contact Me',
    },
    services: {
      title: 'Service Ecosystem',
      subtitle: 'From technical specialization to turnkey integral solutions.',
      categories: {
        design: {
          title: 'Visual & Branding',
          desc: 'The visible face of your brand. Design that not only looks good but communicates.',
          items: [
            { name: 'Graphic Design', detail: 'Logos, stationery, and advertising material.' },
            { name: 'Photography & Video', detail: 'Professional audiovisual production and editing.' },
            { name: 'UI/UX Design', detail: 'User-centered interface prototyping.' }
          ]
        },
        tech: {
          title: 'Dev & Tech',
          desc: 'The engine under the hood. Clean, scalable, and high-performance code.',
          items: [
            { name: 'Web Development', detail: 'Astro, React, Next.js. Static and dynamic webs.' },
            { name: 'Mobile Apps', detail: 'Native solutions and PWAs.' },
            { name: 'Server Management', detail: 'VPS, AWS, Docker, and security.' }
          ]
        },
        ai: {
          title: 'Artificial Intelligence',
          desc: 'The future applied to the present. Automation and content generation.',
          items: [
            { name: 'Automations', detail: 'n8n, Zapier, and custom Python scripts.' },
            { name: 'Generative AI', detail: 'Creation of visual and textual assets with LLM models.' },
            { name: 'Chatbots', detail: 'Virtual assistants trained with your data.' }
          ]
        }
      },
      bundles: {
        badge: 'Integral Solutions',
        title: 'Soul Packs',
        subtitle: 'We combine the best of both worlds to maximize your impact.',
        cta: 'Request Info',
        popular: 'MOST POPULAR',
        starter: {
          title: 'Digital Starter',
          features: ['Identity Design (Logo + Brand Book)', 'Landing Page in Astro', 'Basic Hosting (1 year)', 'Email Configuration']
        },
        growth: {
          title: 'Soul Growth',
          features: ['Full Corporate Website', 'Photography Session', 'Initial SEO Strategy', 'Monthly Technical Maintenance']
        },
        automation: {
          title: 'AI Enterprise',
          features: ['Process Audit', 'Custom Web Development', 'Customer Service Chatbot', 'Billing/Lead Automation']
        }
      }
    },
    portfolio: {
      title: 'Portfolio',
      subtitle: 'Explore a collection of selected works across different disciplines.',
      all: 'All',
      viewProject: 'View Project',
      projects: {
        1: 'Complete corporate identity redesign.',
        2: 'Headless e-commerce with Astro and Shopify.',
        3: 'Editorial session for fashion magazine.',
        4: 'Asset generation for indie video game.',
        5: 'Real-time financial dashboard.',
        6: 'Editing and color grading for commercial spot.',
        7: 'Scalable infrastructure on AWS.',
        8: 'Visual identity for tech startup.'
      }
    },
    contact: {
      titleLine1: "Let's talk about your",
      titleLine2: 'next idea',
      desc: 'Ready to transform your vision? As founder of SoulMarket, I am here to help you build something extraordinary, from design to deployment.',
      form: {
        name: 'Name',
        namePlaceholder: 'Your name',
        email: 'Email',
        emailPlaceholder: 'you@email.com',
        message: 'Message',
        messagePlaceholder: 'Tell me about your project...',
        submit: 'Send Message'
      },
      footer: 'SoulMarket Portfolio. All rights reserved.'
    }
  },
  ca: {
    nav: {
      home: 'Inici',
      services: 'Serveis',
      portfolio: 'Portfolio',
      contact: 'Contacte',
    },
    hero: {
      badge: 'Fundador de SoulMarket',
      role: 'Creative Tech & IA',
      description: 'Un perfil híbrid on l\'art es troba amb l\'enginyeria. Especialista en <span class="font-semibold text-gray-800 dark:text-white">Disseny Gràfic, Fotografia i Vídeo</span>, combinat amb una sòlida base tècnica en <span class="font-semibold text-gray-800 dark:text-white">Gestió de Servidors, Bases de Dades i Automatització amb IA</span>.',
      ctaPortfolio: 'Veure Portfolio',
      ctaContact: 'Contactar',
    },
    services: {
      title: 'Ecosistema de Serveis',
      subtitle: 'Des de l\'especialització tècnica fins a solucions integrals clau en mà.',
      categories: {
        design: {
          title: 'Visual & Branding',
          desc: 'La cara visible de la teva marca. Disseny que no només es veu bé, sinó que comunica.',
          items: [
            { name: 'Disseny Gràfic', detail: 'Logotips, papereria i material publicitari.' },
            { name: 'Fotografia & Vídeo', detail: 'Producció audiovisual professional i edició.' },
            { name: 'UI/UX Design', detail: 'Prototipatge d\'interfícies centrades en l\'usuari.' }
          ]
        },
        tech: {
          title: 'Desenvolupament & Tech',
          desc: 'El motor sota el capó. Codi net, escalable i d\'alt rendiment.',
          items: [
            { name: 'Desenvolupament Web', detail: 'Astro, React, Next.js. Webs estàtiques i dinàmiques.' },
            { name: 'Apps Mòbils', detail: 'Solucions natives i PWA.' },
            { name: 'Gestió de Servidors', detail: 'VPS, AWS, Docker i seguretat.' }
          ]
        },
        ai: {
          title: 'Intel·ligència Artificial',
          desc: 'El futur aplicat al present. Automatització i generació de contingut.',
          items: [
            { name: 'Automatitzacions', detail: 'n8n, Zapier i scripts personalitzats en Python.' },
            { name: 'IA Generativa', detail: 'Creació d\'assets visuals i textuals amb models LLM.' },
            { name: 'Chatbots', detail: 'Assistents virtuals entrenats amb les teves dades.' }
          ]
        }
      },
      bundles: {
        badge: 'Solucions Integrals',
        title: 'Soul Packs',
        subtitle: 'Combinem el millor de cada món per maximitzar el teu impacte.',
        cta: 'Sol·licitar Info',
        popular: 'MÉS POPULAR',
        starter: {
          title: 'Digital Starter',
          features: ['Disseny d\'Identitat (Logo + Manual)', 'Landing Page amb Astro', 'Hosting Bàsic (1 any)', 'Configuració de Correu']
        },
        growth: {
          title: 'Soul Growth',
          features: ['Web Corporativa Completa', 'Sessió de Fotografia', 'Estratègia SEO Inicial', 'Manteniment Tècnic Mensual']
        },
        automation: {
          title: 'AI Enterprise',
          features: ['Auditoria de Processos', 'Desenvolupament Web a Mida', 'Chatbot d\'Atenció al Client', 'Automatització de Facturació/Leads']
        }
      }
    },
    portfolio: {
      title: 'Portfolio',
      subtitle: 'Explora una col·lecció de treballs seleccionats a través de diferents disciplines.',
      all: 'Tot',
      viewProject: 'Veure Projecte',
      projects: {
        1: 'Redisseny complet d\'identitat corporativa.',
        2: 'E-commerce headless amb Astro i Shopify.',
        3: 'Sessió editorial per a revista de moda.',
        4: 'Generació d\'assets per a videojoc indie.',
        5: 'Interfície financera en temps real.',
        6: 'Edició i color grading per a espot publicitari.',
        7: 'Infraestructura escalable a AWS.',
        8: 'Identitat visual per a startup tecnològica.'
      }
    },
    contact: {
      titleLine1: 'Parlem de la teva',
      titleLine2: 'pròxima idea',
      desc: 'Llest per transformar la teva visió? Com a fundador de SoulMarket, estic aquí per ajudar-te a construir quelcom extraordinari, des del disseny fins al desplegament.',
      form: {
        name: 'Nom',
        namePlaceholder: 'El teu nom',
        email: 'Email',
        emailPlaceholder: 'tu@email.com',
        message: 'Missatge',
        messagePlaceholder: 'Explica\'m sobre el teu projecte...',
        submit: 'Enviar Missatge'
      },
      footer: 'SoulMarket Portfolio. Tots els drets reservats.'
    }
  }
};