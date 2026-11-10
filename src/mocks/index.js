// Los nombres de categoría usan { es, en }; el resto (nombres de tecnologías) es igual en ambos idiomas.
const TechnologiesData = [
  {
    Name: { es: "Frontend", en: "Frontend" },
    objects: [
      { name: "React", icon: "Atom", color: "#61DAFB" },
      { name: "React Router Dom", icon: "Route", color: "#CA4245" },
      { name: "SCSS/CSS", icon: "Palette", color: "#CC6699" },
      { name: "Axios", icon: "ArrowLeftRight", color: "#5A29E4" },
    ],
  },
  {
    Name: { es: "Backend", en: "Backend" },
    objects: [
      { name: "Django", icon: "Server", color: "#092E20" },
      { name: "Django Rest Framework", icon: "Webhook", color: "#EF4B4D" },
      { name: "SQL", icon: "Database", color: "#4479A1" },
      { name: "SQLite", icon: "DatabaseZap", color: "#003B57" },
    ],
  },
  {
    Name: { es: "Lenguajes", en: "Languages" },
    objects: [
      { name: "JavaScript", icon: "Braces", color: "#F7DF1E" },
      { name: "Python", icon: "FileCode", color: "#3776AB" },
      { name: "C++", icon: "Cpu", color: "#00599C" },
    ],
  },
  {
    Name: { es: "Herramientas de desarrollo", en: "Development Tools" },
    objects: [
      { name: "XMake", icon: "Hammer", color: "#F44A6A" },
      { name: "Git | Github", icon: "GitBranch", color: "#181717" },
      {
        name: "PowerShell / Bash / Zsh",
        icon: "SquareTerminal",
        color: "#4EAA25",
      },
      { name: "Arch Linux", icon: "Mountain", color: "#1793D1" },
    ],
  },
  {
    Name: { es: "Otros intereses", en: "Other Interests" },
    objects: [
      {
        name: { es: "Ciberseguridad", en: "Cybersecurity" },
        icon: "ShieldHalf",
        color: "#557C94",
      },
      {
        name: { es: "Desarrollo de bajo nivel", en: "Low-Level Development" },
        icon: "Binary",
        color: "#007AAC",
      },
      /*
      { name: { es: "Deep Learning", en: "Deep Learning" }, icon: "Brain", color: "#FF6F00" },
      */
      {
        name: {
          es: "Contribuciones Open Source",
          en: "Open Source Contributions",
        },
        icon: "HeartHandshake",
        color: "#3DA639",
      },
    ],
  },
];

