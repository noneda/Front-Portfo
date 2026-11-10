import { useLanguage } from "@/contexts/Language";
import Button from "@/components/ui/Button";
import { useNotFoundHook } from "./hook";

const NotFound = () => {
  const { t, lang } = useLanguage();
  const { containerRef, goBack } = useNotFoundHook();

  return (
    <main
      ref={containerRef}
      className="flex min-h-screen flex-col items-center justify-center gap-5 bg-ink px-4 text-center text-white"
    >
      <h1 className="nf-code font-brush text-9xl text-lime">404</h1>
      <p className="nf-text font-display text-2xl uppercase">
        {t("NotFoundTitle")}
      </p>
      <div className="nf-text flex gap-3">
        <Button variant="outlineLight" onClick={goBack}>
          {t("NotFoundBack")}
        </Button>
        <Button to={`/${lang}`}>{t("NotFoundHome")}</Button>
      </div>
    </main>
  );
};

export default NotFound;
