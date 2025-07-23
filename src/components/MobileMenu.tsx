// components/layout/MobileMenu.tsx

"use client";

import * as React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type Props = {
  onLogout: () => void;
};

const MobileMenu = ({ onLogout }: Props) => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger asChild>
      <button
        className="inline-flex size-[35px] items-center justify-center rounded-full bg-white text-black dark:bg-black dark:text-white shadow outline-none hover:bg-gray-100 dark:hover:bg-gray-900"
        aria-label="Apri menu"
      >
        <HamburgerMenuIcon />
      </button>
    </DropdownMenu.Trigger>

    <DropdownMenu.Portal>
      <DropdownMenu.Content
        className="z-50 min-w-[180px] rounded-md bg-white dark:bg-neutral-900 p-2 shadow-lg animate-in fade-in"
        sideOffset={5}
      >
        <DropdownMenu.Item asChild>
          <Link
            href="/about"
            className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
          >
            About
          </Link>
        </DropdownMenu.Item>
        <DropdownMenu.Item asChild>
          <Link
            href="/blog"
            className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
          >
            Blog
          </Link>
        </DropdownMenu.Item>
        <DropdownMenu.Item asChild>
          <Link
            href="/services"
            className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
          >
            Blog
          </Link>
        </DropdownMenu.Item>
        <DropdownMenu.Item asChild>
          <Link
            href="/contact"
            className="block px-4 py-2 text-sm text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
          >
            Contatti
          </Link>
        </DropdownMenu.Item>

        <DropdownMenu.Separator className="my-2 h-px bg-gray-200 dark:bg-gray-700" />

        <DropdownMenu.Item
          onSelect={onLogout}
          className="px-4 py-2 text-sm text-red-600 hover:bg-red-100 dark:hover:bg-red-900 rounded cursor-pointer"
        >
          Logout
        </DropdownMenu.Item>

        <DropdownMenu.Arrow className="fill-current text-gray-200 dark:text-gray-700" />
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  </DropdownMenu.Root>
);

export default MobileMenu;
