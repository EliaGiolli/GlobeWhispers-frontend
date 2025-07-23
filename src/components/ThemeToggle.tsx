// components/layout/ThemeToggle.tsx

"use client";

import * as Switch from "@radix-ui/react-switch";
import { useEffect, useState } from "react";
import { useThemeStore } from "@/store/themeStore";

const ThemeToggle = () => { 
  const [mounted, setMounted] = useState(false);
  const theme = useThemeStore(state => state.theme);
  const toggleTheme = useThemeStore(state => state.toggleTheme);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // Evita mismatch server/client

  const isLight = theme === "light";
  return (
    <div className="flex items-center gap-2">
      <Switch.Root
        checked={isLight}
        onCheckedChange={toggleTheme}
        id="theme-toggle"
        className="relative h-[24px] w-[42px] rounded-full bg-green-900 focus:outline-none"
      >
        <Switch.Thumb className="block h-[20px] w-[20px] translate-x-0.5 rounded-full bg-white transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[18px]" />
      </Switch.Root>
    </div>
  );
};

export default ThemeToggle;
