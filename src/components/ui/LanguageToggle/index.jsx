import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/Language";
import { SUPPORTED_LANGUAGES } from "@/contexts/Language/hook";

const ARIA = { es: "Ver en español", en: "View in English" };

const LanguageToggle = ({ className = "" }) => {
  const { lang } = useLanguage();
  const { hash } = useLocation();

  return (
    <div className={`flex items-center text-xs font-bold ${className}`}>
      {SUPPORTED_LANGUAGES.map((code, i) => (
        <span key={code} className="flex items-center">
          {i > 0 && <span className="px-1 text-white/30">/</span>}
          <Link
            to={`/${code}${hash}`}
            replace
            preventScrollReset
            aria-label={ARIA[code]}
            aria-current={code === lang ? "true" : undefined}
            className={`uppercase transition-colors ${
              code === lang ? "text-lime" : "text-white/50 hover:text-white"
            }`}
          >
            {code}
          </Link>
        </span>
      ))}
    </div>
  );
};

export default LanguageToggle;
