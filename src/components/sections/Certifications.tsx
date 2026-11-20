"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight, Eye, X } from "lucide-react";
import { certifications, type Certification } from "@/data/certifications";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const PREVIEW_W = 340;
const PREVIEW_H = 250;
const GAP = 24;
const EDGE = 16;

// Only certificates that have an image can be previewed.
const previewable = certifications.filter((c) => c.image);

const canHover = () =>
  typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches;

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
  const reduce = useReducedMotion();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const [hover, setHover] = useState<{ index: number; x: number; y: number } | null>(null);

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

  // Keep the hover preview fully on screen: flip to the left near the right edge, clamp vertically.
  let previewStyle: { left: number; top: number } | null = null;
  if (hover) {
    const flip = hover.x + GAP + PREVIEW_W > window.innerWidth - EDGE;
    const left = Math.max(EDGE, flip ? hover.x - GAP - PREVIEW_W : hover.x + GAP);
    const top = Math.min(Math.max(hover.y - PREVIEW_H / 2, EDGE), window.innerHeight - PREVIEW_H - EDGE);
    previewStyle = { left, top };
  }

  return (
    <section id="certifications" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="07" title="Certifications" />

      <div className="border-t border-line">
        {certifications.map((c) => {
          const idx = previewable.findIndex((p) => p.slug === c.slug);

          if (idx >= 0) {
            return (
              <Reveal key={c.slug}>
                <button
                  type="button"
                  className={rowClass}
                  aria-haspopup="dialog"
                  onClick={() => { setHover(null); setActive(idx); }}
                  onMouseEnter={(e) => canHover() && setHover({ index: idx, x: e.clientX, y: e.clientY })}
                  onMouseMove={(e) => canHover() && setHover((h) => (h ? { ...h, x: e.clientX, y: e.clientY } : h))}
                  onMouseLeave={() => setHover(null)}
                >
                  <RowContent c={c} action={<>Preview <Eye size={14} aria-hidden /></>} />
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

      {/* Hover preview: rendered once, outside the animated rows */}
      <AnimatePresence>
        {hover && previewStyle && (
          <motion.div
            key="cert-hover-preview"
            aria-hidden="true"
            className="pointer-events-none fixed z-40 overflow-hidden border border-line bg-surface shadow-2xl"
            style={{ left: previewStyle.left, top: previewStyle.top, width: PREVIEW_W, height: PREVIEW_H }}
            initial={{ opacity: 0, scale: reduce ? 1 : 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={previewable[hover.index].image} alt="" className="h-full w-full object-contain" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click preview: native <dialog> gives Esc-to-close, focus trapping and a backdrop */}
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
                aria-label="Close preview"
                className="grid size-9 shrink-0 place-items-center rounded-full border border-line text-muted hover:border-accent hover:text-accent"
              >
                <X size={16} />
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-auto bg-surface p-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={current.image}
                alt={`${current.title} certificate`}
                className="mx-auto max-h-[62vh] w-auto max-w-full object-contain"
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
              <div className="flex flex-wrap gap-4 text-sm">
                {current.verifyUrl && (
                  <a href={current.verifyUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-accent hover:underline">
                    Verify credential <ArrowUpRight size={14} aria-hidden />
                  </a>
                )}
                <a href={current.image} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-accent hover:underline">
                  Open full size <ArrowUpRight size={14} aria-hidden />
                </a>
              </div>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
