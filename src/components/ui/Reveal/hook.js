import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { ANIMATIONS } from "@/lib/gsap/animations";

export const useRevealHook = ({ type = "fadeUp", delay = 0 }) => {
  const ref = useRef(null);

  useGSAP(
    () => {
      const preset = ANIMATIONS[type] ?? ANIMATIONS.fadeUp;
      const target = preset.children ? ref.current.children : ref.current;

      gsap.from(target, {
        ...preset.from,
        stagger: preset.stagger,
        delay,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: { trigger: ref.current, start: "top 85%" },
      });
    },
    { scope: ref, dependencies: [type, delay] },
  );

  return { ref };
};
