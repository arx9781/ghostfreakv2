import AnimatedContent from "app/ui/constants/AnimatedContent";
import ProjectCard from "app/ui/modules/ProjectCard";

export default function ProjectSection() {
  const projects = [
    {
      title: "Cinemaphile",
      description: "Movie/Series bookmarks & Reviews",
      href: "https://github.com/arx9781/cinemaphile",
      tags: ["Tailwind CSS", "React", "TypeScript"],
    },
    {
      title: "WikiFetch",
      description:
        "A discord bot that fetches wikipedia articles based on a simple Command Query.",
      href: "https://github.com/arx9781/wikifetch",
      tags: ["React", "JavaScript"],
    },
    {
      title: "Mono-cl",
      description:
        "A minimal & dark VS Code/ Cursor theme with a soft focus on readability.",
      href: "https://github.com/arx9781/mono-cl",
      tags: ["Misc"],
    },
    {
      title: "arxe.gallery",
      description:
        "Web gallery app with options to filter by tags, sort by date, by category and more.",
      href: "https://github.com/arx9781/arxe.gallery",
      tags: ["Javascript", "Tailwind CSS"],
    },
  ];

  return (
    <section className="mb-16">
      <AnimatedContent
        distance={40}
        direction="vertical"
        delay={0.2}
        config={{ tension: 100, friction: 15 }}
        initialOpacity={0}
        scale={1.05}
        threshold={0.1}
      >
        <div className="flex items-center mb-6">
          <h2 className="text-2xl font-bold mr-4">Projects</h2>
          <span className="flex-1 h-px bg-neutral-200 dark:bg-neutral-800 mt-[5px]"></span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </AnimatedContent>
    </section>
  );
}
