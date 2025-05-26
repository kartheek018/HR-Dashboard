// components/ThemeToggle.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
    >
      {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
};
