import type { Metadata } from "next";
import Link from "next/link";
import { GeistMono } from "geist/font/mono";

import { BlogPosts } from "app/components/posts";
import AnimatedContent from "./components/ui/AnimatedContent";
import { CurrentlyPlaying } from "./spotify/components";
import { ViewButton } from "./components/view-button";

export const metadata: Metadata = {
  title: "Aditya Roychoudhary",
  description:
    "Aditya Roychoudhary is a software designer from Mumbai, creating interfaces that merge human-centered metaphors with scalable systems.",
};

export default function Page() {
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
        <div className="py-8 md:py-16 border-b border-neutral-200 dark:border-neutral-800">
          <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
            <span
              className={`dark:text-white text-black ${GeistMono.className} font-bold`}
            >
              Aditya's design interfaces:
            </span>{" "}
            that merge human-centered metaphors with scalable systems. His work
            blends neo-brutalism with timeless minimalism, all within a refined
            monochromatic palette.
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
                        className={`font-mono ${GeistMono.className} font-bold border-b-2 border-neutral-800 dark:border-neutral-200 cursor-pointer`}
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
                    <p className="text-lg md:text-xl leading-relaxed font-medium tracking-tight">
                      <span className="font-mono text-sm text-neutral-500 dark:text-neutral-400 mr-2">
                        02
                      </span>
                      He studied IT and Computer Science at HSNC University,
                      gaining experience as an intern and freelancer. Currently,
                      he focuses on conceptual and systems design for{" "}
                      <span className="text-neutral-800 dark:text-neutral-200 border-b border-neutral-600 dark:border-neutral-400 cursor-pointer hover:text-neutral-600 dark:hover:text-neutral-300 transition-all duration-200">
                        Vercel
                      </span>{" "}
                      —a company he aspires to join.
                    </p>
                  </AnimatedContent>
                </div>

                <div className="grid md:grid-cols-2 gap-8 border-t border-neutral-200 dark:border-neutral-800 pt-8">
                  <div className="space-y-4">
                    <h3
                      className={`text-sm ${GeistMono.className} text-neutral-500 dark:text-neutral-400 uppercase tracking-wide`}
                    >
                      Leisure Principles
                    </h3>
                    <p className="text-neutral-900 dark:text-neutral-100 text-xl font-medium">
                      Competitive gaming in{" "}
                      <span
                        className={`font-mono ${GeistMono.className} font-medium`}
                      >
                        Valorant
                      </span>{" "}
                      /{" "}
                      <span
                        className={`font-mono ${GeistMono.className} font-medium`}
                      >
                        MLBB
                      </span>
                      . Curating anime libraries—special interest in{" "}
                      <span className={`font-mono ${GeistMono.className}`}>
                        space operas
                      </span>
                      .
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3
                      className={`text-sm ${GeistMono.className} text-neutral-500 dark:text-neutral-400 uppercase tracking-wide`}
                    >
                      Design Philosophy
                    </h3>
                    <p className="text-neutral-900 dark:text-neutral-100 text-xl font-medium">
                      Interfaces as durable tools—
                      <br />
                      <span className={`font-mono ${GeistMono.className}`}>
                        form follows function
                      </span>{" "}
                      meets{" "}
                      <span className={`font-mono ${GeistMono.className}`}>
                        timeless materiality
                      </span>
                      .
                    </p>
                  </div>
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
