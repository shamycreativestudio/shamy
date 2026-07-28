/**
 * UI Core Logic
 * Handles Theme (Dark/Light), Language (ES/EN) switching, Custom Cursor, and Mobile TabBar ScrollSpy.
 */

const translations = {
  es: {
    "nav.work": "Portafolio",
    "nav.services": "Servicios",
    "nav.about": "Nosotros",
    "nav.contact": "Contacto",
    "filter.all": "Todos",
    "filter.branding": "Branding",
    "filter.coding": "Coding",
    "filter.animating": "Animación",
    "filter.drawing": "Drawing",
    "filter.modeling": "Modeling",
    "hero.badge": "Boutique Creative Studio 2026",
    "hero.title":
      "<span class='line'>Creamos</span><span class='line'>experiencias</span><span class='line'>digitales</span>",
    "hero.subtitle": "Branding estratégico, diseño editorial e interfaces con propósito.",
    "hero.cta": "Ver proyectos",
    "hero.brief": "Brief Interactivo →",
    "marquee.text":
      "Estrategia • Branding • Diseño editorial • Desarrollo UX-UI • Animación •",
    "services.title": "Nuestros servicios",
    "services.card1.title": "Estrategia de marca",
    "services.card1.desc":
      "Definimos la esencia, voz y propósito de tu marca para conectar con tu audiencia ideal.",
    "services.card2.title": "Identidad visual",
    "services.card2.desc":
      "Logos, sistemas de diseño y guías de estilo que hacen tu marca inolvidable.",
    "services.card3.title": "Desarrollo UX-UI",
    "services.card3.desc":
      "Interfaces web intuitivas y experiencias digitales con enfoque en diseño.",
    "about.title": "Sobre nosotros",
    "about.desc":
      "Somos un estudio creativo especializado en branding, diseño editorial e interfaces digitales. Creemos que cada píxel cuenta y que el diseño debe contar la historia de tu marca.",
    "about.stat1": "Años de Exp.",
    "about.stat2": "Proyectos",
    "cta.title": "¿Interesado en trabajar juntos?",
    "cta.button": "Iniciar un proyecto →",
    "cta.email": "Escríbenos a: shamy.creativestudio@gmail.com",
    "portfolio.noResults": "No se encontraron proyectos en esta categoría.",
    "cursor.view": "VER PROYECTO",

    // BRANDING PROJECTS
    "project.branding.dantano.title": "D'Antaño",
    "project.branding.dantano.desc":
      "Una delicatessen especializada en quesos y embutidos tradicionales de alta calidad.",
    "project.branding.fromtheocean.title": "From the Ocean",
    "project.branding.fromtheocean.desc":
      "Una fundación ambiental hipotética dedicada a la conservación de los océanos.",
    "project.branding.robertcapa.title": "Robert Capa",
    "project.branding.robertcapa.desc":
      "Un whisky de malta hipotético de alta gama inspirado históricamente.",
    "project.branding.zeth.title": "Zeth",
    "project.branding.zeth.desc":
      "Una tipografía display con intrincadas letras inspiradas en animales salvajes.",
    "project.branding.summergroove.title": "Summer Groove",
    "project.branding.summergroove.desc":
      "Un evento musical hipotético inspirado en la estética retro de los 70.",
    "project.branding.whopperking.title": "Whopper King",
    "project.branding.whopperking.desc":
      "Rediseño visual conceptual para una cadena de hamburguesas premium.",
    "project.branding.aemg.title": "AEMG",
    "project.branding.aemg.desc":
      "Identidad visual corporativa para una asociación estudiantil.",
    "project.branding.curcuns.title": "Juego de Guaguas",
    "project.branding.curcuns.desc":
      'Un festival tradicional inspirado en las "guaguas de pan" (figuras de pan).',
    "project.branding.dosefes.title": "Dos Efes",
    "project.branding.dosefes.desc":
      "Una farmacia funcional con un enfoque moderno centrado en el paciente.",
    "project.branding.sompa.title": "Sonpa",
    "project.branding.sompa.desc":
      "Una banda moderna de fusión reggae con un estilo diverso y dinámico.",
    "project.branding.antaera.title": "Bitácora",
    "project.branding.antaera.desc":
      "Un pub temático de arte y diseño ubicado en una casa colonial.",

    // CODING PROJECTS
    "project.coding.cvdll.title":
      "Cartilla interactiva - Santuario de Las Lajas",
    "project.coding.cvdll.desc":
      "Cartilla infográfica sobre la Virgen de las Lajas y el Santuario de Las Lajas.",

    // ANIMATING PROJECTS
    "project.animating.corazonesalrescate.title": "Corazones al Rescate",
    "project.animating.corazonesalrescate.desc":
      "Animación para una fundación sin ánimo de lucro dedicada al cuidado de los animales.",

    "form.title": "Brief de tu marca",
    "form.subtitle":
      "Completa lo que puedas. Los campos con asterisco (*) son obligatorios.",
    "form.submit": "Enviar Brief",
    "form.save": "Guardar",
    "form.reset": "Reiniciar",
    "alert.reset":
      "¿Estás seguro de que quieres empezar de nuevo? Se perderá todo el progreso no guardado.",
    "alert.saved": "¡Progreso guardado! Puedes volver más tarde.",

    // CASE STUDY MODAL LABELS
    "modal.challenge": "El Desafío",
    "modal.solution": "La Solución",
    "modal.deliverables": "Entregables & Servicios",
    "modal.palette": "Paleta de Color",
    "modal.nextProject": "Siguiente Proyecto →",
    "modal.prevProject": "← Proyecto Anterior",

    // CASE STUDY CONTENT - SPANISH
    "project.branding.dantano.challenge": "Crear una identidad de marca para una delicatessen tradicional de quesos y embutidos de alta calidad sin lucir como una marca antigua o anticuada.",
    "project.branding.dantano.solution": "Desarrollamos una marca elegante con tipografía clásica refinada, sellos de autenticidad vectoriales y empaques artesanales de lujo que destacan la tradición culinaria.",

    "project.branding.fromtheocean.challenge": "Concienciar sobre la conservación de los océanos con una estética moderna, limpia y alejada del dramatismo ambientalista convencional.",
    "project.branding.fromtheocean.solution": "Diseñamos un sistema visual fluido basado en azules marinos profundos, patrones dinámicos y cartelería editorial de alto impacto para eventos y sensibilización.",

    "project.branding.robertcapa.challenge": "Posicionar un whisky de malta exclusivo inspirado en el fotoperiodismo monocromático de Robert Capa.",
    "project.branding.robertcapa.solution": "Creamos una identidad basada en fotografía monocromática en alto contraste, etiquetas en papel texturizado con stamping dorado y numeración artesanal.",

    "project.branding.zeth.challenge": "Diseñar una tipografía display experimental que capture la agilidad y formas de animales salvajes.",
    "project.branding.zeth.solution": "Elaboramos una familia tipográfica display con curvas intrincadas, especímenes vectoriales e ilustraciones aplicadas a carteles de gran formato.",

    "project.branding.summergroove.challenge": "Revivir la energía psicodélica y funk de los años 70 para un festival de música contemporáneo.",
    "project.branding.summergroove.solution": "Implementamos una paleta de color vibrante, tipografía fluida y movimiento cinético aplicados a afiches, boletas físicas y merchandising.",

    "project.branding.whopperking.challenge": "Transformar una hamburguesería tradicional al formato Fast-Casual de lujo.",
    "project.branding.whopperking.solution": "Evolucionamos el logotipo hacia líneas limpias y creamos un sistema de empaques eco-friendly con ilustraciones tipográficas divertidas.",

    "project.branding.aemg.challenge": "Unificar la comunidad estudiantil bajo una imagen institucional accesible, moderna y representativa.",
    "project.branding.aemg.solution": "Diseñamos un manual de normas gráficas flexible, papelería corporativa y plantillas dinámicas para comunicación en redes sociales.",

    "project.branding.curcuns.challenge": "Rendir homenaje a la festividad tradicional de las guaguas de pan con un enfoque contemporáneo e ilustrativo.",
    "project.branding.curcuns.solution": "Creamos personajes vectoriales únicos, empaques festivos y piezas publicitarias que conectan la tradición cultural con nuevas generaciones.",

    "project.branding.dosefes.challenge": "Humanizar la experiencia de compra farmacéutica alejándose de la frialdad médica tradicional.",
    "project.branding.dosefes.solution": "Diseñamos una identidad basada en colores amigables, packaging claro para medicamentos y prototipos de interfaz web centrados en el paciente.",

    "project.branding.sompa.challenge": "Capturar la energía rítmica y la diversidad cultural de una banda de fusión reggae.",
    "project.branding.sompa.solution": "Desarrollamos el arte de disco en vinilo, merchandising de la banda y fondos de escenario dinámicos para sus conciertos.",

    "project.branding.antaera.challenge": "Fusionar el valor arquitectónico colonial de una casona con un espacio bohemio de arte y diseño.",
    "project.branding.antaera.solution": "Creamos una carta de cócteles artesanal, señalética en latón envejecido y elementos de marca con estética de bitácora de viaje.",

    "project.branding.cvdll.challenge": "Digitalizar la riqueza infográfica y arquitectónica del Santuario de Las Lajas en una cartilla web interactiva.",
    "project.branding.cvdll.solution": "Programamos una web interactiva con despliegue de datos infográficos, animaciones y navegación intuitiva.",

    "project.branding.corazonesalrescate.challenge": "Sensibilizar a la comunidad sobre el bienestar animal a través de animación en movimiento.",
    "project.branding.corazonesalrescate.solution": "Producimos un corto animado 2D con personajes expresivos, diseño de fondos y banda sonora emotiva.",
  },
  en: {
    "nav.work": "Portfolio",
    "nav.services": "Services",
    "nav.about": "About",
    "nav.contact": "Contact",
    "filter.all": "All",
    "filter.branding": "Branding",
    "filter.coding": "Coding",
    "filter.animating": "Animation",
    "filter.drawing": "Drawing",
    "filter.modeling": "Modeling",
    "hero.badge": "Boutique Creative Studio 2026",
    "hero.title":
      "<span class='line'>We craft</span><span class='line'>digital</span><span class='line'>experiences</span>",
    "hero.subtitle": "Strategic branding, editorial design & purposeful interfaces.",
    "hero.cta": "View Projects",
    "hero.brief": "Interactive Brief →",
    "marquee.text":
      "Strategy • Branding • Editorial design • UX-UI Development • Animation •",
    "services.title": "Our Services",
    "services.card1.title": "Brand Strategy",
    "services.card1.desc":
      "We define your brand's essence, voice, and purpose to connect with your ideal audience.",
    "services.card2.title": "Visual Identity",
    "services.card2.desc":
      "Logos, design systems, and style guides that make your brand unforgettable.",
    "services.card3.title": "UX-UI Development",
    "services.card3.desc":
      "Intuitive interfaces and digital experiences that connect with your audience.",
    "about.title": "About Us",
    "about.desc":
      "We are a creative studio specialized in branding, editorial design and digital interfaces. We believe every pixel matters and design should tell your brand's story.",
    "about.stat1": "Years Exp.",
    "about.stat2": "Projects",
    "cta.title": "Interested in working together?",
    "cta.button": "Start a project →",
    "cta.email": "Write to us at: shamy.creativestudio@gmail.com",
    "portfolio.noResults": "No projects found in this category.",
    "cursor.view": "VIEW PROJECT",

    // CASE STUDY MODAL LABELS EN
    "modal.challenge": "The Challenge",
    "modal.solution": "The Solution",
    "modal.deliverables": "Deliverables & Services",
    "modal.palette": "Color Palette",
    "modal.nextProject": "Next Project →",
    "modal.prevProject": "← Previous Project",

    // CASE STUDY CONTENT - ENGLISH
    "project.branding.dantano.challenge": "Create a brand identity for a traditional high-end deli without looking dated or ancient.",
    "project.branding.dantano.solution": "We developed an elegant brand with refined classical typography, vectorial stamps of authenticity, and artisanal packaging.",

    "project.branding.fromtheocean.challenge": "Raise ocean conservation awareness with a modern, clean visual language away from conventional environmental drama.",
    "project.branding.fromtheocean.solution": "We designed a fluid visual system based on deep marine blues, dynamic patterns, and editorial poster design for campaigns.",

    "project.branding.robertcapa.challenge": "Position an exclusive single malt whiskey inspired by Robert Capa's monochrome photojournalism.",
    "project.branding.robertcapa.solution": "We crafted an identity based on high-contrast black and white photography, textured paper labels with gold foil, and hand-numbering.",

    "project.branding.zeth.challenge": "Design an experimental display typeface capturing the agility and silhouettes of wild animals.",
    "project.branding.zeth.solution": "We built a display typeface family with intricate curves, vectorial specimens, and large-format poster illustrations.",

    "project.branding.summergroove.challenge": "Revive the 70s funk and psychedelic energy for a contemporary music festival.",
    "project.branding.summergroove.solution": "We implemented a vibrant color palette, fluid typography, and kinetic motion for posters, tickets, and merchandise.",

    "project.branding.whopperking.challenge": "Transform a traditional burger diner into a premium Fast-Casual concept.",
    "project.branding.whopperking.solution": "We evolved the logo toward clean lines and created eco-friendly food packaging with playful typographic illustrations.",

    "project.branding.aemg.challenge": "Unify the student community under an accessible, modern, and representative institutional image.",
    "project.branding.aemg.solution": "We designed a flexible brand guidelines manual, corporate stationery, and dynamic social media templates.",

    "project.branding.curcuns.challenge": "Pay homage to the traditional 'guaguas de pan' festival with a contemporary illustrative approach.",
    "project.branding.curcuns.solution": "We created unique vector characters, festive packaging, and promotional pieces connecting cultural heritage with new generations.",

    "project.branding.dosefes.challenge": "Humanize the pharmacy shopping experience away from traditional medical coldness.",
    "project.branding.dosefes.solution": "We designed a warm visual identity, clear medicine packaging, and patient-centered UI web prototypes.",

    "project.branding.sompa.challenge": "Capture the rhythmic energy and cultural diversity of a reggae fusion band.",
    "project.branding.sompa.solution": "We developed vinyl album artwork, band merchandise, and dynamic stage visualizers for live concerts.",

    "project.branding.antaera.challenge": "Blend the colonial architectural heritage of an old mansion with a bohemian art & design pub atmosphere.",
    "project.branding.antaera.solution": "We crafted a handcrafted cocktail menu, aged brass signage, and travel logbook branding elements.",

    "project.branding.cvdll.challenge": "Digitize the infographic and architectural history of the Sanctuary of Las Lajas into an interactive web booklet.",
    "project.branding.cvdll.solution": "We coded an interactive web application featuring infographic data displays, smooth animations, and intuitive navigation.",

    "project.branding.corazonesalrescate.challenge": "Raise community awareness about animal welfare through motion animation.",
    "project.branding.corazonesalrescate.solution": "We produced a 2D animated short featuring expressive characters, background art design, and an emotional soundtrack.",


    // BRANDING PROJECTS
    "project.branding.dantano.title": "D'Antaño",
    "project.branding.dantano.desc":
      "A delicatessen specializing in high-quality, traditional cheeses and meats.",
    "project.branding.fromtheocean.title": "From the Ocean",
    "project.branding.fromtheocean.desc":
      "A hypothetical environmental foundation dedicated to ocean conservation.",
    "project.branding.robertcapa.title": "Robert Capa",
    "project.branding.robertcapa.desc":
      "A hypothetical high-end, historically-inspired single malt whiskey.",
    "project.branding.zeth.title": "Zeth",
    "project.branding.zeth.desc":
      "A display typeface with intricate lettering inspired by wild animals.",
    "project.branding.summergroove.title": "Summer Groove",
    "project.branding.summergroove.desc":
      "A hypothetical musical event inspired by the retro aesthetics of the 70s.",
    "project.branding.whopperking.title": "Whopper King",
    "project.branding.whopperking.desc":
      "Conceptual visual redesign for a premium burger chain.",
    "project.branding.aemg.title": "AEMG",
    "project.branding.aemg.desc":
      "Corporate visual identity for a student association.",
    "project.branding.curcuns.title": "Juego de Guaguas",
    "project.branding.curcuns.desc":
      'A traditional festival inspired by "guaguas de pan" (bread figures).',
    "project.branding.dosefes.title": "Dos Efes",
    "project.branding.dosefes.desc":
      "A functional pharmacy with a modern, patient-centered approach.",
    "project.branding.sompa.title": "Sonpa",
    "project.branding.sompa.desc":
      "A modern reggae fusion band with a diverse and dynamic style.",
    "project.branding.antaera.title": "Bitácora",
    "project.branding.antaera.desc":
      "An art and design-themed pub located in a colonial house.",

    // CODING PROJECTS
    "project.coding.cvdll.title":
      "Interactive booklet - Sanctuary of Las Lajas",
    "project.coding.cvdll.desc":
      "Infographic booklet about the Virgin of Las Lajas and the Sanctuary of Las Lajas.",

    // ANIMATING PROJECTS
    "project.animating.corazonesalrescate.title": "Corazones al Rescate",
    "project.animating.corazonesalrescate.desc":
      "Animation for a non-profit foundation dedicated to animal care.",

    "form.title": "Brand Brief",
    "form.subtitle":
      "Complete what you can. Fields with an asterisk (*) are mandatory.",
    "form.submit": "Submit Brief",
    "form.save": "Save",
    "form.reset": "Reset",
    "alert.reset":
      "Are you sure you want to start over? All unsaved progress will be lost.",
    "alert.saved": "Progress saved! You can come back later.",
  },
};

