# Ana Sofía Ricardo Aguilar — Portafolio

Portafolio profesional como Desarrolladora Full Stack. Construido con **React 19**, **TypeScript 6** y **Framer Motion**, desplegado con **Vite 8**.

[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=flat&logo=vite)](https://vitejs.dev)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)

---

## Sobre el proyecto

Portafolio personal que reúne mi experiencia, proyectos, habilidades técnicas y formación académica. Diseñado con un enfoque editorial oscuro, animaciones suaves y una navegación limpia que refleja mi atención al detalle como desarrolladora.

---

## Stack

| Categoría | Tecnologías |
|---|---|
| **Frontend** | React 19, TypeScript 6, Framer Motion 12, React Icons 5 |
| **Estilos** | CSS Modules, CSS Custom Properties, glassmorphism, backdrop-filter |
| **Build** | Vite 8 + @vitejs/plugin-react |
| **Contacto** | Web3Forms |
| **Linting** | ESLint 10, typescript-eslint, eslint-plugin-react-hooks |

---

## Secciones

- **Hero** — Presentación con typewriter y foto profesional
- **Sobre mí** — Bio + habilidades blandas + idiomas
- **Habilidades** — Tech stack organizado por categorías con íconos
- **Proyectos** — Variedades Danii, SIMÉTRICA con demo y código
- **Formación** — Timeline educativo (SENA, EAM, Oracle Next Education)
- **Contacto** — Formulario funcional con Web3Forms + links directos

---

## Setup local

```bash
git clone https://github.com/hws-1028/portfolio.git
cd portfolio
npm install
```

### Variables de entorno

Crea un archivo `.env` con tu API key de Web3Forms:

```env
VITE_WEB3FORMS_KEY=tu_key_aqui
```

> También puedes copiar `.env.example` y reemplazar el placeholder.

### Desarrollo

```bash
npm run dev     # http://localhost:5173
```

### Producción

```bash
npm run build   # genera dist/
npm run preview # previsualiza el build
```

---

## Estructura

```
src/
├── components/
│   ├── layout/      # Header, Footer
│   ├── sections/    # Hero, About, TechStack, Projects, Education, Contact
│   └── ui/          # FloatingMenu, SectionHeader, ThemeToggle, GlassCard, ScrollToTop
├── data/
│   └── data.ts      # Toda la info centralizada (proyectos, skills, experiencia, etc.)
├── hooks/
│   └── useScrollTo.ts
├── assets/          # Imágenes, favicon, CV
├── App.tsx
└── main.tsx
```

---

## Contacto

- **Email**: [anasofiaricardoaguilar@gmail.com](mailto:anasofiaricardoaguilar@gmail.com)
- **LinkedIn**: [/in/ana-sofia-ricardo-aguilar](https://linkedin.com/in/ana-sofia-ricardo-aguilar)
- **GitHub**: [@hws-1028](https://github.com/hws-1028)
- **Portafolio**: [anasofiaricardo.com](https://anasofiaricardo.com)
