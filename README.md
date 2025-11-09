
# 🌿 Rosaline Olavarría – Landing Page

Landing page desarrollada para **Rosaline Olavarría**, emprendimiento de cosmética capilar vegana y profesional con foco en salud y belleza. El sitio presenta productos destacados, beneficios de cada línea y canales de contacto directo para ventas mayoristas y minoristas.

## ✨ Características principales

- Estética femenina, natural y profesional con paleta cálida: rosa coral `#FB6066`, crema suave `#FFefc1`, amarillo miel `#FDD86E`, durazno `#FFA463` y terracota `#F66B40`.
- Tipografías elegantes Playfair Display (títulos) y Open Sans (texto) desde Google Fonts.
- Secciones modulares listas para reutilizar: Hero, Beneficios, Productos y Contacto.
- Botones reutilizables con variantes y microinteracciones en hover/press.
- Animaciones suaves al hacer scroll con Framer Motion.
- Layout responsive con navegación móvil y CTA hacia WhatsApp (`+54 2284 578166`).

## 🧩 Tecnologías utilizadas

- **React + Vite** – Stack ligero para SPA con HMR.
- **Tailwind CSS** – Estilos utilitarios con configuración personalizada de colores y tipografías.
- **Framer Motion** – Animaciones declarativas (`whileInView`, `motion.div`, etc.).
- **React Icons** – Íconos funcionales y botánicos.
- **Vercel** – Despliegue rápido del proyecto.

## 📦 Requisitos previos

- Node.js 18 o superior.
- npm 9 o superior.

## 🚀 Instalación y scripts

```bash
git clone https://github.com/tuusuario/rosaline-landing.git
cd rosaline-landing
npm install         # instala dependencias
npm run dev         # servidor de desarrollo (http://localhost:5173)
npm run build       # build optimizada para producción
npm run preview     # previsualiza la build de producción
```

## 📁 Estructura del proyecto

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

### Estilos y componentes

- Colores y fuentes definidos en `tailwind.config.js` como clases personalizadas (`bg-rose`, `bg-cream`, `font-display`, etc.).
- `Button.jsx` implementa variantes `primary`, `secondary` y `ghost`.
- `src/assets/images/logo.jpg` contiene el logo oficial usado en navegación y Hero.
- Cards de productos con galería de imágenes reales, zoom táctil/hover y modal fullscreen con fondo atenuado.
- Buscador en la sección de productos que filtra por nombre, categoría y beneficios.
- Banner de cookies compatible con RGPD, con controles de aceptación/rechazo.
- Métricas listas para `@vercel/analytics`, integradas desde `App.jsx`.
- Contenido mockeado listo para reemplazar por datos reales.

## ☁️ Despliegue en Vercel

1. Ejecutá `npm run build` para generar la carpeta `dist/`.
2. Importá el repositorio en Vercel y seleccioná el framework **Vite**.
3. Usá el comando de build `npm run build` y el directorio de salida `dist/`.
4. Configurá variables de entorno necesarias (por ejemplo, enlaces de WhatsApp o correos).

## 🔜 Próximos pasos sugeridos

- Sustituir textos e imágenes mock por contenido oficial de la marca.
- Integrar un servicio de formularios (Formspree, Netlify Forms o backend propio) para recibir consultas reales.
- Agregar analítica (Google Analytics, Meta Pixel, Clarity, etc.).
- Internacionalizar la landing para mercados fuera de habla hispana.
