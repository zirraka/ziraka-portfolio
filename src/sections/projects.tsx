import FadeInSection from "../components/fadeInSection";
import { motion } from "framer-motion";

const PROJECTS_DATA = [
  {
    id: "coinmetro-mobile-platform",
    title: "Coinmetro Mobile Platform",
    description:
      "Senior React Native developer on a production crypto trading app. Responsible for architecture, onboarding flows, wallet systems, and secure financial transactions at scale.",
    tech: [
      "React Native",
      "TypeScript",
      "Redux / Zustand",
      "REST APIs",
      "CI/CD (Fastlane)",
    ],
  },
  {
    id: "crypto-wallet-infrastructure",
    title: "Crypto Wallet & Fiat Bridge System",
    description:
      "Designed and implemented wallet infrastructure enabling fiat-to-crypto flows, secure transactions, and real-time balance synchronization for a fintech ecosystem.",
    tech: [
      "React Native",
      "Web3",
      "Ethereum",
      "Secure APIs",
      "Native Modules (iOS/Android)",
    ],
  },
  {
    id: "mobile-ci-cd-engineering",
    title: "Mobile CI/CD & Release Engineering",
    description:
      "Built and maintained CI/CD pipelines for React Native apps, improving deployment reliability and reducing release time through automation and Fastlane workflows.",
    tech: [
      "Fastlane",
      "GitHub Actions",
      "iOS Build System",
      "Android Gradle",
      "Automation",
    ],
  },
  {
    id: "react-native-enterprise-migration",
    title: "Enterprise React Native Migration & Upgrade",
    description:
      "Led a large-scale React Native upgrade in a production enterprise app, migrating from 0.71 to 0.83. Handled breaking changes, native iOS/Android build issues, and dependency conflicts while ensuring full system stability and performance improvements.",
    tech: [
      "React Native",
      "TypeScript",
      "Xcode",
      "Android Gradle",
      "Native Modules",
      "Debugging & Performance",
    ],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center py-20 px-6 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto max-w-5xl">
        <FadeInSection>
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
            Projects
          </h2>
        </FadeInSection>
        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project, i) => (
            <FadeInSection key={i} delay={i * 0.1}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md
                          border border-gray-200 dark:border-gray-600
                          hover:shadow-lg hover:transform hover:-translate-y-1
                          transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 text-xs
                                bg-gray-100 dark:bg-gray-700/50
                                text-gray-800 dark:text-gray-200
                                border-2 border-gray-200 dark:border-blue-500
                                rounded-md
                                hover:border-blue-500 dark:hover:border-blue-400
                                transition-colors duration-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
