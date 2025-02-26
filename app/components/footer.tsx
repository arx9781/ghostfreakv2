import { GeistMono } from "geist/font/mono";
import AnimatedContent from "./ui/AnimatedContent";

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="mt-auto">
      <AnimatedContent
        distance={20}
        direction="vertical"
        delay={0.1}
        config={{ tension: 90, friction: 18 }}
        initialOpacity={0.3}
        scale={1.02}
        threshold={0.1}
      >
        <div className="max-w-3xl mx-0 md:mx-4 lg:mx-auto">
          <div className="flex md:flex-row justify-between items-center pt-10 pb-8 gap-4">
            <AnimatedContent
              distance={30}
              direction="horizontal"
              delay={0.2}
              config={{ tension: 100, friction: 20 }}
              initialOpacity={0.2}
              scale={1.05}
              threshold={0.2}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center space-x-0 md:space-x-2 md:order-1">
                <div className="flex items-center space-x-1">
                  <div className="h-3 w-3 rounded-full bg-blue-500 animate-pulse mr-0.5" />
                  <span className="text-neutral-600 dark:text-neutral-300 text-sm">
                    All systems normal
                  </span>
                </div>
                <p className="text-neutral-500 text-sm mt-2 md:mt-0">
                  © {new Date().getFullYear()} Aditya Roychoudhary. MIT License.
                </p>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </AnimatedContent>
    </footer>
  );
}
