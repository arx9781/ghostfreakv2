import AnimatedContent from "app/ui/constants/AnimatedContent";
import { CurrentlyPlaying } from "app/spotify/components";

export default function NowPlayingSection() {
  return (
    <section className="mb-16">
      <AnimatedContent
        distance={80}
        direction="vertical"
        delay={0.4}
        config={{ tension: 120, friction: 25 }}
        initialOpacity={0}
        scale={1.02}
        threshold={0.3}
      >
        <div className="flex items-center mb-6">
          <h2 className="text-2xl font-bold mr-4">Now Playing</h2>
          <span className="flex-1 h-px bg-neutral-200 dark:bg-neutral-800 mt-[5px]"></span>
        </div>
        <CurrentlyPlaying />
      </AnimatedContent>
    </section>
  );
}
