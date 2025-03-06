"use client";

import { GeistMono } from "geist/font/mono";
import { Disc3, PauseCircle, DiscAlbum, Music, UserRound } from "lucide-react";
import AnimatedContent from "app/ui/constants/AnimatedContent";
import useSWR from "swr";

export function CurrentlyPlaying() {
  const { data, isLoading } = useSWR(
    "/api/spotify/now-playing?t=${Date.now()}",
    fetcher,
    {
      refreshInterval: 1000,
      revalidateOnFocus: false,
    }
  );
  if (isLoading) return <CurrentlyPlayingSkeleton />;
  return (
    <div className="block relative overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 transition-all duration-300">
      <div className="p-3">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            {data?.isPlaying ? (
              <Disc3 className="w-4 h-4 animate-spin" />
            ) : (
              <PauseCircle className="w-4 h-4" />
            )}
            <span
              className={`text-xs text-neutral-500 tracking-wide ${GeistMono.className}`}
            >
              {data?.isPlaying ? "LIVE" : "OFFLINE"}
            </span>
          </div>
        </div>
        {data?.isPlaying ? (
          <div className="flex items-center space-x-4">
            <div className="relative overflow-hidden rounded-md">
              <img
                className="w-16 h-16 md:w-20 md:h-20 object-cover transform transition-transform duration-300 group-hover:scale-105"
                src={data.albumArt}
                alt={data.album}
              />
            </div>
            <div className="flex-1 min-w-0">
              <a
                href={data.songUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block font-semibold text-neutral-800 dark:text-neutral-200 hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors truncate"
              >
                {data.title}
              </a>
              <p
                className={`text-xs md:text-sm text-neutral-600 dark:text-neutral-400 truncate ${GeistMono.className}`}
              >
                {data.artist}
              </p>
              <p
                className={`text-xs md:text-sm text-neutral-600 dark:text-neutral-400 truncate ${GeistMono.className}`}
              >
                {data.album}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center space-x-3 py-8">
            <Music className="w-6 h-6 text-neutral-400 dark:text-neutral-600" />
            <p
              className={`text-neutral-600 dark:text-neutral-400 font-semibold ${GeistMono.className}`}
            >
              {`Not currently playing (_　_|||)`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export function RecentlyPlayed() {
  const { data, isLoading } = useSWR("/api/spotify/recently-played", fetcher);
  if (isLoading) return <RecentlyPlayedSkeleton />;
  return (
    <div className="space-y-4">
      {data?.map((track: any) => (
        <AnimatedContent
          key={track.played_at}
          distance={20}
          direction="vertical"
          delay={0.1}
          config={{ tension: 90, friction: 18 }}
          initialOpacity={0.3}
          scale={1.02}
          threshold={0.1}
        >
          <a
            href={track.songUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block group relative overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all duration-300"
          >
            <div className="p-3">
              <div className="flex items-center space-x-4">
                <div className="relative overflow-hidden rounded-md flex-shrink-0">
                  <img
                    className="w-16 h-16 md:w-20 md:h-20 object-cover transform transition-transform duration-300 group-hover:scale-105"
                    src={track.albumArt}
                    alt={track.album}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2">
                    {/* <Music className="w-4 h-4 text-neutral-400" /> */}
                    <a
                      href={track.songUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block font-semibold text-neutral-800 dark:text-neutral-200 hover:text-neutral-600 dark:hover:text-neutral-400 transition-colors truncate"
                    >
                      {track.title}
                    </a>
                  </div>
                  <div>
                    {/* <UserRound className="w-4 h-4 text-neutral-400" /> */}
                    <p
                      className={`text-xs md:text-sm text-neutral-600 dark:text-neutral-400 truncate ${GeistMono.className}`}
                    >
                      {track.artist}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 mt-1">
                    {/* <DiscAlbum className="w-4 h-4 text-neutral-400" /> */}
                    <p
                      className={`text-xs md:text-sm text-neutral-600 dark:text-neutral-400 truncate ${GeistMono.className}`}
                    >
                      {track.album}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </AnimatedContent>
      ))}
    </div>
  );
}

// Also update the skeleton to match:
function RecentlyPlayedSkeleton() {
  return (
    <div className="space-y-4">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className="p-4 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50"
        >
          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 rounded-md bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
            <div className="flex-1 space-y-2">
              <div className="h-5 rounded-md bg-neutral-200 dark:bg-neutral-800 animate-pulse w-3/4" />
              <div className="h-4 rounded-md bg-neutral-200 dark:bg-neutral-800 animate-pulse w-1/2" />
              <div className="h-3 rounded-md bg-neutral-200 dark:bg-neutral-800 animate-pulse w-1/3" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function CurrentlyPlayingSkeleton() {
  return (
    <div className="block relative overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50 p-6">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-md bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
        <div className="flex-1 space-y-3">
          <div className="h-5 rounded-md bg-neutral-200 dark:bg-neutral-800 animate-pulse w-3/4" />
          <div className="h-4 rounded-md bg-neutral-200 dark:bg-neutral-800 animate-pulse w-1/2" />
        </div>
      </div>
    </div>
  );
}
