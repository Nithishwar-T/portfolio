import { cacheLife } from "next/cache";
import { profile } from "@/data/profile";

export type Repo = {
  name: string;
  url: string;
  description: string | null;
  language: string | null;
  stars: number;
  pushedAt: string;
};

export type GithubData = {
  total: number;
  repos: Repo[];
  languages: { name: string; count: number }[];
};

export async function getGithubData(): Promise<GithubData | null> {
  "use cache";
  cacheLife("hours");
  const username = new URL(profile.github).pathname.split("/").filter(Boolean)[0];
  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos?sort=pushed&per_page=100`, {
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as Array<{
      name: string;
      html_url: string;
      description: string | null;
      language: string | null;
      stargazers_count: number;
      pushed_at: string;
      fork: boolean;
    }>;

    const own = data.filter((r) => !r.fork);

    const counts = new Map<string, number>();
    for (const r of own) if (r.language) counts.set(r.language, (counts.get(r.language) ?? 0) + 1);
    const languages = [...counts.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([name, count]) => ({ name, count }));

    return {
      total: data.length,
      languages,
      repos: own.slice(0, 6).map((r) => ({
        name: r.name,
        url: r.html_url,
        description: r.description,
        language: r.language,
        stars: r.stargazers_count,
        pushedAt: r.pushed_at,
      })),
    };
  } catch {
    return null;
  }
}