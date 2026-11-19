import FadeInSection from "../components/fadeInSection";
import SectionHeading from "../components/sectionHeading";
import SpotlightCard from "../components/spotlightCard";

const PROJECTS_DATA = [
  {
    id: "coinmetro-mobile-platform",
    title: "Coinmetro Mobile Platform",
    description:
      "Senior React Native developer on a production crypto trading app. Responsible for architecture, onboarding flows, wallet systems, and secure financial transactions at scale.",
    tech: ["React Native", "TypeScript", "Redux / Zustand", "REST APIs", "CI/CD (Fastlane)"],
  },
  {
    id: "crypto-wallet-infrastructure",
    title: "Crypto Wallet & Fiat Bridge System",
    description:
      "Designed and implemented wallet infrastructure enabling fiat-to-crypto flows, secure transactions, and real-time balance synchronization for a fintech ecosystem.",
    tech: ["React Native", "Web3", "Ethereum", "Secure APIs", "Native Modules (iOS/Android)"],
  },
  {
    id: "mobile-ci-cd-engineering",
    title: "Mobile CI/CD & Release Engineering",
    description:
      "Built and maintained CI/CD pipelines for React Native apps, improving deployment reliability and reducing release time through automation and Fastlane workflows.",
    tech: ["Fastlane", "GitHub Actions", "iOS Build System", "Android Gradle", "Automation"],
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

// Bento layout: big tile, small, small, big.
const SPANS = ["md:col-span-3", "md:col-span-2", "md:col-span-2", "md:col-span-3"];

const Projects = () => (
  <section id="projects" className="px-5 py-24 sm:px-8 sm:py-32">
    <div className="mx-auto max-w-6xl">
      <SectionHeading eyebrow="Projects" title="Selected work." />

      <div className="grid gap-4 md:grid-cols-5">
        {PROJECTS_DATA.map((project, i) => (
          <FadeInSection key={project.id} delay={i * 0.08} className={SPANS[i % SPANS.length]}>
            <SpotlightCard className="sm:p-8">
              <div className="flex h-full flex-col">
                <div className="mb-8 flex items-start justify-between gap-4">
                  <span className="text-gradient font-display text-5xl font-semibold leading-none sm:text-6xl">
                    0{i + 1}
                  </span>
                  <span
                    aria-hidden
                    className="mt-2 h-px flex-1 origin-left scale-x-50 bg-line-strong transition-transform duration-500 group-hover:scale-x-100"
                  />
                </div>
                <h3 className="font-display text-xl font-semibold text-fg sm:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted sm:text-base">
                  {project.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted
                                 transition-colors group-hover:border-line-strong group-hover:text-fg"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </SpotlightCard>
          </FadeInSection>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
