// Vercel Serverless Function - Recibe datos del formulario y los guarda en Notion

const { Client } = require("@notionhq/client");

// Configuración de Notion
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const DATABASE_ID = process.env.NOTION_DATABASE_ID;

// Configuración de Cloudinary
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

module.exports = async (req, res) => {
  // CORS
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://shamycreativestudio.github.io"
  );
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  try {
    // Log para debugging
    console.log("📥 Datos recibidos:", JSON.stringify(req.body, null, 2));

    const payload = req.body;

    // Validación básica relajada: exigir al menos un medio de contacto
    const safeNombre =
      (payload.nombre && payload.nombre.trim()) ||
      (payload.empresa && payload.empresa.trim()) ||
      "Sin nombre";
    const safeEmail =
      payload.email && payload.email.trim() ? payload.email.trim() : null;
    const safeTelefono =
      payload.telefono && payload.telefono.trim()
        ? payload.telefono.trim()
        : null;

    if (!safeEmail && !safeTelefono) {
      return res.status(400).json({
        error: "Proporciona al menos un medio de contacto (email o teléfono)",
        received: { email: payload.email, telefono: payload.telefono },
      });
    }

    // Subir imágenes de rediseño a Cloudinary (si existen)
    let imagenesUrls = [];
    if (payload.imagenes && payload.imagenes.length > 0) {
      const uploadPromises = payload.imagenes.map(async (imgBase64) => {
        const result = await cloudinary.uploader.upload(imgBase64, {
          folder: "shamy-briefs/rediseno",
          resource_type: "auto",
        });
        return result.secure_url;
      });
      imagenesUrls = await Promise.all(uploadPromises);
    }

    // Subir imágenes de referencia a Cloudinary (si existen)
    let referenciasUrls = [];
    if (payload.imagenesReferencia && payload.imagenesReferencia.length > 0) {
      const uploadPromises = payload.imagenesReferencia.map(
        async (imgBase64) => {
          const result = await cloudinary.uploader.upload(imgBase64, {
            folder: "shamy-briefs/referencias",
            resource_type: "auto",
          });
          return result.secure_url;
        }
      );
      referenciasUrls = await Promise.all(uploadPromises);
    }

    // Preparar texto rico con toda la información estructurada
    const fullContent = `
📋 DATOS BÁSICOS
• Empresa: ${payload.empresa || "N/A"}
• Contacto: ${payload.nombre || "N/A"}
• Ciudad: ${payload.ciudad || "N/A"}
• Necesidades: ${payload.necesidadesPrincipales?.join(", ") || "N/A"}${
      payload.necesidadesOtro ? ` (Otro: ${payload.necesidadesOtro})` : ""
    }
• Descripción: ${payload.descripcion || "N/A"}
• Cobertura: ${payload.cobertura?.join(", ") || "N/A"}
• Fecha ideal: ${payload.fechaEntregaIdeal || "N/A"}

🎯 OBJETIVOS
• Principal: ${payload.objetivoPrincipal || "N/A"}${
      payload.objetivoOtro ? ` (${payload.objetivoOtro})` : ""
    }
• Secundarios: ${payload.objetivosSecundarios?.join(", ") || "N/A"}
• Mediciones: ${payload.mediciones?.join(", ") || "N/A"}${
      payload.medicionesOtro ? ` (Otro: ${payload.medicionesOtro})` : ""
    }

👥 PÚBLICO
• Clientes: ${payload.publicoClientes || "N/A"}
• Edad: ${payload.rangoEdad || "N/A"}
• Problema que resuelve: ${payload.publicoProblema || "N/A"}
• Por qué lo eligen: ${payload.publicoEleccion || "N/A"}
• Estilo: ${payload.estilo || "N/A"}

🏆 COMPETENCIA
• Competidores: ${
      payload.competidores?.map((c) => `${c.nombre} (${c.url})`).join(", ") ||
      "N/A"
    }
• Ventajas: ${payload.competenciaVentajas || "N/A"}
• A mejorar: ${payload.competenciaMejoras || "N/A"}
• Marcas inspiración: ${payload.marcaInspiracion || "N/A"}

${
  payload.redisenio
    ? `♻️ REDISEÑO
• Motivos: ${payload.redisenio.motivos?.join(", ") || "N/A"}${
        payload.redisenio.motivosOtro
          ? ` (${payload.redisenio.motivosOtro})`
          : ""
      }
• Mantener: ${payload.redisenio.mantener?.join(", ") || "N/A"}${
        payload.redisenio.mantenerOtro
          ? ` (${payload.redisenio.mantenerOtro})`
          : ""
      }
• Cambiar: ${payload.redisenio.cambiarSiOSi || "N/A"}

`
    : ""
}
📦 ENTREGABLES
• Diseños: ${payload.entregables?.join(", ") || "N/A"}${
      payload.entregablesOtro ? ` (Otro: ${payload.entregablesOtro})` : ""
    }
• Web: ${payload.necesitaWeb || "N/A"}
• Hosting/Dominio: ${payload.hostingDominio || "N/A"}
• Foto/Video: ${payload.necesitaFotoVideo || "N/A"}
• Lista foto/video: ${payload.listaFotoVideo || "N/A"}
• Usos principales: ${payload.usosMarca?.join(", ") || "N/A"}

💰 PRESUPUESTO Y TIEMPOS
• Presupuesto: ${payload.presupuesto || "N/A"}
• Fecha límite fija: ${payload.fechaLimiteFija || "N/A"}
• Fecha límite: ${payload.fechaLimite || "N/A"}
• Prioridad: ${payload.prioridad || "N/A"}

🤝 APROBACIONES Y COMUNICACIÓN
• Decisión final: ${payload.decisionFinal || "N/A"}
• Personas que revisan: ${payload.personasRevisan || "N/A"}
• Contacto preferido: ${payload.contactoPreferido || "N/A"}
• Tiempo de respuesta: ${payload.tiempoRespuesta || "N/A"}

⚠️ RIESGOS Y DETALLES
• Riesgos: ${payload.riesgos || "N/A"}
• Comentarios finales: ${payload.comentariosFinales || "N/A"}
• NDA: ${payload.nda || "N/A"}

✅ CONFIRMACIONES
• Veracidad: ${payload.confirmaciones?.veracidad ? "Sí" : "No"}
• Autoriza datos: ${payload.confirmaciones?.autorizaDatos ? "Sí" : "No"}
• Tiene derechos: ${payload.confirmaciones?.tieneDerechos ? "Sí" : "No"}
• Recibir novedades: ${payload.confirmaciones?.recibirNovedades ? "Sí" : "No"}

🖼️ IMÁGENES
• Rediseño: ${imagenesUrls.length} archivo(s)
• Referencias: ${referenciasUrls.length} archivo(s)

📅 METADATA
• Timestamp: ${payload.meta?.timestamp || new Date().toISOString()}
`.trim();

    // Crear entrada en Notion
    const response = await notion.pages.create({
      parent: {
        database_id: DATABASE_ID,
      },
      properties: {
        Nombre: {
          title: [
            {
              text: {
                content: safeNombre,
              },
            },
          ],
        },
        Email: {
          email: safeEmail,
        },
        Empresa: {
          rich_text: [
            {
              text: {
                content: payload.empresa || "",
              },
            },
          ],
        },
        Telefono: {
          phone_number: safeTelefono,
        },
        Presupuesto: {
          select: payload.presupuesto ? { name: payload.presupuesto } : null,
        },
        Estado: {
          select: {
            name: "Nuevo",
          },
        },
      },
      children: [
        {
          object: "block",
          type: "paragraph",
          paragraph: {
            rich_text: [
              {
                type: "text",
                text: {
                  content: fullContent,
                },
              },
            ],
          },
        },
        ...(imagenesUrls.length > 0
          ? [
              {
                object: "block",
                type: "heading_2",
                heading_2: {
                  rich_text: [
                    { type: "text", text: { content: "Imágenes de rediseño" } },
                  ],
                },
              },
              ...imagenesUrls.map((url) => ({
                object: "block",
                type: "image",
                image: {
                  type: "external",
                  external: { url },
                },
              })),
            ]
          : []),
        ...(referenciasUrls.length > 0
          ? [
              {
                object: "block",
                type: "heading_2",
                heading_2: {
                  rich_text: [
                    {
                      type: "text",
                      text: { content: "Imágenes de referencia" },
                    },
                  ],
                },
              },
              ...referenciasUrls.map((url) => ({
                object: "block",
                type: "image",
                image: {
                  type: "external",
                  external: { url },
                },
              })),
            ]
          : []),
      ],
    });

    return res.status(200).json({
      success: true,
      message: "Brief guardado exitosamente",
      id: response.id,
    });
  } catch (error) {
    console.error("❌ Error al guardar brief:", error);
    return res.status(500).json({
      error: "Error al guardar el brief",
      details: error.message,
      stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
    });
  }
};
