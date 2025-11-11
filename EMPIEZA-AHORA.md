# 🚀 EMPIEZA AHORA - 3 PASOS

## ⚡ PASO 1: Verificar que el panel funciona (2 minutos)

```powershell
cd "d:\Trabajo\Shamy\Web\shamy"
npm run dev
```

**Espera a ver:**
```
✅ Servidor corriendo en http://localhost:3000
✅ Panel admin: http://localhost:3000/api/admin/panel
```

**Luego abre en tu navegador:**
```
http://localhost:3000/api/admin/panel
```

**Login:**
- Usuario: `admin`
- Password: `shamy2025`

**✅ RESULTADO ESPERADO:**
Debes ver la lista de briefs (incluido el que enviaste antes). 

**❌ SI NO FUNCIONA:**
- Verifica que no haya errores en la consola de PowerShell
- Intenta con `Ctrl+C` y luego `npm run dev` de nuevo

---

## 🌐 PASO 2: Deploy a Railway (10 minutos)

### 2.1. Commit y push a GitHub

```powershell
cd "d:\Trabajo\Shamy\Web\shamy"

git add .
git commit -m "feat: backend con deployment en la nube configurado"
git push origin main
```

### 2.2. Crear cuenta en Railway

1. Abre: **https://railway.app/**
2. Click en **"Start a New Project"**
3. Click en **"Login with GitHub"**
4. Autoriza Railway para acceder a tus repositorios

### 2.3. Deploy desde GitHub

1. Click en **"Deploy from GitHub repo"**
2. Busca tu repositorio: **`Narex04/shamy`**
3. Click en tu repositorio
4. Railway detectará automáticamente Node.js
5. Click en **"Deploy Now"**
6. **Espera 2-3 minutos** mientras se despliega

### 2.4. Configurar variables de entorno

1. En Railway, click en tu proyecto
2. Click en la pestaña **"Variables"**
3. Click en **"+ New Variable"** y añade cada una:

```
NODE_ENV=production
```
```
ADMIN_USERNAME=admin
```
```
ADMIN_PASSWORD=ShaMyS3cur3P@ss2025
```
_(👆 Cambia esto por tu password seguro)_

```
CORS_ORIGIN=https://narex04.github.io
```

4. Click en **"Deploy"** para reiniciar con las nuevas variables

### 2.5. Obtener tu URL

1. Ve a **"Settings" → "Networking"**
2. Click en **"Generate Domain"**
3. Railway te dará una URL como:
   ```
   https://shamy-production.up.railway.app
   ```
4. **¡COPIA ESTA URL!** La necesitarás en el siguiente paso

---

## 🔧 PASO 3: Conectar frontend con tu backend en Railway (3 minutos)

### 3.1. Actualizar config.js

Abre el archivo `branding/config.js` y busca esta línea:

```javascript
API_URL: 'https://TU-URL-AQUI.up.railway.app',
```

Reemplázala con **TU URL DE RAILWAY** que copiaste en el paso anterior:

```javascript
API_URL: 'https://shamy-production.up.railway.app',  // 👈 TU URL AQUÍ
```

### 3.2. Commit y push

```powershell
git add branding/config.js
git commit -m "config: actualizar URL de producción de Railway"
git push origin main
```

### 3.3. Esperar a que GitHub Pages se actualice

GitHub Pages puede tardar 1-2 minutos en actualizarse. Espera un poco.

---

## 🎉 ¡PROBAR QUE TODO FUNCIONA!

### Test 1: Backend en Railway está activo

Abre en tu navegador tu URL de Railway:
```
https://TU-URL.up.railway.app
```

**✅ DEBES VER:**
```json
{"status":"ok","message":"Shamy Branding Backend"}
```

### Test 2: Panel admin en Railway

Abre:
```
https://TU-URL.up.railway.app/api/admin/panel
```

**Login:**
- Usuario: `admin`
- Password: `ShaMyS3cur3P@ss2025` (el que configuraste)

**✅ DEBES VER:**
El panel de administración sin errores (aunque todavía no tenga briefs desde producción).

### Test 3: Formulario desde GitHub Pages

1. Abre tu formulario en GitHub Pages:
   ```
   https://narex04.github.io/shamy/branding/
   ```

2. **Abre la consola del navegador (F12)**

3. **✅ DEBES VER:**
   ```
   🌍 Entorno: Production
   🔌 Conectando al API: https://shamy-production.up.railway.app
   ```

4. **Llena el formulario y envía**

5. **Ve al panel de Railway:**
   ```
   https://TU-URL.up.railway.app/api/admin/panel
   ```

6. **✅ DEBES VER:**
   ¡El brief que acabas de enviar desde GitHub Pages!

---

## ✅ ¡FELICIDADES! 🎊

Si todos los tests pasaron, tienes:

- ✅ Formulario en GitHub Pages funcionando
- ✅ Backend en Railway guardando datos
- ✅ Panel de administración accesible desde cualquier lugar
- ✅ Sistema completamente en la nube
- ✅ Sincronización configurada
- ✅ Todo gratis ($0/mes)

---

## 🔄 SINCRONIZACIÓN OPCIONAL

Si quieres descargar los briefs de la nube a tu computadora local:

```powershell
.\scripts\sync-from-cloud.ps1 `
  -CloudUrl "https://TU-URL.up.railway.app" `
  -Password "ShaMyS3cur3P@ss2025"
```

Esto creará un backup en: `backups/backup_YYYY-MM-DD_HH-mm-ss.json`

---

## 🆘 SI ALGO FALLA

### Error: "Failed to fetch" en GitHub Pages

**Causa:** CORS no está configurado correctamente.

**Solución:**
1. Ve a Railway → Variables
2. Verifica que `CORS_ORIGIN` sea: `https://narex04.github.io`
3. Reinicia el deployment

### Error: 401 Unauthorized en el panel

**Causa:** Password incorrecto.

**Solución:**
1. Verifica el password en Railway → Variables → `ADMIN_PASSWORD`
2. Usa ese mismo password para hacer login

### Railway muestra errores en los logs

**Solución:**
1. Ve a Railway → Deployments
2. Click en el deployment
3. Lee los logs
4. Si dice "module not found", verifica que `package.json` tenga todas las dependencias

---

## 📖 DOCUMENTACIÓN COMPLETA

Si quieres más detalles:

- **DEPLOY-AHORA.md** - Guía paso a paso completa
- **DEPLOYMENT-NUBE.md** - Documentación técnica
- **SOLUCION-COMPLETA.md** - Resumen de todos los cambios
- **CHECKLIST-DEPLOYMENT.md** - Checklist detallado

---

## 💡 PRÓXIMOS PASOS (OPCIONAL)

1. **Configurar dominio personalizado** en Railway
2. **Migrar a PostgreSQL** (más robusto que SQLite)
3. **Configurar Cloudinary** para archivos en la nube
4. **Configurar notificaciones por email** cuando llegue un brief

---

## 🎯 RESUMEN DE LOS 3 PASOS

```
1️⃣  npm run dev
   → Verifica panel funciona en localhost

2️⃣  Deploy a Railway
   → Push a GitHub → Login Railway → Deploy → Config variables → Obtener URL

3️⃣  Actualizar config.js
   → Cambiar URL en config.js → Push a GitHub → Probar desde GitHub Pages

✅ ¡LISTO! Sistema completo en la nube
```

---

**¿Necesitas ayuda?** Lee la documentación completa o pregunta.

**¡Éxito! 🚀**
