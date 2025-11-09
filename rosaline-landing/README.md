# Landing Page – Rosaline Olavarría

Proyecto base para la landing page del emprendimiento de cosmética capilar **Rosaline Olavarría**, construido con React, Vite, Tailwind CSS y animaciones con Framer Motion.

## Características principales

- Estética femenina, natural y profesional usando la paleta: rosa coral `#FB6066`, crema suave `#FFefc1`, amarillo miel `#FDD86E`, durazno `#FFA463` y terracota `#F66B40`.
- Tipografías elegantes Playfair Display (títulos) y Open Sans (texto) provenientes de Google Fonts.
- Secciones modulares listas para reutilizar: Hero, Beneficios, Productos y Contacto.
- Botones reutilizables con variantes y micro-interacciones en hover/press.
- Animaciones suaves al hacer scroll con Framer Motion.
- Layout responsive con navegación móvil y secciones optimizadas para pantallas pequeñas, listo para desplegar rápidamente en Vercel.

## Requisitos previos

- Node.js 18 o superior
- npm 9 o superior

## Instalación y scripts

```bash
npm install        # instala dependencias
npm run dev        # ejecuta el servidor de desarrollo en http://localhost:5173
npm run build      # genera la versión optimizada para producción
npm run preview    # previsualiza la build de producción
```

## Estructura del proyecto

```text
rosaline-landing/
├─ public/
├─ src/
│  ├─ assets/
│  ├─ components/
│  │  └─ Button.jsx
│  ├─ sections/
│  │  ├─ Hero.jsx
│  │  ├─ Benefits.jsx
│  │  ├─ Products.jsx
│  │  └─ Contact.jsx
│  ├─ App.jsx
│  ├─ index.css
│  └─ main.jsx
├─ tailwind.config.js
└─ postcss.config.js
```

## Estilos y componentes

- Los colores y fuentes están configurados en `tailwind.config.js` y disponibles como clases personalizadas (`bg-rose`, `bg-cream`, `font-display`, etc.).
- `Button.jsx` define un botón reutilizable con variantes `primary`, `secondary` y `ghost`.
- El logo oficial se encuentra en `src/assets/images/logo.jpg` e impacta en la navegación y el Hero, con soporte completo mobile-first.
- CTA de contacto configurado con el número real `+54 2284 578166` (WhatsApp y enlace telefónico).
- Cards de productos con galería de imágenes reales, zoom táctil/hover y modal fullscreen con fondo atenuado.
- Buscador en la sección de productos que filtra por nombre, categoría y beneficios.
- Cada sección se encuentra en `src/sections` y utiliza datos mockeados fáciles de reemplazar por contenido real.
- Las animaciones se controlan con Framer Motion (`whileInView`, `motion.div`, etc.).

## Despliegue en Vercel

1. Ejecutá `npm run build` para generar la carpeta `dist`.
2. Importá el repositorio en Vercel y seleccioná el framework **Vite**.
3. Usá el comando de build predeterminado `npm run build` y el directorio de salida `dist/`.
4. Configurá las variables de entorno que necesites (por ejemplo, enlaces de WhatsApp o correos).

## Próximos pasos sugeridos

- Reemplazar los contenidos de texto e imágenes mock por contenido oficial de la marca.
- Integrar servicios de formularios (Formspree, Netlify Forms o backend propio) para el envío real de consultas.
- Agregar seguimiento con herramientas como Google Analytics, Meta Pixel o Clarity.
- Internacionalizar la landing si se planea llegar a mercados fuera de habla hispana.
