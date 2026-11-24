
"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

type Group = "Go to" | "Projects" | "Links" | "Actions";
type Item = {
  id: string;
  label: string;
  hint: string;
  group: Group;
  run: () => void;
};

export function CommandPalette() {
  const router = useRouter();
  const ref = useRef<HTMLDialogElement>(null);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);

  const goTo = (hash: string) => () => router.push(`/#${hash}`);

  const external = (url: string) => () => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const toggleTheme = () => {
    const next =
      document.documentElement.getAttribute("data-theme") === "light"
        ? "dark"
        : "light";

    document.documentElement.setAttribute("data-theme", next);

    try {
      localStorage.setItem("theme", next);
    } catch {
      // Theme still works without localStorage.
    }

    window.dispatchEvent(new Event("theme-change"));
  };

  const items: Item[] = [
    { id: "home", label: "Home", hint: "Top of page", group: "Go to", run: goTo("home") },
    { id: "about", label: "About", hint: "Who I am", group: "Go to", run: goTo("about") },
    { id: "skills", label: "Skills", hint: "Tech stack", group: "Go to", run: goTo("skills") },
    { id: "projects", label: "Projects", hint: "All projects", group: "Go to", run: goTo("projects") },
    { id: "experience", label: "Experience", hint: "Kanini", group: "Go to", run: goTo("experience") },
    { id: "education", label: "Education", hint: "B.Tech IT", group: "Go to", run: goTo("education") },
    { id: "publications", label: "Publications", hint: "Research papers", group: "Go to", run: goTo("publications") },
    { id: "certifications", label: "Certifications", hint: "Certificates", group: "Go to", run: goTo("certifications") },
    { id: "beyond", label: "Beyond Code", hint: "Events & community", group: "Go to", run: goTo("#beyond-code") },
    { id: "contact", label: "Contact", hint: "Send a message", group: "Go to", run: goTo("contact") },

    ...projects.map((p) => ({
      id: `project-${p.slug}`,
      label: p.title,
      hint: p.date,
      group: "Projects" as const,
      run: () => router.push(`/projects/${p.slug}`),
    })),

    { id: "resume", label: "Open resume", hint: "PDF, new tab", group: "Links", run: external(profile.resumePath) },
    { id: "github", label: "GitHub", hint: "Profile", group: "Links", run: external(profile.github) },
    { id: "linkedin", label: "LinkedIn", hint: "Profile", group: "Links", run: external(profile.linkedin) },
    { id: "email", label: "Send email", hint: profile.email, group: "Links", run: () => window.location.assign(`mailto:${profile.email}`) },
    { id: "theme", label: "Switch theme", hint: "Dark / light", group: "Actions", run: toggleTheme },
  ];

  const q = query.trim().toLowerCase();
  const results = q
    ? items.filter((i) => `${i.label} ${i.hint}`.toLowerCase().includes(q))
    : items;

  const active = Math.min(index, Math.max(results.length - 1, 0));

  useEffect(() => {
    const show = () => {
      const d = ref.current;
      if (!d || d.open) return;

      setQuery("");
      setIndex(0);
      d.showModal();
      document.body.style.overflow = "hidden";
    };

    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();

        const d = ref.current;

        if (d?.open) d.close();
        else show();
      }
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("open-palette", show);

    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-palette", show);
    };
  }, []);

  const choose = (item: Item | undefined) => {
    if (!item) return;

    ref.current?.close();
    item.run();
  };

  return (
    <dialog
      ref={ref}
      aria-label="Command menu"
      onClose={() => {
        document.body.style.overflow = "";
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) ref.current?.close();
      }}
      className="mx-auto mt-[12vh] w-[min(94vw,560px)] overflow-hidden border border-line bg-bg p-0 text-fg backdrop:bg-black/70 backdrop:backdrop-blur-sm"
    >
      <div className="border-b border-line p-3">
        <input
          role="combobox"
          aria-expanded="true"
          aria-controls="cmd-list"
          aria-activedescendant={results.length ? `cmd-${active}` : undefined}
          aria-label="Search sections, projects and links"
          placeholder="Search or jump to…"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIndex(0);
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown" || e.key === "ArrowUp") {
              e.preventDefault();

              if (results.length === 0) return;

              const step = e.key === "ArrowDown" ? 1 : -1;
              const next = (active + step + results.length) % results.length;

              setIndex(next);

              requestAnimationFrame(() =>
                document
                  .getElementById(`cmd-${next}`)
                  ?.scrollIntoView({ block: "nearest" })
              );
            } else if (e.key === "Enter") {
              e.preventDefault();
              choose(results[active]);
            }
          }}
          className="w-full bg-transparent px-2 py-2 text-lg outline-none placeholder:text-muted/60"
        />
      </div>

      <div id="cmd-list" role="listbox" className="max-h-[50vh] overflow-auto p-2">
        {results.length === 0 && (
          <p className="px-3 py-6 text-center text-sm text-muted">
            No results
          </p>
        )}

        {results.map((item, i) => (
          <div key={item.id}>
            {(i === 0 || results[i - 1].group !== item.group) && (
              <p
                role="presentation"
                className="px-3 pb-1 pt-3 font-mono text-xs uppercase tracking-widest text-muted"
              >
                {item.group}
              </p>
            )}

            <button
              id={`cmd-${i}`}
              role="option"
              aria-selected={i === active}
              type="button"
              tabIndex={-1}
              onClick={() => choose(item)}
              onMouseMove={() => setIndex(i)}
              className={cn(
                "flex w-full items-center justify-between gap-4 px-3 py-2.5 text-left text-sm",
                i === active ? "bg-surface text-fg" : "text-muted"
              )}
            >
              <span>{item.label}</span>
              <span className="font-mono text-xs text-muted">
                {item.hint}
              </span>
            </button>
          </div>
        ))}
      </div>

      <p className="border-t border-line px-4 py-2 font-mono text-xs text-muted">
        ↑↓ move · Enter select · Esc close
      </p>
    </dialog>
  );
}
