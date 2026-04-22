import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 py-12 px-6 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-center gap-6 text-lg">
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
