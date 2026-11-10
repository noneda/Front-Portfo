import { NavData, BRAND, PROFILE_PHOTO } from "@/mocks";
import { useLanguage } from "@/contexts/Language";
import LanguageToggle from "@/components/ui/LanguageToggle";
import Icon from "@/components/ui/Icon";
import { useNavbarHook } from "./hook";

const Navbar = () => {
  const { pick } = useLanguage();
  const { navRef, scrolled, menuOpen, toggleMenu, closeMenu } = useNavbarHook();

  return (
    <header
      ref={navRef}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || menuOpen ? "bg-ink/95 backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <a
          href="#top"
          className="nav-item flex items-center gap-2"
          onClick={closeMenu}
        >
          <img
            src={PROFILE_PHOTO}
            alt=""
            className="size-9 rounded-full object-cover ring-2 ring-lime"
          />
          <span className="font-brush text-2xl leading-none text-lime">
            {BRAND}
          </span>
        </a>

        {/* Links escritorio */}
        <ul className="hidden items-center gap-8 md:flex">
          {NavData.map((item) => (
            <li key={item.id} className="nav-item">
              <a
                href={`#${item.id}`}
                className="text-sm font-medium text-white/80 transition-colors hover:text-lime"
              >
                {pick(item.label)}
              </a>
            </li>
          ))}
        </ul>

        {/* Derecha */}
        <div className="flex items-center gap-5">
          <LanguageToggle className="nav-item" />
          <button
            type="button"
            onClick={toggleMenu}
            aria-label="Menu"
            aria-expanded={menuOpen}
            className="nav-item md:hidden"
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </nav>

      {/* Menú móvil */}
      {menuOpen && (
        <ul className="container-page flex flex-col gap-1 border-t border-ink-line pb-6 pt-2 md:hidden">
          {NavData.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={closeMenu}
                className="block py-3 font-display text-2xl uppercase hover:text-lime"
              >
                {pick(item.label)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
