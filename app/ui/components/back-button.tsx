import Link from "next/link";

export function BackButton() {
  return (
    <Link
      href="/"
      className={`flex items-center text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 group transition-colors font-bold mb-8`}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        className="mr-1 group-hover:-translate-x-0.5 transition-transform"
      >
        <path
          fill="currentColor"
          d="M7.104 3.528a.5.5 0 0 1 .707 0l-4 4 4-4a.5.5 0 1 1-.707.707L3.911 7.5H12.5a.5.5 0 0 1 0 1H3.914l3.193 3.195a.5.5 0 1 1-.707.707l-4-4a.5.5 0 0 1 0-.707l4-4z"
        />
      </svg>
      Back
    </Link>
  );
}
