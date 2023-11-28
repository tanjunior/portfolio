import { cookies } from "next/headers";
import About from "@/portfolio/about";
import Contact from "@/portfolio/contact";
import Experience from "@/portfolio/experience";
import Intro from "@/portfolio/intro";
import Projects from "@/portfolio/projects";
import SectionDivider from "@/portfolio/section-divider";
import Skills from "@/portfolio/skills";

import Stack from "~/components/portfolio/stack";
import { TRPCReactProvider } from "~/contexts/trpc-context";

export const runtime = "edge";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Stack />
      <Projects />
      <Skills />
      <Experience />
      <TRPCReactProvider cookies={cookies().toString()}>
        <Contact />
      </TRPCReactProvider>
    </main>
  );
}
