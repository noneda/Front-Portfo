import "./base.css";
import { useEffect, useRef, useCallback } from "react";
import HTMLReactParser from "html-react-parser/lib/index";

const Header = ({ data }) => {
  let scrollPosition = 0;
  const headerRef = useRef(null);
  const timer = useRef(null);
  const OldScroll = useRef(null);

  const animateHeader = useCallback(() => {
    scrollPosition = window.scrollY;

    console.log(
      "scrollPosition : %d \n OldScroll : %d \n",
      scrollPosition,
      OldScroll.current
    );

    if (scrollPosition === 0) {
      console.log("Can be Bigger");
      timer.current = true;
    }
    if (scrollPosition === 0 && OldScroll.current >= 10) {
      console.log("This can´t be Bigger");
      timer.current = false;
    }

    if (scrollPosition > 1) {
      headerRef.current.classList.add("little");
      headerRef.current.classList.remove("bigger");
      OldScroll.current = scrollPosition;
      console.log("Smaller");
      timer.current = false;
      return;
    }

    if (timer.current) {
      console.log("Bigger...");
      setTimeout(() => {
        headerRef.current.classList.add("bigger");
        headerRef.current.classList.remove("little");
        OldScroll.current = scrollPosition;
        console.log("Bigger");
      }, 300);
      return;
    }
  }, [headerRef]);

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
