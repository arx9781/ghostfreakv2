"use client";

import { useEffect, useState } from "react";

import "./global.css";

import { GeistSans } from "geist/font/sans";

import { usePathname } from "next/navigation";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import Footer from "./components/footer";
import cx from "clsx";
import { Preloader } from "./components/ui/Preloader";
import ScrollProgressBar from "./components/ScrollProgressBar";
import { Navbar } from "./components/nav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [faviconIndex, setFaviconIndex] = useState(0);
  const faviconMap = {
    "/": ["/win-home.png", "/win-home-alt.png"],
    "/blog": ["/win-docs.png", "/win-docs-alt.png"],
    "/spotify": ["/win-music.png", "/win-music-alt.png"],
  };

  useEffect(() => {
    let currentFaviconPair = faviconMap["/"];

    if (pathname.startsWith("/blog")) {
      currentFaviconPair = faviconMap["/blog"];
    } else if (pathname.startsWith("/spotify")) {
      currentFaviconPair = faviconMap["/spotify"];
    }

    const intervalId = setInterval(() => {
      setFaviconIndex(
        (prevIndex) => (prevIndex + 1) % currentFaviconPair.length
      );

      const link = (document.querySelector("link[rel*='icon']") ||
        document.createElement("link")) as HTMLLinkElement;
      link.type = "image/x-icon";
      link.rel = "shortcut icon";
      link.href = currentFaviconPair[faviconIndex];
      document.getElementsByTagName("head")[0].appendChild(link);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [pathname, faviconIndex]);

  return (
    <>
      <html
        lang="en"
        className={cx(
          "text-black bg-white dark:text-white dark:bg-black",
          GeistSans.className
        )}
      >
        <body className="antialiased max-w-3xl mx-4 mt-4 lg:mx-auto text-base flex flex-col min-h-screen">
          <Preloader>
            <div className="fixed top-0 left-0 right-0 w-full z-10 pointer-events-none">
              <div className="feathered-blur bg-white/30 dark:bg-black/30 backdrop-blur-lg h-20 w-full border-b border-gray-100/20 dark:border-gray-800/20">
                {/* Optional subtle gradient overlay for enhanced blur effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent dark:from-white/5 dark:to-transparent"></div>
              </div>
            </div>
            <main className="flex-auto min-w-0 mt-12 flex flex-col px-2 md:px-0">
              <div className="relative w-full">
                <div
                  className="absolute inset-0 
                bg-[var(--color-bg-pattern-light)] dark:bg-[var(--color-bg-pattern-dark)] 
                [background-size:16px_16px] opacity-20 -z-10"
                />
                <section className="w-full flex gap-4 justify-startp-2">
                  <div className="flex flex-col gap-2 justify-center"></div>
                </section>
                <div className="my-8">{children}</div>
              </div>
              <Footer />
              <Analytics />
              <SpeedInsights />
              <Navbar />
              <ScrollProgressBar />
            </main>
          </Preloader>
        </body>
      </html>
    </>
  );
}
