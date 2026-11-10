import { useLanguage } from "@/contexts/Language";

const LABELS = {
  es: { short: "ES", aria: "Cambiar a inglés" },
  en: { short: "EN", aria: "Switch to Spanish" },
};

const LanguageToggle = ({ className = "" }) => {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={LABELS[lang].aria}
      className={`rounded-lg border border-gray-300 px-3 py-1 text-sm font-bold transition hover:bg-gray-100 ${className}`}
    >
      {LABELS[lang].short}
    </button>
  );
};

export default LanguageToggle;
