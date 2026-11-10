import { useRef } from "react";
import { gsap, useGSAP, onScroll, prefersReducedMotion } from "@/lib/gsap";

export const useTechnologiesHook = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      const tl = gsap.timeline({
        scrollTrigger: onScroll(sectionRef.current, "top 75%"),
      });

      tl.from(".tech-title", {
        x: -60,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
      })
        .from(
          ".tech-card",
          {
            y: 60,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .from(
          ".tech-chip",
          { y: 10, opacity: 0, duration: 0.3, stagger: 0.025 },
          "-=0.3",
        );
    },
    { scope: sectionRef },
  );

  return { sectionRef };
};
