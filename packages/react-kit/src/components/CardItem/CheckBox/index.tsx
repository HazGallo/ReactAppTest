import { Box, Checkbox } from '@chakra-ui/react';
import React from 'react';

export const CBox = ({ isHovered, isCheck, handleCheckboxChange }) => {
  return (
    <Box>
      {isHovered ? (
        <Checkbox
          zIndex={'2'}
          isChecked={isCheck}
          onChange={handleCheckboxChange}
          size={'lg'}
          iconColor={'text'}
        ></Checkbox>
      ) : (
        <></>
      )}
    </Box>
  );
};
