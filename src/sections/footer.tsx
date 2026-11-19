import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiArrowUpRight, FiCheck, FiCopy } from "react-icons/fi";
import FadeInSection from "../components/fadeInSection";
import Magnetic from "../components/magnetic";
import { EMAIL, SOCIALS } from "../data/socials";

const CopyEmail = () => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="glass flex h-12 w-full items-center justify-center gap-2 rounded-full px-6 text-sm
                 font-medium text-fg transition-colors hover:border-line-strong sm:w-auto"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={copied ? "done" : "copy"}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.15 }}
          className="flex items-center gap-2"
        >
          {copied ? <FiCheck className="text-emerald-400" /> : <FiCopy />}
          {copied ? "Copied!" : "Copy email"}
        </motion.span>
      </AnimatePresence>
    </button>
  );
};

const Footer = () => (
  <>
    <section id="contact" className="px-5 py-24 sm:px-8 sm:py-32">
      <FadeInSection className="mx-auto max-w-6xl">
        <div className="glass relative overflow-hidden rounded-[2rem] px-6 py-16 text-center sm:px-12 sm:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-72 w-[42rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{ background: "radial-gradient(closest-side, var(--glow-1), transparent)" }}
          />
          <p className="relative mb-4 font-mono text-xs uppercase tracking-[0.25em] text-accent">
            Contact
          </p>
          <h2 className="relative mx-auto max-w-3xl font-display text-[clamp(2.25rem,7vw,4.5rem)] font-semibold leading-[1.02] tracking-tight text-fg">
            Let’s build something <span className="text-gradient">great</span> together.
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-muted sm:text-lg">
            Available for B2B contract work: remote from Tbilisi, comfortable with any timezone. Need a senior React Native developer for a fintech, crypto, or consumer mobile app? Let’s talk.
          </p>

          <div className="relative mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Magnetic>
              <a
                href={`mailto:${EMAIL}`}
                className="bg-gradient flex h-12 w-full items-center justify-center gap-2 rounded-full px-7
                           font-medium text-white shadow-lg shadow-indigo-500/25 sm:w-auto"
              >
                Say hello <FiArrowUpRight />
              </a>
            </Magnetic>
            <CopyEmail />
          </div>

          <div className="relative mt-10 flex justify-center gap-3">
            {SOCIALS.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="grid size-11 place-items-center rounded-full border border-line text-lg text-muted
                           transition-all hover:-translate-y-0.5 hover:border-line-strong hover:text-fg"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>

    <footer className="px-5 pb-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 border-t border-line pt-8 text-sm text-muted sm:flex-row">
        <p>Designed and developed by Giorgi Zirakashvili</p>
        <p>© {new Date().getFullYear()} · All rights reserved</p>
      </div>
    </footer>
  </>
);

export default Footer;
