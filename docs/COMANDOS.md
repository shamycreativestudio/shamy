# 🚀 COMANDOS RÁPIDOS - COPIAR Y PEGAR

## ⚡ INSTALACIÓN Y ARRANQUE

### Opción 1: Todo en un comando (Recomendado)

```powershell
cd "d:\Trabajo\Shamy\Web\shamy" ; npm install ; npm run dev
```

### Opción 2: Paso a paso

```powershell
# Navegar a la carpeta
cd "d:\Trabajo\Shamy\Web\shamy"

# Instalar dependencias
npm install

# Iniciar servidor
npm run dev
```

---

## 🌐 URLs IMPORTANTES

### Para copiar y pegar en el navegador:

```
http://localhost:3000/branding
```

Formulario de branding (para clientes)

```
http://localhost:3000/api/admin/panel
```

Panel de administración

- Usuario: `admin`
- Contraseña: `<CAMBIA_ESTO>`

---

## 🔧 COMANDOS DE DESARROLLO

### Iniciar servidor (modo desarrollo con auto-reload)

```powershell
npm run dev
```

### Iniciar servidor (modo producción)

```powershell
npm start
```

### Detener servidor

```
Ctrl + C
```

### Reinicializar base de datos

```powershell
npm run init-db
```

---

## 🔍 VERIFICAR INSTALACIÓN

### Ver versiones instaladas

```powershell
node --version
npm --version
```

### Ver estructura de carpetas

```powershell
Get-ChildItem -Recurse -Depth 1 | Select-Object FullName
```

### Verificar que las dependencias se instalaron

```powershell
npm list --depth=0
```

---

## 📊 MONITOREAR BASE DE DATOS (Opcional)

### Ver cuántos briefs hay

```powershell
# Si tienes SQLite instalado:
sqlite3 database/briefs.db "SELECT COUNT(*) FROM briefs;"
```

### Ver últimos 5 briefs

```powershell
sqlite3 database/briefs.db "SELECT id, empresa_nombre, contacto_email, created_at FROM briefs ORDER BY created_at DESC LIMIT 5;"
```

---

## 🔐 CAMBIAR CONTRASEÑA DEL ADMIN

### Editar el archivo .env

```powershell
notepad .env
```

Busca esta línea:

```
ADMIN_PASSWORD=<CAMBIA_ESTO>
```

Cámbiala por tu contraseña segura:

```
ADMIN_PASSWORD=MiPasswordSeguro123!
```

Guarda y reinicia el servidor.

---

## 🧪 PRUEBA RÁPIDA DEL SISTEMA

### Test 1: Health Check de la API

```powershell
curl http://localhost:3000/api/health
```

Deberías ver:

```json
{ "status": "ok", "timestamp": "2025-11-11T...", "version": "1.0.0" }
```

### Test 2: Ver estadísticas (requiere autenticación)

```powershell
curl -u admin:<CAMBIA_ESTO> http://localhost:3000/api/admin/stats
```

### Test 3: Listar briefs

```powershell
curl -u admin:<CAMBIA_ESTO> http://localhost:3000/api/briefs
```

---

## 📁 GESTIÓN DE ARCHIVOS

### Ver archivos subidos

```powershell
Get-ChildItem uploads
```

### Ver tamaño total de archivos

```powershell
(Get-ChildItem uploads -Recurse | Measure-Object -Property Length -Sum).Sum / 1MB
```

### Limpiar archivos antiguos (CUIDADO)

```powershell
# Eliminar archivos de más de 30 días
Get-ChildItem uploads -File | Where-Object {$_.LastWriteTime -lt (Get-Date).AddDays(-30)} | Remove-Item
```

---

## 🔄 BACKUP Y RESTAURACIÓN

### Hacer backup de la base de datos

```powershell
$fecha = Get-Date -Format "yyyy-MM-dd_HH-mm"
Copy-Item database/briefs.db "database/backup_$fecha.db"
```

### Hacer backup completo (DB + archivos)

```powershell
$fecha = Get-Date -Format "yyyy-MM-dd_HH-mm"
Compress-Archive -Path database/briefs.db,uploads/* -DestinationPath "backup_$fecha.zip"
```

### Restaurar backup

```powershell
# Detener el servidor primero (Ctrl+C)
Copy-Item database/backup_2025-11-11_14-30.db database/briefs.db
```

---

## 📦 ACTUALIZAR DEPENDENCIAS

### Ver dependencias desactualizadas

```powershell
npm outdated
```

### Actualizar todas las dependencias

```powershell
npm update
```

### Actualizar una dependencia específica

```powershell
npm install express@latest
```

---

## 🔍 LOGS Y DEBUG

### Ver logs en tiempo real

```powershell
# El servidor ya muestra logs en la consola
npm run dev
```

### Buscar errores en la consola

```powershell
# Mientras el servidor corre, todos los logs aparecen en la consola
# Para guardar logs en un archivo:
npm run dev > logs.txt 2>&1
```

---

## 🌐 ACCEDER DESDE OTROS DISPOSITIVOS

### Averiguar tu IP local

```powershell
(Get-NetIPAddress -AddressFamily IPv4 | Where-Object {$_.InterfaceAlias -like "*Ethernet*" -or $_.InterfaceAlias -like "*Wi-Fi*"}).IPAddress
```

