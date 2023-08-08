import React from 'react';

import { ButtonGroup, ButtonGroupProps } from '@chakra-ui/react';

interface Props extends ButtonGroupProps {
  children: React.ReactNode;
  isDisabled?: any;
}

export const ButtonIcoGroup = ({ children, isDisabled, ...rest }: Props) => {
  return (
    <ButtonGroup
      width="full"
      height="full"
      isAttached
      borderRadius={'8px'}
      background={
        isDisabled ? 'compBackgroundFilledDisabled' : 'compBackgroundFilled'
      }
      _isdisabled={{
        background: 'transparent',
        cursor: 'not-allowed',
        _hover: {
          color: 'none',
          background: 'transparent',
        },
        _dark: {
          color: 'neGrey.500',
        },
      }}
      _hover={{
        background: isDisabled ? '' : 'compBackgroundFilledHover',
      }}
      cursor={isDisabled ? 'not-allowed' : 'pointer'}
      _active={{
        bg: '',
      }}
      {...rest}
    >
      {children}
    </ButtonGroup>
  );
};
