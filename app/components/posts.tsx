import Link from "next/link";
import { GeistMono } from "geist/font/mono";
import { formatDate } from "app/blog/utils";
import { getBlogPosts } from "app/blog/utils";
import AnimatedContent from "./ui/AnimatedContent";

export function BlogPosts() {
  let allPosts = getBlogPosts();

  return (
    <div className="grid grid-cols-1 gap-4">
      {allPosts
        .sort((a, b) => {
          if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group relative p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 
                     bg-neutral-50 dark:bg-neutral-900/50 hover:bg-neutral-100 dark:hover:bg-neutral-900 
                     transition-all duration-300"
          >
            <div className="flex flex-col h-full">
              <h3 className="text-lg font-medium mb-2 group-hover:text-neutral-800 
                           dark:group-hover:text-neutral-200 transition-colors">
                {post.metadata.title}
              </h3>
              <p className={`text-sm text-neutral-500 mb-2 ${GeistMono.className}`}>
                {formatDate(post.metadata.publishedAt, false)}
              </p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
                {post.metadata.summary}
              </p>
            </div>
          </Link>
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
