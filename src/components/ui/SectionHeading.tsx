import { Reveal } from "./Reveal";

export function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <Reveal className="mb-12 flex items-baseline gap-4 border-b border-line pb-4">
      <span className="font-mono text-sm text-accent">{index}</span>
      <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">{title}</h2>
    </Reveal>
  );
}