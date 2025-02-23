'use client'

import useSWR from 'swr'
import AnimatedContent from 'app/components/ui/AnimatedContent'
import { GeistMono } from "geist/font/mono";

export function CurrentlyPlaying() {
  const { data } = useSWR('/api/spotify/now-playing?t=${Date.now()}', fetcher, {
    refreshInterval: 1000,
    revalidateOnFocus: false,
  })

  return (
    <AnimatedContent
      distance={20}
      direction="vertical"
      delay={0.1}
      config={{ tension: 90, friction: 18 }}
      initialOpacity={0.3}
      scale={1.02}
      threshold={0.1}
    >
      <div className="group relative p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-xs hover:shadow-sm transition-shadow">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${data?.isPlaying ? 'bg-green-500' : 'bg-neutral-400'} animate-pulse`} />
            <span className={`text-xs font-medium text-neutral-500 dark:text-neutral-400 tracking-wide ${GeistMono.className}`}>
              {data?.isPlaying ? 'LIVE' : 'OFFLINE'}
            </span>
          </div>
          <div className="flex space-x-1.5">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-1 h-1 rounded-full bg-neutral-400 dark:bg-neutral-600"
              />
            ))}
          </div>
        </div>

        {data ? (
          data?.isPlaying ? (
            <div className="flex items-center space-x-4">
              <div className="relative overflow-hidden rounded-lg shadow-sm">
                <img
                  className="w-14 h-14 object-cover transform transition-transform duration-200 hover:scale-105"
                  src={data.albumArt}
                  alt={data.album}
                />
              </div>
              <div className="flex-1 min-w-0">
                <a
                  href={data.songUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block font-medium truncate hover:text-[var(--color-accent)] transition-colors text-sm ${GeistMono.className}`}
                >
                  {data.title}
                </a>
                <p className={`text-sm truncate text-neutral-500 dark:text-neutral-400 ${GeistMono.className}`}>
                  {data.artist}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center space-x-2 py-4">
              <svg
                className="w-6 h-6 text-neutral-400 dark:text-neutral-600"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  d="M18.25 11C18.25 15 15 16.5 12 16.5C9 16.5 5.75 15 5.75 11"
                />
              </svg>
              <p className={`text-neutral-600 dark:text-neutral-400 italic`}>
                No active playback
              </p>
            </div>
          )
        ) : (
          <CurrentlyPlayingSkeleton />
        )}
      </div>
    </AnimatedContent>
  )
}

export function RecentlyPlayed() {
  const { data } = useSWR('/api/spotify/recently-played', fetcher)

  return (
    <AnimatedContent
      distance={50}
      direction="vertical"
      delay={0.3}
      config={{ tension: 110, friction: 20 }}
      initialOpacity={0}
      scale={1.03}
      threshold={0.3}
    >
      <div className="relative p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-xs overflow-hidden">
        <h2 className={`mb-4 text-sm font-medium text-neutral-500 dark:text-neutral-400 tracking-wide`}>
          RECENTLY PLAYED
        </h2>

        {data ? (
          <div className="space-y-4">
            {data?.map((track: any, index: number) => (
              <div
                key={`${track.songUrl}-${track.playedAt}`}
                className="flex items-center space-x-3 p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800/50 transition-colors"
              >
                <span className={`text-xs text-neutral-400 dark:text-neutral-600 ${GeistMono.className}`}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <img
                  className="w-10 h-10 rounded-md shadow-sm"
                  src={track.albumArt}
                  alt={track.album}
                />
                <div className="flex-1 min-w-0">
                  <a
                    href={track.songUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block font-medium truncate hover:text-[var(--color-accent)] transition-colors text-sm`}
                  >
                    {track.title}
                  </a>
                  <p className={`text-sm truncate text-neutral-500 dark:text-neutral-400`}>
                    {track.artist}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <RecentlyPlayedSkeleton />
        )}
      </div>
    </AnimatedContent>
  )
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

function CurrentlyPlayingSkeleton() {
  return (
    <div className="flex items-center space-x-4">
      <div className="w-14 h-14 rounded-lg bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
      <div className="flex-1 space-y-2">
        <div className="h-4 rounded-md bg-neutral-200 dark:bg-neutral-800 animate-pulse w-3/4" />
        <div className="h-3 rounded-md bg-neutral-200 dark:bg-neutral-800 animate-pulse w-1/2" />
      </div>
    </div>
  )
}

function RecentlyPlayedSkeleton() {
  return (
    <div className="space-y-2">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex items-center space-x-3 p-2">
          <div className="w-10 h-10 rounded-md bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
          <div className="flex-1 space-y-2">
            <div className="h-4 rounded-md bg-neutral-200 dark:bg-neutral-800 animate-pulse w-2/3" />
            <div className="h-3 rounded-md bg-neutral-200 dark:bg-neutral-800 animate-pulse w-1/2" />
          </div>
        </div>
      ))}
    </div>
  )
}