import { BlogPosts } from 'app/components/posts'
import {ScrollShadow} from 'app/components/scroll-shadow'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'aditya.rych',
  description: 'a personal dark and minimal themed website. contains a blog page and a spotify page where the users can see my stats',
}

export default function Page() {
  return (
    <section className="space-y-12">
      <div className="space-y-4 border-b border-neutral-200 dark:border-neutral-800 pb-8">
        <h1 className="text-4xl font-medium tracking-tight bg-gradient-to-r from-neutral-900/80 to-neutral-600/80 dark:from-neutral-100 dark:to-neutral-400 bg-clip-text text-transparent">
          aditya roychoudhary
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl font-mono leading-relaxed">
          Aditya's design interfaces: that merge human-centered metaphors with scalable systems.
          His work blends neo-brutalism with timeless minimalism, all within a refined monochromatic palette.
        </p>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl font-mono leading-relaxed">
         He studied IT and Computer Science at HSNC University, gaining experience as an intern and freelancer. Currently, he focuses on conceptual and systems design for <span className='text-neutral-800 dark:text-neutral-200 border-b-1 border-neutral-600 dark:border-neutral-200 cursor-pointer hover:scale-95 transition-all duration-200'>Vercel</span> —a company he aspires to join.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <BlogPosts />
      </div>
      <ScrollShadow />
    </section>
  )
}
