/*
 * Datos del portafolio.
 * - Lo que cambia por idioma va como { es, en } y se lee con pick().
 * - Lo que es igual en ambos idiomas va como string normal.
 * - Los textos de interfaz van en Languages y se leen con t().
 */

// ======================= Marca =======================
const BRAND = "noneda";
const PROFILE_PHOTO = "/ewrwfsgaghaha.jpeg"; // imagen en /public

// ======================= Navegación =======================
const NavData = [
  { id: "about", label: { es: "Sobre mí", en: "About" } },
  { id: "technologies", label: { es: "Stack", en: "Stack" } },
  { id: "projects", label: { es: "Proyectos", en: "Projects" } },
  { id: "education", label: { es: "Formación", en: "Education" } },
  { id: "contact", label: { es: "Contacto", en: "Contact" } },
];

// ======================= Tecnologías =======================
const TechnologiesData = [
  {
    Name: { es: "Frontend", en: "Frontend" },
    icon: "Atom",
    objects: [
      { name: "React", icon: "Atom", color: "#61DAFB" },
      { name: "Tailwind CSS", icon: "Wind", color: "#06B6D4" },
      { name: "SCSS", icon: "Paintbrush", color: "#CC6699" },
      { name: "Vite", icon: "Bolt", color: "#9135FF" },
      { name: "GSAP", icon: "Zap", color: "#88CE02" },
      { name: "Chart.js", icon: "ChartLine", color: "#FF6384" },
    ],
  },
  {
    Name: { es: "Backend", en: "Backend" },
    icon: "Server",
    objects: [
      { name: "Django", icon: "Server", color: "#092E20" },
      { name: "Django Channels", icon: "Radio", color: "#44B78B" },
      { name: "FastAPI", icon: "Gauge", color: "#009688" },
      { name: "Node.js + Express", icon: "Hexagon", color: "#5FA04E" },
      { name: "Socket.IO", icon: "Plug", color: "#FFFFFF" },
      { name: "Laravel", icon: "Flame", color: "#FF2D20" },
    ],
  },
  {
    Name: { es: "Datos", en: "Data" },
    icon: "Database",
    objects: [
      { name: "PostgreSQL", icon: "Database", color: "#4169E1" },
      { name: "MySQL", icon: "Cylinder", color: "#4479A1" },
      { name: "Redis", icon: "DatabaseZap", color: "#FF4438" },
      { name: "SQLite", icon: "HardDrive", color: "#0F80CC" },
      { name: "TypeORM", icon: "Layers", color: "#FE0803" },
    ],
  },
  {
    Name: { es: "Lenguajes", en: "Languages" },
    icon: "Braces",
    objects: [
      { name: "Python", icon: "FileCode", color: "#3776AB" },
      { name: "TypeScript / JavaScript", icon: "Braces", color: "#3178C6" },
      { name: "C++", icon: "Cpu", color: "#00599C" },
      { name: "PHP", icon: "Code", color: "#777BB4" },
      { name: "Kotlin", icon: "Smartphone", color: "#7F52FF" },
    ],
  },
  {
    Name: { es: "DevOps y herramientas", en: "DevOps & tools" },
    icon: "Container",
    objects: [
      { name: "Docker", icon: "Container", color: "#2496ED" },
      { name: "nginx", icon: "Network", color: "#009639" },
      { name: "GitHub Actions", icon: "Workflow", color: "#2088FF" },
      { name: "Git", icon: "GitBranch", color: "#F05032" },
      { name: "uv", icon: "Package", color: "#DE5FE9" },
      { name: "XMake", icon: "Hammer", color: "#F44A6A" },
      { name: "Linux", icon: "Mountain", color: "#1793D1" },
    ],
  },
  {
    Name: { es: "Seguridad y servicios", en: "Security & services" },
    icon: "ShieldHalf",
    objects: [
      { name: "Wazuh", icon: "ShieldHalf", color: "#3595F9" },
      {
        name: { es: "IA local (Ollama)", en: "Local AI (Ollama)" },
        icon: "Bot",
        color: "#FFFFFF",
      },
      { name: "Mercado Pago", icon: "CreditCard", color: "#00B1EA" },
    ],
  },
];

