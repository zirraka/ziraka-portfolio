import FadeInSection from "../components/fadeInSection";

const ABOUT_ME = [
  "I'm a Senior React Native Developer specializing in high-performance fintech and crypto mobile applications. I build scalable systems that handle complex financial flows while keeping the user experience fast and intuitive.",
  "I focus on mobile architecture, TypeScript, and React Native, with strong experience in state management, CI/CD pipelines, and performance optimization. I enjoy turning complex backend systems into clean, user-friendly mobile interfaces.",
  "Over the years, I’ve grown from a React Native developer into a senior engineer by taking ownership of architecture decisions, improving app performance, and shipping features that directly impact user activation and retention.",
  "I’ve worked extensively in fintech and Web3 environments, including crypto wallets, payment systems, blockchain integrations, and secure transaction flows using technologies like Ethereum, Web3, and smart contracts.",
  "I collaborate closely with product managers, designers, and backend engineers to deliver production-ready features, and I also contribute to mentoring developers and improving engineering standards within teams.",
  "Outside of work, I'm interested in system design, scalable mobile architectures, and building products that improve financial accessibility for underbanked users.",
];

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen py-20 px-6
                transition-colors duration-300 flex items-center
              bg-white dark:bg-gray-800"
    >
      <div className="container mx-auto max-w-4xl text-center">
        <FadeInSection>
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">
            About me
          </h2>
        </FadeInSection>
        <FadeInSection delay={0.2}>
          <div className="text-lg text-gray-700 dark:text-gray-300 mb-8 space-y-4">
            {ABOUT_ME.map((paragraph, i) => (
              <p key={i} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
};

export default About;
