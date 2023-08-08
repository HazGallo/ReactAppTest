import { useState, useRef, useEffect } from 'react';
import { Box, BoxProps, Heading, Icon, Text } from '@chakra-ui/react';

import { IconWarningMark } from '../../../assets/customIcons';
import { SelectorPathTypes } from '../IconPathTypes/PathTypes';

import { Ico } from '../../Ico';

interface Props extends BoxProps {
  title?: string;
  description?: string;
  isDisabled?: boolean;
  warning?: boolean;
  isSelected?: boolean;
  onClick?: () => void;
  type:
    | 'SelectorPathExpress'
    | 'SelectorPathSteps'
    | 'SelectorPathWizard'
    | 'SelectorPathInstagram'
    | 'SelectorPathCourse';
}

export const SelectorPath = (props: Props) => {
  const { onClick, isSelected, isDisabled, warning, type, ...rest } = props;

  const x = SelectorPathTypes.find((x) => x.type === type);

  return (
    <Box height="285px" w="full" position="relative">
      <Box
        borderRadius="8px"
        border="2px"
        borderColor={
          isDisabled
            ? 'compBorderDisabled'
            : isSelected
            ? 'compBorderSelected'
            : 'compBorderRest'
        }
        color={
          isDisabled ? 'txTertiary' : isSelected ? 'txHighlight' : 'txPrimary'
        }
        background={
          isDisabled
            ? 'compBackgroundFilledDisabled'
            : isSelected
            ? 'compBackgroundRest'
            : 'compBackgroundFilled'
        }
        _isdisabled={{
          color: 'bgGreyIcon',
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
          background: isDisabled
            ? ''
            : isSelected
            ? 'compBackgroundSelectedHover'
            : 'compBackgroundFilledHover',

          color: isDisabled
            ? 'none'
            : isSelected
            ? 'txHighlightHover'
            : 'txPrimaryHover',
          borderColor: isDisabled
            ? 'compBorderDisabled'
            : isSelected
            ? 'compBorderSelectedHover'
            : 'compBackgroundRest',

          transition: '.3 ease',
        }}
        sx={{
          cursor: isDisabled ? 'not-allowed' : 'pointer',
        }}
        _selection={{
          background: 'none',
          color: 'none',
        }}
        width="full"
        height="full"
        pt="23px"
        pb="25px"
        onClick={onClick}
        textAlign="center"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        {...rest}
      >
        <Box paddingX="65px" paddingBottom="6px">
          <Ico
            icon={x?.icon}
            sizeName="xl"
            width="90px"
            height="150px"
            opacity={isDisabled ? '.3' : ''}
          />
        </Box>

        <Heading
          sx={{
            cursor: isDisabled ? 'not-allowed' : 'pointer',
          }}
          _selection={{
            background: 'none',
            color: 'none',
          }}
          fontWeight="900"
          pb="9px"
          paddingTop="5px"
          paddingX="25px"
          size="sm"
          textAlign="center"
          width="170px"
          isTruncated
        >
          {x?.label}
        </Heading>
        <Text
          fontWeight="normal"
          height="39px"
          letterSpacing="-0.35px"
          lineHeight="18px"
          overflow="hidden"
          textAlign="center"
          textStyle="md"
          width="170px"
          sx={{
            cursor: isDisabled ? 'not-allowed' : 'pointer',
            overflow: 'hidden',
          }}
          _selection={{
            background: 'none',
            color: 'none',
          }}
          noOfLines={2}
        >
          {x?.description}
        </Text>
      </Box>
      <Box
        position="absolute"
        right="0.6em"
        color={isDisabled ? 'stWarning.300' : 'stWarning.500'}
        _dark={{
          color: isDisabled ? 'stWarning.300' : 'stWarning.400',
        }}
        top={'0.1em'}
        sx={{
          cursor: isDisabled ? 'not-allowed' : 'pointer',
        }}
      >
        {warning && <Icon as={IconWarningMark} w="10px" h="10px" />}
      </Box>
    </Box>
  );
};
