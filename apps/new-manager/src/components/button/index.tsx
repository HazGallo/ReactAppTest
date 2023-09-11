import React from 'react';
import { ButtonIcon } from '@iseazy/react-kit';
import { Box } from '@chakra-ui/react';

export const Button = () => {
  return (
    <Box color={'black'}>
      <ButtonIcon
        isClicked={false}
        isDisabledButton={false}
        sizeButton={'md'}
        typeIcon="IconSearch"
      />
    </Box>
  );
};
