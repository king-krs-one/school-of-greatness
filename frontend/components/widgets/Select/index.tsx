"use client";

import React, { useMemo, useState, CSSProperties } from 'react';
import { useSelect, UseSelectState } from 'downshift';
import { getSelectStyles, getSelectMenuStyles } from './style';
// import { FormLabel } from '@chakra-ui/react';

interface optionType {
  value: string;
  label: string;
}

interface SelectProps {
  id: string;
  name?: string;
  isValid?: boolean;
  options: optionType[];
  multi?: boolean;
  // value: optionType | string;
  size?: 'base' | 'small';
  onChange: (selected: optionType | null | undefined) => void;
  [rest: string]: any;
}

const Select: React.FC<SelectProps> = (props) => {
  const {
    id,
    name,
    isValid,
    options,
    // value,
    multi,
    size,
    onChange,
  } = props;

  const stateReducer = (state: UseSelectState<optionType>, actionAndChanges: any) => {
    const { changes, type } = actionAndChanges;

    switch (type) {
      case useSelect.stateChangeTypes.ToggleButtonKeyDownEnter:
      case useSelect.stateChangeTypes.ToggleButtonKeyDownSpaceButton:
      case useSelect.stateChangeTypes.ItemClick:
        return {
          ...changes,
          isOpen: true, // Keep the menu open after selection.
          highlightedIndex: state.highlightedIndex,
        };
      default:
        return changes;
    }
  };

  const [isActive, setIsActive] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [selectedItems, setSelectedItems] = useState<optionType[]>([]);
  const itemToString = (item: optionType | null) => (item ? item.value : '');

  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    getItemProps,
    highlightedIndex,
  } = useSelect({
    items: options,
    itemToString,
    onIsOpenChange: () => {
      setIsActive(isOpen);
    },
    onStateChange: () => {},
    // Following attributes are only used for multi select
    selectedItem: multi ? null : undefined,
    onSelectedItemChange: multi ? ({ selectedItem: item }) => {
      if (!item) {
        return;
      }
      onChange(item);
      const index = selectedItems.findIndex((x) => x.value === item.value);

      if (index > -1) {
        setSelectedItems([
          ...selectedItems.slice(0, index),
          ...selectedItems.slice(index + 1),
        ]);
      } else {
        setSelectedItems([...selectedItems, item]);
      }
    } : ({ selectedItem: item }) => (onChange(item)),
    // stateReducer cannot be applied undefined so we conditionally need to destruct
    ...(multi ? { stateReducer } : {}),
  });

  const cssSelect = useMemo(() => getSelectStyles(size), [size]);
  const cssSelectMenu = getSelectMenuStyles();

  const buttonText = selectedItems.length
    ? `${selectedItems.length} elements selected`
    : `Select ${name}`;

  return (
    <div
      id={id}
      style={cssSelect.wrapper}
    >
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        style={{
          ...cssSelect.select,
          ...(isHover ? cssSelect.states.hover : {}),
          ...(isActive ? cssSelect.states.active : {}),
          ...(isValid ? cssSelect.states.error : {}),
        }}
        {...getToggleButtonProps()}
      >
        <span>{selectedItem ? selectedItem.label : buttonText}</span>
        <span className="px-2">{isOpen ? <>&#8593;</> : <>&#8595;</>}</span>
      </div>
      <ul
        // className={`absolute w-72 bg-white mt-1 shadow-md max-h-80 overflow-scroll p-0 z-10 ${
        //   !isOpen && 'hidden'
        // }`}
        style={{ ...cssSelectMenu.menu as CSSProperties }}
        {...getMenuProps()}
      >
        {isOpen
          && options.map((item, index) => (
            <li
              style={{
                ...cssSelectMenu.item,
                ...(highlightedIndex === index ? cssSelectMenu.states.hover : {}),
                ...(selectedItem === item ? cssSelectMenu.states.selected : {}),
              }}
              key={item.value}
              {...getItemProps({
                item,
                index,
              })}
            >
              { multi && (
                <input 
                  type="checkbox"
                  checked={selectedItems.includes(item)}
                  value={item.value}
                  className='mr-2'
                  onChange={() => null}
                />
              )}
              <span>{item.label}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Select;
