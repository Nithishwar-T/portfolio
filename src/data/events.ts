export type EventEntry = {
  slug: string;
  type: "Achievement" | "Workshop" | "Community";
  title: string;
  org: string;
  orgUrl?: string;
  date?: string; // TODO(owner): add the real date, e.g. "Sep 2025". Hidden until set.
  summary: string;
  topics: string[];
};

export const events: EventEntry[] = [
  {
    slug: "d3-team-fantastic4",
    type: "Achievement",
    title: "Team Fantastic4: Event Challenge Winner · Team MVP",
    org: "D3 Community (Digital Dreamers Den)",
    orgUrl: "https://www.linkedin.com/company/digitaldreamersden/",
    summary:
      "I took part in a D3 Community technical event as part of Team Fantastic4. Our team won the event challenge, and I was recognized as the team's MVP.",
    topics: [
      "Deploying AWS services locally with LocalStack",
      "Secure system design on GCP with Cloud Armor and CDN",
      "GitHub Actions challenge and CI/CD concepts",
      "Team collaboration and technical problem-solving",
    ],
  },
  {
    slug: "cdw-data-technologies-workshop",
    type: "Workshop",
    title: "Workshop on Data Technologies",
    org: "CDW · Student Technology Empowerment Program (STEP), St. Joseph's College of Engineering",
    orgUrl: "https://www.linkedin.com/company/cdw/",
    summary:
      "A 3-day hands-on workshop on how data technologies are applied in real-world industries and how data engineers solve business problems.",
    topics: [
      "SQL",
      "Data engineering fundamentals and the role of a data engineer",
      "Power BI",
      "Real-world applications of data technologies",
    ],
  },
  {
    slug: "chennai-react-meetup-10",
    type: "Community",
    title: "Chennai React Meetup #10",
    org: "Chennai React",
    orgUrl: "https://www.linkedin.com/company/chennaireact/",
    summary:
      "Attended three technical sessions and talked with other developers about placements, career journeys and opportunities for freshers.",
    topics: [
      "The Future of React Without Virtual DOM: signals and fine-grained updates",
      "Mastering Secure Login Mechanisms: OAuth, token management and authentication best practices",
      "Building Universal Apps with React: Next.js, Expo and shared codebases",
    ],
  },
];