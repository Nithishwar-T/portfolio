import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience, Education } from "@/components/sections/Experience";
import { Publications } from "@/components/sections/Publications";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";
import { QuickFacts } from "@/components/sections/QuickFacts";
import { BeyondCode } from "@/components/sections/BeyondCode";
import { GithubActivity } from "@/components/sections/GithubActivity";
import { ProblemSolving } from "@/components/sections/ProblemSolving";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <QuickFacts />
      <About />
      <Skills />
      <Projects />
      <ProblemSolving />
      <Experience />
      <Education />
      <Publications />
      <Certifications />
       <BeyondCode />
      <GithubActivity />
      <Contact />
    </main>
  );
}