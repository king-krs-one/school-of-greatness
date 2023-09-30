"use client";

import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";

import React from "react";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { useLogoutMutation } from "@/redux/features/authApiSlice";
import { logout as setLogout } from "@/redux/features/authSlice";

import { NavigationMenu } from "../widgets";
import { getMenuMain, getMenuUser } from "./NavbarData";

export default function Navbar() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [logout] = useLogoutMutation();

  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const menu_main = getMenuMain(isAuthenticated);
  const menu_user = getMenuUser(isAuthenticated);

  const handleLogout = () => {
    logout(undefined)
      .unwrap()
      .then(() => {
        dispatch(setLogout());
      })
      .finally(() => {
        router.push("/");
      });
  };

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
                  <div className="flex items-center space-x-2">
                    <NavigationMenu menuItems={menu_main} />
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <NavigationMenu menuItems={menu_user} />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <React.Fragment>
                {menu_main.map((item) => (
                  <Disclosure key={item.name} as="div">
                    {({ open }) => (
                      <div key={item.name}>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                          {item.name}

                          <ChevronUpIcon
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-5 w-5 text-purple-500`}
                          />
                        </Disclosure.Button>

                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                          {item.items
                            ? item.items.map((x) => <div key={x.name}>{x.name}</div>)
                            : "text"}
                        </Disclosure.Panel>
                      </div>
                    )}
                  </Disclosure>
                ))}
              </React.Fragment>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
