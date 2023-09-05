import { Box, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { IconArticle } from '../../../assets/customIcons';

interface props {
  date: string;
  hour: string;
  sizeCard: 'sm' | 'md';
}

export const TextDate = ({ date, hour, sizeCard }: props) => {
  return (
    <Box
      color={'gray'}
      w={'128px'}
      h={'18px'}
      display={'inline-flex'}
      alignItems={'center'}
      gap={'5px'}
    >
      <Icon fontSize={sizeCard === 'md' ? 'sm' : 'xx-small'} as={IconArticle} />
      <Text fontSize={sizeCard === 'md' ? 'sm' : 'xx-small'}>{date}</Text>
      <Text fontSize={sizeCard === 'md' ? 'sm' : 'xx-small'}>-</Text>
      <Text fontSize={sizeCard === 'md' ? 'sm' : 'xx-small'}>{hour}</Text>
    </Box>
  );
};
