import { Link } from "react-router-dom";
import Icon from "@/components/ui/Icon";

const VARIANTS = {
  lime: "bg-lime text-ink hover:bg-white",
  outline: "border-2 border-ink text-ink hover:bg-ink hover:text-lime",
  outlineLight:
    "border-2 border-white/80 text-white hover:border-lime hover:text-lime",
  dark: "bg-ink text-white hover:bg-lime hover:text-ink",
};

const BASE =
  "group inline-flex items-center gap-3 px-5 py-3 text-xs font-bold uppercase tracking-[0.15em] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime";

/**
 * - to:      ruta interna (React Router)
 * - href:    enlace normal (#ancla, mailto:, https://)
 * - onClick: botón
 */
const Button = ({
  variant = "lime",
  to,
  href,
  icon = "ArrowRight",
  external = false,
  className = "",
  children,
  ...props
}) => {
  const classes = `${BASE} ${VARIANTS[variant] ?? VARIANTS.lime} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <Icon
          name={icon}
          size={16}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (to)
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );

  if (href) {
    const externalProps = external
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};
    return (
      <a href={href} className={classes} {...externalProps} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  );
};

export default Button;
