import { TechnologiesData } from "@/mocks";
import { useLanguage } from "@/contexts/Language";
import Icon from "@/components/ui/Icon";
import { useTechnologiesHook } from "./hook";

const Technologies = () => {
  const { t, pick } = useLanguage();
  const { sectionRef } = useTechnologiesHook();

  return (
    <section
      id="technologies"
      ref={sectionRef}
      className="rounded-t-3xl border-t border-ink-line bg-ink py-3 shadow-[0_-20px_60px_rgb(0_0_0/0.45)]"
    >
      <div className="grid gap-3 px-3 pt-3 sm:grid-cols-2 lg:grid-cols-3">
        {/* Banner: ocupa toda la fila, así 6 categorías quedan en filas parejas de 3 (o de 2 en tablet) */}
        <div className="tech-title flex min-h-48 flex-col justify-between gap-6 bg-lime p-8 text-ink sm:col-span-2 lg:col-span-3 lg:flex-row lg:items-end">
          <h2 className="-rotate-2 font-brush text-6xl uppercase leading-[0.85] md:text-7xl">
            {t("TechTitle")}
          </h2>
          <div className="flex items-end gap-4">
            <p className="max-w-[15rem] text-sm font-medium">
              {t("TechSubtitle")}
            </p>
            <Icon name="ArrowDown" size={36} strokeWidth={1.5} />
          </div>
        </div>

        {/* Una tarjeta por categoría */}
        {TechnologiesData.map((category) => (
          <article
            key={category.Name.en}
            className="tech-card group relative flex min-h-64 flex-col justify-between overflow-hidden border border-ink-line bg-ink-soft p-6 transition-colors duration-300 hover:border-lime"
          >
            {/* Icono gigante de fondo */}
            <Icon
              name={category.icon}
              size={180}
              strokeWidth={1}
              className="absolute -right-8 -top-8 text-white/[0.04] transition-all duration-500 group-hover:rotate-12 group-hover:text-lime/10"
            />

            <ul className="relative flex flex-wrap gap-2">
              {category.objects.map((tech) => (
                <li
                  key={tech.icon + tech.color}
                  className="tech-chip flex items-center gap-2 border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium transition-colors hover:border-lime hover:bg-lime hover:text-ink"
                >
                  <Icon name={tech.icon} size={14} />
                  {pick(tech.name)}
                  <span
                    className="size-2 rounded-full ring-1 ring-white/30"
                    style={{ backgroundColor: tech.color }}
                  />
                </li>
              ))}
            </ul>

            <div className="relative mt-8 flex items-end justify-between">
              <h3 className="font-display text-lg uppercase">
                {pick(category.Name)}
              </h3>
              <span className="label text-white/40">
                {String(category.objects.length).padStart(2, "0")}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
