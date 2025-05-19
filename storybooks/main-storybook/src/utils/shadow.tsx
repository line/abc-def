import React from "react";

interface ShadowItem {
  name: string;
}

const shadows: ShadowItem[] = [
  { name: 'shadow-sm' },
  { name: 'shadow' },
  { name: 'shadow-md' },
  { name: 'shadow-lg' },
  { name: 'shadow-xl' },
  { name: 'shadow-2xl' },
  { name: 'shadow-inner' },
  { name: 'shadow-none' },
];

const gridClass = "grid grid-cols-8 gap-4 px-4 py-7 bg-secondary";
const itemClass = "relative flex flex-col items-center justify-center space-y-1";
const contentClass = "w-full aspect-square rounded-lg bg-primary";

const Shadow: React.FC = () => (
  <div className={gridClass}>
    {shadows.map(({ name }, index) => (
      <div key={index} className={itemClass}>
        <div className={`${contentClass} ${name}`}></div>
        <strong className="!text-base-strong !text-neutral-tertiary">{name}</strong>
      </div>
    ))}
  </div>
);

export default Shadow;
