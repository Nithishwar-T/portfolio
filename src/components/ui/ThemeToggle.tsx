
"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";

type Theme = "dark" | "light";

function subscribe(callback: () => void) {
  window.addEventListener("theme-change", callback);

  return () => {
    window.removeEventListener("theme-change", callback);
  };
}

function getSnapshot(): Theme {
  return document.documentElement.dataset.theme === "light"
    ? "light"
    : "dark";
}

function getServerSnapshot(): Theme {
  return "dark";
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const toggle = () => {
    const next: Theme = theme === "light" ? "dark" : "light";

    document.documentElement.dataset.theme = next;

    try {
      localStorage.setItem("theme", next);
    } catch {
      // Theme still works even if localStorage is unavailable.
    }

    window.dispatchEvent(new Event("theme-change"));
  };

  return (
    <button
      onClick={toggle}
      aria-label={
        theme === "light"
          ? "Switch to dark mode"
          : "Switch to light mode"
      }
      className="grid size-9 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
    >
      {theme === "light" ? (
        <Moon size={16} />
      ) : (
        <Sun size={16} />
      )}
    </button>
  );
}
