/**
 * Configuración del API para el Admin Panel
 * Usa la misma configuración que el formulario
 */

const CONFIG = {
  development: {
    API_URL: "http://localhost:3000",
    ENV_NAME: "Development",
  },
  production: {
    API_URL: "https://shamy.vercel.app",
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
console.log(`🌍 Admin Panel - Entorno: ${CONFIG[ENV].ENV_NAME}`);
console.log(`🔌 Admin Panel - API URL: ${API_URL}`);

// Exportar configuración
window.SHAMY_CONFIG = {
  API_URL,
  ENV,
  isProduction: ENV === "production",
  isDevelopment: ENV === "development",
};
