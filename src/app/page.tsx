import Link from "next/link";
import Asterisk from "@/components/Asterisk";
import Section from "@/components/Section";
import ProjectRow from "@/components/ProjectRow";
import { profile, socialLinks } from "@/content/site";
import { featuredProjects } from "@/content/projects";
import { skillGroups } from "@/content/skills";
import {
  awards,
  certificates,
  education,
  experiences,
} from "@/content/experience";

function Hero() {
  return (
    <section className="mx-auto max-w-7xl w-full px-5 sm:px-8 pt-16 sm:pt-24 pb-20 sm:pb-28 flex flex-col min-h-[calc(100svh-3.5rem)]">
      <div className="text-meta text-muted flex justify-between mb-14 sm:mb-20">
        <span>Portfolio — {new Date().getFullYear()}</span>
        <span className="text-right">{profile.location}</span>
      </div>
      <h1 className="uppercase text-display-xl">
        <span className="flex items-center gap-4 sm:gap-8">
          <Asterisk className="size-[0.55em] shrink-0" />
          Vendra
        </span>
        Hastagiyan
      </h1>
      <p className="text-meta text-muted mt-8">{profile.name}</p>
      <div className="mt-auto pt-16 flex flex-col sm:flex-row sm:items-end justify-between gap-8">
        <p className="text-statement max-w-xl">
          Building end-to-end AI systems — from data to deployed models.
        </p>
        <ul className="text-meta text-muted space-y-1 sm:text-right">
          {profile.focusAreas.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" number="01" label="About">
      <p className="text-statement max-w-4xl">{profile.statement}</p>
      <div className="mt-14 sm:mt-20 grid sm:grid-cols-2 gap-10">
        {education.map((edu) => (
          <div key={edu.institution} className="border-t border-line pt-5">
            <p className="text-meta text-muted">{edu.period}</p>
            <h3 className="mt-3 font-semibold text-lg">{edu.institution}</h3>
            <p className="text-muted">{edu.degree}</p>
            <ul className="mt-3 space-y-1 text-sm text-muted">
              {edu.notes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

function FeaturedProjects() {
  return (
    <Section id="work" number="02" label="Selected Work">
      <h2 className="text-display uppercase mb-12 sm:mb-16">Projects</h2>
      <ul>
        {featuredProjects.map((project, i) => (
          <ProjectRow key={project.slug} project={project} index={i} />
        ))}
      </ul>
      <div className="mt-10">
        <Link href="/projects" className="text-meta link-underline">
          All projects ↗
        </Link>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" number="03" label="Skills">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-meta text-muted mb-4 flex items-center gap-2">
              <Asterisk className="size-2.5" />
              {group.title}
            </h3>
            <ul className="flex flex-wrap gap-x-3 gap-y-1.5">
              {group.items.map((item) => (
                <li key={item} className="font-medium">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" number="04" label="Experience">
      <div className="space-y-14">
        {experiences.map((exp) => (
          <div
            key={exp.organization}
            className="grid sm:grid-cols-[1fr_2fr] gap-6"
          >
            <div>
              <h3 className="font-semibold text-lg">{exp.organization}</h3>
              {exp.location && (
                <p className="text-meta text-muted mt-2">{exp.location}</p>
              )}
            </div>
            <div className="space-y-8">
              {exp.roles.map((role) => (
                <div key={role.title}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-medium">{role.title}</h4>
                    <p className="text-meta text-muted">{role.period}</p>
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-muted max-w-xl">
                    {role.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span aria-hidden="true" className="shrink-0">
                          —
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 grid sm:grid-cols-2 gap-10">
        <div>
          <h3 className="text-meta text-muted mb-5">Awards</h3>
          {awards.map((award) => (
            <div key={award.title} className="border-t border-line pt-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-medium">{award.title}</p>
                <p className="text-meta text-muted">{award.date}</p>
              </div>
              <p className="mt-2 text-sm text-muted max-w-md">
                {award.description}
              </p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-meta text-muted mb-5">Certificates</h3>
          <ul>
            {certificates.map((cert) => (
              <li
                key={cert.title}
                className="border-t border-line py-3 flex flex-wrap items-baseline justify-between gap-2"
              >
                <span className="text-sm font-medium">{cert.title}</span>
                <span className="text-meta text-muted">{cert.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" number="05" label="Contact" inverse>
      <h2 className="text-display uppercase">
        Let&apos;s work
        <br />
        together
        <Asterisk className="inline-block size-[0.5em] ml-4 align-baseline" />
      </h2>
      <p className="mt-8 max-w-xl text-inverse/70">
        Open to internships, research collaboration, and data science / ML
        projects.
      </p>
      <a
        href={`mailto:${profile.email}`}
        className="link-underline inline-block mt-10 text-display-sm break-all"
      >
        {profile.email}
      </a>
      <ul className="mt-14 flex flex-wrap gap-6">
        {socialLinks
          .filter((link) => link.label !== "Email")
          .map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-meta link-underline text-inverse/70 hover:text-inverse"
              >
                {link.label} ↗
              </a>
            </li>
          ))}
      </ul>
    </Section>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <FeaturedProjects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
