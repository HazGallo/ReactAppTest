import { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';

import { InputCheckbox, InputDropdown, TextEditable, UserAvatar } from '@iseazy/react-kit';
import { ReactTable } from '../../../../components/table/ReactTable';
import { Video } from '../GridContentDraggable/interfaces/Video.interface';

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

interface Props {
  dataCard: any;
}

const TableDataCard = ({ dataCard }: Props) => {
  const [data, setData] = useState<Video[]>([...dataCard]);
  const [columns, setColumns] = useState<any[]>([
    
    {
      accessor: 'optiones',
      header: () => <InputCheckbox checked={false} isDisabled={false} />,
      cell: () => <InputCheckbox checked={false} isDisabled={false} />,
      footer: (info: any) => info.column.id,
    },
    {
      accessor: 'email',
      header: '',
      cell: (info: any) => (
        <Box display="flex" alignItems="center" gap="3">
          <UserAvatar
            sizes="lg"
            backgroundColor="paCourse"
            name={`${info.row.original.fullName} `}
            avatarSrc={info.row.original.coverimage}
            isDisabled={false}
          />
        </Box>
      ),
      footer: (info: any) => info.column.id,
    },
    {
      accessor: 'description',
      header: 'description',
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
                newData[info.row.index].description = event.target.value;
                return newData;
              })
            }
            placeholder="description"
            maxRows={1}
            value={info.row.original.description}
            fieldName={`description-${info.row.index}`}
          >
            <Text textStyle="XL" noOfLines={1} lineHeight="unset">
              {info.row.original.description || 'description'}
            </Text>
          </TextEditable>
        </Box>
      ),
      footer: (info: any) => info.column.id,
    },
    {
      accessor: 'title',
      header: 'title',
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
                newData[info.row.index].title = event.target.value;
                return newData;
              })
            }
            placeholder="title"
            maxRows={1}
            value={info.row.original.title}
            fieldName={`title-${info.row.index}`}
          >
            <Text textStyle="XL" noOfLines={1} lineHeight="unset">
              {info.row.original.title || 'title'}
            </Text>
          </TextEditable>
        </Box>
      ),
      footer: (info: any) => info.column.id,
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



  return (
   
      <ReactTable
        searchKey="title"
        data={data}
        columns={columns.map((column: any, index: number) => ({
          ...column,
          
        }))}
        handleColumnMoveRight={handleColumnMoveRight}
        handleColumnMoveLeft={handleColumnMoveLeft}
      />
  );
};

export default TableDataCard;
