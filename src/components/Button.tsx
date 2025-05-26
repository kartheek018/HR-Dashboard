import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "danger";
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "px-4 py-1 rounded-md text-sm transition duration-200 cursor-pointer focus:outline-none";

  const variantStyles = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    secondary: "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-black dark:text-white",
    danger: "bg-red-500 hover:bg-red-600 text-white",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
