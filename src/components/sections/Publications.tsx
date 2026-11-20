import { ArrowUpRight } from "lucide-react";
import { publications } from "@/data/publications";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Publications() {
  return (
    <section id="publications" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="06" title="Publications" />
      <div className="border-t border-line">
        {publications.map((p) => (
          <Reveal key={p.title} className="grid gap-2 border-b border-line py-8 md:grid-cols-[200px_1fr] md:gap-6">
            <p className="font-mono text-sm text-muted">{p.date}</p>
            <div>
              <h3 className="max-w-3xl text-xl font-medium leading-snug sm:text-2xl">{p.title}</h3>
              <p className="mt-2 text-muted">{p.authors}</p>
              <p className="mt-1 max-w-3xl font-mono text-xs text-muted">{p.venue}</p>
              {p.summary && <p className="mt-4 max-w-3xl leading-relaxed">{p.summary}</p>}
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                {p.url && (
                  <a href={p.url} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-accent hover:underline">
                    Read paper <ArrowUpRight size={16} aria-hidden />
                  </a>
                )}
                {p.links?.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-accent hover:underline">
                    {l.label} <ArrowUpRight size={16} aria-hidden />
                  </a>
                ))}
              </div>
              {p.abstract && (
                <details className="mt-4 max-w-3xl text-muted">
                  <summary className="cursor-pointer font-mono text-sm hover:text-fg">Abstract</summary>
                  <p className="mt-3 leading-relaxed">{p.abstract}</p>
                </details>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}