// ======================= Proyectos =======================
// Todos son proyectos para clientes con código privado: se describen de forma general.
// private: true muestra el candado. Si algún día uno es público, pon private: false y agrega url.
const ProjectsData = [
  {
    id: "inned",
    name: "INNED",
    summary: {
      es: "Plataforma que conecta usuarios con prestadores de servicios cercanos.",
      en: "Platform that connects users with nearby service providers.",
    },
    stack: ["Node.js", "TypeScript", "React", "Redis", "PostgreSQL"],
    icon: "MapPinned",
    private: true,
    featured: true, // ocupa dos columnas
  },
  {
    id: "digiturno",
    name: "DigiTurno",
    summary: {
      es: "Sistema de turnos con kiosco de autoatención, panel de agentes y estadísticas.",
      en: "Queue management system with self-service kiosk, agent panel and stats.",
    },
    stack: ["Django", "PostgreSQL", "Redis", "Docker"],
    icon: "Ticket",
    private: true,
  },
  {
    id: "backup-agent",
    name: "BackupAgent",
    summary: {
      es: "Servicio de Windows para respaldos automáticos, cifrados y reanudables.",
      en: "Windows service for automatic, encrypted and resumable backups.",
    },
    stack: ["C++17", "XMake", "FastAPI"],
    icon: "DatabaseBackup",
    private: true,
  },
  {
    id: "flowmanager",
    name: "FlowManager",
    summary: {
      es: "Gestión de flujos de trabajo y tareas con permisos por rol.",
      en: "Workflow and task management with role-based permissions.",
    },
    stack: ["Laravel", "Tailwind", "Vite"],
    icon: "Workflow",
    private: true,
  },
  {
    id: "panthers",
    name: "Panthers",
    summary: {
      es: "Registro de resultados con estadísticas, gráficas y reportes exportables.",
      en: "Results tracking with statistics, charts and exportable reports.",
    },
    stack: ["Laravel", "Blade", "Chart.js"],
    icon: "ChartColumn",
    private: true,
  },
  {
    id: "security-ai",
    name: { es: "Seguridad + IA", en: "Security + AI" },
    summary: {
      es: "Análisis de alertas de seguridad apoyado en un modelo de IA local.",
      en: "Security alert analysis powered by a local AI model.",
    },
    stack: ["Wazuh", "Ollama", "Docker"],
    icon: "ShieldHalf",
    private: true,
  },
  {
    id: "kiosk-app",
    name: { es: "App de kiosco", en: "Kiosk app" },
    summary: {
      es: "Aplicación Android en modo kiosco con publicación automática de versiones.",
      en: "Android app in kiosk mode with automated releases.",
    },
    stack: ["Kotlin", "Android", "GitHub Actions"],
    icon: "TabletSmartphone",
    private: true,
  },
];

// ======================= Sobre mí =======================
const AboutHighlights = [
  { icon: "Globe", label: { es: "Desarrollo web", en: "Web development" } },
  { icon: "ShieldHalf", label: { es: "Ciberseguridad", en: "Cybersecurity" } },
  { icon: "Cpu", label: { es: "Bajo nivel", en: "Low-level" } },
];

const AboutTerminal = [
  { cmd: "whoami", out: "noneda" },
  { cmd: "cat location.txt", out: "Bogotá, Colombia" },
  {
    cmd: "echo $ROLE",
    out: { es: "Desarrollador Junior", en: "Junior Developer" },
  },
  {
    cmd: "status --now",
    out: {
      es: "Disponible para nuevos proyectos ✓",
      en: "Open to new projects ✓",
    },
  },
];

// ======================= Educación =======================
const EducationData = [
  {
    id: "university",
    institution: "Universitaria de Colombia",
    degree: {
      es: "Ingeniería de Software",
      en: "B.S. in Software Engineering",
    },
    place: "Bogotá, Colombia",
    year: "2026",
    status: { es: "Graduación esperada", en: "Expected graduation" },
    icon: "GraduationCap",
    summary: {
      es: "Desarrollo de software, algoritmos, estructuras de datos y arquitectura de sistemas.",
      en: "Software development, algorithms, data structures and system architecture.",
    },
  },
  {
    id: "sena",
    institution: "SENA",
    degree: {
      es: "Técnico en Programación de Software",
      en: "Software Programming Technician",
    },
    place: "Mosquera, Colombia",
    year: "2021",
    status: { es: "Graduado", en: "Graduated" },
    icon: "Code",
    summary: {
      es: "Base sólida en programación, resolución de problemas y diseño de sistemas.",
      en: "Solid foundation in programming, problem-solving and system design.",
    },
  },
  {
    id: "school",
    institution: { es: "Educación secundaria", en: "High school" },
    degree: { es: "Bachiller", en: "High school diploma" },
    place: "Cota, Cundinamarca",
    year: "2021",
    status: { es: "Graduado", en: "Graduated" },
    icon: "BookOpen",
    summary: {
      es: "Base en matemáticas, programación y resolución de problemas.",
      en: "Foundation in mathematics, programming and problem-solving.",
    },
  },
];

