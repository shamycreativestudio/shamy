/**
 * Configuración del API según el entorno
 * Detecta automáticamente si estamos en desarrollo (localhost) o producción (GitHub Pages)
 */

const CONFIG = {
  development: {
    API_URL: "http://localhost:3000",
    ENV_NAME: "Development",
  },
  production: {
    API_URL: "https://shamycreativestudio.fly.dev",
    ENV_NAME: "Production",
  },
};

// Detectar entorno automáticamente
const isLocalhost =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1" ||
  window.location.hostname === "";

const ENV = isLocalhost ? "development" : "production";
const API_URL = CONFIG[ENV].API_URL;

// Log para debugging
console.log(`🌍 Entorno: ${CONFIG[ENV].ENV_NAME}`);
console.log(`🔌 API URL: ${API_URL}`);

// Verificar que la URL esté configurada en producción
if (ENV === "production" && API_URL.includes("TU-URL-AQUI")) {
  console.error("⚠️ ERROR: Debes configurar la URL de producción en config.js");
  alert(
    "Error de configuración: URL de API no configurada. Contacta al administrador."
  );
}

// Exportar configuración
window.SHAMY_CONFIG = {
  API_URL,
  ENV,
  isProduction: ENV === "production",
  isDevelopment: ENV === "development",
};
