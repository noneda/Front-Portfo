import { useRef } from "react";
import { gsap, useGSAP, onScroll, prefersReducedMotion } from "@/lib/gsap";

export const useSocialMediaHook = () => {
  const footerRef = useRef(null);
  const year = new Date().getFullYear();

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      // Marquee infinito: el contenido está duplicado, así que -50% vuelve al inicio sin salto
      gsap.to(".marquee-track", {
        xPercent: -50,
        duration: 25,
        ease: "none",
        repeat: -1,
      });

      gsap.from(".footer-item", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: onScroll(footerRef.current, "top 85%"),
      });
    },
    { scope: footerRef },
  );

  return { footerRef, year };
};
