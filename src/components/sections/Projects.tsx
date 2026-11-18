import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="03" title="Projects" />
      <ul className="border-t border-line">
        {projects.map((p, i) => (
          <li key={p.slug}>
            <Reveal>
              <Link
                href={`/projects/${p.slug}`}
                className="group grid gap-3 border-b border-line py-8 md:grid-cols-[3rem_1.3fr_1fr_6rem_1.5rem] md:items-baseline md:gap-6"
              >
                <span className="font-mono text-sm text-muted">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-3xl font-medium tracking-tight transition-all group-hover:translate-x-2 group-hover:text-accent sm:text-4xl">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-muted">{p.subtitle}</p>
                </div>
                <p className="font-mono text-xs leading-relaxed text-muted">{p.stack.join(" · ")}</p>
                <span className="font-mono text-sm text-muted">{p.date}</span>
                <ArrowUpRight aria-hidden size={20} className="hidden text-muted transition-colors group-hover:text-accent md:block" />
              </Link>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}