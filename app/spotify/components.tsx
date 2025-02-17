'use client'

import useSWR from 'swr'

export function CurrentlyPlaying() {
  const { data } = useSWR('/api/spotify/now-playing', fetcher)

  return (
    <div className="p-4 border rounded-lg dark:border-neutral-800">
      <h2 className="mb-4 text-xl font-semibold">Currently Playing</h2>
      {data?.isPlaying ? (
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
      )}
    </div>
  )
}

export function TopTracks() {
  const { data } = useSWR('/api/spotify/top-tracks', fetcher)

  return (
    <div className="p-4 border rounded-lg dark:border-neutral-800">
      <h2 className="mb-4 text-xl font-semibold">Top Tracks</h2>
      {data?.tracks?.map((track: any, index: number) => (
        <div key={track.url} className="flex items-center justify-between py-2">
          <div className="flex items-center space-x-4">
            <span className="text-neutral-600 dark:text-neutral-400">
              {index + 1}
            </span>
            <img
              className="w-12 h-12 rounded"
              src={track.albumImage}
              alt={track.album}
            />
            <div>
              <a
                href={track.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:underline"
              >
                {track.title}
              </a>
              <p className="text-neutral-600 dark:text-neutral-400">
                {track.artist}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export function RecentlyPlayed() {
  const { data } = useSWR('/api/spotify/recently-played', fetcher)

  return (
    <div className="p-4 border rounded-lg dark:border-neutral-800">
      <h2 className="mb-4 text-xl font-semibold">Recently Played</h2>
      {data?.map((track: any, index: number) => (
        <div key={track.songUrl} className="flex items-center space-x-4 py-2">
          <span className="text-neutral-600 dark:text-neutral-400">
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
      ))}
    </div>
  )
}

const fetcher = (url: string) => fetch(url).then((res) => res.json())