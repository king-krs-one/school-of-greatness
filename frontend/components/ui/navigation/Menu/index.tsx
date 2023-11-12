"use client";

import { Menu, Disclosure } from "@headlessui/react";
import React, { useState, ReactNode, forwardRef } from "react";
import { TransitionMenu } from "../..";
import cn from "classnames";
import Link from "next/link";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

interface MenuItemIconProps {
  border: boolean;
  showText: boolean;
}

export interface MenuItemProps {
  name: string;
  className?: string;
  isSelected?: boolean;
  isMobile?: boolean;
  isBanner?: boolean;
  // icon?: React.ReactElement;
  icon?: React.ComponentType;
  iconProps?: MenuItemIconProps;
  hidden?: boolean;
  items?: MenuItemProps[];
  [rest: string]: any;
}

interface LinkProps extends MenuItemProps {
  href: string;
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  MenuItemProps;

interface DropdownButtonProps extends ButtonProps {
  children: ReactNode;
}

interface MenuButtonProps extends ButtonProps {
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

type DropdownMenuItemProps = LinkProps | ButtonProps;

interface IconProps {
  className?: string;
  "aria-hidden"?: string;
}

interface MenuProps {
  menuItems: MenuItemProps[];
  menuType?: "dropdown" | "flat";
}

const DropdownButtonComponent: React.FC<DropdownButtonProps> = ({
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

const DropdownButtonWrapper = React.forwardRef<
  HTMLButtonElement,
  DropdownButtonProps
>(({ children, ...rest }, ref) => {
  return (
    <DropdownButtonComponent {...rest} ref={ref}>
      {children}
    </DropdownButtonComponent>
  );
});

const MenuButtonItem = forwardRef<HTMLButtonElement, MenuButtonProps>((props, ref) => {
  const {
    onClick,
    className,
    icon,
    iconProps,
    children,
    ...rest
  } = props;

  const buttonClassName = cn(
    className,
  )

  return (
    <button onClick={onClick} className={buttonClassName} ref={ref} {...rest}>
      {children}
    </button>
  );
});

const DropdownMenuItem = forwardRef<HTMLElement, DropdownMenuItemProps>(
  (props: MenuItemProps, ref) => {
    let {
      href,
      name,
      onClick,
      children,
      active,
      className,
      isSelected,
      isMobile,
      isBanner,
      icon,
      ...rest
    } = props;

    const itemClassName = cn(
      className,
      "flex items-center w-full px-4 py-2 text-sm text-gray-700",
      {
        "bg-gray-100": active,
        "bg-blue-100": isSelected,
        "": !isSelected && !isBanner,
        "": isMobile,
        "": !isMobile,
        "font-bold": isBanner,
      }
    );

    const IconComponent: React.ComponentType<IconProps> | undefined = icon;

    return (
      <>
        {href ? (
          <Link
            href={href}
            className={itemClassName}
            ref={ref as React.Ref<HTMLAnchorElement>}
            {...rest}
          >
            {IconComponent && (
              <IconComponent className="h-5 w-5 mr-2" aria-hidden="true" />
            )}
            <span className="">{children}</span>
          </Link>
        ) : (
          <MenuButtonItem
            name={name}
            className={itemClassName}
            onClick={onClick}
            ref={ref as React.Ref<HTMLButtonElement>}
            {...rest}
          >
            {children}
          </MenuButtonItem>
        )}
      </>
    );
  }
);

const DropdownMenuItems: React.FC<{ menuItems: MenuItemProps[] }> = (props) => {
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
      "text-blue-400": isSelected,
      "": !isSelected && !isBanner,
      "": isMobile,
      "": !isMobile,
      "font-bold": isBanner,
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
      <DropdownButtonWrapper
        icon={icon}
        iconProps={iconProps}
        name={name}
      ></DropdownButtonWrapper>
      <TransitionMenu>
        <DropdownMenuItems menuItems={items || []} />
      </TransitionMenu>
    </Menu>
  );
};

const DisclosureMenuItem: React.FC<MenuItemProps> = (props) => {
  const { href, name, className, isSelected, isMobile, isBanner } = props;
  const [isActive, setIsActive] = useState(false);

  const linkClassName = cn(
    className,
    "flex items-center px-4 py-2 text-sm text-gray-700 border rounded border-transparent",
    {
      "bg-slate-100 border-gray-200": isActive,
      "text-blue-400": isSelected,
      "": !isSelected && !isBanner,
      "": isMobile,
      "": !isMobile,
      "font-bold": isBanner,
    }
  );

  return (
    <Link
      href={href}
      key={name}
      className={linkClassName}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      {name}
    </Link>
  );
};

const DisclosureMenu: React.FC<MenuItemProps> = (props) => {
  const { key, name, items, isMobile, icon, iconProps } = props;

  return (
    <Disclosure key={key} as="div">
      {({ open }) => (
        <div>
          <Disclosure.Button className="flex w-full justify-between rounded-lg bg-blue-100 px-4 py-2 text-left text-sm font-medium text-gray-700 hover:bg-purple-200 ">
            {name}

            <ChevronUpIcon
              className={`${
                open ? "rotate-180 transform" : ""
              } h-5 w-5 text-purple-500`}
            />
          </Disclosure.Button>

          {items ? (
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
              {items.map((item) => {
                return (
                  <DisclosureMenuItem
                    name={item.name}
                    href={item.href}
                    key={item.name}
                  >
                    {item.name}
                  </DisclosureMenuItem>
                );
              })}
            </Disclosure.Panel>
          ) : (
            <Disclosure.Panel>whatever</Disclosure.Panel>
          )}
        </div>
      )}
    </Disclosure>
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
              isMobile={true}
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

const MobileMenuBuilder: React.FC<MenuProps> = (props) => {
  const { menuItems } = props;

  const filteredMenuItems = menuItems.filter(
    (item) => !item.hasOwnProperty("hidden") || !item.hidden
  );

  return (
    <Disclosure.Panel className="sm:hidden">
      {filteredMenuItems.map((item) => {
        if (item.items) {
          return (
            <DisclosureMenu
              key={item.name}
              name={item.name}
              items={item.items}
              isMobile={true}
              as="div"
            />
          );
        } else {
          return <PlainMenuItem key={item.name} {...item} />;
        }
      })}
    </Disclosure.Panel>
  );
};

MenuButtonItem.displayName = "MenuButtonItem"
DropdownMenuItem.displayName = "DropdownMenuItem"

export default MenuBuilder;
export { MenuBuilder, MobileMenuBuilder, PlainMenuItem };
