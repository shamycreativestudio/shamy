// API_URL ya está definido por config.js como variable global
// Solo verificar que esté disponible
if (!window.SHAMY_CONFIG?.API_URL) {
  console.error("❌ ERROR: config.js no cargó correctamente");
}

console.log("🔌 Admin Panel conectando a:", window.SHAMY_CONFIG?.API_URL);

let credentials = null;
let allBriefs = [];

// Elementos DOM
const loginContainer = document.getElementById("loginContainer");
const adminPanel = document.getElementById("adminPanel");
const loginForm = document.getElementById("loginForm");
const loginError = document.getElementById("loginError");

// Login
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  credentials = btoa(`${username}:${password}`);

  try {
    await loadBriefs();
    loginContainer.style.display = "none";
    adminPanel.style.display = "block";
    loginError.style.display = "none";
  } catch (error) {
    loginError.textContent = "❌ Credenciales incorrectas";
    loginError.style.display = "block";
    credentials = null;
  }
});

// Logout
function logout() {
  credentials = null;
  allBriefs = [];
  adminPanel.style.display = "none";
  loginContainer.style.display = "flex";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
}

// Cargar estadísticas
function loadStats() {
  const estadosCount = {
    total: allBriefs.length,
    Nuevo: allBriefs.filter((b) => b.estado === "Nuevo").length,
    "En Progreso": allBriefs.filter((b) => b.estado === "En Progreso").length,
    Completado: allBriefs.filter((b) => b.estado === "Completado").length,
  };

  document.getElementById("statTotal").textContent = estadosCount.total;
  document.getElementById("statNuevos").textContent = estadosCount.Nuevo;
  document.getElementById("statRevision").textContent =
    estadosCount["En Progreso"];
  document.getElementById("statAprobados").textContent =
    estadosCount.Completado;
}

