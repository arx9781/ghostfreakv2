"use client";

import { useState, useEffect } from "react";

export function Preloader({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Attempt to detect when the page is "ready"
    const checkReadyState = () => {
      if (document.readyState === "complete") {
        // Give a small delay to ensure all resources are loaded
        setTimeout(() => {
          setIsFading(true);
        }, 300);
      }
    };

    // Initial check
    checkReadyState();

    // Listen for changes in document ready state
    document.addEventListener("readystatechange", checkReadyState);

    return () => {
      document.removeEventListener("readystatechange", checkReadyState);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <div
          className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white dark:bg-black z-[9999] transition-opacity duration-500 ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
          onTransitionEnd={() => {
            if (isFading) {
              setIsLoading(false);
            }
          }}
        >
          <div className="flex space-x-3">
            <div className="w-3 h-3 bg-neutral-900 dark:bg-neutral-100 rounded-full animate-bounce delay-0"></div>
            <div className="w-3 h-3 bg-neutral-900 dark:bg-neutral-100 rounded-full animate-bounce delay-100"></div>
            <div className="w-3 h-3 bg-neutral-900 dark:bg-neutral-100 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>
      ) : (
        children
      )}
    </>
  );
}
