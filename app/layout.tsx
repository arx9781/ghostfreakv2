"use client";

import { useEffect } from "react";
import "./global.css";
import type { Metadata } from "next";
import { Navbar } from "./components/nav";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "./components/footer";
import { usePathname } from "next/navigation";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    const setFavicon = () => {
      let faviconPath = "/win-home.png"; // Default

      if (pathname.startsWith("/blog")) {
        faviconPath = "/win-docs.png";
      } else if (pathname.startsWith("/spotify")) {
        faviconPath = "/win-music.png";
      }

      const link = (document.querySelector("link[rel*='icon']") ||
        document.createElement("link")) as HTMLLinkElement;
      link.type = "image/x-icon";
      link.rel = "shortcut icon";
      link.href = faviconPath;
      document.getElementsByTagName("head")[0].appendChild(link);
    };

    setFavicon();
  }, [pathname]);

  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-black",
        inter.className
      )}
    >
      <body className="antialiased max-w-2xl mx-4 mt-4 lg:mx-auto text-base">
        <main className="flex-auto min-w-0 mt-4 flex flex-col px-2 md:px-0">
          <div className="relative w-full">
            <div
              className="absolute inset-0 
              bg-[var(--color-bg-pattern-light)] dark:bg-[var(--color-bg-pattern-dark)] 
              [background-size:16px_16px] opacity-20 -z-10"
            />
            <section className="w-full flex gap-4 justify-start mb-6 p-2">
              <div className="flex flex-col gap-2 justify-center">
                {/* <h2 className="mb-0 text-zinc-100 font-bold">Aditya</h2>*/}
              </div>
            </section>
            {/* <Navbar /> */}
            <div className="my-8">{children}</div>
          </div>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
