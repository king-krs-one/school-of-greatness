import React from 'react';
import {
  Box,
  Input,
  FormLabel,
} from '@chakra-ui/react';

import { ColumnFilterProps } from '.';

interface InputFieldProps {
  columnId: string;
  columnLabel: string;
  columnFilters: Record<string, any>[];
  setColumnFilters: (filters: any) => void;
}

const InputFilter = ({
  columnId, columnLabel, columnFilters, setColumnFilters,
}: InputFieldProps) => {
  const filterVal = columnFilters
    .find((filter: any) => filter.id === columnId)?.value || '';

  const onFilterChange = (id: string, value: string) => {
    const colFilter = (
      prev: ColumnFilterProps[],
    ) => prev
      .filter((filter) => filter.id !== id)
      .concat({ id, value });

    setColumnFilters((prev: ColumnFilterProps[]) => colFilter(prev));
  };
  return (
    <Box>
      <FormLabel>{columnLabel}</FormLabel>
      <Input
        type="text"
        variant="filled"
        placeholder="Filter"
        value={filterVal}
        onChange={(e) => onFilterChange(columnId, e.target.value)}
      />
    </Box>
  );
};

export default InputFilter;
