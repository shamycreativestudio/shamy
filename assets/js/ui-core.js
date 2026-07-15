/**
 * UI Core Logic
 * Handles Theme (Dark/Light) and Language (ES/EN) switching.
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
    "hero.title":
      "<span class='line'>Creamos</span><span class='line'>experiencias</span><span class='line'>digitales</span>",
    "hero.subtitle": "Branding estratégico, diseño editorial e interfaces con propósito.",
    "hero.cta": "Ver proyectos",
    "marquee.text":
      "Estrategia • Branding • Diseño editorial • Interfaces UI/UX • Animación •",
    "services.title": "Nuestros servicios",
    "services.card1.title": "Estrategia de marca",
    "services.card1.desc":
      "Definimos la esencia, voz y propósito de tu marca para conectar con tu audiencia ideal.",
    "services.card2.title": "Identidad visual",
    "services.card2.desc":
      "Logos, sistemas de diseño y guías de estilo que hacen tu marca inolvidable.",
    "services.card3.title": "Diseño UI/UX",
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
    "hero.title":
      "<span class='line'>We craft</span><span class='line'>digital</span><span class='line'>experiences</span>",
    "hero.subtitle": "Strategic branding, editorial design & purposeful interfaces.",
    "hero.cta": "View Projects",
    "marquee.text":
      "Strategy • Branding • Editorial design • UI/UX • Animation •",
    "services.title": "Our Services",
    "services.card1.title": "Brand Strategy",
    "services.card1.desc":
      "We define your brand's essence, voice, and purpose to connect with your ideal audience.",
    "services.card2.title": "Visual Identity",
    "services.card2.desc":
      "Logos, design systems, and style guides that make your brand unforgettable.",
    "services.card3.title": "UI/UX Design",
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
        <span class="divider">|</span>
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
          <span class="divider">|</span>
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
