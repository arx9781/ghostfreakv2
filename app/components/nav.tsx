import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { motion } from 'framer-motion'

const navItems = {
  '/': { name: 'home' },
  '/blog': { name: 'blog' },
  '/spotify': { name: 'music' },
  '/guestbook': { name: 'guestbook' }
};

export function Navbar() {
  let pathname = usePathname() || "/";

  if (pathname.includes("/blog/")) {
    pathname = "/blog";
  }

  const [hoveredPath, setHoveredPath] = useState(pathname);

  return (
    <div className="border border-neutral-800/90 p-[0.4rem] rounded-lg mb-1 sticky top-4 z-[100] bg-neutral-900/80 backdrop-blur-md">
      <nav className="flex gap-2 relative justify-start w-full z-[100]  rounded-lg">
        {Object.entries(navItems).map(([path, item], index) => {
          const isActive = path === pathname;
          
          return (
            <Link
              key={path}
              className={`px-4 py-2 rounded-md text-sm lg:text-base relative no-underline duration-300 ease-in ${
                isActive ? "text-zinc-100" : "text-zinc-400"
              }`}
              data-active={isActive}
              href={path}
              onMouseOver={() => setHoveredPath(path)}
              onMouseLeave={() => setHoveredPath(pathname)}
            >
              <span>{item.name}</span>
              {path === hoveredPath && (
                <motion.div
                  className="absolute bottom-0 left-0 h-full bg-neutral-800/80 rounded-md -z-10"
                  layoutId="navbar"
                  aria-hidden="true"
                  style={{
                    width: "100%",
                  }}
                  transition={{
                    type: "spring",
                    bounce: 0.25,
                    stiffness: 130,
                    damping: 9,
                    duration: 0.3,
                  }}
                />
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}