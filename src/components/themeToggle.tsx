import { AnimatePresence, motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "../hooks/useTheme";

const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleDarkMode}
      aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"}
      className="relative grid size-10 place-items-center overflow-hidden rounded-full
                 border border-line bg-surface text-fg transition-colors hover:border-line-strong"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={darkMode ? "moon" : "sun"}
          initial={{ y: 18, rotate: -90, opacity: 0 }}
          animate={{ y: 0, rotate: 0, opacity: 1 }}
          exit={{ y: -18, rotate: 90, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="text-lg"
        >
          {darkMode ? <FiMoon /> : <FiSun />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;
