import { FiBookOpen } from "react-icons/fi";
import FadeInSection from "../components/fadeInSection";
import SectionHeading from "../components/sectionHeading";
import SpotlightCard from "../components/spotlightCard";

const EDUCATION_DATA = [
  {
    id: "bachelor-engineering-sdsu",
    degree: "Bachelor of Computer Engineering",
    school: "San Diego State University",
    year: "Graduated",
  },
  {
    id: "bachelor-engineering-tsu",
    degree: "Bachelor of Computer Engineering",
    school: "Tbilisi State University",
    year: "Graduated",
  },
];

const Education = () => (
  <section id="education" className="px-5 py-24 sm:px-8 sm:py-32">
    <div className="mx-auto max-w-6xl">
      <SectionHeading eyebrow="Education" title="Foundations." />

      <div className="grid gap-4 md:grid-cols-2">
        {EDUCATION_DATA.map((edu, i) => (
          <FadeInSection key={edu.id} delay={i * 0.08}>
            <SpotlightCard>
              <div className="flex items-start gap-5">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl border border-line bg-surface text-xl text-accent">
                  <FiBookOpen />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-fg sm:text-xl">
                    {edu.school}
                  </h3>
                  <p className="mt-1 text-muted">{edu.degree}</p>
                  <p className="mt-3 font-mono text-xs uppercase tracking-widest text-muted">
                    {edu.year}
                  </p>
                </div>
              </div>
            </SpotlightCard>
          </FadeInSection>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
