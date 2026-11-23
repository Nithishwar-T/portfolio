import { ArrowUpRight, Star } from "lucide-react";
import { getGithubData } from "@/lib/github";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export async function GithubActivity() {
  const data = await getGithubData();
  if (!data || data.repos.length === 0) return null; // hides itself if GitHub can't be reached

  return (
    <section id="github" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="08" title="On GitHub" />

      <Reveal className="mb-8 flex flex-wrap gap-x-10 gap-y-3">
        <p>
          <span className="font-mono text-2xl text-accent">{data.total}</span>
          <span className="ml-2 text-muted">public repositories</span>
        </p>
        {data.languages.length > 0 && (
          <p className="text-muted">
            <span className="font-mono text-xs uppercase tracking-widest">Main languages</span>
            <span className="ml-3 text-fg">
              {data.languages.map((l) => `${l.name} (${l.count})`).join(" · ")}
            </span>
          </p>
        )}
      </Reveal>

      <div className="border-t border-line">
        {data.repos.map((r) => (
          <Reveal key={r.name}>
            <a
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-2 border-b border-line py-5 md:grid-cols-[1fr_2fr_7rem_5rem_5rem] md:items-baseline md:gap-6"
            >
              <span className="font-mono text-sm group-hover:text-accent">{r.name}</span>
              <span className="text-muted">{r.description ?? "—"}</span>
              <span className="font-mono text-xs text-muted">{r.language ?? ""}</span>
              <span className="inline-flex items-center gap-1 font-mono text-xs text-muted">
                {r.stars > 0 && (<><Star size={12} aria-hidden /> {r.stars}</>)}
              </span>
              <span className="font-mono text-xs text-muted">
                {new Date(r.pushedAt).toLocaleDateString("en-GB", { month: "short", year: "numeric", timeZone: "UTC" })}
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      <a href={profile.github} target="_blank" rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-1 text-accent hover:underline">
        All repositories <ArrowUpRight size={16} aria-hidden />
      </a>
      <p className="mt-3 font-mono text-xs text-muted">
        Live data from GitHub, refreshed every few hours. Main languages count each repo&apos;s primary language.
      </p>
    </section>
  );
}