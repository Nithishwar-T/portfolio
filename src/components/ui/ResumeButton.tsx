"use client";
import { useRef, useState } from "react";
import { Download, ExternalLink, FileText, X } from "lucide-react";
import { profile } from "@/data/profile";

export function ResumeButton({ className }: { className?: string }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  const show = () => {
    setOpen(true);
    ref.current?.showModal();
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <button type="button" onClick={show} className={className} aria-haspopup="dialog">
        View Resume <FileText size={16} aria-hidden />
      </button>

      <dialog
        ref={ref}
        aria-label="Resume preview"
        onClose={() => {
          setOpen(false);
          document.body.style.overflow = "";
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) ref.current?.close();
        }}
        className="m-auto h-[92vh] w-[min(96vw,900px)] overflow-hidden border border-line bg-bg p-0 text-fg backdrop:bg-black/70 backdrop:backdrop-blur-sm"
      >
        <div className="flex h-full flex-col">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line p-4">
            <p className="font-mono text-sm">Resume</p>
            <div className="flex items-center gap-4 text-sm">
              <a href={profile.resumePath} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-accent hover:underline">
                Open in new tab <ExternalLink size={14} aria-hidden />
              </a>
              <a href={profile.resumePath} download
                className="inline-flex items-center gap-1 text-accent hover:underline">
                Download <Download size={14} aria-hidden />
              </a>
              <button type="button" onClick={() => ref.current?.close()} aria-label="Close resume preview"
                className="grid size-9 place-items-center rounded-full border border-line text-muted hover:border-accent hover:text-accent">
                <X size={16} />
              </button>
            </div>
          </div>
          {/* The PDF loads only when the popup is opened */}
          {open && <iframe src={profile.resumePath} title="Resume PDF" className="min-h-0 flex-1 bg-surface" />}
          <p className="border-t border-line p-3 text-xs text-muted md:hidden">
            If the preview is blank on your phone, use &ldquo;Open in new tab&rdquo;.
          </p>
        </div>
      </dialog>
    </>
  );
}