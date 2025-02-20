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
        className={`space-y-4 border-b border-neutral-200 dark:border-neutral-800 pb-8 ${jetBrainsMono.className}`}
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
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-medium">Currently Playing</h2>
          <Link
            href="/spotify"
            className={`text-sm text-neutral-600 dark:text-neutral-400 hover:underline ${jetBrainsMono.className} font-bold`}
          >
            View all →
          </Link>
        </div>
        <CurrentlyPlaying />
      </div>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-medium">Latest Posts</h2>
          <Link
            href="/blog"
            className={`text-sm text-neutral-600 dark:text-neutral-400 hover:underline ${jetBrainsMono.className} font-bold`}
          >
            View archive →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-1">
          <BlogPosts />
        </div>
      </div>
      <ScrollShadow />
    </section>
  );
}
