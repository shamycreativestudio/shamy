/**
 * Configuración y gestión de base de datos SQLite
 */

const Database = require("better-sqlite3");
const path = require("path");
const fs = require("fs");

const DB_PATH = process.env.DB_PATH || path.join(__dirname, "briefs.db");

// Asegurar que el directorio existe
const dbDir = path.dirname(DB_PATH);
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

// Crear conexión a la base de datos
const db = new Database(DB_PATH, {
  verbose: process.env.NODE_ENV === "development" ? console.log : null,
});

// Habilitar foreign keys
db.pragma("foreign_keys = ON");

/**
 * Inicializar esquema de base de datos
 */
function initDatabase() {
  // Tabla principal de briefs
  db.exec(`
    CREATE TABLE IF NOT EXISTS briefs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      
      -- Datos básicos
      empresa_nombre TEXT NOT NULL,
      contacto_nombre_cargo TEXT NOT NULL,
      contacto_email TEXT NOT NULL,
      contacto_telefono TEXT NOT NULL,
      ciudad TEXT,
      descripcion_breve TEXT,
      fecha_entrega_ideal TEXT,
      
      -- Necesidades y objetivos
      necesidades_principales TEXT, -- JSON array
      objetivo_principal TEXT,
      objetivos_secundarios TEXT, -- JSON array
      mediciones TEXT, -- JSON array
      cobertura TEXT, -- JSON array
      
      -- Público objetivo
      publico_clientes TEXT,
      rango_edad TEXT,
      publico_problema TEXT,
      publico_eleccion TEXT,
      estilo TEXT,
      
      -- Competencia
      competidores TEXT, -- JSON array
      competencia_ventajas TEXT,
      competencia_mejoras TEXT,
      marca_inspiracion TEXT,
      
      -- Rediseño (condicional)
      es_redisenio BOOLEAN DEFAULT 0,
      redisenio_motivos TEXT, -- JSON
      redisenio_mantener TEXT, -- JSON
      redisenio_cambiar TEXT,
      
      -- Entregables
      entregables TEXT, -- JSON array
      necesita_web TEXT,
      hosting_dominio TEXT,
      necesita_foto_video TEXT,
      lista_foto_video TEXT,
      usos_marca TEXT, -- JSON array
      
      -- Tiempo y presupuesto
      fecha_limite_fija TEXT,
      fecha_limite TEXT,
      presupuesto TEXT,
      prioridad TEXT,
      
      -- Aprobaciones
      decision_final TEXT,
      personas_revisan INTEGER,
      contacto_preferido TEXT,
      tiempo_respuesta TEXT,
      
      -- Riesgos
      riesgos TEXT,
      comentarios_finales TEXT,
      nda TEXT,
      
      -- Confirmaciones
      confirm_veracidad BOOLEAN DEFAULT 0,
      confirm_datos BOOLEAN DEFAULT 0,
      confirm_derechos BOOLEAN DEFAULT 0,
      opt_in_recursos BOOLEAN DEFAULT 0,
      
      -- Metadatos
      data_json TEXT, -- JSON completo del formulario
      ip_address TEXT,
      user_agent TEXT,
      
      -- Estado
      estado TEXT DEFAULT 'nuevo', -- nuevo, en_revision, aprobado, rechazado
      notas_admin TEXT,
      
      -- Timestamps
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      
      UNIQUE(contacto_email, created_at)
    );
  `);

  // Tabla de archivos adjuntos
  db.exec(`
    CREATE TABLE IF NOT EXISTS brief_files (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      brief_id INTEGER NOT NULL,
      original_name TEXT NOT NULL,
      stored_name TEXT NOT NULL,
      file_path TEXT NOT NULL,
      file_size INTEGER,
      mime_type TEXT,
      uploaded_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      
      FOREIGN KEY (brief_id) REFERENCES briefs(id) ON DELETE CASCADE
    );
  `);

  // Índices para optimizar búsquedas
  db.exec(`
    CREATE INDEX IF NOT EXISTS idx_briefs_email ON briefs(contacto_email);
    CREATE INDEX IF NOT EXISTS idx_briefs_estado ON briefs(estado);
    CREATE INDEX IF NOT EXISTS idx_briefs_created ON briefs(created_at DESC);
    CREATE INDEX IF NOT EXISTS idx_files_brief ON brief_files(brief_id);
  `);

  // Trigger para actualizar updated_at
  db.exec(`
    CREATE TRIGGER IF NOT EXISTS update_briefs_timestamp 
    AFTER UPDATE ON briefs
    BEGIN
      UPDATE briefs SET updated_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
    END;
  `);

  console.log("✅ Base de datos inicializada correctamente");
}

/**
 * Obtener estadísticas de la base de datos
 */
function getStats() {
  const stats = {
    total_briefs: db.prepare("SELECT COUNT(*) as count FROM briefs").get()
      .count,
    briefs_por_estado: db
      .prepare(
        `
      SELECT estado, COUNT(*) as count 
      FROM briefs 
      GROUP BY estado
    `
      )
      .all(),
    archivos_total: db
      .prepare("SELECT COUNT(*) as count FROM brief_files")
      .get().count,
    ultimo_brief: db
      .prepare(
        `
      SELECT created_at 
      FROM briefs 
      ORDER BY created_at DESC 
      LIMIT 1
    `
      )
      .get(),
  };

  return stats;
}

// Inicializar la base de datos al cargar el módulo
initDatabase();

module.exports = {
  db,
  initDatabase,
  getStats,
};
