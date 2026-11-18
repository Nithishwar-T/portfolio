import { cacheLife } from "next/cache";
import { profile } from "@/data/profile";

export type Repo = { name: string; url: string; description: string | null; language: string | null; pushedAt: string };

export async function getRecentRepos(): Promise<Repo[] | null> {
  "use cache";
  cacheLife("hours");
  const username = new URL(profile.github).pathname.split("/").filter(Boolean)[0];
  try {
    const res = await fetch(`https://api.github.com/users/${username}/repos?sort=pushed&per_page=100`, {
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!res.ok) return null;
    const data = (await res.json()) as Array<{
      name: string; html_url: string; description: string | null;
      language: string | null; pushed_at: string; fork: boolean;
    }>;
    return data.filter((r) => !r.fork).slice(0, 6).map((r) => ({
      name: r.name, url: r.html_url, description: r.description,
      language: r.language, pushedAt: r.pushed_at,
    }));
  } catch {
    return null;
  }
}