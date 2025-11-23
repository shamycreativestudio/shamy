/**
 * Portfolio Logic
 * Handles project rendering, filtering, and interactions.
 */

const projects = [
  {
    id: 1,
    title: "Minimalist Coffee Brand",
    category: "branding",
    coverImage: "assets/img/portfolio/placeholder.svg",
    gallery: [
      "assets/img/portfolio/placeholder.svg",
      "assets/img/portfolio/placeholder.svg",
      "assets/img/portfolio/placeholder.svg",
    ],
    description:
      "A complete brand identity for a specialty coffee shop focusing on minimalism and sustainability.",
    allowExpand: true,
  },
  {
    id: 2,
    title: "Tech Startup UI",
    category: "coding",
    coverImage: "assets/img/portfolio/placeholder.svg",
    gallery: [
      "assets/img/portfolio/placeholder.svg",
      "assets/img/portfolio/placeholder.svg",
    ],
    description:
      "Responsive landing page and dashboard design for a fintech startup.",
    allowExpand: true,
  },
  {
    id: 3,
    title: "Character Animation",
    category: "animating",
    coverImage: "assets/img/portfolio/placeholder.svg",
    gallery: ["assets/img/portfolio/placeholder.svg"],
    description: "2D character animation loop for a music video.",
    allowExpand: true,
  },
  {
    id: 4,
    title: "Eco Packaging",
    category: "branding",
    coverImage: "assets/img/portfolio/placeholder.svg",
    gallery: [
      "assets/img/portfolio/placeholder.svg",
      "assets/img/portfolio/placeholder.svg",
    ],
    description: "Sustainable packaging design for organic cosmetics.",
    allowExpand: true,
  },
];

// DOM Elements
const grid = document.getElementById("portfolioGrid");
const filters = document.querySelectorAll(".filter-btn");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const projectModal = document.getElementById("projectModal");

// State
let currentCategory = "all";

// Initialize
function init() {
  renderProjects();
  setupFilters();
  setupModals();
}

// Render Projects
function renderProjects() {
  grid.innerHTML = "";
  const filtered =
    currentCategory === "all"
      ? projects
      : projects.filter((p) => p.category === currentCategory);

  if (filtered.length === 0) {
    grid.innerHTML =
      '<p class="no-results">No projects found in this category.</p>';
    return;
  }

  filtered.forEach((project) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.dataset.id = project.id;

    // Create Card HTML
    card.innerHTML = `
      <div class="card-media">
        <img src="${project.coverImage}" alt="${
      project.title
    }" class="card-img" data-index="0">
        <div class="card-controls">
          ${
            project.gallery.length > 1
              ? `
            <button class="control-btn prev" title="Previous Image">←</button>
            <button class="control-btn next" title="Next Image">→</button>
          `
              : ""
          }
          <button class="control-btn zoom" title="Quick View">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </button>
        </div>
      </div>
      <div class="card-info ${project.allowExpand ? "clickable" : ""}">
        <h3>${project.title}</h3>
        <p>${project.category}</p>
      </div>
    `;

    // Event Listeners for Card
    const imgElement = card.querySelector(".card-img");
    const prevBtn = card.querySelector(".prev");
    const nextBtn = card.querySelector(".next");
    const zoomBtn = card.querySelector(".zoom");
    const infoDiv = card.querySelector(".card-info");

    // Carousel Logic
    if (project.gallery.length > 1) {
      let imgIndex = 0;

      const updateImage = () => {
        imgElement.style.opacity = "0";
        setTimeout(() => {
          imgElement.src = project.gallery[imgIndex];
          imgElement.style.opacity = "1";
        }, 200);
      };

      prevBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        imgIndex =
          (imgIndex - 1 + project.gallery.length) % project.gallery.length;
        updateImage();
      });

      nextBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        imgIndex = (imgIndex + 1) % project.gallery.length;
        updateImage();
      });
    }

    // Quick View (Lightbox)
    zoomBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      openLightbox(imgElement.src);
    });

    // Expand Project (Modal)
    if (project.allowExpand) {
      infoDiv.addEventListener("click", () => {
        openProjectModal(project);
      });
    }

    grid.appendChild(card);
  });
}

// Filter Logic
function setupFilters() {
  filters.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Remove active class from all
      filters.forEach((b) => b.classList.remove("active"));
      // Add active to clicked
      btn.classList.add("active");
      // Update state
      currentCategory = btn.dataset.filter;
      // Re-render
      renderProjects();
    });
  });
}

// Modal & Lightbox Logic
function setupModals() {
  // Close Lightbox
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox || e.target.classList.contains("close-modal")) {
      lightbox.classList.remove("active");
    }
  });

  // Close Project Modal
  projectModal.addEventListener("click", (e) => {
    if (
      e.target === projectModal ||
      e.target.classList.contains("close-modal")
    ) {
      projectModal.classList.remove("active");
    }
  });

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      lightbox.classList.remove("active");
      projectModal.classList.remove("active");
    }
  });
}

function openLightbox(imgSrc) {
  lightboxImg.src = imgSrc;
  lightbox.classList.add("active");
}

function openProjectModal(project) {
  const content = projectModal.querySelector(".modal-content-body");
  content.innerHTML = `
    <h2>${project.title}</h2>
    <p class="modal-category">${project.category}</p>
    <div class="modal-gallery">
      ${project.gallery
        .map((img) => `<img src="${img}" alt="${project.title}">`)
        .join("")}
    </div>
    <div class="modal-description">
      <p>${project.description}</p>
    </div>
  `;
  projectModal.classList.add("active");
}

// Start
document.addEventListener("DOMContentLoaded", init);
