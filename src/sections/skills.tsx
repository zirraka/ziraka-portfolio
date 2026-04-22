import FadeInSection from "../components/fadeInSection";
import {
  SiMongodb,
  SiTypescript,
  SiCplusplus,
  SiJavascript,
  SiDocker,
  SiGithub,
  SiExpress,
} from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { DiRedis } from "react-icons/di";

const SKILLS_DATA = [
  {
    id: "mobile",
    name: "Mobile Development",
    items: [
      { name: "React Native", icon: FaReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Native Modules (iOS / Android)", icon: SiCplusplus },
    ],
  },
  {
    id: "architecture",
    name: "Architecture & State",
    items: [
      { name: "Redux", icon: FaReact },
      { name: "Zustand", icon: FaReact },
      { name: "REST APIs", icon: FaNodeJs },
      { name: "Scalable App Architecture", icon: FaReact },
    ],
  },
  {
    id: "fintech",
    name: "Fintech & Blockchain",
    items: [
      { name: "Crypto Wallet Systems", icon: FaReact },
      { name: "Web3 / Ethereum", icon: FaReact },
      { name: "Secure Transactions", icon: FaReact },
      { name: "Payment Integrations (Apple Pay / Google Pay)", icon: FaReact },
    ],
  },
  {
    id: "backend",
    name: "Backend & APIs",
    items: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express", icon: SiExpress },
      { name: "REST API Design", icon: FaNodeJs },
    ],
  },
  {
    id: "devops",
    name: "DevOps & Tooling",
    items: [
      { name: "CI/CD (Fastlane)", icon: SiDocker },
      { name: "Git / GitHub", icon: SiGithub },
      { name: "Build & Release Pipelines", icon: SiDocker },
    ],
  },
  {
    id: "databases",
    name: "Databases",
    items: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Redis", icon: DiRedis },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center py-20 px-6
              bg-gray-50 dark:bg-gray-900
              transition-colors duration-300"
    >
      <div className="container mx-auto max-w-5xl">
        <FadeInSection>
          <h2 className="text-3xl font-bold mb-4 text-center text-gray-800 dark:text-white">
            Technical Skills
          </h2>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-12">
            I specialize in building high-performance mobile applications where
            scalability, user experience, and long-term maintainability are
            critical.
          </p>
        </FadeInSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS_DATA.map((cat, i) => {
            return (
              <FadeInSection key={i} delay={i * 0.1}>
                <div
                  className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600
                               rounded-xl p-6 shadow-sm hover:shadow-lg hover:transform hover:-translate-y-1
                               transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center gap-2 min-h-6">
                    {cat.name}
                  </h3>
                  <ul className="space-y-3">
                    {cat.items.map((item, idx) => {
                      const ItemIcon = item.icon;
                      return (
                        <li
                          key={idx}
                          className="flex items-center min-h-7 text-gray-700 dark:text-gray-300 text-sm"
                        >
                          <ItemIcon className="text-blue-500 dark:text-blue-400 w-5 h-5 mr-3 opacity-80" />
                          {item.name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
