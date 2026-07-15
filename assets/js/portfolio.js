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
    category: "branding",
    year: 2020,
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
    category: "branding",
    year: 2021,
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
    category: "branding",
    year: 2022,
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
    category: "branding",
    year: 2023,
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
    category: "branding",
    year: 2023,
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
    category: "branding",
    year: 2023,
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
    category: "branding",
    year: 2023,
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
    category: "branding",
    year: 2023,
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
    category: "branding",
    year: 2024,
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
    category: "branding",
    year: 2025,
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
    category: "branding",
    year: 2025,
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
    category: "coding",
    year: 2025,
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
    category: "animating",
    year: 2023,
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
  setupModals();
}

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
          imgElement.src = cardGallery[imgIndex];
          imgElement.style.opacity = "1";
          updateArrows();
        };
        loader.onerror = () => {
          imgElement.src = cardGallery[imgIndex];
          updateArrows();
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
