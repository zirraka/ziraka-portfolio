import FadeInSection from "../components/fadeInSection";

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

const Education = () => {
  return (
    <section
      id="education"
      className="min-h-screen flex items-center py-20 px-6 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
          Education
        </h2>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 w-0.5 h-full bg-indigo-200 dark:bg-indigo-900 transform -translate-x-0.5 hidden md:block"></div>
          {EDUCATION_DATA.map((edu, i) => (
            <FadeInSection key={i} delay={i * 0.1}>
              <div
                className={`flex flex-col md:flex-row ${i % 2 === 0 ? "md:flex-row-reverse" : ""} mb-8`}
              >
                <div
                  className={`w-full md:w-1/2 ${i % 2 === 0 ? "md:pr-8 md:pl-16" : "md:pl-8 md:pr-16"}`}
                >
                  <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">
                      {edu.school}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {edu.year}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-4 h-4 bg-indigo-600 rounded-full border-4 border-white dark:border-gray-800 shadow-md z-10"></div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
