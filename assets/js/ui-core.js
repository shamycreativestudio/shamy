/**
 * UI Core Logic
 * Handles Theme (Dark/Light) and Language (ES/EN) switching.
 */

const translations = {
  es: {
    "nav.all": "Todos",
    "nav.branding": "Branding",
    "nav.coding": "Coding",
    "nav.animating": "Animating",
    "nav.drawing": "Drawing",
    "nav.modeling": "Modeling",
    "hero.tagline": "branding · coding · animating · drawing · modeling",
    "cta.title": "¿Interesado en trabajar juntos?",
    "cta.button": "Iniciar un Proyecto →",
    "footer.copyright": "&copy; 2025 Shamy]™ Creative Studio.",
    "portfolio.noResults": "No se encontraron proyectos en esta categoría.",
    "form.title": "Brief de Marca",
    "form.subtitle": "Cuéntanos sobre tu proyecto",
    "form.step1": "Contacto",
    "form.step2": "Marca",
    "form.step3": "Objetivos",
    "form.step4": "Estilo",
    "form.next": "Siguiente",
    "form.prev": "Anterior",
    "form.submit": "Enviar Brief",
    "form.name": "Nombre Completo",
    "form.email": "Correo Electrónico",
    "form.company": "Empresa / Organización",
    "form.phone": "Teléfono (Opcional)",
    "form.brandName": "Nombre de la Marca",
    "form.currentSite": "Sitio Web Actual (Si tiene)",
    "form.city": "Ciudad principal donde operas",
    "form.needs": "¿Qué necesitas principalmente?",
    "form.needs.create": "Crear una marca desde cero",
    "form.needs.redesign": "Mejorar / actualizar mi marca (rediseño)",
    "form.needs.packaging": "Diseñar empaques / etiquetas",
    "form.needs.social": "Diseño para redes sociales",
    "form.needs.web": "Página web / tienda online",
    "form.needs.print": "Material impreso",
    "form.needs.photo": "Fotos o video",
    "form.needs.other": "Otro:",
    "form.desc": "Breve descripción de lo que haces",
    "form.desc.placeholder": "Ej.: Vendemos café especial de origen Nariño.",
    "form.scope": "¿Hasta dónde quieres llegar con tu proyecto?",
    "form.scope.local": "Ciudad / Local",
    "form.scope.regional": "Región / Departamento",
    "form.scope.national": "Nacional",
    "form.scope.international": "Internacional",
    "form.deadline": "Fecha ideal de lanzamiento o entrega",
    "form.objective": "¿Cuál es tu objetivo principal? (elige uno)",
    "form.obj.sell": "Vender más",
    "form.obj.launch": "Lanzar un nuevo producto/servicio",
    "form.obj.pro": "Verse más profesional",
    "form.obj.diff": "Diferenciarse de la competencia",
    "form.obj.digital": "Mejorar presencia digital",
    "form.obj.other": "Otro:",
    "form.secObj": "Objetivos secundarios (opcional, máximo 2)",
    "form.secObj.placeholder": "Escribe y presiona Enter",
    "form.metrics": "¿Qué te gustaría medir?",
    "form.metrics.visits": "Visitas a la página",
    "form.metrics.msgs": "Consultas / mensajes",
    "form.metrics.sales": "Ventas",
    "form.metrics.followers": "Seguidores / interacción",
    "form.metrics.recall": "Recordación",
    "form.audience": "¿Quiénes son tus clientes principales?",
    "form.audience.placeholder":
      "Ej.: Jóvenes universitarios que buscan snacks saludables.",
    "form.age": "Rango de edad más común (opcional)",
    "form.problem": "¿Qué problema o necesidad les ayudas a resolver?",
    "form.problem.placeholder":
      "Ej.: Acceso a café de calidad sin pagar precios altos.",
    "form.why": "¿Por qué crees que te elegirían a ti?",
    "form.style": "Estilo que te gustaría transmitir",
    "form.style.classic": "Más clásico / serio",
    "form.style.modern": "Más moderno / actual",
    "form.style.mixed": "Una mezcla",
    "form.competitors": "Nombra 1 a 3 competidores (Nombre y enlace)",
    "form.comp.add": "Añadir otro",
    "form.comp.better": "¿En qué sientes que eres mejor?",
    "form.comp.improve": "¿En qué crees que podrías mejorar?",
    "form.inspiration": "¿Hay alguna marca que te guste? ¿Por qué?",
    "form.refImages": "Imágenes de referencia o inspiración (opcional)",
    "form.refImages.hint":
      "Sube imágenes de diseños, colores o estilos que te gusten como referencia. Máximo 10 archivos, 10 MB por archivo",
    "form.step5.title": "Paso 5. Rediseño / Actualizar marca",
    "form.step5.info":
      "Este bloque aparece porque seleccionaste que quieres rediseñar o actualizar tu marca.",
    "form.whyChange": "¿Por qué quieres cambiar tu marca?",
    "form.keep": "¿Qué quieres mantener?",
    "form.mustChange": "¿Qué quieres que se cambie sí o sí?",
    "form.currentAssets": "Sube lo que tengas (logo, piezas anteriores)",
    "form.step6.title": "Paso 6. Entregables y materiales",
    "form.deliverables": "¿Qué necesitas que diseñemos?",
    "form.del.identity": "Identidad",
    "form.del.digital": "Digital",
    "form.del.print": "Impresos",
    "form.del.av": "Audiovisual",
    "form.web.needed": "¿Necesitas página web?",
    "form.web.domain": "¿Tienes dominio y hosting?",
    "form.budget": "Presupuesto estimado (Opcional)",
    "form.comments": "Comentarios finales o dudas",
    "form.reset": "Empezar de nuevo",
    "theme.light": "Modo Claro",
    "theme.dark": "Modo Oscuro",
  },
  en: {
    "nav.all": "All",
    "nav.branding": "Branding",
    "nav.coding": "Coding",
    "nav.animating": "Animating",
    "nav.drawing": "Drawing",
    "nav.modeling": "Modeling",
    "hero.tagline": "branding · coding · animating · drawing · modeling",
    "cta.title": "Interested in working together?",
    "cta.button": "Start a Project →",
    "footer.copyright": "&copy; 2025 Shamy]™ Creative Studio.",
    "portfolio.noResults": "No projects found in this category.",
    "form.title": "Brand Brief",
    "form.subtitle": "Tell us about your project",
    "form.step1": "Contact",
    "form.step2": "Brand",
    "form.step3": "Goals",
    "form.step4": "Style",
    "form.next": "Next",
    "form.prev": "Previous",
    "form.submit": "Submit Brief",
    "form.name": "Full Name",
    "form.email": "Email Address",
    "form.company": "Company / Organization",
    "form.phone": "Phone (Optional)",
    "form.brandName": "Brand Name",
    "form.currentSite": "Current Website (If any)",
    "form.industry": "Industry / Sector",
    "form.description": "Project Description",
    "form.upload": "Upload Files",
    "form.uploadHint": "Drag files here or click to select",
    "form.city": "Main City",
    "form.needs": "What do you need mainly?",
    "form.needs.create": "Create a brand from scratch",
    "form.needs.redesign": "Improve / update my brand (rebrand)",
    "form.needs.packaging": "Design packaging / labels",
    "form.needs.social": "Social media design",
    "form.needs.web": "Website / Online store",
    "form.needs.print": "Print material",
    "form.needs.photo": "Photos or video",
    "form.needs.other": "Other:",
    "form.desc": "Brief description of what you do",
    "form.desc.placeholder": "Ex: We sell specialty coffee from Nariño.",
    "form.scope": "How far do you want to reach?",
    "form.scope.local": "City / Local",
    "form.scope.regional": "Region / State",
    "form.scope.national": "National",
    "form.scope.international": "International",
    "form.deadline": "Ideal launch or delivery date",
    "form.objective": "What is your main goal? (choose one)",
    "form.obj.sell": "Sell more",
    "form.obj.launch": "Launch a new product/service",
    "form.obj.pro": "Look more professional",
    "form.obj.diff": "Differentiate from competition",
    "form.obj.digital": "Improve digital presence",
    "form.obj.other": "Other:",
    "form.secObj": "Secondary goals (optional, max 2)",
    "form.secObj.placeholder": "Type and press Enter",
    "form.metrics": "What would you like to measure?",
    "form.metrics.visits": "Page visits",
    "form.metrics.msgs": "Inquiries / messages",
    "form.metrics.sales": "Sales",
    "form.metrics.followers": "Followers / engagement",
    "form.metrics.recall": "Brand recall",
    "form.audience": "Who are your main customers?",
    "form.audience.placeholder":
      "Ex: University students looking for healthy snacks.",
    "form.age": "Common age range (optional)",
    "form.problem": "What problem or need do you help them solve?",
    "form.problem.placeholder":
      "Ex: Access to quality coffee without high prices.",
    "form.why": "Why do you think they would choose you?",
    "form.style": "Style you would like to convey",
    "form.style.classic": "More classic / serious",
    "form.style.modern": "More modern / current",
    "form.style.mixed": "A mix",
    "form.competitors": "Name 1 to 3 competitors (Name and link)",
    "form.comp.add": "Add another",
    "form.comp.better": "In what do you feel you are better?",
    "form.comp.improve": "In what do you think you could improve?",
    "form.inspiration": "Is there any brand you like? Why?",
    "form.refImages": "Reference or inspiration images (optional)",
    "form.refImages.hint":
      "Upload images of designs, colors or styles you like as reference. Max 10 files, 10 MB per file",
    "form.step5.title": "Step 5. Rebrand / Update brand",
    "form.step5.info":
      "This block appears because you selected that you want to rebrand or update your brand.",
    "form.whyChange": "Why do you want to change your brand?",
    "form.keep": "What do you want to keep?",
    "form.mustChange": "What do you want to be changed no matter what?",
    "form.currentAssets": "Upload what you have (logo, previous pieces)",
    "form.step6.title": "Step 6. Deliverables and materials",
    "form.deliverables": "What do you need us to design?",
    "form.del.identity": "Identity",
    "form.del.digital": "Digital",
    "form.del.print": "Print",
    "form.del.av": "Audiovisual",
    "form.web.needed": "Do you need a website?",
    "form.web.domain": "Do you have domain and hosting?",
    "form.budget": "Estimated budget (Optional)",
    "form.comments": "Final comments or doubts",
    "form.reset": "Start over",
    "theme.light": "Light Mode",
    "theme.dark": "Dark Mode",
  },
};

