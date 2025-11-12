# 📋 GUÍA COMPLETA: Sistema Shamy - Manual de Uso y Mantenimiento

> **Última actualización:** 12 de noviembre de 2025  
> **Versión:** 1.0  
> **Estado:** ✅ Sistema desplegado y funcionando

---

## 📑 ÍNDICE

1. [Enlaces Principales](#-1-enlaces-principales)
2. [Cómo Funciona el Sistema](#-2-cómo-funciona-el-sistema)
3. [Flujo de Trabajo Completo](#-3-flujo-de-trabajo-completo)
4. [Panel de Administración](#-4-panel-de-administración)
5. [Actualizar el Frontend (GitHub Pages)](#-5-actualizar-el-frontend-github-pages)
6. [Actualizar el Backend (Fly.io)](#-6-actualizar-el-backend-flyio)
7. [Ejemplos de Mejoras Comunes](#-7-ejemplos-de-mejoras-comunes)
8. [Gestión de Credenciales](#-8-gestión-de-credenciales)
9. [Comandos Útiles](#-9-comandos-útiles)
10. [Resolución de Problemas](#-10-resolución-de-problemas)
11. [Arquitectura Técnica](#-11-arquitectura-técnica)

---

## 🎯 1. ENLACES PRINCIPALES

### **Formulario para Clientes:**

```
https://shamycreativestudio.github.io/shamy/branding/
```

**Uso:**

- ✅ Envía este enlace a tus clientes por email, WhatsApp o redes sociales
- ✅ El cliente llena el formulario con los detalles de su proyecto
- ✅ Al enviar, la información se guarda automáticamente en tu base de datos
- ✅ Puedes revisar todos los briefs desde el panel de administración

---

### **Panel de Administración:**

```
https://shamy-backend.fly.dev/api/admin/panel
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
https://shamy-backend.fly.dev/
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
│  FRONTEND - GitHub Pages                            │
│  https://shamycreativestudio.github.io/shamy/       │
│                                                      │
│  • index.html  → Estructura del formulario          │
│  • styles.css  → Diseño y estilos                   │
│  • script.js   → Validación y envío                 │
└────────────────┬────────────────────────────────────┘
                 │
                 │ 2. Envía datos (POST)
                 │
                 ▼
┌─────────────────────────────────────────────────────┐
│  BACKEND - Fly.io                                   │
│  https://shamy-backend.fly.dev/                     │
│                                                      │
│  • server.js        → Servidor Express              │
│  • routes/briefs.js → Gestión de briefs             │
│  • routes/admin.js  → Panel de administración       │
│  • database/db.js   → Conexión a SQLite             │
└────────────────┬────────────────────────────────────┘
                 │
                 │ 3. Guarda en base de datos
                 │
                 ▼
┌─────────────────────────────────────────────────────┐
│  BASE DE DATOS - SQLite (Persistente)               │
│  /data/briefs.db                                    │
│                                                      │
│  • Almacenamiento en volumen Fly.io (1GB)           │
│  • Datos persisten entre reinicios                  │
│  • Backups automáticos                              │
└─────────────────────────────────────────────────────┘
                 │
                 │ 4. Consulta desde panel admin
                 │
                 ▼
┌─────────────────────────────────────────────────────┐
│  ADMINISTRADOR                                       │
│  (Tú - Panel web)                                   │
└─────────────────────────────────────────────────────┘
```

---

## 🎬 3. FLUJO DE TRABAJO COMPLETO

### **Paso 1: Cliente recibe el enlace**

```
Tú → Envías por WhatsApp/Email → Cliente
     "Hola, llena este formulario para tu proyecto:
      https://shamycreativestudio.github.io/shamy/branding/"
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
fetch("https://shamy-backend.fly.dev/api/briefs", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});
```

### **Paso 4: Tú revisas en el panel**

1. Abres: `https://shamy-backend.fly.dev/api/admin/panel`
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
URL: https://shamy-backend.fly.dev/api/admin/panel
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

## 🌐 5. ACTUALIZAR EL FRONTEND (GitHub Pages)

### **¿Qué es el Frontend?**

El formulario que ven tus clientes en `shamycreativestudio.github.io/shamy/branding/`

### **Archivos principales:**

```
branding/
├── index.html           → Estructura HTML del formulario
├── styles.css           → Estilos, colores, diseño
├── script.js            → Lógica, validación, envío
├── config.js            → Configuración (URL del backend)
├── README.md            → Documentación del formulario
└── assets/
    ├── favicon.svg
    ├── shamy-logotipo.svg
    └── shamy-logotipo-white.svg
```

### **Proceso de actualización:**

#### **5.1 Hacer cambios localmente**

```bash
# Abrir VS Code en tu proyecto
cd "d:\Trabajo\Shamy\Web\shamy"
code .

# Editar archivos necesarios:
# - branding/index.html (para cambiar estructura)
# - branding/styles.css (para cambiar diseño)
# - branding/script.js (para cambiar funcionalidad)
```

#### **5.2 Probar cambios localmente**

```bash
# Abrir index.html en el navegador
# O usar Live Server en VS Code
# Ctrl+Shift+P → "Live Server: Open with Live Server"
```

#### **5.3 Subir a GitHub**

```bash
git add branding/
git commit -m "Actualizo diseño del formulario"
git push origin main
```

#### **5.4 Verificar despliegue**

```
✅ Espera 1-2 minutos
✅ Visita: https://shamycreativestudio.github.io/shamy/branding/
✅ Verifica que los cambios estén aplicados
```

### **Ejemplos comunes de cambios:**

#### **Cambiar colores:**

```css
/* branding/styles.css */
:root {
  --accent: #ff6b35; /* Color principal (antes #000000) */
  --bg: #f7f7f7; /* Fondo de página */
  --panel: #ffffff; /* Fondo de paneles */
  --text: #2c3e50; /* Color de texto */
  --muted: #95a5a6; /* Texto secundario */
}
```

#### **Cambiar textos:**

```html
<!-- branding/index.html -->
<h1>Cuéntanos sobre tu proyecto</h1>
<!-- Cambiar este título -->
<p>Completa el formulario para empezar</p>
<!-- Cambiar este subtítulo -->
```

#### **Agregar nuevo campo:**

```html
<!-- branding/index.html - Agregar dentro del <form> -->
<div class="field">
  <label for="telefono">
    <span class="label-text">Teléfono de contacto</span>
  </label>
  <input
    type="tel"
    id="telefono"
    name="telefono"
    placeholder="+52 55 1234 5678"
    required
  />
</div>
```

```javascript
// branding/script.js - Agregar en formData
const formData = {
  nombre: document.getElementById("nombre").value,
  email: document.getElementById("email").value,
  telefono: document.getElementById("telefono").value, // ← Nuevo
  // ... resto de campos
};
```

---

## 🔧 6. ACTUALIZAR EL BACKEND (Fly.io)

### **¿Qué es el Backend?**

El servidor que recibe, procesa y almacena los briefs en `shamy-backend.fly.dev`

### **Archivos principales:**

```
/
├── server.js               → Servidor Express principal
├── routes/
│   ├── briefs.js          → API de briefs (GET, POST, DELETE)
│   └── admin.js           → Panel de administración
├── database/
│   └── db.js              → Conexión y queries SQLite
├── package.json           → Dependencias Node.js
├── Dockerfile             → Configuración del contenedor
└── fly.toml               → Configuración de Fly.io
```

### **Proceso de actualización:**

#### **6.1 Hacer cambios localmente**

```bash
# Editar archivos necesarios:
# - server.js (para cambiar rutas o middleware)
# - routes/briefs.js (para modificar API de briefs)
# - routes/admin.js (para personalizar panel admin)
# - database/db.js (para cambiar esquema de BD)
```

#### **6.2 Probar localmente**

```bash
# Instalar dependencias si es necesario
npm install

# Iniciar servidor local
npm run dev

# Probar en http://localhost:3000
# Ctrl+C para detener
```

#### **6.3 Subir cambios a GitHub**

```bash
git add .
git commit -m "Mejoro API de briefs"
git push origin main
```

#### **6.4 Desplegar a Fly.io**

```bash
# Desplegar nueva versión
C:\Users\shamu\.fly\bin\flyctl.exe deploy --app shamy-backend

# Espera 2-3 minutos mientras se construye y despliega
```

#### **6.5 Verificar despliegue**

```bash
# Ver logs en tiempo real
C:\Users\shamu\.fly\bin\flyctl.exe logs --app shamy-backend

# Deberías ver:
# ✅ Base de datos inicializada correctamente
# ✅ Servidor corriendo en puerto 8080
# ✅ Health check passing
```

### **Ejemplos comunes de cambios:**

#### **Agregar campo a la base de datos:**

```javascript
// database/db.js
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS briefs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    email TEXT NOT NULL,
    empresa TEXT,
    telefono TEXT,  -- ← Nuevo campo
    // ... resto de campos
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`;
```

#### **Modificar endpoint:**

```javascript
// routes/briefs.js
router.post("/", async (req, res) => {
  const {
    nombre,
    email,
    empresa,
    telefono, // ← Nuevo campo
    // ... resto de campos
  } = req.body;

  // Validación del nuevo campo
  if (!telefono || telefono.length < 10) {
    return res.status(400).json({
      error: "Teléfono inválido",
    });
  }

  // ... resto del código
});
```

#### **Cambiar puerto del servidor:**

```javascript
// server.js
const PORT = process.env.PORT || 3000; // Cambiar 3000 por el puerto deseado
```

---

## 💡 7. EJEMPLOS DE MEJORAS COMUNES

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
C:\Users\shamu\.fly\bin\flyctl.exe secrets set ADMIN_USERNAME=nuevo_usuario --app shamy-backend

# Cambiar contraseña
C:\Users\shamu\.fly\bin\flyctl.exe secrets set ADMIN_PASSWORD=nueva_contraseña_segura --app shamy-backend

# Ver secretos configurados (sin mostrar valores)
C:\Users\shamu\.fly\bin\flyctl.exe secrets list --app shamy-backend
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
C:\Users\shamu\.fly\bin\flyctl.exe secrets set API_KEY=tu-clave-secreta --app shamy-backend

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
C:\Users\shamu\.fly\bin\flyctl.exe deploy --app shamy-backend

# Ver logs en tiempo real
C:\Users\shamu\.fly\bin\flyctl.exe logs --app shamy-backend

# Ver estado de la app
C:\Users\shamu\.fly\bin\flyctl.exe status --app shamy-backend

# Ver información de la máquina
C:\Users\shamu\.fly\bin\flyctl.exe machine list --app shamy-backend

# Reiniciar la aplicación
C:\Users\shamu\.fly\bin\flyctl.exe machine restart --app shamy-backend

# Conectar por SSH al servidor
C:\Users\shamu\.fly\bin\flyctl.exe ssh console --app shamy-backend

# Ver configuración actual
C:\Users\shamu\.fly\bin\flyctl.exe config show --app shamy-backend

# Ver uso de recursos
C:\Users\shamu\.fly\bin\flyctl.exe machine status --app shamy-backend

# Escalar recursos (si es necesario)
C:\Users\shamu\.fly\bin\flyctl.exe scale vm shared-cpu-2x --app shamy-backend
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
C:\Users\shamu\.fly\bin\flyctl.exe ssh console --app shamy-backend

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
const API_URL = "https://shamy-backend.fly.dev"; // ← Verificar que sea correcta
```

2. **Verificar CORS:**

```bash
# Ver configuración de CORS
C:\Users\shamu\.fly\bin\flyctl.exe secrets list --app shamy-backend

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
C:\Users\shamu\.fly\bin\flyctl.exe logs --app shamy-backend

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
C:\Users\shamu\.fly\bin\flyctl.exe logs --app shamy-backend
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
C:\Users\shamu\.fly\bin\flyctl.exe deploy --no-cache --app shamy-backend
```

### **10.4 Base de datos se reinicia/pierde datos**

**Síntomas:**

- Briefs desaparecen después de reiniciar
- Base de datos vuelve a estado inicial

**Solución:**

1. **Verificar volumen persistente:**

```bash
# Ver volúmenes
C:\Users\shamu\.fly\bin\flyctl.exe volumes list --app shamy-backend

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
C:\Users\shamu\.fly\bin\flyctl.exe status --app shamy-backend
```

2. **Reiniciar aplicación:**

```bash
C:\Users\shamu\.fly\bin\flyctl.exe machine restart --app shamy-backend
```

3. **Ver máquinas:**

```bash
C:\Users\shamu\.fly\bin\flyctl.exe machine list --app shamy-backend

# Si la máquina está stopped:
C:\Users\shamu\.fly\bin\flyctl.exe machine start <machine-id> --app shamy-backend
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
├── CSS3           → Estilos modernos (CSS Variables)
├── JavaScript     → Vanilla JS (sin frameworks)
└── GitHub Pages   → Hosting estático gratuito

Backend:
├── Node.js 18     → Runtime de JavaScript
├── Express.js     → Framework web minimalista
├── SQLite3        → Base de datos embebida
├── Basic Auth     → Autenticación simple
└── Fly.io         → Hosting de aplicaciones

Infraestructura:
├── Git/GitHub     → Control de versiones
├── Docker         → Containerización
├── Fly.io Volume  → Almacenamiento persistente (1GB)
└── HTTPS/SSL      → Seguridad (automático en ambos)
```

### **11.2 Estructura de la Base de Datos**

```sql
-- Tabla: briefs
CREATE TABLE briefs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,  -- ID único auto-incremental
  nombre TEXT NOT NULL,                  -- Nombre del cliente
  email TEXT NOT NULL,                   -- Email de contacto
  empresa TEXT,                          -- Nombre de empresa/proyecto
  descripcion TEXT,                      -- Descripción del proyecto
  industria TEXT,                        -- Sector/industria
  publico TEXT,                          -- Público objetivo
  presupuesto TEXT,                      -- Rango de presupuesto
  timeline TEXT,                         -- Timeline deseado
  referencias TEXT,                      -- Referencias visuales/URLs
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP  -- Fecha de creación
);

-- Índices para búsqueda rápida
CREATE INDEX idx_email ON briefs(email);
CREATE INDEX idx_empresa ON briefs(empresa);
CREATE INDEX idx_created_at ON briefs(created_at DESC);
```

### **11.3 Flujo de Datos Detallado**

```
1. CLIENTE LLENA FORMULARIO
   ├── Usuario ingresa datos en branding/index.html
   ├── JavaScript valida campos en tiempo real
   ├── Click en "Enviar" → evento submit
   └── script.js captura datos del formulario

2. FRONTEND ENVÍA DATOS
   ├── fetch() hace POST a /api/briefs
   ├── Headers: Content-Type: application/json
   ├── Body: JSON con todos los campos
   └── CORS permite comunicación cross-origin

3. BACKEND RECIBE PETICIÓN
   ├── Express.js recibe en routes/briefs.js
   ├── Middleware CORS valida origen
   ├── Body-parser parsea JSON
   └── Validación de campos requeridos

4. BASE DE DATOS GUARDA
   ├── database/db.js prepara query SQL
   ├── INSERT INTO briefs VALUES (...)
   ├── SQLite escribe en /data/briefs.db
   └── Retorna ID del nuevo registro

5. RESPUESTA AL CLIENTE
   ├── Backend retorna { success: true, id: 123 }
   ├── Frontend muestra mensaje de éxito
   ├── Formulario se resetea
   └── Usuario puede cerrar la página

6. ADMIN CONSULTA DATOS
   ├── Admin abre /api/admin/panel
   ├── Autenticación Basic Auth
   ├── SELECT * FROM briefs ORDER BY created_at DESC
   ├── HTML renderizado con todos los briefs
   └── Interfaz interactiva con JavaScript
```

### **11.4 Seguridad Implementada**

```
Frontend:
├── Validación de campos en cliente (JS)
├── Sanitización de inputs HTML
├── HTTPS obligatorio (GitHub Pages)
└── CSP headers (Content Security Policy)

Backend:
├── CORS restringido a dominio específico
├── Validación de datos en servidor
├── SQL Prepared Statements (previene injection)
├── Basic Authentication para admin
├── Rate limiting (futuro)
└── HTTPS obligatorio (Fly.io)

Base de Datos:
├── Sin acceso directo desde internet
├── Solo accesible desde aplicación
├── Backups automáticos en volumen
└── Encriptación en reposo (Fly.io)
```

### **11.5 Monitoreo y Logs**

```
GitHub Pages:
├── Ver deployments: github.com/shamycreativestudio/shamy/actions
├── Ver commits: github.com/shamycreativestudio/shamy/commits
└── Sin logs de acceso (limitación de GitHub Pages)

Fly.io:
├── Logs en tiempo real: flyctl logs --app shamy-backend
├── Métricas de CPU/RAM: flyctl status --app shamy-backend
├── Health checks automáticos cada 30s
└── Alertas por email si la app cae (configurar)

Errores:
├── Frontend: Console del navegador (F12)
├── Backend: Logs de Fly.io
└── Base de datos: Logs de SQLite en stderr
```

### **11.6 Escalabilidad**

```
Actual (Tier gratuito):
├── Frontend: Ilimitado (GitHub Pages)
├── Backend: 256MB RAM, 1 CPU compartido
├── BD: 1GB de almacenamiento
└── Capacidad: ~1000 briefs, ~10,000 visitas/mes

Escalar horizontalmente:
├── Aumentar RAM: flyctl scale vm shared-cpu-1x --memory 512
├── Más CPUs: flyctl scale vm shared-cpu-2x
├── Múltiples regiones: flyctl regions add lax mia
└── Load balancing automático (Fly.io)

Escalar verticalmente:
├── Migrar BD a PostgreSQL
├── Agregar Redis para caché
├── CDN para assets estáticos
└── Separar frontend en Vercel/Netlify
```

---

## 📚 RECURSOS ADICIONALES

### **Documentación oficial:**

- [Express.js](https://expressjs.com/)
- [SQLite](https://www.sqlite.org/docs.html)
- [Fly.io](https://fly.io/docs/)
- [GitHub Pages](https://docs.github.com/pages)

### **Archivos de referencia en este proyecto:**

- `README.md` → Documentación general del proyecto
- `DEPLOYMENT-FLYIO.md` → Guía detallada de despliegue
- `BACKEND-README.md` → Documentación técnica del backend
- `branding/README.md` → Documentación del formulario

### **Comandos rápidos:**

```bash
# Ver esta guía
cat GUIA-COMPLETA-USO.md

# Ver estructura del proyecto
tree -L 2

# Buscar en documentación
grep -r "palabra" *.md
```

---

## ✨ TIPS Y MEJORES PRÁCTICAS

### **Para clientes:**

- ✅ Envía el enlace del formulario por WhatsApp con contexto
- ✅ Explica brevemente qué información necesitas
- ✅ Menciona que tomará 5-10 minutos completarlo
- ✅ Asegura privacidad y confidencialidad

### **Para ti como admin:**

- ✅ Revisa el panel diariamente
- ✅ Responde rápido a nuevos briefs
- ✅ Elimina briefs antiguos cada mes
- ✅ Haz backup de la BD mensualmente
- ✅ Actualiza credenciales cada 6 meses

### **Para desarrollo:**

- ✅ Siempre prueba localmente antes de desplegar
- ✅ Usa commits descriptivos en git
- ✅ Mantén documentación actualizada
- ✅ Revisa logs regularmente
- ✅ No subas archivos .env a GitHub

---

## 🎓 GLOSARIO DE TÉRMINOS

| Término          | Definición                                  |
| ---------------- | ------------------------------------------- |
| **Frontend**     | Parte visual que ve el usuario (formulario) |
| **Backend**      | Servidor que procesa y guarda datos         |
| **API**          | Interfaz para comunicar frontend y backend  |
| **Endpoint**     | URL específica de la API (ej: /api/briefs)  |
| **Deploy**       | Subir código al servidor de producción      |
| **Commit**       | Guardar cambios en el historial de Git      |
| **Push**         | Enviar commits locales a GitHub             |
| **Pull**         | Traer cambios de GitHub a local             |
| **CORS**         | Permiso para que frontend use backend       |
| **ENV**          | Variables de entorno (configuración)        |
| **Volume**       | Disco persistente en Fly.io                 |
| **Health Check** | Verificación automática de que app funciona |
| **SSH**          | Conexión remota al servidor                 |
| **SQLite**       | Base de datos simple embebida               |
| **Express**      | Framework web para Node.js                  |

---

## 📞 SOPORTE

### **Si algo no funciona:**

1. **Revisa esta guía** → Sección 10 (Resolución de Problemas)
2. **Ver logs:**
   ```bash
   C:\Users\shamu\.fly\bin\flyctl.exe logs --app shamy-backend
   ```
3. **Verificar estado:**
   ```bash
   C:\Users\shamu\.fly\bin\flyctl.exe status --app shamy-backend
   ```
4. **Reiniciar si es necesario:**
   ```bash
   C:\Users\shamu\.fly\bin\flyctl.exe machine restart --app shamy-backend
   ```

### **Contacto:**

- **GitHub Issues:** [github.com/shamycreativestudio/shamy/issues](https://github.com/shamycreativestudio/shamy/issues)
- **Email:** (tu email de contacto)

---

## 📅 MANTENIMIENTO RECOMENDADO

### **Diario:**

- ✅ Revisar panel admin por nuevos briefs
- ✅ Verificar que formulario esté accesible

### **Semanal:**

- ✅ Revisar logs por errores
- ✅ Verificar espacio en BD (si crece mucho)

### **Mensual:**

- ✅ Eliminar briefs antiguos/completados
- ✅ Actualizar dependencias: `npm update`
- ✅ Revisar métricas de uso en Fly.io

### **Semestral:**

- ✅ Cambiar contraseña del admin
- ✅ Revisar y actualizar documentación
- ✅ Backup completo de la base de datos

---

**Última actualización:** 12 de noviembre de 2025  
**Versión del sistema:** 1.0.0  
**Estado:** ✅ En producción y funcionando

---

¡Listo! Ahora tienes toda la información para gestionar tu sistema Shamy de forma profesional. 🚀
