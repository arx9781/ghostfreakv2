'use client'

import useSWR from 'swr'
import { JetBrains_Mono } from 'next/font/google'

const jetBrainsMono = JetBrains_Mono({ subsets: ['latin'] })

export function CurrentlyPlaying() {
  const { data } = useSWR('/api/spotify/now-playing', fetcher)

  return (
    <div className="p-6 bg-neutral-100/50 dark:bg-neutral-900/50 rounded-xl border border-neutral-200 dark:border-neutral-800 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          {/* <h2 className="text-lg font-medium">Now Playing</h2> */}
          {data?.isPlaying ? (
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <div>
                <p className='text-sm italic font-light text-green-500'>listening to</p>
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 rounded-full bg-neutral-400 animate-pulse" />
              <svg width="24" height="24" viewBox="0 0 24 24" className="text-neutral-400 w-4 h-4">
                <line x1="4" y1="12" x2="20" y2="12" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
          )}
        </div>
        <div className="flex space-x-2">
          <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
          <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse delay-100" />
          <div className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse delay-200" />
        </div>
      </div>
      {data ? (
        data?.isPlaying ? (
          <div className="flex items-center space-x-4">
            <img
              className="w-16 h-16 rounded"
              src={data.albumArt}
              alt={data.album}
            />
            <div>
              <a
                href={data.songUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-medium hover:underline ${jetBrainsMono.className}`}
              >
                {data.title}
              </a>
              <p className={`text-neutral-600 dark:text-neutral-400`}>
                {data.artist}
              </p>
            </div>
          </div>
        ) : (
          <p className="text-neutral-600 dark:text-neutral-400 italic">
            Not currently playing
          </p>
        )
      ) : (
        <CurrentlyPlayingSkeleton />
      )}
    </div>
  )
}

export function RecentlyPlayed() {
  const { data } = useSWR('/api/spotify/recently-played', fetcher)

  return (
    <div className="transition-all p-6 bg-neutral-100/50 dark:bg-neutral-900/50 rounded-xl border border-neutral-200 dark:border-neutral-800 backdrop-blur-sm">
      <h2 className={`mb-4 text-xl font-semibold text-neutral-600 dark:text-neutral-400 border-b-1 border-neutral-200 dark:border-neutral-800 pb-2`}>
        Recently Played
      </h2>
      {data ? (
        data?.map((track: any, index: number) => (
          <div key={track.songUrl} className="flex items-center space-x-4 py-4">
            <span className={`text-[var(--color-accent)] font-medium ${jetBrainsMono.className}`}>
              {index + 1}
            </span>
            <img
              className="w-12 h-12 rounded"
              src={track.albumArt}
              alt={track.album}
            />
            <div className="flex-1">
              <a
                href={track.songUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-medium hover:underline ${jetBrainsMono.className}`}
              >
                {track.title}
              </a>
              <p className={`text-neutral-600 dark:text-neutral-400 ${jetBrainsMono.className}`}>
                {track.artist}
              </p>
              {/* <p className={`text-sm text-neutral-500 dark:text-neutral-500 ${jetBrainsMono.className}`}>
                {track.playedAt}
              </p> */}
            </div>
          </div>
        ))
      ) : (
        <RecentlyPlayedSkeleton />
      )}
    </div>
  )
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())

function CurrentlyPlayingSkeleton() {
  return (
    <div className="flex items-center space-x-4">
      <div className="w-16 h-16 rounded 
        bg-gradient-to-r from-neutral-200/50 to-neutral-300/50 
        dark:from-neutral-800/50 dark:to-neutral-700/50 
        animate-pulse" />
      <div>
        <div className="w-48 h-4 rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse mb-1"></div>
        <div className="w-32 h-3 rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse"></div>
      </div>
    </div>
  )
}

function RecentlyPlayedSkeleton() {
  return (
    <div className="space-y-2">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex items-center space-x-4 py-2">
          <span className={`text-neutral-600 dark:text-neutral-400 ${jetBrainsMono.className}`}>
            {i + 1}
          </span>
          <div className="w-12 h-12 rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse"></div>
          <div className="flex-1">
            <div className="w-40 h-4 rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse mb-1"></div>
            <div className="w-24 h-3 rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse"></div>
            <div className="w-32 h-3 rounded bg-neutral-200 dark:bg-neutral-800 animate-pulse mt-1"></div>
          </div>
        </div>
      ))}
    </div>
  )
}