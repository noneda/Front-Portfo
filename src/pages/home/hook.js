import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLanguage } from "@/contexts/Language";

export const useHomeHook = () => {
  const { lang } = useParams();
  const { changeLanguage } = useLanguage();

  useEffect(() => {
    changeLanguage(lang);
  }, [lang, changeLanguage]);
};
