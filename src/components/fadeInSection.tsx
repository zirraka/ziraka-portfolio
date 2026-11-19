import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
};

/** Reveals its children (rise + fade + un-blur) the first time they scroll into view. */
const FadeInSection = ({ children, delay = 0, className, y = 28 }: Props) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y, filter: "blur(8px)" }}
    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    viewport={{ once: true, margin: "0px 0px -80px 0px" }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export default FadeInSection;
