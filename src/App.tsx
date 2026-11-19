import { MotionConfig } from "framer-motion";
import { useEffect } from "react";
import Background from "./components/background";
import Navbar from "./components/navBar";
import ScrollProgress from "./components/scrollProgress";
import { startSmoothScroll } from "./components/smoothScroll";
import About from "./sections/about";
// import Apps from "./sections/apps";
import Education from "./sections/education";
import Experience from "./sections/experience";
import Footer from "./sections/footer";
import Hero from "./sections/hero";
import Projects from "./sections/projects";
import Skills from "./sections/skills";

export default function App() {
  useEffect(() => startSmoothScroll(), []);

  return (
    // reducedMotion="user" turns off movement for visitors who ask their OS for less motion
    <MotionConfig reducedMotion="user">
      <Background />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        {/* <Apps /> */}
      </main>
      <Footer />
    </MotionConfig>
  );
}
