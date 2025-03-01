export default function SectionHeader({ title }) {
  return (
    <div className="flex items-center mb-8">
      <h1 className="text-3xl font-bold mr-4">{title}</h1>
      <span className="flex-1 h-px bg-neutral-200 dark:bg-neutral-800 mt-[5px]"></span>
    </div>
  );
}
