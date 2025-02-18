import { BlogPosts } from 'app/components/posts'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'aditya rych',
  description: 'a personal dark and minimal themed website. contains a blog page and a spotify page where the users can see my stats',
}

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        ghostfreakv2
      </h1>
      <p className="mb-4">
        {`a personal dark and minimal themed website. contains a blog page and a spotify page where the users can see my stats`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
