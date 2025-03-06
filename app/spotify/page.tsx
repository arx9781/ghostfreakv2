import { CurrentlyPlaying, RecentlyPlayed } from "./components";
import { BackButton } from "app/ui/components/back-button";
import { GeistMono } from "geist/font/mono";
import AnimatedContent from "app/ui/constants/AnimatedContent";

export const metadata = {
  title: "Spotify Stats",
  description:
    "Explore my music taste through currently playing tracks and listening history.",
};

export default function SpotifyPage() {
  return (
    <div className="min-h-screen max-w-4xl mx-auto py-8 md:py-16">
      <AnimatedContent
        distance={20}
        direction="horizontal"
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0.2}
        scale={1.05}
        threshold={0.2}
      >
        <div className="flex items-center mb-8">
          <BackButton />
        </div>

        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium mb-12 max-w-2xl">
          A real-time window into my musical preferences. Track what I'm
          currently listening to and explore my recently played songs.
        </p>
      </AnimatedContent>

      <div className="space-y-12">
        <section>
          <AnimatedContent
            distance={40}
            direction="vertical"
            delay={0.2}
            config={{ tension: 100, friction: 15 }}
            initialOpacity={0}
            scale={1.05}
            threshold={0.1}
          >
            <div className="flex items-center mb-6">
              <h2 className="text-2xl font-bold mr-4">Now Playing</h2>
              <span className="flex-1 h-px bg-neutral-200 dark:bg-neutral-800 mt-[5px]"></span>
            </div>
            <div>
              <CurrentlyPlaying />
            </div>
          </AnimatedContent>
        </section>

        <section>
          <AnimatedContent
            distance={60}
            direction="vertical"
            delay={0.3}
            config={{ tension: 110, friction: 20 }}
            initialOpacity={0}
            scale={1.03}
            threshold={0.2}
          >
            <div className="flex items-center mb-6">
              <h2 className="text-2xl font-bold mr-4">History</h2>
              <span className="flex-1 h-px bg-neutral-200 dark:bg-neutral-800 mt-[5px]"></span>
            </div>
            <div>
              <RecentlyPlayed />
            </div>
          </AnimatedContent>
        </section>
      </div>
    </div>
  );
}
