export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  summary: string;
  role: string;
  stack: string[];
  features: string[];
  built: string[];
  github: string;
  liveUrl?: string;                          // add when deployed; hidden if empty
  problem?: string;                          // optional sections render only if filled
  solution?: string;
  challenges?: string;
  screenshots?: { src: string; alt: string }[]; // put images in public/projects/
};

export const projects: Project[] = [
  {
    slug: "travel-itinerary-planner",
    title: "Travel Itinerary Planner",
    subtitle: "Role-based multi-day trip planning",
    date: "Aug 2026",
    summary:
      "A role-based travel itinerary platform for Travelers, Content Curators and Admins, with entity models for trips, collaborators and destinations that support ordered, multi-day itineraries.",
    role: "Full stack design and development",
    stack: ["Angular", "ASP.NET Core Web API", "SQL Server", "JWT Authentication"],
    features: [
      "Three roles: Traveler, Content Curator and Admin",
      "Trips with collaborators and destinations",
      "Ordered, multi-day itineraries",
      "JWT authentication with refresh token support",
      "Ownership-based authorization checks to mitigate IDOR risks",
    ],
    built: [
      "Designed the role-based platform and the entity models for trips, collaborators and destinations.",
      "Built Angular components for itinerary creation and destination management, integrated with a secured ASP.NET Core Web API.",
      "Implemented JWT authentication with refresh tokens and mitigated IDOR risks through ownership-based authorization checks.",
    ],
    github: "https://github.com/Nithishwar-T/Travel-Itinerary-Planner-App",
  },
  {
    slug: "smartbus",
    title: "SmartBus",
    subtitle: "Bus Reservation & Management System",
    date: "May 2026",
    summary:
      "A full-stack bus reservation platform with role-based access for passengers and administrators, covering the complete booking journey from search to invoice.",
    role: "Full stack architecture and development",
    stack: ["Angular", "Tailwind CSS", "ASP.NET Core Web API", "SQL Server", "JWT Authentication"],
    features: [
      "Bus search",
      "Seat selection",
      "Ticket booking",
      "Booking history",
      "Invoice generation",
      "Role-based access for passengers and administrators",
    ],
    built: [
      "Architected the full-stack platform with role-based access control for passengers and administrators.",
      "Built the end-to-end booking flow (bus search, seat selection, ticket booking, booking history and invoice generation) using Angular and ASP.NET Core Web API.",
      "Secured REST API endpoints with JWT authentication, enforcing role-based authorization across user types.",
    ],
    github: "https://github.com/Nithishwar-T/BusBookingApp",
  },
  {
    slug: "mern-form-submission-system",
    title: "MERN Form Submission System",
    subtitle: "Validated form handling on the MERN stack",
    date: "Jan 2025",
    summary:
      "A full-stack MERN application with a React.js front end, an Express.js REST API and MongoDB Atlas for persistent storage.",
    role: "Full stack development and deployment",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js"],
    features: [
      "React.js front end with form validation",
      "Express.js REST API",
      "MongoDB Atlas storage",
      "Centralized error handling and consistent API responses",
      "Backend deployed on Render",
    ],
    built: [
      "Built the full-stack application: React.js front end, Express.js REST API and MongoDB Atlas.",
      "Implemented form validation and centralized error handling for reliable submissions and consistent API responses.",
      "Deployed the backend on Render with environment-based configuration for multiple environments.",
    ],
    github: "https://github.com/Nithishwar-T/Forms",
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);