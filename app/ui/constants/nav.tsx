import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  LucideHash,
  LucideMusic,
  RssIcon,
  MessageSquareQuote,
} from "lucide-react";
import AnimatedContent from "./AnimatedContent";

const navItems = {
  "/": { name: "Home", icon: LucideHash },
  "/spotify": { name: "Spotify", icon: LucideMusic },
  "/blog": { name: "Posts", icon: RssIcon },
  "/guestbook": { name: "Message", icon: MessageSquareQuote },
};

export function Navbar() {
  let pathname = usePathname() || "/";

  if (pathname.includes("/blog/")) {
    pathname = "/blog";
  }

  return (
    <>
      {/* Mobile navbar (bottom) - visible only on small screens */}
      <div className="fixed left-0 bottom-0 w-full z-[100] md:hidden">
        <div className="navbar-feathered-blur absolute inset-0 bg-white/30 dark:bg-black/30 backdrop-blur-lg border-t border-gray-200/20 dark:border-gray-800/20">
          <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent dark:from-black/30 dark:to-transparent"></div>
        </div>

        <nav className="flex relative justify-evenly w-full z-[100] py-2">
          {Object.entries(navItems).map(([path, item]) => {
            const isActive = path === pathname;

            return (
              <AnimatedContent
                key={path}
                distance={20}
                direction="vertical"
                delay={0.1}
                config={{ tension: 90, friction: 18 }}
                initialOpacity={0.3}
                scale={1.02}
                threshold={0.1}
              >
                <Link
                  className="flex flex-1 flex-col items-center justify-center relative no-underline"
                  href={path}
                >
                  <div className="flex flex-col items-center justify-center w-full h-full">
                    <div
                      className={`mb-1 p-1 ${
                        isActive
                          ? "text-neutral-900 dark:text-neutral-100"
                          : "text-neutral-500 dark:text-neutral-400"
                      }`}
                    >
                      <item.icon size={22} />
                    </div>
                    <span
                      className={`text-xs ${
                        isActive
                          ? "font-medium text-neutral-900 dark:text-neutral-100"
                          : "text-neutral-500 dark:text-neutral-400"
                      }`}
                    >
                      {item.name}
                    </span>
                  </div>
                </Link>
              </AnimatedContent>
            );
          })}
        </nav>
      </div>

      {/* Desktop navbar (right side) - visible only on medium screens and up */}
      <div className="hidden md:block fixed right-6 top-1/2 -translate-y-1/2 z-[100]">
        <div className="navbar-feathered-blur absolute inset-0 bg-white/30 dark:bg-black/30 backdrop-blur-lg rounded-full border border-gray-200/20 dark:border-gray-800/20">
          <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent dark:from-black/30 dark:to-transparent rounded-full"></div>
        </div>

        <nav className="relative flex flex-col gap-6 p-4 z-[100]">
          {Object.entries(navItems).map(([path, item]) => {
            const isActive = path === pathname;

            return (
              <AnimatedContent
                key={path}
                distance={20}
                direction="horizontal"
                delay={0.1}
                config={{ tension: 90, friction: 18 }}
                initialOpacity={0.3}
                scale={1.02}
                threshold={0.1}
              >
                <Link
                  className="flex items-center gap-3 relative no-underline group"
                  href={path}
                >
                  <div
                    className={`p-2 rounded-full ${
                      isActive
                        ? "bg-neutral-900 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900"
                        : "text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-200"
                    }`}
                  >
                    <item.icon size={20} />
                  </div>

                  <span
                    className={`text-sm transition-all duration-200 ${
                      isActive
                        ? "opacity-100 translate-x-0 font-medium text-neutral-900 dark:text-neutral-100"
                        : "opacity-0 -translate-x-2 group-hover:opacity-70 group-hover:translate-x-0 text-neutral-700 dark:text-neutral-300"
                    }`}
                  >
                    {item.name}
                  </span>

                  {isActive && (
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-full h-full bg-neutral-100/10 dark:bg-neutral-800/20 rounded-full -z-10"
                      layoutId="navbar-indicator-desktop"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.4,
                      }}
                    />
                  )}
                </Link>
              </AnimatedContent>
            );
          })}
        </nav>
      </div>
    </>
  );
}
