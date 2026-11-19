import { FiCompass, FiTrendingUp, FiUsers } from "react-icons/fi";
import { SiEthereum } from "react-icons/si";
import FadeInSection from "../components/fadeInSection";
import SectionHeading from "../components/sectionHeading";
import SpotlightCard from "../components/spotlightCard";

const INTRO = [
  "I'm a Senior React Native Developer specializing in high-performance fintech and crypto mobile applications. I build scalable systems that handle complex financial flows while keeping the user experience fast and intuitive.",
  "I focus on mobile architecture, TypeScript, and React Native, with strong experience in state management, CI/CD pipelines, and performance optimization. I enjoy turning complex backend systems into clean, user-friendly mobile interfaces.",
];

const TILES = [
  {
    icon: SiEthereum,
    title: "Fintech & Web3",
    text: "I’ve worked extensively in fintech and Web3 environments, including crypto wallets, payment systems, blockchain integrations, and secure transaction flows using technologies like Ethereum, Web3, and smart contracts.",
    span: "md:col-span-2",
  },
  {
    icon: FiTrendingUp,
    title: "Growth",
    text: "Over the years, I’ve grown from a React Native developer into a senior engineer by taking ownership of architecture decisions, improving app performance, and shipping features that directly impact user activation and retention.",
    span: "md:col-span-2",
  },
  {
    icon: FiUsers,
    title: "Collaboration",
    text: "I collaborate closely with product managers, designers, and backend engineers to deliver production-ready features, and I also contribute to mentoring developers and improving engineering standards within teams.",
    span: "md:col-span-3",
  },
  {
    icon: FiCompass,
    title: "Beyond work",
    text: "Outside of work, I'm interested in system design, scalable mobile architectures, and building products that improve financial accessibility for underbanked users.",
    span: "md:col-span-3",
  },
];

const STATS = [
  { value: `${new Date().getFullYear() - 2021}+`, label: "years shipping mobile" },
  { value: "4", label: "product teams" },
  { value: "2", label: "platforms: iOS & Android" },
];

const About = () => (
  <section id="about" className="px-5 py-24 sm:px-8 sm:py-32">
    <div className="mx-auto max-w-6xl">
      <SectionHeading eyebrow="About" title="Engineering money-moving mobile apps." />

      <div className="grid gap-4 md:grid-cols-6">
        <FadeInSection className="md:col-span-4 md:row-span-2">
          <SpotlightCard>
            <div className="flex h-full flex-col justify-between gap-8">
              <div className="space-y-4 text-base leading-relaxed text-muted sm:text-lg">
                {INTRO.map((p) => (
                  <p key={p.slice(0, 20)}>{p}</p>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-3 border-t border-line pt-6">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <p className="font-display text-xl font-semibold text-fg sm:text-3xl">
                      {s.value}
                    </p>
                    <p className="mt-1 text-xs text-muted sm:text-sm">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </SpotlightCard>
        </FadeInSection>

        {TILES.map(({ icon: Icon, title, text, span }, i) => (
          <FadeInSection key={title} delay={0.08 * (i + 1)} className={span}>
            <SpotlightCard>
              <div className="mb-4 flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl border border-line bg-surface text-lg text-accent">
                  <Icon />
                </span>
                <h3 className="font-display text-lg font-semibold text-fg">{title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-muted">{text}</p>
            </SpotlightCard>
          </FadeInSection>
        ))}
      </div>
    </div>
  </section>
);

export default About;
