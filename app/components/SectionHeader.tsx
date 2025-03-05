const SectionHeader = ({ title }: { title: string }) => {
  return (
    <div className="flex items-center space-x-4 mb-8">
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
      <div className="flex-grow h-px bg-gradient-to-r from-neutral-200 dark:from-neutral-800 to-transparent" />
    </div>
  );
};

export default SectionHeader;
