"use client";
import { useState } from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Node = { label: string; detail: string };

export function ArchitectureExplorer({ nodes }: { nodes: Node[] }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <ol className="flex flex-col items-stretch gap-2 md:flex-row md:items-center">
        {nodes.map((n, i) => (
          <li key={n.label} className="flex flex-col items-center gap-2 md:flex-1 md:flex-row">
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={i === active}
              className={cn(
                "w-full border px-4 py-3 text-left text-sm font-medium transition-colors md:text-center",
                i === active ? "border-accent text-accent" : "border-line text-fg hover:border-muted"
              )}
            >
              {n.label}
            </button>
            {i < nodes.length - 1 && (
              <>
                <ArrowDown aria-hidden size={16} className="text-muted md:hidden" />
                <ArrowRight aria-hidden size={16} className="hidden shrink-0 text-muted md:block" />
              </>
            )}
          </li>
        ))}
      </ol>
      <p aria-live="polite" className="mt-6 max-w-3xl leading-relaxed text-muted">
        <span className="text-fg">{nodes[active].label}: </span>
        {nodes[active].detail}
      </p>
    </div>
  );
}