// ======================= Redes =======================
// TODO: reemplaza LinkedIn y el correo por los tuyos (o borra la línea de LinkedIn).
const SocialData = [
  { name: "GitHub", icon: "github", url: "https://github.com/noneda" },
  { name: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/" },
  { name: "Email", icon: "mail", url: "mailto:tu-correo@ejemplo.com" },
];

const CONTACT_EMAIL = "tu-correo@ejemplo.com";

// ======================= Textos =======================
const Languages = {
  es: {
    // Hero
    HeroLabel: "Full stack × Sistemas × Seguridad",
    HeroTitleTop: "Noneda's",
    HeroTitleBrush: "Developer",
    HeroCta: "Ver proyectos",
    HeroSecondary: "Contáctame",
    HeroScroll: "Desliza",
    HeaderSubtitle:
      "<b>Desarrollador Junior</b> en Bogotá. Construyo aplicaciones web, servicios y herramientas internas para clientes, <b>del backend al despliegue</b>.",

    // Technologies
    TechTitle: "Mi stack",
    TechSubtitle: "Las herramientas con las que construyo.",

    // Projects
    ProjectsTitle: "Proyectos destacados",
    ProjectsSubtitle: "Hechos para clientes reales.",
    ProjectsText:
      "El código de estos proyectos es privado, así que aquí va un resumen de cada uno.",
    ProjectsCta: "Ver GitHub",
    ProjectsEmpty: "Pronto agregaré nuevos proyectos.",
    ProjectPrivate: "Privado",

    // AboutMe
    AboutLabel: "Sobre mí:",
    AboutTitle: "Más que código.",
    AboutBrush: "Es una mentalidad.",
    AboutMe:
      "¡Hola! Soy <b>noneda</b> (Juan David Pardo Forero), desarrollador junior en Bogotá, Colombia. Trabajo con clientes construyendo desde plataformas web y APIs hasta servicios de Windows y apps Android. Me apasionan el desarrollo web, la ciberseguridad y la programación de bajo nivel. Creo que la tecnología no tiene límites, solo los que impone nuestra <b>creatividad</b>.",

    // Education
    EducationTitle: "Mi formación",
    EducationText: "Dónde aprendí, qué estudié y hacia dónde voy.",

    // SocialMedia / footer
    Marquee: "Disponible para nuevos proyectos",
    ContactTitle: "Hablemos",
    ContactText: "¿Tienes un proyecto o una oportunidad? Escríbeme.",
    ContactCta: "Escríbeme",
    Rights: "Todos los derechos reservados.",
    BackToTop: "Volver arriba",

    // Errores
    NotFoundTitle: "Esta página no existe.",
    NotFoundBack: "Volver",
    NotFoundHome: "Ir al inicio",
  },

  en: {
    HeroLabel: "Full stack × Systems × Security",
    HeroTitleTop: "Noneda's",
    HeroTitleBrush: "Developer",
    HeroCta: "View projects",
    HeroSecondary: "Contact me",
    HeroScroll: "Scroll",
    HeaderSubtitle:
      "<b>Junior Developer</b> based in Bogotá. I build web apps, services and internal tools for clients, <b>from backend to deployment</b>.",

    TechTitle: "My stack",
    TechSubtitle: "The tools I build with.",

    ProjectsTitle: "Featured projects",
    ProjectsSubtitle: "Built for real clients.",
    ProjectsText:
      "The code for these projects is private, so here is a summary of each one.",
    ProjectsCta: "View GitHub",
    ProjectsEmpty: "New projects coming soon.",
    ProjectPrivate: "Private",

    AboutLabel: "About me:",
    AboutTitle: "More than code.",
    AboutBrush: "It's a mindset.",
    AboutMe:
      "Hi! I'm <b>noneda</b> (Juan David Pardo Forero), a junior developer from Bogotá, Colombia. I work with clients building everything from web platforms and APIs to Windows services and Android apps. I'm passionate about web development, cybersecurity and low-level programming. I believe technology has no limits, only those set by our <b>creativity</b>.",

    EducationTitle: "My education",
    EducationText: "Where I learned, what I studied and where I'm heading.",

    Marquee: "Open to new projects",
    ContactTitle: "Let's talk",
    ContactText: "Got a project or an opportunity? Drop me a line.",
    ContactCta: "Email me",
    Rights: "All rights reserved.",
    BackToTop: "Back to top",

    NotFoundTitle: "This page doesn't exist.",
    NotFoundBack: "Go back",
    NotFoundHome: "Go home",
  },
};

export {
  BRAND,
  PROFILE_PHOTO,
  NavData,
  TechnologiesData,
  ProjectsData,
  AboutHighlights,
  AboutTerminal,
  EducationData,
  SocialData,
  CONTACT_EMAIL,
  Languages,
};
