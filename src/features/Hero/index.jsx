import { BRAND } from "@/mocks";
import { useLanguage } from "@/contexts/Language";
import HtmlContent from "@/components/ui/HtmlContent";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import BrushUnderline from "@/components/ui/BrushUnderline";
import { useHeroHook } from "./hook";

// Chips flotantes alrededor de la imagen
const CHIPS = [
  {
    name: "React",
    icon: "Atom",
    position: "left-0 top-[18%] -translate-x-1/3",
  },
  {
    name: "Python",
    icon: "FileCode",
    position: "right-0 top-[45%] translate-x-1/4",
  },
  { name: "C++", icon: "Cpu", position: "bottom-[12%] left-[8%]" },
];

const Hero = () => {
  const { t } = useLanguage();
  const { heroRef, photoSrc, photoOk, onPhotoError } = useHeroHook();

  return (
    <section
      id="top"
      ref={heroRef}
      className="hero relative flex min-h-svh items-center overflow-hidden pt-20"
    >
      {/* Franja de acento del borde derecho */}
      <div className="absolute -right-6 top-0 hidden h-full w-14 -skew-x-6 bg-lime lg:block" />

      <div className="hero-inner container-page grid items-center gap-14 py-12 lg:grid-cols-[1.1fr_1fr]">
        {/* Texto */}
        <div>
          <p className="hero-label label mb-6 text-white/60">
            {t("HeroLabel")}
          </p>

          <h1 className="font-brush uppercase leading-[0.9]">
            <span className="-mx-4 -mt-3 block overflow-hidden px-4 pb-3 pt-3">
              <span className="hero-line glow block text-6xl md:text-8xl">
                {t("HeroTitleTop")}
              </span>
            </span>
            <span className="relative inline-block">
              <span className="hero-brush block text-6xl text-lime md:text-8xl xl:text-[7.5rem]">
                {t("HeroTitleBrush")}
              </span>
              <BrushUnderline className="absolute -bottom-4 left-0 h-6 w-full text-lime md:h-8" />
            </span>
          </h1>

          <HtmlContent
            html={t("HeaderSubtitle")}
            className="hero-text mt-10 max-w-md text-base leading-relaxed text-white/75 [&_b]:font-bold [&_b]:text-white"
          />

          <div className="hero-text mt-8 flex flex-wrap gap-4">
            <Button href="#projects">{t("HeroCta")}</Button>
            <Button href="#contact" variant="outlineLight" icon="Mail">
              {t("HeroSecondary")}
            </Button>
          </div>

          <a
            href="#technologies"
            className="hero-text mt-14 hidden items-center gap-3 text-white/50 hover:text-lime md:flex"
          >
            <span className="label">{t("HeroScroll")}</span>
            <span className="h-px w-16 bg-current" />
            <Icon name="ArrowDown" size={16} />
          </a>
        </div>

        {/* Visual */}
        <div className="hero-visual relative mx-auto w-full max-w-sm lg:max-w-md">
          <div className="absolute inset-0 translate-x-4 translate-y-4 -rotate-3 bg-lime" />

          <div className="relative aspect-square overflow-hidden border-2 border-white/10 bg-ink-soft">
            {photoOk ? (
              <img
                src={photoSrc}
                alt={BRAND}
                onError={onPhotoError}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center bg-[radial-gradient(#ffffff14_1px,transparent_1px)] [background-size:18px_18px]">
                <span className="font-brush text-7xl leading-none text-lime">
                  {BRAND}
                </span>
                <span className="label mt-2 text-white/50">
                  Junior Developer
                </span>
              </div>
            )}
          </div>

          {CHIPS.map((chip) => (
            <div
              key={chip.name}
              className={`hero-chip absolute flex items-center gap-2 bg-white px-3 py-2 text-xs font-bold uppercase text-ink shadow-lg ${chip.position}`}
            >
              <Icon name={chip.icon} size={16} />
              {chip.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
