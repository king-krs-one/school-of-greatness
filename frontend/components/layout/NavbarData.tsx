import { UserIcon } from "@heroicons/react/24/outline";

import { MenuItemProps } from "@/components/widgets/Menu";

export function getMenuUser(isAuthenticated: boolean): MenuItemProps[] {
  // Define your menu items
  const menuUser: MenuItemProps[] = [
    {
      name: "User",
      icon: UserIcon,
      iconProps: {
        border: true,
        showText: true,
      },
      href: "#",
      current: false,
      hidden: !isAuthenticated,
      className: "",
      items: [
        { name: "Your Profile", href: "/", className: "" },
        { name: "Settings", href: "/", className: "" },
        { name: "Sign out", href: "/", className: "" },
      ],
    },
    {
      name: "User",
      icon: UserIcon,
      iconProps: {
        border: true,
        showText: false,
      },
      href: "#",
      current: false,
      hidden: isAuthenticated,
      className: "",
      items: [
        { name: "Sign in", href: "/", className: "" },
        { name: "Register", href: "/", className: "" },
      ],
    },
  ];

  return menuUser;
}

export function getMenuMain(isAuthenticated: boolean): MenuItemProps[] {
  const menuMain: MenuItemProps[] = [
    { name: "Dashboard", href: "#", current: true, className: ""},
    {
      name: "Media",
      href: "#",
      current: false,
      className: "",
      items: [
        { name: "Videos", href: "#", className: "", icon: UserIcon},
        { name: "Audio", href: "#", className: "", icon: UserIcon },
        { name: "Ebooks", href: "#", className: "", icon: UserIcon },
      ],
    },
    { name: "Encyclopedia", href: "#", current: false, className: "" },
    {
      name: "School",
      href: "#",
      current: false,
      hidden: !isAuthenticated,
      className: "",
      items: [
        { name: "Classes", href: "#", className: "" },
        { name: "Schedules", href: "#", className: "" },
        { name: "Achievements", href: "#", className: "" },
      ],
    },
  ];
  return menuMain;
}
