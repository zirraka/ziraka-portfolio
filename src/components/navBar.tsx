import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useEffect, useState } from "react";
import { lockScroll } from "./smoothScroll";
import ThemeToggle from "./themeToggle";

const config = [
  { id: "hero", href: "#hero", name: "Home" },
  { id: "about", href: "#about", name: "About" },
  { id: "skills", href: "#skills", name: "Skills" },
  { id: "projects", href: "#projects", name: "Projects" },
  { id: "experience", href: "#experience", name: "Experience" },
  { id: "education", href: "#education", name: "Education" },
  { id: "contact", href: "#contact", name: "Contact" },
];

const useActiveSection = () => {
  const [active, setActive] = useState("hero");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    config.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return active;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection();
  const { scrollY } = useScroll();

  // Hide the bar while scrolling down, bring it back on scroll up.
  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 240);
    setScrolled(y > 20);
  });

  useEffect(() => {
    lockScroll(isOpen);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <>
      <motion.header
        animate={{ y: hidden && !isOpen ? "-120%" : "0%" }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:pt-4"
      >
        <nav
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-3 py-2 pl-5
                      backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-500
                      ${
                        scrolled || isOpen
                          ? "border-line bg-surface-strong shadow-lg shadow-black/5"
                          : "border-transparent bg-transparent"
                      }`}
        >
          <a
            href="#hero"
            className="font-display text-lg font-semibold tracking-tight text-fg"
            onClick={() => setIsOpen(false)}
          >
            Giorgi<span className="text-gradient">.</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-1 lg:flex">
            {config.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`relative block rounded-full px-4 py-2 text-sm transition-colors ${
                    active === item.id ? "text-fg" : "text-muted hover:text-fg"
                  }`}
                >
                  {active === item.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full border border-line bg-surface"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsOpen((o) => !o)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              className="grid size-10 place-items-center rounded-full border border-line bg-surface lg:hidden"
            >
              <span className="relative block h-3 w-4">
                <motion.span
                  className="absolute left-0 top-0 h-[1.5px] w-4 rounded bg-fg"
                  animate={isOpen ? { rotate: 45, y: 5.25 } : { rotate: 0, y: 0 }}
                />
                <motion.span
                  className="absolute bottom-0 left-0 h-[1.5px] w-4 rounded bg-fg"
                  animate={isOpen ? { rotate: -45, y: -5.25 } : { rotate: 0, y: 0 }}
                />
              </span>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 44px) 36px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 44px) 36px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 44px) 36px)" }}
            transition={{ duration: 0.55, ease: [0.65, 0, 0.35, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-bg px-8 lg:hidden"
          >
            <ul className="space-y-2">
              {config.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ delay: 0.15 + i * 0.05, duration: 0.4 }}
                >
                  <a
                    href={item.href}
                    onClick={() => {
                      // Unlock synchronously so the anchor scroll that follows isn't blocked.
                      lockScroll(false);
                      setIsOpen(false);
                    }}
                    className="flex items-baseline gap-4 py-2 font-display text-4xl font-semibold tracking-tight"
                  >
                    <span className="font-mono text-xs text-muted">0{i + 1}</span>
                    <span className={active === item.id ? "text-gradient" : "text-fg"}>
                      {item.name}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
