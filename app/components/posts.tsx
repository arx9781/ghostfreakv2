import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'
import { ScrollShadow } from 'app/components/scroll-shadow'

export function BlogPosts() {
  let allBlogs = getBlogPosts()

  if (!allBlogs) {
    return (
      <div>
        {[...Array(3)].map((_, i) => (
          <BlogPostSkeleton key={i} />
        ))}
      </div>
    )
  }

  return (
    <div className="grid gap-6">
      {allBlogs.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="group p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors"
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm text-neutral-500 mb-2">
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
      ))}
      <ScrollShadow />
    </div>
  )
}

function BlogPostSkeleton() {
  return (
    <div className="flex flex-col space-y-1 mb-4">
      <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
        <div className="w-[100px] h-4 bg-neutral-200 dark:bg-neutral-800 animate-pulse rounded"></div>
        <div className="flex-1 h-4 bg-neutral-200 dark:bg-neutral-800 animate-pulse rounded"></div>
      </div>
    </div>
  )
}
