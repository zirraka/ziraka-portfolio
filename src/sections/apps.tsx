import FadeInSection from "../components/fadeInSection";
import { motion } from "framer-motion";

const APPS_DATA = [
  {
    id: "app-1",
    name: "ExifLab",
    description:
      "Remove EXIF, GPS & hidden metadata from photos before sharing. Protect your privacy in one tap.",
    url: "https://exiflab.zirraka.com/",
    urlLabel: "View App →",
  },
  {
    id: "app-1",
    name: "LensPalette",
    description:
      "Point your camera at anything — get the exact color instantly. A tool for designers, decorators, and developers who need to identify real-world colors. Uses the device camera with live pixel sampling to extract color values in multiple formats. All processing is on-device with no network calls.",
    urlLabel: "Comming soon",
  },
];

const Apps = () => {
  return (
    <section
      id="apps"
      className="py-16 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto max-w-5xl">
        <FadeInSection>
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white">
            Apps
          </h2>
        </FadeInSection>
        <div className="grid md:grid-cols-2 gap-8 justify-items-center">
          {APPS_DATA.map((app, i) => (
            <FadeInSection key={app.id} delay={i * 0.1}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md
                          border border-gray-200 dark:border-gray-600
                          hover:shadow-lg hover:transform hover:-translate-y-1
                          transition-all duration-300 flex flex-col h-full"
              >
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  {app.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">
                  {app.description}
                </p>
                <a
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-blue-600 dark:text-blue-400 hover:underline mt-auto"
                >
                  {app.urlLabel}
                </a>
              </motion.div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Apps;
