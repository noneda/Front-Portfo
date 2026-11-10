import { useRef } from "react";
import { gsap, useGSAP, onScroll, prefersReducedMotion } from "@/lib/gsap";

export const useAboutMeHook = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      // El cursor parpadea siempre
      gsap.to(".about-cursor", {
        opacity: 0,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "steps(1)",
      });

      if (prefersReducedMotion()) return;

      const tl = gsap.timeline({
        scrollTrigger: onScroll(sectionRef.current, "top 70%"),
      });

      tl.from(".about-terminal", {
        x: -60,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      })
        // Cada línea de la terminal aparece como si se escribiera
        .from(".about-line", {
          clipPath: "inset(0 100% 0 0)",
          duration: 0.45,
          stagger: 0.35,
          ease: "steps(14)",
        })
        .from(
          ".about-fade",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
          },
          0.2,
        )
        .from(
          ".about-brush",
          {
            scale: 0.7,
            rotate: -6,
            opacity: 0,
            duration: 0.6,
            ease: "back.out(2)",
          },
          0.6,
        )
        .from(
          ".about-highlight",
          { y: 20, opacity: 0, duration: 0.4, stagger: 0.1 },
          0.9,
        )
        .from(
          ".about-card",
          { y: 100, rotate: 14, opacity: 0, duration: 0.9, ease: "power3.out" },
          0.3,
        );
    },
    { scope: sectionRef },
  );

  return { sectionRef };
};
