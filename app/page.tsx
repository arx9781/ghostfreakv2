import { BlogPosts } from "app/components/posts";
import { ScrollShadow } from "app/components/scroll-shadow";
// import { Inter } from 'next/font/google'
import { JetBrains_Mono } from "next/font/google";
import type { Metadata } from "next";
import { CurrentlyPlaying } from "./spotify/components";
import Link from "next/link";

// const inter = Inter({ subsets: ['latin'] })
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "adityarych",
  description:
    "a personal dark and minimal themed website. contains a blog page and a spotify page where the users can see my stats",
};

export default function Page() {
  return (
    <section className="space-y-12">
      <div
        className={`space-y-4 ${jetBrainsMono.className}`}
      >
        {/* <h1 className="text-4xl font-medium tracking-tight bg-gradient-to-r from-neutral-900/80 to-neutral-600/80 dark:from-neutral-100 dark:to-neutral-400 bg-clip-text text-transparent">
          aditya roychoudhary
        </h1> */}
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/68690233?s=100&v=4"
            alt="avatar"
            className="w-12 h-12 rounded-full shadow-lg grayscale hover:grayscale-0 duration-300"
          />
        </div>
        <div></div>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
          Aditya's design interfaces: that merge human-centered metaphors with
          scalable systems. His work blends neo-brutalism with timeless
          minimalism, all within a refined monochromatic palette.
        </p>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
          He studied IT and Computer Science at HSNC University, gaining
          experience as an intern and freelancer. Currently, he focuses on
          conceptual and systems design for{" "}
          <span className="text-neutral-800 dark:text-neutral-200 border-b-1 border-neutral-600 dark:border-neutral-200 cursor-pointer hover:scale-95 transition-all duration-200">
            Vercel
          </span>{" "}
          —a company he aspires to join.
        </p>
      </div>
      <div>
        <CurrentlyPlaying />
        <div className="flex items-center justify-end mt-4">
          <Link
            href="/spotify"
            className={`text-sm text-neutral-600 dark:text-neutral-400 hover:underline ${jetBrainsMono.className} font-bold`}
          >
            View all →
          </Link>
        </div>
      </div>
      <div>
        <div className="space-y-4 border-b-1 border-neutral-200 dark:border-neutral-800 pb-10">
          <h2 className={`text-2xl font-medium tracking-tight ${jetBrainsMono.className}`}>More about me</h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
            An almost{" "}
            <span className="relative group border-b-1 border-neutral-600 hover:border-neutral-400 cursor-pointer">
              21 y/o
              <span className="absolute z-10 bottom-full mb-2 left-1/2 transform -translate-x-1/2 backdrop-blur-lg bg-neutral-200/20 dark:bg-neutral-800/20 text-neutral-800 dark:text-neutral-200 text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex space-x-1">
                <span>20th</span>
                <span>April</span>
              </span>
            </span>{" "}
            software designer and developer based in Mumbai, India. I've always been
            fascinated by the web's diverse designs, styles, and languages for creating
            and sharing information. This fascination inspired me to pursue a career in{" "}
            <span className="font-bold">Software Design</span>, where I can contribute
            to the web's{" "}
            <span className="font-bold">innovation</span>.
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl leading-relaxed">
            Outside of my professional life, I enjoy playing games and occasionally
            "touching grass." I primarily play{" "}
            <span className="font-bold">FPS</span> and <span className="font-bold">MOBA</span>{" "}
            games like{" "}
            <span className="border-b-1 border-neutral-600 hover:border-neutral-400 cursor-pointer">
              Mobile Legends
            </span>{" "}
            and{" "}
            <span className="cursor-crosshair hover:text-red-800 border-b-1 border-neutral-600 hover:border-red-800">
              Valorant
            </span>
            . I'm also an avid anime watcher, with{" "}
            <span className="font-bold">space opera</span> being my favorite genre. If
            you're curious about my taste, go through{" "}
            <a href="#" className="text-neutral-800 dark:text-neutral-200 hover:underline">
              myanimelist
            </a>
          </p>
        </div>
      </div>
      <div className="space-y-4">
        <div className="grid gap-6 md:grid-cols-1">
          <BlogPosts />
        </div>
        <div className="flex items-center justify-end">
          <Link
            href="/blog"
            className={`text-sm text-neutral-600 dark:text-neutral-400 hover:underline ${jetBrainsMono.className} font-bold`}
          >
            View blogs →
          </Link>
        </div>
      </div>
      <ScrollShadow />
    </section>
  );
}
