import FadeInSection from "../components/fadeInSection";

const EXPERIENCE_DATA = [
  {
    id: "coinmetro-senior",
    role: "Senior React Native Developer",
    company: "Coinmetro",
    period: "Mar 2023 - Present",
    description:
      "Lead mobile development for a crypto trading platform. Responsible for React Native architecture, onboarding flows, wallet systems, and secure financial transactions. Collaborate with product, design, and backend teams in an agile environment.",
  },
  {
    id: "dawraty-migration",
    role: "Senior React Native Developer",
    company: "Dawraty Education Group",
    period: "Nov 2025 - Dec 2025",
    description:
      "Led a full React Native upgrade from 0.71 to 0.83 in a production enterprise app. Handled breaking changes, native iOS/Android build issues, dependency conflicts, and ensured full system stability after migration.",
  },
  {
    id: "aiolane-rn-dev",
    role: "React Native Developer",
    company: "Aiolane",
    period: "Sep 2022 - Mar 2023",
    description:
      "Developed and deployed cross-platform fintech mobile applications using React Native and AWS Amplify. Integrated secure APIs and third-party services while optimizing performance and responsiveness.",
  },
  {
    id: "novelty-web3",
    role: "Platform Developer",
    company: "novelty.today",
    period: "Dec 2020 - Jun 2022",
    description:
      "Built Web3-enabled mobile platforms with React Native and Ethereum smart contracts. Implemented NFT authentication systems, wallet integrations, and blockchain-based transaction flows using WalletConnect.",
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="min-h-screen flex items-center py-20 px-6 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto max-w-4xl">
        <FadeInSection>
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
            Experience
          </h2>
        </FadeInSection>
        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 w-0.5 h-full bg-blue-200 dark:bg-blue-900 transform -translate-x-0.5 hidden md:block"></div>
          {EXPERIENCE_DATA.map((exp, i) => (
            <FadeInSection key={i} delay={i * 0.1}>
              <div
                className={`flex flex-col md:flex-row ${i % 2 === 0 ? "md:flex-row-reverse" : ""} mb-8`}
              >
                <div
                  className={`w-full md:w-1/2 ${i % 2 === 0 ? "md:pr-8 md:pl-16" : "md:pl-8 md:pr-16"}`}
                >
                  <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {exp.company}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {exp.period}
                    </p>
                    <p className="mt-3 text-gray-700 dark:text-gray-300">
                      {exp.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 shadow-md z-10"></div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
