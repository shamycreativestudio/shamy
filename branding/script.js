/* Form wizard logic, validation, data serialization */

// Obtener la URL del API desde config.js (window.SHAMY_CONFIG.API_URL)
const form = document.getElementById("briefForm");
const steps = Array.from(document.querySelectorAll(".step"));
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");
const saveBtn = document.getElementById("saveBtn");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");
const resetBtn = document.getElementById("resetBtn");

let currentStep = 1;
const totalSteps = steps.length;
const STORAGE_KEY = "briefFormProgressV1";
const summaryDialog = document.getElementById("summaryDialog");
const summaryContent = document.getElementById("summaryContent");
const downloadJsonBtn = document.getElementById("downloadJson");
const verResumenBtn = document.getElementById("verResumen");
const successMessage = document.getElementById("successMessage");
const restartBtn = document.getElementById("restart");

const necesidadesGroup = document.querySelector(
  '[data-required-group="necesidadesPrincipales"]'
);

// Enable/disable other text inputs based on corresponding checkbox/radio
function toggleSiblingInput(triggerName, inputName, type = "checkbox") {
  form.querySelectorAll(`input[name="${triggerName}"]`).forEach((el) => {
    el.addEventListener("change", () => {
      const wrapper = el.closest(".other-wrap");
      if (!wrapper) return;
      const textInput = wrapper.querySelector(`input[name="${inputName}"]`);
      if (!textInput) return;
      if (type === "checkbox") {
        textInput.disabled = !el.checked;
        if (!el.checked) textInput.value = "";
      } else {
        // radio
        const selected = form.querySelector(
          `input[name="${triggerName}"]:checked`
        );
        textInput.disabled = !selected || selected.value !== "Otro";
        if (textInput.disabled) textInput.value = "";
      }
    });
  });
}

// Setup 'other' controls
toggleSiblingInput("necesidadesPrincipales", "necesidadesOtro", "checkbox");
toggleSiblingInput("objetivoPrincipal", "objetivoOtro", "radio");
toggleSiblingInput("mediciones", "medicionesOtro", "checkbox");
toggleSiblingInput("motivosRedisenio", "motivosOtro", "checkbox");
toggleSiblingInput("mantener", "mantenerOtro", "checkbox");
toggleSiblingInput("entregables", "entregablesOtro", "checkbox");

// Character counters
document.querySelectorAll("textarea[maxlength]").forEach((textarea) => {
  const counter = document.querySelector(
    `.char-counter[data-for="${textarea.name}"]`
  );
  if (!counter) return;
  const updateCounter = () => {
    counter.textContent = `${textarea.value.length}/${textarea.getAttribute(
      "maxlength"
    )}`;
  };
  textarea.addEventListener("input", updateCounter);
  updateCounter();
});

// Chip input (objetivos secundarios)
document.querySelectorAll(".chip-input").forEach((wrapper) => {
  const origin = wrapper.querySelector(".chip-origin");
  const chipsContainer = wrapper.querySelector(".chips");
  const max = parseInt(wrapper.dataset.max || "3", 10);

  origin.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const val = origin.value.trim();
      if (!val) return;
      if (chipsContainer.children.length >= max) {
        origin.value = "";
        origin.blur();
        return;
      }
      addChip(val);
      origin.value = "";
    }
  });

  function addChip(text) {
    const chip = document.createElement("div");
    chip.className = "chip";
    chip.innerHTML = `<span>${escapeHTML(
      text
    )}</span><button type="button" aria-label="Eliminar">&times;</button>`;
    chip.querySelector("button").addEventListener("click", () => chip.remove());
    chipsContainer.appendChild(chip);
  }
});

