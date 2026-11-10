import { useRef, useState } from "react";
import { gsap, useGSAP, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

export const useNavbarHook = () => {
  const navRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useGSAP(
    () => {
      ScrollTrigger.create({
        start: 60,
        end: "max",
        onToggle: (self) => setScrolled(self.isActive),
      });

      if (prefersReducedMotion()) return;

      gsap.from(".nav-item", {
        y: -30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.06,
        ease: "power3.out",
        delay: 0.2,
      });
    },
    { scope: navRef },
  );

  const toggleMenu = () => setMenuOpen((open) => !open);
  const closeMenu = () => setMenuOpen(false);

  return { navRef, scrolled, menuOpen, toggleMenu, closeMenu };
};
