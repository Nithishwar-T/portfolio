"use client";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/lib/useActiveSection";
import { Menu, Search, X } from "lucide-react";
const links = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Publications", href: "/#publications" },
  { label: "Contact", href: "/#contact" },
];
const sectionIds = links.map((l) => l.href.replace("/#", ""));

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors",
        (scrolled || open) && "border-b border-line bg-bg/85 backdrop-blur-md"
      )}
    >
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#home" className="font-mono text-sm tracking-tight">
          {profile.name}<span className="text-accent">_</span>
        </a>

                <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => {
            const isActive = active === l.href.replace("/#", "");
            return (
              <li key={l.href}>
                <a
                  href={l.href}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "text-sm transition-colors hover:text-fg",
                    isActive ? "text-fg" : "text-muted"
                  )}
                >
                  {l.label}
                  <span
                    className={cn(
                      "mt-0.5 block h-px bg-accent transition-all",
                      isActive ? "w-full" : "w-0"
                    )}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
                    <button
            type="button"
            onClick={() => window.dispatchEvent(new Event("open-palette"))}
            aria-label="Open command menu"
            title="Search (Ctrl+K)"
            className="grid size-9 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <Search size={16} />
          </button>
          <ThemeToggle />
          <button
            className="grid size-9 place-items-center rounded-full border border-line md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="fixed inset-x-0 top-16 bottom-0 bg-bg px-6 py-10 md:hidden">
          <ul className="flex flex-col">
            {links.map((l, i) => (
              <li key={l.href} className="border-b border-line">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 py-5 text-3xl font-medium tracking-tight"
                >
                  <span className="font-mono text-xs text-accent">0{i + 1}</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}