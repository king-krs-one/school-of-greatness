import React, { useState, useEffect } from 'react';
import { Input } from '@chakra-ui/react';

const TableInput = ({
  getValue, row, column, table,
}: Record<string, any>) => {
  const initialValue = getValue();
  const [value, setValue] = useState(initialValue);

  const onBlur = () => {
    table.options.meta?.updateData(
      row.index,
      column.id,
      value,
    );
  };

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onBlur={onBlur}
      variant="filed"
      width="full"
      style={{
        all: 'initial', color: 'white', padding: '0.375rem 0.75rem',
      }}
    />
  );
};

export default TableInput;
