import "./base.css";
import _ from "lodash";
import { useEffect } from "react";

const Header = () => {
  let animateHeader = _.throttle(() => {
    let scrollPosition = Math.ceil(window.scrollY);
    if (scrollPosition > 5) {
      document.querySelector("header").classList.add("little");
    } else {
      document.querySelector("header").classList.remove("little");
    }
  }, 300);
  useEffect(() => {
    window.addEventListener("scroll", animateHeader);
  }, []);

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
            💻 <b>Software Engineering Student</b> | 🚀 Passion for Web
            Development | 📚 Continuous Learner Looking for an <b>internship</b>{" "}
            where I can <b>apply & expand</b> my skills in a professional
            environment. Enthusiastic about <b>new challenges</b> and{" "}
            <b>adapting to emerging technologies</b>, always bringing a
            <b>proactive & solution-driven</b> mindset. ⚡
          </p>
        </div>
      </header>
    </>
  );
};

export default Header;
