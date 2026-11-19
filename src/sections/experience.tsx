import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import FadeInSection from "../components/fadeInSection";
import SectionHeading from "../components/sectionHeading";
import SpotlightCard from "../components/spotlightCard";

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
  const listRef = useRef<HTMLOListElement>(null);
  // The timeline line "draws" itself as you scroll through the section.
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 75%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="experience" className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Experience" title="Where I’ve shipped." />

        <ol ref={listRef} className="relative space-y-6 pl-8 sm:pl-12">
          <span aria-hidden className="absolute bottom-2 left-[7px] top-2 w-px bg-line sm:left-[11px]" />
          <motion.span
            aria-hidden
            style={{ scaleY }}
            className="bg-gradient absolute bottom-2 left-[7px] top-2 w-px origin-top sm:left-[11px]"
          />

          {EXPERIENCE_DATA.map((exp, i) => {
            const current = exp.period.includes("Present");
            return (
              <li key={exp.id} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-8 top-8 grid size-[15px] place-items-center sm:-left-12 sm:size-[23px]"
                >
                  <span className="bg-gradient size-full rounded-full p-[3px]">
                    <span className="block size-full rounded-full bg-bg" />
                  </span>
                  {current && (
                    <span className="bg-gradient absolute inset-0 animate-ping rounded-full opacity-40" />
                  )}
                </span>

                <FadeInSection delay={i * 0.05}>
                  <SpotlightCard>
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                      <div>
                        <h3 className="font-display text-lg font-semibold text-fg sm:text-xl">
                          {exp.role}
                        </h3>
                        <p className="text-gradient font-medium">{exp.company}</p>
                      </div>
                      <span className="mt-1 inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
                        {current && <span className="size-1.5 rounded-full bg-emerald-400" />}
                        {exp.period}
                      </span>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                      {exp.description}
                    </p>
                  </SpotlightCard>
                </FadeInSection>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
