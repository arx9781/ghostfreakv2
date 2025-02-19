import { BlogPosts } from 'app/components/posts'
import { ScrollShadow } from 'app/components/scroll-shadow'

export const metadata = {
  title: 'blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-[var(--color-bg-pattern-light)] dark:bg-[var(--color-bg-pattern-dark)] [background-size:16px_16px] opacity-10 -z-10" />
      <h1 className="font-semibold text-xl mb-6 tracking-tighter">Blog</h1>
      <BlogPosts />
      <ScrollShadow />
    </section>
  )
}
