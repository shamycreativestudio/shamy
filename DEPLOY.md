# Guía de despliegue en GitHub Pages

## 📦 Pasos para subir a GitHub

### 1. Inicializar Git en el repositorio local

```bash
cd d:\Trabajo\Shamy\shamy
git init
git add .
git commit -m "Initial commit: Shamy Creative Studio website"
```

### 2. Crear repositorio en GitHub

1. Ve a https://github.com/new
2. Nombre del repositorio: `shamy`
3. Descripción: "Shamy Creative Studio - Diseño de marca con propósito"
4. Público o Privado (tu elección)
5. **NO** inicialices con README (ya tenemos uno)
6. Click en "Create repository"

### 3. Conectar y subir

```bash
# Conectar con tu repo de GitHub
git remote add origin https://github.com/TU-USUARIO/shamy.git

# Renombrar branch a main (si es necesario)
git branch -M main

# Subir todo
git push -u origin main
```

### 4. Activar GitHub Pages

1. En tu repositorio de GitHub, ve a **Settings**
2. En el menú lateral, click en **Pages**
3. En "Source", selecciona:
   - **Branch:** `main`
   - **Folder:** `/ (root)`
4. Click en **Save**
5. Espera 1-2 minutos

### 5. Acceder a tu sitio

Tu sitio estará disponible en:
- **Página principal:** `https://TU-USUARIO.github.io/shamy/`
- **Formulario branding:** `https://TU-USUARIO.github.io/shamy/branding/`

## 🔄 Actualizaciones futuras

Cuando hagas cambios:

```bash
git add .
git commit -m "Descripción de tus cambios"
git push
```

GitHub Pages se actualiza automáticamente en 1-2 minutos.

## 🎨 Personalización

### Actualizar el README.md

Edita `README.md` y reemplaza:
- `TU-USUARIO` con tu usuario de GitHub
- Agrega tu email/contacto en la sección de contacto

### Dominio personalizado (opcional)

Si tienes un dominio propio:

1. En Settings → Pages → Custom domain
2. Escribe tu dominio: `www.shamy.com`
3. Crea un archivo `CNAME` en la raíz con tu dominio
4. Configura DNS en tu proveedor:
   - Tipo: CNAME
   - Host: www
   - Value: TU-USUARIO.github.io

## ✅ Checklist antes de subir

- [ ] Verifica que todos los archivos estén en su lugar
- [ ] Abre `index.html` localmente y confirma que funciona
- [ ] Abre `branding/index.html` localmente y prueba el formulario
- [ ] Verifica que los logos se vean correctamente
- [ ] Actualiza el README con tu usuario de GitHub
- [ ] Revisa el `.gitignore` para no subir archivos innecesarios

## 🐛 Solución de problemas

### Los estilos no cargan
- Verifica las rutas en los `<link>` sean relativas
- En GitHub Pages, las rutas son case-sensitive

### Las imágenes no aparecen
- Verifica las rutas de las imágenes en `src` y `href`
- Usa rutas relativas, no absolutas

### La página muestra solo texto
- Verifica que `styles.css` esté en la ruta correcta
- Revisa la consola del navegador (F12) para errores

## 📞 Recursos

- [Documentación GitHub Pages](https://docs.github.com/pages)
- [Guía Git](https://git-scm.com/doc)
- [Tutorial GitHub Pages](https://pages.github.com/)

---

¡Listo para lanzar! 🚀
