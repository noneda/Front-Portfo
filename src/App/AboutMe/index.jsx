import "./base.css";

const AboutMe = () => {
  return (
    <>
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
    </>
  );
};

export default AboutMe;
