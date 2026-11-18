"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 600);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0 })}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 grid size-11 place-items-center rounded-full border border-line bg-surface text-muted transition-colors hover:border-accent hover:text-accent"
    >
      <ArrowUp size={18} />
    </button>
  );
}