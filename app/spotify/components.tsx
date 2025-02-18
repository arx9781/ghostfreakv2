'use client'

import useSWR from 'swr'

export function CurrentlyPlaying() {
  const { data } = useSWR('/api/spotify/now-playing', fetcher)

  return (
    <div className="p-6 bg-neutral-100/50 dark:bg-neutral-900/50 rounded-xl border border-neutral-200 dark:border-neutral-800 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium">Now Playing</h2>
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
                className="font-medium hover:underline"
              >
                {data.title}
              </a>
              <p className="text-neutral-600 dark:text-neutral-400">
                {data.artist}
              </p>
            </div>
          </div>
        ) : (
          <p className="text-neutral-600 dark:text-neutral-400">
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
    <div className="p-4 border rounded-lg dark:border-neutral-800 
      hover:border-[var(--color-secondary)] transition-colors">
      <h2 className="mb-4 text-xl font-semibold">Recently Played</h2>
      {data ? (
        data?.map((track: any, index: number) => (
          <div key={track.songUrl} className="flex items-center space-x-4 py-2">
            <span className="text-[var(--color-accent)] font-medium">
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
                className="font-medium hover:underline"
              >
                {track.title}
              </a>
              <p className="text-neutral-600 dark:text-neutral-400">
                {track.artist}
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-500">
                Played at: {track.playedAt}
              </p>
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
          <span className="text-neutral-600 dark:text-neutral-400">{i + 1}</span>
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