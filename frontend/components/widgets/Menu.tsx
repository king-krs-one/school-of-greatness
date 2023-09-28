"use client";

import { Menu } from "@headlessui/react";
import React, { ReactNode } from "react";
import { TransitionMenu } from ".";

export interface MenuItemProps {
  name: string;
  className: string;
  href: string;
  // icon?: React.ReactElement;
  icon?: React.ComponentType;
  current?: boolean;
  children?: MenuItemProps[];
}

interface MenuProps {
  menuItems: MenuItemProps[];
  menuType?: "dropdown" | "flat";
}

interface CustomMenuButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  ref?: React.Ref<HTMLButtonElement>;
}

const CustomMenuButtonComponent: React.FC<CustomMenuButtonProps> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <Menu.Button
      className={`relative flex text-sm items-center rounded  ${
        className || ""
      }`}
      {...rest}
    >
      {children}
    </Menu.Button>
  );
};

const CustomMenuButtonWrapper = React.forwardRef<
  HTMLButtonElement,
  CustomMenuButtonProps
>(({ children, ...rest }, ref) => {
  return (
    <CustomMenuButtonComponent {...rest} ref={ref}>
      {children}
    </CustomMenuButtonComponent>
  );
});

const MenuItems: React.FC<{ menuItems: MenuItemProps[] }> = (props) => {
  const { menuItems } = props;

  return (
    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
      {menuItems.map((item) => {
        return (
          <Menu.Item key={item.name}>
            {({ active }) => (
              <a
                href={`${item.href}`}
                className={`${
                  active ? "bg-gray-100" : ""
                } block px-4 py-2 text-sm text-gray-700 ${item.className}`}
              >
                {item.name}
              </a>
            )}
          </Menu.Item>
        );
      })}
    </Menu.Items>
  );
};

const PlainMenuItem: React.FC<MenuItemProps> = (props) => {
  const { name, icon } = props;

  const IconComponent = icon;
  const iconProps = {
    className: "h-6 w-6",
    "aria-hidden": "true",
  };

  return (
    <a
      href={`${props.href}`}
      className={`block px-4 py-2 text-sm text-gray-700 ${props.className}`}
    >
      {IconComponent && (
        <span className="inline-block p-2 border-2 border-white rounded-full mr-2">
          {/* {React.cloneElement(icon, iconProps)} */}
          <IconComponent {...iconProps} />
        </span>
      )}
      {name}
    </a>
  );
};

const DropdownMenu: React.FC<MenuItemProps> = (props) => {
  const { children, name, icon } = props;

  const iconProps = {
    className: "h-6 w-6",
    "aria-hidden": "true",
  };

  const IconComponent = icon;

  return (
    // <Menu as="div" className="block px-4 py-2 text-sm text-gray-700 ">
    <Menu as="div" className="relative ml-3">
      <CustomMenuButtonWrapper className={`${!IconComponent ? "bg-slate-100 border border-gray-300" : ""}`}>
        <span className="absolute -inset-1.5" />
        <span className="sr-only">Open {name} menu</span>

        {IconComponent && (
          <span className="inline-block p-0.5 border border-gray-700 rounded-full mr-2">
            {/* {React.cloneElement(icon, iconProps)} */}
            <IconComponent {...iconProps} />
          </span>
        )}
        {!IconComponent && (
          <PlainMenuItem name={name} className="" href="#"></PlainMenuItem>
        )}
      </CustomMenuButtonWrapper>
      <TransitionMenu>
        <MenuItems menuItems={children || []} />
      </TransitionMenu>
    </Menu>
  );
};

const MenuBuilder: React.FC<MenuProps> = (props) => {
  const { menuItems, menuType = "dropdown" } = props;

  return (
    <React.Fragment>
      {menuItems.map((item) => {
        if (menuType === "dropdown" && item.children) {
          return (
            <DropdownMenu
              key={item.name}
              children={item.children}
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
