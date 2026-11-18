import { ArrowUpRight } from "lucide-react";
import { getRecentRepos } from "@/lib/github";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export async function GithubActivity() {
  const repos = await getRecentRepos();
  if (!repos || repos.length === 0) return null; // hides itself if GitHub can't be reached

  return (
    <section id="github" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="08" title="On GitHub" />
      <div className="border-t border-line">
        {repos.map((r) => (
          <Reveal key={r.name}>
            <a href={r.url} target="_blank" rel="noopener noreferrer"
              className="group grid gap-2 border-b border-line py-5 md:grid-cols-[1fr_2fr_8rem_6rem] md:items-baseline md:gap-6">
              <span className="font-mono text-sm group-hover:text-accent">{r.name}</span>
              <span className="text-muted">{r.description ?? "—"}</span>
              <span className="font-mono text-xs text-muted">{r.language ?? ""}</span>
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
    </section>
  );
}