export interface ServiceDeliverable {
  title: string;
  desc: string;
  badge?: string;
}

export interface ServiceProcessStep {
  step: string;
  title: string;
  desc: string;
}

export interface ServiceBenefit {
  title: string;
  desc: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  slug: string;
  iconName: "Compass" | "Sparkle" | "BookOpen" | "Desktop" | "PlayCircle";
  badge: { es: string; en: string };
  title: { es: string; en: string };
  tagline: { es: string; en: string };
  overview: {
    es: { p1: string; p2: string; quote: string };
    en: { p1: string; p2: string; quote: string };
  };
  deliverables: {
    es: ServiceDeliverable[];
    en: ServiceDeliverable[];
  };
  process: {
    es: ServiceProcessStep[];
    en: ServiceProcessStep[];
  };
  benefits: {
    es: ServiceBenefit[];
    en: ServiceBenefit[];
  };
  faq: {
    es: ServiceFaq[];
    en: ServiceFaq[];
  };
  featuredProjectIds: number[];
}

export const servicesData: ServiceDetail[] = [
  // 1. ESTRATEGIA DE MARCA
  {
    slug: "estrategia-de-marca",
    iconName: "Compass",
    badge: {
      es: "Servicio 01 — Estrategia",
      en: "Service 01 — Strategy"
    },
    title: {
      es: "Estrategia de Marca",
      en: "Brand Strategy"
    },
    tagline: {
      es: "Definimos la esencia, el posicionamiento y la narrativa que conectan tu marca con su audiencia ideal.",
      en: "We define the essence, positioning, and storytelling that connect your brand with its ideal audience."
    },
    overview: {
      es: {
        p1: "Una identidad visual sin base estratégica es solo decoración. En Shamy Creative Studio concebimos la estrategia de marca como los cimientos sobre los cuales se erige cada decisión creativa, comercial y comunicacional de tu negocio.",
        p2: "Analizamos en profundidad tu mercado, desciframos los arquetipos de tu audiencia y formulamos una propuesta de valor diferencial que te posiciona de manera orgánica y contundente por encima del ruido de la competencia.",
        quote: "No diseñamos para decorar; estructuramos marcas para trascender y liderar su sector."
      },
      en: {
        p1: "Visual identity without strategic grounding is merely decoration. At Shamy Creative Studio, we treat brand strategy as the bedrock upon which every creative, commercial, and communicative decision is built.",
        p2: "We conduct deep industry analysis, decode target audience archetypes, and formulate a distinctive value proposition that organically elevates your brand above market noise.",
        quote: "We don't design to decorate; we engineer brands to endure and lead their industry."
      }
    },
    deliverables: {
      es: [
        {
          title: "Plataforma de Marca & Manifiesto",
          desc: "Definición del propósito, visión, misión, valores y el manifiesto fundacional que inspira al equipo y cautiva a los clientes.",
          badge: "Estratégico"
        },
        {
          title: "Arquetipos y Tono de Voz",
          desc: "Guía de personalidad de marca, directrices de redacción (copywriting) y arquetipos psicológicos para hablar con coherencia en todos los canales.",
          badge: "Narrativa"
        },
        {
          title: "Mapa de Posicionamiento Competitivo",
          desc: "Auditoría de mercado y matriz de diferenciación para identificar los espacios en blanco donde tu marca puede dominar.",
          badge: "Investigación"
        },
        {
          title: "Arquitectura de Marca & Portafolio",
          desc: "Estructuración clara de submarcas, productos o servicios para optimizar la comprensión y el cross-selling.",
          badge: "Estructura"
        }
      ],
      en: [
        {
          title: "Brand Platform & Manifesto",
          desc: "Definition of core purpose, vision, values, and the foundational manifesto that rallies your team and captivates customers.",
          badge: "Strategic"
        },
        {
          title: "Archetypes & Tone of Voice",
          desc: "Brand personality guidelines, copywriting tone frameworks, and behavioral archetypes for cohesive omni-channel messaging.",
          badge: "Narrative"
        },
        {
          title: "Competitive Positioning Map",
          desc: "Market audit and differentiation matrix to uncover whitespace opportunities where your brand can lead.",
          badge: "Research"
        },
        {
          title: "Brand & Product Architecture",
          desc: "Systematic structuring of sub-brands, products, and services to streamline customer navigation and drive cross-selling.",
          badge: "Structure"
        }
      ]
    },
    process: {
      es: [
        {
          step: "01",
          title: "Inmersión & Diagnóstico",
          desc: "Entrevistas en profundidad con fundadores, análisis de métricas históricas y auditoría de percepción en el mercado actual."
        },
        {
          step: "02",
          title: "Benchmarking & Detección de Oportunidades",
          desc: "Mapeo exhaustivo de la competencia directa e indirecta para encontrar ventajas competitivas desatendidas."
        },
        {
          step: "03",
          title: "Definición Estratégica & Pilares",
          desc: "Conceptualización de la gran idea de marca (Big Idea), propuesta de valor única y arquitectura de mensajes clave."
        },
        {
          step: "04",
          title: "Documento Maestro de Marca",
          desc: "Consolidación en un libro estratégico ejecutable para dirección, marketing y el posterior desarrollo visual."
        }
      ],
      en: [
        {
          step: "01",
          title: "Immersion & Audit",
          desc: "In-depth founder interviews, historical performance review, and current market perception assessment."
        },
        {
          step: "02",
          title: "Benchmarking & White-Space Discovery",
          desc: "Exhaustive competitive mapping to identify overlooked advantages and untapped market segments."
        },
        {
          step: "03",
          title: "Strategic Formulation & Pillars",
          desc: "Articulating the core brand Big Idea, unique value proposition, and key messaging pillars."
        },
        {
          step: "04",
          title: "Brand Playbook Delivery",
          desc: "Consolidation into an actionable strategic manual for executive leadership, marketing teams, and visual design."
        }
      ]
    },
    benefits: {
      es: [
        {
          title: "Claridad Absoluta en la Toma de Decisiones",
          desc: "Elimina la ambigüedad en comunicación y lanzamientos con una guía clara de quién eres y hacia dónde vas."
        },
        {
          title: "Atracción Orgánica de Clientes de Alto Valor",
          desc: "Un posicionamiento nítido resuena naturalmente con audiencias dispuestas a pagar más por calidad."
        },
        {
          title: "Lealtad y Cohesión de Equipo",
          desc: "Un propósito inspirador alinea a todos los colaboradores bajo un mismo estandarte creativo y comercial."
        }
      ],
      en: [
        {
          title: "Absolute Decision-Making Clarity",
          desc: "Eliminates ambiguity across campaigns and product launches with an uncompromising blueprint of your core identity."
        },
        {
          title: "Organic Magnet for High-Value Clients",
          desc: "Sharp positioning resonates naturally with discerning audiences eager to invest in premium solutions."
        },
        {
          title: "Team Alignment & Brand Loyalty",
          desc: "An inspiring purpose rallies founders, employees, and partners under a singular creative standard."
        }
      ]
    },
    faq: {
      es: [
        {
          question: "¿Cuándo necesita mi negocio una estrategia de marca?",
          answer: "Cuando vas a lanzar un nuevo negocio, cuando sientes que tu comunicación actual no atrae a los clientes ideales, o antes de realizar un rediseño de identidad visual."
        },
        {
          question: "¿Cuánto tiempo toma el proceso de consultoría estratégica?",
          answer: "Normalmente toma entre 2 y 4 semanas de investigación intensiva y talleres colaborativos antes de pasar a la fase de diseño."
        },
        {
          question: "¿Qué recibo al finalizar?",
          answer: "Un Brand Strategy Book exhaustivo en PDF interactivo y presentaciones ejecutivas con todos los pilares, arquetipos y guías de tono."
        }
      ],
      en: [
        {
          question: "When does my company need a brand strategy?",
          answer: "When launching a new venture, when existing marketing fails to attract high-tier clients, or prior to any major visual rebrand."
        },
        {
          question: "How long does the strategic consulting process take?",
          answer: "Typically 2 to 4 weeks of intensive research, stakeholder workshops, and framework formulation."
        },
        {
          question: "What tangible deliverables do we receive?",
          answer: "A comprehensive interactive Brand Strategy Book and executive slide decks containing all pillars, archetypes, and tone guidelines."
        }
      ]
    },
    featuredProjectIds: [1, 3, 5]
  },

  // 2. IDENTIDAD VISUAL
  {
    slug: "identidad-visual",
    iconName: "Sparkle",
    badge: {
      es: "Servicio 02 — Identidad",
      en: "Service 02 — Identity"
    },
    title: {
      es: "Identidad Visual",
      en: "Visual Identity"
    },
    tagline: {
      es: "Sistemas de diseño, tipografía y universos gráficos que hacen tu marca inolvidable en cada punto de contacto.",
      en: "Design systems, typography, and graphic universes that make your brand unforgettable across every touchpoint."
    },
    overview: {
      es: {
        p1: "La identidad visual es la manifestación sensorial de tu estrategia. Creamos identidades con carácter: no nos limitamos a diseñar un logotipo, sino un ecosistema gráfico coherente compuesto por sistemas tipográficos, paletas cromáticas medidas al milímetro, texturas y patrones iconográficos.",
        p2: "Nuestro enfoque combina la pureza del diseño suizo contemporáneo con una sensibilidad digital vanguardista, garantizando que tu marca luzca impecable tanto en una pantalla OLED de 120Hz como en una impresión offset de alta gama.",
        quote: "Construimos lenguajes visuales que respiran, evolucionan y cautivan a primera vista."
      },
      en: {
        p1: "Visual identity is the sensory embodiment of your brand strategy. We craft character-driven identities: extending far beyond simple logos to build cohesive graphic ecosystems featuring rigorous typography, meticulously balanced palettes, and bespoke iconographies.",
        p2: "Our methodology fuses the clarity of contemporary Swiss design with cutting-edge digital aesthetics, ensuring your brand looks peerless whether on a 120Hz OLED display or a premium offset print piece.",
        quote: "We construct visual languages that breathe, adapt, and mesmerize at first glance."
      }
    },
    deliverables: {
      es: [
        {
          title: "Logotipo & Sistema de Marcas",
          desc: "Isotipo, logotipo, isotipos reducidos para favicon/apps y variaciones cromáticas para fondo claro y oscuro.",
          badge: "Core"
        },
        {
          title: "Sistema Tipográfico & Jerarquías",
          desc: "Curaduría o diseño de fuentes para titulares, lectura y datos numéricos con escalas matemáticas precisas.",
          badge: "Tipografía"
        },
        {
          title: "Paleta Cromática & Ratios de Accesibilidad",
          desc: "Definición de colores primarios, secundarios y de acento en formatos HEX, RGB, CMYK y Pantone con contraste AAA.",
          badge: "Color"
        },
        {
          title: "Manual de Marca Digital (Brand Guidelines)",
          desc: "Guía completa con reglas de uso, zonas de protección, combinaciones indebidas y mockups aplicados a casos reales.",
          badge: "Normativa"
        },
        {
          title: "Assets para Redes Sociales & Papelería",
          desc: "Plantillas maestras en Figma/Adobe para Instagram, LinkedIn, tarjetas de presentación y membretes institucionales.",
          badge: "Aplicaciones"
        }
      ],
      en: [
        {
          title: "Logo & Brand Mark Suite",
          desc: "Logotype, icon mark, responsive favicons/app icons, and light/dark mode color variations.",
          badge: "Core"
        },
        {
          title: "Typographic System & Hierarchy",
          desc: "Font curation, pairing rules, and mathematical type scales for display, editorial, and digital UI.",
          badge: "Typography"
        },
        {
          title: "Color Palette & Contrast Ratios",
          desc: "Primary, secondary, and accent colors calibrated in HEX, RGB, CMYK, and Pantone with AAA accessibility standards.",
          badge: "Color"
        },
        {
          title: "Interactive Brand Guidelines",
          desc: "Comprehensive manual detailing clearspace, minimum sizes, misuses, and realistic mockups.",
          badge: "Guidelines"
        },
        {
          title: "Social & Stationery Collateral",
          desc: "Master templates in Figma/Adobe for social platforms, business cards, corporate stationery, and digital assets.",
          badge: "Collateral"
        }
      ]
    },
    process: {
      es: [
        {
          step: "01",
          title: "Moodboard & Exploración Conceptual",
          desc: "Exploración de 2 a 3 rutas visuales iniciales con direcciones estilísticas, texturas y referencias de arte."
        },
        {
          step: "02",
          title: "Diseño Vectorial & Construcción Geométrica",
          desc: "Geometrización óptica de símbolos, diseño tipográfico y pruebas de legibilidad en micro y macro escalas."
        },
        {
          step: "03",
          title: "Pruebas de Estrés en Contexto Real",
          desc: "Simulación de la identidad en packaging, interfaces móviles, señalética exterior y merchandising."
        },
        {
          step: "04",
          title: "Exportación de Master Assets & Entrega",
          desc: "Entrega de archivos vectoriales organizados (SVG, AI, PDF, PNG) y manual de directrices de uso."
        }
      ],
      en: [
        {
          step: "01",
          title: "Moodboarding & Direction Exploration",
          desc: "Exploration of 2 to 3 distinct visual trajectories showcasing stylistic treatments, textures, and aesthetic cues."
        },
        {
          step: "02",
          title: "Vector Craft & Optical Geometry",
          desc: "Geometric refinement of marks, custom type kerning, and micro/macro legibility stress-testing."
        },
        {
          step: "03",
          title: "Real-World Context Simulation",
          desc: "Prototyping brand applications across packaging, digital UI, editorial layouts, and physical signage."
        },
        {
          step: "04",
          title: "Master Asset Export & Delivery",
          desc: "Clean organization of all vector formats (SVG, AI, PDF, PNG) alongside the interactive brand guide."
        }
      ]
    },
    benefits: {
      es: [
        {
          title: "Diferenciación Inmediata y Memorable",
          desc: "Tu marca se vuelve reconocible al instante en cualquier feed, vitrina o anuncio publicitario."
        },
        {
          title: "Consistencia Visual Escalable",
          desc: "Cualquier diseñador o desarrollador podrá crear nuevas piezas respetando al 100% el lenguaje de la marca."
        },
        {
          title: "Percepción de Alta Gama",
          desc: "Un sistema visual pulido comunica profesionalismo y eleva el valor percibido de tus productos o servicios."
        }
      ],
      en: [
        {
          title: "Instant Recall & Distinction",
          desc: "Your brand stands out in saturated social feeds, physical shelves, and enterprise pitch decks."
        },
        {
          title: "Seamless Scalability",
          desc: "Enables in-house teams and external vendors to create on-brand collateral effortlessly."
        },
        {
          title: "Premium Value Perception",
          desc: "Refined aesthetics project institutional strength, commanding premium market pricing."
        }
      ]
    },
    faq: {
      es: [
        {
          question: "¿Cuántas propuestas de diseño iniciales presentan?",
          answer: "Presentamos 2 rutas conceptuales profundamente desarrolladas y fundamentadas en la estrategia, con aplicaciones reales para evaluar su potencial."
        },
        {
          question: "¿Entregan archivos editables?",
          answer: "Sí, todos los archivos finales se entregan en vectores limpios (AI, EPS, SVG) y fuentes licenciadas con su estructura de carpetas lista para producción."
        },
        {
          question: "¿Incluyen el diseño de empaques o aplicaciones?",
          answer: "Incluimos las aplicaciones esenciales del manual y podemos cotizar empaques específicos, papelería personalizada o señalética según las necesidades de tu proyecto."
        }
      ],
      en: [
        {
          question: "How many initial design concepts do you present?",
          answer: "We develop 2 fully realized, strategically grounded design directions with realistic multi-platform applications."
        },
        {
          question: "Do you provide editable source files?",
          answer: "Yes, all final assets are delivered in clean, organized vector formats (AI, EPS, SVG, PNG) ready for digital and print production."
        },
        {
          question: "Can we include packaging or specialized collateral?",
          answer: "Essential touchpoints are included in the master package, and bespoke packaging or environmental signage can be seamlessly integrated."
        }
      ]
    },
    featuredProjectIds: [1, 2, 3, 4, 6]
  },

  // 3. DISEÑO EDITORIAL
  {
    slug: "diseno-editorial",
    iconName: "BookOpen",
    badge: {
      es: "Servicio 03 — Editorial",
      en: "Service 03 — Editorial"
    },
    title: {
      es: "Diseño Editorial",
      en: "Editorial Design"
    },
    tagline: {
      es: "Publicaciones, libros, catálogos e informes maquetados con rigor tipográfico y una experiencia táctil y visual excepcional.",
      en: "Publications, books, catalogs, and reports crafted with typographic rigor and exceptional visual pacing."
    },
    overview: {
      es: {
        p1: "El diseño editorial es el arte de estructurar la información para que la lectura sea un placer fluido y estéticamente enriquecedor. Tratamos cada página como una composición arquitectónica donde los márgenes, las retículas y los blancos respiran con perfecta sincronía.",
        p2: "Desde libros de arte de edición limitada y memorias institucionales hasta catálogos de moda y publicaciones periódicas, combinamos la maestría tipográfica tradicional con acabados de producción especiales (serigrafía, tintas directas, encuadernaciones artesanales).",
        quote: "El diseño editorial transforma información densa en una experiencia cultural y sensorial memorable."
      },
      en: {
        p1: "Editorial design is the craft of orchestrating information so reading becomes a fluid, aesthetically rewarding journey. We treat every spread as an architectural composition where margins, grids, and negative space breathe in perfect harmony.",
        p2: "From limited-edition art books and corporate annual reports to high-fashion catalogs and digital periodicals, we unite classical typography with sophisticated production finishes (screen printing, spot inks, custom binding).",
        quote: "Editorial design elevates complex information into a tactile, sensory cultural experience."
      }
    },
    deliverables: {
      es: [
        {
          title: "Sistemas de Retículas & Grillas Maestras",
          desc: "Estructuras modulares proporcionales para optimizar el ritmo visual y la legibilidad en pliegos complejos.",
          badge: "Estructura"
        },
        {
          title: "Libros, Catálogos & Revistas",
          desc: "Maquetación integral de portada, guardas, índices, capítulos y apéndices con micro-tipografía impecable.",
          badge: "Publicación"
        },
        {
          title: "Reportes Corporativos & Memorias de Sostenibilidad",
          desc: "Transformación de datos cuantitativos en infografías y gráficos elegantes que facilitan la toma de decisiones.",
          badge: "Corporativo"
        },
        {
          title: "Asesoría de Impresión & Preprensa",
          desc: "Selección de papeles especiales, gramajes, pruebas de color cromáticas y supervisión en imprenta.",
          badge: "Producción"
        },
        {
          title: "Ediciones Digitales Interactivas (ePub & PDF)",
          desc: "Adaptaciones interactivas con hipervínculos, índices cliqueables y visualización responsiva para tablets y desktop.",
          badge: "Digital"
        }
      ],
      en: [
        {
          title: "Grid Systems & Master Layouts",
          desc: "Proportional modular grids designed for optimal visual pacing and reading rhythm across complex spreads.",
          badge: "Structure"
        },
        {
          title: "Books, Catalogs & Magazines",
          desc: "Full editorial layout from cover and endpapers to table of contents and refined micro-typography.",
          badge: "Publication"
        },
        {
          title: "Annual & Sustainability Reports",
          desc: "Data visualization and elegant infographics turning complex metrics into compelling strategic narratives.",
          badge: "Corporate"
        },
        {
          title: "Pre-press & Print Production Oversight",
          desc: "Paper stock curation, color proofing, spot varnish specifications, and direct press-check supervision.",
          badge: "Production"
        },
        {
          title: "Interactive Digital Publications",
          desc: "Accessible digital PDF and ePub editions optimized for interactive tablet and desktop viewing.",
          badge: "Digital"
        }
      ]
    },
    process: {
      es: [
        {
          step: "01",
          title: "Arquitectura de Contenido & Curaduría",
          desc: "Análisis de manuscritos, jerarquía de textos, balance de imágenes y estimación de extensión de pliegos."
        },
        {
          step: "02",
          title: "Diseño de Maqueta Maestra & Sistema de Retículas",
          desc: "Definición de tamaños de caja tipográfica, estilos de párrafo, capitulares y tratamiento de pies de foto."
        },
        {
          step: "03",
          title: "Maquetación Exhaustiva & Corrección de Estilo",
          desc: "Montaje detallado página por página, control de viudas/huérfanas y tratamiento de imágenes en alta resolución."
        },
        {
          step: "04",
          title: "Cierre de Preprensa & Supervisión en Taller",
          desc: "Generación de PDFs certificados para CTP / offset y verificación de pruebas de galeradas."
        }
      ],
      en: [
        {
          step: "01",
          title: "Content Architecture & Curation",
          desc: "Manuscript review, narrative hierarchy, image-to-text balance, and sheet imposition planning."
        },
        {
          step: "02",
          title: "Master Template & Grid Engineering",
          desc: "Setting type margins, baseline grids, typographic styles, drop caps, and caption systems."
        },
        {
          step: "03",
          title: "Full Layout Assembly & Typesetting",
          desc: "Page-by-page composition with obsessive attention to ragging, kerning, and color-calibrated image placement."
        },
        {
          step: "04",
          title: "Pre-press Certification & Print Proofing",
          desc: "Exporting high-resolution certified PDF/X files and overseeing printer proof sign-offs."
        }
      ]
    },
    benefits: {
      es: [
        {
          title: "Legibilidad y Confort de Lectura Superior",
          desc: "Estructuras calculadas para guiar la vista sin fatiga en publicaciones de gran volumen."
        },
        {
          title: "Piezas Coleccionables de Alto Valor Físico",
          desc: "Libros y catálogos que tus clientes atesoran en su mesa de centro o biblioteca corporativa."
        },
        {
          title: "Cero Errores en Impresión",
          desc: "Control riguroso de perfiles de color y resolución que evita reimpresiones costosas."
        }
      ],
      en: [
        {
          title: "Superior Reading Comfort & Flow",
          desc: "Scientifically balanced margins and line lengths to ensure fatigue-free reading."
        },
        {
          title: "Keepsake & Collectible Value",
          desc: "Publications designed as physical objects of desire that clients keep on their coffee tables."
        },
        {
          title: "Flawless Print Quality Assurance",
          desc: "Meticulous pre-flight checks and color profiles eliminating costly reprints."
        }
      ]
    },
    faq: {
      es: [
        {
          question: "¿Trabajan tanto publicaciones impresas como digitales?",
          answer: "Sí, creamos las versiones preparadas para imprenta offset/digital y también adaptaciones interactivas ligeras para descarga web."
        },
        {
          question: "¿Nos asesoran en la selección de papeles y acabados?",
          answer: "Absolutamente. Te guiamos entre diferentes tipos de papeles certificados FSC, barnices UV, stamping metalizado y encuadernaciones cosidas."
        },
        {
          question: "¿Se encargan de la corrección ortotipográfica?",
          answer: "Aplicamos normas ortotipográficas estrictas durante la maquetación y recomendamos una revisión final de estilo coordinada con tu equipo."
        }
      ],
      en: [
        {
          question: "Do you handle both print and digital publications?",
          answer: "Yes, we produce certified print-ready files as well as interactive, lightweight digital editions for web distribution."
        },
        {
          question: "Do you advise on paper stock and specialty finishes?",
          answer: "Absolutely. We guide you through FSC-certified stocks, debossing, hot foil stamping, and layflat bindings."
        },
        {
          question: "What software do you use for editorial design?",
          answer: "We work with Adobe InDesign, Illustrator, and custom typesetting workflows for absolute precision."
        }
      ]
    },
    featuredProjectIds: [5, 6, 1]
  },

  // 4. DISEÑO DE INTERFACES
  {
    slug: "diseno-de-interfaces",
    iconName: "Desktop",
    badge: {
      es: "Servicio 04 — UI / UX",
      en: "Service 04 — UI / UX"
    },
    title: {
      es: "Diseño de Interfaces",
      en: "Interface Design"
    },
    tagline: {
      es: "Productos digitales y experiencias web intuitivas donde cada micro-interacción y estado visual están calibrados con precisión.",
      en: "Digital products and intuitive web experiences where every micro-interaction and state is calibrated with precision."
    },
    overview: {
      es: {
        p1: "Diseñamos interfaces digitales que equilibran una estética vanguardista con una usabilidad impecable. Nos alejamos de las plantillas genéricas para crear experiencias inmersivas que cautivan al usuario y simplifican flujos complejos.",
        p2: "Implementamos sistemas de diseño escalables en Figma con tokens de diseño, estados interactivos y micro-animaciones pensadas para desarrollo frontend fluido en Next.js y React.",
        quote: "La mejor interfaz es aquella que se siente viva, receptiva y natural bajo los dedos del usuario."
      },
      en: {
        p1: "We design digital interfaces that strike a delicate balance between avant-garde visual craft and effortless usability. We avoid cookie-cutter templates to build immersive, tactile digital journeys that simplify complex workflows.",
        p2: "We construct scalable design systems in Figma complete with design tokens, responsive breakpoints, and kinetic micro-interactions optimized for seamless Next.js and React execution.",
        quote: "The finest interface is one that feels alive, responsive, and natural under the user's fingertips."
      }
    },
    deliverables: {
      es: [
        {
          title: "Sistemas de Diseño & Componentes UI",
          desc: "Librerías completas en Figma con variantes, auto-layout, tokens de color/tipografía y estados hover/focus/active.",
          badge: "Sistema"
        },
        {
          title: "Sitios Web & Portafolios Inmersivos",
          desc: "Diseño responsivo móvil/desktop con animaciones kinetic, efectos Liquid Glass y navegación ultra-fluida.",
          badge: "Web"
        },
        {
          title: "Plataformas Web & Dashboards SaaS",
          desc: "Interfaces de software centradas en la productividad, visualización de datos limpia y arquitectura de información clara.",
          badge: "App"
        },
        {
          title: "Prototipos Interactivos de Alta Fidelidad",
          desc: "Prototipos navegables con transiciones reales para pruebas de usuario y validación con inversionistas.",
          badge: "Prototipo"
        },
        {
          title: "Especificaciones Técnicas para Frontend (Design Handoff)",
          desc: "Documentación lista para desarrolladores con espaciados, exportación de assets y especificaciones CSS.",
          badge: "Desarrollo"
        }
      ],
      en: [
        {
          title: "Design Systems & UI Component Libraries",
          desc: "Comprehensive Figma libraries with variants, auto-layout, design tokens, and hover/active states.",
          badge: "System"
        },
        {
          title: "Immersive Websites & Digital Portfolios",
          desc: "Responsive web experiences featuring kinetic typography, Liquid Glass shaders, and fluid transitions.",
          badge: "Web"
        },
        {
          title: "SaaS Platforms & Web Applications",
          desc: "Productivity-driven software interfaces with clean data visualization and frictionless user journeys.",
          badge: "App"
        },
        {
          title: "High-Fidelity Interactive Prototypes",
          desc: "Clickable prototypes simulating real app physics for stakeholder demos and user usability testing.",
          badge: "Prototype"
        },
        {
          title: "Developer Handoff & Frontend Specs",
          desc: "Production-ready documentation with tokenized CSS variables, responsive specs, and asset exports.",
          badge: "Engineering"
        }
      ]
    },
    process: {
      es: [
        {
          step: "01",
          title: "Arquitectura de Información & Wireframing",
          desc: "Estructuración de flujos de usuario, mapa del sitio y wireframes de baja fidelidad para validar la navegación."
        },
        {
          step: "02",
          title: "Exploración Visual & Dirección de Arte UI",
          desc: "Definición del lenguaje visual, componentes base, tratamiento de cristal/iluminación y tipografía en pantalla."
        },
        {
          step: "03",
          title: "Diseño de Pantallas & Micro-interacciones",
          desc: "Construcción de todas las vistas responsivas (Mobile, Tablet, Desktop) con estados interactivos detallados."
        },
        {
          step: "04",
          title: "Handoff & Acompañamiento en Desarrollo",
          desc: "Reuniones de transferencia técnica con el equipo de programación y auditoría de calidad (QA visual)."
        }
      ],
      en: [
        {
          step: "01",
          title: "Information Architecture & Wireframes",
          desc: "Mapping user journeys, sitemaps, and low-fidelity structural wireframes to validate usability."
        },
        {
          step: "02",
          title: "Visual Exploration & UI Art Direction",
          desc: "Establishing the digital aesthetic, glass/lighting shaders, typography, and foundational UI components."
        },
        {
          step: "03",
          title: "Screen Design & Micro-Interactions",
          desc: "Full responsive layout design (Mobile, Tablet, Desktop) with detailed interactive and motion specs."
        },
        {
          step: "04",
          title: "Engineering Handoff & Visual QA",
          desc: "Structured developer handoff sessions and pixel-perfect quality assurance during frontend build."
        }
      ]
    },
    benefits: {
      es: [
        {
          title: "Tasas de Conversión Superiores",
          desc: "Flujos limpios sin fricción que guían intuitivamente al usuario hacia la acción deseada."
        },
        {
          title: "Desarrollo Frontend 2x Más Rápido",
          desc: "Sistemas de componentes documentados que reducen drásticamente las horas de programación."
        },
        {
          title: "Experiencia de Usuario Inolvidable",
          desc: "Detalles pulidos y micro-animaciones que generan deleite y diferencian tu producto de la competencia."
        }
      ],
      en: [
        {
          title: "Higher Conversion Rates",
          desc: "Frictionless journeys that naturally guide visitors into active users and buyers."
        },
        {
          title: "2x Faster Frontend Implementation",
          desc: "Modular design tokens and atomic components that slash engineering build times."
        },
        {
          title: "Unforgettable Product Delight",
          desc: "Sensory polish and tactile micro-interactions that elevate your product above market rivals."
        }
      ]
    },
    faq: {
      es: [
        {
          question: "¿También desarrollan el código o solo diseñan?",
          answer: "Diseñamos en Figma y también desarrollamos interfaces frontend en Next.js, React, CSS Vanilla y Web Components con animaciones de alto nivel."
        },
        {
          question: "¿El diseño es completamente responsivo?",
          answer: "Sí, diseñamos vistas nativas adaptadas a resoluciones móviles (375px), tablets (768px), laptops (1024px) y pantallas ultrawide (1440px+)."
        },
        {
          question: "¿Cómo entregan los archivos al equipo de programación?",
          answer: "A través de un archivo maestro en Figma con auto-layout, Design Tokens exportables, documentación de interacción y assets SVG optimizados."
        }
      ],
      en: [
        {
          question: "Do you write the code as well as designing?",
          answer: "We design in Figma and also engineer production frontend code in Next.js, React, Vanilla CSS, and custom Web Components."
        },
        {
          question: "Are layouts fully responsive?",
          answer: "Yes, every design is natively architected for mobile (375px), tablet (768px), desktop (1024px), and ultrawide displays."
        },
        {
          question: "How do you hand off to engineering teams?",
          answer: "Via an organized Figma workspace featuring design tokens, auto-layout components, motion specs, and SVG assets."
        }
      ]
    },
    featuredProjectIds: [7, 8, 9, 10]
  },

  // 5. MOTION GRAPHICS
  {
    slug: "motion-graphics",
    iconName: "PlayCircle",
    badge: {
      es: "Servicio 05 — Motion",
      en: "Service 05 — Motion"
    },
    title: {
      es: "Motion Graphics",
      en: "Motion Graphics"
    },
    tagline: {
      es: "Animación 2D, cinemáticas y narrativa visual dinámica que dan vida, ritmo y tridimensionalidad a tu mensaje de marca.",
      en: "2D animation, brand reveals, and dynamic visual storytelling bringing rhythm and life to your message."
    },
    overview: {
      es: {
        p1: "En un entorno digital saturado de imágenes estáticas, el movimiento es el factor definitivo para captar y retener la atención. Creamos piezas de animación que combinan ritmo musical, física de curvas elásticas y composición cinemática.",
        p2: "Desarrollamos desde reveals de marca y reels corporativos para lanzamientos de producto hasta micro-animaciones Lottie y videos explicativos que traducen conceptos técnicos complejos en historias visualmente irresistibles.",
        quote: "El movimiento transforma la estética en emoción y convierte a los espectadores en entusiastas."
      },
      en: {
        p1: "In a digital landscape flooded with static imagery, kinetic motion is the ultimate differentiator for capturing and holding attention. We create animation pieces marrying musical rhythm, spring physics, and cinematic composition.",
        p2: "From logo reveals and product launch trailers to lightweight Lottie web micro-animations and explainer narratives, we distill complex ideas into captivating kinetic stories.",
        quote: "Motion transforms aesthetics into emotion, turning casual viewers into brand advocates."
      }
    },
    deliverables: {
      es: [
        {
          title: "Brand Reveals & Logo Animation",
          desc: "Animaciones emblemáticas de tu logotipo con sonido diseñado para intros de video, reels y presentaciones.",
          badge: "Branding"
        },
        {
          title: "Videos Explicativos & Lanzamientos de Producto",
          desc: "Narrativas audiovisuales de 30 a 90 segundos que explican la propuesta de valor de tu producto de forma adictiva.",
          badge: "Video"
        },
        {
          title: "Animaciones UI & Micro-interacciones (Lottie / JSON)",
          desc: "Animaciones vectoriales ultra-ligeras para botones, loaders, onboarding y estados de éxito en aplicaciones web y móviles.",
          badge: "UI Motion"
        },
        {
          title: "Motion para Campañas & Redes Sociales",
          desc: "Piezas animadas en formatos verticales (9:16) y horizontales (16:9) diseñadas para detener el scroll y maximizar clics.",
          badge: "Social"
        }
      ],
      en: [
        {
          title: "Brand Reveals & Logo Stings",
          desc: "Signature kinetic logo animations with sound design for video intros, keynotes, and digital launches.",
          badge: "Branding"
        },
        {
          title: "Explainer Videos & Product Teasers",
          desc: "Compelling 30-to-90-second audiovisual narratives that spotlight your product's unique value proposition.",
          badge: "Video"
        },
        {
          title: "Lottie & Web Micro-Animations",
          desc: "Ultra-lightweight JSON/Lottie vector animations for interactive buttons, loaders, and success states.",
          badge: "UI Motion"
        },
        {
          title: "Social Motion & Campaign Assets",
          desc: "Scroll-stopping vertical (9:16) and landscape (16:9) animated assets optimized for high engagement.",
          badge: "Social"
        }
      ]
    },
    process: {
      es: [
        {
          step: "01",
          title: "Guión & Storyboard Conceptual",
          desc: "Estructura narrativa, redacción de voz en off y bocetado cuadro a cuadro de las escenas clave."
        },
        {
          step: "02",
          title: "Styleframes & Diseño de Arte",
          desc: "Ilustración en alta resolución de los fotogramas clave con la paleta de color y texturas definitivas."
        },
        {
          step: "03",
          title: "Animación & Curvas de Velocidad",
          desc: "Animación en After Effects / Cinema 4D con ajustes de easing, física elástica y transiciones fluidas."
        },
        {
          step: "04",
          title: "Diseño Sonoro & Render Final",
          desc: "Sincronización con música original o licenciada, efectos de sonido (SFX) y exportación en 4K y formatos web."
        }
      ],
      en: [
        {
          step: "01",
          title: "Scripting & Visual Storyboarding",
          desc: "Narrative structuring, voiceover copywriting, and frame-by-frame sketching of critical scenes."
        },
        {
          step: "02",
          title: "Styleframes & Art Direction",
          desc: "High-resolution design of hero frames establishing the definitive color palette, lighting, and textures."
        },
        {
          step: "03",
          title: "Animation & Kinetic Easing",
          desc: "Motion crafting in After Effects / Cinema 4D with meticulous velocity curves and organic physics."
        },
        {
          step: "04",
          title: "Sound Design & Master Render",
          desc: "SFX design, musical synchronization, and multi-format master exports in 4K and lightweight web codecs."
        }
      ]
    },
    benefits: {
      es: [
        {
          title: "3x Mayor Retención de Atención",
          desc: "El contenido en movimiento retiene la atención del usuario significativamente más tiempo que las imágenes estáticas."
        },
        {
          title: "Simplificación de Conceptos Complejos",
          desc: "Explica en 30 segundos lo que requeriría 5 páginas de texto técnico."
        },
        {
          title: "Imagen de Marca de Primer Nivel",
          desc: "Animaciones fluidas con diseño sonoro posicionan a tu empresa a la par de las marcas globales más innovadoras."
        }
      ],
      en: [
        {
          title: "3x Higher Viewer Retention",
          desc: "Kinetic visual stories retain audience engagement far longer than static graphics."
        },
        {
          title: "Frictionless Complex Idea Explanation",
          desc: "Explains in 30 seconds what would otherwise require multiple pages of technical documentation."
        },
        {
          title: "World-Class Brand Prestige",
          desc: "Fluid motion and immersive sound design position your company alongside global industry leaders."
        }
      ]
    },
    faq: {
      es: [
        {
          question: "¿Incluyen el diseño de sonido y música?",
          answer: "Sí, cada proyecto de motion incluye la curaduría de música libre de regalías o composición original y diseño de efectos sonoros (SFX) sincronizados."
        },
        {
          question: "¿En qué formatos entregan las animaciones?",
          answer: "Entregamos videos en MP4 / ProRes (4K y 1080p) en ratios 16:9, 9:16 y 1:1, así como archivos Lottie JSON o WebM para integración web ultraligera."
        },
        {
          question: "¿Cuánto dura típicamente la producción de un video?",
          answer: "Un video de 30 a 60 segundos toma entre 2 y 4 semanas desde el guión hasta el render final."
        }
      ],
      en: [
        {
          question: "Do you include sound design and music licensing?",
          answer: "Yes, every motion project includes curated royalty-free music licensing or bespoke audio and synchronized SFX design."
        },
        {
          question: "What output formats do you provide?",
          answer: "We deliver MP4 / ProRes (4K & 1080p) in 16:9, 9:16, and 1:1 ratios, plus lightweight Lottie JSON and WebM files for web embedding."
        },
        {
          question: "How long does video production usually take?",
          answer: "A typical 30-to-60-second video spans 2 to 4 weeks from initial script to master delivery."
        }
      ]
    },
    featuredProjectIds: [11, 12, 2]
  }
];

export function getServiceBySlug(slug: string): ServiceDetail | undefined {
  return servicesData.find((s) => s.slug === slug);
}
