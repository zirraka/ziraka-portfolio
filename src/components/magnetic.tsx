import { motion, useMotionValue, useSpring } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";

type Props = {
  children: ReactNode;
  strength?: number;
  className?: string;
};

/** Gently pulls its child toward the mouse cursor. Has no effect on touch screens. */
const Magnetic = ({ children, strength = 0.3, className }: Props) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15, mass: 0.2 });
  const sy = useSpring(y, { stiffness: 200, damping: 15, mass: 0.2 });

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Magnetic;
