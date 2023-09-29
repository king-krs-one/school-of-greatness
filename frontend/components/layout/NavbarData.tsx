import { UserIcon } from "@heroicons/react/24/outline";

import { MenuItemProps } from "@/components/widgets/Menu";

export function getMenuUser(isAuthenticated: boolean): MenuItemProps[] {
  // Define your menu items
  const menuUser: MenuItemProps[] = [
    {
      name: "User",
      icon: UserIcon,
      href: "#",
      current: false,
      hidden: !isAuthenticated,
      className: "",
      children: [
        { name: "Your Profile", href: "/", className: "" },
        { name: "Settings", href: "/", className: "" },
        { name: "Sign out", href: "/", className: "" },
      ],
    },
    {
      name: "User",
      icon: UserIcon,
      href: "#",
      current: false,
      hidden: isAuthenticated,
      className: "",
      children: [
        { name: "Sign in", href: "/", className: "" },
        { name: "Register", href: "/", className: "" },
      ],
    },
  ];

  return menuUser;
}

export function getMenuMain(isAuthenticated: boolean): MenuItemProps[] {
  const menuMain: MenuItemProps[] = [
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
      hidden: !isAuthenticated,
      className: "",
      children: [
        { name: "Classes", href: "#", className: "" },
        { name: "Schedules", href: "#", className: "" },
        { name: "Achievements", href: "#", className: "" },
      ],
    },
  ];
  return menuMain;
}
