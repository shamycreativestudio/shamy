/**
 * Portfolio Logic
 * Handles project rendering, filtering, and interactions.
 */

const projects = [
  // BRANDING PROJECTS
  {
    id: 1,
    titleKey: "project.branding.dantano.title",
    descKey: "project.branding.dantano.desc",
    challengeKey: "project.branding.dantano.challenge",
    solutionKey: "project.branding.dantano.solution",
    category: "branding",
    year: 2020,
    colors: ["#7C2D12", "#D97706", "#FEF3C7", "#18181B"],
    deliverables: ["Brand Strategy", "Visual Identity", "Packaging Design"],
    coverImage: "assets/img/portfolio/branding/001_d_antano/00.png",
    gallery: [
      "assets/img/portfolio/branding/001_d_antano/00.png",
      "assets/img/portfolio/branding/001_d_antano/01.png",
    ],
    allowExpand: true,
  },
  {
    id: 2,
    titleKey: "project.branding.fromtheocean.title",
    descKey: "project.branding.fromtheocean.desc",
    challengeKey: "project.branding.fromtheocean.challenge",
    solutionKey: "project.branding.fromtheocean.solution",
    category: "branding",
    year: 2021,
    colors: ["#0284C7", "#0369A1", "#E0F2FE", "#0F172A"],
    deliverables: ["ONG Identity", "Campaign Posters", "Motion Graphics"],
    coverImage: "assets/img/portfolio/branding/002_from_the_ocean/00.png",
    gallery: [
      "assets/img/portfolio/branding/002_from_the_ocean/00.png",
      "assets/img/portfolio/branding/002_from_the_ocean/01.png",
    ],
    allowExpand: true,
  },
  {
    id: 3,
    titleKey: "project.branding.robertcapa.title",
    descKey: "project.branding.robertcapa.desc",
    challengeKey: "project.branding.robertcapa.challenge",
    solutionKey: "project.branding.robertcapa.solution",
    category: "branding",
    year: 2022,
    colors: ["#18181B", "#CA8A04", "#F4F4F5", "#27272A"],
    deliverables: ["Spirits Identity", "Luxury Packaging", "Storytelling"],
    coverImage: "assets/img/portfolio/branding/003_robert_capa/00.png",
    gallery: [
      "assets/img/portfolio/branding/003_robert_capa/00.png",
      "assets/img/portfolio/branding/003_robert_capa/01.png",
    ],
    allowExpand: true,
  },
  {
    id: 4,
    titleKey: "project.branding.zeth.title",
    descKey: "project.branding.zeth.desc",
    challengeKey: "project.branding.zeth.challenge",
    solutionKey: "project.branding.zeth.solution",
    category: "branding",
    year: 2023,
    colors: ["#059669", "#10B981", "#ECFDF5", "#064E3B"],
    deliverables: ["Type Design", "Specimen Poster", "Editorial Layout"],
    coverImage: "assets/img/portfolio/branding/004_zeth/00.png",
    gallery: [
      "assets/img/portfolio/branding/004_zeth/00.png",
      "assets/img/portfolio/branding/004_zeth/01.png",
    ],
    allowExpand: true,
  },
  {
    id: 5,
    titleKey: "project.branding.summergroove.title",
    descKey: "project.branding.summergroove.desc",
    challengeKey: "project.branding.summergroove.challenge",
    solutionKey: "project.branding.summergroove.solution",
    category: "branding",
    year: 2023,
    colors: ["#EA580C", "#C026D3", "#FDE047", "#1E1B4B"],
    deliverables: ["Festival Branding", "Motion Poster", "Merchandising"],
    coverImage: "assets/img/portfolio/branding/005_summer_groove/00.png",
    gallery: [
      "assets/img/portfolio/branding/005_summer_groove/00.png",
      "assets/img/portfolio/branding/005_summer_groove/01.png",
    ],
    allowExpand: true,
  },
  {
    id: 6,
    titleKey: "project.branding.whopperking.title",
    descKey: "project.branding.whopperking.desc",
    challengeKey: "project.branding.whopperking.challenge",
    solutionKey: "project.branding.whopperking.solution",
    category: "branding",
    year: 2023,
    colors: ["#DC2626", "#F59E0B", "#FEF2F2", "#451A03"],
    deliverables: ["Rebranding Concept", "Food Packaging", "Digital Menu"],
    coverImage: "assets/img/portfolio/branding/006_whopper_king/00.png",
    gallery: [
      "assets/img/portfolio/branding/006_whopper_king/00.png",
      "assets/img/portfolio/branding/006_whopper_king/01.png",
    ],
    allowExpand: true,
  },
  {
    id: 7,
    titleKey: "project.branding.aemg.title",
    descKey: "project.branding.aemg.desc",
    challengeKey: "project.branding.aemg.challenge",
    solutionKey: "project.branding.aemg.solution",
    category: "branding",
    year: 2023,
    colors: ["#2563EB", "#3B82F6", "#EFF6FF", "#1E3A8A"],
    deliverables: ["Corporate Identity", "Brand Guidelines", "Stationery"],
    coverImage: "assets/img/portfolio/branding/007_aemg/00.png",
    gallery: [
      "assets/img/portfolio/branding/007_aemg/00.png",
      "assets/img/portfolio/branding/007_aemg/01.png",
    ],
    allowExpand: true,
  },
  {
    id: 8,
    titleKey: "project.branding.curcuns.title",
    descKey: "project.branding.curcuns.desc",
    challengeKey: "project.branding.curcuns.challenge",
    solutionKey: "project.branding.curcuns.solution",
    category: "branding",
    year: 2023,
    colors: ["#D97706", "#7C2D12", "#FFFBEB", "#451A03"],
    deliverables: ["Cultural Branding", "Illustration System", "Event Packaging"],
    coverImage: "assets/img/portfolio/branding/008_juego_de_guaguas/00.png",
    gallery: [
      "assets/img/portfolio/branding/008_juego_de_guaguas/00.png",
      "assets/img/portfolio/branding/008_juego_de_guaguas/01.png",
    ],
    allowExpand: true,
  },
  {
    id: 9,
    titleKey: "project.branding.dosefes.title",
    descKey: "project.branding.dosefes.desc",
    challengeKey: "project.branding.dosefes.challenge",
    solutionKey: "project.branding.dosefes.solution",
    category: "branding",
    year: 2024,
    colors: ["#0D9488", "#14B8A6", "#CCFBF1", "#115E59"],
    deliverables: ["Pharmacy Branding", "Packaging System", "Web UI Concept"],
    coverImage: "assets/img/portfolio/branding/009_dos_efes/00.png",
    gallery: [
      "assets/img/portfolio/branding/009_dos_efes/00.png",
      "assets/img/portfolio/branding/009_dos_efes/01.png",
    ],
    allowExpand: true,
  },
  {
    id: 10,
    titleKey: "project.branding.sompa.title",
    descKey: "project.branding.sompa.desc",
    challengeKey: "project.branding.sompa.challenge",
    solutionKey: "project.branding.sompa.solution",
    category: "branding",
    year: 2025,
    colors: ["#65A30D", "#84CC16", "#ECFCCB", "#365314"],
    deliverables: ["Music Identity", "Vinyl Album Art", "Stage Visuals"],
    coverImage: "assets/img/portfolio/branding/010_sonpa/00.png",
    gallery: [
      "assets/img/portfolio/branding/010_sonpa/00.png",
      "assets/img/portfolio/branding/010_sonpa/01.png",
    ],
    allowExpand: true,
  },
  {
    id: 11,
    titleKey: "project.branding.antaera.title",
    descKey: "project.branding.antaera.desc",
    challengeKey: "project.branding.antaera.challenge",
    solutionKey: "project.branding.antaera.solution",
    category: "branding",
    year: 2025,
    colors: ["#9333EA", "#A855F7", "#F3E8FF", "#581C87"],
    deliverables: ["Hospitality Branding", "Handcrafted Menu", "Interior Signage"],
    coverImage: "assets/img/portfolio/branding/011_bitacora/00.png",
    gallery: [
      "assets/img/portfolio/branding/011_bitacora/00.png",
      "assets/img/portfolio/branding/011_bitacora/01.png",
    ],
    allowExpand: true,
  },

  // CODING PROJECTS
  {
    id: 12,
    titleKey: "project.coding.cvdll.title",
    descKey: "project.coding.cvdll.desc",
    challengeKey: "project.branding.cvdll.challenge",
    solutionKey: "project.branding.cvdll.solution",
    category: "coding",
    year: 2025,
    colors: ["#4F46E5", "#6366F1", "#EEF2FF", "#312E81"],
    deliverables: ["Interactive Web", "Infographic Engine", "UI Architecture"],
    url: "https://cvdll.github.io/CVDLL/",
    coverImage: "assets/img/portfolio/coding/001_cvdll/00.png",
    gallery: [
      "assets/img/portfolio/coding/001_cvdll/00.png",
      "assets/img/portfolio/coding/001_cvdll/01.png",
    ],
    allowExpand: true,
  },

  // ANIMATING PROJECTS
  {
    id: 13,
    titleKey: "project.animating.corazonesalrescate.title",
    descKey: "project.animating.corazonesalrescate.desc",
    challengeKey: "project.branding.corazonesalrescate.challenge",
    solutionKey: "project.branding.corazonesalrescate.solution",
    category: "animating",
    year: 2023,
    colors: ["#E11D48", "#F43F5E", "#FFE4E6", "#881337"],
    deliverables: ["2D Animation", "Character Design", "Storyboard & Sound"],
    coverImage:
      "assets/img/portfolio/animating/001_corazones_al_rescate/00.png",
    previewGallery: [
      "assets/img/portfolio/animating/001_corazones_al_rescate/00.png",
      "assets/img/portfolio/animating/001_corazones_al_rescate/01.png",
    ],
    gallery: [
      "assets/img/portfolio/animating/001_corazones_al_rescate/00.png",
      "assets/img/portfolio/animating/001_corazones_al_rescate/01.mp4",
    ],
    allowExpand: true,
  },
];


