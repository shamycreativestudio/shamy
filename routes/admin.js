/**
 * Rutas de administración
 */

const express = require("express");
const router = express.Router();
const path = require("path");
const { db, getStats } = require("../database/db");

/**
 * GET /api/admin/panel
 * Servir panel de administración HTML
 */
router.get("/panel", (req, res) => {
  res.sendFile(path.join(__dirname, "../admin/panel.html"));
});

/**
 * GET /api/admin/stats
 * Obtener estadísticas
 */
router.get("/stats", (req, res) => {
  try {
    const stats = getStats();
    res.json(stats);
  } catch (error) {
    console.error("Error obteniendo estadísticas:", error);
    res.status(500).json({ error: "Error al obtener estadísticas" });
  }
});

module.exports = router;
