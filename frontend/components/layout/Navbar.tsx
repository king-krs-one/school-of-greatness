"use client";

import { Disclosure } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { NavigationMenu } from "../widgets";
import Link from "next/link";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { useLogoutMutation } from "@/redux/features/authApiSlice";
import { logout } from "@/redux/features/authSlice";

import { MenuItemProps } from "@/components/widgets/Menu";

const menuMain = [
  { name: "Dashboard", href: "#", current: true, className: "" },
  {
    name: "Media",
    href: "#",
    current: false,
    className: "",
    children: [
      { name: "Videos", href: "#", className: "" },
      { name: "Audio", href: "#", className: "" },
      { name: "Ebooks", href: "#", className: "" },
    ],
  },
  { name: "Encyclopedia", href: "#", current: false, className: "" },
  {
    name: "School",
    href: "#",
    current: false,
    className: "",
    children: [
      { name: "Classes", href: "#", className: "" },
      { name: "Schedules", href: "#", className: "" },
      { name: "Achievements", href: "#", className: "" },
    ],
  },
];

const menuProfile: MenuItemProps[] = [
  {
    name: "User",
    // icon: <UserIcon />,
    icon: UserIcon,
    href: "#",
    current: false,
    className: "",
    children: [
      { name: "Your Profile", href: "/", className: "" },
      { name: "Settings", href: "/", className: "" },
      { name: "Sign out", href: "/", className: "" },
    ],
  },
];

export default function Navbar() {
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  return (
    <Disclosure as="nav" className="bg-white border-b">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
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
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                      alt="School of Greatness"
                    />
                  </Link>
                  {/* <Link
                    href=""
                    className="block px-4 py-2 text-sm text-gray-700"
                  >
                    School of Greatness
                  </Link> */}
                </div>
                <div className="hidden sm:flex sm:items-center sm:ml-6">
                  <div className="flex space-x-4">
                    <NavigationMenu menuItems={menuMain} />
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <NavigationMenu menuItems={menuProfile} />
              </div>
            </div>
          </div>

          {/* <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={`${
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  } block rounded-md px-3 py-2 text-base font-medium`}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel> */}
        </>
      )}
    </Disclosure>
  );
}
