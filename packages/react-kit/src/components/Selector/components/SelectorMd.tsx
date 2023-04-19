import { Box, BoxProps, Heading, Icon, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { IconWarningMark } from '../../../assets/customIcons';
import { Ico } from '../../Ico';

interface Props extends BoxProps {
  icon?: any;
  title: string;
  description?: string;
  disabled: boolean;
  warning: boolean;
  isSelected?: boolean;
  onClick?: () => void; 
}

export const SelectorMd = (props: Props) => {
  const { isSelected, onClick, disabled, warning, title, icon, description, ...rest } = props;


  return (
    <Box height="95px" width="76px" position="relative">
      <Box
        borderRadius="8px"
        color={
          disabled ? 'bgGreyIcon' : isSelected ? 'neAccent.500' : 'neBlack'
        }
        background={
          disabled
            ? 'compBackgroundHover'
            : isSelected
            ? 'compBackgroundHover'
            : 'compBackgroundHover'
        }
        _dark={{
          color: disabled
            ? 'neGrey.500'
            : isSelected
            ? 'neAccent.400'
            : 'neBlack',
        }}
        sx={{
          cursor: disabled ? 'not-allowed' : 'pointer',
        }}
        _hover={{
          background: disabled
            ? 'compBackgroundHover'
            : 'compBackgroundFilledHover',
          transition: '.3 ease',
        }}
        width="full"
        height="full"
        onClick={onClick}
        display="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        {...rest}
      >
        {icon ? (
          <Box marginBottom="1px">
            <Ico icon={icon} sizeName="md" />
          </Box>
        ) : (
          <></>
        )}

        <Heading
          w="60px"
          textAlign="center"
          size="xs"
          marginBottom="2px"
          sx={{
            cursor: disabled ? 'not-allowed' : 'pointer',
          }}
          noOfLines={icon && description ? 1 : 2}
        >
          {title}
        </Heading>

        <Text
          w="60px"
          textAlign="center"
          textStyle="md"
          letterSpacing="-0.35px"
          sx={{
            cursor: disabled ? 'not-allowed' : 'pointer',
          }}
          noOfLines={icon ? 1 : 2}
        >
          {description}
        </Text>
      </Box>
      <Box
        position="absolute"
        right="0.3em"
        color={disabled ? 'stWarning.300' : 'stWarning.500'}
        _dark={{
          color: disabled ? 'stWarning.300' : 'stWarning.400',
        }}
        top={'-0.2em'}
      >
        {warning ? <Icon as={IconWarningMark} w="10px" h="10px" /> : <></>}
      </Box>
    </Box>
  );
};
