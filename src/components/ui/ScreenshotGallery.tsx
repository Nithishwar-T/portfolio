import { isVisible } from "@/lib/samples";
import type { Shot } from "@/data/projects";

export function ScreenshotGallery({ shots }: { shots: Shot[] }) {
  const visible = shots.filter(isVisible);
  if (visible.length === 0) return null;

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {visible.map((s) => (
        <figure key={s.src}>
          {s.sample ? (
            <div className="grid aspect-video place-items-center border border-dashed border-muted bg-surface p-4 text-center font-mono text-xs text-muted">
              SAMPLE · save your screenshot as
              <br />
              public{s.src}
            </div>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={s.src} alt={s.alt} loading="lazy" className="w-full border border-line" />
          )}
          {s.caption && <figcaption className="mt-2 font-mono text-xs text-muted">{s.caption}</figcaption>}
        </figure>
      ))}
    </div>
  );
}