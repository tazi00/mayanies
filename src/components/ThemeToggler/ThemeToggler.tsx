"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function ThemeToggler() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button className="border border-foreground p-1 rounded">
        <div className="w-[18px] h-[18px]" />{" "}
        {/* Placeholder with same dimensions */}
      </button>
    );
  }

  return (
    <button
      className=""
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme !== "light" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

export default ThemeToggler;
