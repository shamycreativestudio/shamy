# Shamy] Creative Studio

![Shamy Logo](assets/img/shamy-logotipo.svg)

Sitio web oficial de **Shamy] Creative Studio** - Diseño de marca con propósito.

## 🌐 Sitio web

Visita: [https://Narex04.github.io/shamy](https://narex04.github.io/shamy/)

---

## 🚀 NUEVO: Backend en la Nube

El formulario de branding ahora envía datos a un **backend Node.js + Express** deployado en la nube.

### ✨ Características:

- ✅ **Formulario web** en GitHub Pages
- ✅ **Backend API** en Railway/Render
- ✅ **Base de datos SQLite** (migrable a PostgreSQL)
- ✅ **Panel de administración** con autenticación
- ✅ **Sincronización** local ↔ nube
- ✅ **Subida de archivos** (hasta 10 archivos/brief)

### 📖 Documentación completa:

- **[DEPLOY-AHORA.md](DEPLOY-AHORA.md)** - Pasos para deployment en 10 minutos
- **[SOLUCION-COMPLETA.md](SOLUCION-COMPLETA.md)** - Resumen de todos los cambios
- **[CHECKLIST-DEPLOYMENT.md](CHECKLIST-DEPLOYMENT.md)** - Checklist paso a paso
- **[DEPLOYMENT-NUBE.md](DEPLOYMENT-NUBE.md)** - Guía técnica completa
- **[BACKEND-README.md](BACKEND-README.md)** - Documentación del backend

---

## 📁 Estructura del proyecto

```
shamy/
├── index.html              # Página principal (landing)
├── assets/                 # Recursos compartidos
│   ├── css/
│   │   └── main.css       # Estilos de la página principal
│   └── img/               # Logos e imágenes globales
│
├── branding/              # Submarca: shamy] branding
│   ├── index.html         # Formulario de brief para clientes
│   ├── styles.css         # Estilos del formulario
│   ├── script.js          # Lógica del formulario + integración API
│   ├── config.js          # ⭐ Configuración automática local/producción
│   └── assets/            # Assets específicos de branding
│
├── server.js              # ⭐ Servidor Express con API REST
├── package.json           # ⭐ Dependencias Node.js
├── .env                   # ⭐ Variables de entorno (local)
│
├── database/              # ⭐ Base de datos
│   └── db.js              # Schema SQLite
│
├── routes/                # ⭐ API Endpoints
│   ├── briefs.js          # CRUD de briefs
│   └── admin.js           # Panel de administración
│
├── admin/                 # ⭐ Panel de administración
│   └── panel.html         # Dashboard con auth
│
├── uploads/               # ⭐ Archivos subidos
│   └── .gitkeep
│
├── scripts/               # ⭐ Scripts de sincronización
│   ├── sync-from-cloud.ps1  # Backup desde nube
│   └── sync-to-cloud.ps1    # Subir a nube
│
├── backups/               # ⭐ Backups locales
│   └── README.md
│
├── railway.json           # ⭐ Config para Railway
├── Procfile               # ⭐ Config para Heroku
├── render.yaml            # ⭐ Config para Render
└── .railwayignore         # ⭐ Exclusiones
```

_⭐ = Nuevos archivos del backend_

## 🎨 Servicios

### shamy] branding ✅

Estrategia y diseño de identidad de marca.

- Formulario de brief interactivo
- Guardado automático de progreso
- Exportación de datos en JSON
- **Ruta:** `/branding/`

### shamy] design (Próximamente)

Diseño gráfico y editorial.

### shamy] web (Próximamente)

Desarrollo web y experiencias digitales.

## 🚀 Despliegue en GitHub Pages

Este sitio está configurado para funcionar con GitHub Pages:

1. **Configuración del repositorio:**

   - Nombre: `shamy`
   - Branch: `main`
   - Carpeta: `/` (root)

2. **Acceso:**
   - URL principal: `https://Narex04.github.io/shamy/`
   - Brief de branding: `https://Narex04.github.io/shamy/branding/`

## 🛠️ Tecnologías

### Frontend:

- HTML5 semántico
- CSS3 (Custom Properties, Grid, Flexbox)
- JavaScript Vanilla (ES6+)
- Google Fonts: Onest
- SVG para logos e iconos

### Backend:

- **Node.js 16+** - Runtime de JavaScript
- **Express 4.18** - Framework web
- **SQLite (better-sqlite3)** - Base de datos embebida
- **Multer** - Manejo de archivos multipart/form-data
- **Helmet** - Seguridad HTTP headers
- **CORS** - Control de acceso cross-origin
- **express-rate-limit** - Rate limiting

### Deployment:

- **GitHub Pages** - Hosting frontend (gratis)
- **Railway / Render** - Hosting backend (gratis)
- **PowerShell** - Scripts de sincronización

## 📝 Características del formulario de branding

### Frontend:

- ✅ Wizard multi-paso (10 pasos)
- ✅ Validación en tiempo real
- ✅ Guardado automático en localStorage
- ✅ Exportación a JSON
- ✅ Diseño responsive
- ✅ Barra de progreso visual
- ✅ Animaciones suaves
- ✅ Accesibilidad (ARIA labels)
- ✅ Detección automática local/producción

### Backend:

- ✅ API REST con 8 endpoints
- ✅ Base de datos SQLite (migrable a PostgreSQL)
- ✅ Autenticación Basic Auth
- ✅ Panel de administración web
- ✅ Subida de archivos (hasta 10/brief, 10MB c/u)
- ✅ Rate limiting (10 req/15min)
- ✅ Estadísticas en tiempo real
- ✅ Filtrado por estado
- ✅ Sincronización local ↔ nube

## 🎯 Roadmap

### ✅ Completado:

- [x] Formulario de branding interactivo
- [x] Backend Node.js + Express
- [x] Base de datos SQLite
- [x] Panel de administración
- [x] API REST completa
- [x] Deployment en la nube (Railway/Render)
- [x] Sincronización local ↔ nube
- [x] Subida de archivos

### 🔄 En progreso:

- [ ] Migración a PostgreSQL
- [ ] Almacenamiento de archivos en Cloudinary
- [ ] Notificaciones por email

### 📅 Próximamente:

- [ ] Página principal completa con portfolio
- [ ] Sección shamy] design
- [ ] Sección shamy] web
- [ ] Blog/casos de estudio
- [ ] Modo oscuro
- [ ] Multiidioma (ES/EN)

