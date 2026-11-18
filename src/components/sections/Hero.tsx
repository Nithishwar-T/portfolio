import { ArrowDownRight, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { profile } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";
import { LocalTime } from "@/components/ui/LocalTime";

const btn =
  "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors";

export function Hero() {
  return (
    <section id="home" className="mx-auto flex min-h-screen max-w-6xl flex-col justify-between px-6 pb-10 pt-28">
      <Reveal className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4">
        <span className="inline-flex items-center gap-2 font-mono text-xs text-muted">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex size-2 rounded-full bg-accent" />
          </span>
          {profile.availability}
        </span>
        <LocalTime />
      </Reveal>

      <div className="py-16">
        <Reveal delay={0.05}>
          <h1 className="text-[clamp(3rem,11vw,9rem)] font-medium leading-[0.95] tracking-tighter">
            Nithishwar <span className="font-serif font-normal italic text-accent">T</span>
          </h1>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 font-mono text-sm uppercase tracking-widest text-muted">
            {profile.title} · C# · Angular · React · SQL
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="mt-8 max-w-2xl font-serif text-3xl italic leading-snug sm:text-4xl">
            Building web applications from the database to the interface.
          </p>
          <p className="mt-6 max-w-xl text-muted">
            Full Stack Developer with internship experience shipping enterprise modules using Angular,
            ASP.NET Core and SQL Server at Kanini Software Solutions, {profile.location}.
          </p>
        </Reveal>
        <Reveal delay={0.35} className="mt-10 flex flex-wrap gap-3">
          <a href="#projects" className={`${btn} bg-accent text-bg hover:opacity-90`}>
            View Projects <ArrowDownRight size={16} />
          </a>
          <a href={profile.resumePath} download className={`${btn} border border-line hover:border-accent hover:text-accent`}>
            Download Resume <Download size={16} />
          </a>
          <a href="#contact" className={`${btn} text-muted hover:text-fg`}>
            Contact Me <Mail size={16} />
          </a>
        </Reveal>
      </div>

      <Reveal delay={0.45} className="flex items-center justify-between border-t border-line pt-4">
        <div className="flex gap-3">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"
            className="text-muted transition-colors hover:text-accent"><FaGithub size={20} /></a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
            className="text-muted transition-colors hover:text-accent"><FaLinkedinIn size={20} /></a>
        </div>
        <span className="font-mono text-xs text-muted">Scroll ↓</span>
      </Reveal>
    </section>
  );
}