// Las keys de idioma son los códigos "es" / "en" (antes Spanish / English)
const Languages = {
  es: {
    // Textos cortos de interfaz
    NavAbout: "Sobre mí",
    NavEducation: "Educación",
    NavTechnologies: "Tecnologías",
    NavProjects: "Proyectos",
    NavContact: "Contacto",
    TechnologiesTitle: "Tecnologías",
    NotFoundTitle: "Esta página no existe.",
    NotFoundBack: "Volver",
    NotFoundHome: "Ir al inicio",

    // Textos largos (HTML)
    AboutMe:
      "¡Hola! Soy <b>Juan David Pardo Forero</b> 👨‍💻, estudiante de Ingeniería de Software 🎓 en Bogotá, Colombia. <br /> Apasionado por el desarrollo web 🌐, la ciberseguridad 🔒 y la programación de bajo nivel ⚙️. <br /> Disfruto resolver desafíos 🧩, aprender nuevas tecnologías 📚 y optimizar sistemas 🚀. <br /> Busco una pasantía 💼 para aplicar mis conocimientos y crecer en un entorno profesional 🏢. <br /> Creo que la tecnología no tiene límites, solo los 🚧 que impone nuestra creatividad 🎨 y nuestra capacidad de resolver problemas 🧠.",

    Education:
      "<p><b>Universitaria de Colombia 🖥️</b> - Bogotá, Colombia <br />Ingeniería de Software <br />Graduación esperada: 2026 🎓 </p><br /><ul><li>Enfoque en desarrollo de software 💻, algoritmos 🧩, estructuras de datos 📊 y arquitectura de sistemas 🏗️.</li><li>Aprendiendo activamente tecnologías como React ⚛️, Python 🐍, C++ 🖥️ y Deep Learning 🤖.</li></ul><br /><p><b>SENA</b> - Mosquera, Colombia <br />Técnico en Programación de Software 🖥️<br />Graduado: 2021 🎓</p><ul><li>Sólida base en programación de software 📝, resolución de problemas 🔍 y diseño de sistemas 🏗️.</li></ul><br /><p><b>Educación Secundaria</b> - Cota, Cundinamarca, Colombia <br />Graduado: 2021 🎓</p><ul><li>Base sólida en matemáticas ➗, programación 👨‍💻 y resolución de problemas 🧠.</li></ul>",

    HeaderSubtitle:
      "💻 <b>Estudiante de Ingeniería de Software</b> <br /> 🚀 Apasionado por el Desarrollo Web <br /> 📚 Aprendiz continuo en busca de una <b>pasantía</b> donde pueda <b>aplicar y expandir</b> mis habilidades en un entorno profesional. <br /> ⚡ Entusiasta de los <b>nuevos desafíos</b> y <b>adaptándome a tecnologías emergentes</b>, siempre con una <b>mentalidad proactiva y orientada a soluciones</b>.",
  },

  en: {
    NavAbout: "About me",
    NavEducation: "Education",
    NavTechnologies: "Technologies",
    NavProjects: "Projects",
    NavContact: "Contact",
    TechnologiesTitle: "Technologies",
    NotFoundTitle: "This page doesn't exist.",
    NotFoundBack: "Go back",
    NotFoundHome: "Go home",

    AboutMe:
      "Hi! I'm <b>Juan David Pardo Forero</b> 👨‍💻, a Software Engineering student 🎓 from Bogotá, Colombia. <br /> Passionate about web development 🌐, cybersecurity 🔒, and low-level programming ⚙️. <br /> I enjoy solving challenges 🧩, learning new technologies 📚, and optimizing systems 🚀. <br /> I'm seeking an internship 💼 to apply my knowledge and grow in a professional environment 🏢. <br /> I believe technology has no limits, only 🚧 those set by our creativity 🎨 and problem-solving mindset 🧠.",

    Education:
      "<p><b>Universitaria de Colombia 🖥️</b> - Bogotá, Colombia <br />Bachelor's in Software Engineering <br />Expected Graduation: 2026 🎓 </p><br /><ul><li>Focus on software development 💻, algorithms 🧩, data structures 📊, and system architecture 🏗️.</li><li>Actively learning technologies such as React ⚛️, Python 🐍, C++ 🖥️, and Deep Learning 🤖.</li></ul><br /><p><b>SENA</b> - Mosquera, Colombia <br />Software Programming Technician 🖥️<br />Graduated: 2021 🎓</p><ul><li>Solid foundation in software programming 📝, problem-solving 🔍, and system design 🏗️.</li></ul><br /><p><b>High School</b> - Cota, Cundinamarca, Colombia <br />Graduated: 2021 🎓</p><ul><li>Strong foundation in mathematics ➗, programming 👨‍💻, and problem-solving 🧠.</li></ul>",

    HeaderSubtitle:
      "💻 <b>Software Engineering Student</b> <br /> 🚀 Passionate about Web Development <br /> 📚 Continuous learner looking for an <b>internship</b> where I can <b>apply and expand</b> my skills in a professional environment. <br /> ⚡ Enthusiastic about <b>new challenges</b> and <b>adapting to emerging technologies</b>, always bringing a <b>proactive, solution-driven</b> mindset.",
  },
};

export { TechnologiesData, Languages };
