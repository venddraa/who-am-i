import Link from "next/link";
import type { Project } from "@/content/types";

type ProjectRowProps = {
  project: Project;
  index: number;
};

/** Index-style project row: number, big title, metadata line. */
export default function ProjectRow({ project, index }: ProjectRowProps) {
  return (
    <li className="border-t border-line last:border-b">
      <Link
        href={`/projects/${project.slug}`}
        className="group grid grid-cols-[auto_1fr] gap-x-5 sm:gap-x-10 py-8 sm:py-10"
      >
        <span className="text-meta text-muted pt-2 sm:pt-3 tabular-nums">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div>
          <h3 className="text-display-sm uppercase group-hover:translate-x-2 transition-transform duration-300 ease-out">
            {project.title}
          </h3>
          <p className="mt-3 max-w-2xl text-muted">{project.summary}</p>
          <p className="text-meta text-muted mt-4 flex flex-wrap gap-x-4 gap-y-1">
            <span>{project.year === "TODO" ? "—" : project.year}</span>
            <span aria-hidden="true">·</span>
            <span>{project.role}</span>
            <span aria-hidden="true">·</span>
            <span>{project.stack.slice(0, 4).join(" / ")}</span>
          </p>
        </div>
      </Link>
    </li>
  );
}
