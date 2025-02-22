import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import AnimatedContent from "./ui/AnimatedContent";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t dark:border-neutral-800 border-neutral-200 mt-auto">
      <div className="max-w-3xl mx-4 lg:mx-auto">
        <div className="flex flex-row justify-between items-center py-8 gap-4">
          <div className="flex items-center space-x-2 md:order-1">
            <div className="h-3 w-3 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-neutral-600 dark:text-neutral-300 text-sm">
              All systems normal
            </span>
          </div>
          <AnimatedContent
            distance={30}
            direction="vertical"
            delay={0.5}
            config={{ tension: 120, friction: 25 }}
            initialOpacity={0}
            scale={1.05}
            threshold={0.2}
          >
            <div className={`grid grid-cols-2 gap-x-4 gap-y-2 md:flex md:space-x-4 ${jetBrainsMono.className} text-xs`}>
              <Link
                href="/"
                className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/blog"
                className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/spotify"
                className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
              >
                Music
              </Link>
              <Link
                href="/guestbook"
                className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
              >
                Guestbook
              </Link>
            </div>
          </AnimatedContent>
        </div>
        <div className="border-t dark:border-neutral-800 border-neutral-200 py-4 text-center text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} Aditya Roychoudhary. MIT License.</p>
        </div>
      </div>
    </footer>
  );
}
