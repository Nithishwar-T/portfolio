"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight, Eye, X } from "lucide-react";
import { certifications, type Certification } from "@/data/certifications";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

// Only certificates that have an image can be viewed.
const previewable = certifications.filter((c) => c.image);

function RowContent({ c, action }: { c: Certification; action: React.ReactNode }) {
  return (
    <>
      <span className="font-mono text-sm text-muted">{c.date}</span>
      <span>
        <span className="block text-lg font-medium group-hover:text-accent">{c.title}</span>
        <span className="block text-muted">{c.issuer}</span>
        {c.credentialId && (
          <span className="mt-1 block font-mono text-xs text-muted">ID: {c.credentialId}</span>
        )}
      </span>
      <span className="inline-flex items-center gap-1 text-sm text-accent">{action}</span>
    </>
  );
}

const rowClass =
  "group grid w-full gap-2 border-b border-line py-6 text-left md:grid-cols-[200px_1fr_auto] md:items-baseline md:gap-6";

export function Certifications() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<number | null>(null);

  const current = active !== null ? previewable[active] : null;

  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    if (active !== null && !d.open) {
      d.showModal();
      document.body.style.overflow = "hidden";
    }
    if (active === null && d.open) d.close();
  }, [active]);

  useEffect(() => () => { document.body.style.overflow = ""; }, []);

  const go = (delta: number) =>
    setActive((a) => (a === null ? a : (a + delta + previewable.length) % previewable.length));

  return (
    <section id="certifications" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="07" title="Certifications" />

      <div className="border-t border-line">
        {certifications.map((c) => {
          const idx = previewable.findIndex((p) => p.slug === c.slug);

          if (idx >= 0) {
            return (
              <Reveal key={c.slug}>
                <button type="button" className={rowClass} aria-haspopup="dialog" onClick={() => setActive(idx)}>
                  <RowContent c={c} action={<>View <Eye size={14} aria-hidden /></>} />
                </button>
              </Reveal>
            );
          }
          if (c.verifyUrl) {
            return (
              <Reveal key={c.slug}>
                <a href={c.verifyUrl} target="_blank" rel="noopener noreferrer" className={rowClass}>
                  <RowContent c={c} action={<>Verify <ArrowUpRight size={14} aria-hidden /></>} />
                </a>
              </Reveal>
            );
          }
          return (
            <Reveal key={c.slug}>
              <div className={rowClass}>
                <RowContent c={c} action={null} />
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* Native <dialog>: Esc to close, focus trapping, backdrop */}
      <dialog
        ref={dialogRef}
        aria-labelledby="cert-title"
        onClose={() => { setActive(null); document.body.style.overflow = ""; }}
        onClick={(e) => { if (e.target === e.currentTarget) dialogRef.current?.close(); }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") go(1);
          if (e.key === "ArrowLeft") go(-1);
        }}
        className="m-auto max-h-[94vh] w-[min(96vw,1100px)] overflow-hidden border border-line bg-bg p-0 text-fg backdrop:bg-black/70 backdrop:backdrop-blur-sm"
      >
        {current && (
          <div className="flex max-h-[94vh] flex-col">
            <div className="flex items-start justify-between gap-4 border-b border-line p-5">
              <div>
                <h3 id="cert-title" className="text-xl font-medium">{current.title}</h3>
                <p className="mt-1 text-muted">{current.issuer} · {current.date}</p>
                {current.credentialId && (
                  <p className="mt-1 font-mono text-xs text-muted">Credential ID: {current.credentialId}</p>
                )}
              </div>
              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                aria-label="Close"
                className="grid size-9 shrink-0 place-items-center rounded-full border border-line text-muted hover:border-accent hover:text-accent"
              >
                <X size={16} />
              </button>
            </div>

            {/* Shown as a background image: no "Save image as", no dragging */}
            <div className="min-h-0 flex-1 bg-surface p-4" onContextMenu={(e) => e.preventDefault()}>
              <div
                role="img"
                aria-label={`${current.title} certificate`}
                className="h-[62vh] w-full select-none bg-contain bg-center bg-no-repeat [-webkit-touch-callout:none]"
                style={{ backgroundImage: `url(${current.image})` }}
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line p-4">
              <div className="flex gap-2">
                <button type="button" onClick={() => go(-1)} aria-label="Previous certificate"
                  className="grid size-9 place-items-center rounded-full border border-line text-muted hover:border-accent hover:text-accent">
                  <ChevronLeft size={16} />
                </button>
                <button type="button" onClick={() => go(1)} aria-label="Next certificate"
                  className="grid size-9 place-items-center rounded-full border border-line text-muted hover:border-accent hover:text-accent">
                  <ChevronRight size={16} />
                </button>
              </div>
              {current.verifyUrl && (
                <a href={current.verifyUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-accent hover:underline">
                  Verify credential <ArrowUpRight size={14} aria-hidden />
                </a>
              )}
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}