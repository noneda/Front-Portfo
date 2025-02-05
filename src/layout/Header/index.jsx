import "./base.css";
import _ from "lodash";
import { useEffect, useRef, useCallback } from "react";

const Header = () => {
  const headerRef = useRef(null);

  const animateHeader = useCallback(
    _.throttle(() => {
      if (!headerRef.current) return;

      let scrollPosition = window.scrollY;
      console.log(scrollPosition);
      if (scrollPosition === 0) {
        console.log("bigger");
        headerRef.current.classList.add("bigger");
        headerRef.current.classList.remove("little");
        return;
      }
      if (scrollPosition >= 1) {
        console.log("little");
        headerRef.current.classList.add("little");
        headerRef.current.classList.remove("bigger");
        return;
      }
    }, [headerRef]),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", animateHeader);

    return () => {
      window.removeEventListener("scroll", animateHeader);
    };
  }, [animateHeader]);

  return (
    <>
      <header ref={headerRef} className="bigger">
        <div className="title">
          <h1 className="barrio-regular">
            <b>Noneda´s</b> <p className="barrio-regular">Developer</p>
          </h1>
        </div>
        <div className="Subtitle">
          <picture className="Profile">
            <img src="/ewrwfsgaghaha.jpeg" alt="Picture for 'Cat'" />
          </picture>
          <p className="delius-regular">
            💻 <b>Software Engineering Student</b> <br /> 🚀 Passion for Web
            Development <br /> 📚 Continuous Learner Looking for an{" "}
            <b>internship</b> where I can <b>apply & expand</b> my skills in a
            professional environment. <br /> ⚡ Enthusiastic about{" "}
            <b>new challenges</b> and <b>adapting to emerging technologies</b>,
            always bringing a<b>proactive & solution-driven</b> mindset.
          </p>
        </div>
      </header>
    </>
  );
};

export default Header;
