import React, { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';

import {
  InputCheckbox,
  InputDropdown,
  TextEditable,
  UserAvatar,
} from '@iseazy/react-kit';

import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import AppEngage from '../AppEngage';
import { ReactTable } from './ReactTable';

import { defaultData } from './data/dataUsers';
import { Person } from './interfaces/dataUser.interface';

const arrayTitle = [
  {
    title: 'Delete',
    categoryTitle: 'Category 1',
    icon: 'IconDelete',
  },
  {
    title: 'Update',
    categoryTitle: 'Category 1',
    icon: 'IconEdit',
  },
];


const ExampleReactTable = () => {
  const [data, setData] = useState<Person[]>([...defaultData]);
  const [columns, setColumns] = useState<any[]>([
    {
      accessor: 'optiones',
      header: () => <InputCheckbox checked={false} isDisabled={false} />,
      cell: () => <InputCheckbox checked={false} isDisabled={false} />,
      footer: (info: any) => info.column.id,
    },
    {
      accessor: 'email',
      header: 'Avatar',
      cell: (info: any) => (
        <Box display="flex" alignItems="center" gap="3">
          <UserAvatar
            sizes="lg"
            backgroundColor="paCourse"
            name={`${info.row.original.fullName} `}
            avatarSrc={info.row.original.avatarUrl}
            isDisabled={false}
          />
          <Box display="flex" flexDir="column" marginTop="5px">
            <Box width="200px" marginBottom="-1.5rem">
              <TextEditable
                hasError={false}
                readOnly={false}
                sizesType="XL"
                setValue={() => console.log('hi!')}
                errorMessage="error message"
                onChange={(event) =>
                  setData((prevData) => {
                    const newData = [...prevData];
                    newData[info.row.index].fullName = event.target.value;
                    return newData;
                  })
                }
                placeholder="Fernan Lezama"
                maxRows={1}
                value={info.row.original.fullName}
                fieldName={`groups-${info.row.index}`}
              >
                <Text textStyle="XL" noOfLines={1} lineHeight="unset">
                  {info.row.original.fullName || 'Fernan Lezama'}
                </Text>
              </TextEditable>
            </Box>
            <Box width="200px">
              <TextEditable
                hasError={false}
                readOnly={false}
                sizesType="XL"
                setValue={() => console.log('hi!')}
                errorMessage="error message"
                onChange={(event) =>
                  setData((prevData) => {
                    const newData = [...prevData];
                    newData[info.row.index].email = event.target.value;
                    return newData;
                  })
                }
                placeholder="mary.johnson@example.com"
                maxRows={1}
                value={info.row.original.email}
                fieldName={`groups-${info.row.index}`}
              >
                <Text textStyle="XL" noOfLines={1} lineHeight="unset">
                  {info.row.original.email || 'mary.johnson@example.com'}
                </Text>
              </TextEditable>
            </Box>
          </Box>
        </Box>
      ),
      footer: (info: any) => info.column.id,
    },
    {
      accessor: 'fullName',
      header: 'fullName',
      cell: (info: any) => (
        <Box width="200px">
          <TextEditable
            hasError={false}
            readOnly={false}
            sizesType="XL"
            setValue={() => console.log('hi!')}
            errorMessage="error message"
            onChange={(event) =>
              setData((prevData) => {
                const newData = [...prevData];
                newData[info.row.index].fullName = event.target.value;
                return newData;
              })
            }
            placeholder="Fernan Lezama"
            maxRows={1}
            value={info.row.original.fullName}
            fieldName={`fullName-${info.row.index}`}
          >
            <Text textStyle="XL" noOfLines={1} lineHeight="unset">
              {info.row.original.fullName || 'Fernan Lezama'}
            </Text>
          </TextEditable>
        </Box>
      ),
      footer: (info: any) => info.column.id,
    },
    {
      accessor: 'points',
      header: 'Points',
      cell: (info: any) => (
        <Box width="200px">
          <TextEditable
            hasError={false}
            readOnly={false}
            sizesType="XL"
            setValue={() => console.log('hi!')}
            errorMessage="error message"
            maxRows={2}
            onChange={(event) =>
              setData((prevData) => {
                const newData = [...prevData];
                newData[info.row.index].points = event.target.value;
                return newData;
              })
            }
            placeholder="8.241"
            value={info.row.original.points}
            fieldName={`points-${info.row.index}`}
          >
            <Text textStyle="XL" noOfLines={[2, 2]} lineHeight="unset">
              {info.row.original.points || '8.241'}
            </Text>
          </TextEditable>
        </Box>
      ),
      footer: (info: any) => info.column.id,
    },
    {
      accessor: 'groups',
      header: 'Groups',
      cell: (info: any) => (
        <Box width="200px">
          <TextEditable
            hasError={false}
            readOnly={false}
            sizesType="XL"
            setValue={() => console.log('hi!')}
            errorMessage="error message"
            onChange={(event) =>
              setData((prevData) => {
                const newData = [...prevData];
                newData[info.row.index].groups = event.target.value;
                return newData;
              })
            }
            placeholder="Sales, London, CS, Day shift"
            maxRows={2}
            value={info.row.original.groups}
            fieldName={`groups-${info.row.index}`}
          >
            <Text textStyle="XL" noOfLines={[2, 2]} lineHeight="unset">
              {info.row.original.groups || 'Sales, London, CS, Day shift'}
            </Text>
          </TextEditable>
        </Box>
      ),
      footer: (info: any) => info.column.id,
    },
    {
      accessor: 'lastAccess',
      header: 'Last Access',
      cell: (info: any) => (
        <Box width="200px">
          <TextEditable
            hasError={false}
            readOnly={false}
            sizesType="XL"
            setValue={() => console.log('hi!')}
            maxRows={2}
            errorMessage="error message"
            onChange={(event) =>
              setData((prevData) => {
                const newData = [...prevData];
                newData[info.row.index].lastAccess = event.target.value;
                return newData;
              })
            }
            placeholder="17/05/22, 09:20"
            value={info.row.original.lastAccess}
            fieldName={`lastAccess-${info.row.index}`}
          >
            <Text textStyle="XL" noOfLines={[2, 2]} lineHeight="unset">
              {info.row.original.lastAccess || '17/05/22, 09:20'}
            </Text>
          </TextEditable>
        </Box>
      ),
      footer: (info: any) => info.column.id,
    },
    {
      accessor: 'options',
      header: 'Options',
      cell: () => (
        <Box overflow="hidden">
          <InputDropdown
            dataMenu={arrayTitle}
            warning={false}
            disabled={false}
            categoryTitle=""
            sizeInput="md"
            placeholder="Options"
            showIcon={true}
            categoryType="noCategory"
            iconTypes="IconPlaylist"
          />
        </Box>
      ),
      footer: 'Options',
    },
  ]);

  const handleColumnMoveLeft = (index: number) => {
    if (index > 1) {
      const newColumns = [...columns];
      const temp = newColumns[index];
      newColumns[index] = newColumns[index - 1];
      newColumns[index - 1] = temp;
      setColumns(newColumns);
    }
  };

  const handleColumnMoveRight = (index: number) => {
    if (index < columns.length - 1) {
      const newColumns = [...columns];
      const temp = newColumns[index];
      newColumns[index] = newColumns[index + 1];
      newColumns[index + 1] = temp;
      setColumns(newColumns);
    }
  };

  const DraggableHeaderCell = ({
    children,
    index,
  }: {
    children: React.ReactNode;
    index: number;
  }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
      type: 'COLUMN',
      item: { index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }));

    const [, drop] = useDrop(() => ({
      accept: 'COLUMN',
      hover(item: { index: number }) {
        if (item.index !== index) {
          const newIndex = item.index < index ? index - 1 : index;
          handleColumnMoveRight(newIndex);
          item.index = newIndex;
        }
      },
    }));

    return (
      <th
        ref={(node) => drag(drop(node))}
        style={{
          background: 'red',
          cursor: 'move',
          userSelect: 'none',
          opacity: isDragging ? 0.5 : 1,
          backgroundColor: isDragging ? '#f5f5f5' : 'transparent',
        }}
      >
        {children}
      </th>
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <AppEngage>
        <ReactTable
          searchKey="fullName"
          data={data}
          columns={columns.map((column: any, index: number) => ({
            ...column,
            header: (
              <DraggableHeaderCell index={index}>
                {typeof column.header === 'function'
                  ? column.header()
                  : column.header}
              </DraggableHeaderCell>
            ),
          }))}
          handleColumnMoveRight={handleColumnMoveRight}
          handleColumnMoveLeft={handleColumnMoveLeft}
        />
      </AppEngage>
    </DndProvider>
  );
};

export default ExampleReactTable;
