"use client";

import { GeistMono } from "geist/font/mono";
import { Disc3, PauseCircle, Clock, Music } from "lucide-react";

import AnimatedContent from "app/components/ui/AnimatedContent";
import useSWR from "swr";

export function CurrentlyPlaying() {
  const { data } = useSWR("/api/spotify/now-playing?t=${Date.now()}", fetcher, {
    refreshInterval: 1000,
    revalidateOnFocus: false,
  });

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
      <div className="group relative p-4 md:p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <div
              className={`w-2 h-2 rounded-full ${
                data?.isPlaying ? "bg-green-500" : "bg-neutral-400"
              } animate-pulse`}
            />
            <span
              className={`text-xs font-medium text-neutral-500 dark:text-neutral-400 tracking-wide ${GeistMono.className}`}
            >
              {data?.isPlaying ? "LIVE" : "OFFLINE"}
            </span>
          </div>
          <div className="flex space-x-1.5">
            <span>
              {data?.isPlaying ? (
                <Disc3 className="w-5 h-5 text-neutral-400 dark:text-neutral-600 animate-spin" />
              ) : (
                <PauseCircle className="w-5 h-5 text-neutral-400 dark:text-neutral-600" />
              )}
            </span>
          </div>
        </div>

        {data ? (
          data?.isPlaying ? (
            <div className="flex items-center space-x-3">
              <div className="relative overflow-hidden rounded-md">
                <img
                  className="w-12 h-12 md:w-14 md:h-14 object-cover transform transition-transform duration-300 group-hover:scale-105"
                  src={data.albumArt}
                  alt={data.album}
                />
              </div>
              <div className="flex-1 min-w-0 flex flex-col">
                <a
                  href={data.songUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block font-semibold truncate hover:text-green-500 transition-colors text-xs md:text-base`}
                >
                  {data.title}
                </a>
                <p
                  className={`text-xs truncate text-neutral-600 dark:text-neutral-400 ${GeistMono.className}`}
                >
                  {data.artist}
                </p>
                <p
                  className={`text-xs truncate text-neutral-500 dark:text-neutral-500 ${GeistMono.className}`}
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
                {`Nothing Currently Playing (_　_|||)`}
              </p>
            </div>
          )
        ) : (
          <CurrentlyPlayingSkeleton />
        )}
      </div>
    </AnimatedContent>
  );
}

export function RecentlyPlayed() {
  const { data } = useSWR("/api/spotify/recently-played", fetcher);

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
      <div className="relative p-1 md:p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 transition-all duration-300">
        <div className="flex items-center mb-1 p-3 md:p-6">
          <h2
            className={`text-sm font-medium text-neutral-500 dark:text-neutral-400 tracking-wide ${GeistMono.className}`}
          >
            RECENTLY PLAYED
          </h2>
          <span className="flex-1"></span>
          <Clock className="w-5 h-5 text-neutral-400 dark:text-neutral-600" />
        </div>

        {data ? (
          <div className="space-y-1">
            {data?.map((track: any, index: number) => (
              <div
                key={`${track.songUrl}-${track.playedAt}`}
                className="flex items-center space-y-6 space-x-3 p-3 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800/50 transition-all duration-200"
              >
                <span
                  className={`text-xs text-neutral-400 dark:text-neutral-600 font-bold ${GeistMono.className}`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <img
                  className="w-12 h-12 md:w-14 md:h-14 rounded-md"
                  src={track.albumArt}
                  alt={track.album}
                />
                <div className="flex-1 min-w-0 flex flex-col">
                  <a
                    href={track.songUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block font-medium truncate hover:text-green-500 transition-colors text-xs md:text-base`}
                  >
                    {track.title}
                  </a>

                  <p
                    className={`text-xs truncate text-neutral-500 dark:text-neutral-400 ${GeistMono.className}`}
                  >
                    {track.artist}
                  </p>
                  <p
                    className={`text-xs truncate text-neutral-500 dark:text-neutral-500 ${GeistMono.className}`}
                  >
                    {track.album}
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
  );
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

function CurrentlyPlayingSkeleton() {
  return (
    <div className="flex items-center space-x-4 p-2">
      <div className="w-16 h-16 md:w-20 md:h-20 rounded-lg bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
      <div className="flex-1 space-y-3">
        <div className="h-5 rounded-md bg-neutral-200 dark:bg-neutral-800 animate-pulse w-3/4" />
        <div className="h-4 rounded-md bg-neutral-200 dark:bg-neutral-800 animate-pulse w-1/2" />
        <div className="h-3 rounded-md bg-neutral-200 dark:bg-neutral-800 animate-pulse w-2/5" />
      </div>
    </div>
  );
}

function RecentlyPlayedSkeleton() {
  return (
    <div className="space-y-3">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex items-center space-x-3 p-3">
          <div className="w-4 text-neutral-300 dark:text-neutral-700">
            {String(i + 1).padStart(2, "0")}
          </div>
          <div className="w-12 h-12 rounded-md bg-neutral-200 dark:bg-neutral-800 animate-pulse" />
          <div className="flex-1 space-y-2">
            <div className="h-4 rounded-md bg-neutral-200 dark:bg-neutral-800 animate-pulse w-2/3" />
            <div className="h-3 rounded-md bg-neutral-200 dark:bg-neutral-800 animate-pulse w-1/2" />
          </div>
        </div>
      ))}
    </div>
  );
}
