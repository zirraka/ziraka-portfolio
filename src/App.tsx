import Navbar from "./components/navBar";
import About from "./sections/about";
import Apps from "./sections/apps";
import Education from "./sections/education";
import Experience from "./sections/experience";
import Footer from "./sections/footer";
import Hero from "./sections/hero";
import Projects from "./sections/projects";
import Skills from "./sections/skills";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Apps />
      <Footer />
    </>
  );
}
