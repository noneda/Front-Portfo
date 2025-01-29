import "./base.css";

const Header = () => {
  return (
    <>
      <header>
        <div className="title">
          <h1 className="barrio-regular">
            <b>Noneda´s</b> <p className="barrio-regular">Portfolio!!</p>
          </h1>
        </div>
        <div className="Subtitle">
          <picture className="Profile">
            <img src="/ewrwfsgaghaha.jpeg" alt="a" />
          </picture>
          <p className="delius-regular">
            I am a Software Engineering student with a strong passion for web
            development and a solid commitment to continuous learning. I am
            looking for an opportunity to do my internship in a professional
            environment where I can apply and expand my technical knowledge,
            contributing with my skills and desire to learn. I am motivated to
            take on challenges and quickly adapt to new technologies, bringing a
            proactive and solution-oriented mindset.
          </p>
        </div>
      </header>
    </>
  );
};

export default Header;
