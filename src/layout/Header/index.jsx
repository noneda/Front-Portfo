import "./base.css";
import Nav from "./Nav";
import _ from "lodash";
import { useState, useEffect } from "react";

const Header = () => {
  let animateHeader = _.throttle(() => {
    let scrollPosition = Math.ceil(window.scrollY);
    if (scrollPosition > 5) {
      document.querySelector("header").classList.add("little");
      document.querySelector("nav").classList.add("nav-minus  ");
    } else {
      document.querySelector("header").classList.remove("little");
      document.querySelector("nav").classList.remove("nav-minus");
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
            I am a Software Engineering student with a strong passion for web
            development and a solid commitment to continuous learning. I am
            looking for an opportunity to do my internship in a professional
            environment where I can apply and expand my technical knowledge,
            contributing with my skills and desire to learn. I am motivated to
            take on challenges and quickly adapt to new technologies, bringing a
            proactive and solution-oriented mindset.
          </p>
        </div>
        <Nav></Nav>
      </header>
    </>
  );
};

export default Header;
