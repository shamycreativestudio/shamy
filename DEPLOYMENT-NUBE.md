# 🌐 DEPLOYMENT EN LA NUBE - GUÍA COMPLETA

## 🎯 OBJETIVO

Que tu formulario en **GitHub Pages** (https://narex04.github.io/shamy/branding/) envíe datos a un **backend en la nube** que almacene en base de datos.

---

## 📋 OPCIONES DE DEPLOYMENT

### ✅ OPCIÓN 1: RAILWAY (RECOMENDADA - GRATIS)

**Ventajas:**

- ✅ Gratis hasta 500 horas/mes (suficiente)
- ✅ Deploy automático desde GitHub
- ✅ Base de datos PostgreSQL incluida
- ✅ SSL/HTTPS automático
- ✅ Configuración en 10 minutos

**Pasos:**

#### 1. Preparar el proyecto para Railway

Primero, vamos a crear un archivo especial para Railway:

```powershell
# Ejecuta esto en PowerShell
cd "d:\Trabajo\Shamy\Web\shamy"
```

Crea el archivo `railway.json`:

```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "startCommand": "npm start",
    "restartPolicyType": "ON_FAILURE",
    "restartPolicyMaxRetries": 10
  }
}
```

#### 2. Modificar package.json para Railway

Tu `package.json` ya tiene todo correcto, pero asegúrate de que tenga:

```json
{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "engines": {
    "node": ">=16.0.0"
  }
}
```

#### 3. Deploy a Railway

1. **Ve a:** https://railway.app/
2. **Click en "Start a New Project"**
3. **Conecta tu cuenta de GitHub**
4. **Selecciona el repositorio:** `Narex04/shamy`
5. **Railway detectará automáticamente Node.js**
6. **Configura las variables de entorno:**

```
NODE_ENV=production
PORT=3000
ADMIN_USERNAME=admin
ADMIN_PASSWORD=TU_PASSWORD_SEGURO_123
CORS_ORIGIN=https://narex04.github.io,https://shamy.com
```

7. **Click en "Deploy"**
8. **Espera 2-3 minutos**
9. **Railway te dará una URL:** `https://shamy-production.up.railway.app`

#### 4. Actualizar el frontend para usar la URL de Railway

En `branding/script.js`, cambia la URL de la API:

```javascript
// Detectar si estamos en local o producción
const API_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:3000"
    : "https://shamy-production.up.railway.app"; // TU URL DE RAILWAY

// En la función de submit
const response = await fetch(`${API_URL}/api/briefs`, {
  method: "POST",
  body: formData,
});
```

---

### ✅ OPCIÓN 2: RENDER (ALTERNATIVA GRATIS)

**Ventajas:**

- ✅ Completamente gratis
- ✅ PostgreSQL incluida (gratis)
- ✅ SSL automático
- ✅ Deploy desde GitHub

**Pasos:**

1. **Ve a:** https://render.com/
2. **Conecta GitHub**
3. **New → Web Service**
4. **Selecciona tu repo:** `Narex04/shamy`
5. **Configuración:**
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Instance Type:** Free
6. **Variables de entorno:** (igual que Railway)
7. **Click "Create Web Service"**
8. **Te dará una URL:** `https://shamy.onrender.com`

---

### ✅ OPCIÓN 3: HEROKU (ANTES GRATIS, AHORA PAGO)

**Costo:** $5-7/mes
**Ventaja:** Más estable y rápido

---

## 🔧 CAMBIOS NECESARIOS EN EL CÓDIGO

### 1. Modificar `branding/script.js`

Voy a crear una versión que funcione en local Y en producción:

```javascript
// Al inicio del archivo, después de las constantes
const API_URL = (() => {
  // Si estamos en localhost, usar servidor local
  if (
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1"
  ) {
    return "http://localhost:3000";
  }
  // Si estamos en GitHub Pages o dominio propio, usar servidor en la nube
  return "https://TU-URL-DE-RAILWAY.up.railway.app"; // ⚠️ CAMBIAR ESTO
})();

console.log("API URL:", API_URL);
```

### 2. Crear archivo de configuración

Voy a crear un archivo `config.js` para manejar esto mejor:

```javascript
// config.js
const CONFIG = {
  development: {
    API_URL: "http://localhost:3000",
  },
  production: {
    API_URL: "https://TU-URL-DE-RAILWAY.up.railway.app",
  },
};

const ENV =
  window.location.hostname === "localhost" ? "development" : "production";
const API_URL = CONFIG[ENV].API_URL;

export { API_URL, ENV };
```

---

## 🗄️ BASE DE DATOS EN LA NUBE

### Opción A: SQLite (mantener lo actual)

**Pros:**

- No requiere cambios
- Funciona en Railway/Render

**Contras:**

- Se borra si el servidor se reinicia
- No recomendado para producción seria

### Opción B: PostgreSQL (RECOMENDADO)

Railway y Render ofrecen PostgreSQL gratis. Voy a crear el código para migrar:

```javascript
// database/db-postgres.js
const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false,
});

// Schema PostgreSQL
const initDatabase = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS briefs (
      id SERIAL PRIMARY KEY,
      empresa_nombre VARCHAR(100) NOT NULL,
      contacto_email VARCHAR(255) NOT NULL,
      -- ... resto de campos igual
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `);
};
```

---

## 📤 SUBIR ARCHIVOS EN LA NUBE

**Problema:** Railway/Render no guardan archivos permanentemente en disco.

**Solución:** Usar almacenamiento en la nube.

### Opción A: Cloudinary (GRATIS hasta 25GB)

```javascript
// npm install cloudinary

