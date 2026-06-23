export interface Skill {
  name: string;
  iconKey: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  period: string;
  type: string;
  description: string;
  features: string[];
  stack: string[];
  status: string;
  thumbnail: string;
  demoUrl: string;
  codeUrl: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  description: string;
}

export interface SoftSkillCard {
  icon: string;
  title: string;
  description: string;
}

// ========================================
// PERSONAL INFO
// ========================================

export const personalInfo = {
  name: 'Ana Sofia Ricardo Aguilar',
  role: 'Desarrolladora Full Stack',
  description:
    'Apasionada por construir aplicaciones web completas, desde el frontend hasta la infraestructura en la nube. Enfoque especial en la integración de inteligencia artificial en procesos de negocio.',
  location: 'Armenia, Quindío, Colombia',
  email: 'anasofiaricoardoaguilar@gmail.com',
  phone: '+57 312 221 7121',
  linkedin: 'https://linkedin.com/in/ana-sofia-ricardo-aguilar',
  github: 'https://github.com/hws-1028',
  whatsapp: 'https://wa.me/573122217121',
  cvPath: '/CV_AnaSofia_Ricardo_2026.pdf',
  web3formsAccessKey: import.meta.env.VITE_WEB3FORMS_KEY,
};

// ========================================
// HERO ROLES (Typewriter)
// ========================================

export const heroRoles = [
  'Desarrolladora Full Stack',
  'Desarrolladora React',
  'Entusiasta de IA',
  'Desarrolladora Backend',
];

// ========================================
// ABOUT
// ========================================

export const aboutText = [
  'Soy desarrolladora Full Stack enfocada en crear aplicaciones web modernas, eficientes y bien estructuradas. Trabajo tanto en el frontend como en el backend, utilizando tecnologías como React, TypeScript y Node.js para construir soluciones completas, desde interfaces intuitivas hasta APIs escalables.',
  'He participado en proyectos reales como plataformas e-commerce y sistemas corporativos con CRM, desarrollando funcionalidades como sistemas de pago, paneles administrativos y gestión de datos. Me enfoco en escribir código limpio, optimizar el rendimiento y ofrecer experiencias de usuario fluidas.',
  'Me caracterizo por mi aprendizaje constante y pensamiento analítico. Actualmente, estoy profundizando en backend e inteligencia artificial, explorando cómo integrar soluciones basadas en IA en aplicaciones web modernas.',
];

export const softSkills: SoftSkillCard[] = [
  {
    icon: 'MessageCircle',
    title: 'Comunicación y colaboración',
    description: 'Comunicación efectiva y trabajo colaborativo en equipos multidisciplinarios.',
  },
  {
    icon: 'Lightbulb',
    title: 'Análisis y resolución',
    description: 'Pensamiento analítico y resolución de problemas complejos con enfoque práctico.',
  },
  {
    icon: 'RefreshCw',
    title: 'Aprendizaje continuo',
    description: 'Adaptabilidad y aprendizaje continuo para mantenerme actualizada con nuevas tecnologías.',
  },
];

export const languages = [
  { name: 'Español', level: 'Nativo' },
  { name: 'Inglés', level: 'B1' },
];

// ========================================
// TECH STACK
// ========================================

export const techStack: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React 19', iconKey: 'SiReact', level: 95 },
      { name: 'Vite', iconKey: 'SiVite', level: 90 },
      { name: 'TypeScript', iconKey: 'SiTypescript', level: 92 },
      { name: 'TailwindCSS', iconKey: 'SiTailwindcss', level: 88 },
      { name: 'Zustand', iconKey: 'SiZustand', level: 85 },
      { name: 'TanStack Query', iconKey: 'SiReactquery', level: 82 },
      { name: 'HTML5', iconKey: 'SiHtml5', level: 95 },
      { name: 'CSS3', iconKey: 'SiCss3', level: 90 },
      { name: 'BEM', iconKey: 'SiBem', level: 85 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', iconKey: 'SiNodedotjs', level: 88 },
      { name: 'Express', iconKey: 'SiExpress', level: 85 },
      { name: 'TypeScript', iconKey: 'SiTypescript', level: 92 },
      { name: 'Java', iconKey: 'SiOpenjdk', level: 60 },
      { name: 'Spring Boot', iconKey: 'SiSpringboot', level: 55 },
      { name: 'Python', iconKey: 'SiPython', level: 75 },
      { name: 'FastAPI', iconKey: 'SiFastapi', level: 50 },
      { name: 'Flask', iconKey: 'SiFlask', level: 45 },
    ],
  },
  {
    title: 'Bases de Datos',
    skills: [
      { name: 'PostgreSQL', iconKey: 'SiPostgresql', level: 80 },
      { name: 'MySQL', iconKey: 'SiMysql', level: 75 },
      { name: 'MongoDB', iconKey: 'SiMongodb', level: 78 },
      { name: 'Prisma ORM', iconKey: 'SiPrisma', level: 82 },
      { name: 'Mongoose', iconKey: 'SiMongoose', level: 78 },
    ],
  },
  {
    title: 'Nube y DevOps',
    skills: [
      { name: 'Docker', iconKey: 'SiDocker', level: 78 },
      { name: 'Docker Compose', iconKey: 'SiDocker', level: 75 },
      { name: 'Railway', iconKey: 'SiRailway', level: 70 },
      { name: 'Git', iconKey: 'SiGit', level: 90 },
      { name: 'GitHub', iconKey: 'SiGithub', level: 88 },
      { name: 'CI/CD', iconKey: 'SiGithubactions', level: 65 },
    ],
  },
  {
    title: 'Autenticación y Seguridad',
    skills: [
      { name: 'JWT', iconKey: 'SiJsonwebtokens', level: 82 },
      { name: 'bcryptjs', iconKey: 'SiAuth0', level: 78 },
      { name: 'Google OAuth 2.0', iconKey: 'SiGoogle', level: 70 },
      { name: 'CORS', iconKey: 'SiCors', level: 85 },
      { name: 'Helmet', iconKey: 'SiHelmet', level: 72 },
      { name: 'Rate-limiting', iconKey: 'SiCloudflare', level: 68 },
    ],
  },
  {
    title: 'IA y AA',
    skills: [
      { name: 'Agentes de IA', iconKey: 'SiOpenai', level: 55 },
      { name: 'ML Supervisado', iconKey: 'SiScikitlearn', level: 45 },
      { name: 'Automatización LLMs', iconKey: 'SiLangchain', level: 52 },
    ],
  },
];

