import AnimatedContent from "app/ui/constants/AnimatedContent";
import { SocialLinks } from "../modules/SocialLinks";

export default function HeroSection() {
  return (
    <section className="mb-16">
      <AnimatedContent
        distance={150}
        direction="horizontal"
        reverse={true}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0.2}
        scale={1.1}
        threshold={0.2}
      >
        <div className="py-4 w-full">
          <div className="flex items-center gap-4 mb-4">
            <span className="dark:text-white text-black font-bold md:text-4xl text-[28px] block">
              Aditya Roychoudhary
            </span>
            <div className="relative group w-12 h-12 rounded-full overflow-hidden">
              <img
                className="object-cover md:w-full md:h-full grayscale group-hover:grayscale-0 transition-all duration-300 cursor-crosshair"
                src="https://github.com/arx9781.png"
                alt="a circular profile picture"
              />
            </div>
          </div>
          <p className="text-base text-justify md:text-left md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
            — crafts design interfaces that merge human-centered metaphors with
            scalable systems. His work blends neo-brutalism with timeless
            minimalism, all within a refined monochromatic palette.
          </p>
          <SocialLinks />
        </div>
      </AnimatedContent>
    </section>
  );
}
