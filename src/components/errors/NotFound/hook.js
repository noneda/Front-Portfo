import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap, useGSAP } from "@/lib/gsap";

export const useNotFoundHook = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from(".nf-code", {
        y: -80,
        opacity: 0,
        duration: 0.8,
        ease: "bounce.out",
      }).from(
        ".nf-text",
        { y: 20, opacity: 0, duration: 0.4, stagger: 0.1 },
        "-=0.3",
      );
    },
    { scope: containerRef },
  );

  const goBack = () => navigate(-1);

  return { containerRef, goBack };
};
