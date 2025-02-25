import Link from "next/link";

import { formatDate, getBlogPosts } from "app/blog/utils";

import AnimatedContent from "./ui/AnimatedContent";
import { GeistMono } from "geist/font/mono";

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  if (!allBlogs) {
    return (
      <div>
        {[...Array(3)].map((_, i) => (
          <BlogPostSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {allBlogs.map((post) => (
        <AnimatedContent
          key={post.slug}
          distance={20}
          direction="vertical"
          delay={0.1}
          config={{ tension: 90, friction: 18 }}
          initialOpacity={0.3}
          scale={1.02}
          threshold={0.1}
        >
          <Link
            href={`/blog/${post.slug}`}
            className="group rounded-lg transition-all duration-200 h-full"
          >
            <div className="flex justify-between items-start p-6 hover:bg-neutral-300/70 dark:hover:bg-neutral-900/70 rounded-lg border border-neutral-300/70 dark:border-neutral-900/70 transition-colors ease-in-out duration-100">
              <div>
                <p
                  className={`text-sm text-neutral-500 mb-2 ${GeistMono.className}`}
                >
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
                <h3 className="text-base md:text-lg font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-[var(--color-accent)] transition-colors">
                  {post.metadata.title}
                </h3>
              </div>
              <div className="text-neutral-400 group-hover:text-[var(--color-accent)] transition-colors">
                →
              </div>
            </div>
          </Link>
        </AnimatedContent>
      ))}
    </div>
  );
}

function BlogPostSkeleton() {
  return (
    <div className="flex flex-col space-y-1 mb-4">
      <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
        <div className="w-[100px] h-4 bg-neutral-200 dark:bg-neutral-800 animate-pulse rounded"></div>
        <div className="flex-1 h-4 bg-neutral-200 dark:bg-neutral-800 animate-pulse rounded"></div>
      </div>
    </div>
  );
}