// Limit checkboxes (usos marca)
document.querySelectorAll(".checkbox-row.limited").forEach((row) => {
  const limit = parseInt(row.dataset.limit || "3", 10);
  const inputs = row.querySelectorAll("input[type=checkbox]");
  inputs.forEach((input) => {
    input.addEventListener("change", () => {
      const checked = Array.from(inputs).filter((i) => i.checked);
      if (checked.length >= limit) {
        inputs.forEach((i) => {
          if (!i.checked) i.disabled = true;
        });
      } else {
        inputs.forEach((i) => (i.disabled = false));
      }
    });
  });
});

// Dynamic competitors
const competidoresGroup = document.getElementById("competidoresGroup");
const addCompetidorBtn = document.getElementById("addCompetidor");
addCompetidorBtn.addEventListener("click", () => {
  const max = parseInt(competidoresGroup.dataset.max || "3", 10);
  const items = competidoresGroup.querySelectorAll(".repeat-item");
  if (items.length >= max) return;
  const item = document.createElement("div");
  item.className = "repeat-item";
  item.innerHTML = `
    <input type="text" name="competidorNombre[]" placeholder="Nombre" maxlength="60" />
    <input type="url" name="competidorUrl[]" placeholder="https://..." />
    <button type="button" class="btn-icon remove" aria-label="Eliminar competidor">&times;</button>
  `;
  item.querySelector(".remove").addEventListener("click", () => item.remove());
  competidoresGroup.appendChild(item);
  updateCompetidorRemoveButtons();
});
function updateCompetidorRemoveButtons() {
  const items = competidoresGroup.querySelectorAll(".repeat-item");
  items.forEach((item, idx) => {
    const removeBtn = item.querySelector(".remove");
    removeBtn.hidden = items.length === 1;
  });
}
updateCompetidorRemoveButtons();

// Conditional rediseño step
function needsRedisenio() {
  return Array.from(
    form.querySelectorAll('input[name="necesidadesPrincipales"]')
  ).some((cb) => cb.checked && cb.value === "Rediseño");
}
function updateRedisenioVisibility() {
  const step5 = document.querySelector('[data-step="5"]');
  if (needsRedisenio()) {
    step5.hidden = false;
  } else {
    step5.hidden = true;
    if (currentStep === 5) {
      currentStep++;
      showStep();
    }
  }
}
form.addEventListener("change", (e) => {
  if (e.target.name === "necesidadesPrincipales") updateRedisenioVisibility();
});

// Conditional web details
form.necesitaWeb?.forEach?.((r) => null); // safe guard
form.addEventListener("change", (e) => {
  if (e.target.name === "necesitaWeb") {
    const sub = document.querySelector("[data-web-sub]");
    if (e.target.value === "No") {
      sub.hidden = true;
      sub
        .querySelectorAll("input[type=radio]")
        .forEach((r) => (r.checked = false));
    } else {
      sub.hidden = false;
    }
  }
  if (e.target.name === "necesitaFotoVideo") {
    const sub = document.querySelector("[data-fotovideo-sub]");
    sub.hidden = e.target.value !== "Sí";
    if (sub.hidden) sub.querySelector("textarea").value = "";
  }
  if (e.target.name === "fechaLimiteFija") {
    const field = document.querySelector("[data-fecha-limite]");
    field.hidden = e.target.value !== "Sí";
    if (field.hidden) field.querySelector("input").value = "";
  }
});

// File upload zone
const uploadZone = document.getElementById("uploadZone");
const fileInput = document.getElementById("fileInput");
const fileList = document.getElementById("fileList");
let uploadedFiles = [];

if (uploadZone) {
  uploadZone.addEventListener("click", () => fileInput.click());
  uploadZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    uploadZone.classList.add("dragover");
  });
  uploadZone.addEventListener("dragleave", () =>
    uploadZone.classList.remove("dragover")
  );
  uploadZone.addEventListener("drop", (e) => {
    e.preventDefault();
    uploadZone.classList.remove("dragover");
    handleFiles(e.dataTransfer.files);
  });
  fileInput.addEventListener("change", () => handleFiles(fileInput.files));
}

