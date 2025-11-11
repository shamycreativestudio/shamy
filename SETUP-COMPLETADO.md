# 🎨 BACKEND SHAMY - CONFIGURACIÓN COMPLETADA

## ✅ LO QUE SE HA CREADO

### 📁 Estructura del Proyecto

```
shamy/
├── 📄 package.json              ← Dependencias del proyecto
├── 📄 .env                      ← Configuración (YA CREADO)
├── 📄 .env.example             ← Plantilla de configuración
├── 📄 server.js                ← Servidor principal Express
├── 📄 BACKEND-README.md        ← Documentación completa
├── 📄 INSTALACION.md           ← Guía rápida paso a paso
├──
├── 📁 database/
│   ├── db.js                   ← Configuración SQLite
│   └── briefs.db               ← Base de datos (se crea automáticamente)
├──
├── 📁 routes/
│   ├── briefs.js               ← API endpoints de briefs
│   └── admin.js                ← API endpoints de admin
├──
├── 📁 admin/
│   └── panel.html              ← Panel de administración visual
├──
├── 📁 scripts/
│   └── init-db.js              ← Script para inicializar DB
├──
├── 📁 uploads/                 ← Archivos subidos (se crean aquí)
│   └── .gitkeep
└──
└── 📁 branding/
    ├── index.html              ← Formulario (sin cambios)
    ├── script.js               ← ✨ MODIFICADO para enviar al backend
    └── styles.css              ← Sin cambios
```

## 🚀 CÓMO INICIAR (RÁPIDO)

### 1️⃣ Instalar Dependencias

```powershell
npm install
```

### 2️⃣ Iniciar el Servidor

```powershell
npm run dev
```

### 3️⃣ Abrir el Formulario

Navega a: `http://localhost:3000/branding`

### 4️⃣ Ver el Panel Admin

Navega a: `http://localhost:3000/api/admin/panel`

**Credenciales:**

- Usuario: `admin`
- Contraseña: `shamy2025`

## 📊 FUNCIONALIDADES IMPLEMENTADAS

### ✅ Backend (API)

- `POST /api/briefs` - Recibir nuevo brief con archivos
- `GET /api/briefs` - Listar todos los briefs (protegido)
- `GET /api/briefs/:id` - Ver detalle de un brief (protegido)
- `PUT /api/briefs/:id` - Actualizar estado (protegido)
- `DELETE /api/briefs/:id` - Eliminar brief (protegido)
- `GET /api/admin/stats` - Estadísticas (protegido)
- `GET /api/admin/panel` - Panel HTML

### ✅ Base de Datos

- **SQLite** - Sin configuración necesaria
- Tablas: `briefs` y `brief_files`
- Índices optimizados
- Triggers automáticos
- Se crea automáticamente al iniciar

### ✅ Seguridad

- ✅ Helmet (headers seguros)
- ✅ CORS configurado
- ✅ Rate limiting (10 requests/15min)
- ✅ Autenticación básica para admin
- ✅ Validación de tipos de archivo
- ✅ Límite de tamaño de archivos (10MB)

### ✅ Panel de Administración

- 📊 Dashboard con estadísticas
- 📋 Lista de todos los briefs
- 🔍 Filtros por estado
- 👁️ Ver detalles completos
- ✏️ Cambiar estados
- 🗑️ Eliminar briefs
- 📎 Descargar archivos adjuntos
- 🔄 Auto-refresh cada 30 segundos

### ✅ Frontend Integrado

- Envío de datos al backend vía FormData
- Subida de múltiples archivos
- Manejo de errores
- Feedback visual al usuario
- Fallback: descarga JSON si falla el envío

## 🔐 CREDENCIALES ACTUALES

**⚠️ IMPORTANTE: CAMBIAR ANTES DE PRODUCCIÓN**

```
Usuario: admin
Contraseña: shamy2025
```

Para cambiar, edita el archivo `.env`:

```env
ADMIN_USERNAME=tu_usuario
ADMIN_PASSWORD=tu_password_seguro_123
```

## 📝 CONFIGURACIÓN DEL .ENV

El archivo `.env` YA ESTÁ CREADO con esta configuración:

```env
PORT=3000
NODE_ENV=development
DB_PATH=./database/briefs.db
UPLOAD_DIR=./uploads
MAX_FILE_SIZE=10485760
CORS_ORIGIN=http://localhost:3000,http://127.0.0.1:5500,http://localhost:5500
ADMIN_USERNAME=admin
ADMIN_PASSWORD=shamy2025
EMAIL_ENABLED=false
```

## 🎯 FLUJO COMPLETO

