## adityarych.in

A portfolio and personal website built with Next.js.

**Tech Stack:**

- **Next.js:** React framework for building performant web applications.
- **MDX & Markdown:** For content creation, enabling JSX components within Markdown.
- **Tailwind CSS v4:** For utility-first styling.
- **Framer Motion:** For smooth animations and transitions (e.g., in the `Navbar`, see `app/components/nav.tsx`).
- **Vercel:** Hosting, Speed Insights, and Analytics (see `app/layout.tsx` for integration).
- **Spotify API:** Integration to display currently playing and recently played tracks (see `app/spotify/page.tsx` and related files).
- **`sugar-high`:** For syntax highlighting in code blocks (see `app/components/mdx.tsx`).
- **`clsx` and `tailwind-merge`:** For conditional styling and Tailwind class management.
- **`useSWR`:** For data fetching in React components (see `app/spotify/components.tsx`).

**Key Features:**

- **Blog:** Dynamically generated from MDX files (see `app/blog/[slug]/page.tsx` and `app/blog/utils.ts`).
- **Spotify Integration:** Displays current and recent listening activity.
- **SEO Optimized:** Sitemap (`app/sitemap.ts`), robots.txt (`app/robots.ts`), and dynamic OG images (`app/og/route.tsx`).
- **RSS Feed:** Available at `/rss` (`app/rss/route.ts`).
- **Customizable Theme:** Tailwind CSS with dark mode support (see `app/global.css`).

**Navigation:**

- **Home:** Displays a brief introduction, currently playing song, and latest blog posts (`app/page.tsx`).
- **Blog:** Archive of all blog posts (`app/blog/page.tsx`).
- **Spotify:** Detailed view of Spotify activity (`app/spotify/page.tsx`).

**Getting Started:**

1.  Clone the repository.
2.  Install dependencies: `npm install` or `yarn install` or `pnpm install`.
3.  Configure environment variables (especially for Spotify API integration, see `app/api/spotify/now-playing/route.ts` and `app/api/spotify/recently-played/route.ts`).
4.  Run the development server: `npm run dev` or `yarn dev` or `pnpm dev`.
