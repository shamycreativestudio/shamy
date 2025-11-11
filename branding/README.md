# shamy] branding

Formulario interactivo de brief para proyectos de identidad de marca.

## 🎯 Funcionalidades

- **Wizard multi-paso**: 10 pasos organizados según necesidades del proyecto
- **Guardado automático**: Los datos se guardan en localStorage mientras completas
- **Validación inteligente**: Campos requeridos y validación en tiempo real
- **Exportación JSON**: Descarga toda la información en formato estructurado
- **Diseño responsive**: Optimizado para móviles, tablets y desktop
- **Accesibilidad**: ARIA labels y navegación por teclado

## 📋 Estructura del formulario

1. **Información básica**: Nombre, empresa, email, teléfono
2. **Tipo de proyecto**: Branding nuevo o rediseño
3. **Necesidades principales**: Marca, web, redes sociales, etc.
4. **Objetivos**: Principal y secundarios
5. **Métricas**: KPIs a medir
6. **Motivaciones de rediseño**: (condicional)
7. **Elementos a mantener**: (condicional)
8. **Público objetivo**: Descripción de la audiencia
9. **Entregables**: Qué se necesita entregar
10. **Información adicional**: Presupuesto, plazos, referencias, archivos

## 🎨 Características de diseño

- **Identidad Shamy**: Logo animado con tagline "branding"
- **Tipografía**: Onest (400, 600, 700, 900)
- **Colores**: Negro (#000000), grises y blancos
- **Animaciones**: Transiciones suaves con cubic-bezier
- **Barra de progreso**: 10%, 20%, 30%... hasta 100%

## 💾 Persistencia de datos

Los datos se guardan automáticamente en `localStorage` con la clave `briefFormProgressV1`:

```javascript
{
  step: 3,           // Paso actual
  data: { ... }      // Todos los campos del formulario
}
```

### Botones de acción:

- **Guardar y continuar luego**: Guarda el progreso actual
- **Empezar de nuevo**: Limpia todos los datos guardados
- **Descargar JSON**: Exporta la información completa

## 🚀 Uso

1. Accede a `/branding/` desde el sitio principal
2. Completa los campos que puedas (los vacíos se pueden dejar)
3. Usa los botones "Anterior" y "Siguiente" para navegar
4. Tu progreso se guarda automáticamente
5. Al finalizar, descarga el JSON o envía el formulario

## 📱 Responsive Design

- **Desktop**: Formulario centrado, anchos máximos optimizados
- **Tablet**: Adaptación de grids y espaciados
- **Mobile**: 
  - Logo más pequeño
  - Botón "Empezar de nuevo" debajo del logo
  - Grids de 2 columnas pasan a 1 columna
  - Campos optimizados para touch

## 🔧 Tecnologías

- **HTML5**: Semántico con ARIA
- **CSS3**: Custom Properties, Grid, Flexbox
- **JavaScript**: Vanilla ES6+
- **Storage**: localStorage API
- **Fonts**: Google Fonts (Onest)

## 📄 Archivos

- `index.html`: Estructura del formulario
- `styles.css`: Estilos completos y responsive
- `script.js`: Lógica, validación, persistencia
- `assets/`: Logos SVG (isotipo, logotipo, favicon)

---

Parte de **Shamy Creative Studio** © 2025
