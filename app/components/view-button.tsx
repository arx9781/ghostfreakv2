export function ViewButton({ children }) {
  return (
    <button
      className={`relative mt-1 inline-flex items-center justify-center px-4 py-2 leading-5 rounded-md border border-neutral-200 dark:border-neutral-800 text-sm font-semibold text-neutral-400 cursor-pointer hover:translate-x-1 transition-all duration-200 ease-in-out hover:text-neutral-800 dark:hover:text-neutral-200`}
    >
      <span className="relative z-10">{children}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 ml-2 transition-all duration-300 group-hover:translate-x-1"
      >
        <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
      </svg>
    </button>
  );
}
