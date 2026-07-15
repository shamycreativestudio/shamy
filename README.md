# Shamy] Creative Studio

![Shamy Logo](assets/img/shamy-logotipo.svg)

Sitio web oficial de **Shamy] Creative Studio** — Diseño de marca con propósito.

## 🌐 Sitio web

**URL:** [https://shamy.vercel.app](https://shamy.vercel.app)

---

## 📁 Estructura del proyecto

```
shamy/
├── index.html                  # Página principal (portfolio + servicios)
├── vercel.json                 # Configuración Vercel
├── package.json                # Dependencias Node.js
├── .env                        # Variables de entorno (local)
│
├── assets/                     # Recursos compartidos
│   ├── css/
│   │   └── main.css           # Estilos de la página principal
│   ├── js/
│   │   ├── ui-core.js         # Theme (dark/light) + Idioma (ES/EN)
│   │   └── portfolio.js       # Grid de proyectos + modal con galería
│   └── img/                   # Logos, favicon, imágenes del portfolio
│       ├── favicon.svg
│       ├── shamy-logotipo.svg
│       ├── shamy-logotipo-white.svg
│       └── portfolio/         # Imágenes de cada proyecto
│
├── branding/                   # Submarca: shamy] branding
│   ├── index.html             # Formulario wizard 10 pasos
│   ├── styles.css             # Estilos del formulario
│   ├── script.js              # Lógica del wizard + fetch a API
│   └── config.js              # Configuración local/producción
│
├── api/                        # Vercel Serverless Functions
│   ├── submit.js              # Recibe brief → Notion + Cloudinary
│   └── briefs.js              # CRUD de briefs (admin)
│
├── .vercel/                    # Vinculación con Vercel (no trackear)
└── docs/                       # Documentación (ver abajo)
    ├── COMANDOS.md            # Comandos PowerShell útiles
    ├── ESTRUCTURA.md          # Estructura de carpetas detallada
    ├── INSTALACION.md         # Guía de instalación local
    └── INICIO-RAPIDO.md       # Inicio rápido
```

## 🛠️ Stack Tecnológico

| Capa | Tecnología |
|------|-----------|
| **Frontend** | HTML5 + CSS3 + Vanilla JS (ES6+) |
| **Hosting** | [Vercel](https://vercel.com) |
| **Backend** | Vercel Serverless Functions (Node.js) |
| **Base de datos** | Notion API ([@notionhq/client](https://www.npmjs.com/package/@notionhq/client)) |
| **Imágenes** | [Cloudinary](https://cloudinary.com) |
| **Fuentes** | Google Fonts: Onest |
| **Idiomas** | ES/EN con sistema de traducciones |
| **Tema** | Dark/Light mode con CSS custom properties |

## ✨ Funcionalidades

### Página principal (`index.html`)
- Portfolio interactivo con filtros por categoría (Branding, Coding, Animating)
- Modal de proyecto con galería de imágenes y video
- Carrusel en miniatura en cada tarjeta
- Animaciones con IntersectionObserver
- Tema oscuro/claro con persistencia en localStorage
- Traducción ES/EN completa

### Formulario de branding (`branding/`)
- Wizard de 10 pasos con barra de progreso
- Validación en tiempo real
- Subida de archivos drag & drop
- Guardado automático en localStorage
- Resumen previo al envío
- Los datos se envían a Notion vía API serverless

### Backend Serverless (`api/`)
- `POST /api/submit` — Recibe el formulario, sube imágenes a Cloudinary y crea entrada en Notion
- `GET /api/briefs` — Lista briefs (admin, con autenticación Basic Auth)
- `DELETE /api/briefs?id=...` — Elimina briefs

## 🚀 Desarrollo Local

```powershell
# 1. Clonar
git clone https://github.com/shamycreativestudio/shamy.git
cd shamy

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor local de Vercel
npx vercel dev

# 4. Abrir en navegador
# http://localhost:3000
```

## 🚀 Despliegue

El sitio se despliega automáticamente en **Vercel** con cada push a `main`:

```bash
git add .
git commit -m "descripción del cambio"
git push origin main
```

Variables de entorno requeridas en Vercel:
- `NOTION_TOKEN` — Token de integración de Notion
- `NOTION_DATABASE_ID` — ID de la base de datos en Notion
- `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`
- `ADMIN_USERNAME`, `ADMIN_PASSWORD` — Para el panel admin

## 📄 Documentación

- **[COMANDOS.md](docs/COMANDOS.md)** — Comandos PowerShell útiles
- **[INSTALACION.md](docs/INSTALACION.md)** — Guía de instalación local
- **[ESTRUCTURA.md](docs/ESTRUCTURA.md)** — Estructura detallada del proyecto
- **[GUIA-COMPLETA-USO.md](docs/GUIA-COMPLETA-USO.md)** — Manual de uso completo

---

© 2025 Shamy Creative Studio. Todos los derechos reservados.
