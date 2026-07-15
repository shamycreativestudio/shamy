# 📋 GUÍA COMPLETA: Sistema Shamy - Manual de Uso y Mantenimiento

> **Última actualización:** Julio 2026  
> **Versión:** 2.0  
> **Estado:** ✅ Sistema desplegado y funcionando en Vercel

> ⚠️ **Nota:** Este documento fue migrado de la arquitectura anterior (GitHub Pages + Railway/Fly.io).
> La arquitectura actual es **Vercel + Notion API + Cloudinary**.
> Si encuentras referencias a GitHub Pages, Railway, Render o Fly.io, considera que están obsoletas.

---

## 📑 ÍNDICE

1. [Enlaces Principales](#-1-enlaces-principales)
2. [Cómo Funciona el Sistema](#-2-cómo-funciona-el-sistema)
3. [Flujo de Trabajo Completo](#-3-flujo-de-trabajo-completo)
4. [Panel de Administración](#-4-panel-de-administración)
5. [Actualizar el sitio (Vercel)](#-5-actualizar-el-sitio-vercel)
7. [Ejemplos de Mejoras Comunes](#-7-ejemplos-de-mejoras-comunes)
8. [Gestión de Credenciales](#-8-gestión-de-credenciales)
9. [Comandos Útiles](#-9-comandos-útiles)
10. [Resolución de Problemas](#-10-resolución-de-problemas)
11. [Arquitectura Técnica](#-11-arquitectura-técnica)

---

## 🎯 1. ENLACES PRINCIPALES

### **Página principal:**

```
https://shamy.vercel.app
```

### **Formulario para Clientes:**

```
https://shamy.vercel.app/branding/
```

**Uso:**

- ✅ Envía este enlace a tus clientes por email, WhatsApp o redes sociales
- ✅ El cliente llena el formulario con los detalles de su proyecto
- ✅ Al enviar, la información se guarda automáticamente en Notion
- ✅ Puedes revisar todos los briefs desde la API de administración

---

### **API de Administración:**

```
https://shamy.vercel.app/api/briefs
```

**Credenciales actuales:**

- **Usuario:** `admin`
- **Contraseña:** `shamy2025`

**Funcionalidades:**

- ✅ Ver todos los briefs recibidos en tiempo real
- ✅ Leer detalles completos de cada proyecto
- ✅ Exportar información como PDF o Excel
- ✅ Eliminar briefs antiguos o completados
- ✅ Gestionar cartera de proyectos de clientes

---

### **Backend API (Solo para desarrollo):**

```
https://shamycreativestudio.fly.dev/
```

**Endpoints disponibles:**

- `GET /` → Estado del servidor
- `GET /api/briefs` → Obtener todos los briefs (requiere auth)
- `POST /api/briefs` → Crear nuevo brief (usado por el formulario)
- `DELETE /api/briefs/:id` → Eliminar brief (requiere auth)
- `GET /api/admin/panel` → Panel de administración HTML

---

## 🔄 2. CÓMO FUNCIONA EL SISTEMA

### **Arquitectura General:**

```
┌─────────────────────────────────────────────────────┐
│  CLIENTE                                            │
│  (Navegador web)                                    │
└────────────────┬────────────────────────────────────┘
                 │
                 │ 1. Visita el formulario
                 │
                 ▼
┌─────────────────────────────────────────────────────┐
│  FRONTEND - Vercel                                  │
│  https://shamy.vercel.app                           │
│                                                      │
│  • index.html  → Página principal + portfolio       │
│  • branding/   → Formulario de brief                │
│  • ui-core.js  → Theme + Idioma                     │
│  • portfolio.js → Galería de proyectos              │
└────────────────┬────────────────────────────────────┘
                 │
                 │ 2. Envía datos (POST /api/submit)
                 │
                 ▼
┌─────────────────────────────────────────────────────┐
│  BACKEND - Vercel Serverless Functions              │
│  https://shamy.vercel.app/api/                      │
│                                                      │
│  • submit.js  → Recibe brief, sube imágenes         │
│  • briefs.js  → CRUD de briefs (admin)              │
└────────────────┬────────────────────────────────────┘
                 │
                 ├── 3a. Guarda en Notion
                 │
                 ▼
┌─────────────────────────────────────────────────────┐
│  BASE DE DATOS - Notion API                         │
│  • Briefs guardados como páginas en Notion          │
│  • Consultables desde cualquier lugar               │
└─────────────────────────────────────────────────────┘
                 │
                 ├── 3b. Imágenes a Cloudinary
                 │
                 ▼
┌─────────────────────────────────────────────────────┐
│  IMÁGENES - Cloudinary                              │
│  • Archivos subidos por el cliente                  │
│  • Almacenamiento en la nube                        │
└─────────────────────────────────────────────────────┘
```

---

## 🎬 3. FLUJO DE TRABAJO COMPLETO

### **Paso 1: Cliente recibe el enlace**

```
Tú → Envías por WhatsApp/Email → Cliente
     "Hola, llena este formulario para tu proyecto:
      https://shamy.vercel.app/branding/"
```

### **Paso 2: Cliente llena el formulario**

El cliente ingresa:

- Nombre completo
- Email de contacto
- Nombre de la empresa/proyecto
- Descripción del proyecto
- Industria/sector
- Público objetivo
- Presupuesto aproximado
- Timeline deseado
- Referencias visuales (opcional)

### **Paso 3: Sistema procesa y guarda**

```javascript
// Automático - script.js
fetch("https://shamycreativestudio.fly.dev/api/briefs", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});
```

### **Paso 4: Tú revisas en el panel**

1. Abres: `https://shamycreativestudio.fly.dev/api/admin/panel`
2. Ingresas: `admin` / `shamy2025`
3. Ves lista de todos los briefs recibidos
4. Haces clic en cualquier brief para ver detalles completos

### **Paso 5: Trabajas en el proyecto**

- Usas la información del brief para crear la marca
- Contactas al cliente con la info que proporcionó
- Presentas propuestas y avances

### **Paso 6: Finalizas y limpias**

- Proyecto completado ✅
- Eliminas el brief del panel (opcional)
- Listo para recibir nuevos clientes

---

## 👨‍💼 4. PANEL DE ADMINISTRACIÓN

### **Acceso:**

```
URL: https://shamycreativestudio.fly.dev/api/admin/panel
Usuario: admin
Contraseña: shamy2025
```

### **Funcionalidades disponibles:**

#### **4.1 Listar Briefs**

- Ver todos los briefs en orden cronológico (más recientes primero)
- Información resumida: Nombre, empresa, fecha
- Estado visual de cada brief

#### **4.2 Ver Detalles**

- Click en cualquier brief para expandir
- Ver todos los campos completos
- Información de contacto directa
- Fecha y hora exacta de envío

#### **4.3 Exportar Datos**

```javascript
// Exportar como JSON
GET /api/briefs?format=json

// Próximamente: PDF, Excel, CSV
```

#### **4.4 Eliminar Briefs**

- Eliminar briefs antiguos o spam
- Limpieza de base de datos
- Acción irreversible (confirmar antes)

#### **4.5 Buscar y Filtrar**

```javascript
// Por empresa
GET /api/briefs?empresa=nombre

// Por fecha
GET /api/briefs?fecha=2025-11-12

// Por industria
GET /api/briefs?industria=tecnologia
```

---

## 🌐 5. ACTUALIZAR EL SITIO (Vercel)

### **¿Qué es el Frontend?**

Todo el sitio (página principal + formulario) está en `https://shamy.vercel.app`

### **Archivos principales:**

```
branding/               → Formulario de branding
├── index.html          → Estructura HTML del formulario
├── styles.css          → Estilos, colores, diseño
├── script.js           → Lógica, validación, envío
└── config.js           → Configuración (URL del API)

assets/js/              → JavaScript del sitio principal
├── ui-core.js          → Theme (dark/light) + Idioma (ES/EN)
└── portfolio.js        → Proyectos, filtros, galería

api/                    → Vercel Serverless Functions
├── submit.js           → Recibe brief → Notion + Cloudinary
└── briefs.js           → CRUD de briefs (admin)
```

### **Proceso de actualización:**

#### **5.1 Hacer cambios localmente**

```bash
# Abrir VS Code en tu proyecto
cd "d:\Trabajo\Shamy\Web\shamy"
code .

# Ejemplos de archivos que puedes editar:
# - index.html (página principal)
# - branding/index.html (formulario)
# - assets/css/main.css (estilos)
# - assets/js/portfolio.js (portfolio)
# - api/submit.js (backend)
```

#### **5.2 Probar cambios localmente**

```bash
# Opción A: Abrir directo en navegador
# Abre d:\Trabajo\Shamy\Web\shamy\index.html

# Opción B: Servidor local Vercel (simula producción)
npx vercel dev
# Abre http://localhost:3000
```

#### **5.3 Subir a GitHub (despliegue automático)**

```bash
git add .
git commit -m "Descripción de los cambios"
git push origin main
```

✅ **Vercel se redeploya automáticamente** en 1-2 minutos.
✅ La web se actualiza sola.

### **Ejemplos comunes de cambios:**

#### **Cambiar colores del sitio principal:**

```css
/* assets/css/main.css */
:root {
  --bg: #ffffff;
  --text: #1a1a1a;
  --muted: #666666;
  --accent: #000000;
}
```

#### **Agregar/quitar proyectos del portfolio:**

```javascript
// assets/js/portfolio.js - Agregar nuevo objeto al array projects
{
  id: 14,
  titleKey: "project.branding.miproject.title",
  descKey: "project.branding.miproject.desc",
  category: "branding",
  year: 2026,
  coverImage: "assets/img/portfolio/branding/014_miproject/00.png",
  gallery: [
    "assets/img/portfolio/branding/014_miproject/00.png",
    "assets/img/portfolio/branding/014_miproject/01.png",
  ],
  allowExpand: true,
}
```

#### **Agregar traducciones (ES/EN):**

```javascript
// assets/js/ui-core.js - Dentro del objeto translations
// En la sección "es":
"hero.title": "<span class='line'>CREAMOS</span><span class='line'>EXPERIENCIAS</span><span class='line'>DIGITALES</span>",

// En la sección "en":
"hero.title": "<span class='line'>WE CRAFT</span><span class='line'>DIGITAL</span><span class='line'>EXPERIENCES</span>",
```

#### **Modificar el backend (Serverless Functions):**

```javascript
// api/submit.js - Modificar lógica de envío
// Ejemplo: cambiar validación o agregar campos
```

---

## 💡 6. EJEMPLOS DE MEJORAS COMUNES

### **7.1 Personalizar colores de marca**

```css
/* branding/styles.css */
:root {
  /* Colores Shamy actuales */
  --accent: #000000;
  --accent-rgb: 0, 0, 0;

  /* Cambiar a tus colores de marca */
  --accent: #ff6b35; /* Naranja vibrante */
  --accent-rgb: 255, 107, 53;

  /* O usa variables personalizadas */
  --primary: #2c3e50; /* Azul oscuro */
  --secondary: #e74c3c; /* Rojo coral */
  --success: #27ae60; /* Verde */
  --warning: #f39c12; /* Amarillo */
}
```

### **7.2 Agregar logo personalizado**

```html
<!-- branding/index.html -->
<div class="logo-container">
  <img src="assets/tu-logo.svg" <!-- ← Cambiar nombre del archivo -- />
  alt="Tu Marca" class="main-logo" />
</div>
```

```bash
# Subir tu logo
# 1. Copiar tu-logo.svg a branding/assets/
# 2. Git add, commit, push
git add branding/assets/tu-logo.svg
git commit -m "Agrego logo personalizado"
git push origin main
```

### **7.3 Cambiar idioma a inglés**

```html
<!-- branding/index.html -->
<html lang="en">
  <!-- Cambiar "es" por "en" -->
  <head>
    <title>Project Brief Form - Your Brand</title>
    <!-- ... -->
  </head>
  <body>
    <h1>Tell us about your project</h1>
    <label for="nombre">Full Name</label>
    <!-- ... traducir todos los textos -->
  </body>
</html>
```

### **7.4 Agregar validación de email personalizada**

```javascript
// branding/script.js
function validarEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Bloquear emails temporales
  const dominiosProhibidos = ["tempmail.com", "10minutemail.com"];
  const dominio = email.split("@")[1];

  if (dominiosProhibidos.includes(dominio)) {
    return false;
  }

  return regex.test(email);
}
```

### **7.5 Agregar notificación por email (futuro)**

```javascript
// routes/briefs.js
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
  // ... guardar brief en BD ...

  // Enviar notificación por email
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: "noreply@shamy.com",
    to: "tu@email.com",
    subject: `Nuevo brief: ${req.body.empresa}`,
    html: `<p>Tienes un nuevo proyecto de ${req.body.nombre}</p>`,
  });

  // ... resto del código ...
});
```

### **7.6 Agregar Google Analytics**

```html
<!-- branding/index.html - Antes de </head> -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-XXXXXXXXXX"); // Tu ID de Analytics
</script>
```

---

## 🔐 8. GESTIÓN DE CREDENCIALES

### **8.1 Cambiar credenciales del admin**

```bash
# Cambiar usuario
C:\Users\shamu\.fly\bin\flyctl.exe secrets set ADMIN_USERNAME=nuevo_usuario --app shamycreativestudio

# Cambiar contraseña
C:\Users\shamu\.fly\bin\flyctl.exe secrets set ADMIN_PASSWORD=nueva_contraseña_segura --app shamycreativestudio

# Ver secretos configurados (sin mostrar valores)
C:\Users\shamu\.fly\bin\flyctl.exe secrets list --app shamycreativestudio
```

### **8.2 Variables de entorno actuales**

```bash
# En Fly.io
NODE_ENV=production
ADMIN_USERNAME=admin
ADMIN_PASSWORD=shamy2025
CORS_ORIGIN=https://shamycreativestudio.github.io

# En local (.env)
NODE_ENV=development
PORT=3000
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123
CORS_ORIGIN=http://localhost:5500
```

### **8.3 Configurar nuevo secreto**

```bash
# Ejemplo: Agregar clave de API externa
C:\Users\shamu\.fly\bin\flyctl.exe secrets set API_KEY=tu-clave-secreta --app shamycreativestudio

# Usar en el código
const apiKey = process.env.API_KEY;
```

---

## ⚙️ 9. COMANDOS ÚTILES

### **9.1 Git (Control de versiones)**

```bash
# Ver estado de archivos modificados
git status

# Agregar todos los cambios
git add .

# Agregar archivo específico
git add branding/styles.css

# Hacer commit con mensaje
git commit -m "Descripción del cambio"

# Subir a GitHub
git push origin main

# Ver historial de commits
git log --oneline

# Deshacer último commit (mantiene cambios)
git reset --soft HEAD~1

# Ver diferencias antes de commit
git diff
```

### **9.2 Fly.io (Despliegue y monitoreo)**

```bash
# Desplegar nueva versión
C:\Users\shamu\.fly\bin\flyctl.exe deploy --app shamycreativestudio

# Ver logs en tiempo real
C:\Users\shamu\.fly\bin\flyctl.exe logs --app shamycreativestudio

# Ver estado de la app
C:\Users\shamu\.fly\bin\flyctl.exe status --app shamycreativestudio

# Ver información de la máquina
C:\Users\shamu\.fly\bin\flyctl.exe machine list --app shamycreativestudio

# Reiniciar la aplicación
C:\Users\shamu\.fly\bin\flyctl.exe machine restart --app shamycreativestudio

# Conectar por SSH al servidor
C:\Users\shamu\.fly\bin\flyctl.exe ssh console --app shamycreativestudio

# Ver configuración actual
C:\Users\shamu\.fly\bin\flyctl.exe config show --app shamycreativestudio

# Ver uso de recursos
C:\Users\shamu\.fly\bin\flyctl.exe machine status --app shamycreativestudio

# Escalar recursos (si es necesario)
C:\Users\shamu\.fly\bin\flyctl.exe scale vm shared-cpu-2x --app shamycreativestudio
```

### **9.3 NPM (Node.js)**

```bash
# Instalar dependencias
npm install

# Iniciar servidor local
npm run dev

# Iniciar en producción
npm start

# Agregar nueva dependencia
npm install nombre-del-paquete

# Agregar dependencia de desarrollo
npm install --save-dev nombre-del-paquete

# Actualizar dependencias
npm update

# Ver dependencias instaladas
npm list

# Limpiar caché
npm cache clean --force
```

### **9.4 Base de datos (SQLite)**

```bash
# Conectar a la base de datos en Fly.io
C:\Users\shamu\.fly\bin\flyctl.exe ssh console --app shamycreativestudio

# Dentro del servidor
sqlite3 /data/briefs.db

# Comandos SQLite útiles:
.tables                    # Listar tablas
.schema briefs             # Ver estructura de tabla
SELECT * FROM briefs;      # Ver todos los briefs
SELECT COUNT(*) FROM briefs;  # Contar briefs
.exit                      # Salir de SQLite
```

---

## 🚨 10. RESOLUCIÓN DE PROBLEMAS

### **10.1 El formulario no envía datos**

**Síntomas:**

- Click en "Enviar" pero no pasa nada
- Mensaje de error en consola del navegador

**Solución:**

1. **Verificar URL del backend:**

```javascript
// branding/config.js
const API_URL = "https://shamycreativestudio.fly.dev"; // ← Verificar que sea correcta
```

2. **Verificar CORS:**

```bash
# Ver configuración de CORS
C:\Users\shamu\.fly\bin\flyctl.exe secrets list --app shamycreativestudio

# Debe incluir:
CORS_ORIGIN=https://shamycreativestudio.github.io
```

3. **Ver errores en consola:**

```javascript
// Abrir DevTools (F12)
// Ir a Console
// Buscar errores en rojo
```

### **10.2 Panel admin no carga briefs**

**Síntomas:**

- Panel admin muestra "Cargando..."
- Lista de briefs vacía

**Solución:**

1. **Verificar que el backend está funcionando:**

```bash
# Ver logs
C:\Users\shamu\.fly\bin\flyctl.exe logs --app shamycreativestudio

# Debe mostrar:
# ✅ Base de datos inicializada correctamente
# ✅ Servidor corriendo
```

2. **Verificar autenticación:**

```javascript
// Revisar que las credenciales sean correctas
Usuario: admin;
Contraseña: shamy2025;
```

3. **Limpiar caché del navegador:**

```
Ctrl+Shift+Del → Borrar caché e historial
```

### **10.3 Aplicación no despliega en Fly.io**

**Síntomas:**

- `flyctl deploy` falla
- Error durante el build

**Solución:**

1. **Ver logs de build:**

```bash
C:\Users\shamu\.fly\bin\flyctl.exe logs --app shamycreativestudio
```

2. **Verificar Dockerfile:**

```dockerfile
# Debe estar en la raíz del proyecto
# Verificar que tenga esta estructura:
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 8080
CMD ["node", "server.js"]
```

3. **Reconstruir con --no-cache:**

```bash
C:\Users\shamu\.fly\bin\flyctl.exe deploy --no-cache --app shamycreativestudio
```

### **10.4 Base de datos se reinicia/pierde datos**

**Síntomas:**

- Briefs desaparecen después de reiniciar
- Base de datos vuelve a estado inicial

**Solución:**

1. **Verificar volumen persistente:**

```bash
# Ver volúmenes
C:\Users\shamu\.fly\bin\flyctl.exe volumes list --app shamycreativestudio

# Debe mostrar:
# shamy_data | 1GB | iad
```

2. **Verificar montaje en fly.toml:**

```toml
[mounts]
  source = "shamy_data"
  destination = "/data"  # ← Debe ser "/data" no "/app/database"
```

3. **Verificar ruta en database/db.js:**

```javascript
const DB_PATH =
  process.env.NODE_ENV === "production"
    ? "/data/briefs.db" // ← Producción usa /data
    : path.join(__dirname, "briefs.db"); // ← Local usa ./database
```

### **10.5 Error 503 / Aplicación no responde**

**Síntomas:**

- URL muestra "Service Unavailable"
- Backend no responde a peticiones

**Solución:**

1. **Verificar estado:**

```bash
C:\Users\shamu\.fly\bin\flyctl.exe status --app shamycreativestudio
```

2. **Reiniciar aplicación:**

```bash
C:\Users\shamu\.fly\bin\flyctl.exe machine restart --app shamycreativestudio
```

3. **Ver máquinas:**

```bash
C:\Users\shamu\.fly\bin\flyctl.exe machine list --app shamycreativestudio

# Si la máquina está stopped:
C:\Users\shamu\.fly\bin\flyctl.exe machine start <machine-id> --app shamycreativestudio
```

### **10.6 Cambios no se reflejan en GitHub Pages**

**Síntomas:**

- Haces push pero no se ven cambios
- Página sigue mostrando versión antigua

**Solución:**

1. **Verificar que el push fue exitoso:**

```bash
git log --oneline  # Ver último commit
```

2. **Esperar 1-2 minutos** (GitHub Pages tarda en desplegar)

3. **Limpiar caché del navegador:**

```
Ctrl+Shift+R (hard refresh)
```

4. **Verificar en GitHub:**

```
https://github.com/shamycreativestudio/shamy/actions
# Ver el estado del deployment
```

---

## 🏗️ 11. ARQUITECTURA TÉCNICA

### **11.1 Stack Tecnológico**

```
Frontend:
├── HTML5          → Estructura semántica
├── CSS3           → Estilos (CSS Variables, Grid, Flexbox)
├── JavaScript     → Vanilla JS (sin frameworks)
└── Vercel         → Hosting y CDN

Backend:
├── Node.js 18     → Runtime
├── Vercel Functions → Serverless (api/submit.js, api/briefs.js)
├── Notion API     → Base de datos (@notionhq/client)
├── Cloudinary     → Almacenamiento de imágenes
└── Basic Auth     → Autenticación admin

Infraestructura:
├── Git/GitHub     → Control de versiones
├── Vercel         → Hosting + CI/CD automático
├── Notion         → Base de datos (no-code)
└── Cloudinary     → Imágenes en la nube
```

### **11.2 Estructura de Datos (Notion)**

Los briefs se guardan como páginas en una base de datos de Notion con las siguientes propiedades:

- **Nombre** (title) — Nombre del contacto/empresa
- **Email** (email) — Email de contacto
- **Empresa** (rich_text) — Nombre de la empresa
- **Teléfono** (phone) — Teléfono de contacto
- **Presupuesto** (select) — Rango de presupuesto
- **Estado** (select) — Nuevo / En progreso / Completado
- **Contenido completo** (blocks) — Texto estructurado con todos los datos del brief
- **Imágenes** (blocks) — Imágenes de rediseño y referencias subidas a Cloudinary

### **11.3 Flujo de Datos Detallado**

```
1. CLIENTE LLENA FORMULARIO
   ├── Usuario ingresa datos en branding/index.html
   ├── JavaScript valida campos en tiempo real
   ├── Sube archivos (drag & drop)
   └── Click en "Enviar" → evento submit

2. FRONTEND PROCESA DATOS
   ├── script.js captura datos del formulario
   ├── Convierte archivos a Base64
   ├── Construye payload JSON
   └── fetch() POST a /api/submit

3. VERCEL SERVERLESS FUNCTION (api/submit.js)
   ├── Recibe el payload
   ├── Sube imágenes a Cloudinary → obtiene URLs
   ├── Prepara contenido estructurado
   └── Crea página en Notion con datos + URLs de imágenes

4. RESPUESTA AL CLIENTE
   ├── Backend retorna { success: true, id: "page_id" }
   ├── Frontend muestra mensaje de éxito
   └── Formulario se resetea

5. ADMIN CONSULTA BRIEFS
   ├── GET /api/briefs (con Basic Auth)
   ├── Serverless consulta Notion database
   ├── Retorna JSON con todos los briefs
   └── Se puede consumir desde cualquier cliente HTTP
```

### **11.4 Seguridad**

- ✅ CORS configurado por variable de entorno
- ✅ HTTPS (Vercel lo provee automáticamente)
- ✅ Basic Authentication para endpoints admin
- ✅ Validación de datos en servidor
- ✅ Variables de entorno para tokens y credenciales
- ✅ Sin archivos .env en el repositorio

### **11.5 Monitoreo**

- **Vercel Dashboard:** `https://vercel.com/shamycreativestudio/shamy`
- **Logs de Functions:** Vercel → Deployments → Function Logs
- **Notion:** Revisar base de datos directamente
- **Cloudinary:** Dashboard de uso y almacenamiento
- **GitHub:** `github.com/shamycreativestudio/shamy/actions`

---

## 📚 RECURSOS ADICIONALES

- [Vercel Docs](https://vercel.com/docs)
- [Notion API](https://developers.notion.com/)
- [Cloudinary Node.js SDK](https://cloudinary.com/documentation/node_integration)
- [GitHub](https://github.com/shamycreativestudio/shamy)

---

## ✨ TIPS Y MEJORES PRÁCTICAS

### **Para desarrollo:**

- ✅ Prueba localmente con `npx vercel dev`
- ✅ Usa commits descriptivos en git
- ✅ Mantén documentación actualizada
- ✅ Revisa logs de Vercel si algo falla
- ✅ No subas archivos .env a GitHub

---

## 🎓 GLOSARIO DE TÉRMINOS

| Término            | Definición                                    |
| ------------------ | --------------------------------------------- |
| **Frontend**       | Parte visual que ve el usuario                |
| **Backend**        | Lógica del servidor (Serverless Functions)    |
| **API**            | Interfaz para comunicar frontend y backend    |
| **Serverless**     | Código que corre en la nube sin servidor propio |
| **Endpoint**       | URL específica de la API (ej: /api/submit)    |
| **Deploy**         | Subir código a producción                     |
| **Commit**         | Guardar cambios en el historial de Git        |
| **Push**           | Enviar commits locales a GitHub               |
| **CORS**           | Permiso para que frontend use backend         |
| **ENV**            | Variables de entorno (configuración)          |

---

## 📞 SOPORTE

### **Si algo no funciona:**

1. **Revisa Vercel Dashboard** → Logs de la Function
2. **Verifica variables de entorno** en Vercel
3. **Revisa GitHub Actions** para ver si el deploy fue exitoso

---

## 📅 MANTENIMIENTO RECOMENDADO

### **Mensual:**
- ✅ Revisar briefs en Notion
- ✅ Actualizar dependencias: `npm update`
- ✅ Revisar almacenamiento en Cloudinary

### **Semestral:**
- ✅ Cambiar contraseña del admin
- ✅ Revisar y actualizar documentación

---

**Última actualización:** Julio 2026  
**Versión del sistema:** 2.0 (Vercel + Notion + Cloudinary)  
**Estado:** ✅ En producción y funcionando
