'use client'

import React, { useState } from 'react';
import {
  getCoreRowModel,
  useReactTable,
  flexRender,
  // Cell,
  // Header,
  getFilteredRowModel,
  getSortedRowModel,
} from '@tanstack/react-table';
import type { ColumnDef } from '@tanstack/react-table';
import { Box } from '@chakra-ui/react';

import {
  ArrowsUpDownIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from '@heroicons/react/24/outline';

import Filters from './Filters';
import { PopoverControl } from './Controls';
import { getTableStyles } from './style';

interface filterProps {
  id: string;
  label: string;
  type: string;
}

interface ReactTableProps<T extends Record<string, any>> {
  id: string;
  data: T[];
  filter?: filterProps[];
  columns: ColumnDef<T>[];
  // enableSorting?: boolean;
  onChange: (rowIndex: number, columnId: string, value: string) => void;
  [rest: string]: any;
}

export const AppTable = <T extends Record<string, any>>({
  id,
  data = [],
  filter = [],
  columns,
  onChange,
}: // enableSorting = false,
ReactTableProps<T>) => {
  const [tableData, setTableData] = useState(data);
  const [columnFilters, setColumnFilters] = useState([]);
  const table = useReactTable({
    data: tableData,
    columns,
    state: {
      columnFilters,
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    enableColumnResizing: true,
    columnResizeMode: 'onChange',
    meta: {
      updateData: (rowIndex: number, columnId: string, value: string) => {
        if (onChange) {
          onChange(rowIndex, columnId, value);
        }
        setTableData((prev) =>
          prev.map((row, index) =>
            index === rowIndex
              ? {
                  ...prev[rowIndex],
                  [columnId]: value,
                }
              : row
          )
        );
      },
    },
  });

  const getColumnWidth = (colWidth: any) => {
    const totalWidth = table.getTotalSize();
    const newColWidth = (colWidth / totalWidth) * 100;
    return `${newColWidth}%`;
  };
  /** Spawns and instantly destroys a div to determine the width that needs to be reserved for the scrollbar */
  const scrollBarWidth = () => {
    const el = document.getElementById(`tBody-${id}`);
    const width = el ? el.offsetWidth - el.clientWidth : 0;
    return width;
  };

  const tableCss = getTableStyles();
  return (
    <Box style={{ padding: '0.5rem' }} height="full">
      <div
        className="tableWrapper"
        style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
      >
        <div
          className="tableContols"
          style={{
            ...tableCss.controls,
            textAlign: 'right',
            padding: '0.5rem 0.75rem',
          }}
        >
          <PopoverControl>
            <Filters
              config={filter}
              columnFilters={columnFilters}
              setColumnFilters={setColumnFilters}
              getColumn={table.getColumn}
            />
          </PopoverControl>
        </div>
        <Box
          className="table"
          width="full"
          height="full"
          display="flex"
          flexDirection="column"
          border="none"
        >
          <Box className="tHead" width={`calc(100% - ${scrollBarWidth()}px)`}>
            {table.getHeaderGroups().map((headerGroup) => (
              <Box
                className="tr"
                key={headerGroup.id}
                border="none"
                width="full"
              >
                {headerGroup.headers.map((header) => (
                  <Box
                    className="th"
                    border="none"
                    w={getColumnWidth(header.getSize())}
                    display="flex"
                    alignItems="center"
                    key={header.id}
                    height="3rem"
                    padding="0"
                  >
                    {/* TH DATA */}
                    <Box flex="1">{header.column.columnDef.header as any}</Box>
                    {/* TH SORTING BTN/ICON */}
                    <Box
                      onClick={header.column.getToggleSortingHandler()}
                      height="full"
                      width="3rem"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      cursor="pointer"
                    >
                      {
                        {
                          asc: <ArrowUpIcon />,
                          desc: <ArrowDownIcon />,
                          none: <ArrowsUpDownIcon />,
                        }[String(header.column.getIsSorted() || 'none')]
                      }
                    </Box>
                    {/* TH RESIZING DRAG BORDER */}
                    <Box
                      onMouseDown={header.getResizeHandler()}
                      onTouchStart={header.getResizeHandler()}
                      className={`resizer ${
                        header.column.getIsResizing() ? 'isResizing' : ''
                      }`}
                    />
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
          <Box id={`tBody-${id}`} className="tBody" flex={1} overflow="auto">
            {table.getRowModel().rows.map((row) => (
              <Box className="tr" key={row.id} display="flex" width="full">
                {row.getVisibleCells().map((cell) => (
                  <Box
                    className="td"
                    w={getColumnWidth(cell.column.getSize())}
                    key={cell.id}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      </div>
    </Box>
  );
};

export default AppTable;
