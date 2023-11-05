import { UserIcon } from "@heroicons/react/24/outline";
import { MenuItemProps } from "@/components/widgets/Menu";

interface MenuProps {
  isAuthenticated: boolean;
  pathname: string;
  hooks?: { [key: string]: () => void };
}

const urls = {
  user: {
    login: "/auth/login",
    logout: "/logout",
    register: "/auth/register",
    profile: "/user/profile",
    settings: "/user/settings",
  },
  main: {
    dashboard: "/dashboard",
    media: { audio: "/audio", video: "/video", ebook: "/ebook" },
    school: {
      classes: "/classes",
      schedules: "/schedules",
      achievements: "/achievements",
    },
    encyclopedia: "/encyclopedia",
    components: "/components",
  },
};

export function getMenuUser({
  isAuthenticated,
  pathname,
  hooks,
}: MenuProps): MenuItemProps[] {
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
      hidden: !isAuthenticated,
      className: "",
      items: [
        {
          name: "Your Profile",
          href: urls.user["profile"],
          isSelected: urls.user["profile"] === pathname,
          className: "",
        },
        {
          name: "Settings",
          href: urls.user["settings"],
          isSelected: urls.user["settings"] === pathname,
          className: "",
        },
        {
          name: "Sign out",
          onClick: hooks && hooks.logout,
          className: "",
        },
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
      hidden: isAuthenticated,
      className: "",
      items: [
        {
          name: "Sign in",
          href: urls.user["login"],
          isSelected: urls.user["login"] === pathname,
          className: "",
        },
        {
          name: "Register",
          href: urls.user["register"],
          isSelected: urls.user["register"] === pathname,
          className: "",
        },
      ],
    },
  ];

  return menuUser;
}

export function getMenuMain({
  isAuthenticated,
  pathname,
  hooks,
}: MenuProps): MenuItemProps[] {
  const menuMain: MenuItemProps[] = [
    {
      name: "Dashboard",
      href: urls.main["dashboard"],
      isSelected: urls.main["dashboard"] === pathname,
      className: "",
    },
    {
      name: "Media",
      href: "#",
      className: "",
      items: [
        {
          name: "Video",
          href: urls.main.media["video"],
          isSelected: urls.main.media["video"] === pathname,
          className: "",
        },
        {
          name: "Audio",
          href: urls.main.media["audio"],
          isSelected: urls.main.media["audio"] === pathname,
          className: "",
        },
        {
          name: "Ebook",
          href: urls.main.media["ebook"],
          isSelected: urls.main.media["ebook"] === pathname,
          className: "",
        },
      ],
    },
    {
      name: "Encyclopedia",
      href: urls.main["encyclopedia"],
      isSelected: urls.main["encyclopedia"] === pathname,
      className: "",
    },
    {
      name: "School",
      href: "#",

      hidden: !isAuthenticated,
      className: "",
      items: [
        {
          name: "Classes",
          href: urls.main.school["classes"],
          isSelected: urls.main.school["classes"] === pathname,
          className: "",
        },
        {
          name: "Schedules",
          href: urls.main.school["schedules"],
          isSelected: urls.main.school["schedules"] === pathname,
          className: "",
        },
        {
          name: "Achievements",
          href: urls.main.school["achievements"],
          isSelected: urls.main.school["achievements"] === pathname,
          className: "",
        },
      ],
    },
    {
      name: "Components",
      href: urls.main["components"],
      isSelected: urls.main["components"] === pathname,
      className: "",
    },
  ];
  return menuMain;
}
