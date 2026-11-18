export type Publication = {
  title: string;
  venue: string;
  date: string;
  url?: string;       // add the real IEEE link; the button stays hidden until set
  abstract?: string;  // add when ready; shown as an expandable block
};

export const publications: Publication[] = [
  {
    title: "Automated Vision Transformer Framework for Intelligent Crime-Scene Evidence Detection",
    venue: "IEEE",
    date: "Apr 2026",
  },
  {
    title: "Criminal Operandi Prediction System (COPS): A Full-Stack AI Framework for Scalable Crime Intelligence",
    venue: "IEEE",
    date: "Dec 2025",
  },
];