/**
 * Rutas para gestión de briefs
 */

const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const { db } = require("../database/db");

// Configuración de Multer para subida de archivos
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, "../uploads");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, `brief-${uniqueSuffix}${ext}`);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: parseInt(process.env.MAX_FILE_SIZE) || 10485760, // 10MB default
    files: 10,
  },
  fileFilter: (req, file, cb) => {
    // Tipos de archivo permitidos
    const allowedTypes = /jpeg|jpg|png|gif|pdf|svg|ai|eps|psd/;
    const extname = allowedTypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = allowedTypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error("Tipo de archivo no permitido"));
    }
  },
});

/**
 * POST /api/briefs
 * Crear un nuevo brief
 */
router.post("/", upload.array("files", 10), async (req, res) => {
  try {
    const data = req.body;

    // Validar campos requeridos
    const requiredFields = [
      "empresaNombre",
      "contactoNombreCargo",
      "contactoEmail",
      "contactoTelefono",
      "descripcionBreve",
    ];

    for (const field of requiredFields) {
      if (!data[field]) {
        return res.status(400).json({
          error: `Campo requerido faltante: ${field}`,
        });
      }
    }

    // Obtener IP y User Agent
    const ipAddress = req.ip || req.connection.remoteAddress;
    const userAgent = req.get("user-agent");

    // Preparar datos para insertar
    const insertStmt = db.prepare(`
      INSERT INTO briefs (
        empresa_nombre,
        contacto_nombre_cargo,
        contacto_email,
        contacto_telefono,
        ciudad,
        descripcion_breve,
        fecha_entrega_ideal,
        necesidades_principales,
        objetivo_principal,
        objetivos_secundarios,
        mediciones,
        cobertura,
        publico_clientes,
        rango_edad,
        publico_problema,
        publico_eleccion,
        estilo,
        competidores,
        competencia_ventajas,
        competencia_mejoras,
        marca_inspiracion,
        es_redisenio,
        redisenio_motivos,
        redisenio_mantener,
        redisenio_cambiar,
        entregables,
        necesita_web,
        hosting_dominio,
        necesita_foto_video,
        lista_foto_video,
        usos_marca,
        fecha_limite_fija,
        fecha_limite,
        presupuesto,
        prioridad,
        decision_final,
        personas_revisan,
        contacto_preferido,
        tiempo_respuesta,
        riesgos,
        comentarios_finales,
        nda,
        confirm_veracidad,
        confirm_datos,
        confirm_derechos,
        opt_in_recursos,
        data_json,
        ip_address,
        user_agent
      ) VALUES (
        @empresaNombre,
        @contactoNombreCargo,
        @contactoEmail,
        @contactoTelefono,
        @ciudad,
        @descripcionBreve,
        @fechaEntregaIdeal,
        @necesidadesPrincipales,
        @objetivoPrincipal,
        @objetivosSecundarios,
        @mediciones,
        @cobertura,
        @publicoClientes,
        @rangoEdad,
        @publicoProblema,
        @publicoEleccion,
        @estilo,
        @competidores,
        @competenciaVentajas,
        @competenciaMejoras,
        @marcaInspiracion,
        @esRedisenio,
        @redisenioMotivos,
        @redisenioMantener,
        @redisenioCambiar,
        @entregables,
        @necesitaWeb,
        @hostingDominio,
        @necesitaFotoVideo,
        @listaFotoVideo,
        @usosMarca,
        @fechaLimiteFija,
        @fechaLimite,
        @presupuesto,
        @prioridad,
        @decisionFinal,
        @personasRevisan,
        @contactoPreferido,
        @tiempoRespuesta,
        @riesgos,
        @comentariosFinales,
        @nda,
        @confirmVeracidad,
        @confirmDatos,
        @confirmDerechos,
        @optInRecursos,
        @dataJson,
        @ipAddress,
        @userAgent
      )
    `);

    // Convertir arrays a JSON strings
    const briefData = {
      empresaNombre: data.empresaNombre,
      contactoNombreCargo: data.contactoNombreCargo,
      contactoEmail: data.contactoEmail,
      contactoTelefono: data.contactoTelefono,
      ciudad: data.ciudad || null,
      descripcionBreve: data.descripcionBreve,
      fechaEntregaIdeal: data.fechaEntregaIdeal || null,
      necesidadesPrincipales: JSON.stringify(data.necesidadesPrincipales || []),
      objetivoPrincipal: data.objetivoPrincipal || null,
      objetivosSecundarios: JSON.stringify(data.objetivosSecundarios || []),
      mediciones: JSON.stringify(data.mediciones || []),
      cobertura: JSON.stringify(data.cobertura || []),
      publicoClientes: data.publicoClientes || null,
      rangoEdad: data.rangoEdad || null,
      publicoProblema: data.publicoProblema || null,
      publicoEleccion: data.publicoEleccion || null,
      estilo: data.estilo || null,
      competidores: JSON.stringify(data.competidores || []),
      competenciaVentajas: data.competenciaVentajas || null,
      competenciaMejoras: data.competenciaMejoras || null,
      marcaInspiracion: data.marcaInspiracion || null,
      esRedisenio: data.redisenio ? 1 : 0,
      redisenioMotivos: data.redisenio ? JSON.stringify(data.redisenio) : null,
      redisenioMantener: null,
      redisenioCambiar: data.redisenio?.cambiarSiOSi || null,
      entregables: JSON.stringify(data.entregables || []),
      necesitaWeb: data.necesitaWeb || null,
      hostingDominio: data.hostingDominio || null,
      necesitaFotoVideo: data.necesitaFotoVideo || null,
      listaFotoVideo: data.listaFotoVideo || null,
      usosMarca: JSON.stringify(data.usosMarca || []),
      fechaLimiteFija: data.fechaLimiteFija || null,
      fechaLimite: data.fechaLimite || null,
      presupuesto: data.presupuesto || null,
      prioridad: data.prioridad || null,
      decisionFinal: data.decisionFinal || null,
      personasRevisan: data.personasRevisan || null,
      contactoPreferido: data.contactoPreferido || null,
      tiempoRespuesta: data.tiempoRespuesta || null,
      riesgos: data.riesgos || null,
      comentariosFinales: data.comentariosFinales || null,
      nda: data.nda || null,
      confirmVeracidad: data.confirmVeracidad ? 1 : 0,
      confirmDatos: data.confirmDatos ? 1 : 0,
      confirmDerechos: data.confirmDerechos ? 1 : 0,
      optInRecursos: data.optInRecursos ? 1 : 0,
      dataJson: JSON.stringify(data),
      ipAddress: ipAddress,
      userAgent: userAgent,
    };

    const result = insertStmt.run(briefData);
    const briefId = result.lastInsertRowid;

    // Guardar información de archivos si existen
    if (req.files && req.files.length > 0) {
      const fileStmt = db.prepare(`
        INSERT INTO brief_files (
          brief_id, original_name, stored_name, file_path, file_size, mime_type
        ) VALUES (?, ?, ?, ?, ?, ?)
      `);

      const insertFiles = db.transaction((files) => {
        for (const file of files) {
          fileStmt.run(
            briefId,
            file.originalname,
            file.filename,
            file.path,
            file.size,
            file.mimetype
          );
        }
      });

      insertFiles(req.files);
    }

    // Respuesta exitosa
    res.status(201).json({
      success: true,
      message: "Brief recibido correctamente",
      briefId: briefId,
      filesUploaded: req.files ? req.files.length : 0,
    });
  } catch (error) {
    console.error("Error al guardar brief:", error);

    // Eliminar archivos subidos si hubo error
    if (req.files) {
      req.files.forEach((file) => {
        fs.unlink(file.path, (err) => {
          if (err) console.error("Error eliminando archivo:", err);
        });
      });
    }

    res.status(500).json({
      error: "Error al procesar el brief",
      details:
        process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
});

/**
 * GET /api/briefs
 * Listar todos los briefs (protegido - requiere autenticación básica)
 */
router.get("/", requireAuth, (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const offset = (page - 1) * limit;
    const estado = req.query.estado;

    let query = `
      SELECT 
        id, empresa_nombre, contacto_nombre_cargo, contacto_email,
        contacto_telefono, estado, created_at
      FROM briefs
    `;

    const params = [];

    if (estado) {
      query += " WHERE estado = ?";
      params.push(estado);
    }

    query += " ORDER BY created_at DESC LIMIT ? OFFSET ?";
    params.push(limit, offset);

    const briefs = db.prepare(query).all(...params);

    // Obtener total con o sin filtro
    let totalResult;
    if (estado) {
      totalResult = db
        .prepare("SELECT COUNT(*) as total FROM briefs WHERE estado = ?")
        .get(estado);
    } else {
      totalResult = db.prepare("SELECT COUNT(*) as total FROM briefs").get();
    }

    const total = totalResult ? totalResult.total : 0;

    res.json({
      briefs,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error("Error al listar briefs:", error);
    res.status(500).json({
      error: "Error al obtener los briefs",
      details:
        process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
});

/**
 * GET /api/briefs/:id
 * Obtener un brief específico
 */
router.get("/:id", requireAuth, (req, res) => {
  try {
    const { id } = req.params;

    const brief = db
      .prepare(
        `
      SELECT * FROM briefs WHERE id = ?
    `
      )
      .get(id);

    if (!brief) {
      return res.status(404).json({ error: "Brief no encontrado" });
    }

    // Obtener archivos asociados
    const files = db
      .prepare(
        `
      SELECT id, original_name, stored_name, file_size, mime_type, uploaded_at
      FROM brief_files
      WHERE brief_id = ?
    `
      )
      .all(id);

    // Parsear campos JSON
    try {
      brief.necesidades_principales = JSON.parse(
        brief.necesidades_principales || "[]"
      );
      brief.objetivos_secundarios = JSON.parse(
        brief.objetivos_secundarios || "[]"
      );
      brief.mediciones = JSON.parse(brief.mediciones || "[]");
      brief.cobertura = JSON.parse(brief.cobertura || "[]");
      brief.competidores = JSON.parse(brief.competidores || "[]");
      brief.entregables = JSON.parse(brief.entregables || "[]");
      brief.usos_marca = JSON.parse(brief.usos_marca || "[]");
      if (brief.redisenio_motivos) {
        brief.redisenio = JSON.parse(brief.redisenio_motivos);
      }
    } catch (e) {
      console.warn("Error parseando JSON:", e);
    }

    res.json({
      brief,
      files,
    });
  } catch (error) {
    console.error("Error al obtener brief:", error);
    res.status(500).json({ error: "Error al obtener el brief" });
  }
});

/**
 * PUT /api/briefs/:id
 * Actualizar estado de un brief
 */
router.put("/:id", requireAuth, (req, res) => {
  try {
    const { id } = req.params;
    const { estado, notas_admin } = req.body;

    const validStates = ["nuevo", "en_revision", "aprobado", "rechazado"];
    if (estado && !validStates.includes(estado)) {
      return res.status(400).json({ error: "Estado inválido" });
    }

    const updates = [];
    const values = [];

    if (estado) {
      updates.push("estado = ?");
      values.push(estado);
    }

    if (notas_admin !== undefined) {
      updates.push("notas_admin = ?");
      values.push(notas_admin);
    }

    if (updates.length === 0) {
      return res.status(400).json({ error: "No hay campos para actualizar" });
    }

    values.push(id);

    const result = db
      .prepare(
        `
      UPDATE briefs 
      SET ${updates.join(", ")}
      WHERE id = ?
    `
      )
      .run(...values);

    if (result.changes === 0) {
      return res.status(404).json({ error: "Brief no encontrado" });
    }

    res.json({
      success: true,
      message: "Brief actualizado correctamente",
    });
  } catch (error) {
    console.error("Error al actualizar brief:", error);
    res.status(500).json({ error: "Error al actualizar el brief" });
  }
});

/**
 * DELETE /api/briefs/:id
 * Eliminar un brief
 */
router.delete("/:id", requireAuth, (req, res) => {
  try {
    const { id } = req.params;

    // Obtener archivos antes de eliminar
    const files = db
      .prepare(
        `
      SELECT file_path FROM brief_files WHERE brief_id = ?
    `
      )
      .all(id);

    // Eliminar brief (los archivos se eliminan por CASCADE)
    const result = db.prepare("DELETE FROM briefs WHERE id = ?").run(id);

    if (result.changes === 0) {
      return res.status(404).json({ error: "Brief no encontrado" });
    }

    // Eliminar archivos físicos
    files.forEach((file) => {
      fs.unlink(file.file_path, (err) => {
        if (err) console.error("Error eliminando archivo:", err);
      });
    });

    res.json({
      success: true,
      message: "Brief eliminado correctamente",
    });
  } catch (error) {
    console.error("Error al eliminar brief:", error);
    res.status(500).json({ error: "Error al eliminar el brief" });
  }
});

/**
 * Middleware de autenticación básica
 */
function requireAuth(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Autenticación requerida" });
  }

  const auth = Buffer.from(authHeader.split(" ")[1], "base64")
    .toString()
    .split(":");
  const username = auth[0];
  const password = auth[1];

  const validUsername = process.env.ADMIN_USERNAME || "admin";
  const validPassword = process.env.ADMIN_PASSWORD || "changeme123";

  if (username === validUsername && password === validPassword) {
    next();
  } else {
    res.status(401).json({ error: "Credenciales inválidas" });
  }
}

module.exports = router;
