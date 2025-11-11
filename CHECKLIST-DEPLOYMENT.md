# ✅ CHECKLIST DE DEPLOYMENT

## 🎯 ANTES DE DEPLOYAR

- [ ] **Servidor local funciona**

  ```powershell
  npm run dev
  # Abre: http://localhost:3000
  # Debe mostrar: {"status":"ok","message":"Shamy Branding Backend"}
  ```

- [ ] **Panel admin funciona localmente**

  ```
  http://localhost:3000/api/admin/panel
  Usuario: admin
  Password: shamy2025
  ```

- [ ] **Formulario funciona localmente**
  ```
  Abre: branding/index.html en el navegador
  Llena el formulario
  Verifica que aparezca en el panel
  ```

---

## 🚀 DEPLOYMENT A RAILWAY

### 1. Preparar repositorio

- [ ] Commit todos los cambios
  ```powershell
  git add .
  git commit -m "feat: deployment en la nube preparado"
  git push origin main
  ```

### 2. Configurar Railway

- [ ] Crear cuenta en https://railway.app/
- [ ] Login with GitHub
- [ ] New Project → Deploy from GitHub repo
- [ ] Seleccionar repositorio `Narex04/shamy`

### 3. Variables de entorno

- [ ] Click en Variables
- [ ] Añadir:
  ```
  NODE_ENV=production
  ADMIN_USERNAME=admin
  ADMIN_PASSWORD=__________ (tu password seguro)
  CORS_ORIGIN=https://narex04.github.io
  ```

### 4. Obtener URL

- [ ] Ir a Settings → Networking
- [ ] Generate Domain
- [ ] Copiar URL: `https://____________.up.railway.app`

### 5. Actualizar config.js

- [ ] Abrir `branding/config.js`
- [ ] Reemplazar:

  ```javascript
  API_URL: 'https://TU-URL-AQUI.up.railway.app',
  ```

  Con tu URL de Railway

- [ ] Commit y push:
  ```powershell
  git add branding/config.js
  git commit -m "config: actualizar URL de producción"
  git push origin main
  ```

---

## 🧪 PROBAR EN PRODUCCIÓN

### Test 1: API está activa

- [ ] Abrir en navegador: `https://TU-URL.up.railway.app`
- [ ] Debe mostrar: `{"status":"ok","message":"Shamy Branding Backend"}`

### Test 2: Panel admin funciona

- [ ] Abrir: `https://TU-URL.up.railway.app/api/admin/panel`
- [ ] Login con: admin / tu_password
- [ ] Debe cargar sin errores

### Test 3: Formulario desde GitHub Pages

- [ ] Abrir: `https://narex04.github.io/shamy/branding/`
- [ ] Abrir consola del navegador (F12)
- [ ] Verificar:
  ```
  ✅ 🌍 Entorno: Production
  ✅ 🔌 API URL: https://tu-url.up.railway.app
  ```
- [ ] Llenar y enviar formulario
- [ ] Verificar en panel admin que aparece el brief

---

## 🔄 CONFIGURAR SINCRONIZACIÓN

### Test sincronización nube → local

- [ ] Ejecutar:
  ```powershell
  .\scripts\sync-from-cloud.ps1 `
    -CloudUrl "https://TU-URL.up.railway.app" `
    -Password "tu_password"
  ```
- [ ] Verificar que se crea archivo en `backups/`
- [ ] Verificar que muestra estadísticas correctas

---

## ⚠️ TROUBLESHOOTING

Si algo falla, verifica:

- [ ] **Railway está deployado y activo**

  - Ve a Railway → Deployments
  - Debe mostrar "Active"

- [ ] **Variables de entorno están configuradas**

  - Ve a Railway → Variables
  - Verifica que todas estén presentes

- [ ] **CORS está configurado**

  - En Railway → Variables → CORS_ORIGIN
  - Debe incluir: `https://narex04.github.io`

- [ ] **URL en config.js es correcta**
  - Abre `branding/config.js`
  - Verifica que la URL coincida con Railway

---

## 📊 MONITOREO

### Ver logs en Railway:

- [ ] Ir a Railway → tu proyecto
- [ ] Click en Deployments
- [ ] Click en el deployment activo
- [ ] Ver logs en tiempo real

### Comandos útiles:

```powershell
# Ver briefs en producción
$auth = [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes("admin:tu_password"))
Invoke-RestMethod -Uri "https://TU-URL/api/briefs" -Headers @{
    Authorization = "Basic $auth"
}

# Ver estadísticas
Invoke-RestMethod -Uri "https://TU-URL/api/admin/stats" -Headers @{
    Authorization = "Basic $auth"
}
```

---

## 🎉 DEPLOYMENT EXITOSO

Si todos los checkboxes están marcados:

✅ Tu backend está en la nube
✅ Tu formulario funciona desde GitHub Pages
✅ Puedes sincronizar datos local ↔ nube
✅ El panel admin funciona

---

## 📖 DOCUMENTACIÓN

- **Pasos detallados:** `DEPLOY-AHORA.md`
- **Guía completa:** `DEPLOYMENT-NUBE.md`
- **Resumen de cambios:** `SOLUCION-COMPLETA.md`
- **Documentación técnica:** `BACKEND-README.md`

---

**Última actualización:** $(Get-Date -Format "yyyy-MM-dd HH:mm")
