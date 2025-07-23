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
        className="inline-flex md:hidden size-[35px] items-center justify-center rounded-full bg-white text-black shadow outline-none hover:bg-gray-100"
        aria-label="Apri menu"
      >
        <HamburgerMenuIcon />
      </button>
    </DropdownMenu.Trigger>

    <DropdownMenu.Portal>
      <DropdownMenu.Content
        className="z-50 min-w-[180px] rounded-md bg-white p-2 shadow-lg animate-in fade-in"
        sideOffset={5}
      >
        {["about", "blog", "services", "contact"].map((path) => (
          <DropdownMenu.Item asChild key={path}>
            <Link
              href={`/${path}`}
              className="block px-4 py-2 text-sm text-black hover:bg-gray-100 rounded"
            >
              {path.charAt(0).toUpperCase() + path.slice(1)}
            </Link>
          </DropdownMenu.Item>
        ))}

        <DropdownMenu.Separator className="my-2 h-px bg-gray-200" />

        <DropdownMenu.Item
          onSelect={onLogout}
          className="px-4 py-2 text-sm text-red-600 hover:bg-red-100 rounded cursor-pointer"
        >
          Logout
        </DropdownMenu.Item>

        <DropdownMenu.Arrow className="fill-current text-gray-200" />
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  </DropdownMenu.Root>
);

export default MobileMenu;