class UICore {
  constructor() {
    this.lang = localStorage.getItem("shamy_lang") || "es";
    this.theme = localStorage.getItem("shamy_theme") || "light";
    this.translations = translations;
    this.init();
  }

  init() {
    this.applyTheme();
    this.applyLang();
    this.renderControls();
    this.bindEvents();
    this.setupCustomCursor();
    this.setupMobileTabbar();
  }

  applyTheme() {
    if (this.theme === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    this.updateLogo();
  }

  applyLang() {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (this.translations[this.lang][key]) {
        el.innerHTML = this.translations[this.lang][key];
      }
    });

    const inputs = document.querySelectorAll("[data-i18n-placeholder]");
    inputs.forEach((input) => {
      const key = input.getAttribute("data-i18n-placeholder");
      if (this.translations[this.lang][key]) {
        input.placeholder = this.translations[this.lang][key];
      }
    });
  }

  renderControls() {
    const navContainer = document.getElementById("navControls");

    if (navContainer) {
      navContainer.innerHTML = `
        <button id="langToggle" class="ui-toggle" title="Switch Language">
           <!-- Icon injected by updateToggleIcons -->
        </button>
        <button id="themeToggle" class="ui-toggle" title="Switch Theme">
           <!-- Icon injected by updateToggleIcons -->
        </button>
      `;
    } else {
      const existing = document.querySelector(".global-top-bar");
      if (existing) existing.remove();

      const topBar = document.createElement("div");
      topBar.className = "global-top-bar";
      topBar.innerHTML = `
        <div class="top-bar-controls">
          <button id="langToggle" class="ui-toggle">
             <!-- Icon injected by updateToggleIcons -->
          </button>
          <button id="themeToggle" class="ui-toggle">
             <!-- Icon injected by updateToggleIcons -->
          </button>
        </div>
      `;
      document.body.appendChild(topBar);
    }

    this.updateToggleIcons();

    const langBtn = document.getElementById("langToggle");
    const themeBtn = document.getElementById("themeToggle");

    if (langBtn) langBtn.addEventListener("click", () => this.toggleLang());
    if (themeBtn) themeBtn.addEventListener("click", () => this.toggleTheme());
  }

  updateToggleIcons() {
    const langBtn = document.getElementById("langToggle");
    const themeBtn = document.getElementById("themeToggle");

    if (langBtn) {
      langBtn.innerHTML = `<span style="font-size: 0.8rem; font-weight: 600;">${this.lang.toUpperCase()}</span>`;
    }

    if (themeBtn) {
      if (this.theme === "dark") {
        themeBtn.innerHTML = `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
      } else {
        themeBtn.innerHTML = `<svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
      }
    }
  }

  updateLogo() {
    const logo = document.getElementById("mainLogo");
    if (logo) {
      const isDark = this.theme === "dark";
      const logoName = isDark
        ? "shamy-logotipo-white.svg"
        : "shamy-logotipo.svg";

      const currentSrc = logo.getAttribute("src");
      const pathParts = currentSrc.split("/");
      pathParts.pop();
      const pathPrefix = pathParts.join("/");

      logo.src = `${pathPrefix}/${logoName}`;
    }
  }

  bindEvents() {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    this.observer = observer;
    this.observeElements();
  }

  observeElements() {
    const elements = document.querySelectorAll(
      ".animate-on-scroll:not(.visible)"
    );
    elements.forEach((el) => this.observer.observe(el));
  }

  setupCustomCursor() {
    const cursor = document.getElementById("customCursor");
    if (!cursor || window.matchMedia("(pointer: coarse)").matches) return;

    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;

    document.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.2;
      cursorY += (mouseY - cursorY) * 0.2;
      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
      requestAnimationFrame(animateCursor);
    };

    requestAnimationFrame(animateCursor);

    // Event delegation for cursor hover effects
    document.addEventListener("mouseover", (e) => {
      if (e.target.closest(".project-card")) {
        cursor.classList.add("active-crystal");
      } else if (e.target.closest("a") || e.target.closest("button") || e.target.closest(".nav-capsule")) {
        cursor.classList.add("active-subtle");
      }
    });

    document.addEventListener("mouseout", (e) => {
      if (e.target.closest(".project-card")) {
        cursor.classList.remove("active-crystal");
      } else if (e.target.closest("a") || e.target.closest("button") || e.target.closest(".nav-capsule")) {
        cursor.classList.remove("active-subtle");
      }
    });
  }

  setupMobileTabbar() {
    const tabbar = document.getElementById("mobileTabbar");
    if (!tabbar) return;

    const tabs = tabbar.querySelectorAll(".tab-item");
    const sectionIds = ["portfolioGrid", "services", "about", "contact"];
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

    window.addEventListener("scroll", () => {
      let currentSection = "";
      const scrollPos = window.scrollY + window.innerHeight / 3;

      sections.forEach(section => {
        if (scrollPos >= section.offsetTop) {
          currentSection = section.id;
        }
      });

      tabs.forEach(tab => {
        const tabTarget = tab.getAttribute("data-tab");
        if (tabTarget === currentSection) {
          tab.classList.add("active");
        } else {
          tab.classList.remove("active");
        }
      });
    }, { passive: true });
  }

  toggleTheme() {
    this.theme = this.theme === "light" ? "dark" : "light";
    localStorage.setItem("shamy_theme", this.theme);
    this.applyTheme();
    this.updateToggleIcons();
  }

  toggleLang() {
    // Start transition
    document.body.classList.add("lang-changing");

    // Wait for fade out
    setTimeout(() => {
      this.lang = this.lang === "es" ? "en" : "es";
      localStorage.setItem("shamy_lang", this.lang);
      this.applyLang();
      this.updateToggleIcons();

      window.dispatchEvent(
        new CustomEvent("langChange", { detail: { lang: this.lang } })
      );

      // End transition (fade in)
      setTimeout(() => {
        document.body.classList.remove("lang-changing");
      }, 50);
    }, 300); // Match CSS transition duration
  }
}

document.addEventListener("DOMContentLoaded", () => {
  window.uiCore = new UICore();
});

