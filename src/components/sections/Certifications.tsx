import { Download } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "./ContactForm";

const link = "hover:text-accent";

export function Contact() {
  const rows: [string, React.ReactNode][] = [
    ["Email", <a key="e" href={`mailto:${profile.email}`} className={link}>{profile.email}</a>],
    ["LinkedIn", <a key="l" href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={link}>nithishwar-t</a>],
    ["GitHub", <a key="g" href={profile.github} target="_blank" rel="noopener noreferrer" className={link}>Nithishwar-T</a>],
    ["Location", profile.location],
  ];
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="07" title="Contact" />
      <div className="grid gap-16 md:grid-cols-2">
        <Reveal>
          <p className="font-serif text-5xl italic leading-tight sm:text-6xl">
            Let&apos;s build <span className="text-accent">something</span>.
          </p>
          <p className="mt-6 max-w-md text-muted">
            {profile.availability}. Email or the form is the quickest way to reach me.
          </p>
          <dl className="mt-10 border-t border-line">
            {rows.map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4 border-b border-line py-3">
                <dt className="font-mono text-xs uppercase tracking-widest text-muted">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
          <a href={profile.resumePath} download
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent">
            Download Resume <Download size={16} aria-hidden />
          </a>
        </Reveal>
        <Reveal delay={0.1}><ContactForm /></Reveal>
      </div>
    </section>
  );
}