// Helper function to check if file is a video
function isVideo(src) {
  return src.endsWith(".mp4") || src.endsWith(".webm") || src.endsWith(".mov");
}

// DOM Elements
const grid = document.getElementById("portfolioGrid");
const filters = document.querySelectorAll(".filter-btn");
const projectModal = document.getElementById("projectModal");

// State
let currentCategory = "all";
let filteredProjects = [];
let currentProjectIndex = 0;

// Initialize
function init() {
  renderProjects();
  setupFilters();
  // Setup deep linking from Hash on init
  checkDeepLink();
}

function checkDeepLink() {
  const hash = window.location.hash;
  if (hash && hash.startsWith("#project-")) {
    const slug = hash.replace("#project-", "");
    const matched = projects.find((p) => {
      const pSlug = p.titleKey.split(".")[2];
      return pSlug === slug || p.id.toString() === slug;
    });
    if (matched) {
      setTimeout(() => openProjectModal(matched), 150);
    }
  }
}

function openProjectModal(project) {
  // Find index in current filtered list
  currentProjectIndex = filteredProjects.findIndex((p) => p.id === project.id);
  if (currentProjectIndex === -1) currentProjectIndex = 0;

  // Deep linking slug
  const slug = project.titleKey.split(".")[2] || project.id;
  history.pushState({ projectId: project.id }, "", `#project-${slug}`);

  updateModalContent();
  projectModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  projectModal.classList.remove("active");
  document.body.style.overflow = "";

  if (window.location.hash.startsWith("#project-")) {
    history.pushState(
      "",
      document.title,
      window.location.pathname + window.location.search
    );
  }
}

