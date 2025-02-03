import "./base.css";
const App = () => {
  return (
    <div className="App">
      <div className="Section AboutMe">
        <div className="head">
          <h2>
            <b>About Me</b>
          </h2>
          <picture>
            <img src="/Me.jpeg" />
          </picture>
        </div>
        <p>
          Hi! I'm <b>Juan David Pardo Forero</b> 👨‍💻, a Software Engineering
          student 🎓 from Bogotá Colombia, <br />
          Passionate about web development 🌐, cybersecurity 🔒, and low-level
          programming⚙️.
          <br />
          I enjoy solving challenges🧩, learning new technologies📚, and
          optimizing systems 🚀. <br />
          I'm seeking an internship 💼 to apply my knowledge and grow in a
          professional environment🏢. <br />I believe technology has no
          limits—only 🚧 those set by our creativity 🎨 and problem-solving
          mindset. 🧠.
        </p>
      </div>
      <div className="Section Education">
        <h2>Education 🎓</h2>
        <p>
          <b>Universitaria de Colombia 🖥️</b> - Bogotá, Colombia <br />
          Bachelor's in Software Engineering <br />
          Expected Graduation: 2026 🎓
        </p>
        <br />
        <ul>
          <li>
            Focus on software development 💻, algorithms 🧩, data structures 📊,
            and system architecture🏗️.
          </li>
          <li>
            Actively learning technologies such as React⚛️, 🐍, C++ 🖥️, and Deep
            Learning 🤖
          </li>
        </ul>
        <br />
        <p>
          <b>SENA</b> - Mosquera, Colombia <br />
          Software Programming Technician 🖥️
          <br />
          Graduated: 2021 🎓
        </p>
        <ul>
          <li>
            Solid foundation in software programming 📝, problem-solving 🔍, and
            system design 🏗️
          </li>
        </ul>
        <br />
        <p>
          <b>High School</b> - Cota - Cundinamarca <br />
          Colombia Graduated: 2021 🎓
        </p>
        <ul>
          <li>
            Strong foundation in mathematics ➗, programming 👨‍💻, and
            problem-solving 🧠.
          </li>
        </ul>
      </div>
      <div className="Section Technologies">

      </div>
    </div>
  );
};

export default App;
