import type { Metadata } from "next";

import HeroSection from "./ui/interfaces/HeroSection";
import NowPlayingSection from "./ui/interfaces/NowPlayingSection";
import BriefSection from "./ui/interfaces/BriefSection";
import ProjectSection from "./ui/interfaces/ProjectSection";
import BlogSection from "./ui/interfaces/BlogSection";

export const metadata: Metadata = {
  title: "Aditya Roychoudhary",
  description:
    "a personal website, with minimal and monochromatic design, built with Next.js, TypeScript, React, Tailwind CSS, and Vercel.",
};

export default function Page() {
  return (
    <div className="min-h-screen max-w-4xl mx-auto py-8 md:py-16">
      {/* Hero Section */}
      <HeroSection />

      {/* Brief Section */}
      {/* <BriefSection/> */}

      {/* Now Playing Section */}
      <NowPlayingSection />

      {/* Projects Section */}
      <ProjectSection />

      {/* Blog Section */}
      <BlogSection />
    </div>
  );
}
