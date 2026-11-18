import { experience, education } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="04" title="Experience" />
      <ol className="border-l border-line">
        {experience.map((e) => (
          <li key={e.company} className="relative pb-6 pl-8 md:pl-12">
            <span className="absolute -left-[5px] top-2 size-2.5 rounded-full bg-accent" />
            <Reveal>
              <p className="font-mono text-sm text-muted">{e.period} · {e.location}</p>
              <h3 className="mt-2 text-2xl font-medium tracking-tight sm:text-3xl">{e.role}</h3>
              <a href={e.url} target="_blank" rel="noopener noreferrer" className="mt-1 inline-block text-accent hover:underline">
                {e.company}
              </a>
              <ul className="mt-6 max-w-3xl space-y-3 text-muted">
                {e.points.map((p) => (
                  <li key={p} className="flex gap-3"><span className="text-accent">—</span><span>{p}</span></li>
                ))}
              </ul>
              <ul className="mt-6 flex flex-wrap gap-2">
                {e.tech.map((t) => (
                  <li key={t} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">{t}</li>
                ))}
              </ul>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="05" title="Education" />
      <div className="border-t border-line">
        {education.map((e) => (
          <Reveal key={e.school} className="grid gap-2 border-b border-line py-6 md:grid-cols-[200px_1fr_auto] md:items-baseline md:gap-6">
            <span className="font-mono text-sm text-muted">{e.period}</span>
            <div>
              <h3 className="text-xl font-medium">{e.school}</h3>
              <p className="text-muted">{e.degree} · {e.location}</p>
            </div>
            <span className="font-mono text-sm text-accent">{e.score}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}