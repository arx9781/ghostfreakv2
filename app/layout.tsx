"use client"

import { useEffect } from 'react';
import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { usePathname } from 'next/navigation';

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();

  useEffect(() => {
    const setFavicon = () => {
      let faviconPath = '/win-home.png'; // Default

      if (pathname.startsWith('/blog')) {
        faviconPath = '/win-docs.png';
      } else if (pathname.startsWith('/spotify')) {
        faviconPath = '/win-music.png';
      }

      const link = (document.querySelector("link[rel*='icon']") || document.createElement('link')) as HTMLLinkElement;
      link.type = 'image/x-icon';
      link.rel = 'shortcut icon';
      link.href = faviconPath;
      document.getElementsByTagName('head')[0].appendChild(link);
    };

    setFavicon();
  }, [pathname]);

  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-2xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <div className="relative">
            <div className="absolute inset-0 
              bg-[var(--color-bg-pattern-light)] dark:bg-[var(--color-bg-pattern-dark)] 
              [background-size:16px_16px] opacity-20 -z-10" />
            <Navbar />
            {children}
          </div>
          {/* <Footer /> */}
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