function handleFiles(fileListInput) {
  Array.from(fileListInput).forEach((file) => {
    uploadedFiles.push(file);
  });
  renderFileList();
}

function renderFileList() {
  fileList.innerHTML = "";
  uploadedFiles.forEach((file, idx) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${escapeHTML(file.name)}</span>
      <button type="button" class="btn-icon remove" aria-label="Quitar archivo">&times;</button>`;
    li.querySelector("button").addEventListener("click", () => {
      uploadedFiles.splice(idx, 1);
      renderFileList();
    });
    fileList.appendChild(li);
  });
}

// Navigation
prevBtn.addEventListener("click", () => {
  if (currentStep > 1) {
    currentStep--;
    showStep();
  }
});
nextBtn.addEventListener("click", () => {
  if (!validateStep(currentStep)) return;
  currentStep = nextStepIndex();
  showStep();
});
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!validateStep(currentStep)) return;

  const data = collectData();

  // Deshabilitar botón de envío
  submitBtn.disabled = true;
  submitBtn.textContent = "Enviando...";

  try {
    // Convertir archivos a base64
    const imagenesBase64 = [];
    if (uploadedFiles && uploadedFiles.length > 0) {
      for (const file of uploadedFiles) {
        const base64 = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(file);
        });
        imagenesBase64.push(base64);
      }
    }

    // Preparar datos para Vercel/Notion
    const payload = {
      nombre: data.contactoNombreCargo || data.empresaNombre || "",
      email: data.contactoEmail || "",
      empresa: data.empresaNombre || "",
      telefono: data.contactoTelefono || "",
      descripcion: data.descripcionBreve || "",
      industria: data.cobertura?.join(", ") || "",
      publico: data.publicoClientes || "",
      presupuesto: data.presupuesto || "",
      timeline: data.fechaEntregaIdeal || "",
      referencias: data.marcaInspiracion || "",
      imagenes: imagenesBase64,
    };

    // Enviar al servidor usando la URL configurada
    console.log("📤 Enviando brief al servidor...");
    const response = await fetch(`${window.SHAMY_CONFIG.API_URL}/api/submit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || "Error al enviar el formulario");
    }

    const result = await response.json();
    console.log("✅ Brief enviado exitosamente:", result);

    // Re-habilitar botón antes de showSuccess
    submitBtn.disabled = false;
    submitBtn.textContent = "Enviar formulario";

    showSuccess();
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error("❌ Error al enviar:", error);
    alert(
      "Hubo un error al enviar el formulario. Por favor, intenta de nuevo o descarga el JSON y envíalo por correo."
    );

    // Re-habilitar botón
    submitBtn.disabled = false;
    submitBtn.textContent = "Enviar formulario";
  }
});

// Determine next step accounting for hidden rediseño step
function nextStepIndex() {
  let next = currentStep + 1;
  // If moving to step 5 but it's hidden, skip it
  if (next === 5 && document.querySelector('[data-step="5"]').hidden) next++;
  return Math.min(next, totalSteps);
}

function prevStepIndex() {
  let prev = currentStep - 1;
  if (currentStep === 6 && document.querySelector('[data-step="5"]').hidden) {
    prev = 4;
  }
  return Math.max(prev, 1);
}

// Show step logic
function showStep() {
  steps.forEach((step) => step.classList.remove("active"));
  const stepEl = steps.find(
    (s) => parseInt(s.dataset.step, 10) === currentStep
  );
  if (stepEl) stepEl.classList.add("active");

  // Buttons visibility
  prevBtn.disabled = currentStep === 1;
  nextBtn.hidden = currentStep === totalSteps;
  submitBtn.hidden = currentStep !== totalSteps;
  saveBtn.hidden = currentStep < 3; // allow saving after step 3

  updateProgress();
  updateRedisenioVisibility();
  scrollToTop();
}

