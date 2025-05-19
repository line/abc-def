import React from "react";

interface DescriptionProps {
  children: React.ReactNode;
}

const Description: React.FC<DescriptionProps> = ({ children }) => {
  return <p className="!text-xlarge-normal !text-neutral-tertiary !mt-0 !mb-3">{children}</p>;
};

export default Description;
