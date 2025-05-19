import React from "react";

interface OpacityItem {
  name: string;
}

const opacities: OpacityItem[] = [
  { name: 'opacity-0' },
  { name: 'opacity-10' },
  { name: 'opacity-20' },
  { name: 'opacity-30' },
  { name: 'opacity-40' },
  { name: 'opacity-50' },
  { name: 'opacity-60' },
  { name: 'opacity-70' },
  { name: 'opacity-80' },
  { name: 'opacity-90' },
  { name: 'opacity-100' },
];

const gridClass = "grid grid-cols-8 gap-4 px-4 py-7 bg-secondary";
const itemClass = "relative flex flex-col items-center justify-center";
const backgroundClass = "z-0 absolute top-0 left-0 w-full aspect-square rounded-lg";
const contentClass = "z-1 relative w-full aspect-square rounded-lg bg-primary";

const Opacity: React.FC = () => (
  <div className={gridClass}>
    {opacities.map(({ name }, index) => (
      <div key={index} className={itemClass}>
        <div
          className={backgroundClass}
          style={{
            background:
              "repeating-linear-gradient(-45deg, var(--bg-primary), var(--bg-primary) 13px, var(--bg-neutral-tertiary) 13px, var(--bg-neutral-tertiary) 14px)",
          }}
        ></div>
        <div className={`${contentClass} ${name}`}></div>
        <strong className="!text-base-strong !text-neutral-tertiary mt-1">{name}</strong>
      </div>
    ))}
  </div>
);

export default Opacity;