function navigateProject(direction) {
  const newIndex = currentProjectIndex + direction;
  if (newIndex >= 0 && newIndex < filteredProjects.length) {
    currentProjectIndex = newIndex;
    const project = filteredProjects[currentProjectIndex];
    const slug = project.titleKey.split(".")[2] || project.id;
    history.pushState({ projectId: project.id }, "", `#project-${slug}`);
    updateModalContent();
  }
}

function updateModalContent() {
  const project = filteredProjects[currentProjectIndex];
  const lang = localStorage.getItem("shamy_lang") || "es";
  const t =
    window.uiCore && window.uiCore.translations
      ? window.uiCore.translations[lang]
      : {};

  const title = t[project.titleKey] || project.titleKey;
  const desc = t[project.descKey] || project.descKey;
  const challenge = t[project.challengeKey] || desc;
  const solution = t[project.solutionKey] || "";
  const category =
    project.category.charAt(0).toUpperCase() +
    project.category.slice(1).toLowerCase();

  // Color Swatches HTML
  const colorsHTML = project.colors
    ? project.colors
        .map(
          (c) =>
            `<span class="color-swatch" style="background-color: ${c};" title="${c}"></span>`
        )
        .join("")
    : "";

  // Deliverables HTML
  const deliverablesHTML = project.deliverables
    ? project.deliverables
        .map((d) => `<span class="deliverable-tag">${d}</span>`)
        .join("")
    : "";

  // Generate Gallery HTML with video support
  const galleryHTML = project.gallery
    .map((src) => {
      if (isVideo(src)) {
        return `<video src="${src}" controls loading="lazy" class="case-study-media">Tu navegador no soporta videos.</video>`;
      } else {
        return `<img src="${src}" alt="${title} detail" loading="lazy" class="case-study-media">`;
      }
    })
    .join("");

  // Navigation Arrows Visibility
  const showPrev = currentProjectIndex > 0;
  const showNext = currentProjectIndex < filteredProjects.length - 1;

  // URL Button (if project has a URL)
  const urlButton = project.url
    ? `<a href="${
        project.url
      }" target="_blank" rel="noopener noreferrer" class="project-url-btn">
         <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
           <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
           <polyline points="15 3 21 3 21 9"></polyline>
           <line x1="10" y1="14" x2="21" y2="3"></line>
         </svg>
         ${lang === "es" ? "Visitar Sitio Web" : "Visit Website"}
       </a>`
    : "";

  projectModal.innerHTML = `
    <button class="close-modal" title="Close">&times;</button>
    
    ${
      showPrev
        ? `
    <div class="modal-nav-arrow prev" onclick="navigateProject(-1)">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
    </div>`
        : ""
    }
    
    ${
      showNext
        ? `
    <div class="modal-nav-arrow next" onclick="navigateProject(1)">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
    </div>`
        : ""
    }

    <div class="project-modal-content">
      <div class="modal-hero" style="background-image: url('${
        project.coverImage
      }')"></div>
      
      <div class="modal-content-body">
        <div class="case-study-header">
          <span class="modal-category">${category} · ${project.year}</span>
          <h2>${title}</h2>
          ${urlButton}
        </div>

        <div class="case-study-meta">
          ${
            deliverablesHTML
              ? `<div class="meta-group">
                  <span class="meta-title">${
                    t["modal.deliverables"] || "Entregables & Servicios"
                  }</span>
                  <div class="deliverables-list">${deliverablesHTML}</div>
                </div>`
              : ""
          }
          ${
            colorsHTML
              ? `<div class="meta-group">
                  <span class="meta-title">${
                    t["modal.palette"] || "Paleta de Color"
                  }</span>
                  <div class="palette-swatches">${colorsHTML}</div>
                </div>`
              : ""
          }
        </div>

        <div class="case-study-narrative">
          <div class="narrative-card challenge-card">
            <h3>🎯 ${t["modal.challenge"] || "El Desafío"}</h3>
            <p>${challenge}</p>
          </div>
          ${
            solution
              ? `<div class="narrative-card solution-card">
                  <h3>✨ ${t["modal.solution"] || "La Solución"}</h3>
                  <p>${solution}</p>
                </div>`
              : ""
          }
        </div>

        <div class="modal-gallery">
          ${galleryHTML}
        </div>
      </div>
    </div>
  `;

  // Re-attach close listener since we overwrote innerHTML
  projectModal
    .querySelector(".close-modal")
    .addEventListener("click", closeProjectModal);
}

