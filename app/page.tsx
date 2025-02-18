import { BlogPosts } from 'app/components/posts'
import {ScrollShadow} from 'app/components/scroll-shadow'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'aditya rych',
  description: 'a personal dark and minimal themed website. contains a blog page and a spotify page where the users can see my stats',
}

export default function Page() {
  return (
    <section className="space-y-12">
      <div className="space-y-4 border-b border-neutral-200 dark:border-neutral-800 pb-8">
        <h1 className="text-5xl font-medium tracking-tight bg-gradient-to-r from-neutral-900/80 to-neutral-600/80 dark:from-neutral-100 dark:to-neutral-400 bg-clip-text text-transparent">
          aditya roychoudhary
        </h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl">
          hi im Aditya, a SWE and a full stack developer based in Mumbai/India.
          I'm passionate about building and designing beautiful and functional
          websites. I'm also a big fan of music and love to explore new sounds
          and genres.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <BlogPosts />
      </div>
      <ScrollShadow />
    </section>
  )
}