// Cargar briefs desde Notion vía Vercel
async function loadBriefs() {
  const tableContainer = document.getElementById("briefsTable");
  tableContainer.innerHTML =
    '<div class="loading"><div class="spinner"></div><p>Cargando briefs...</p></div>';

  try {
    const response = await fetch(`${window.SHAMY_CONFIG.API_URL}/api/briefs`, {
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}`);
    }

    allBriefs = await response.json();
    console.log("✅ Briefs cargados:", allBriefs);

    applyFilters();
    loadStats();
  } catch (error) {
    console.error("❌ Error completo:", error);
    tableContainer.innerHTML = `
      <div class="empty-state">
        <p>❌ Error al cargar los briefs</p>
        <small style="color: #999;">${error.message}</small>
        <br><br>
        <button class="btn btn-primary" onclick="loadBriefs()">Reintentar</button>
      </div>
    `;
    throw error;
  }
}

// Aplicar filtros
function applyFilters() {
  const filterEstado = document.getElementById("filterEstado").value;
  const searchText = document.getElementById("searchInput").value.toLowerCase();

  let filtered = allBriefs;

  if (filterEstado) {
    filtered = filtered.filter((b) => b.estado === filterEstado);
  }

  if (searchText) {
    filtered = filtered.filter(
      (b) =>
        b.nombre?.toLowerCase().includes(searchText) ||
        b.email?.toLowerCase().includes(searchText) ||
        b.empresa?.toLowerCase().includes(searchText)
    );
  }

  renderTable(filtered);
}

// Renderizar tabla
function renderTable(briefsToShow) {
  const container = document.getElementById("briefsTable");

  if (briefsToShow.length === 0) {
    container.innerHTML =
      '<div class="empty-state"><p>📭 No hay briefs para mostrar</p></div>';
    return;
  }

  const table = `
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Empresa</th>
          <th>Email</th>
          <th>Teléfono</th>
          <th>Estado</th>
          <th>Fecha</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        ${briefsToShow
          .map(
            (brief) => `
          <tr>
            <td><strong>${brief.nombre || "-"}</strong></td>
            <td>${brief.empresa || "-"}</td>
            <td><a href="mailto:${brief.email}">${brief.email || "-"}</a></td>
            <td>${brief.telefono || "-"}</td>
            <td><span class="badge badge-${(brief.estado || "Nuevo")
              .toLowerCase()
              .replace(" ", "_")}">${brief.estado || "Nuevo"}</span></td>
            <td>${formatDate(brief.fecha)}</td>
            <td class="actions">
              <button class="btn btn-sm btn-view" onclick="viewBrief('${
                brief.id
              }')">Ver</button>
              <button class="btn btn-sm btn-delete" onclick="deleteBrief('${
                brief.id
              }')">Eliminar</button>
            </td>
          </tr>
        `
          )
          .join("")}
      </tbody>
    </table>
  `;

  container.innerHTML = table;
}

// Ver detalles de brief
function viewBrief(id) {
  const brief = allBriefs.find((b) => b.id === id);
  if (!brief) {
    alert("Brief no encontrado");
    return;
  }

  const body = document.getElementById("modalBody");

  // Preparar imágenes
  let imagenesHTML = "";
  if (brief.imagenes && brief.imagenes.length > 0) {
    imagenesHTML = `
      <div class="detail-section">
        <h3>Imágenes de Referencia (${brief.imagenes.length})</h3>
        <div class="detail-grid">
          ${brief.imagenes
            .map(
              (img) => `
            <div class="detail-item">
              <img src="${
                img.url || img
              }" alt="Referencia" style="width: 100%; border-radius: 4px; cursor: pointer;" onclick="window.open('${
                img.url || img
              }', '_blank')">
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `;
  }

  body.innerHTML = `
    <div class="detail-section">
      <h3>Datos Básicos</h3>
      <div class="detail-grid">
        <div class="detail-item"><label>Nombre</label><div class="value">${
          brief.nombre || "-"
        }</div></div>
        <div class="detail-item"><label>Email</label><div class="value"><a href="mailto:${
          brief.email
        }">${brief.email || "-"}</a></div></div>
        <div class="detail-item"><label>Empresa</label><div class="value">${
          brief.empresa || "-"
        }</div></div>
        <div class="detail-item"><label>Teléfono</label><div class="value">${
          brief.telefono || "-"
        }</div></div>
        <div class="detail-item"><label>Presupuesto</label><div class="value">${
          brief.presupuesto || "-"
        }</div></div>
        <div class="detail-item"><label>Timeline</label><div class="value">${
          brief.timeline || "-"
        }</div></div>
        <div class="detail-item"><label>Estado</label><div class="value"><span class="badge badge-${(
          brief.estado || "Nuevo"
        )
          .toLowerCase()
          .replace(" ", "_")}">${brief.estado || "Nuevo"}</span></div></div>
        <div class="detail-item"><label>Fecha</label><div class="value">${formatDate(
          brief.fecha
        )}</div></div>
      </div>
    </div>

    ${
      brief.descripcion
        ? `<div class="detail-section"><h3>Descripción</h3><div class="detail-item"><div class="value">${brief.descripcion}</div></div></div>`
        : ""
    }
    ${
      brief.publico
        ? `<div class="detail-section"><h3>Público Objetivo</h3><div class="detail-item"><div class="value">${brief.publico}</div></div></div>`
        : ""
    }
    ${
      brief.referencias
        ? `<div class="detail-section"><h3>Referencias</h3><div class="detail-item"><div class="value">${brief.referencias}</div></div></div>`
        : ""
    }
    ${imagenesHTML}

    <div class="detail-section">
      <h3>Datos Completos (JSON)</h3>
      <details>
        <summary style="cursor: pointer; font-weight: 600; color: #666;">Ver JSON completo</summary>
        <pre style="background: #f8f9fa; padding: 1rem; border-radius: 4px; overflow-x: auto; font-size: 0.75rem; margin-top: 1rem;">${JSON.stringify(
          brief,
          null,
          2
        )}</pre>
      </details>
    </div>
  `;

  document.getElementById("detailModal").classList.add("active");
}

// Eliminar brief
async function deleteBrief(id) {
  if (!confirm("¿Estás seguro de que quieres eliminar este brief?")) return;

  try {
    const response = await fetch(
      `${window.SHAMY_CONFIG.API_URL}/api/briefs?id=${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Basic ${credentials}`,
        },
      }
    );

    if (!response.ok) throw new Error("Error al eliminar");

    alert("✅ Brief eliminado correctamente");
    await loadBriefs();
  } catch (error) {
    console.error("Error:", error);
    alert("❌ Error al eliminar el brief: " + error.message);
  }
}

// Cerrar modal
function closeModal() {
  document.getElementById("detailModal").classList.remove("active");
}

// Formatear fecha
function formatDate(dateString) {
  if (!dateString) return "-";
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return dateString;
  }
}

// Hacer funciones globales
window.loadBriefs = loadBriefs;
window.applyFilters = applyFilters;
window.viewBrief = viewBrief;
window.deleteBrief = deleteBrief;
window.closeModal = closeModal;
window.logout = logout;
