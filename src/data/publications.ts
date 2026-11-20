export type Publication = {
  title: string;
  authors: string;
  venue: string;
  date: string;
  summary?: string;
  url?: string;                              // official paper/IEEE link; button hidden until set
  abstract?: string;                         // expandable block; hidden until set
  links?: { label: string; href: string }[]; // extra proof, e.g. presentation certificate
};

// Newest first.
export const publications: Publication[] = [
  {
    // TODO(owner): confirm venue, date and what was implemented before publishing.
    // Venue and date below are copied from your resume; the manuscript itself names no venue.
    title: "Automated Vision Transformer Framework for Intelligent Crime-Scene Evidence Detection",
    authors: "Nithishwar T, Samuel N R, Mary Joseph",
    venue: "IEEE",
    date: "Apr 2026",
  },
  {
    title: "Criminal Operandi Prediction System (COPS): A Full-Stack AI Framework for Scalable Crime Intelligence",
    authors: "Mary Joseph, Samuel N R, Nithishwar T",
    venue:
      "ICECONF 2025, Second International Conference on Artificial Intelligence and Knowledge Discovery in Concurrent Engineering (IEEE technical sponsored), St. Joseph's Institute of Technology",
    date: "Presented 9–10 Oct 2025",
    summary:
      "A web application that lets investigators search crime records in natural language. It uses named entity recognition and fuzzy matching to link suspects, locations and methods of operation, and is designed for offline, on-premise deployment with React, FastAPI and MongoDB.",
    // Uncomment after copying your ICECONF certificate PDF to public/certificates/iceconf-2025-presentation.pdf
       links: [{ label: "Presentation certificate", href: "/certificates/iceconf-2025-presentation.jpg" }]
    // url: "https://...",  // add the IEEE Xplore / DOI link when you have it
  },
];