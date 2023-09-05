import { Box, Image } from '@chakra-ui/react';
import React from 'react';

interface props {
  coverImage: string;
  isCheck: boolean;
  sizeCard: 'sm' | 'md';
}

export const ImageCard = ({ coverImage, isCheck, sizeCard }: props) => {
  return (
    <Box>
      <Image
        w={sizeCard === 'md' ? '232px' : '140px'}
        h={sizeCard === 'md' ? '213px' : '110px'}
        src={coverImage}
        borderTopRadius={'8px'}
        _hover={{ filter: 'brightness(40%)' }}
        filter={isCheck ? 'brightness(40%)' : ''}
      ></Image>
    </Box>
  );
};
