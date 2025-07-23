// components/layout/ThemeToggle.tsx

"use client";

import * as Switch from "@radix-ui/react-switch";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // Evita mismatch server/client

  const isLight = resolvedTheme === "light";

  return (
    <div className="flex items-center gap-2">
      <Switch.Root
        id="theme-toggle"
        className="relative h-[24px] w-[42px] rounded-full bg-gray-300 dark:bg-gray-700 focus:outline-none"
        checked={isLight}
        onCheckedChange={(checked) => setTheme(checked ? "light" : "dark")}
      >
        <Switch.Thumb className="block h-[20px] w-[20px] translate-x-0.5 rounded-full bg-white transition-transform duration-100 will-change-transform data-[state=checked]:translate-x-[18px]" />
      </Switch.Root>
    </div>
  );
};

export default ThemeToggle;
