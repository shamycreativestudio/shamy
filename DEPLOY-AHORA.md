# 🚀 DEPLOYMENT: PASOS INMEDIATOS

## ✅ LO QUE YA ESTÁ LISTO

He preparado tu proyecto para deployment en la nube:

```
✅ railway.json       → Configuración para Railway
✅ Procfile           → Configuración para Heroku
✅ render.yaml        → Configuración para Render
✅ .railwayignore     → Archivos a ignorar en Railway
✅ branding/config.js → Detecta automáticamente local vs producción
✅ branding/index.html → Actualizado para cargar config.js
✅ branding/script.js  → Usa API_URL de config.js
```

---

## 🎯 DEPLOYMENT EN 10 MINUTOS (RAILWAY - RECOMENDADO)

### Paso 1: Commit y Push a GitHub (2 minutos)

```powershell
cd "d:\Trabajo\Shamy\Web\shamy"

git add .
git commit -m "feat: preparar proyecto para deployment en Railway"
git push origin main
```

### Paso 2: Crear cuenta en Railway (3 minutos)

1. Ve a: **https://railway.app/**
2. Click en **"Start a New Project"**
3. Click en **"Login with GitHub"**
4. Autoriza Railway

### Paso 3: Deploy desde GitHub (2 minutos)

1. Click en **"Deploy from GitHub repo"**
2. Busca tu repositorio: **`Narex04/shamy`** (o el que tengas)
3. Click en tu repositorio
4. Railway detectará automáticamente que es un proyecto Node.js
5. Click en **"Deploy Now"**

### Paso 4: Configurar Variables de Entorno (2 minutos)

1. Click en tu proyecto
2. Ve a **"Variables"**
3. Añade estas variables:

```env
NODE_ENV=production
ADMIN_USERNAME=admin
ADMIN_PASSWORD=ShaMyS3cur3P@ss2025
CORS_ORIGIN=https://narex04.github.io
```

4. Click **"Save"**

### Paso 5: Obtener la URL (1 minuto)

1. Ve a **"Settings" → "Networking"**
2. Click en **"Generate Domain"**
3. Railway te dará una URL como: **`https://shamy-production.up.railway.app`**
4. **¡COPIA ESTA URL!**

### Paso 6: Actualizar config.js con tu URL (2 minutos)

Abre `branding/config.js` y reemplaza:

```javascript
production: {
  // ⚠️ REEMPLAZA ESTA URL
  API_URL: 'https://shamy-production.up.railway.app',  // 👈 TU URL AQUÍ
  ENV_NAME: 'Production'
}
```

Guarda y haz push:

```powershell
git add branding/config.js
git commit -m "config: actualizar URL de producción de Railway"
git push origin main
```

---

## 🧪 PROBAR QUE FUNCIONA

### Test 1: Servidor en la nube

Abre en tu navegador:

```
https://TU-URL-RAILWAY.up.railway.app
```

Deberías ver: `{ "status": "ok", "message": "Shamy Branding Backend" }`

### Test 2: Panel de administración

Abre:

```
https://TU-URL-RAILWAY.up.railway.app/api/admin/panel
```

Login con:

- **Usuario:** `admin`
- **Contraseña:** La que pusiste en ADMIN_PASSWORD

### Test 3: Formulario desde GitHub Pages

1. Abre tu formulario en GitHub Pages:

   ```
   https://narex04.github.io/shamy/branding/
   ```

2. Abre la consola del navegador (F12)

3. Deberías ver:

   ```
   🌍 Entorno: Production
   🔌 API URL: https://shamy-production.up.railway.app
   ```

4. Llena el formulario y envía

5. Ve al panel de admin en Railway y verifica que el brief aparezca

---

## 📊 VERIFICAR ESTADO

### Ver logs en Railway:

1. Ve a tu proyecto en Railway
2. Click en **"Deployments"**
3. Click en el deployment activo
4. Verás los logs en tiempo real

### Comandos útiles:

