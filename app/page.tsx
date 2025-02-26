import type { Metadata } from "next";
import Link from "next/link";
import { GeistMono } from "geist/font/mono";

import { BlogPosts } from "app/components/posts";
import AnimatedContent from "./components/ui/AnimatedContent";
import { CurrentlyPlaying } from "./spotify/components";
import { ViewButton } from "./components/view-button";
import ProjectCard from "./components/ProjectCard";

export const metadata: Metadata = {
  title: "Aditya Roychoudhary",
  description:
    "Aditya Roychoudhary is a software designer from Mumbai, creating interfaces that merge human-centered metaphors with scalable systems.",
};

export default function Page() {
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
    <section className="space-y-12 md:space-y-20 max-w-4xl mx-auto">
      {/* Hero Section */}
      <AnimatedContent
        distance={150}
        direction="horizontal"
        reverse={true}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0.2}
        scale={1.1}
        threshold={0.2}
      >
        <div className="py-8 md:pt-16 pb-0 w-full">
          <div className="flex items-center gap-4 mb-2 md:mb-4">
            <span
              className={`dark:text-white text-black font-bold md:text-4xl text-2xl block`}
            >
              Aditya Roychoudhary
              <br />
            </span>
            <div className="relative group w-12 h-12 rounded-full overflow-hidden">
              <img
                className="object-cover md:w-full md:h-full grayscale group-hover:grayscale-0 transition-all duration-300 cursor-crosshair"
                src="https://github.com/arx9781.png"
                alt="a circular profile picture"
              />
            </div>
          </div>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
            — crafts design interfaces that merge human-centered metaphors with
            scalable systems. His work blends neo-brutalism with timeless
            minimalism, all within a refined monochromatic palette.
          </p>
        </div>
      </AnimatedContent>

      {/* About Section */}
      <AnimatedContent
        distance={80}
        direction="horizontal"
        reverse={true}
        delay={0.3}
        config={{ tension: 90, friction: 18 }}
        initialOpacity={0.3}
        scale={1.07}
        threshold={0.2}
      >
        <div className="relative">
          <div className="absolute inset-0 z-0 rounded-lg overflow-hidden"></div>
          <div className="space-y-8 relative z-10">
            <div className="flex items-center mb-8">
              <h1 className="text-3xl font-bold mr-4">Brief</h1>
              <span className="flex-1 h-px bg-neutral-200 dark:bg-neutral-800 mt-[5px]"></span>
            </div>

            <div className="relative z-10">
              <div className="space-y-8">
                <div className="group">
                  <p className="text-lg md:text-xl leading-relaxed font-medium tracking-tight mb-6">
                    <span className="font-mono text-sm text-neutral-500 dark:text-neutral-400 mr-2">
                      01
                    </span>
                    A{" "}
                    <span className="relative">
                      <span
                        className={`font-mono ${GeistMono.className} font-bold bg-neutral-200 dark:bg-neutral-800 cursor-pointer hover:bg-neutral-800 dark:hover:bg-neutral-200 hover:text-neutral-200 dark:hover:text-neutral-800 transition-colors duration-200`}
                      >
                        20 y/o
                      </span>
                      <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-neutral-100 dark:bg-neutral-950 text-black dark:text-white text-xs py-1 px-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none flex flex-row space-x-1">
                        <span>20th</span>
                        <span>April</span>
                      </span>
                    </span>{" "}
                    software designer from Mumbai. Building digital tools with
                    architectural precision.
                  </p>

                  <AnimatedContent
                    distance={100}
                    direction="horizontal"
                    reverse={true}
                    delay={0.4}
                    config={{ friction: 20, tension: 110 }}
                    initialOpacity={0}
                    scale={1.03}
                    threshold={0.3}
                  >
                    <p className="text-lg md:text-xl leading-relaxed font-medium tracking-tight mb-6">
                      <span className="font-mono text-sm text-neutral-500 dark:text-neutral-400 mr-2">
                        02
                      </span>
                      He studied IT and Computer Science at HSNC University,
                      gaining experience as an intern and freelancer. Currently
                      he's focusing on conceptual and systems design; especially
                      for{" "}
                      <span className="text-neutral-800 dark:text-neutral-200 bg-neutral-200 dark:bg-neutral-800 cursor-pointer hover:bg-neutral-800 dark:hover:bg-neutral-200 hover:text-neutral-200 dark:hover:text-neutral-800 transition-colors duration-200">
                        Vercel
                      </span>{" "}
                      —a company he aspires to join.
                    </p>
                  </AnimatedContent>
                  <AnimatedContent
                    distance={100}
                    direction="horizontal"
                    reverse={true}
                    delay={0.4}
                    config={{ friction: 20, tension: 110 }}
                    initialOpacity={0}
                    scale={1.03}
                    threshold={0.3}
                  >
                    <p className="text-lg md:text-xl leading-relaxed font-medium tracking-tight">
                      <span className="font-mono text-sm text-neutral-500 dark:text-neutral-400 mr-2">
                        03
                      </span>
                      Enjoys competitive gaming, particularly{" "}
                      <span className="text-neutral-800 dark:text-neutral-200 bg-neutral-200 dark:bg-neutral-800 cursor-pointer hover:bg-neutral-800 dark:hover:bg-neutral-200 hover:text-neutral-200 dark:hover:text-neutral-800 transition-colors duration-200">
                        Valorant
                      </span>{" "}
                      and{" "}
                      <span className="text-neutral-800 dark:text-neutral-200 bg-neutral-200 dark:bg-neutral-800 cursor-pointer hover:bg-neutral-800 dark:hover:bg-neutral-200 hover:text-neutral-200 dark:hover:text-neutral-800 transition-colors duration-200">
                        Mobile Legends
                      </span>
                      . Also, he is an avid anime watcher, with a special
                      interest in the{" "}
                      <span className="text-neutral-800 dark:text-neutral-200 bg-neutral-200 dark:bg-neutral-800 cursor-pointer hover:bg-neutral-800 dark:hover:bg-neutral-200 hover:text-neutral-200 dark:hover:text-neutral-800 transition-colors duration-200">
                        space opera
                      </span>{" "}
                      genre.
                      <div>
                        <AnimatedContent
                          distance={100}
                          direction="horizontal"
                          reverse={true}
                          delay={0.1}
                          config={{ friction: 20, tension: 110 }}
                          initialOpacity={0}
                          scale={1.03}
                          threshold={0.3}
                        >
                          <div
                            className={`grid grid-cols-2 gap-2 py-4 border rounded-lg px-4 border-neutral-200 dark:border-neutral-800 mt-8 ${GeistMono.className} text-sm md:grid-cols-4 lg:grid-cols-6`}
                          >
                            <AnimatedContent
                              distance={20}
                              direction="horizontal"
                              delay={0.2}
                              config={{ tension: 90, friction: 18 }}
                              initialOpacity={0.3}
                              scale={1.02}
                              threshold={0.1}
                            >
                              <a
                                href="https://instagram.com/arx9781"
                                target="_blank"
                                rel="noreferrer"
                                className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors duration-200 underline"
                              >
                                Instagram
                              </a>
                            </AnimatedContent>
                            <AnimatedContent
                              distance={20}
                              direction="horizontal"
                              delay={0.3}
                              config={{ tension: 90, friction: 18 }}
                              initialOpacity={0.3}
                              scale={1.02}
                              threshold={0.1}
                            >
                              <a
                                href="https://www.facebook.com/arx9781"
                                target="_blank"
                                rel="noreferrer"
                                className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors duration-200 underline"
                              >
                                Facebook
                              </a>
                            </AnimatedContent>
                            <AnimatedContent
                              distance={20}
                              direction="horizontal"
                              delay={0.4}
                              config={{ tension: 90, friction: 18 }}
                              initialOpacity={0.3}
                              scale={1.02}
                              threshold={0.1}
                            >
                              <a
                                href="https://threads.net/@arx9781"
                                target="_blank"
                                rel="noreferrer"
                                className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors duration-200 underline"
                              >
                                Threads
                              </a>
                            </AnimatedContent>
                            <AnimatedContent
                              distance={20}
                              direction="horizontal"
                              delay={0.6}
                              config={{ tension: 90, friction: 18 }}
                              initialOpacity={0.3}
                              scale={1.02}
                              threshold={0.1}
                            >
                              <a
                                href="https://discord.gg/TM6Z2GRf"
                                target="_blank"
                                rel="noreferrer"
                                className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors duration-200 underline"
                              >
                                Discord
                              </a>
                            </AnimatedContent>

                            <AnimatedContent
                              distance={20}
                              direction="horizontal"
                              delay={0.6}
                              config={{ tension: 90, friction: 18 }}
                              initialOpacity={0.3}
                              scale={1.02}
                              threshold={0.1}
                            >
                              <a
                                href="https://myanimelist.net/profile/arx9781"
                                target="_blank"
                                rel="noreferrer"
                                className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors duration-200 underline"
                              >
                                MyAnimeList
                              </a>
                            </AnimatedContent>
                            <AnimatedContent
                              distance={20}
                              direction="horizontal"
                              delay={0.5}
                              config={{ tension: 90, friction: 18 }}
                              initialOpacity={0.3}
                              scale={1.02}
                              threshold={0.1}
                            >
                              <a
                                href="https://x.com/morphinearc"
                                target="_blank"
                                rel="noreferrer"
                                className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors duration-200 underline"
                              >
                                X
                              </a>
                            </AnimatedContent>
                          </div>
                        </AnimatedContent>
                      </div>
                    </p>
                  </AnimatedContent>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedContent>

      {/* Spotify Section */}
      <AnimatedContent
        distance={50}
        direction="vertical"
        delay={0.2}
        config={{ tension: 100, friction: 15 }}
        initialOpacity={0}
        scale={1.05}
        threshold={0.1}
      >
        <div>
          <div className="flex items-center mb-8">
            <h1 className="text-3xl font-bold mr-4">Spotify</h1>
            <span className="flex-1 h-px bg-neutral-200 dark:bg-neutral-800 mt-[5px]"></span>
          </div>
          <div>
            <CurrentlyPlaying />
          </div>
          <AnimatedContent
            distance={100}
            direction="vertical"
            delay={0.4}
            config={{ tension: 110, friction: 20 }}
            initialOpacity={0}
            scale={1.03}
            threshold={0.3}
          >
            <div className="flex items-center justify-end mt-6">
              <Link href="/spotify">
                <ViewButton>View music</ViewButton>
              </Link>
            </div>
          </AnimatedContent>
        </div>
      </AnimatedContent>

      {/* Projects Created */}
      <AnimatedContent
        distance={100}
        direction="vertical"
        delay={0.4}
        config={{ tension: 110, friction: 20 }}
        initialOpacity={0}
        scale={1.03}
        threshold={0.3}
      >
        <div>
          <div className="flex items-center mb-8">
            <h1 className="text-3xl font-bold mr-4">Projects</h1>
            <span className="flex-1 h-px bg-neutral-200 dark:bg-neutral-800 mt-[5px]"></span>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {projects.map((project, index) => (
              <AnimatedContent
                key={index}
                distance={50}
                direction="vertical"
                delay={0.1 * index}
                config={{ tension: 110, friction: 20 }}
                initialOpacity={0}
                scale={1.03}
                threshold={0.3}
              >
                <ProjectCard {...project} />
              </AnimatedContent>
            ))}
          </div>
        </div>
      </AnimatedContent>

      {/* Blog Section */}
      <AnimatedContent
        distance={100}
        direction="vertical"
        delay={0.4}
        config={{ tension: 110, friction: 20 }}
        initialOpacity={0}
        scale={1.03}
        threshold={0.3}
      >
        <div>
          <div className="flex items-center mb-8">
            <h1 className="text-3xl font-bold mr-4">Blogs</h1>
            <span className="flex-1 h-px bg-neutral-200 dark:bg-neutral-800 mt-[5px]"></span>
          </div>
          <div>
            <BlogPosts />
          </div>
          <AnimatedContent
            distance={100}
            direction="vertical"
            delay={0.4}
            config={{ tension: 110, friction: 20 }}
            initialOpacity={0}
            scale={1.03}
            threshold={0.3}
          >
            <div className="flex items-center justify-end mt-6">
              <Link href="/blog">
                <ViewButton>View blogs</ViewButton>
              </Link>
            </div>
          </AnimatedContent>
        </div>
      </AnimatedContent>
    </section>
  );
}
