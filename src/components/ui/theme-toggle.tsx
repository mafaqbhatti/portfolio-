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
        className="px-2.5 py-1 rounded border hairline-border font-mono text-[11px] text-text-muted bg-surface"
        aria-label="Toggle theme"
      >
        <span className="uppercase tracking-wider">theme: dark</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="px-2.5 py-1 rounded border hairline-border font-mono text-[11px] text-text-muted hover:text-text hover:border-text-muted transition-colors duration-150 bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      aria-label={`Current theme is ${theme}. Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      <span className="uppercase tracking-wider">theme: {theme}</span>
    </button>
  );
}
