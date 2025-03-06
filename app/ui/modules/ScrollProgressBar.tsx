"use client";

import { useState, useEffect } from "react";
import { GeistMono } from "geist/font/mono";

const ScrollProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = document.documentElement.scrollTop;
      const percentage = (scrolled / scrollHeight) * 100;
      setScrollPercentage(percentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-1/4 left-1/15 h-1/2 w-8 hidden md:block">
      <div className="relative h-full">
        {Array.from({ length: 11 }).map((_, index) => {
          const linePercentage = index * 10;
          const isHighlighted =
            scrollPercentage >= linePercentage &&
            scrollPercentage < linePercentage + 10;

          return (
            <div
              key={index}
              className={`absolute right-2 h-0.5 w-2 transition-all duration-75 ease-in-out ${
                isHighlighted
                  ? "bg-blue-500"
                  : "bg-neutral-400 dark:bg-neutral-600"
              }`}
              style={{ top: `${linePercentage}%` }}
            />
          );
        })}
        <div
          className={`absolute right-9 -translate-y-1/2 text-sm font-normal px-2 py-1 rounded ${GeistMono.className}`}
          style={{ top: `${scrollPercentage}%` }}
        >
          {scrollPercentage.toFixed(0)}%
        </div>
        <div className="w-1 bg-neutral-200 dark:bg-neutral-800 absolute left-0 top-0 h-full rounded-full">
          <div
            className="bg-neutral-900 dark:bg-neutral-100 h-0 w-full rounded-full"
            style={{ height: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ScrollProgressBar;