---

## 🚀 Inicio Rápido

### Desarrollo Local:

```powershell
# 1. Clonar repositorio
git clone https://github.com/Narex04/shamy.git
cd shamy

# 2. Instalar dependencias
npm install

# 3. Configurar variables de entorno
cp .env.example .env
# Editar .env con tus valores

# 4. Iniciar servidor
npm run dev

# 5. Abrir en navegador
# Frontend: http://localhost:3000/branding/
# Panel Admin: http://localhost:3000/api/admin/panel
```

### Deployment en Railway:

Sigue la guía completa en **[DEPLOY-AHORA.md](DEPLOY-AHORA.md)**

---

## 📖 Documentación

- **[DEPLOY-AHORA.md](DEPLOY-AHORA.md)** - Deployment en 10 minutos
- **[SOLUCION-COMPLETA.md](SOLUCION-COMPLETA.md)** - Resumen completo
- **[CHECKLIST-DEPLOYMENT.md](CHECKLIST-DEPLOYMENT.md)** - Checklist paso a paso
- **[DEPLOYMENT-NUBE.md](DEPLOYMENT-NUBE.md)** - Guía técnica detallada
- **[BACKEND-README.md](BACKEND-README.md)** - Documentación del backend
- **[COMANDOS.md](COMANDOS.md)** - Comandos útiles

---

## 🔒 Seguridad

- ✅ HTTPS obligatorio en producción
- ✅ CORS configurado
- ✅ Helmet para headers seguros
- ✅ Rate limiting
- ✅ Autenticación Basic Auth
- ✅ Validación de archivos
- ✅ Variables de entorno (.env)

---

## 🤝 Contribuir

1. Fork el repositorio
2. Crea una rama: `git checkout -b feature/nueva-funcionalidad`
3. Commit cambios: `git commit -m 'feat: añadir nueva funcionalidad'`
4. Push: `git push origin feature/nueva-funcionalidad`
5. Abre un Pull Request

## 📄 Licencia

© 2025 Shamy Creative Studio. Todos los derechos reservados.

---

**Contacto:** [Tu email/contacto aquí]
**Versión:** 2.0.0 (Backend + Cloud Deployment)
**Última actualización:** Enero 2025
