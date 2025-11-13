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

// File upload zones (rediseño materials + referencias)
const uploadZone = document.getElementById("uploadZone");
const fileInput = document.getElementById("fileInput");
const fileList = document.getElementById("fileList");
let uploadedFiles = [];

const uploadZoneReferencias = document.getElementById("uploadZoneReferencias");
const fileInputReferencias = document.getElementById("fileInputReferencias");
const fileListReferencias = document.getElementById("fileListReferencias");
let uploadedReferencias = [];

// Setup upload zone for rediseño materials
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
    handleFiles(e.dataTransfer.files, uploadedFiles, renderFileList);
  });
  fileInput.addEventListener("change", () =>
    handleFiles(fileInput.files, uploadedFiles, renderFileList)
  );
}

// Setup upload zone for referencias
if (uploadZoneReferencias) {
  uploadZoneReferencias.addEventListener("click", () =>
    fileInputReferencias.click()
  );
  uploadZoneReferencias.addEventListener("dragover", (e) => {
    e.preventDefault();
    uploadZoneReferencias.classList.add("dragover");
  });
  uploadZoneReferencias.addEventListener("dragleave", () =>
    uploadZoneReferencias.classList.remove("dragover")
  );
  uploadZoneReferencias.addEventListener("drop", (e) => {
    e.preventDefault();
    uploadZoneReferencias.classList.remove("dragover");
    handleFiles(
      e.dataTransfer.files,
      uploadedReferencias,
      renderFileListReferencias
    );
  });
  fileInputReferencias.addEventListener("change", () =>
    handleFiles(
      fileInputReferencias.files,
      uploadedReferencias,
      renderFileListReferencias
    )
  );
}

