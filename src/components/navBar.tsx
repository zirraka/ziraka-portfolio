import { useState } from "react";
import ThemeToggle from "./themeToggle";

const config = [
  { id: "hero", href: "#hero", name: "Home" },
  { id: "about", href: "#about", name: "About" },
  { id: "skills", href: "#skills", name: "Skills" },
  { id: "projects", href: "#projects", name: "Projects" },
  { id: "experience", href: "#experience", name: "Experience" },
  { id: "education", href: "#education", name: "Education" },
  { id: "apps", href: "#apps", name: "Apps" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">
            Giorgi Zirakashvili
          </h1>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            {config.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            <ThemeToggle />
          </div>
          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className={`md:hidden mt-4 ${isOpen ? "block" : "hidden"}`}>
          <ul className="space-y-2 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
            {config.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
