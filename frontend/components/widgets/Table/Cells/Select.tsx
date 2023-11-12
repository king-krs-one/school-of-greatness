import React from 'react';
import {
  Menu, MenuButton, MenuItem, MenuList,
} from '@chakra-ui/react';

const TableSelect = ({
  getValue, row, column, table,
}: Record<string, any>) => {
  const value = getValue();
  const { options } = column.columnDef;
  const { updateData } = table.options.meta;

  return (
    <Menu isLazy offset={[0, 0]} flip={false} autoSelect={false}>
      <MenuButton
        h="100%"
        w="100%"
        textAlign="left"
        p={1.5}
        color="white"
      >
        {/* {value} */}
        {value?.label}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => updateData(row.index, column.id, null)}>
          None
        </MenuItem>
        {options.map((item: any) => (
          <MenuItem
            onClick={() => updateData(row.index, column.id, item)}
            key={item.value}
          >
            {item.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default TableSelect;
