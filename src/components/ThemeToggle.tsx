"use client";

import { useEffect, useState } from "react";

function getSystemTheme() {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function getEffectiveTheme(stored: string | null, system: "light" | "dark"): "light" | "dark" {
  if (stored === "light" || stored === "dark") return stored;
  return system;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [isSystem, setIsSystem] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    const system = getSystemTheme();
    const effective = getEffectiveTheme(stored, system);
    setIsSystem(stored === null);
    setTheme(effective);
    document.documentElement.classList.toggle("dark", effective === "dark");
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      const system = mq.matches ? "dark" : "light";
      if (isSystem) {
        setTheme(system);
        document.documentElement.classList.toggle("dark", system === "dark");
      }
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [isSystem]);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
    setIsSystem(false);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  return (
    <button
      onClick={toggle}
      className="text-black/60 transition-colors hover:text-black dark:text-white/60 dark:hover:text-white"
      aria-label={theme === "light" ? "switch to dark mode" : "switch to light mode"}
    >
      {theme === "light" ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.93 4.93 1.41 1.41" />
          <path d="m17.66 17.66 1.41 1.41" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m6.34 17.66-1.41 1.41" />
          <path d="m19.07 4.93-1.41 1.41" />
        </svg>
      )}
    </button>
  );
}
