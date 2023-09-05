import { Box, Button, Icon, IconButton } from '@chakra-ui/react';
import React from 'react';
import { IconDotsHorizontal } from '../../../assets/customIcons';

interface props {
  sizeCard: 'sm' | 'md';
}

export const Ico = ({ sizeCard }: props) => {
  return (
    <Box>
      <IconButton
        w={sizeCard === 'md' ? '24px' : '18px'}
        h={sizeCard === 'md' ? '24px' : '18px'}
        color={'text'}
        bg={'transparent'}
        aria-label="Search database"
        icon={
          <Icon
            fontSize={sizeCard === 'md' ? 'xx-large' : 'large'}
            as={IconDotsHorizontal}
          />
        }
      />
    </Box>
  );
};