const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

// Al subir archivo
const result = await cloudinary.uploader.upload(file.path);
// result.secure_url = URL del archivo en la nube
```

### Opción B: AWS S3 (Más complejo pero profesional)

---

## 🔄 SINCRONIZACIÓN LOCAL ↔ NUBE

Para mantener tus datos locales sincronizados con la nube:

### Opción 1: Script de Backup

```powershell
# backup-from-cloud.ps1
$API_URL = "https://tu-url-railway.up.railway.app"
$AUTH = [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes("admin:password"))

# Descargar todos los briefs
$briefs = Invoke-RestMethod -Uri "$API_URL/api/briefs?limit=1000" -Headers @{
    Authorization = "Basic $AUTH"
}

# Guardar localmente
$briefs | ConvertTo-Json -Depth 10 | Out-File "backup-$(Get-Date -Format 'yyyy-MM-dd').json"
```

### Opción 2: Webhook de sincronización

Cada vez que se crea un brief en la nube, envía una copia a tu servidor local.

---

## 🚀 PLAN DE ACCIÓN PASO A PASO

### AHORA MISMO (10 minutos):

1. ✅ Arreglar el error del panel (YA HECHO)
2. ⬜ Crear cuenta en Railway.app
3. ⬜ Conectar tu repositorio GitHub
4. ⬜ Deploy con un click
5. ⬜ Copiar la URL que te da Railway

### DESPUÉS (15 minutos):

6. ⬜ Actualizar `branding/script.js` con la URL de Railway
7. ⬜ Hacer commit y push a GitHub
8. ⬜ Probar el formulario desde GitHub Pages
9. ⬜ Ver los briefs en el panel admin de Railway

### OPCIONAL (más tarde):

10. ⬜ Migrar a PostgreSQL
11. ⬜ Configurar Cloudinary para archivos
12. ⬜ Configurar dominio propio

---

## 📝 EJEMPLO COMPLETO DE DEPLOYMENT

Voy a crear los archivos necesarios para deployment automático:

### 1. `Procfile` (para Heroku)

```
web: npm start
```

### 2. `.railwayignore` (para Railway)

```
node_modules/
.git/
*.log
.env.example
```

### 3. `render.yaml` (para Render)

```yaml
services:
  - type: web
    name: shamy-backend
    env: node
    buildCommand: npm install
    startCommand: npm start
    envVars:
      - key: NODE_ENV
        value: production
      - key: ADMIN_PASSWORD
        generateValue: true
```

---

## ⚠️ IMPORTANTE: CORS

En tu `.env` de la nube, configura:

```env
CORS_ORIGIN=https://narex04.github.io,https://shamy.com
```

Y en `server.js` ya está configurado para leer esto.

---

## 🎯 RESULTADO FINAL

```
┌──────────────────────────────────────────────────┐
│  GitHub Pages (Frontend)                         │
│  https://narex04.github.io/shamy/branding/       │
└────────────────┬─────────────────────────────────┘
                 │
                 │ HTTPS POST /api/briefs
                 │
                 ▼
┌──────────────────────────────────────────────────┐
│  Railway/Render (Backend)                        │
│  https://shamy-production.up.railway.app         │
│                                                  │
│  ├── Express API                                 │
│  ├── PostgreSQL Database                         │
│  ├── Cloudinary (archivos)                       │
│  └── Panel Admin                                 │
└──────────────────────────────────────────────────┘
                 │
                 │ Backup/Sincronización
                 │
                 ▼
┌──────────────────────────────────────────────────┐
│  Tu Computadora Local                            │
│  localhost:3000 (desarrollo)                     │
└──────────────────────────────────────────────────┘
```

---

## 💰 COSTOS

- **Railway:** GRATIS (500 horas/mes)
- **Render:** GRATIS (ilimitado, pero más lento)
- **Cloudinary:** GRATIS (25GB, 25k transformaciones)
- **Total:** $0/mes 🎉

---

¿Quieres que te ayude a:

1. ✅ Crear los archivos para Railway ahora
2. ✅ Modificar el código para que funcione en la nube
3. ✅ Configurar PostgreSQL en lugar de SQLite
4. ✅ Configurar Cloudinary para archivos

¿Por cuál empezamos?
