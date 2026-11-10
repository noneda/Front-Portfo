import { useRef } from "react";
import { ProjectsData } from "@/mocks";
import { gsap, useGSAP, onScroll, prefersReducedMotion } from "@/lib/gsap";

export const useProjectsHook = () => {
  const sectionRef = useRef(null);
  const projects = ProjectsData;

  useGSAP(
    () => {
      if (prefersReducedMotion() || !projects.length) return;

      const tl = gsap.timeline({ scrollTrigger: onScroll(sectionRef.current) });

      tl.from(".projects-head > *", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      }).from(
        ".project-card",
        {
          y: 80,
          rotate: 3,
          opacity: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
        },
        "-=0.4",
      );
    },
    { scope: sectionRef },
  );

  return { sectionRef, projects };
};
