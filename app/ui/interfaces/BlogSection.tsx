import AnimatedContent from "app/ui/constants/AnimatedContent";
import { BlogPosts } from "../providers/posts";

export default function BlogSection() {
  return (
    <section className="mb-16">
      <AnimatedContent
        distance={60}
        direction="vertical"
        delay={0.3}
        config={{ tension: 110, friction: 20 }}
        initialOpacity={0}
        scale={1.03}
        threshold={0.2}
      >
        <div className="flex items-center mb-6">
          <h2 className="text-2xl font-bold mr-4">Writing</h2>
          <span className="flex-1 h-px bg-neutral-200 dark:bg-neutral-800 mt-[5px]"></span>
        </div>
        <BlogPosts />
      </AnimatedContent>
    </section>
  );
}
