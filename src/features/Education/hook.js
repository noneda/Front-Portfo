import { useRef } from "react";
import { gsap, useGSAP, onScroll, prefersReducedMotion } from "@/lib/gsap";

export const useEducationHook = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const tl = gsap.timeline({ scrollTrigger: onScroll(sectionRef.current) });

      tl.from(".edu-head > *", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      })
        .from(
          ".edu-card",
          {
            y: 60,
            opacity: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .from(
          ".edu-icon",
          {
            scale: 0,
            rotate: -90,
            duration: 0.5,
            stagger: 0.15,
            ease: "back.out(2)",
          },
          "-=0.6",
        );

      // Los años "cuentan" desde 2000 hasta su valor
      gsap.utils.toArray(".edu-year").forEach((el) => {
        tl.from(
          el,
          {
            innerText: 2000,
            duration: 1.2,
            snap: { innerText: 1 },
            ease: "power2.out",
          },
          0.5,
        );
      });
    },
    { scope: sectionRef },
  );

  return { sectionRef };
};
