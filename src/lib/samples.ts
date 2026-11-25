// Items marked `sample: true` are placeholders. They show only when
// NEXT_PUBLIC_SHOW_SAMPLES=true (your local .env.local), never on the live site.
export const SHOW_SAMPLES = process.env.NEXT_PUBLIC_SHOW_SAMPLES === "true";
export const isVisible = (item: { sample?: boolean }) => SHOW_SAMPLES || !item.sample;
