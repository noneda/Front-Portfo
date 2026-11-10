import { AboutHighlights, AboutTerminal, BRAND, PROFILE_PHOTO } from "@/mocks";
import { useLanguage } from "@/contexts/Language";
import HtmlContent from "@/components/ui/HtmlContent";
import SectionLabel from "@/components/ui/SectionLabel";
import Icon from "@/components/ui/Icon";
import { useAboutMeHook } from "./hook";

const AboutMe = () => {
  const { t, pick } = useLanguage();
  const { sectionRef } = useAboutMeHook();

  return (
    <section
      id="about"
      ref={sectionRef}
      className="overflow-hidden bg-ink py-20 md:py-28"
    >
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1fr_1.2fr_0.8fr]">
        {/* Terminal */}
        <div className="about-terminal border border-ink-line bg-ink-soft font-mono text-sm">
          <div className="flex items-center gap-2 border-b border-ink-line px-4 py-3">
            <span className="size-3 rounded-full bg-white/15" />
            <span className="size-3 rounded-full bg-white/15" />
            <span className="size-3 rounded-full bg-lime" />
            <span className="ml-auto text-xs text-white/40">~/{BRAND}</span>
          </div>
          <div className="space-y-4 p-5">
            {AboutTerminal.map((line) => (
              <div key={line.cmd} className="about-line">
                <p>
                  <span className="text-lime">$</span> {line.cmd}
                </p>
                <p className="text-white/60">{pick(line.out)}</p>
              </div>
            ))}
            <p>
              <span className="text-lime">$</span>{" "}
              <span className="about-cursor inline-block h-4 w-2 translate-y-0.5 bg-lime" />
            </p>
          </div>
        </div>

        {/* Texto */}
        <div>
          <SectionLabel className="about-fade">{t("AboutLabel")}</SectionLabel>
          <h2 className="about-fade mt-3 font-display text-3xl uppercase md:text-4xl">
            {t("AboutTitle")}
          </h2>
          <p className="about-brush mt-1 origin-left font-brush text-4xl uppercase text-lime md:text-5xl">
            {t("AboutBrush")}
          </p>
          <HtmlContent
            html={t("AboutMe")}
            className="about-fade mt-6 text-sm leading-relaxed text-white/70 [&_b]:text-white"
          />
          <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
            {AboutHighlights.map((item) => (
              <li
                key={item.icon}
                className="about-highlight flex items-center gap-3 text-xs font-bold uppercase"
              >
                <Icon name={item.icon} size={22} className="text-lime" />
                {pick(item.label)}
              </li>
            ))}
          </ul>
        </div>

        {/* Tarjeta tipo polaroid */}
        <div className="about-card relative mx-auto hidden w-full max-w-xs lg:block">
          <div className="rotate-3 bg-cream p-4 pb-6 text-center text-ink transition-transform duration-500 hover:rotate-0">
            <img
              src={PROFILE_PHOTO}
              alt={BRAND}
              className="aspect-square w-full object-cover"
            />
            <span className="mt-4 block font-brush text-4xl leading-none">
              {BRAND}
            </span>
            <span className="label mt-2 block">Junior Developer</span>
            <div className="mt-6 flex justify-center gap-3">
              <Icon name="Code" size={18} />
              <Icon name="ShieldHalf" size={18} />
              <Icon name="Cpu" size={18} />
            </div>
          </div>
          <Icon
            name="Sparkles"
            size={40}
            className="absolute -right-4 -top-6 text-lime"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