1. **Cliente** llena el formulario en `/branding`
2. **Frontend** envía datos + archivos a `POST /api/briefs`
3. **Backend** valida, guarda en DB y archivos en disco
4. **Admin** ve el brief en `/api/admin/panel`
5. **Admin** cambia estado: nuevo → en_revision → aprobado
6. **Admin** descarga archivos adjuntos si es necesario

## 🧪 CÓMO PROBAR

### Prueba 1: Enviar un Brief

1. Inicia el servidor: `npm run dev`
2. Abre: `http://localhost:3000/branding`
3. Completa al menos los campos obligatorios:
   - Nombre empresa
   - Tu nombre y cargo
   - Email
   - Teléfono
   - Descripción breve
   - Selecciona al menos una necesidad
4. Completa los demás pasos
5. Click en "Enviar formulario"
6. Deberías ver: "¡Gracias! Recibimos tu información."

### Prueba 2: Ver en el Panel Admin

1. Abre: `http://localhost:3000/api/admin/panel`
2. Login: admin / shamy2025
3. Deberías ver:
   - Estadística: 1 brief total
   - 1 brief en estado "nuevo"
   - La tabla muestra tu brief
4. Click en "Ver" para ver todos los detalles
5. Click en "Estado" para cambiar a "en_revision"

### Prueba 3: API Directa

Puedes probar los endpoints con curl o Postman:

```powershell
# Health check (sin auth)
curl http://localhost:3000/api/health

# Listar briefs (con auth)
curl -u admin:shamy2025 http://localhost:3000/api/briefs

# Ver brief específico
curl -u admin:shamy2025 http://localhost:3000/api/briefs/1
```

## 📦 DEPENDENCIAS INSTALADAS

```json
{
  "express": "^4.18.2", // Framework web
  "cors": "^2.8.5", // Control de CORS
  "multer": "^1.4.5-lts.1", // Subida de archivos
  "better-sqlite3": "^9.2.2", // Base de datos SQLite
  "dotenv": "^16.3.1", // Variables de entorno
  "express-rate-limit": "^7.1.5", // Rate limiting
  "helmet": "^7.1.0", // Seguridad headers
  "compression": "^1.7.4", // Compresión gzip
  "nodemon": "^3.0.2" // Auto-reload (dev)
}
```

## 🚀 DEPLOYMENT

### Para Producción:

1. **Cambiar credenciales** en `.env`
2. **Cambiar NODE_ENV** a `production`
3. **Usar PM2** para mantener el proceso:
   ```bash
   npm install -g pm2
   pm2 start server.js --name shamy-backend
   ```
4. **Nginx** como proxy reverso (opcional)

Ver `BACKEND-README.md` para deployment completo en VPS, Heroku, Railway, etc.

## 📚 ARCHIVOS DE DOCUMENTACIÓN

1. **INSTALACION.md** - Guía rápida paso a paso
2. **BACKEND-README.md** - Documentación técnica completa
3. **ESTE ARCHIVO** - Resumen de configuración

## ✨ CARACTERÍSTICAS EXTRA

- ✅ **Progreso guardado**: Si el cliente cierra el navegador, el progreso se mantiene (localStorage)
- ✅ **Validación en tiempo real**: Frontend + Backend
- ✅ **Manejo de errores**: Mensajes claros al usuario
- ✅ **Responsive**: Panel admin funciona en mobile
- ✅ **Paginación**: 20 briefs por página en el panel
- ✅ **Búsqueda**: Filtrar por estado
- ✅ **Timestamps**: Fecha de creación y actualización automáticas
- ✅ **Archivos múltiples**: Hasta 10 archivos por brief
- ✅ **JSON completo**: Se guarda el JSON íntegro del formulario

## 🆘 SOLUCIÓN DE PROBLEMAS

### Error: "Cannot find module 'express'"

```powershell
npm install
```

### Error: "EADDRINUSE: address already in use"

Cambia el puerto en `.env`:

```env
PORT=3001
```

### No aparecen los briefs en el panel

1. Verifica que el servidor esté corriendo
2. Revisa la consola del navegador (F12)
3. Verifica las credenciales de login

### Los archivos no se suben

1. Verifica que la carpeta `uploads/` exista
2. Verifica permisos de escritura
3. Verifica el tamaño del archivo (máx 10MB)

## 🎉 ¡TODO LISTO!

Tu backend está **100% configurado y listo para usar**.

Solo necesitas:

1. `npm install`
2. `npm run dev`
3. Abrir `http://localhost:3000/branding`

---

**💬 ¿Dudas?** Revisa `INSTALACION.md` para una guía paso a paso más detallada.

**📖 ¿Documentación completa?** Lee `BACKEND-README.md`.

**🚀 ¿Listo para producción?** Cambia las credenciales y sigue la guía de deployment.
