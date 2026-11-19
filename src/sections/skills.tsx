import { DiRedis } from "react-icons/di";
import { FaApple, FaGooglePay, FaNodeJs, FaReact } from "react-icons/fa";
import {
  FiCpu,
  FiDatabase,
  FiGitBranch,
  FiLayers,
  FiServer,
  FiShield,
  FiSmartphone,
  FiZap,
} from "react-icons/fi";
import {
  SiEthereum,
  SiExpress,
  SiFastlane,
  SiGithub,
  SiGithubactions,
  SiJavascript,
  SiMongodb,
  SiRedux,
  SiTypescript,
  SiWeb3Dotjs,
} from "react-icons/si";
import type { IconType } from "react-icons";
import FadeInSection from "../components/fadeInSection";
import SectionHeading from "../components/sectionHeading";
import SpotlightCard from "../components/spotlightCard";

type Skill = { name: string; icon: IconType };

const SKILLS_DATA: {
  id: string;
  name: string;
  icon: IconType;
  span: string;
  items: Skill[];
}[] = [
  {
    id: "mobile",
    name: "Mobile Development",
    icon: FiSmartphone,
    span: "md:col-span-2",
    items: [
      { name: "React Native", icon: FaReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Native Modules (iOS / Android)", icon: FiCpu },
    ],
  },
  {
    id: "architecture",
    name: "Architecture & State",
    icon: FiLayers,
    span: "",
    items: [
      { name: "Redux", icon: SiRedux },
      { name: "Zustand", icon: FaReact },
      { name: "REST APIs", icon: FaNodeJs },
      { name: "Scalable App Architecture", icon: FiLayers },
    ],
  },
  {
    id: "fintech",
    name: "Fintech & Blockchain",
    icon: FiShield,
    span: "",
    items: [
      { name: "Crypto Wallet Systems", icon: FiShield },
      { name: "Web3 / Ethereum", icon: SiEthereum },
      { name: "Secure Transactions", icon: FiShield },
      { name: "Payment Integrations (Apple Pay / Google Pay)", icon: FaApple },
    ],
  },
  {
    id: "devops",
    name: "DevOps & Tooling",
    icon: FiGitBranch,
    span: "md:col-span-2",
    items: [
      { name: "CI/CD (Fastlane)", icon: SiFastlane },
      { name: "Git / GitHub", icon: SiGithub },
      { name: "Build & Release Pipelines", icon: SiGithubactions },
    ],
  },
  {
    id: "backend",
    name: "Backend & APIs",
    icon: FiServer,
    span: "",
    items: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express", icon: SiExpress },
      { name: "REST API Design", icon: FiZap },
    ],
  },
  {
    id: "databases",
    name: "Databases",
    icon: FiDatabase,
    span: "md:col-span-2",
    items: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Redis", icon: DiRedis },
    ],
  },
];

const MARQUEE: Skill[] = [
  { name: "React Native", icon: FaReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Redux", icon: SiRedux },
  { name: "Ethereum", icon: SiEthereum },
  { name: "Web3", icon: SiWeb3Dotjs },
  { name: "Fastlane", icon: SiFastlane },
  { name: "GitHub Actions", icon: SiGithubactions },
  { name: "Node.js", icon: FaNodeJs },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Redis", icon: DiRedis },
  { name: "Apple Pay", icon: FaApple },
  { name: "Google Pay", icon: FaGooglePay },
];

const Marquee = () => (
  <div
    className="relative mb-10 overflow-hidden py-2"
    style={{
      maskImage: "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)",
      WebkitMaskImage: "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)",
    }}
  >
    <div className="flex w-max gap-3" style={{ animation: "marquee 40s linear infinite" }}>
      {[...MARQUEE, ...MARQUEE].map(({ name, icon: Icon }, i) => (
        <span
          key={i}
          aria-hidden={i >= MARQUEE.length}
          className="glass flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm text-fg"
        >
          <Icon className="text-accent" /> {name}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => (
  <section id="skills" className="px-5 py-24 sm:px-8 sm:py-32">
    <div className="mx-auto max-w-6xl">
      <SectionHeading
        eyebrow="Skills"
        title="The toolkit."
        subtitle="I specialize in building high-performance mobile applications where scalability, user experience, and long-term maintainability are critical."
      />

      <FadeInSection>
        <Marquee />
      </FadeInSection>

      <div className="grid gap-4 md:grid-cols-3">
        {SKILLS_DATA.map((cat, i) => {
          const CatIcon = cat.icon;
          return (
            <FadeInSection key={cat.id} delay={i * 0.06} className={cat.span}>
              <SpotlightCard>
                <div className="mb-5 flex items-center justify-between">
                  <h3 className="font-display text-lg font-semibold text-fg">{cat.name}</h3>
                  <CatIcon className="text-xl text-muted transition-colors group-hover:text-accent" />
                </div>
                <ul className="flex flex-wrap gap-2">
                  {cat.items.map(({ name, icon: Icon }) => (
                    <li
                      key={name}
                      className="flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-sm text-fg"
                    >
                      <Icon className="shrink-0 text-accent" />
                      {name}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </FadeInSection>
          );
        })}
      </div>
    </div>
  </section>
);

export default Skills;
