import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/Language";

const OPTIONS = {
  es: { next: "en", label: "ES", aria: "Cambiar a inglés" },
  en: { next: "es", label: "EN", aria: "Switch to Spanish" },
};

// Cambia el idioma cambiando la URL: /es#projects -> /en#projects
const LanguageToggle = ({ className = "" }) => {
  const { lang } = useLanguage();
  const { hash } = useLocation();
  const option = OPTIONS[lang];

  return (
    <Link
      to={`/${option.next}${hash}`}
      replace
      preventScrollReset
      aria-label={option.aria}
      className={`rounded-lg border border-gray-300 px-3 py-1 text-sm font-bold transition hover:bg-gray-100 ${className}`}
    >
      {option.label}
    </Link>
  );
};

export default LanguageToggle;
