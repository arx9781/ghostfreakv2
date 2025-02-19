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
      <body className="antialiased max-w-2xl mx-4 mt-4 lg:mx-auto text-base">
        <main className="flex-auto min-w-0 mt-4 flex flex-col px-2 md:px-0">
          <div className="relative w-full">
            <div className="absolute inset-0 
              bg-[var(--color-bg-pattern-light)] dark:bg-[var(--color-bg-pattern-dark)] 
              [background-size:16px_16px] opacity-20 -z-10" />
              <section className="w-full flex gap-4 justify-start mb-6 p-2">
            <div>
              <img
                src="https://avatars.githubusercontent.com/u/68690233?s=100&v=4"
                alt="avatar"
                className="w-12 h-12 rounded-full shadow-lg grayscale hover:grayscale-0 duration-300"
              />
            </div>
            <div className="flex flex-col gap-2 justify-center">
              {/* <h2 className="mb-0 text-zinc-100 font-bold">Aditya</h2>*/}
            </div>
          </section>
            <Navbar />
            <div className='my-8'>
            {children}
            </div>
          </div>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}