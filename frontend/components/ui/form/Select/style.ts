import { components } from "../../../config/uiComponents";
import { CSSProperties } from 'react';

type sizeProps = "base" | "small";

export const getSelectStyles = (size?: sizeProps) => {
  const { select } = components;

  const wrapper: CSSProperties = {
    width: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  const tw = "w-full relative flex flex-column justify-center"

  const base = {
    // styles from ui components config
    ...select.base,
    ...(size === "small" ? select.small : {}),

    // additional styles
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    padding: "0.375rem 0.75rem",
    marginBottom: "3px",
  };

  return {
    select: base,
    wrapper,
    small: { ...base, ...select.small },
    states: {
      hover: select.states.hover,
      active: select.states.focus,
      error: select.states.error,
    },
  };
};

export const getSelectMenuStyles = () => {
  const { select } = components;

  const menu = {
    position: "absolute",
    top: "100%",
    width: "100%",
    maxHeight: "16rem",
    overflow: "auto",
    backgroundColor: "#14171d",
    border: "1px solid #14171d",
    zIndex: "8",
  };

  const item = {
    ...select.item,
    display: "flex",
    alignItems: "center",
    padding: "0.5rem 0.75rem",
    marginBottom: "2px",
    listStyle: "none",
    cursor: "pointer",
  };

  return {
    item,
    menu,
    states: {
      hover: select.item.states.hover,
      selected: select.item.states.selected,
    },
  };
};
