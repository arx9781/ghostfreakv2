import { JetBrains_Mono } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });

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
    <footer className="mb-16">
      <div className="flex justify-between items-start md:items-center mt-8 gap-4 text-sm md:flex-row flex-col-reverse">
        {/* <div className="flex items-center space-x-2">
          <span
            className={`text-neutral-600 dark:text-neutral-300 ${jetBrainsMono.className} border-neutral-800 rounded-md border-1 p-1`}
          >
            {new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: false,
            })}
          </span>
        </div> */}

        <p className="text-neutral-600 dark:text-neutral-300 textt-sm md:text-base">
          © {new Date().getFullYear()} MIT Licensed
        </p>
        <div className="flex items-center space-x-2">
          <div className="h-3 w-3 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-neutral-600 dark:text-neutral-300">
            All systems normal
          </span>
        </div>
      </div>
    </footer>
  );
}
