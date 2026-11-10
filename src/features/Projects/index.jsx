import { useLanguage } from "@/contexts/Language";
import { SocialData } from "@/mocks";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import EmptyState from "@/components/errors/EmptyState";
import { useProjectsHook } from "./hook";

const githubUrl = SocialData.find((s) => s.icon === "github")?.url;

const Projects = () => {
  const { t, pick } = useLanguage();
  const { sectionRef, projects } = useProjectsHook();

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="bg-cream py-20 text-ink md:py-28"
    >
      <div className="container-page grid gap-12 lg:grid-cols-[20rem_1fr]">
        {/* Encabezado: se queda fijo mientras se recorren las tarjetas */}
        <div className="projects-head flex flex-col items-start lg:sticky lg:top-28 lg:self-start">
          <h2 className="font-display text-4xl uppercase leading-[0.95]">
            {t("ProjectsTitle")}
          </h2>
          <p className="mt-5 font-medium">{t("ProjectsSubtitle")}</p>
          <p className="mt-3 text-sm leading-relaxed text-stone">
            {t("ProjectsText")}
          </p>
          {githubUrl && (
            <Button
              href={githubUrl}
              external
              variant="outline"
              icon="ArrowUpRight"
              className="mt-8"
            >
              {t("ProjectsCta")}
            </Button>
          )}
        </div>

        {/* Tarjetas */}
        {projects.length ? (
          <div className="grid gap-3 sm:grid-cols-2 md:gap-4">
            {projects.map((project) => (
              <article
                key={project.id}
                className={`project-card group flex flex-col bg-cream-dark p-4 ${project.featured ? "sm:col-span-2" : ""}`}
              >
                <div
                  className={`relative flex items-center justify-center overflow-hidden bg-white/50 ${
                    project.featured ? "aspect-[21/8]" : "aspect-[16/9]"
                  }`}
                >
                  {/* Tailwind (hover) en el span, GSAP (entrada) en la tarjeta: nunca en el mismo elemento */}
                  <span className="transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                    <Icon name={project.icon} size={56} strokeWidth={1.25} />
                  </span>

                  {project.private && (
                    <span className="absolute right-3 top-3 flex items-center gap-1 bg-ink px-2 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-lime">
                      <Icon name="Lock" size={12} />
                      {t("ProjectPrivate")}
                    </span>
                  )}
                </div>

                <div className="mt-4 flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-base uppercase">
                      {pick(project.name)}
                    </h3>

                    {/* Solo los proyectos públicos con url muestran el botón */}
                    {!project.private && project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={pick(project.name)}
                        className="grid size-8 shrink-0 place-items-center rounded-full bg-ink text-white transition-colors hover:bg-lime hover:text-ink"
                      >
                        <Icon name="ArrowUpRight" size={14} />
                      </a>
                    )}
                  </div>

                  <p className="mt-2 text-sm leading-relaxed text-stone">
                    {pick(project.summary)}
                  </p>

                  <ul className="mt-auto flex flex-wrap gap-1.5 pt-4">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="border border-ink/15 px-2 py-0.5 text-[0.7rem] font-medium"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <EmptyState icon="FolderGit2" title={t("ProjectsEmpty")} />
        )}
      </div>
    </section>
  );
};

export default Projects;
