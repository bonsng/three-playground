"use client";

import { Contrast } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeModeButtons() {
  const { setTheme, theme } = useTheme();

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={handleToggle}
      aria-label="Toggle theme"
      className="rounded-lg p-2
                 hover:bg-zinc-100
                 dark:hover:bg-zinc-800
                 transition fixed top-2 right-2 z-50"
    >
      <Contrast size={20} />
    </button>
  );
}
