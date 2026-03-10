import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import {
  aboutNote,
  aboutText,
  aboutWorkStyle,
  experience,
  profile,
  projects,
  sectionIds,
  skills,
} from "./data/portfolioData";

export default function App() {
  return (
    <div className="site-shell">
      <div className="bg-orb orb-one" aria-hidden="true" />
      <div className="bg-orb orb-two" aria-hidden="true" />

      <Navbar profileName={profile.name} sectionIds={sectionIds} />

      <main>
        <Hero profile={profile} />
        <About
          aboutText={aboutText}
          aboutNote={aboutNote}
          aboutWorkStyle={aboutWorkStyle}
        />
        <Skills skills={skills} />
        <Projects projects={projects} />
        <Experience experience={experience} />
        <Contact profile={profile} />
      </main>

      <Footer name={profile.name} social={profile.social} />
    </div>
  );
}
