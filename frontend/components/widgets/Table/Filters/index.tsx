import React from 'react';
import { Box } from '@chakra-ui/react';
import {
  Column,
} from '@tanstack/react-table';

import InputFilter from './Input';
import SelectFilter from './Select';

export interface ColumnFilterProps {
  id: string;
  value: any;
}

interface FiltersConfigProps {
  id: string;
  label: string;
  type: string;
  // type: 'input' | 'select' | 'combobox';
  multi?: boolean;
}

interface FiltersProps {
  config: FiltersConfigProps[],
  columnFilters: Record<string, any>[];
  setColumnFilters:
    React.Dispatch<React.SetStateAction<ColumnFilterProps[]>> |
    React.Dispatch<React.SetStateAction<never[]>>;
  getColumn: (columnId: string) => Column<any, unknown> | undefined;
}

const Filters = ({
  config, columnFilters, setColumnFilters, getColumn,
}: FiltersProps) => {
  const renderFilters = config.map((item) => {
    let filterComponents;
    if (item.type === 'select') {
      const column = getColumn(item.id) as any;
      column?.getFacetedUniqueValues();
      filterComponents = (
        <SelectFilter
          columnId={item.id}
          columnLabel={item.label}
          columnValues={column?.columnDef.options}
          columnFilters={columnFilters}
          setColumnFilters={setColumnFilters}
        />
      );
    } else if (item.type === 'combobox') {
      filterComponents = <Box>COMBO</Box>;
    } else {
      filterComponents = (
        <InputFilter
          columnId={item.id}
          columnLabel={item.label}
          columnFilters={columnFilters}
          setColumnFilters={setColumnFilters}
        />
      );
    }
    return filterComponents;
  });

  return (
    <Box>
      {renderFilters}
    </Box>
  );
};

export default Filters;