class UICore {
  constructor() {
    this.lang = localStorage.getItem("shamy_lang") || "es";
    this.theme = localStorage.getItem("shamy_theme") || "light";
    this.init();
  }

  init() {
    this.applyTheme();
    this.applyLang();
    this.renderControls();
    this.bindEvents();
  }

  toggleTheme() {
    this.theme = this.theme === "light" ? "dark" : "light";
    localStorage.setItem("shamy_theme", this.theme);
    this.applyTheme();
    this.updateToggleIcons();
  }

  toggleLang() {
    this.lang = this.lang === "es" ? "en" : "es";
    localStorage.setItem("shamy_lang", this.lang);
    this.applyLang();
    this.updateToggleIcons();
  }

  applyTheme() {
    if (this.theme === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }

  applyLang() {
    document.documentElement.lang = this.lang;
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((el) => {
      const key = el.dataset.i18n;
      if (translations[this.lang][key]) {
        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
          el.placeholder = translations[this.lang][key];
        } else {
          el.innerHTML = translations[this.lang][key];
        }
      }
    });
  }

  renderControls() {
    const topBar = document.createElement("div");
    topBar.className = "global-top-bar";
    topBar.innerHTML = `
      <div class="top-bar-controls">
        <button id="langToggle" class="ui-toggle" aria-label="Toggle Language">
          ${this.lang === "es" ? "ES" : "EN"}
        </button>
        <span class="divider">|</span>
        <button id="themeToggle" class="ui-toggle" aria-label="Toggle Theme">
          ${this.theme === "light" ? "☀" : "☾"}
        </button>
      </div>
    `;

    // Insert as first child of body
    document.body.insertBefore(topBar, document.body.firstChild);
  }

  updateToggleIcons() {
    const langBtn = document.getElementById("langToggle");
    const themeBtn = document.getElementById("themeToggle");
    if (langBtn) langBtn.textContent = this.lang === "es" ? "ES" : "EN";
    if (themeBtn) themeBtn.textContent = this.theme === "light" ? "☀" : "☾";
  }

  bindEvents() {
    document
      .getElementById("langToggle")
      ?.addEventListener("click", () => this.toggleLang());
    document
      .getElementById("themeToggle")
      ?.addEventListener("click", () => this.toggleTheme());
  }
}

// Initialize on load
document.addEventListener("DOMContentLoaded", () => {
  window.uiCore = new UICore();
});
