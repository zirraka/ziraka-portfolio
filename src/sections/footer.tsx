import { FaGithub, FaLinkedin, FaEnvelope, FaHome } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 py-12 px-6 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8">
          <div className="flex justify-center md:justify-start gap-6 text-lg">
            <a
              href="https://github.com/zirraka"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition transform hover:scale-110"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/giorgizirakashvili/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href={`mailto:giorgizirakashvili81@gmail.com`}
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition transform hover:scale-110"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
          <div>
            <a
              href="#hero"
              className="inline-flex items-center gap-2 px-4 py-2 text-blue-600 dark:text-blue-400 hover:text-white
                        hover:bg-blue-600 dark:hover:bg-blue-800 rounded-lg transition-all duration-300 group"
            >
              <FaHome className="text-lg group-hover:scale-110 transition-transform" />
              <span className="font-medium">Home</span>
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Designed and developed by Giorgi Zirakashvili
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            © {new Date().getFullYear()} - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
