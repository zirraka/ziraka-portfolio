import FadeInSection from "./fadeInSection";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

const SectionHeading = ({ eyebrow, title, subtitle }: Props) => (
  <FadeInSection className="mb-10 sm:mb-14">
    <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-accent">
      {eyebrow}
    </p>
    <h2 className="font-display text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
        {subtitle}
      </p>
    )}
  </FadeInSection>
);

export default SectionHeading;
