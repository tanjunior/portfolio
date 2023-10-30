import About from "@/portfolio/about";
import Contact from "@/portfolio/contact";
import Experience from "@/portfolio/experience";
import Intro from "@/portfolio/intro";
import Projects from "@/portfolio/projects";
import SectionDivider from "@/portfolio/section-divider";
import Skills from "@/portfolio/skills";

export const runtime = "edge";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
