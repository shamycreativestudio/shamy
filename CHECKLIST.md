# ✅ Checklist de verificación antes de subir a GitHub

## 📝 Revisión de archivos

- [ ] Abre `d:\Trabajo\Shamy\shamy\index.html` en el navegador
  - [ ] ¿Se ve el logo de Shamy?
  - [ ] ¿Los 3 cards de servicios están visibles?
  - [ ] ¿El botón "Iniciar brief →" está presente?
  - [ ] ¿El estilo minimalista se aplica correctamente?

- [ ] Abre `d:\Trabajo\Shamy\shamy\branding\index.html` en el navegador
  - [ ] ¿Se ve el logo blanco en la barra negra superior?
  - [ ] ¿Aparece "branding" al pasar el mouse sobre el logo?
  - [ ] ¿El botón "Empezar de nuevo" funciona?
  - [ ] ¿La barra de progreso muestra 10%?
  - [ ] ¿Puedes navegar entre pasos?
  - [ ] ¿Los datos se guardan al cerrar y volver?
  - [ ] ¿El logo del footer está alineado con el texto?

## 🎨 Revisión visual

- [ ] Los logos SVG se ven nítidos (no pixelados)
- [ ] La tipografía Onest se carga correctamente
- [ ] Los colores siguen la paleta de Shamy (negro, grises, blancos)
- [ ] Las animaciones son suaves
- [ ] El diseño es responsive en:
  - [ ] Desktop (1920px+)
  - [ ] Laptop (1366px)
  - [ ] Tablet (768px)
  - [ ] Móvil (375px)

## 📄 Revisión de documentación

- [ ] `README.md` está completo
- [ ] `DEPLOY.md` tiene instrucciones claras
- [ ] `branding/README.md` documenta el formulario
- [ ] `.gitignore` excluye archivos innecesarios

## 🔗 Preparación para GitHub

- [ ] Tienes una cuenta de GitHub
- [ ] Sabes tu nombre de usuario de GitHub
- [ ] Has actualizado `TU-USUARIO` en los archivos:
  - [ ] `README.md`
  - [ ] `DEPLOY.md`
  - [ ] `SETUP.sh`

## 🚀 Ejecución de comandos

```bash
# 1. Navegar a la carpeta
cd d:\Trabajo\Shamy\shamy

# 2. Inicializar Git
git init

# 3. Agregar archivos
git add .

# 4. Verificar qué se va a subir (IMPORTANTE)
git status

# ¿Todo bien? Continúa:

# 5. Primer commit
git commit -m "Initial commit: Shamy Creative Studio website with branding brief form"

# 6. Crear repo en GitHub (hazlo en github.com/new)
# Nombre: shamy
# No inicialices con README

# 7. Conectar con GitHub (REEMPLAZA TU-USUARIO)
git remote add origin https://github.com/TU-USUARIO/shamy.git

# 8. Verificar la conexión
git remote -v

# 9. Subir
git branch -M main
git push -u origin main

# 10. Activar GitHub Pages
# Ve a: https://github.com/TU-USUARIO/shamy/settings/pages
# Source: main / (root)
# Save
```

## 🎯 Verificación post-despliegue

Espera 2-3 minutos y verifica:

- [ ] `https://TU-USUARIO.github.io/shamy/` carga correctamente
- [ ] `https://TU-USUARIO.github.io/shamy/branding/` funciona
- [ ] Los estilos se aplican correctamente
- [ ] Las imágenes cargan
- [ ] No hay errores en la consola (F12)

## 🐛 Si algo falla

### Los estilos no cargan
```bash
# Verifica las rutas en index.html
# Deben ser relativas: "assets/css/main.css"
# NO absolutas: "/assets/css/main.css"
```

### Las imágenes no aparecen
```bash
# Verifica las rutas en HTML
# Correctas: "assets/img/logo.svg"
# Incorrectas: "/assets/img/logo.svg" o "C:/..."
```

### Error 404 en branding
```bash
# Verifica que la carpeta se llame exactamente "branding"
# (minúsculas, sin espacios)
```

## 📞 Recursos de ayuda

- [GitHub Pages Docs](https://docs.github.com/pages)
- [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)
- [Markdown Guide](https://www.markdownguide.org/)

---

## ✨ Resultado esperado

Una vez completado, tendrás:

✅ Repositorio público en GitHub: `github.com/TU-USUARIO/shamy`  
✅ Sitio web live: `https://TU-USUARIO.github.io/shamy/`  
✅ Formulario de brief funcional: `https://TU-USUARIO.github.io/shamy/branding/`  
✅ Estructura lista para escalar con nuevas secciones  
✅ Documentación completa para mantener el proyecto  

---

**¡Éxito! 🚀**
