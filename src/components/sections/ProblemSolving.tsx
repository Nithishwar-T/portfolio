import { problems } from "@/data/problems";
import { isVisible } from "@/lib/samples";
import { Reveal } from "@/components/ui/Reveal";

export function ProblemSolving() {
  const items = problems.filter(isVisible);
  if (items.length === 0) return null; // hidden until you have real entries

  return (
    <section id="problems" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal className="mb-12 border-b border-line pb-4">
        <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">Problems I&apos;ve solved</h2>
      </Reveal>

      <div>
        {items.map((p) => (
          <Reveal key={p.slug} className="grid gap-4 border-b border-line py-8 md:grid-cols-[200px_1fr] md:gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-muted">{p.project}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <li key={t} className="rounded-full border border-line px-2.5 py-0.5 font-mono text-xs text-muted">{t}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium leading-snug sm:text-2xl">{p.title}</h3>
              <dl className="mt-5 max-w-3xl space-y-4">
                {([["Problem", p.problem], ["Approach", p.approach], ["Result", p.result]] as const).map(([k, v]) => (
                  <div key={k}>
                    <dt className="font-mono text-xs uppercase tracking-widest text-accent">{k}</dt>
                    <dd className="mt-1 leading-relaxed text-muted">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}