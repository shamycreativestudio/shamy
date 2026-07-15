# Estructura del Repositorio Shamy

```
shamy/
│
├── index.html                   # Página principal (portfolio + servicios)
├── vercel.json                  # Configuración Vercel
├── package.json                 # Dependencias Node.js
├── .gitignore
│
├── assets/                      # Recursos globales
│   ├── css/
│   │   └── main.css            # Estilos de la página principal
│   ├── js/
│   │   ├── ui-core.js          # Theme + Idioma + Animaciones
│   │   └── portfolio.js        # Proyectos, filtros, modal
│   └── img/
│       ├── favicon.svg          # Favicon blanco sobre fondo oscuro
│       ├── shamy-isotipo.svg    # Logo "s]"
│       ├── shamy-logotipo.svg   # Logo "shamy]" negro
│       ├── shamy-logotipo-white.svg
│       └── portfolio/           # Imágenes de cada proyecto
│           ├── branding/        # 11 proyectos de branding
│           ├── coding/          # 1 proyecto de coding
│           └── animating/       # 1 proyecto de animación
│
├── branding/                    # Submarca: shamy] branding
│   ├── index.html              # Formulario wizard 10 pasos
│   ├── styles.css              # Estilos del formulario
│   ├── script.js               # Lógica del wizard + fetch a API
│   ├── config.js               # Detecta localhost vs producción
│   └── assets/                 # Assets del formulario
│
├── api/                         # Vercel Serverless Functions
│   ├── submit.js               # Recibe brief → Notion + Cloudinary
│   └── briefs.js               # CRUD de briefs con auth
│
├── docs/                        # Documentación
│   ├── COMANDOS.md             # Comandos PowerShell
│   ├── ESTRUCTURA.md           # Este archivo
│   ├── GUIA-COMPLETA-USO.md    # Manual de uso completo
│   ├── INICIO-RAPIDO.md        # Inicio rápido
│   └── INSTALACION.md          # Guía de instalación
│
├── .vercel/                     # Vinculación Vercel (no trackear)
└── node_modules/                # Dependencias (no trackear)
```

## URLs

| Sección | URL |
|---------|-----|
| Pagina principal | `https://shamy.vercel.app` |
| Brief de branding | `https://shamy.vercel.app/branding/` |

## Estado actual

### Completado
- Pagina principal con portfolio interactivo
- Filtros por categoria (Branding, Coding, Animating)
- Modal de proyecto con galeria imagenes/video
- Tema oscuro/claro con persistencia
- Traduccion ES/EN
- Formulario wizard 10 pasos con validacion
- Guardado automatico en localStorage
- Subida de archivos drag & drop
- Backend serverless en Vercel (Notion + Cloudinary)
- Favicon funcional

### Por hacer
- [ ] Seccion shamy] design
- [ ] Seccion shamy] web
- [ ] Blog / casos de estudio

---

© 2025 Shamy Creative Studio
