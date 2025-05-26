import React from "react";
import { ReactNode, HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "", ...props }: CardProps) {
  return (
    <div
      className={`
        shadow-md rounded-lg p-4 flex flex-col items-center 
        transition-all duration-300 transform hover:scale-[1.03] hover:shadow-xl
        bg-white dark:bg-gray-800
        text-gray-900 dark:text-white
        border border-gray-300 dark:border-gray-700
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}
