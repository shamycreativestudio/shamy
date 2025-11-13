# 🎨 Shamy Branding Backend

Sistema completo de backend para gestionar el formulario de branding de Shamy Creative Studio.

## 🚀 Características

- ✅ **API RESTful** para recibir y gestionar briefs de clientes
- ✅ **Base de datos SQLite** (fácil de empezar, sin configuración)
- ✅ **Subida de archivos** (logos, materiales de referencia)
- ✅ **Panel de administración** web para ver y gestionar briefs
- ✅ **Seguridad**: CORS, rate limiting, helmet
- ✅ **Validación** de datos en servidor
- ✅ **Almacenamiento local** de archivos

## 📋 Requisitos

- Node.js 16 o superior
- npm o yarn

## 🔧 Instalación

### 1. Clonar o descargar el proyecto

```bash
cd d:\Trabajo\Shamy\Web\shamy
```

### 2. Instalar dependencias

```powershell
npm install
```

### 3. Configurar variables de entorno

Copia el archivo `.env.example` a `.env`:

```powershell
Copy-Item .env.example .env
```

Edita el archivo `.env` y cambia los valores según necesites:

```env
PORT=3000
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
ADMIN_USERNAME=admin
ADMIN_PASSWORD=TU_PASSWORD_SEGURO  # ⚠️ CAMBIAR ESTO
```

**⚠️ IMPORTANTE:** Cambia el `ADMIN_PASSWORD` por una contraseña segura.

### 4. Inicializar la base de datos

La base de datos se crea automáticamente al iniciar el servidor por primera vez.

## ▶️ Uso

### Iniciar el servidor en modo desarrollo

```powershell
npm run dev
```

### Iniciar el servidor en producción

```powershell
npm start
```

El servidor se iniciará en `http://localhost:3000`

## 📚 Endpoints de la API

### Públicos (sin autenticación)

#### `POST /api/briefs`

Crear un nuevo brief.

**Body:** FormData con todos los campos del formulario + archivos opcionales

**Respuesta:**

```json
{
  "success": true,
  "message": "Brief recibido correctamente",
  "briefId": 1,
  "filesUploaded": 2
}
```

### Protegidos (requieren autenticación)

Todos los endpoints siguientes requieren **Basic Authentication** con las credenciales del `.env`:

#### `GET /api/briefs`

Listar todos los briefs.

**Query params:**

- `page`: número de página (default: 1)
- `limit`: briefs por página (default: 20)
- `estado`: filtrar por estado (nuevo, en_revision, aprobado, rechazado)

#### `GET /api/briefs/:id`

Obtener detalles de un brief específico.

#### `PUT /api/briefs/:id`

Actualizar estado de un brief.

**Body:**

```json
{
  "estado": "en_revision",
  "notas_admin": "Cliente contactado"
}
```

#### `DELETE /api/briefs/:id`

Eliminar un brief y sus archivos asociados.

#### `GET /api/admin/stats`

Obtener estadísticas generales.

#### `GET /api/admin/panel`

Servir el panel de administración HTML.

## 🎛️ Panel de Administración

Accede al panel en: `http://localhost:3000/api/admin/panel`

**Credenciales:** Las que configuraste en el archivo `.env`

### Funcionalidades del panel:

- 📊 Ver estadísticas en tiempo real
- 📋 Listar todos los briefs recibidos
- 🔍 Filtrar por estado
- 👁️ Ver detalles completos de cada brief
- ✏️ Cambiar estado (nuevo → en revisión → aprobado/rechazado)
- 🗑️ Eliminar briefs
- 📎 Descargar archivos adjuntos

## 📁 Estructura de Archivos

```
shamy/
├── server.js              # Servidor Express principal
├── package.json           # Dependencias
├── .env                   # Variables de entorno (NO commitear)
├── database/
│   ├── db.js             # Configuración de SQLite
│   └── briefs.db         # Base de datos (se crea automáticamente)
├── routes/
│   ├── briefs.js         # Endpoints de briefs
│   └── admin.js          # Endpoints de administración
├── admin/
│   └── panel.html        # Panel de administración
├── uploads/              # Archivos subidos
├── branding/
│   ├── index.html        # Formulario de branding
│   ├── script.js         # Lógica del formulario (con integración API)
│   └── styles.css
└── index.html            # Página principal
```

## 🗄️ Base de Datos

El sistema usa **SQLite** con dos tablas principales:

### `briefs`

Almacena todos los datos del formulario de branding.

### `brief_files`

Almacena la información de archivos adjuntos (con relación a briefs).

## 🔒 Seguridad

- ✅ **Helmet**: Headers de seguridad HTTP
- ✅ **CORS**: Control de origen cruzado
- ✅ **Rate Limiting**: Máximo 10 requests cada 15 minutos por IP
- ✅ **Validación**: Todos los campos requeridos se validan
- ✅ **Sanitización**: Prevención de inyección SQL
- ✅ **Basic Auth**: Protección de endpoints administrativos
- ✅ **File validation**: Solo archivos permitidos

## 🚀 Deployment

### Opción 1: Servidor VPS (Recomendado)

1. **Subir archivos al servidor**
2. **Instalar Node.js y npm**
3. **Instalar dependencias:** `npm install --production`
4. **Configurar .env con datos de producción**
5. **Usar PM2 para mantener el proceso:**
   ```bash
   npm install -g pm2
   pm2 start server.js --name shamycreativestudio
   pm2 startup
   pm2 save
   ```
6. **Configurar nginx como proxy reverso** (opcional pero recomendado)

### Opción 2: Heroku

```bash
# Instalar Heroku CLI
heroku login
heroku create shamy-branding
git push heroku main
heroku config:set NODE_ENV=production
heroku config:set ADMIN_PASSWORD=tu_password
```

### Opción 3: Railway / Render / Vercel

Estos servicios detectan automáticamente Node.js y pueden deployar directamente desde GitHub.

## 📧 Configuración de Emails (Opcional)

Para recibir notificaciones por email cuando llega un nuevo brief, edita el `.env`:

```env
EMAIL_ENABLED=true
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tu-email@gmail.com
SMTP_PASS=tu-app-password
EMAIL_TO=contacto@shamy.com
```

## 🔧 Troubleshooting

### Error: "EADDRINUSE"

El puerto 3000 ya está en uso. Cambia el `PORT` en `.env` o cierra la aplicación que usa ese puerto.

### Error: "Cannot find module"

Ejecuta `npm install` para instalar todas las dependencias.

### Los briefs no se guardan

Verifica que el directorio `database/` tenga permisos de escritura.

### No puedo subir archivos

Verifica que el directorio `uploads/` exista y tenga permisos de escritura.

## 📝 Notas Importantes

⚠️ **Base de datos SQLite**: Es perfecta para empezar, pero para **producción con mucho tráfico**, considera migrar a PostgreSQL o MySQL.

⚠️ **Archivos subidos**: Se guardan localmente. Para producción, considera usar **AWS S3**, **Cloudinary** o similar.

⚠️ **Credenciales**: NUNCA commitees el archivo `.env` al repositorio.

## 🆙 Próximas Mejoras

- [ ] Migración a PostgreSQL
- [ ] Envío de emails automático
- [ ] Exportar briefs a PDF
- [ ] Integración con CRM
- [ ] Dashboard de analíticas
- [ ] Notificaciones en tiempo real

## 📞 Soporte

Si tienes problemas, contacta a: **contacto@shamy.com**

## 📄 Licencia

© 2025 Shamy Creative Studio. Todos los derechos reservados.
