"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

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
        className="w-8 h-8 flex items-center justify-center rounded border hairline-border bg-surface text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
        aria-label="Toggle theme"
      >
        <Sun className="w-4 h-4 opacity-75" aria-hidden="true" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="w-8 h-8 flex items-center justify-center rounded border hairline-border bg-surface text-text-muted hover:text-text hover:border-text-muted transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
      aria-label={
        theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
      }
      title={
        theme === "dark" ? "Switch to light theme" : "Switch to dark theme"
      }
    >
      {theme === "dark" ? (
        <Sun
          className="w-4 h-4 transition-transform duration-200 hover:rotate-45"
          aria-hidden="true"
        />
      ) : (
        <Moon
          className="w-4 h-4 transition-transform duration-200 hover:-rotate-12"
          aria-hidden="true"
        />
      )}
    </button>
  );
}
