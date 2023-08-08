import * as React from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Flex,
  Text,
} from '@chakra-ui/react';

import { InputCheckbox, ButtonIco } from '@iseazy/react-kit';
import { TextEditable } from '@iseazy/react-kit';
import { useSettings } from '../../store/settingsStore';

import {
  AiOutlineLeft,
  AiOutlineRight,
  AiOutlineDoubleRight,
  AiOutlineDoubleLeft,
} from 'react-icons/ai';

import './styles/styles.css';

interface Column<T> {
  accessor: keyof T;
  header: React.ReactNode;
  footer?: (info: any) => React.ReactNode;
  cell?: (info: any) => React.ReactNode;
}

interface Props<T> {
  columns: Column<T>[];
  data: T[];
  searchKey: keyof T;
  handleColumnMoveLeft?: any;
  handleColumnMoveRight?: any;
}

const columnHelper = createColumnHelper<any>();

export function ReactTable<T>({
  columns,
  data,
  searchKey,
  handleColumnMoveLeft,
  handleColumnMoveRight,
}: Props<T>) {
  const [filteredData, setFilteredData] = React.useState<T[]>([...data]);
  const [filter, setFilter] = React.useState('');
  const [page, setPage] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(10);
  const [visibleColumns, setVisibleColumns] = React.useState<{
    [key: string]: boolean;
  }>({});
  const [columnFilters, setColumnFilters] = React.useState<{
    [key: string]: string;
  }>({});

  React.useEffect(() => {
    const initialColumnVisibility = columns.reduce(
      (acc, column) => ({ ...acc, [column.accessor]: true }),
      {}
    );
    setVisibleColumns(initialColumnVisibility);
  }, [columns]);

  const handleFilterChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    columnId: string
  ) => {
    const newFilters = { ...columnFilters, [columnId]: event.target.value };
    setColumnFilters(newFilters);
    setPage(0);
  };

  const filteredAndPaginatedData = React.useMemo(() => {
    const filteredData = data.filter((item) => {
      return String(item[searchKey])
        .toLowerCase()
        .includes(filter.toLowerCase());
    });

    const filteredDataWithColumnFilters = filteredData.filter((item) => {
      return Object.keys(columnFilters).every((columnId) => {
        const filterValue = columnFilters[columnId].toLowerCase();
        const columnAccessor = columnId as keyof T;
        return String(item[columnAccessor]).toLowerCase().includes(filterValue);
      });
    });

    const startIndex = page * pageSize;
    const endIndex = startIndex + pageSize;
    return filteredDataWithColumnFilters.slice(startIndex, endIndex);
  }, [data, filter, columnFilters, searchKey, page, pageSize]);

  const table = useReactTable({
    data: filteredAndPaginatedData,
    columns: columns.map((column: any) => {
      return columnHelper.accessor(column.accessor, {
        header: column.header,
        cell: column.cell,
        footer: column.footer,
      });
    }),
    getCoreRowModel: getCoreRowModel(),
  });

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const pageCount = Math.ceil(filteredData.length / pageSize);

  // const { navSize } = useSettings((state) => ({
  //   navSize: state.navSize,
  //   setIsSizeCard: state.setIsSizeCard,
  //   cardSize: state.cardSize,
  //   setIsInfoCardDrawer: state.setIsInfoCardDrawer,
  // }));

  const handleColumnVisibilityChange = (columnId: any) => {
    setVisibleColumns((prevState) => ({
      ...prevState,
      [columnId]: !prevState[columnId],
    }));
  };

  return (
    <Box flexDirection="column" marginTop="20px" width="100%">
      <Box width="full">
        {/* <Flex paddingBottom="40px" gap="8">
          {columns.slice(1).map((column) => (
            <Box
              display="flex"
              alignItems="center"
              gap="3"
              key={column.accessor as string}
            >
              <InputCheckbox
                isDisabled={false}
                checked={visibleColumns[column.accessor]}
                onClick={() => handleColumnVisibilityChange(column.accessor)}
              />
              <span>{column.header}</span>
            </Box>
          ))}
        </Flex> */}

        <Box
          width="full"
          style={{ overflowX: 'auto' }}
          className="table-container"
        >
          <Table width="full">
            <Thead>
              <Tr _hover={{ bg: 'compBackgroundHover' }}>
                {table.getHeaderGroups()[0].headers.map((header, index) => {
                  if (!visibleColumns[header.id]) {
                    return null;
                  }
                  return (
                    <Th
                      key={header.id}
                      overflow="hidden"
                      textOverflow="ellipsis"
                    >
                      <Flex
                        justifyContent="space-between"
                        alignItems="center"
                        marginBottom="10px"
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {/* {index > 0 && (
                          <Flex gap="2" h="20px">
                            <ButtonIco
                              aria-label="Move Column Left"
                              backgroundType="backgroundFilled"
                              onClick={() => handleColumnMoveLeft(index)}
                              sizeName={'sm'}
                              icon={AiOutlineLeft}
                            />
                            <ButtonIco
                              aria-label="Move Column Right"
                              backgroundType="backgroundFilled"
                              onClick={() => handleColumnMoveRight(index)}
                              sizeName={'sm'}
                              icon={AiOutlineRight}
                            />
                          </Flex>
                        )} */}
                      </Flex>
                      {/* {index > 0 && header.id !== 'options' && (
                        <Box width="140px">
                          <TextEditable
                            hasError={false}
                            readOnly={false}
                            sizesType="XL"
                            setValue={() => console.log('hi!')}
                            errorMessage="error message"
                            onChange={(event: any) =>
                              handleFilterChange(event, header.id)
                            }
                            maxRows={1}
                            value={columnFilters[header.id] || ''}
                            fieldName={`filter-${header.id}`}
                            placeholder={`${header.id}`}
                          >
                            <Text
                              textStyle="XL"
                              noOfLines={1}
                              fontWeight="normal"
                              lineHeight="unset"
                              textTransform="lowercase"
                            >
                              {columnFilters[header.id] || `${header.id}`}{' '}
                            </Text>
                          </TextEditable>
                        </Box>
                      )} */}
                    </Th>
                  );
                })}
              </Tr>
            </Thead>

            <Tbody>
              {table.getRowModel().rows.map((row) => (
                <Tr key={row.id} _hover={{ bg: 'compBackgroundHover' }}>
                  {row.getVisibleCells().map((cell) => {
                    if (!visibleColumns[cell.column.id]) {
                      return null;
                    }
                    return (
                      <Td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </Td>
                    );
                  })}
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>

      <Flex
        alignItems="center"
        justifyContent="center"
        gap="5"
        marginTop="20px"
      >
        <ButtonIco
          onClick={() => handlePageChange(page - 1)}
          isDisabled={page === 0}
          sizeName={'sm'}
          aria-label={''}
          icon={AiOutlineDoubleLeft}
        />
        <ButtonIco
          onClick={() => handlePageChange(page - 1)}
          isDisabled={page === 0}
          sizeName={'sm'}
          aria-label={''}
          icon={AiOutlineLeft}
        />
        <ButtonIco
          onClick={() => handlePageChange(page + 1)}
          isDisabled={page === pageCount - 1}
          sizeName={'sm'}
          aria-label={''}
          icon={AiOutlineRight}
        />
        <ButtonIco
          onClick={() => handlePageChange(pageCount - 1)}
          isDisabled={page === pageCount - 1}
          sizeName={'sm'}
          aria-label={''}
          icon={AiOutlineDoubleRight}
        />
        <span className="flex items-center gap-1">
          <div>Page</div>
          <strong>
            {page + 1} of {pageCount}
          </strong>
        </span>
        <span className="flex items-center gap-1">
          | Go to page:
          <input
            type="number"
            onChange={(e) => {
              const newPage = parseInt(e.target.value, 10) - 1;
              if (newPage >= 0 && newPage < pageCount) {
                handlePageChange(newPage);
              }
            }}
            className="border p-1 rounded w-16"
          />
        </span>
        <select
          value={pageSize}
          onChange={(e) => setPageSize(parseInt(e.target.value))}
        >
          {[5, 10, 20, 30, 40, 50].map((size) => (
            <option key={size} value={size}>
              Show {size}
            </option>
          ))}
        </select>
      </Flex>
    </Box>
  );
}
