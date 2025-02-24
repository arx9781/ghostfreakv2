import { BlogPosts } from "app/components/posts";
import { BackButton } from "app/components/back-button";

export const metadata = {
  title: "blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <section className="relative min-h-[calc(100vh-140px)]">
      <BackButton />
      <div className="absolute inset-0 bg-[var(--color-bg-pattern-light)] dark:bg-[var(--color-bg-pattern-dark)] [background-size:16px_16px] opacity-10 -z-10" />
      <div className="flex flex-col justify-between min-h-[inherit]">
        <BlogPosts />
      </div>
    </section>
  );
}