function updateProgress() {
  // Calcular porcentajes exactos basados en el paso actual (no en pasos visibles)
  // Total de pasos reales: 10 (incluyendo el paso 5 condicional)
  // Porcentaje exacto = paso actual * 10%
  const percent = currentStep * 10;
  progressBar.style.setProperty("--progress", percent + "%");
  progressText.textContent = percent + "%";
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function validateStep(stepNumber) {
  let valid = true;
  clearErrors(stepNumber);
  const stepEl = steps.find((s) => parseInt(s.dataset.step, 10) === stepNumber);
  if (!stepEl) return true;

  // Required fields by attribute
  stepEl.querySelectorAll("[required]").forEach((field) => {
    if (!field.value.trim()) {
      markError(field, "Este campo es obligatorio");
      valid = false;
    } else if (field.type === "email" && !isValidEmail(field.value)) {
      markError(field, "Ingresa un correo válido");
      valid = false;
    }
  });

  // Custom requirement: at least one principal need in step 1
  if (stepNumber === 1) {
    const checked = Array.from(
      necesidadesGroup.querySelectorAll("input[type=checkbox]:checked")
    );
    if (checked.length === 0) {
      markGroupError(necesidadesGroup, "Selecciona al menos una opción");
      valid = false;
    }
  }

  return valid;
}

function clearErrors(stepNumber) {
  const stepEl = steps.find((s) => parseInt(s.dataset.step, 10) === stepNumber);
  if (!stepEl) return;
  stepEl
    .querySelectorAll(".error")
    .forEach((el) => el.classList.remove("error"));
  stepEl.querySelectorAll(".error-msg").forEach((el) => el.remove());
  const groupLabel = stepEl.querySelector(".group-error");
  if (groupLabel) groupLabel.remove();
}

function markError(field, msg) {
  field.classList.add("error");
  const m = document.createElement("div");
  m.className = "error-msg";
  m.textContent = msg;
  field.insertAdjacentElement("afterend", m);
}

function markGroupError(group, msg) {
  const m = document.createElement("div");
  m.className = "error-msg group-error";
  m.style.marginTop = ".4rem";
  m.textContent = msg;
  group.insertAdjacentElement("beforeend", m);
}

function isValidEmail(email) {
  return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
}

// Data collection
function collectData() {
  const data = {};
  const fd = new FormData(form);

  // Basic fields
  data.empresaNombre = fd.get("empresaNombre") || "";
  data.contactoNombreCargo = fd.get("contactoNombreCargo") || "";
  data.contactoEmail = fd.get("contactoEmail") || "";
  data.contactoTelefono = fd.get("contactoTelefono") || "";
  data.ciudad = fd.get("ciudad") || "";
  data.necesidadesPrincipales = fd.getAll("necesidadesPrincipales");
  data.necesidadesOtro = fd.get("necesidadesOtro") || "";
  data.descripcionBreve = fd.get("descripcionBreve") || "";
  data.cobertura = fd.getAll("cobertura");
  data.fechaEntregaIdeal = fd.get("fechaEntregaIdeal") || "";

  // Objectives
  data.objetivoPrincipal = fd.get("objetivoPrincipal");
  data.objetivoOtro = fd.get("objetivoOtro") || "";
  data.objetivosSecundarios = Array.from(
    document.querySelectorAll(".chips .chip span")
  ).map((el) => el.textContent);
  data.mediciones = fd.getAll("mediciones");
  data.medicionesOtro = fd.get("medicionesOtro") || "";

  // Audience
  data.publicoClientes = fd.get("publicoClientes") || "";
  data.rangoEdad = fd.get("rangoEdad") || "";
  data.publicoProblema = fd.get("publicoProblema") || "";
  data.publicoEleccion = fd.get("publicoEleccion") || "";
  data.estilo = fd.get("estilo") || "";

  // Competencia
  data.competidores = [];
  const nombres = fd.getAll("competidorNombre[]");
  const urls = fd.getAll("competidorUrl[]");
  nombres.forEach((n, i) => {
    if (n.trim() || urls[i].trim()) {
      data.competidores.push({ nombre: n.trim(), url: urls[i].trim() });
    }
  });
  data.competenciaVentajas = fd.get("competenciaVentajas") || "";
  data.competenciaMejoras = fd.get("competenciaMejoras") || "";
  data.marcaInspiracion = fd.get("marcaInspiracion") || "";

  // Rediseño conditional
  if (needsRedisenio()) {
    data.redisenio = {
      motivos: fd.getAll("motivosRedisenio"),
      motivosOtro: fd.get("motivosOtro") || "",
      mantener: fd.getAll("mantener"),
      mantenerOtro: fd.get("mantenerOtro") || "",
      cambiarSiOSi: fd.get("cambiarSiOSi") || "",
      archivos: uploadedFiles.map((f) => ({ nombre: f.name, size: f.size })),
    };
  }

  // Deliverables
  data.entregables = fd.getAll("entregables");
  data.entregablesOtro = fd.get("entregablesOtro") || "";
  data.necesitaWeb = fd.get("necesitaWeb") || "";
  data.hostingDominio = fd.get("hostingDominio") || "";
  data.necesitaFotoVideo = fd.get("necesitaFotoVideo") || "";
  data.listaFotoVideo = fd.get("listaFotoVideo") || "";
  data.usosMarca = fd.getAll("usosMarca");

  // Time & budget
  data.fechaLimiteFija = fd.get("fechaLimiteFija") || "";
  data.fechaLimite = fd.get("fechaLimite") || "";
  data.presupuesto = fd.get("presupuesto") || "";
  data.prioridad = fd.get("prioridad") || "";

  // Approvals & communication
  data.decisionFinal = fd.get("decisionFinal") || "";
  data.personasRevisan = fd.get("personasRevisan") || "";
  data.contactoPreferido = fd.get("contactoPreferido") || "";
  data.tiempoRespuesta = fd.get("tiempoRespuesta") || "";

  // Risks
  data.riesgos = fd.get("riesgos") || "";
  data.comentariosFinales = fd.get("comentariosFinales") || "";
  data.nda = fd.get("nda") || "";

  // Confirmation
  data.confirmVeracidad = !!fd.get("confirmVeracidad");
  data.confirmDatos = !!fd.get("confirmDatos");
  data.confirmDerechos = !!fd.get("confirmDerechos");
  data.optInRecursos = !!fd.get("optInRecursos");

  // Timestamp
  data.meta = {
    timestamp: new Date().toISOString(),
    version: "1.0",
  };

  return data;
}

// Summary
verResumenBtn?.addEventListener("click", () => {
  const data = collectData();
  summaryContent.textContent = JSON.stringify(data, null, 2);
  summaryDialog.showModal();
});
document.getElementById("closeSummary").addEventListener("click", () => {
  summaryDialog.close();
});
downloadJsonBtn.addEventListener("click", () => {
  const data = collectData();
  const blob = new Blob([JSON.stringify(data, null, 2)], {
    type: "application/json",
  });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `brief-${Date.now()}.json`;
  a.click();
  URL.revokeObjectURL(a.href);
});

// Save and continue later
saveBtn.addEventListener("click", () => {
  const data = collectData();
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ step: currentStep, data })
  );
  alert("Progreso guardado. Puedes cerrar y volver más tarde.");
});

