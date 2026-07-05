import type { Metadata } from "next";
import ProjectRow from "@/components/ProjectRow";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects — Muhammad Vendra Hastagiyan",
  description:
    "Data science, machine learning, forecasting, and applied AI projects by Muhammad Vendra Hastagiyan.",
};

export default function ProjectsPage() {
  return (
    <main id="main" className="flex-1 mx-auto max-w-7xl w-full px-5 sm:px-8 py-16 sm:py-24">
      <div className="text-meta text-muted flex justify-between mb-12 sm:mb-16">
        <span>Index</span>
        <span>{String(projects.length).padStart(2, "0")} projects</span>
      </div>
      <h1 className="text-display-xl uppercase mb-16 sm:mb-24">
        All
        <br />
        Projects
      </h1>
      <ul>
        {projects.map((project, i) => (
          <ProjectRow key={project.slug} project={project} index={i} />
        ))}
      </ul>
    </main>
  );
}
