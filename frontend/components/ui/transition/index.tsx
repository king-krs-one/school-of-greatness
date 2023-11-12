"use client";

import { Transition } from "@headlessui/react";
import { Fragment } from "react";

interface TransitionsProps {
  children: React.ReactNode;
  // Include any props you plan to use with the Transition component
  show?: boolean;
  enter?: string;
  enterFrom?: string;
  enterTo?: string;
  leave?: string;
  leaveFrom?: string;
  leaveTo?: string;
}

// Usage example:
const MenuTransition: React.FC<TransitionsProps> = (props) => {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
      {...props}
    >
      {(ref) => <div ref={ref}>{props.children}</div>}
    </Transition>
  );
};

export default MenuTransition;
