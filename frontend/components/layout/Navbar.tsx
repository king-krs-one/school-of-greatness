"use client";

import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import React from "react";
import Link from "next/link";
import { Image } from "../ui";
import { Disclosure } from "@headlessui/react";
import { usePathname } from "next/navigation";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { useLogout } from "@/hooks";

import { MenuBuilder, MobileMenuBuilder, PlainMenuItem } from "../ui";
import { getMenuMain, getMenuUser } from "./NavbarData";

export default function Navbar() {
  const pathname = usePathname();
  
  const { handleLogout } = useLogout();
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const menu_main = getMenuMain({ isAuthenticated, pathname });
  const menu_user = getMenuUser({
    isAuthenticated,
    pathname,
    hooks: { logout: handleLogout },
  });

  return (
    <Disclosure as="nav" className="bg-white border-b">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative z-50 flex h-12 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link
                    href=""
                    className="block px-4 py-2 text-sm text-gray-700"
                  >
                    <Image
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                      alt="School of Greatness"
                    />
                  </Link>
                  <PlainMenuItem
                    href=""
                    name="School of Greatness"
                    className="block px-4 py-2 text-sm text-gray-700"
                    isBanner
                  >
                    School of Greatness
                  </PlainMenuItem>
                </div>
                <div className="hidden sm:flex sm:items-center sm:ml-6">
                  <div className="flex items-center space-x-2">
                    <MenuBuilder menuItems={menu_main} />
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <MenuBuilder menuItems={menu_user} />
              </div>
            </div>
          </div>

          <MobileMenuBuilder menuItems={menu_main} />
        </>
      )}
    </Disclosure>
  );
}
