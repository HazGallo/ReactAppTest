import { useState } from 'react';

import { Box, BoxProps, Flex, Icon } from '@chakra-ui/react';

import { TypesSize } from './types/switchSizes';
import { IconsTypes, types, noIcoType } from '../../shared/iconsTypes/icons';

interface Props extends BoxProps {
  isDisabled?: boolean;
  sizes: 'sm' | 'md';
  iconOn?: types | noIcoType;
  iconOf?: types | noIcoType;
  checked?: any;
  onClick?: () => void;
}

export const Switch = (props: Props) => {
  const {
    sizes = 'sm',
    iconOf,
    iconOn,
    isDisabled,
    checked,
    onClick,
    ...rest
  } = props;

  const ON = IconsTypes.find((x) => x.type === iconOn);
  const OF = IconsTypes.find((x) => x.type === iconOf);
  const y = TypesSize.find((x) => x.sizeName === sizes);

  return (
    <Flex
      align="center"
      cursor={isDisabled ? 'not-allowed' : 'pointer'}
      onClick={onClick}
    >
      <Box
        bg={
          isDisabled
            ? checked
              ? 'neAccent.300'
              : 'blackAlpha.100'
            : checked
            ? 'neAccent.500'
            : 'blackAlpha.100'
        }
        _hover={{
          bg: isDisabled ? '' : checked ? 'neAccent.400' : 'blackAlpha.200',
        }}
        borderRadius="50px"
        w={y?.backgroundWidth}
        h={y?.backgroundHeight}
        p="2px"
        transition="background 0.3s"
        {...rest}
        position="relative"
      >
        <Box
          position={'absolute'}
          bg={
            isDisabled
              ? checked
                ? 'whiteAlpha.700'
                : 'whiteAlpha.700'
              : 'neWhite.500'
          }
          rounded="full"
          w={y?.button}
          h={y?.button}
          transform={
            checked
              ? sizes === 'md'
                ? 'translateX(25px)'
                : 'translateX(16px)'
              : 'translateX(0)'
          }
          transition="transform 0.3s"
          zIndex={'2'}
        />
        <Box
          position={'absolute'}
          top={sizes === 'md' ? '3.5px' : '-5.3px'}
          right={
            checked
              ? sizes === 'md'
                ? '28px'
                : '19px'
              : sizes === 'md'
              ? '7px'
              : '6px'
          }
          color={checked ? 'neWhite.500' : 'neGrey.700'}
          transition="opacity 0.1s"
          zIndex={'1'} 
        >
          {checked
            ? ON?.icon &&
              ON?.icon !== 'noIco' && (
                <Icon
                  as={ON?.icon}
                  w={sizes === 'md' ? '16px' : '8px'}
                  h={sizes === 'md' ? '16px' : '8px'}
                />
              )
            : OF?.icon &&
              OF?.icon !== 'noIco' && (
                <Icon
                  as={OF?.icon}
                  w={sizes === 'md' ? '16px' : '8px'}
                  h={sizes === 'md' ? '16px' : '8px'}
                />
              )}
        </Box>
      </Box>
    </Flex>
  );
};
