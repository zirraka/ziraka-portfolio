import Lenis from "lenis";

let lenis: Lenis | null = null;

/** Starts Lenis smooth scrolling (skipped for users who prefer reduced motion). */
export const startSmoothScroll = () => {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  // Lenis respects each section's scroll-margin-top, so anchors clear the navbar.
  lenis = new Lenis({ autoRaf: true, anchors: true, lerp: 0.1 });
  return () => {
    lenis?.destroy();
    lenis = null;
  };
};

/** Locks page scroll (e.g. while the mobile menu is open). */
export const lockScroll = (locked: boolean) => {
  if (lenis) {
    if (locked) lenis.stop();
    else lenis.start();
  }
  document.documentElement.style.overflow = locked ? "hidden" : "";
};
