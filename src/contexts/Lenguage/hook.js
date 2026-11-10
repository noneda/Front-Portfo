import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Languages } from "@/mocks";

export const LanguageContext = createContext(null);

export const SUPPORTED_LANGUAGES = ["es", "en"];
const DEFAULT_LANGUAGE = "es";
const STORAGE_KEY = "portfolio-lang";

// Idioma que viene en la URL (/es, /en), si hay uno válido
const getLanguageFromUrl = () => {
  const segment = window.location.pathname.split("/")[1];
  return SUPPORTED_LANGUAGES.includes(segment) ? segment : null;
};

// 1. Idioma guardado  2. Idioma del navegador  3. Español
export const getInitialLanguage = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (SUPPORTED_LANGUAGES.includes(saved)) return saved;
  } catch {
    // localStorage bloqueado (modo privado, etc.)
  }

  const browser = navigator.language?.slice(0, 2);
  return SUPPORTED_LANGUAGES.includes(browser) ? browser : DEFAULT_LANGUAGE;
};

// Estado y lógica del contexto (lo usa el Provider)
export const useLanguageState = () => {
  // Arranca con el idioma de la URL para que no "parpadee" el otro idioma al cargar
  const [lang, setLang] = useState(
    () => getLanguageFromUrl() ?? getInitialLanguage(),
  );

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // sin persistencia, no pasa nada
    }
  }, [lang]);

  const changeLanguage = useCallback((next) => {
    if (SUPPORTED_LANGUAGES.includes(next)) setLang(next);
  }, []);

  // t("AboutMe") -> texto en el idioma actual (si falta, usa español; si no, la key)
  const t = useCallback(
    (key) =>
      Languages[lang]?.[key] ?? Languages[DEFAULT_LANGUAGE]?.[key] ?? key,
    [lang],
  );

  // pick({ es: "Hola", en: "Hi" }) -> "Hola" | "Hi"
  // Si recibe un string normal, lo devuelve tal cual.
  const pick = useCallback(
    (value) =>
      value && typeof value === "object"
        ? (value[lang] ?? value[DEFAULT_LANGUAGE])
        : value,
    [lang],
  );

  return useMemo(
    () => ({ lang, changeLanguage, t, pick }),
    [lang, changeLanguage, t, pick],
  );
};

// Hook para consumir el contexto desde cualquier componente
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage debe usarse dentro de <LanguageProvider>");
  }
  return context;
};
