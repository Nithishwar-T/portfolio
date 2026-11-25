export type Problem = {
  slug: string;
  sample?: boolean; // delete this line once the text is your real words
  title: string;
  project: string;
  tags: string[];
  problem: string;
  approach: string;
  result: string;
};

// The titles come from your resume. Replace every [Replace: ...] with your own account.
// Use no invented numbers or results: only what you can explain in an interview.
export const problems: Problem[] = [
  {
    slug: "idor-ownership-checks",
    sample: true, // TODO(owner)
    title: "Stopping users from reaching each other's data (IDOR)",
    project: "Travel Itinerary Planner",
    tags: ["Security", "ASP.NET Core", "Authorization"],
    problem: "[Replace: describe how a user could have opened or changed another user's trip by changing an ID in a request.]",
    approach: "[Replace: explain the ownership-based authorization checks you added and how you verified them.]",
    result: "[Replace: what changed, stated factually.]",
  },
  {
    slug: "jwt-refresh-tokens",
    sample: true, // TODO(owner)
    title: "Keeping users signed in securely with refresh tokens",
    project: "Travel Itinerary Planner",
    tags: ["JWT", "Authentication"],
    problem: "[Replace: describe the problem with short-lived access tokens and users being signed out.]",
    approach: "[Replace: explain how you designed and implemented the refresh token flow.]",
    result: "[Replace: what the flow achieved, and what you tested.]",
  },
  {
    slug: "form-validation-errors",
    sample: true, // TODO(owner)
    title: "Reliable form submission with validation and error handling",
    project: "MERN Form Submission System",
    tags: ["React", "Express", "Validation"],
    problem: "[Replace: describe what went wrong with invalid or failed submissions.]",
    approach: "[Replace: explain the client-side validation and centralized error handling you built.]",
    result: "[Replace: what behaviour improved, stated factually.]",
  },
  {
    slug: "sql-query-optimization",
    sample: true, // TODO(owner)
    title: "Faster data retrieval through schema and query optimization",
    project: "Kanini Software Solutions",
    tags: ["SQL Server", "Performance"],
    problem: "[Replace: describe a slow query or schema issue you met, without sharing confidential company details.]",
    approach: "[Replace: explain what you changed in the schema or the query.]",
    result: "[Replace: the improvement, only if you can state it truthfully.]",
  },
];