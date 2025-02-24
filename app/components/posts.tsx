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
            className="group p-4 rounded-lg border border-neutral-400/50 dark:border-neutral-800/50 hover:border-neutral-300/60 dark:hover:border-neutral-700/60 transition-all duration-200 hover:bg-neutral-50/30 dark:hover:bg-neutral-900/20 h-full"
          >
            <div className="flex justify-between items-start">
              <div>
                <p
                  className={`text-sm text-neutral-500 mb-2 ${GeistMono.className}`}
                >
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
                <h3 className="text-xl font-medium text-neutral-900 dark:text-neutral-100 group-hover:text-[var(--color-accent)] transition-colors">
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
