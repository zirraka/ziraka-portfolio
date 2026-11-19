import { useSyncExternalStore } from "react";

// One shared theme store, so every toggle on the page stays in sync.
const listeners = new Set<() => void>();

const isDark = () => document.documentElement.classList.contains("dark");

const subscribe = (cb: () => void) => {
  listeners.add(cb);
  return () => listeners.delete(cb);
};

const setDark = (next: boolean) => {
  document.documentElement.classList.toggle("dark", next);
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", next ? "#05060b" : "#f4f5fa");
  try {
    localStorage.setItem("darkMode", JSON.stringify(next));
  } catch {
    /* storage unavailable — theme still applies for this visit */
  }
  listeners.forEach((l) => l());
};

export const useTheme = () => {
  const darkMode = useSyncExternalStore(subscribe, isDark, () => true);
  const toggleDarkMode = () => setDark(!isDark());
  return { darkMode, toggleDarkMode };
};
