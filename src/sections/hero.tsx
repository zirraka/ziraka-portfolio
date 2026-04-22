import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useEffect, useState } from "react";

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

const Hero = () => {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(80);

  useEffect(() => {
    const current = heroPhrases[phraseIndex];
    const isComplete = !isDeleting && text === current;
    const isDeleted = isDeleting && text === "";

    if (isComplete) {
      setSpeed(80);
      setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleted) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % heroPhrases.length);
      setSpeed(150);
    } else {
      const timer = setTimeout(
        () => {
          setText(
            isDeleting
              ? current.substring(0, text.length - 1)
              : current.substring(0, text.length + 1),
          );
        },
        isDeleting ? 50 : speed,
      );

      return () => clearTimeout(timer);
    }
  }, [text, isDeleting, phraseIndex, speed]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 py-20
      bg-gradient-to-br bg-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-700"
    >
      <div className="container mx-auto max-w-screen-xl">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
          <img
            src="/avatar.jpeg"
            width="250"
            height="250"
            className="w-64 h-64 rounded-full object-cover
             shadow-lg dark:shadow-xl
             border-4 border-white dark:border-gray-800"
            alt="avatar"
          />
          <div className="w-full text-center lg:text-left max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-2 leading-tight">
              Giorgi Zirakashvili
            </h1>

            <p className="text-2xl md:text-3xl text-blue-600 dark:text-blue-400 font-medium mb-4">
              Senior React Native Developer
            </p>
            <p
              className="text-lg md:text-xl font-mono text-gray-700 dark:text-gray-300 mb-8 tracking-wide
              min-h-[2.5rem] max-w-xl mx-auto lg:mx-0 break-words"
              style={{
                fontFamily:
                  'Monaco, Menlo, "Ubuntu Mono", "Fira Code", monospace',
              }}
            >
              {text}
              <span className="inline-block w-px h-6 bg-blue-600 dark:bg-blue-400 animate-pulse ml-1" />
            </p>
            <div className="w-full flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="/resume.pdf"
                download="Giorgi-Zirakashvili-Resume.pdf"
                className="w-full sm:w-auto sm:min-w-[180px] h-12 flex items-center justify-center px-6
                bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white
                rounded-lg shadow-md hover:shadow-lg transition-all duration-300 font-medium"
              >
                📄 Download CV
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto sm:min-w-[180px] h-12 flex items-center justify-center px-6
                bg-transparent border-2 border-blue-600 dark:border-blue-400
                text-blue-600 dark:text-blue-400
                hover:bg-blue-600 hover:text-white dark:hover:bg-blue-800
                rounded-lg shadow-md hover:shadow-lg transition-all duration-300 font-medium"
              >
                ✉️ Contact me
              </a>
            </div>
            <div className="flex justify-center lg:justify-start gap-6 text-2xl">
              <a
                href="https://github.com/zirraka"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-transform hover:scale-110"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/giorgizirakashvili/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-transform hover:scale-110"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:giorgizirakashvili81@gmail.com"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-transform hover:scale-110"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
