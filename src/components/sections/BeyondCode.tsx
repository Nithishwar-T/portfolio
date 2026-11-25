import { ArrowUpRight } from "lucide-react";
import { events } from "@/data/events";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function BeyondCode() {
  if (events.length === 0) return null;

  return (
    <section id="beyond-code" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="08" title="Beyond Code" />
      <p className="mb-10 max-w-2xl text-muted">
        Workshops, meetups and community events where I learn and collaborate outside my projects.
      </p>

      <div className="border-t border-line">
        {events.map((e) => (
          <Reveal key={e.slug} className="grid gap-2 border-b border-line py-6 md:grid-cols-[200px_1fr] md:gap-6">
            <div>
              <p className={cn(
                "font-mono text-xs uppercase tracking-widest",
                e.type === "Achievement" ? "text-accent" : "text-muted"
              )}>
                {e.type}
              </p>
              {e.date && <p className="mt-1 font-mono text-sm text-muted">{e.date}</p>}
            </div>

            <details className="group">
              <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <h3 className="text-xl font-medium group-hover:text-accent sm:text-2xl">{e.title}</h3>
                <p className="mt-1 text-muted">{e.org}</p>
                <span className="mt-2 inline-block font-mono text-xs text-muted group-open:hidden">
                  Show details +
                </span>
              </summary>
              <p className="mt-4 max-w-3xl leading-relaxed">{e.summary}</p>
              <ul className="mt-4 max-w-3xl space-y-2 text-muted">
                {e.topics.map((t) => (
                  <li key={t} className="flex gap-3"><span className="text-accent">—</span><span>{t}</span></li>
                ))}
              </ul>
                            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                {e.orgUrl && (
                  <a href={e.orgUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-accent hover:underline">
                    Visit community page <ArrowUpRight size={14} aria-hidden />
                  </a>
                )}
                {e.proof && (
                  <a href={e.proof.href} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-accent hover:underline">
                    {e.proof.label} <ArrowUpRight size={14} aria-hidden />
                  </a>
                )}
              </div>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}