// ========================================
// PROJECTS
// ========================================

export const projects: Project[] = [
  {
    id: 'variedades-danii',
    title: 'Variedades Danii',
    period: '2026–2026',
    type: 'Comercio electrónico de perfumería artesanal',
    description:
      'Tienda en línea completa con soporte de ventas en línea y punto de venta (TPV) presencial. Desarrollo completo abarcando frontend, backend, base de datos y despliegue con Docker.',
    features: [
      'Catálogo de productos con filtros y búsqueda',
      'Carrito de compras persistente',
      'Proceso de pago con métodos de pago colombianos (Nequi, Daviplata, Bancolombia, BREB, efectivo)',
      'Notificaciones por correo electrónico para confirmación de pedidos',
      'Punto de venta (TPV) presencial integrado',
    ],
    stack: ['React 19', 'Vite', 'TypeScript', 'TailwindCSS', 'Zustand', 'TanStack Query', 'Node.js', 'Prisma', 'PostgreSQL', 'Docker'],
    status: 'Completado',
    thumbnail: 'variedadesDanii.png',
    demoUrl: 'https://www.variedadesdanii.com/',
    codeUrl: 'https://github.com/DanielRRL/variedadesDanii',
  },
  {
    id: 'simetrica',
    title: 'SIMÉTRICA',
    period: '2025–2026',
    type: 'Sitio corporativo + gestor de clientes',
    description:
      'Web corporativa y panel de administración para empresa de construcción, arquitectura y diseño. Sistema completo con gestión de contenido, proveedores y aplicaciones laborales.',
    features: [
      'Vitrina de proyectos arquitectónicos con galería de imágenes',
      'Sistema de comentarios con reacciones (me gusta, emojis)',
      'Registro y gestión de proveedores',
      'Panel de administración: mensajes, aplicaciones laborales, proyectos, imágenes',
      'Autenticación segura con JWT y bcryptjs',
    ],
    stack: ['React 19', 'TypeScript', 'Vite', 'CSS BEM', 'Express', 'MongoDB', 'Mongoose', 'JWT', 'bcryptjs', 'Railway'],
    status: 'Completado',
    thumbnail: 'simetrica.png',
    demoUrl: 'https://www.simétrica.com/',
    codeUrl: 'https://github.com/Jruiz3019/SIM-TRICA',
  },
  {
    id: 'giraldo-leguizamon',
    title: 'Giraldo Leguizamón',
    period: '2026',
    type: 'Landing page institucional para firma de abogados',
    description:
      'SPA con scroll snap full-screen para firma de abogados especializada en defensa legal del sector salud en Colombia. Cada sección encaja al viewport con transiciones suaves.',
    features: [
      'Scroll snap full-screen con scroll-snap-type: y mandatory',
      'Drawer lateral responsive con stagger animation para navegación',
      'Indicador de scroll SVG en zigzag sincronizado con stroke-dashoffset',
      'Animaciones reveal al hacer scroll con IntersectionObserver',
      'Íconos SVG inline dorados (#9d7a27) con viewBox unificado 48×48',
      'Formulario conectado a Web3Forms con envío directo al correo del cliente',
    ],
    stack: ['React 19', 'TypeScript 6', 'Vite 8', 'React Router DOM 7', 'Axios', 'CSS'],
    status: 'Completado',
    thumbnail: 'giraldo.png',
    demoUrl: 'https://giraldo-leguizamon-web.vercel.app/',
    codeUrl: 'https://github.com/hws-1028/giraldo-leguizamon-web',
  },
];

// ========================================
// EDUCATION
// ========================================

export const education: Education[] = [
  {
    id: 'eam',
    institution: 'EAM',
    degree: 'Ingeniería de Software (en curso)',
    period: '2025–Presente',
    description: 'Formación universitaria en ingeniería de software con énfasis en arquitectura de sistemas, bases de datos y metodologías ágiles.',
  },
  {
    id: 'sena',
    institution: 'SENA',
    degree: 'Tecnóloga en Análisis y Sistemas Informáticos',
    period: '2022–2023',
    description: 'Egresada con méritos. Formación técnica en análisis, diseño e implementación de sistemas informáticos.',
  },
  {
    id: 'oracle',
    institution: 'Oracle Next Education',
    degree: 'Especialización Backend + IA',
    period: '2025–2026',
    description: 'Programa de especialización enfocado en desarrollo backend con Java/Spring Boot e integración de soluciones de inteligencia artificial.',
  },
];

