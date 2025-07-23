// components/layout/SubNavbar.tsx

"use client";

import { useRouter } from "next/navigation";

export default function SubNavbar() {
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const locale = e.target.value;
    // next-intl logic will go here
    router.push(`/${locale}`);
  };

  return (
    <div className="w-full bg-gray-100 dark:bg-neutral-900 py-2 px-4 text-sm">
      <div className="max-w-7xl mx-auto flex justify-end">
        <select
          className="bg-white dark:bg-black border px-2 py-1 rounded"
          onChange={handleChange}
        >
          <option value="en">🇬🇧 English</option>
          <option value="it">🇮🇹 Italiano</option>
        </select>
      </div>
    </div>
  );
}
