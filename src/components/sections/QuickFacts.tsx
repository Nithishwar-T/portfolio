import { profile } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";

const facts = [
  ["Based in", profile.location],
  ["Core stack", "C# · ASP.NET Core · Angular · React · SQL Server"],
  ["Education", "B.Tech IT · St. Joseph's Institute of Technology · 2022–2026"],
  ["Open to", "Entry-level Software Engineer and Full Stack roles"],
];

export function QuickFacts() {
  return (
    <section aria-label="Quick facts" className="mx-auto max-w-6xl px-6">
      <Reveal>
        <dl className="grid border-y border-line sm:grid-cols-2 lg:grid-cols-4">
          {facts.map(([k, v]) => (
            <div key={k} className="border-b border-line p-5 last:border-b-0 sm:border-b-0 lg:border-r lg:last:border-r-0">
              <dt className="font-mono text-xs uppercase tracking-widest text-muted">{k}</dt>
              <dd className="mt-2">{v}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}