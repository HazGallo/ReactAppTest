import {
  Box,
  Editable,
  EditableInput,
  EditablePreview,
  EditableTextarea,
} from '@chakra-ui/react';
import React from 'react';

interface props {
  editable: string;
  sizeCard: 'sm' | 'md';
}

export const EditableText = ({ editable, sizeCard }: props) => {
  return (
    <Box>
      <Editable
        fontSize={sizeCard === 'md' ? 'md' : 'sm'}
        color={'text'}
        w={sizeCard === 'md' ? '202px' : '110px'}
        height={'48px'}
        value={editable}
        placeholder={'Title'}
      >
        <EditablePreview noOfLines={2} w={'full'} />
        <EditableTextarea
          rows={2}
          resize={'none'}
          overflowY={'hidden'}
          w={'full'}
        />
      </Editable>
    </Box>
  );
};
