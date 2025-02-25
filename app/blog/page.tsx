import { BlogPosts } from "app/components/posts";
import { BackButton } from "app/components/back-button";

import AnimatedContent from "app/components/ui/AnimatedContent";

export const metadata = {
  title: "Blogs",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <section className="relative min-h-[calc(100vh-140px)] py-8 md:py-16">
      <AnimatedContent
        distance={20}
        direction="horizontal"
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0.2}
        scale={1.05}
        threshold={0.2}
      >
        <div className="flex items-center mb-8">
          <BackButton />
        </div>

        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium mb-12 max-w-2xl">
          My blog mostly focuses on software design, web development, guides and
          other things I use or found useful. However I might post something
          completely off-topic sometimes.
        </p>
      </AnimatedContent>
      <div className="absolute inset-0 bg-[var(--color-bg-pattern-light)] dark:bg-[var(--color-bg-pattern-dark)] [background-size:16px_16px] opacity-10 -z-10" />
      <div className="flex items-center mb-6">
        <h2 className="text-2xl font-bold mr-4">Latest Published</h2>
        <span className="flex-1 h-px bg-neutral-200 dark:bg-neutral-800 mt-[5px]"></span>
      </div>
      <div className="flex flex-col justify-between min-h-[inherit]">
        <BlogPosts />
      </div>
    </section>
  );
}
