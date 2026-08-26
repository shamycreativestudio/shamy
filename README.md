# Shamy Creative Studio

![Shamy Logo](public/assets/img/shamy-logotipo.svg)

Sitio web oficial de **Shamy Creative Studio** — Branding · Diseño Editorial · UX/UI · Motion.

## 🌐 Sitio web

**URL:** [https://shamy.vercel.app](https://shamy.vercel.app)

---

## 🛠️ Stack Tecnológico

| Capa | Tecnología |
|------|-----------|
| **Framework** | [Next.js 16](https://nextjs.org) (App Router + Turbopack) |
| **UI** | React 19 + TypeScript |
| **Animaciones** | Motion (`motion/react`) + Web Component `<glass-element>` propio |
| **Estilos** | CSS global con custom properties (dark/light mode) |
| **Fuentes** | Onest vía `next/font` (self-hosted) |
| **Imágenes** | `next/image` + WebP optimizado |
| **Idiomas** | ES/EN con cookie de servidor (sin flash de contenido) |
| **Hosting** | [Vercel](https://vercel.com) |

## 📁 Estructura del proyecto

```
shamy/
├── src/
│   ├── app/                    # App Router: páginas y layouts
│   │   ├── layout.tsx          # Layout raíz (metadata, tema e idioma desde cookies)
│   │   ├── page.tsx            # Home
│   │   ├── about/              # Sobre el estudio
│   │   ├── brief/              # Brief interactivo (en construcción)
│   │   ├── projects/[slug]/    # Detalle de proyecto (SSG + metadata dinámica)
│   │   ├── services/[slug]/    # Detalle de servicio (SSG + metadata dinámica)
│   │   ├── sitemap.ts          # Sitemap XML
│   │   └── robots.ts           # Robots.txt
│   ├── components/             # Navbar, Footer, LiquidGlass, CustomCursor...
│   └── data/                   # Proyectos, servicios, traducciones, metadatos de imagen
├── public/
│   ├── glass-element.js        # Web Component del efecto cristal líquido
│   ├── displacement-utils.js   # Generadores de filtros SVG
│   └── assets/img/portfolio/   # Imágenes WebP del portafolio
├── scripts/
│   └── convert-portfolio.mjs   # Conversión PNG → WebP con sharp
├── _legacy/                    # Versión antigua estática (solo referencia)
└── docs/                       # Documentación histórica
```

## ✨ Funcionalidades

- Portfolio con filmstrip infinito, filtros por categoría y páginas de detalle prerenderizadas
- Efecto *Liquid Glass* propio (Web Component con `feDisplacementMap`) con fallback blur para Safari/Firefox
- Cursor personalizado que se pausa en idle
- Tema oscuro/claro e idioma ES/EN persistidos en cookies → render correcto desde el servidor, sin FOUC
- SEO completo: Open Graph, sitemap, robots, metadatos por página
- Accesibilidad: `prefers-reduced-motion`, aria-labels con estado, HTML lang dinámico

## 🚀 Desarrollo Local

```powershell
# 1. Instalar dependencias
npm install

# 2. Servidor de desarrollo
npm run dev

# 3. Abrir http://localhost:3000
```

Otros comandos:

```powershell
npm run lint        # ESLint
npm run build       # Build de producción
npm start           # Servir build de producción
node scripts/convert-portfolio.mjs   # Reconvertir imágenes del portafolio a WebP
```

## 🚀 Despliegue

Vinculado a **Vercel** (proyecto `shamy`). El sitio se despliega automáticamente con cada push a la rama principal.

Variables de entorno opcionales en Vercel:

- `NEXT_PUBLIC_SITE_URL` — URL pública del sitio (por defecto `https://shamy.vercel.app`). La usa el sitemap, robots y los metadatos Open Graph.

> Las variables legacy (`NOTION_TOKEN`, `CLOUDINARY_*`, `ADMIN_*`) pertenecen solo al código en `_legacy/` y no son usadas por la app activa.

## 📄 Documentación

La documentación en `docs/` corresponde a la versión antigua estática; se conserva como referencia histórica.

---

© 2026 Shamy Creative Studio. Todos los derechos reservados.