function handleFiles(fileListInput, targetArray, renderFn) {
  Array.from(fileListInput).forEach((file) => {
    targetArray.push(file);
  });
  renderFn();
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

function renderFileListReferencias() {
  fileListReferencias.innerHTML = "";
  uploadedReferencias.forEach((file, idx) => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${escapeHTML(file.name)}</span>
      <button type="button" class="btn-icon remove" aria-label="Quitar archivo">&times;</button>`;
    li.querySelector("button").addEventListener("click", () => {
      uploadedReferencias.splice(idx, 1);
      renderFileListReferencias();
    });
    fileListReferencias.appendChild(li);
  });
}

// Navigation
prevBtn.addEventListener("click", () => {
  if (currentStep > 1) {
    currentStep = prevStepIndex();
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
    // Convertir archivos de rediseño a base64
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

    // Convertir imágenes de referencia a base64
    const referenciasBase64 = [];
    if (uploadedReferencias && uploadedReferencias.length > 0) {
      for (const file of uploadedReferencias) {
        const base64 = await new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.readAsDataURL(file);
        });
        referenciasBase64.push(base64);
      }
    }

    // Preparar datos completos para Vercel/Notion
    const payload = {
      // Datos básicos
      nombre:
        data.contactoNombreCargo?.trim() || data.empresaNombre?.trim() || "",
      email: data.contactoEmail?.trim() || "",
      empresa: data.empresaNombre?.trim() || "",
      telefono: data.contactoTelefono?.trim() || "",
      ciudad: data.ciudad?.trim() || "",
      necesidadesPrincipales: data.necesidadesPrincipales || [],
      necesidadesOtro: data.necesidadesOtro?.trim() || "",
      descripcion: data.descripcionBreve?.trim() || "",
      cobertura: data.cobertura || [],
      fechaEntregaIdeal: data.fechaEntregaIdeal || "",

      // Objetivos
      objetivoPrincipal: data.objetivoPrincipal || "",
      objetivoOtro: data.objetivoOtro?.trim() || "",
      objetivosSecundarios: data.objetivosSecundarios || [],
      mediciones: data.mediciones || [],
      medicionesOtro: data.medicionesOtro?.trim() || "",

      // Público
      publicoClientes: data.publicoClientes?.trim() || "",
      rangoEdad: data.rangoEdad?.trim() || "",
      publicoProblema: data.publicoProblema?.trim() || "",
      publicoEleccion: data.publicoEleccion?.trim() || "",
      estilo: data.estilo || "",

      // Competencia
      competidores: data.competidores || [],
      competenciaVentajas: data.competenciaVentajas?.trim() || "",
      competenciaMejoras: data.competenciaMejoras?.trim() || "",
      marcaInspiracion: data.marcaInspiracion?.trim() || "",

      // Rediseño (si aplica)
      redisenio: data.redisenio || null,

      // Entregables
      entregables: data.entregables || [],
      entregablesOtro: data.entregablesOtro?.trim() || "",
      necesitaWeb: data.necesitaWeb || "",
      hostingDominio: data.hostingDominio || "",
      necesitaFotoVideo: data.necesitaFotoVideo || "",
      listaFotoVideo: data.listaFotoVideo?.trim() || "",
      usosMarca: data.usosMarca || [],

      // Tiempo y presupuesto
      presupuesto: data.presupuesto || "",
      fechaLimiteFija: data.fechaLimiteFija || "",
      fechaLimite: data.fechaLimite || "",
      prioridad: data.prioridad || "",

      // Aprobaciones y comunicación
      decisionFinal: data.decisionFinal?.trim() || "",
      personasRevisan: data.personasRevisan || "",
      contactoPreferido: data.contactoPreferido || "",
      tiempoRespuesta: data.tiempoRespuesta || "",

      // Riesgos
      riesgos: data.riesgos?.trim() || "",
      comentariosFinales: data.comentariosFinales?.trim() || "",
      nda: data.nda || "",

      // Confirmaciones
      confirmaciones: {
        veracidad: data.confirmVeracidad,
        autorizaDatos: data.confirmDatos,
        tieneDerechos: data.confirmDerechos,
        recibirNovedades: data.optInRecursos,
      },

      // Imágenes
      imagenes: imagenesBase64,
      imagenesReferencia: referenciasBase64,

      // Metadata
      meta: data.meta,
    };

    // Debug: mostrar lo que se va a enviar
    console.log("📦 Payload preparado:", {
      ...payload,
      imagenes: `${imagenesBase64.length} imágenes`,
      imagenesReferencia: `${referenciasBase64.length} referencias`,
    });

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
      const errorMsg = errorData.error || "Error al enviar el formulario";
      console.error("❌ Error del servidor:", errorMsg, errorData);
      throw new Error(errorMsg);
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

    // Mensaje específico si es el error de contacto
    let userMsg =
      "Hubo un error al enviar el formulario. Por favor, intenta de nuevo.";
    if (error.message.includes("medio de contacto")) {
      userMsg =
        "Por favor, completa al menos tu correo electrónico O tu teléfono en el Paso 1 para poder contactarte.";
    }

    alert(userMsg);

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

  // Permitir guardar en cualquier paso si hay algún dato ingresado
  // En paso 1: requiere al menos una interacción
  // En otros pasos: siempre visible (ya hay progreso)
  if (currentStep === 1) {
    const hasAnyData = Array.from(
      form.querySelectorAll(
        'input:not([type="hidden"]):not([type="file"]), textarea'
      )
    ).some((el) => {
      if (el.type === "checkbox" || el.type === "radio") {
        return el.checked;
      }
      return el.value.trim();
    });
    saveBtn.hidden = !hasAnyData;
  } else {
    saveBtn.hidden = false; // Siempre visible después del paso 1
  }

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

  // Paso 1: validar que tenga al menos email O teléfono
  if (stepNumber === 1) {
    const emailInput = stepEl.querySelector('input[name="contactoEmail"]');
    const phoneInput = stepEl.querySelector('input[name="contactoTelefono"]');

    const hasEmail = emailInput && emailInput.value.trim();
    const hasPhone = phoneInput && phoneInput.value.trim();

    // Validar formato de email si hay valor
    if (hasEmail && !isValidEmail(emailInput.value)) {
      markError(emailInput, "Ingresa un correo válido");
      valid = false;
    }

    // Exigir al menos uno de los dos
    if (!hasEmail && !hasPhone) {
      if (emailInput)
        markError(emailInput, "Completa al menos tu correo o tu teléfono");
      if (phoneInput)
        markError(phoneInput, "Completa al menos tu correo o tu teléfono");
      valid = false;
    }
  } else {
    // Otros pasos: solo validar formato de email si hay valor
    const emailInput = stepEl.querySelector('input[name="contactoEmail"]');
    if (
      emailInput &&
      emailInput.value.trim() &&
      !isValidEmail(emailInput.value)
    ) {
      markError(emailInput, "Ingresa un correo válido");
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
  summaryContent.innerHTML = generateReadableSummary(data);
  summaryDialog.showModal();
});
document.getElementById("closeSummary").addEventListener("click", () => {
  summaryDialog.close();
});

function generateReadableSummary(data) {
  let html = '<div style="max-height: 60vh; overflow-y: auto; padding: 1rem;">';

  // Paso 1: Datos básicos
  if (
    data.empresaNombre ||
    data.contactoNombreCargo ||
    data.contactoEmail ||
    data.contactoTelefono
  ) {
    html += "<h4>📋 Datos básicos</h4><ul>";
    if (data.empresaNombre)
      html += `<li><strong>Empresa:</strong> ${escapeHTML(
        data.empresaNombre
      )}</li>`;
    if (data.contactoNombreCargo)
      html += `<li><strong>Contacto:</strong> ${escapeHTML(
        data.contactoNombreCargo
      )}</li>`;
    if (data.contactoEmail)
      html += `<li><strong>Email:</strong> ${escapeHTML(
        data.contactoEmail
      )}</li>`;
    if (data.contactoTelefono)
      html += `<li><strong>Teléfono:</strong> ${escapeHTML(
        data.contactoTelefono
      )}</li>`;
    if (data.ciudad)
      html += `<li><strong>Ciudad:</strong> ${escapeHTML(data.ciudad)}</li>`;
    if (data.necesidadesPrincipales?.length)
      html += `<li><strong>Necesidades:</strong> ${data.necesidadesPrincipales.join(
        ", "
      )}</li>`;
    if (data.descripcionBreve)
      html += `<li><strong>Descripción:</strong> ${escapeHTML(
        data.descripcionBreve
      )}</li>`;
    if (data.cobertura?.length)
      html += `<li><strong>Cobertura:</strong> ${data.cobertura.join(
        ", "
      )}</li>`;
    if (data.fechaEntregaIdeal)
      html += `<li><strong>Fecha ideal:</strong> ${data.fechaEntregaIdeal}</li>`;
    html += "</ul>";
  }

  // Paso 2: Objetivos
  if (
    data.objetivoPrincipal ||
    data.objetivosSecundarios?.length ||
    data.mediciones?.length
  ) {
    html += "<h4>🎯 Objetivos</h4><ul>";
    if (data.objetivoPrincipal)
      html += `<li><strong>Objetivo principal:</strong> ${data.objetivoPrincipal}</li>`;
    if (data.objetivosSecundarios?.length)
      html += `<li><strong>Objetivos secundarios:</strong> ${data.objetivosSecundarios.join(
        ", "
      )}</li>`;
    if (data.mediciones?.length)
      html += `<li><strong>Mediciones:</strong> ${data.mediciones.join(
        ", "
      )}</li>`;
    html += "</ul>";
  }

  // Paso 3: Público
  if (data.publicoClientes || data.estilo) {
    html += "<h4>👥 Público objetivo</h4><ul>";
    if (data.publicoClientes)
      html += `<li><strong>Clientes:</strong> ${escapeHTML(
        data.publicoClientes
      )}</li>`;
    if (data.rangoEdad)
      html += `<li><strong>Edad:</strong> ${escapeHTML(data.rangoEdad)}</li>`;
    if (data.publicoProblema)
      html += `<li><strong>Problema que resuelves:</strong> ${escapeHTML(
        data.publicoProblema
      )}</li>`;
    if (data.publicoEleccion)
      html += `<li><strong>Por qué te eligen:</strong> ${escapeHTML(
        data.publicoEleccion
      )}</li>`;
    if (data.estilo) html += `<li><strong>Estilo:</strong> ${data.estilo}</li>`;
    html += "</ul>";
  }

  // Paso 4: Competencia
  if (data.competidores?.length || data.marcaInspiracion) {
    html += "<h4>🏆 Competencia e inspiración</h4><ul>";
    if (data.competidores?.length) {
      html += "<li><strong>Competidores:</strong><ul>";
      data.competidores.forEach((c) => {
        if (c.nombre)
          html += `<li>${escapeHTML(c.nombre)}${
            c.url ? ` (${escapeHTML(c.url)})` : ""
          }</li>`;
      });
      html += "</ul></li>";
    }
    if (data.competenciaVentajas)
      html += `<li><strong>Tus ventajas:</strong> ${escapeHTML(
        data.competenciaVentajas
      )}</li>`;
    if (data.competenciaMejoras)
      html += `<li><strong>A mejorar:</strong> ${escapeHTML(
        data.competenciaMejoras
      )}</li>`;
    if (data.marcaInspiracion)
      html += `<li><strong>Marcas que te gustan:</strong> ${escapeHTML(
        data.marcaInspiracion
      )}</li>`;
    html += "</ul>";
  }

  // Paso 6: Entregables
  if (data.entregables?.length || data.necesitaWeb || data.necesitaFotoVideo) {
    html += "<h4>📦 Entregables</h4><ul>";
    if (data.entregables?.length)
      html += `<li><strong>Diseños:</strong> ${data.entregables.join(
        ", "
      )}</li>`;
    if (data.necesitaWeb)
      html += `<li><strong>Web:</strong> ${data.necesitaWeb}</li>`;
    if (data.necesitaFotoVideo)
      html += `<li><strong>Foto/Video:</strong> ${data.necesitaFotoVideo}</li>`;
    if (data.usosMarca?.length)
      html += `<li><strong>Usos principales:</strong> ${data.usosMarca.join(
        ", "
      )}</li>`;
    html += "</ul>";
  }

  // Paso 7: Tiempo y presupuesto
  if (data.presupuesto || data.prioridad) {
    html += "<h4>💰 Presupuesto y tiempos</h4><ul>";
    if (data.presupuesto)
      html += `<li><strong>Presupuesto:</strong> ${data.presupuesto}</li>`;
    if (data.fechaLimiteFija)
      html += `<li><strong>Fecha límite fija:</strong> ${data.fechaLimiteFija}</li>`;
    if (data.fechaLimite)
      html += `<li><strong>Fecha límite:</strong> ${data.fechaLimite}</li>`;
    if (data.prioridad)
      html += `<li><strong>Prioridad:</strong> ${data.prioridad}</li>`;
    html += "</ul>";
  }

  html += "</div>";
  return html;
}

// Save and continue later
saveBtn.addEventListener("click", () => {
  const data = collectData();
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({ step: currentStep, data })
  );

  // Advertencia sobre imágenes si hay alguna cargada
  const hasImages = uploadedFiles.length > 0 || uploadedReferencias.length > 0;
  const mensaje = hasImages
    ? "Progreso guardado. Puedes cerrar y volver más tarde.\n\n⚠️ Nota: Si recarga la página, las imágenes cargadas no se guardarán y deberán ser resubidas."
    : "Progreso guardado. Puedes cerrar y volver más tarde.";

  alert(mensaje);
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
  // Ocultar todos los pasos del formulario
  steps.forEach(step => step.classList.remove('active'));
  steps.forEach(step => step.style.display = 'none');
  
  // Ocultar navegación y barra de progreso
  document.querySelector(".progress-wrapper")?.classList.add("hidden");
  document.querySelector(".nav-steps")?.classList.add("hidden");
  
  // Mostrar solo mensaje de éxito
  successMessage.classList.remove("hidden");
  successMessage.style.display = "block";
  scrollToTop();
}

restartBtn.addEventListener("click", () => {
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  uploadedFiles = [];
  uploadedReferencias = [];
  fileList.innerHTML = "";
  fileListReferencias.innerHTML = "";
  document.querySelectorAll(".chips").forEach((c) => (c.innerHTML = ""));
  
  // Restaurar visibilidad de elementos
  successMessage.classList.add("hidden");
  successMessage.style.display = "none";
  document.querySelector(".progress-wrapper")?.classList.remove("hidden");
  document.querySelector(".nav-steps")?.classList.remove("hidden");
  
  // Restaurar display de los pasos
  steps.forEach(step => step.style.display = '');
  
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

// Listener para detectar cuando el usuario ingresa datos y habilitar botón guardar
form.addEventListener("input", () => {
  if (currentStep === 1) {
    const hasAnyData = Array.from(
      form.querySelectorAll(
        'input:not([type="hidden"]):not([type="file"]), textarea'
      )
    ).some((el) => {
      if (el.type === "checkbox" || el.type === "radio") {
        return el.checked;
      }
      return el.value.trim();
    });
    saveBtn.hidden = !hasAnyData;
  }
});

// Initial
showStep();
updateRedisenioVisibility();

// Logo animation - smooth tagline reveal
const tagline = document.getElementById("tagline");

if (tagline) {
  // Set the text content always visible for CSS transition
  tagline.textContent = "branding";
}
