import ExperienceCard from "~/components/experience-card";
import type { Route } from "./+types/home";
import { ArrowUpRightIcon, ChevronDownIcon } from "@heroicons/react/24/solid";

let education = [
  {
    institution: "University of Minho",
    degree: "Bachelor's in Software Engineering",
    location: "Braga, Portugal",
    duration: "Sep 2023 - Present",
  },
];

let experience = [
  {
    company: "ENEI",
    role: "Head of the Technology Department",
    duration: "Oct 2025 - Apr 2026",
    description:
      "Leading technical infrastructure for Portugal's national Software Engineering student conference. Overseeing development and maintenance of internal tools and platforms supporting organizers, speakers, and participants.",
  },
  {
    company: "CeSIUM",
    role: "Director of Technology Department",
    duration: "Oct 2025 - Present",
    description:
      "Led a 30-person technical team within an organization of 80+ collaborators, coordinating project timelines and code reviews. Architected and deployed full-stack platforms supporting 3 major annual events (ENEI, SEI and Hackathon Bugsbyte) serving 1000+ participants.",
  },
  {
    company: "CeSIUM",
    role: "Co Director of Technology Department",
    duration: "Oct 2024 - Oct 2025",
    description:
      "Led a 30-person technical team within an organization of 80+ collaborators, coordinating project timelines and code reviews. Architected and deployed full-stack platforms supporting 3 major annual events (ENEI, SEI and Hackathon Bugsbyte) serving 1000+ participants.",
  },
  {
    company: "SEI' 25",
    role: "Member of the Technology Department",
    duration: "Oct 2024 - Feb 2025",
    description:
      "Contributed to developing and maintaining internal platforms for a student tech conference. Supported technical infrastructure for an event featuring 30+ companies, 30+ activities, and 800 participants.",
  },
  {
    company: "CoderDojo Braga",
    role: "Mentor",
    duration: "Oct 2023 - Present",
    description:
      "Volunteer mentor teaching programming fundamentals and project development to 60+ students aged 7-17.",
  },
];

let projects = [
  {
    name: "Hydrogen",
    duration: "Jan 2025 - Present",
    description:
      "Developed CeSIUM's modern landing page using Next.js and Tailwind CSS, serving as the main entry point for the organization's online presence. Implemented accessibility best practices and responsive design to showcase events, team members, and news effectively.",
  },
  {
    name: "Safira",
    duration: "Nov 2024 - Feb 2025",
    description:
      "Built a full-stack event management platform for SEI using Phoenix LiveView and PostgreSQL. Implemented user registration system, real-time check-ins, CV submission portal for companies, prize management, and interactive gamification features. Successfully deployed and maintained across multiple event editions with active ongoing usage.",
  },
  {
    name: "Astra - Atlas",
    duration: "Mar 2024 - Present",
    description:
      "Led development of a comprehensive calendar and schedule platform serving 800+ Software Engineering students at University of Minho. Built frontend with Next.js and React, backend with Phoenix and Elixir, featuring multiple calendar views, advanced filtering, and export functionality. Centralized fragmented course scheduling by consolidating all academic events into one accessible platform.",
  },
];

let skills = {
  languages: [
    "JavaScript",
    "TypeScript",
    "Elixir",
    "HTML",
    "Haskell",
    "C/C++",
    "Java",
    "SQL",
    "Python",
  ],
  technologies: ["Next.js", "Phoenix", "Docker", "React", "PostgreSQL"],
  spokenLanguages: ["Portuguese (Native)", "English (C1 Level)"],
  tools: [
    "Datagrip",
    "Bruno/Postman",
    "Docker",
    "SSH",
    "Netlify",
    "Slack",
    "Trello",
    "ClickUp",
    "Google Workspace",
  ],
};

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nuno Fernandes" },
    {
      name: "description",
      content:
        "Software Engineering student at the University of Minho. Explore my projects and connect with me.",
    },
  ];
}

export default function Home() {
  return (
    <main className="min-h-screen font-geist-mono px-4 sm:px-16 py-8">
      <div className="min-h-screen flex flex-col items-center justify-center gap-2 p-2 relative">
        <h1 className="text-center font-geist-sans text-5xl font-bold md:text-6xl">
          nuno fernandes.
        </h1>
        <p className="px-3 text-center text-zinc-300 md:text-base">
          software engineering @ university of minho
        </p>
        <div className="mt-4 flex gap-4">
          <a
            href="https://github.com/nunom27"
            className="flex items-center text-blue-600 hover:underline"
            target="_blank"
          >
            github <ArrowUpRightIcon className="ml-1 size-4" />
          </a>
          <a
            href="https://linkedin.com/in/nunom27"
            className="flex items-center text-blue-600 hover:underline"
            target="_blank"
          >
            linkedin <ArrowUpRightIcon className="ml-1 size-4" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-sm text-zinc-400">Scroll to discover more</span>
          <ChevronDownIcon className="size-6 text-zinc-400" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-12 mt-16">
        {/* Education Section */}
        <section>
          <h2 className="text-4xl font-bold font-geist-sans mb-6 mx-1.5">
            Education
          </h2>
          {education.map((edu, index) => (
            <div key={index} className="border border-zinc-700 rounded-lg p-4">
              <h3 className="text-xl font-bold">{edu.degree}</h3>
              <p className="text-sm text-zinc-400">
                {edu.institution} | {edu.location}
              </p>
              <p className="text-sm text-zinc-400">{edu.duration}</p>
            </div>
          ))}
        </section>

        {/* Experience Section */}
        <section>
          <h2 className="text-4xl font-bold font-geist-sans mb-6 mx-1.5">
            Experience
          </h2>
          <div className="flex flex-col gap-4">
            {experience.map((exp, index) => (
              <ExperienceCard
                key={index}
                title={exp.role}
                company={exp.company}
                date={exp.duration}
                description={exp.description}
              />
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section>
          <h2 className="text-4xl font-bold font-geist-sans mb-6 mx-1.5">
            Projects
          </h2>
          <div className="flex flex-col gap-4">
            {projects.map((project, index) => (
              <ExperienceCard
                key={index}
                title={project.name}
                company=""
                date={project.duration}
                description={project.description}
              />
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="pb-16">
          <h2 className="text-4xl font-bold font-geist-sans mb-6 mx-1.5">
            Skills
          </h2>
          <div className="border border-zinc-700 rounded-lg p-6 space-y-4">
            <div>
              <h3 className="text-lg font-bold text-zinc-200 mb-2">
                Programming Languages
              </h3>
              <p className="text-zinc-300">{skills.languages.join(", ")}</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-zinc-200 mb-2">
                Technologies
              </h3>
              <p className="text-zinc-300">{skills.technologies.join(", ")}</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-zinc-200 mb-2">
                Languages
              </h3>
              <p className="text-zinc-300">
                {skills.spokenLanguages.join(", ")}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-zinc-200 mb-2">Tools</h3>
              <p className="text-zinc-300">{skills.tools.join(", ")}</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
