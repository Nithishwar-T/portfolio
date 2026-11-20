export type Certification = {
  slug: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verifyUrl?: string; // official verification page
  image?: string;     // file in public/certificates/ (enables hover + click preview)
};

// Newest first. Dates and IDs for entries with an image come from the certificate files themselves.
export const certifications: Certification[] = [
  {
    slug: "meta-frontend-professional",
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta · Coursera",
    date: "Apr 2025",
    credentialId: "RF20B19AAYOH",
    verifyUrl: "https://coursera.org/verify/professional-cert/RF20B19AAYOH",
    image: "/certificates/meta-frontend-professional.jpg",
  },
  {
    slug: "postman-api-fundamentals",
    title: "Postman API Fundamentals Student Expert",
    issuer: "Postman",
    date: "Sep 2024", // TODO(owner): date is from your resume; add the certificate image to enable preview
    verifyUrl: "https://badgr.com/public/assertions/IQ2yalgxSE-GwKyE6gslEw",
  },
  {
    slug: "mongodb-intro",
    title: "Introduction to MongoDB for Students",
    issuer: "MongoDB",
    date: "Jul 2024", // certificate says 17-07-2024 (your resume says Jun 2024)
    credentialId: "MDBilpuwyrtwc",
    image: "/certificates/mongodb-intro.jpg",
  },
  {
    slug: "jhu-html-css-js",
    title: "HTML, CSS, and JavaScript for Web Developers",
    issuer: "Johns Hopkins University · Coursera",
    date: "Oct 2023",
    credentialId: "N52G47GE9VQF",
    verifyUrl: "https://coursera.org/verify/N52G47GE9VQF",
    image: "/certificates/jhu-html-css-js.jpg",
  },
  {
    slug: "meta-intro-frontend",
    title: "Introduction to Front-End Development",
    issuer: "Meta · Coursera",
    date: "Oct 2023",
    credentialId: "6JZF2Y7C6EKS",
    verifyUrl: "https://coursera.org/verify/6JZF2Y7C6EKS",
    image: "/certificates/meta-intro-frontend.jpg",
  },
  {
    slug: "infosys-java-beginners",
    title: "Java for Beginners: Step-by-Step Hands-On Guide to Java",
    issuer: "Infosys Springboard",
    date: "Oct 2023",
    image: "/certificates/infosys-java-beginners.jpg",
  },
];