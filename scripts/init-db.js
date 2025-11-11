/**
 * Script para inicializar la base de datos manualmente
 */

require("dotenv").config();
const { initDatabase, getStats } = require("../database/db");

console.log("🔧 Inicializando base de datos...\n");

try {
  initDatabase();
  console.log("\n✅ Base de datos inicializada correctamente\n");

  const stats = getStats();
  console.log("📊 Estadísticas:");
  console.log(`   Total de briefs: ${stats.total_briefs}`);
  console.log(`   Total de archivos: ${stats.archivos_total}`);

  if (stats.ultimo_brief) {
    console.log(`   Último brief: ${stats.ultimo_brief.created_at}`);
  }

  console.log("\n✨ ¡Listo para usar!\n");
} catch (error) {
  console.error("❌ Error:", error.message);
  process.exit(1);
}
