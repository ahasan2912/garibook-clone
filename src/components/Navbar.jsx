import { useEffect, useState } from "react";
import { FaBars, FaGlobe, FaXmark } from "react-icons/fa6";
import { useI18n } from "../i18n";

export default function Navbar() {
  const { lang, toggle, t, data } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  const handleNavClick = (e, href) => {
    const targetId = href.startsWith("#") ? href.slice(1) : null;
    if (!targetId) return;
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      setActive(targetId);
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  };

  useEffect(() => {
    const ids = data.NAV_LINKS.map((l) =>
      l.href.startsWith("#") ? l.href.slice(1) : null
    ).filter(Boolean);
    if (!ids.length) return;
    const onScroll = () => {
      const offset = 160;
      const current = ids.find((id) => {
        const el = document.getElementById(id);
        return el && el.getBoundingClientRect().top <= offset;
      });
      if (current && current !== active) {
        setActive(current);
      } else if (!current && active) {
        setActive("");
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [data.NAV_LINKS, active]);

  const brandSrc =
    lang === "bn"
      ? "/assets/images/Garibook-Logo-Bangla_PNG.png"
      : "/assets/images/gaibook-logo.svg";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navClass = [
    "theme-navbar-wrapper relative z-[1] w-full transition-all duration-300",
    scrolled
      ? "is-sticky fixed top-0 z-[999] bg-white !p-3 shadow-[0px_8px_20px_0px_rgba(0,0,0,0.1)]"
      : "lg:mt-12",
  ].join(" ");

  return (
    <header className={navClass}>
      <div className="container-gb flex items-center justify-between gap-4 py-1.5">
        <a href="/" aria-label="Garibook home" className="shrink-0">
          <img
            src={brandSrc}
            alt="Garibook"
            height={48}
            className="brand-logo h-11 w-auto"
          />
        </a>

        {/* Desktop: nav links + language toggle + login */}
        <div className="hidden lg:flex items-center justify-end gap-8 relative">
          <nav className="flex items-center gap-7 xl:gap-4" aria-label="Primary">
            {data.NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`nav-theme-link ${link.href.slice(1) && link.href.slice(1) === active ? "active-menu" : ""}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a href="/" className="header-auth-item active-btn">
            {t("Login")}
          </a>

          <div className={`absolute ${scrolled ? "hidden" : "-top-11"} -right-54`}>
            <LanguageToggle lang={lang} onToggle={toggle} />
          </div>
        </div>

        {/* Mobile: login link + toggler */}
        <div className="flex items-center gap-4 lg:hidden">
          <a href="/" className="header-auth-item active-btn nav-link py-2">
            {t("Login")}
          </a>
          <button
            type="button"
            className="navbar-toggler inline-flex h-11 w-11 items-center justify-center rounded-l bg-white/80 text-ink-gb"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <FaBars className="w-10 h-7" />
          </button>
        </div>
      </div>

      {/* Mobile offcanvas panel */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`mobile-menu-wrap absolute inset-y-0 right-0 flex w-full flex-col bg-primary-gb transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"
            }`}
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-end gap-4 px-6 py-5">
            <LanguageToggle lang={lang} onToggle={toggle} />
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white hover:bg-white/10"
              aria-label="Close navigation"
              onClick={() => setOpen(false)}
            >
              <FaXmark className="text-2xl" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-6 py-4" aria-label="Mobile">
            <ul className="m-0 list-none space-y-7 p-0 text-center">
              {data.NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`inline-block font-uncut text-[18px] font-medium text-white transition-colors hover:text-white/80 ${link.href.slice(1) && link.href.slice(1) === active ? "text-white/80" : ""}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <img
            src="/assets/images/logo-vector.png"
            alt=""
            className="pointer-events-none absolute bottom-0 right-0 w-56 max-w-[60%]"
          />
        </aside>
      </div>
    </header>
  );
}

function LanguageToggle({ lang, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="language_toggle_wrapper inline-flex items-center gap-2 rounded-lg bg-primary-gb px-3 py-2 font-uncut text-[15px] font-medium text-white transition-colors hover:bg-primary-deep"
      aria-label={`Switch to ${lang === "en" ? "বাংলা" : "English"}`}
    >
      <FaGlobe className="text-lg" aria-hidden="true" />
      <span className="language_title">{lang === "en" ? "English" : "বাংলা"}</span>
    </button>
  );
}