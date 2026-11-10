import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SocialData, CONTACT_EMAIL, BRAND, PROFILE_PHOTO } from "@/mocks";
import { useLanguage } from "@/contexts/Language";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { useSocialMediaHook } from "./hook";

// Diccionario: Lucide no trae logos de marcas, así que GitHub y LinkedIn vienen de react-icons
const SOCIAL_ICONS = {
  github: (props) => <FaGithub {...props} />,
  linkedin: (props) => <FaLinkedin {...props} />,
  mail: (props) => <Icon name="Mail" {...props} />,
};

const MARQUEE_REPEAT = 8;

const SocialMedia = () => {
  const { t } = useLanguage();
  const { footerRef, year } = useSocialMediaHook();

  return (
    <footer id="contact" ref={footerRef} className="overflow-hidden bg-ink">
      {/* Marquee */}
      <div className="-rotate-1 bg-lime py-3 text-ink" aria-hidden="true">
        <div className="marquee-track flex w-max">
          {Array.from({ length: MARQUEE_REPEAT * 2 }, (_, i) => (
            <span
              key={i}
              className="flex items-center gap-6 pr-6 font-display text-lg uppercase"
            >
              {t("Marquee")}
              <Icon name="Sparkles" size={18} />
            </span>
          ))}
        </div>
      </div>

      <div className="container-page grid gap-12 pb-10 pt-20 lg:grid-cols-[1fr_auto] lg:items-end">
        {/* Contacto */}
        <div>
          <h2 className="footer-item font-brush text-6xl uppercase leading-none text-lime md:text-8xl">
            {t("ContactTitle")}
          </h2>
          <p className="footer-item mt-5 max-w-md text-white/70">
            {t("ContactText")}
          </p>
          <Button
            href={`mailto:${CONTACT_EMAIL}`}
            icon="Send"
            className="footer-item mt-8"
          >
            {t("ContactCta")}
          </Button>
        </div>

        {/* Redes */}
        <ul className="footer-item flex gap-3">
          {SocialData.map((social) => {
            const SocialIcon = SOCIAL_ICONS[social.icon];
            const isExternal = social.url.startsWith("http");
            return (
              <li key={social.name}>
                <a
                  href={social.url}
                  aria-label={social.name}
                  {...(isExternal && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className="grid size-12 place-items-center border border-ink-line text-white transition-colors hover:border-lime hover:bg-lime hover:text-ink"
                >
                  {SocialIcon && <SocialIcon size={20} />}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Barra inferior */}
      <div className="container-page flex flex-col gap-4 border-t border-ink-line py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <img
            src={PROFILE_PHOTO}
            alt=""
            className="size-7 rounded-full object-cover"
          />
          <span>
            © {year} {BRAND}. {t("Rights")}
          </span>
        </div>
        <a
          href="#top"
          className="flex items-center gap-2 uppercase tracking-widest hover:text-lime"
        >
          {t("BackToTop")}
          <Icon name="ArrowUp" size={14} />
        </a>
      </div>
    </footer>
  );
};

export default SocialMedia;
