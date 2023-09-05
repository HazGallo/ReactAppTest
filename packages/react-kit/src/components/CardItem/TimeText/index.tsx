import { Box, Text } from '@chakra-ui/react';
import React from 'react';

interface props {
  time: string;
  sizeCard: 'sm' | 'md';
}

export const TextTime = ({ time, sizeCard }: props) => {
  return (
    <Box>
      <Text
        mt={sizeCard === 'md' ? '0px' : '6px'}
        w={'45px'}
        h={'19px'}
        padding={'2%'}
        fontSize={sizeCard === 'md' ? 'sm' : 'xx-small'}
        color={'gray'}
      >
        {time}
      </Text>
    </Box>
  );
};
