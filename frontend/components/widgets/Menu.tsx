"use client";

import { Menu } from "@headlessui/react";
import React, { ReactNode } from "react";
import { TransitionMenu } from ".";
import cn from "classnames";
import { forwardRef } from "react";
import Link from "next/link";

interface MenuIconProps {
  border: boolean;
  showText: boolean;
}

export interface MenuItemProps {
  name: string;
  // href: string;
  className: string;
  isSelected?: boolean;
  isMobile?: boolean;
  isBanner?: boolean;
  // icon?: React.ReactElement;
  icon?: React.ComponentType;
  iconProps?: MenuIconProps;
  current?: boolean;
  hidden?: boolean;
  items?: MenuItemProps[];
  [rest: string]: any;
}

interface LinkProps extends MenuItemProps {
  href: string;
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  MenuItemProps;

interface IconProps {
  className?: string;
  "aria-hidden"?: string;
}

interface MenuProps {
  menuItems: MenuItemProps[];
  menuType?: "dropdown" | "flat";
}

interface MenuButtonProps extends ButtonProps {
  children: ReactNode;
  ref?: React.Ref<HTMLButtonElement>;
}

const MenuButtonComponent: React.FC<MenuButtonProps> = ({
  name,
  icon,
  iconProps,
  className,
  isSelected,
  isMobile,
  isBanner,
  children,
  ...rest
}) => {
  const { border, showText } = iconProps || {};

  const btnClassName = cn(
    className,
    "relative flex text-sm items-center rounded px-4 py-2",
    {
      "bg-slate-100 border border-gray-300": !icon,
      "": isSelected,
      "": !isSelected && !isBanner,
      "": isMobile,
      "": !isMobile,
      "": isBanner,
    }
  );

  const iconClassName = cn("inline-block p-0.5 mr-2", {
    "border border-gray-700 rounded-full": border,
  });

  const IconComponent: React.ComponentType<IconProps> | undefined = icon;

  return (
    <Menu.Button className={btnClassName} {...rest}>
      <span className="absolute -inset-1.5" />
      <span className="sr-only">Open {name} menu</span>

      {IconComponent && (
        <span className={iconClassName}>
          {/* {React.cloneElement(icon, iconProps)} */}
          <IconComponent className="h-6 w-6" aria-hidden="true" />
        </span>
      )}

      {(!IconComponent || showText) && (
        <Link className="" href="#">
          {name}
        </Link>
      )}
      {children}
    </Menu.Button>
  );
};

const MenuButtonWrapper = React.forwardRef<HTMLButtonElement, MenuButtonProps>(
  ({ children, ...rest }, ref) => {
    return (
      <MenuButtonComponent {...rest} ref={ref}>
        {children}
      </MenuButtonComponent>
    );
  }
);

const MenuItems: React.FC<{ menuItems: MenuItemProps[] }> = (props) => {
  const { menuItems } = props;

  const filteredMenuItems = menuItems.filter(
    (item) => !item.hasOwnProperty("hidden") || !item.hidden
  );

  return (
    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
      {filteredMenuItems.map((item) => {
        return (
          <Menu.Item key={item.name}>
            {({ active }) => (
              <DropdownMenuItem {...item} active={active}>
                {item.name}
              </DropdownMenuItem>
            )}
          </Menu.Item>
        );
      })}
    </Menu.Items>
  );
};

const DropdownMenuItem = forwardRef<HTMLAnchorElement, MenuItemProps>(
  (props: MenuItemProps, ref) => {
    let { href, children, active, className, icon, ...rest } = props;
    const itemClassName = cn(
      className,
      "flex items-center px-4 py-2 text-sm text-gray-700",
      {
        "bg-gray-100": active,
      }
    );

    const IconComponent: React.ComponentType<IconProps> | undefined = icon;

    return (
      <Link href={href} className={itemClassName} ref={ref} {...rest}>
        {IconComponent && (
          <IconComponent className="h-5 w-5 mr-2" aria-hidden="true" />
        )}
        <span className="">{children}</span>
      </Link>
    );
  }
);

const PlainMenuItem: React.FC<MenuItemProps> = (props) => {
  const {
    href,
    name,
    className,
    isSelected,
    isMobile,
    isBanner,
    icon,
    iconProps,
  } = props;

  const { border, showText } = iconProps || {};
  const iconClassName = cn("inline-block p-0.5 mr-2", {
    "border border-gray-700 rounded-full": border,
  });

  const linkClassName = cn(
    className,
    "flex items-center px-4 py-2 text-sm text-gray-700",
    {
      // "bg-slate-100 border border-gray-300": !icon,
      "": isSelected,
      "": !isSelected && !isBanner,
      "": isMobile,
      "": !isMobile,
      "": isBanner,
    }
  );

  const IconComponent: React.ComponentType<IconProps> | undefined = icon;

  return (
    <a href={href} className={linkClassName}>
      {IconComponent && (
        <span className={iconClassName}>
          <IconComponent className="h-6 w-6" aria-hidden="true" />
        </span>
      )}
      {(!IconComponent || showText) && name}
    </a>
  );
};

const DropdownMenu: React.FC<MenuItemProps> = (props) => {
  const { items, name, icon, iconProps } = props;

  return (
    // <Menu as="div" className="block px-4 py-2 text-sm text-gray-700 ">
    <Menu as="div" className="relative ml-3">
      <MenuButtonWrapper
        icon={icon}
        iconProps={iconProps}
        name={name}
      ></MenuButtonWrapper>
      <TransitionMenu>
        <MenuItems menuItems={items || []} />
      </TransitionMenu>
    </Menu>
  );
};

const MenuBuilder: React.FC<MenuProps> = (props) => {
  const { menuItems, menuType = "dropdown" } = props;

  const filteredMenuItems = menuItems.filter(
    (item) => !item.hasOwnProperty("hidden") || !item.hidden
  );

  return (
    <React.Fragment>
      {filteredMenuItems.map((item) => {
        if (menuType === "dropdown" && item.items) {
          return (
            <DropdownMenu
              key={item.name}
              items={item.items}
              icon={item.icon}
              {...item}
            />
          );
        } else {
          return <PlainMenuItem key={item.name} {...item} />;
        }
      })}
    </React.Fragment>
  );
};

export default MenuBuilder;
