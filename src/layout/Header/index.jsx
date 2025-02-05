import "./base.css";
import _ from "lodash";
import { useEffect, useRef, useCallback } from "react";
import HTMLReactParser from "html-react-parser/lib/index";

const Header = ({ data }) => {
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
          <p className="delius-regular">{HTMLReactParser(data)}</p>
        </div>
      </header>
    </>
  );
};

export default Header;
