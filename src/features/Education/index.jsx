import { EducationData } from "@/mocks";
import { useLanguage } from "@/contexts/Language";
import Icon from "@/components/ui/Icon";
import { useEducationHook } from "./hook";

const Education = () => {
  const { t, pick } = useLanguage();
  const { sectionRef } = useEducationHook();

  return (
    <section
      id="education"
      ref={sectionRef}
      className="bg-cream py-20 text-ink md:py-28"
    >
      <div className="container-page grid gap-12 lg:grid-cols-[20rem_1fr]">
        <div className="edu-head">
          <h2 className="font-display text-4xl uppercase leading-[0.95]">
            {t("EducationTitle")}
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-stone">
            {t("EducationText")}
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {EducationData.map((item) => (
            <article key={item.id} className="edu-card group flex flex-col">
              {/* Banner */}
              <div className="relative flex aspect-[16/9] items-end justify-between overflow-hidden bg-ink p-4 text-white">
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff12_1px,transparent_1px)] [background-size:16px_16px]" />
                {/* Tailwind (hover) en el span, GSAP (entrada) en el icono: nunca la misma propiedad en el mismo elemento */}
                <span className="relative self-start transition-transform duration-300 group-hover:-rotate-12">
                  <Icon
                    name={item.icon}
                    size={44}
                    strokeWidth={1.5}
                    className="edu-icon text-lime"
                  />
                </span>
                <span className="edu-year relative font-brush text-5xl leading-none">
                  {item.year}
                </span>
              </div>

              {/* Contenido */}
              <div className="flex flex-1 flex-col border-x border-b border-cream-dark bg-white/40 p-5">
                <h3 className="font-bold leading-snug">
                  {pick(item.institution)}
                </h3>
                <p className="mt-1 text-sm">{pick(item.degree)}</p>
                <p className="mt-3 text-xs leading-relaxed text-stone">
                  {pick(item.summary)}
                </p>

                <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-5 text-xs text-stone">
                  <span className="flex items-center gap-1">
                    <Icon name="MapPin" size={14} />
                    {item.place}
                  </span>
                  <span className="whitespace-nowrap bg-ink px-2 py-0.5 font-bold uppercase text-lime">
                    {pick(item.status)}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