// Restore if exists
(function restoreIfExists() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return;
  try {
    const parsed = JSON.parse(saved);
    fillForm(parsed.data);
    currentStep = parsed.step;
    showStep();
  } catch (e) {
    console.warn("No se pudo restaurar el progreso:", e);
  }
})();

function fillForm(data) {
  if (!data) return;
  // Basic strings
  Object.entries(data).forEach(([key, value]) => {
    const el = form.elements[key];
    if (!el) return;
    if (el.type === "checkbox" || el.type === "radio") return;
    if (typeof value === "string") el.value = value;
  });

  // Arrays
  if (Array.isArray(data.necesidadesPrincipales)) {
    data.necesidadesPrincipales.forEach((val) => {
      const cb = form.querySelector(
        `input[name="necesidadesPrincipales"][value="${cssEscape(val)}"]`
      );
      if (cb) cb.checked = true;
    });
  }
  if (data.necesidadesOtro) {
    const otroCb = form.querySelector(
      'input[name="necesidadesPrincipales"][value="Otro"]'
    );
    if (otroCb) {
      otroCb.checked = true;
      const input = form.querySelector('input[name="necesidadesOtro"]');
      input.disabled = false;
      input.value = data.necesidadesOtro;
    }
  }

  if (Array.isArray(data.objetivosSecundarios)) {
    const chipsContainer = document.querySelector(".chips");
    data.objetivosSecundarios.forEach((txt) => {
      const chip = document.createElement("div");
      chip.className = "chip";
      chip.innerHTML = `<span>${escapeHTML(
        txt
      )}</span><button type="button">&times;</button>`;
      chip
        .querySelector("button")
        .addEventListener("click", () => chip.remove());
      chipsContainer.appendChild(chip);
    });
  }

  [
    "mediciones",
    "cobertura",
    "usosMarca",
    "entregables",
    "mantener",
    "motivosRedisenio",
  ].forEach((arrKey) => {
    if (Array.isArray(data[arrKey])) {
      data[arrKey].forEach((val) => {
        const cb = form.querySelector(
          `input[name="${arrKey}"][value="${cssEscape(val)}"]`
        );
        if (cb) cb.checked = true;
      });
    }
  });

  // Competidores
  if (Array.isArray(data.competidores) && data.competidores.length) {
    competidoresGroup.innerHTML = "";
    data.competidores.forEach((c) => {
      const item = document.createElement("div");
      item.className = "repeat-item";
      item.innerHTML = `
        <input type="text" name="competidorNombre[]" value="${escapeHTML(
          c.nombre
        )}" placeholder="Nombre" maxlength="60" />
        <input type="url" name="competidorUrl[]" value="${escapeHTML(
          c.url
        )}" placeholder="https://..." />
        <button type="button" class="btn-icon remove" aria-label="Eliminar competidor">&times;</button>
      `;
      item
        .querySelector(".remove")
        .addEventListener("click", () => item.remove());
      competidoresGroup.appendChild(item);
    });
    updateCompetidorRemoveButtons();
  }

  updateRedisenioVisibility();
}

// Success
function showSuccess() {
  form.classList.add("hidden");
  successMessage.classList.remove("hidden");
}

restartBtn.addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  uploadedFiles = [];
  fileList.innerHTML = "";
  document.querySelectorAll(".chips").forEach((c) => (c.innerHTML = ""));
  successMessage.classList.add("hidden");
  form.classList.remove("hidden");
  currentStep = 1;
  showStep();
});

// Reset button handler
resetBtn.addEventListener("click", () => {
  if (
    confirm(
      "¿Estás seguro de que quieres empezar de nuevo? Se borrarán todos los datos guardados."
    )
  ) {
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
    uploadedFiles = [];
    fileList.innerHTML = "";
    document.querySelectorAll(".chips").forEach((c) => (c.innerHTML = ""));
    currentStep = 1;
    showStep();
  }
});

// Utility
function escapeHTML(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
function cssEscape(str) {
  return str.replace(/"/g, '\\"');
}

// Initial
showStep();
updateRedisenioVisibility();

// Logo animation - smooth tagline reveal
const tagline = document.getElementById("tagline");

if (tagline) {
  // Set the text content always visible for CSS transition
  tagline.textContent = "branding";
}
