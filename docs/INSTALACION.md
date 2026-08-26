# 🚀 Guía Rápida de Instalación

## Paso 1: Instalar Node.js (si no lo tienes)

Descarga e instala Node.js desde: https://nodejs.org/
Versión recomendada: LTS (Long Term Support)

Verifica la instalación:

```powershell
node --version
npm --version
```

## Paso 2: Instalar Dependencias

Abre PowerShell en la carpeta del proyecto y ejecuta:

```powershell
cd "d:\Trabajo\Shamy\Web\shamy"
npm install
```

Esto instalará todas las dependencias necesarias (puede tardar 1-2 minutos).

## Paso 3: Iniciar el Servidor

```powershell
npm run dev
```

Verás algo como esto:

```
╔════════════════════════════════════════════╗
║   🎨 Shamy Branding Backend Server       ║
╚════════════════════════════════════════════╝

✅ Servidor corriendo en: http://localhost:3000
✅ API disponible en: http://localhost:3000/api
✅ Panel admin en: http://localhost:3000/api/admin/panel

📝 Entorno: development
📁 Base de datos: ./database/briefs.db
```

## Paso 4: Probar el Formulario

1. Abre tu navegador en: `http://localhost:3000/branding`
2. Completa el formulario
3. Haz clic en "Enviar formulario"
4. Deberías ver el mensaje de éxito

## Paso 5: Ver los Briefs en el Panel Admin

1. Abre: `http://localhost:3000/api/admin/panel`
2. Credenciales:
   - Usuario: `admin`
   - Contraseña: `<CAMBIA_ESTO>`
3. Verás el brief que acabas de enviar

## ✅ ¡Listo!

Ya tienes tu backend funcionando con:

- ✅ Base de datos SQLite
- ✅ API REST completa
- ✅ Panel de administración
- ✅ Subida de archivos
- ✅ Seguridad básica

## 🔧 Comandos Útiles

```powershell
# Iniciar en modo desarrollo (con auto-reload)
npm run dev

# Iniciar en modo producción
npm start

# Detener el servidor
Ctrl + C

# Reinicializar la base de datos
npm run init-db
```

## 📱 Acceder desde otros dispositivos

Si quieres probar desde tu celular o tablet en la misma red:

1. Averigua tu IP local:

```powershell
ipconfig
```

Busca "IPv4 Address" (ej: 192.168.1.100)

2. Edita `.env` y añade tu IP al CORS_ORIGIN:

```env
CORS_ORIGIN=http://localhost:3000,http://192.168.1.100:3000
```

3. Accede desde otro dispositivo:
   `http://192.168.1.100:3000/branding`

## ⚠️ Problemas Comunes

### "npm no se reconoce como comando"

Necesitas instalar Node.js primero.

### "EADDRINUSE: address already in use"

El puerto 3000 está ocupado. Cambia el puerto en `.env`:

```env
PORT=3001
```

### "Cannot find module"

Ejecuta: `npm install`

### No se guardan los briefs

Verifica que la carpeta `database/` tenga permisos de escritura.

## 🎯 Próximos Pasos

1. **Cambia la contraseña del admin** en el archivo `.env`
2. **Personaliza el email** de notificaciones (opcional)
3. **Despliega en un servidor** cuando estés listo para producción

Lee el archivo `BACKEND-README.md` para información completa sobre deployment y configuración avanzada.

## 💡 Consejos

- El servidor debe estar corriendo para que el formulario funcione
- La base de datos se crea automáticamente la primera vez
- Los archivos subidos se guardan en la carpeta `uploads/`
- Puedes ver los datos directamente en el panel admin

---

**¿Necesitas ayuda?** Contacta a: contacto@shamy.com
