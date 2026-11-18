import { skillGroups } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="02" title="Skills" />
      <div className="border-t border-line">
        {skillGroups.map((g) => (
          <Reveal key={g.title} className="grid gap-4 border-b border-line py-6 md:grid-cols-[200px_1fr]">
            <h3 className="font-mono text-sm uppercase tracking-widest text-muted">{g.title}</h3>
            <ul className="flex flex-wrap gap-x-7 gap-y-3">
              {g.items.map(({ name, icon: Icon }) => (
                <li key={name} className="group flex items-center gap-2 text-lg transition-colors hover:text-accent">
                  {Icon && <Icon aria-hidden size={18} className="text-muted transition-colors group-hover:text-accent" />}
                  {name}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}