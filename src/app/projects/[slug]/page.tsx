
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { projects, getProject } from "@/data/projects";
import { ArchitectureExplorer } from "@/components/ui/ArchitectureExplorer";

type Props = {
  params: Promise<{ slug: string }>;
};

export const instant = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);

  return p
    ? {
        title: p.title,
        description: p.summary,
      }
    : {};
}

function Block({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="grid gap-4 border-t border-line py-10 md:grid-cols-[200px_1fr]">
      <h2 className="font-mono text-sm uppercase tracking-widest text-muted">
        {label}
      </h2>
      <div>{children}</div>
    </section>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="text-accent">—</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  const btn =
    "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors";

  return (
    <main
      id="main"
      className="mx-auto max-w-5xl px-6 pb-24 pt-28"
    >
      {/* Back to projects */}
      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 font-mono text-sm text-muted hover:text-accent"
      >
        <ArrowLeft size={16} aria-hidden />
        All projects
      </Link>

      {/* Project header */}
      <header className="py-12">
        <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] font-medium leading-none tracking-tighter">
          {project.title}
        </h1>

        <p className="mt-4 font-serif text-2xl italic text-muted sm:text-3xl">
          {project.subtitle}
        </p>

        {/* Project links */}
        <div className="mt-8 flex flex-wrap gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btn} bg-accent text-bg hover:opacity-90`}
            >
              <FaGithub size={16} />
              View on GitHub
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btn} border border-line hover:border-accent hover:text-accent`}
            >
              Live demo
              <ArrowUpRight size={16} />
            </a>
          )}
        </div>
      </header>

      {/* Project information */}
      <dl className="mb-4 grid gap-6 border-t border-line py-8 sm:grid-cols-2">
        <div>
          <dt className="font-mono text-xs uppercase tracking-widest text-muted">
            Date
          </dt>
          <dd className="mt-1">{project.date}</dd>
        </div>

        <div>
          <dt className="font-mono text-xs uppercase tracking-widest text-muted">
            Role
          </dt>
          <dd className="mt-1">{project.role}</dd>
        </div>
      </dl>

      {/* Overview */}
      <Block label="Overview">
        <p className="max-w-3xl text-lg leading-relaxed">
          {project.summary}
        </p>
      </Block>

      {/* Problem */}
      {project.problem && (
        <Block label="Problem">
          <p className="max-w-3xl text-lg">{project.problem}</p>
        </Block>
      )}

      {/* Solution */}
      {project.solution && (
        <Block label="Solution">
          <p className="max-w-3xl text-lg">{project.solution}</p>
        </Block>
      )}

      {/* Key features */}
      <Block label="Key features">
        <Bullets items={project.features} />
      </Block>

      {/* What I built */}
      <Block label="What I built">
        <Bullets items={project.built} />
      </Block>
            {project.architecture && project.architecture.length > 0 && (
        <Block label="Architecture"><ArchitectureExplorer nodes={project.architecture} /></Block>
      )}

      {/* Tech stack */}
      <Block label="Tech stack">
        <ul className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>
      </Block>

      {/* Screenshots */}
      {project.screenshots && project.screenshots.length > 0 && (
        <Block label="Screenshots">
          <div className="grid gap-4 sm:grid-cols-2">
            {project.screenshots.map((s) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={s.src}
                src={s.src}
                alt={s.alt}
                className="w-full border border-line"
                loading="lazy"
              />
            ))}
          </div>
        </Block>
      )}

      {/* Challenges */}
      {project.challenges && (
        <Block label="Challenges">
          <p className="max-w-3xl text-lg">{project.challenges}</p>
        </Block>
      )}

      {/* Next project navigation */}
      {projects.length > 1 && (
        <Link
          href={`/projects/${next.slug}`}
          className="group mt-8 flex items-center justify-between border-y border-line py-8"
        >
          <span className="font-mono text-sm text-muted">
            Next project
          </span>

          <span className="flex items-center gap-3 text-2xl font-medium tracking-tight group-hover:text-accent">
            {next.title}
            <ArrowRight size={20} aria-hidden />
          </span>
        </Link>
      )}
    </main>
  );
}
