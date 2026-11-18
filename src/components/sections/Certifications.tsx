import { ArrowUpRight } from "lucide-react";
import { certifications } from "@/data/certifications";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="07" title="Certifications" />
      <div className="border-t border-line">
        {certifications.map((c) => (
          <Reveal key={c.title} className="grid gap-2 border-b border-line py-6 md:grid-cols-[200px_1fr_auto] md:items-baseline md:gap-6">
            <span className="font-mono text-sm text-muted">{c.date}</span>
            <div>
              <h3 className="text-lg font-medium">{c.title}</h3>
              <p className="text-muted">{c.issuer}</p>
            </div>
            {c.url && (
              <a href={c.url} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-accent hover:underline">
                View certificate <ArrowUpRight size={14} aria-hidden />
              </a>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}