Ejemplo de salida: `192.168.1.100`

### Editar CORS para permitir acceso remoto

```powershell
notepad .env
```

Añade tu IP a CORS_ORIGIN:

```
CORS_ORIGIN=http://localhost:3000,http://192.168.1.100:3000
```

Reinicia el servidor y accede desde otro dispositivo:

```
http://192.168.1.100:3000/branding
```

---

## 🚀 PREPARAR PARA PRODUCCIÓN

### Cambiar a modo producción

```powershell
notepad .env
```

Cambia:

```
NODE_ENV=production
ADMIN_PASSWORD=TuPasswordSuperSeguro123!
PORT=80
```

### Instalar PM2 (mantener servidor corriendo)

```powershell
npm install -g pm2
pm2 start server.js --name shamycreativestudio
pm2 startup
pm2 save
```

### Ver estado con PM2

```powershell
pm2 status
pm2 logs shamycreativestudio
```

### Detener PM2

```powershell
pm2 stop shamycreativestudio
pm2 delete shamycreativestudio
```

---

## 🧹 LIMPIEZA Y MANTENIMIENTO

### Limpiar node_modules y reinstalar

```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json
npm install
```

### Verificar integridad de paquetes

```powershell
npm audit
```

### Arreglar vulnerabilidades

```powershell
npm audit fix
```

---

## 📊 ESTADÍSTICAS DEL PROYECTO

### Contar líneas de código

```powershell
(Get-ChildItem -Include *.js,*.html,*.css -Recurse | Select-String .).Count
```

### Ver tamaño del proyecto

```powershell
(Get-ChildItem -Recurse | Measure-Object -Property Length -Sum).Sum / 1MB
```

---

## 🆘 SOLUCIÓN RÁPIDA DE PROBLEMAS

### Problema: Puerto ocupado

```powershell
# Ver qué proceso usa el puerto 3000
netstat -ano | findstr :3000

# Matar el proceso (reemplaza PID con el número que aparece)
taskkill /PID <PID> /F
```

### Problema: Permiso denegado

```powershell
# Ejecutar PowerShell como Administrador
Start-Process powershell -Verb runAs
```

### Problema: Módulos no encontrados

```powershell
Remove-Item -Recurse -Force node_modules
npm cache clean --force
npm install
```

### Problema: Base de datos bloqueada

```powershell
# Detener el servidor y reiniciar
# Si persiste, eliminar el archivo .db-journal
Remove-Item database/briefs.db-journal -ErrorAction SilentlyContinue
```

---

## 🔐 SEGURIDAD RÁPIDA

### Generar password seguro

```powershell
-join ((48..57) + (65..90) + (97..122) | Get-Random -Count 16 | ForEach-Object {[char]$_})
```

### Cambiar password del admin rápidamente

```powershell
(Get-Content .env) -replace 'ADMIN_PASSWORD=.*', 'ADMIN_PASSWORD=TuNuevoPassword123' | Set-Content .env
```

---

## 📝 ATAJOS ÚTILES

### Abrir carpeta del proyecto en VS Code

```powershell
code .
```

### Abrir carpeta del proyecto en Explorador

```powershell
explorer .
```

### Abrir panel admin en navegador

```powershell
Start-Process "http://localhost:3000/api/admin/panel"
```

### Abrir formulario en navegador

```powershell
Start-Process "http://localhost:3000/branding"
```

---

## 🎯 SCRIPT DE INICIO COMPLETO

Copia y pega esto para iniciar todo automáticamente:

```powershell
# Navegar al proyecto
cd "d:\Trabajo\Shamy\Web\shamy"

# Verificar Node.js
Write-Host "Verificando Node.js..." -ForegroundColor Cyan
node --version

# Instalar dependencias (si es necesario)
if (!(Test-Path "node_modules")) {
    Write-Host "Instalando dependencias..." -ForegroundColor Yellow
    npm install
}

# Iniciar servidor
Write-Host "`nIniciando servidor..." -ForegroundColor Green
Write-Host "Formulario: http://localhost:3000/branding" -ForegroundColor Cyan
Write-Host "Panel Admin: http://localhost:3000/api/admin/panel" -ForegroundColor Cyan
Write-Host "`nPresiona Ctrl+C para detener`n" -ForegroundColor Yellow

npm run dev
```

Guarda esto como `iniciar.ps1` y ejecútalo con:

```powershell
.\iniciar.ps1
```

---

## 🎉 ¡COMANDOS ESENCIALES RESUMIDOS!

```powershell
# 1. INSTALAR Y ARRANCAR
cd "d:\Trabajo\Shamy\Web\shamy" ; npm install ; npm run dev

# 2. ABRIR EN NAVEGADOR
Start-Process "http://localhost:3000/branding"
Start-Process "http://localhost:3000/api/admin/panel"

# 3. VER ESTADÍSTICAS
curl -u admin:<CAMBIA_ESTO> http://localhost:3000/api/admin/stats

# 4. BACKUP
$fecha = Get-Date -Format "yyyy-MM-dd"; Copy-Item database/briefs.db "backup_$fecha.db"

# 5. CAMBIAR PASSWORD
notepad .env

# 6. DETENER
Ctrl + C
```

---

**Guarda este archivo para referencia rápida** ⭐

---

© 2025 Shamy Creative Studio
