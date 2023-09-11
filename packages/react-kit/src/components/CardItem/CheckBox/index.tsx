import { Box, Checkbox } from '@chakra-ui/react';
import React from 'react';

interface props {
  isHovered: boolean;
  isCheck: boolean;
  handleCheckboxChange: () => void;
}

export const CBox = ({ isHovered, isCheck, handleCheckboxChange }: props) => {
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
