import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FiArrowDown, FiArrowUpRight, FiDownload, FiMapPin } from "react-icons/fi";
import Magnetic from "../components/magnetic";
import { SOCIALS } from "../data/socials";

const heroPhrases = [
  "Building high-performance fintech apps at scale",
  "React Native engineer crafting smooth mobile experiences",
  "Designing crypto wallets and payment systems for real users",
  "Focused on performance, scalability, and clean architecture",
  "Turning complex financial flows into simple mobile UX",
  "Bridging fiat and crypto through intuitive mobile products",
  "Strong advocate of clean, maintainable codebases",
  "Building production-grade apps with React Native and native modules",
  "Obsessed with app performance and user experience",
  "Shipping secure and scalable fintech features end-to-end",
  "Integrating payment systems like Apple Pay & Google Pay",
  "From UI polish to backend integration — full product ownership",
  "Exploring systems design through real-world mobile apps",
  "Building tools for underbanked and global users",
];

const FLOATING_TAGS = [
  { label: "React Native", className: "-left-16 top-8", delay: 0 },
  { label: "Fintech", className: "-right-10 top-1/3", delay: 1.2 },
  { label: "Web3", className: "-left-8 bottom-10", delay: 2.4 },
];

const ease = [0.22, 1, 0.36, 1] as const;

const useTypewriter = (phrases: string[]) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index];
    let timer: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timer = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text === "") {
      timer = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => (i + 1) % phrases.length);
      }, 300);
    } else {
      timer = setTimeout(
        () =>
          setText(
            deleting
              ? current.substring(0, text.length - 1)
              : current.substring(0, text.length + 1),
          ),
        deleting ? 30 : 60,
      );
    }
    return () => clearTimeout(timer);
  }, [text, deleting, index, phrases]);

  return text;
};

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const text = useTypewriter(heroPhrases);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const avatarY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const nameWords = ["Giorgi", "Zirakashvili"];

  return (
    <section
      id="hero"
      ref={ref}
      className="relative flex min-h-svh items-center px-5 pb-20 pt-28 sm:px-8"
    >
      <motion.div
        style={{ opacity: fade }}
        className="mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-12
                   lg:flex-row lg:items-center lg:justify-between lg:gap-16"
      >
        {/* Text */}
        <motion.div style={{ y: contentY }} className="w-full max-w-2xl text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mb-6 flex flex-wrap justify-center gap-2 lg:justify-start"
          >
            <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted sm:text-sm">
              <span className="bg-gradient size-2 rounded-full" />
              Senior React Native Developer
            </span>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10
                         px-4 py-1.5 text-xs font-medium text-emerald-600 transition-colors hover:bg-emerald-500/15
                         dark:text-emerald-300 sm:text-sm"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              Available for contracts
            </a>
          </motion.div>

          <h1 className="font-display text-[clamp(2.75rem,10vw,5.75rem)] font-semibold leading-[0.95] tracking-tight text-fg">
            {nameWords.map((word, i) => (
              <span key={word} className="inline-block overflow-hidden pb-2 align-bottom">
                <motion.span
                  className={`inline-block ${i === 1 ? "text-gradient" : ""}`}
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease }}
                >
                  {word}
                </motion.span>
                {i === 0 && <span>&nbsp;</span>}
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mx-auto mt-6 min-h-[3.5rem] max-w-xl font-mono text-sm leading-relaxed text-muted
                       sm:min-h-[2rem] sm:text-base lg:mx-0"
          >
            <span className="text-accent">&gt; </span>
            {text}
            <span className="ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[3px] animate-pulse bg-accent" />
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6, ease }}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <Magnetic>
              <a
                href="/resume.pdf"
                download="Giorgi-Zirakashvili-Resume.pdf"
                className="bg-gradient flex h-12 w-full items-center justify-center gap-2 rounded-full px-7
                           font-medium text-white shadow-lg shadow-indigo-500/25 transition-shadow
                           hover:shadow-xl hover:shadow-indigo-500/40 sm:w-auto"
              >
                <FiDownload /> Download CV
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="glass flex h-12 w-full items-center justify-center gap-2 rounded-full px-7
                           font-medium text-fg transition-colors hover:border-line-strong sm:w-auto"
              >
                Get in touch <FiArrowUpRight />
              </a>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.95, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            {SOCIALS.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="glass grid size-11 place-items-center rounded-full text-lg text-muted
                           transition-all hover:-translate-y-0.5 hover:text-fg"
              >
                <Icon />
              </a>
            ))}
            <p className="flex w-full items-center justify-center gap-2 text-sm text-muted sm:ml-2 sm:w-auto lg:justify-start">
              <FiMapPin className="text-accent" />
              Tbilisi, Georgia · Remote, any timezone
            </p>
          </motion.div>
        </motion.div>

        {/* Avatar */}
        <motion.div
          style={{ y: avatarY }}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.1, ease }}
          className="relative shrink-0"
        >
          <div className="relative size-40 sm:size-56 lg:size-80">
            <div
              aria-hidden
              className="absolute -inset-[3px] rounded-full opacity-90"
              style={{
                background: "conic-gradient(from 0deg, #818cf8, #22d3ee, #e879f9, #818cf8)",
                animation: "spin-slow 8s linear infinite",
              }}
            />
            <div
              aria-hidden
              className="absolute -inset-10 -z-10 rounded-full opacity-60 blur-3xl"
              style={{ background: "radial-gradient(closest-side, var(--glow-1), transparent)" }}
            />
            <img
              src="/avatar.jpeg"
              width={320}
              height={320}
              alt="Giorgi Zirakashvili, Senior React Native Developer"
              fetchPriority="high"
              className="relative size-full rounded-full border-4 border-bg object-cover"
            />
          </div>

          {FLOATING_TAGS.map((tag) => (
            <motion.span
              key={tag.label}
              className={`absolute z-10 hidden rounded-full border border-line bg-surface-strong px-4 py-2 text-sm font-medium text-fg shadow-lg backdrop-blur-md lg:block ${tag.className}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
              transition={{
                opacity: { delay: 1 + tag.delay * 0.2, duration: 0.5 },
                scale: { delay: 1 + tag.delay * 0.2, duration: 0.5 },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: tag.delay },
              }}
            >
              {tag.label}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        aria-label="Scroll to About"
        style={{ opacity: fade }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted sm:flex"
      >
        <span className="font-mono uppercase tracking-[0.2em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiArrowDown />
        </motion.span>
      </motion.a>
    </section>
  );
};

export default Hero;
