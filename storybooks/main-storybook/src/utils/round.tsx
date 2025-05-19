import React from "react";

interface RoundItem {
  name: string;
  size: string;
}

const rounds: RoundItem[] = [
  { name: 'rounded-0', size: '0px' },
  { name: 'rounded-4', size: '4px' },
  { name: 'rounded-6', size: '6px' },
  { name: 'rounded-8', size: '8px' },
  { name: 'rounded-12', size: '12px' },
  { name: 'rounded-16', size: '16px' },
  { name: 'rounded-24', size: '24px' },
  { name: 'rounded-full', size: '999px' },
];

const gridClass = "grid grid-cols-8 gap-4 py-4";
const itemClass = "flex flex-col items-center justify-center space-x-1 aspect-square bg-neutral-tertiary";

const Round: React.FC = () => (
  <div className={gridClass}>
    {rounds.map(({ name, size }, index) => (
      <div key={index} className={`${itemClass} ${name}`}>
        <strong className="!text-base-strong !text-neutral-tertiary">{name}</strong>
        <span className="!text-base-normal !text-neutral-tertiary">({size})</span>
      </div>
    ))}
  </div>
);

export default Round;
