"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isLight = document.documentElement.classList.contains("light");
    setTheme(isLight ? "light" : "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);

    if (newTheme === "light") {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  if (!mounted) {
    return (
      <button
        type="button"
        className="w-8 h-8 rounded border hairline-border flex items-center justify-center font-mono text-xs text-text-muted hover:text-text transition-colors duration-150"
        aria-label="Toggle theme"
      >
        <span className="sr-only">Toggle theme</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="px-2 py-1 rounded border hairline-border font-mono text-xs text-text-muted hover:text-text hover:border-text transition-colors duration-150 flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      aria-label={`Current theme is ${theme}. Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      <span
        className="w-2 h-2 rounded-full"
        style={{ backgroundColor: theme === "dark" ? "#D4FF3A" : "#3F6B00" }}
      />
      <span className="uppercase text-[11px] tracking-wider">{theme}</span>
    </button>
  );
}
