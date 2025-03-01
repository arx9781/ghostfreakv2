import AnimatedContent from "app/components/ui/AnimatedContent";
import { BackButton } from "app/components/back-button";

export default function Guestbook() {
  return (
    <div className="relative min-h-[calc(100vh-140px)] py-8 md:py-16">
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
          A guestbook section where you can leave your thoughts, messages and/or
          a feedback regarding anything.
        </p>
      </AnimatedContent>
    </div>
  );
}
