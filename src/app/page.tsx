import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience, Education } from "@/components/sections/Experience";
import { Publications } from "@/components/sections/Publications";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Publications />
      <Certifications />
      <Contact />
    </main>
  );
}