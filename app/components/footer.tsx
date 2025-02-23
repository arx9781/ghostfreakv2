import Link from "next/link";
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
      <div className="max-w-3xl mx-4 lg:mx-auto">
        <div className="flex md:flex-row justify-between items-center py-8 gap-4">
          <div className="flex flex-col md:flex-row items-start md:items-center space-x-0 md:space-x-2 md:order-1">
            <div className="flex items-center space-x-2">
              <div className="h-3 w-3 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-neutral-600 dark:text-neutral-300 text-sm">
                All systems normal
              </span>
            </div>
            <p className="text-neutral-500 text-sm mt-2 md:mt-0">
              © {new Date().getFullYear()} Aditya Roychoudhary. MIT License.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
