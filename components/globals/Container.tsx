"use client";

import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div
      className="
    max-w-[2520px] 
    mx-auto
    px-4
    phonexl:px-2
    tablet:px-10
    laptop:py-0
    laptop:px-[calc(5rem_*_var(--scale))]
    "
    >
      {children}
    </div>
  );
};
