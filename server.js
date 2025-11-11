/**
 * Shamy Branding Backend Server
 * Servidor Express para gestionar briefs de clientes
 */

require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const rateLimit = require("express-rate-limit");
const path = require("path");
const fs = require("fs");

// Importar rutas
const briefsRouter = require("./routes/briefs");
const adminRouter = require("./routes/admin");

const app = express();
const PORT = process.env.PORT || 3000;

// Crear directorios necesarios
const dirs = ["uploads", "database", "logs"];
dirs.forEach((dir) => {
  const dirPath = path.join(__dirname, dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
});

// Middleware de seguridad
app.use(
  helmet({
    contentSecurityPolicy: false, // Desactivar para desarrollo
    crossOriginEmbedderPolicy: false,
  })
);

// Configuración CORS
const corsOptions = {
  origin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(",") : "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};
app.use(cors(corsOptions));

// Compresión de respuestas
app.use(compression());

// Parse JSON y URL encoded
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// Rate limiting - protección contra spam
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 10, // límite de 10 requests por ventana
  message: "Demasiadas solicitudes desde esta IP, intenta de nuevo más tarde.",
  standardHeaders: true,
  legacyHeaders: false,
});

// Aplicar rate limiting solo a endpoints de creación
app.use("/api/briefs", limiter);

// Logging básico
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.path}`);
  next();
});

// Servir archivos estáticos del frontend
app.use(express.static(path.join(__dirname)));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Rutas de la API
app.use("/api/briefs", briefsRouter);
app.use("/api/admin", adminRouter);

// Ruta de health check
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    version: "1.0.0",
  });
});

// Ruta principal - servir el formulario
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Ruta para el formulario de branding
app.get("/branding", (req, res) => {
  res.sendFile(path.join(__dirname, "branding", "index.html"));
});

// Manejador de errores 404
app.use((req, res) => {
  res.status(404).json({
    error: "Endpoint no encontrado",
    path: req.path,
  });
});

// Manejador de errores global
app.use((err, req, res, next) => {
  console.error("Error:", err);

  const statusCode = err.statusCode || 500;
  const message =
    process.env.NODE_ENV === "production"
      ? "Error interno del servidor"
      : err.message;

  res.status(statusCode).json({
    error: message,
    ...(process.env.NODE_ENV !== "production" && { stack: err.stack }),
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log("╔════════════════════════════════════════════╗");
  console.log("║   🎨 Shamy Branding Backend Server       ║");
  console.log("╚════════════════════════════════════════════╝");
  console.log(`\n✅ Servidor corriendo en: http://localhost:${PORT}`);
  console.log(`✅ API disponible en: http://localhost:${PORT}/api`);
  console.log(`✅ Panel admin en: http://localhost:${PORT}/api/admin/panel`);
  console.log(`\n📝 Entorno: ${process.env.NODE_ENV || "development"}`);
  console.log(
    `📁 Base de datos: ${process.env.DB_PATH || "./database/briefs.db"}`
  );
  console.log("\n💡 Presiona Ctrl+C para detener el servidor\n");
});

// Manejo de cierre graceful
process.on("SIGTERM", () => {
  console.log("SIGTERM recibido, cerrando servidor...");
  process.exit(0);
});

process.on("SIGINT", () => {
  console.log("\nSIGINT recibido, cerrando servidor...");
  process.exit(0);
});

module.exports = app;
