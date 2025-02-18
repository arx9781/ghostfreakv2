import { BlogPosts } from 'app/components/posts'
import { ScrollShadow } from 'app/components/scroll-shadow'

export const metadata = {
  title: 'blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">blogs</h1>
      <BlogPosts />
      <ScrollShadow />
    </section>
  )
}