// Expose navigation functions to global scope for inline onclick handlers
window.navigateProject = navigateProject;

// Run init
document.addEventListener("DOMContentLoaded", init);


// Render Projects
function renderProjects() {
  grid.innerHTML = "";
  filteredProjects =
    currentCategory === "all"
      ? projects
      : projects.filter((p) => p.category === currentCategory);

  if (filteredProjects.length === 0) {
    grid.innerHTML =
      '<p class="no-results">No projects found in this category.</p>';
    return;
  }

  filteredProjects.forEach((project, index) => {
    const card = document.createElement("div");
    card.className = "project-card animate-on-scroll";
    card.style.transitionDelay = `${index * 100}ms`;
    card.dataset.id = project.id;

    // Translate Title and Category
    const lang = localStorage.getItem("shamy_lang") || "es";
    const t =
      window.uiCore && window.uiCore.translations
        ? window.uiCore.translations[lang]
        : {};

    const title = t[project.titleKey] || project.titleKey;
    const category =
      project.category.charAt(0).toUpperCase() + project.category.slice(1);

    // Use previewGallery if available, otherwise use gallery
    const cardGallery = project.previewGallery || project.gallery;

    // Create Card HTML
    card.innerHTML = `
      <div class="card-media">
        <div class="card-glow" style="background-image: url('${project.coverImage}')"></div>
        <img src="${
          project.coverImage
        }" alt="${title}" class="card-img" data-index="0" loading="lazy">
        <div class="card-controls">
          ${
            cardGallery.length > 1
              ? `
            <button class="control-btn prev" title="Previous Image">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
            </button>
            <button class="control-btn next" title="Next Image">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
          `
              : ""
          }
        </div>
      </div>
      <div class="card-info ${project.allowExpand ? "clickable" : ""}">
        <h3>${title}</h3>
        <p>${category}</p>
      </div>
    `;

    // Event Listeners for Card
    const imgElement = card.querySelector(".card-img");
    const prevBtn = card.querySelector(".prev");
    const nextBtn = card.querySelector(".next");

    // Carousel Logic (Mini-carousel on card)
    if (cardGallery.length > 1) {
      let imgIndex = 0;

      const updateArrows = () => {
        if (prevBtn) {
          if (imgIndex === 0) prevBtn.classList.add("hidden");
          else prevBtn.classList.remove("hidden");
        }
        if (nextBtn) {
          if (imgIndex === cardGallery.length - 1)
            nextBtn.classList.add("hidden");
          else nextBtn.classList.remove("hidden");
        }
      };

      const updateImage = () => {
        imgElement.style.opacity = "0";
        const loader = new Image();
        loader.onload = () => {
          setTimeout(() => {
            imgElement.src = cardGallery[imgIndex];
            const glowEl = card.querySelector('.card-glow');
            if (glowEl) glowEl.style.backgroundImage = \`url('\${cardGallery[imgIndex]}')\`;
            imgElement.style.opacity = "1";
            updateArrows();
          }, 200);
        };
        loader.onerror = () => {
          setTimeout(() => {
            imgElement.src = cardGallery[imgIndex];
            const glowEl = card.querySelector('.card-glow');
            if (glowEl) glowEl.style.backgroundImage = \`url('\${cardGallery[imgIndex]}')\`;
            updateArrows();
          }, 200);
        };
        loader.src = cardGallery[imgIndex];
      };

      prevBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (imgIndex > 0) {
          imgIndex--;
          updateImage();
        }
      });

      nextBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (imgIndex < cardGallery.length - 1) {
          imgIndex++;
          updateImage();
        }
      });

      // Initial state
      updateArrows();
    }

    // Expand Project (Modal)
    if (project.allowExpand) {
      // Listener on the entire card
      card.addEventListener("click", (e) => {
        // Don't trigger if clicking on controls
        if (e.target.closest(".control-btn")) return;
        openProjectModal(project);
      });

      // Redundant listener on infoDiv just in case
      const infoDiv = card.querySelector(".card-info");
      if (infoDiv) {
        infoDiv.addEventListener("click", (e) => {
          e.stopPropagation();
          openProjectModal(project);
        });
      }
    }

    grid.appendChild(card);
  });

  // Trigger observer for new elements
  if (window.uiCore && window.uiCore.observeElements) {
    setTimeout(() => window.uiCore.observeElements(), 50);
  }
}

// Filter Logic
function setupFilters() {
  filters.forEach((btn) => {
    btn.addEventListener("click", () => {
      filters.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.filter;
      renderProjects();
    });
  });
}

// Modal Logic
function setupModals() {
  // Close Project Modal
  projectModal.addEventListener("click", (e) => {
    if (
      e.target === projectModal ||
      e.target.classList.contains("close-modal")
    ) {
      closeProjectModal();
    }
  });

  // Close on Escape key or Navigate
  document.addEventListener("keydown", (e) => {
    if (projectModal.classList.contains("active")) {
      if (e.key === "Escape") {
        closeProjectModal();
      } else if (e.key === "ArrowLeft") {
        navigateProject(-1);
      } else if (e.key === "ArrowRight") {
        navigateProject(1);
      }
    }
  });
}

function openProjectModal(project) {
  // Find index in current filtered list
  currentProjectIndex = filteredProjects.findIndex((p) => p.id === project.id);
  if (currentProjectIndex === -1) currentProjectIndex = 0;

  updateModalContent();
  projectModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  projectModal.classList.remove("active");
  document.body.style.overflow = "";
}

function navigateProject(direction) {
  const newIndex = currentProjectIndex + direction;
  if (newIndex >= 0 && newIndex < filteredProjects.length) {
    currentProjectIndex = newIndex;
    updateModalContent();
  }
}

function updateModalContent() {
  const project = filteredProjects[currentProjectIndex];
  const lang = localStorage.getItem("shamy_lang") || "es";
  const t =
    window.uiCore && window.uiCore.translations
      ? window.uiCore.translations[lang]
      : {};

  const title = t[project.titleKey] || project.titleKey;
  const desc = t[project.descKey] || project.descKey;
  const category =
    project.category.charAt(0).toUpperCase() +
    project.category.slice(1).toLowerCase();

  // Generate Gallery HTML with video support
  const galleryHTML = project.gallery
    .map((src) => {
      if (isVideo(src)) {
        return `<video src="${src}" controls loading="lazy" style="width: 100%; border-radius: 8px;">Tu navegador no soporta videos.</video>`;
      } else {
        return `<img src="${src}" alt="${title} detail" loading="lazy">`;
      }
    })
    .join("");

  // Navigation Arrows Visibility
  const showPrev = currentProjectIndex > 0;
  const showNext = currentProjectIndex < filteredProjects.length - 1;

  // URL Button (if project has a URL)
  const urlButton = project.url
    ? `<a href="${
        project.url
      }" target="_blank" rel="noopener noreferrer" class="project-url-btn">
         <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
           <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
           <polyline points="15 3 21 3 21 9"></polyline>
           <line x1="10" y1="14" x2="21" y2="3"></line>
         </svg>
         ${lang === "es" ? "Visitar Sitio Web" : "Visit Website"}
       </a>`
    : "";

  projectModal.innerHTML = `
    <button class="close-modal">&times;</button>
    
    ${
      showPrev
        ? `
    <div class="modal-nav-arrow prev" onclick="navigateProject(-1)">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
    </div>`
        : ""
    }
    
    ${
      showNext
        ? `
    <div class="modal-nav-arrow next" onclick="navigateProject(1)">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
    </div>`
        : ""
    }

    <div class="project-modal-content">
      <div class="modal-hero" style="background-image: url('${
        project.coverImage
      }')"></div>
      
      <div class="modal-content-body">
        <span class="modal-category">${category} · ${project.year}</span>
        <h2>${title}</h2>
        ${urlButton}
        <div class="modal-description">
          <p>${desc}</p>
        </div>
        
        <div class="modal-gallery">
          ${galleryHTML}
        </div>
      </div>
    </div>
  `;

  // Re-attach close listener since we overwrote innerHTML
  projectModal
    .querySelector(".close-modal")
    .addEventListener("click", closeProjectModal);
}

// Expose navigation functions to global scope for inline onclick handlers
window.navigateProject = navigateProject;

// Run init
document.addEventListener("DOMContentLoaded", init);
