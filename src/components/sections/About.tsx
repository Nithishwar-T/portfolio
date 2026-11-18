import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const facts = [
  ["Based in", profile.location],
  ["Education", "B.Tech Information Technology, CGPA 8.24"],
  ["Currently", "Full Stack .NET Developer Intern, Kanini Software Solutions"],
  ["Looking for", "Entry-level Software Engineer / Full Stack Developer roles"],
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading index="01" title="About" />
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-6 text-lg leading-relaxed">
          <p>
            I&apos;m a full stack developer working in an Agile team at Kanini Software Solutions,
            building enterprise modules with Angular, ASP.NET Core Web API and SQL Server: reusable
            components, REST integrations and end-to-end CRUD features.
          </p>
          <p className="text-muted">
            In my projects I go beyond basic CRUD: role-based access, JWT authentication with refresh
            tokens, and ownership checks that guard against IDOR. I&apos;m comfortable across the .NET
            and MERN stacks, and I work through Git-based workflows with code reviews.
          </p>
          <p className="text-muted">
            I&apos;m completing my B.Tech in Information Technology at St. Joseph&apos;s Institute of
            Technology and looking for an entry-level Software Engineer or Full Stack Developer role.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <dl className="border-t border-line">
            {facts.map(([k, v]) => (
              <div key={k} className="border-b border-line py-4">
                <dt className="font-mono text-xs uppercase tracking-widest text-muted">{k}</dt>
                <dd className="mt-1">{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}