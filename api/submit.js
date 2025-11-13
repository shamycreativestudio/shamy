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

    const {
      nombre,
      email,
      empresa,
      telefono,
      descripcion,
      industria,
      publico,
      presupuesto,
      timeline,
      referencias,
      imagenes, // Base64 de imágenes
    } = req.body;

    // Validación básica relajada: exigir al menos un medio de contacto
    const safeNombre =
      (nombre && nombre.trim()) || (empresa && empresa.trim()) || "Sin nombre";
    const safeEmail = email && email.trim() ? email.trim() : null;
    const safeTelefono = telefono && telefono.trim() ? telefono.trim() : null;

    if (!safeEmail && !safeTelefono) {
      return res.status(400).json({
        error: "Proporciona al menos un medio de contacto (email o teléfono)",
        received: { email, telefono },
      });
    }

    // Subir imágenes a Cloudinary (si existen)
    let imagenesUrls = [];
    if (imagenes && imagenes.length > 0) {
      const uploadPromises = imagenes.map(async (imgBase64) => {
        const result = await cloudinary.uploader.upload(imgBase64, {
          folder: "shamy-briefs",
          resource_type: "auto",
        });
        return result.secure_url;
      });
      imagenesUrls = await Promise.all(uploadPromises);
    }

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
                content: empresa || "",
              },
            },
          ],
        },
        Telefono: {
          phone_number: safeTelefono,
        },
        Presupuesto: {
          select: presupuesto ? { name: presupuesto } : null,
        },
        Tipo: {
          select: timeline ? { name: timeline } : null,
        },
        Descripcion: {
          rich_text: [
            {
              text: {
                content: descripcion || "",
              },
            },
          ],
        },
        Objetivo: {
          rich_text: [
            {
              text: {
                content: publico || "",
              },
            },
          ],
        },
        Referencias: {
          rich_text: [
            {
              text: {
                content: referencias || "",
              },
            },
          ],
        },
        Imagenes: {
          files: imagenesUrls.map((url) => ({
            name: "Imagen",
            external: {
              url: url,
            },
          })),
        },
        Estado: {
          select: {
            name: "Nuevo",
          },
        },
      },
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
