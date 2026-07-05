import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Asterisk from "@/components/Asterisk";
import { projects } from "@/content/projects";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  const visibleSections = project.caseStudy.filter(
    (section) => !section.body.startsWith("TODO"),
  );
  const links = [
    project.links.github && { label: "GitHub", href: project.links.github },
    project.links.demo && { label: "Live demo", href: project.links.demo },
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <main id="main" className="flex-1">
      <div className="mx-auto max-w-7xl w-full px-5 sm:px-8 py-16 sm:py-24">
        <div className="text-meta text-muted flex justify-between mb-12 sm:mb-16">
          <Link href="/projects" className="link-underline">
            ← All projects
          </Link>
          <span className="tabular-nums">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </span>
        </div>

        <h1 className="text-display uppercase max-w-5xl">{project.title}</h1>
        <p className="text-statement text-muted mt-8 max-w-3xl">
          {project.summary}
        </p>

        <dl className="mt-14 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 border-t border-line pt-8">
          <div>
            <dt className="text-meta text-muted mb-2">Role</dt>
            <dd className="font-medium">{project.role}</dd>
          </div>
          <div>
            <dt className="text-meta text-muted mb-2">Year</dt>
            <dd className="font-medium">
              {project.year === "TODO" ? "—" : project.year}
            </dd>
          </div>
          <div>
            <dt className="text-meta text-muted mb-2">Status</dt>
            <dd className="font-medium capitalize">{project.status}</dd>
          </div>
          <div>
            <dt className="text-meta text-muted mb-2">Links</dt>
            <dd className="font-medium">
              {links.length > 0 ? (
                <span className="flex flex-wrap gap-4">
                  {links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-underline"
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </span>
              ) : (
                <span className="text-muted">Available on request</span>
              )}
            </dd>
          </div>
        </dl>

        <div className="mt-16 sm:mt-24 space-y-14 max-w-3xl">
          {visibleSections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-meta text-muted mb-4 flex items-center gap-2">
                <Asterisk className="size-2.5" />
                {section.heading}
              </h2>
              <p className="text-lg leading-relaxed">{section.body}</p>
            </section>
          ))}

          <section>
            <h2 className="text-meta text-muted mb-4 flex items-center gap-2">
              <Asterisk className="size-2.5" />
              Stack
            </h2>
            <ul className="flex flex-wrap gap-x-4 gap-y-1.5">
              {project.stack.map((tool) => (
                <li key={tool} className="font-medium text-lg">
                  {tool}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <div className="border-t border-line">
        <Link
          href={`/projects/${next.slug}`}
          className="group block mx-auto max-w-7xl px-5 sm:px-8 py-14 sm:py-20"
        >
          <p className="text-meta text-muted mb-4">Next project</p>
          <p className="text-display-sm uppercase group-hover:translate-x-2 transition-transform duration-300 ease-out">
            {next.title} →
          </p>
        </Link>
      </div>
    </main>
  );
}
