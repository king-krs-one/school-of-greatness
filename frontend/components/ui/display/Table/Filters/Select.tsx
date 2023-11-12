import React from 'react';
import {
  Menu, MenuButton, MenuItem, MenuList, Box, FormLabel,
} from '@chakra-ui/react';

import { ColumnFilterProps } from '.';

interface SelectItemProps {
  item: Record<string, any>;
  columnId: string;
  isActive: boolean;
  setColumnFilters: (filters: any) => void;
}

interface SelectProps {
  columnId: string;
  columnLabel: string;
  columnValues: string[];
  columnFilters: Record<string, any>[];
  setColumnFilters: (filters: any) => void;
}

const SelectItem = ({
  item, columnId, isActive, setColumnFilters,
}: SelectItemProps) => (
  <MenuItem
    onClick={() => setColumnFilters((prev: ColumnFilterProps[]) => {
      const columnFilter = prev.find((filter: ColumnFilterProps) => filter.id === columnId)?.value;
      if (!columnFilter) {
        return prev.concat({
          id: columnId,
          value: [item.value],
        });
      }
      return prev.map((f) => (
        f.id === columnId
          ? {
            ...f,
            value: isActive
              ? columnFilter.filter((filterval: string) => filterval !== item.value)
              : columnFilter.concat(item.value),
          } : f
      ));
    })}
    key={item.value}
    background={isActive ? 'gray' : 'inherit'}
  >
    {item.label}
  </MenuItem>
);

const SelectFilter = ({
  columnId, columnLabel, columnValues, columnFilters, setColumnFilters,
}: SelectProps) => {
  const selectedValues = columnFilters.find((filter: any) => filter.id === columnId)?.value || [];

  return (
    <Box>
      <FormLabel>{columnLabel}</FormLabel>
      <Menu isLazy offset={[0, 0]} flip={false} autoSelect={false}>
        <MenuButton
          h="100%"
          w="100%"
          textAlign="left"
          p={1.5}
          color="white"
          background="gray.600"
          borderColor="gray.900"
        >
          Select
        </MenuButton>
        <MenuList>
          {columnValues.map((item: any) => (
            <SelectItem
              columnId={columnId}
              item={item}
              isActive={selectedValues.includes(item.value)}
              setColumnFilters={setColumnFilters}
            />
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};
export default SelectFilter;
