import { useRef, useState } from "react";
import { PROFILE_PHOTO } from "@/mocks";
import { gsap, useGSAP, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

export const useHeroHook = () => {
  const heroRef = useRef(null);
  const [photoOk, setPhotoOk] = useState(true);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;

      // 1. Entrada en secuencia
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-label", { y: 20, opacity: 0, duration: 0.5 })
        .from(
          ".hero-line",
          { yPercent: 110, duration: 0.8, stagger: 0.15 },
          "-=0.2",
        )
        .from(
          ".hero-brush",
          {
            scale: 0.6,
            rotate: -8,
            opacity: 0,
            duration: 0.7,
            ease: "back.out(1.8)",
          },
          "-=0.4",
        )
        .fromTo(
          ".hero .brush-path",
          { strokeDasharray: 420, strokeDashoffset: 420 },
          {
            strokeDashoffset: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: "power2.inOut",
          },
          "-=0.3",
        )
        .from(
          ".hero-text",
          { y: 20, opacity: 0, duration: 0.5, stagger: 0.1 },
          "-=0.4",
        )
        .from(".hero-visual", { x: 80, opacity: 0, duration: 1 }, 0.3)
        .from(
          ".hero-chip",
          {
            scale: 0,
            opacity: 0,
            duration: 0.5,
            stagger: 0.12,
            ease: "back.out(2)",
          },
          "-=0.4",
        );

      // 2. Chips flotando sin parar
      gsap.utils.toArray(".hero-chip").forEach((chip, i) => {
        gsap.to(chip, {
          y: i % 2 ? 10 : -10,
          duration: 2 + i * 0.4,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
          delay: 1.5,
        });
      });

      // 3. El hero se queda fijo y la siguiente sección se desliza encima como una tarjeta
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
      });

      // Mientras lo tapan, el contenido del hero se aleja y se apaga
      gsap.to(".hero-inner", {
        scale: 0.9,
        opacity: 0.25,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: heroRef },
  );

  const onPhotoError = () => setPhotoOk(false);

  return { heroRef, photoSrc: PROFILE_PHOTO, photoOk, onPhotoError };
};
