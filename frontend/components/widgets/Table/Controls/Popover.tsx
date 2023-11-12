import React from 'react';
import {
  Button,
  // Icon,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverBody,
  PopoverTrigger,
} from '@chakra-ui/react';

export default function PopoverControl({ children }: { children: React.ReactNode }) {
  return (
    <Popover isLazy>
      <PopoverTrigger>
        <Button
          size="sm"
          // leftIcon={<Icon as={FilterIcon} fontSize={18} />}
        >
          Filter
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          {children}
          {/* <Filters
            config={filter}
            columnFilters={columnFilters}
            setColumnFilters={setColumnFilters}
            getColumn={table.getColumn}
          /> */}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
