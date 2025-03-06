import { GeistMono } from "geist/font/mono";
import AnimatedContent from "../constants/AnimatedContent";

export function SocialLinks() {
  return (
    <div>
      <AnimatedContent
        distance={100}
        direction="horizontal"
        reverse={true}
        delay={0.1}
        config={{ friction: 20, tension: 110 }}
        initialOpacity={0}
        scale={1.03}
        threshold={0.3}
      >
        <div
          className={`md:gap-6 gap-3 py-4 px-4 border rounded-lg border-neutral-200 dark:border-neutral-800 mt-8 ${GeistMono.className} text-sm md:flex md:flex-wrap md:items-start grid grid-cols-2 lg:grid-cols-6 mb-0`}
        >
          <AnimatedContent
            distance={20}
            direction="horizontal"
            delay={0.5}
            config={{ tension: 90, friction: 18 }}
            initialOpacity={0.3}
            scale={1.02}
            threshold={0.1}
          >
            <a
              href="https://x.com/morphinearc"
              target="_blank"
              rel="noreferrer"
              className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors duration-200 underline"
            >
              X
            </a>
          </AnimatedContent>
          <AnimatedContent
            distance={20}
            direction="horizontal"
            delay={0.6}
            config={{ tension: 90, friction: 18 }}
            initialOpacity={0.3}
            scale={1.02}
            threshold={0.1}
          >
            <a
              href="https://myanimelist.net/profile/arx9781"
              target="_blank"
              rel="noreferrer"
              className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors duration-200 underline"
            >
              MyAnimeList
            </a>
          </AnimatedContent>
          <AnimatedContent
            distance={20}
            direction="horizontal"
            delay={0.2}
            config={{ tension: 90, friction: 18 }}
            initialOpacity={0.3}
            scale={1.02}
            threshold={0.1}
          >
            <a
              href="https://instagram.com/arx9781"
              target="_blank"
              rel="noreferrer"
              className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors duration-200 underline"
            >
              Instagram
            </a>
          </AnimatedContent>
          <AnimatedContent
            distance={20}
            direction="horizontal"
            delay={0.4}
            config={{ tension: 90, friction: 18 }}
            initialOpacity={0.3}
            scale={1.02}
            threshold={0.1}
          >
            <a
              href="https://threads.net/@arx9781"
              target="_blank"
              rel="noreferrer"
              className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors duration-200 underline"
            >
              Threads
            </a>
          </AnimatedContent>
          <AnimatedContent
            distance={20}
            direction="horizontal"
            delay={0.3}
            config={{ tension: 90, friction: 18 }}
            initialOpacity={0.3}
            scale={1.02}
            threshold={0.1}
          >
            <a
              href="https://www.facebook.com/arx9781"
              target="_blank"
              rel="noreferrer"
              className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors duration-200 underline"
            >
              Facebook
            </a>
          </AnimatedContent>
          <AnimatedContent
            distance={20}
            direction="horizontal"
            delay={0.6}
            config={{ tension: 90, friction: 18 }}
            initialOpacity={0.3}
            scale={1.02}
            threshold={0.1}
          >
            <a
              href="https://discord.gg/TM6Z2GRf"
              target="_blank"
              rel="noreferrer"
              className="text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 transition-colors duration-200 underline"
            >
              Discord
            </a>
          </AnimatedContent>
        </div>
      </AnimatedContent>
    </div>
  );
}
