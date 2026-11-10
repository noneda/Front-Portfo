import { LanguageContext, useLanguageState } from "./hook";

const LanguageProvider = ({ children }) => {
  const value = useLanguageState();

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
export { useLanguage } from "./hook";