```powershell
# Ver briefs en la nube
Invoke-RestMethod -Uri "https://TU-URL/api/briefs" -Headers @{
    Authorization = "Basic $(
        [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes('admin:tu_password'))
    )"
}

# Ver estadísticas
Invoke-RestMethod -Uri "https://TU-URL/api/admin/stats" -Headers @{
    Authorization = "Basic $(
        [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes('admin:tu_password'))
    )"
}
```

---

## 🔄 SINCRONIZACIÓN LOCAL ↔ NUBE

### Descargar briefs de la nube:

```powershell
.\scripts\sync-from-cloud.ps1 `
  -CloudUrl "https://TU-URL.up.railway.app" `
  -Password "tu_password"
```

Esto creará un backup en `backups/backup_YYYY-MM-DD_HH-mm-ss.json`

### Subir briefs locales a la nube:

```powershell
.\scripts\sync-to-cloud.ps1 `
  -CloudUrl "https://TU-URL.up.railway.app" `
  -Password "tu_password"
```

---

## ⚠️ IMPORTANTE: CORS

Si ves errores de CORS en la consola del navegador:

1. Ve a Railway → Variables
2. Añade o actualiza:
   ```
   CORS_ORIGIN=https://narex04.github.io,https://tu-dominio-personalizado.com
   ```
3. Reinicia el deployment

---

## 🎉 RESULTADO FINAL

```
┌─────────────────────────────────────────────────────┐
│  👤 USUARIO                                          │
└─────────────────┬───────────────────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────────────────┐
│  📄 GitHub Pages                                     │
│  https://narex04.github.io/shamy/branding/          │
│                                                     │
│  - Detecta automáticamente entorno                  │
│  - Usa config.js para seleccionar API              │
└─────────────────┬───────────────────────────────────┘
                  │
                  │ HTTPS POST /api/briefs
                  │
                  ▼
┌─────────────────────────────────────────────────────┐
│  ☁️  Railway (Backend)                               │
│  https://shamy-production.up.railway.app           │
│                                                     │
│  ✅ Express API (8 endpoints)                       │
│  ✅ SQLite Database                                 │
│  ✅ Panel Admin                                     │
│  ✅ Archivos en /uploads                            │
└─────────────────┬───────────────────────────────────┘
                  │
                  │ Sincronización manual
                  │ (scripts PowerShell)
                  │
                  ▼
┌─────────────────────────────────────────────────────┐
│  💻 Local Development                                │
│  http://localhost:3000                              │
│                                                     │
│  - Desarrollo y pruebas                             │
│  - Backups                                          │
└─────────────────────────────────────────────────────┘
```

---

## 🆘 PROBLEMAS COMUNES

### Error: "Failed to fetch"

- Verifica que Railway esté ejecutándose
- Revisa los logs en Railway
- Verifica CORS_ORIGIN

### Error: 401 Unauthorized

- Verifica ADMIN_USERNAME y ADMIN_PASSWORD en Railway
- Actualiza AUTH_CREDENTIALS en admin/panel.html si es necesario

### Los archivos no se guardan

- Railway no guarda archivos permanentemente
- Solución futura: Migrar a Cloudinary o AWS S3

---

## 📈 PRÓXIMOS PASOS (OPCIONAL)

1. **Migrar a PostgreSQL** (en lugar de SQLite)

   - Más robusto para producción
   - Railway ofrece PostgreSQL gratis

2. **Configurar Cloudinary** para archivos

   - Gratis hasta 25GB
   - URLs permanentes

3. **Dominio personalizado**

   - En lugar de `*.up.railway.app`
   - Railway permite dominios custom

4. **Monitoreo y alertas**
   - Railway tiene integración con alertas
   - Puedes configurar webhooks

---

## 💰 COSTOS

**Railway:**

- ✅ GRATIS hasta 500 horas/mes
- ✅ Equivale a ~16 horas/día
- ✅ Más que suficiente para un formulario
- ⚠️ Si se acaban las horas, upgrade a $5/mes

**Alternativa: Render**

- ✅ Completamente GRATIS (ilimitado)
- ⚠️ Pero más lento (se duerme después de 15 min sin uso)

---

¿Listo para hacer el deployment? ¡Empieza con el Paso 1! 🚀
