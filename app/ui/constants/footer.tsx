import React, { useState, useEffect } from "react";
import AnimatedContent from "./AnimatedContent";

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
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentTime.toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  return (
    <footer className="mt-auto pt-32 pb-16 md:pb-8">
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
          {/* Desktop view */}
          <div className="hidden md:flex md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-neutral-600 dark:text-neutral-300 text-sm">
                  All systems normal
                </span>
              </div>
              <p className="text-neutral-500 text-sm">
                © {new Date().getFullYear()}. MIT License.
              </p>
            </div>
            <div className="text-neutral-500 text-sm font-semibold">
              {formattedTime}
            </div>
          </div>

          {/* Mobile view */}
          <div className="flex md:hidden flex-col space-y-4">
            {/* First row with system status and time */}
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-neutral-600 dark:text-neutral-300 text-sm">
                  All systems normal
                </span>
              </div>
              <div className="text-neutral-500 text-sm font-semibold">
                {formattedTime}
              </div>
            </div>

            {/* Second row with copyright */}
            <p className="text-neutral-500 text-sm">
              © {new Date().getFullYear()}. MIT License.
            </p>
          </div>
        </div>
      </AnimatedContent>
    </footer>
  );
}
