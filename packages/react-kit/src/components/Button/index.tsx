import {
  Box,
  ButtonProps,
  Button as CustomButton,
  Icon,
  Text,
} from '@chakra-ui/react';

import { IconWarningMark } from '../../assets/customIcons';
import { Ico } from '../Ico';

import Lottie from 'react-lottie-player';
import loaderDots from './animation/loaderDots.json';

import { TypesSize } from './types/buttonTypes';
import { IconsTypes, types, noIcoType } from '../../shared/iconsTypes/icons';

import '@fontsource/roboto';

export interface Props extends ButtonProps {
  label: string;
  typeIcon?: types | noIcoType;
  warning?: boolean; 
  sizeName: 'md' | 'lg';
  isDisabled?: boolean;
  isSelected?: boolean;
  variant: 'primary' | 'secondary' | 'tertiary';
  formats: 'fixed' | 'unfixed';
  isLoading?: boolean;
}

export const Button = (props: Props) => {
  const {
    label,
    typeIcon,
    sizeName,
    isDisabled,
    isSelected,
    warning,
    variant = 'primary',
    isLoading,
    formats = 'fixed',
    ...rest
  } = props;

  const y = TypesSize.find((x) => x.sizeName === sizeName);
  const x = IconsTypes.find((x) => x.type === typeIcon);

  const updatedIsSelected = isLoading ? false : isSelected;

  return (
    <CustomButton
      display={formats === 'fixed' ? 'inline-block' : 'block'}
      width={formats === 'fixed' ? (isLoading && !isDisabled  ? '112px' : 'unset') : '100%'}
      height={y?.background}
      borderRadius="8px"
      overflow="hidden"
      borderWidth="2px"
      borderColor={
        isDisabled
          ? 'compBorderDisabled'
          : updatedIsSelected
          ? 'compBorderSelected'
          : 'compBorderRest'
      }
      color={
        variant === 'primary'
          ? isDisabled
            ? 'txTertiary'
            : updatedIsSelected
            ? 'txHighlight'
            : 'neWhite.500'
          : isDisabled
          ? 'txTertiary'
          : updatedIsSelected
          ? 'txHighlight'
          : 'txPrimary'
      }
      background={
        variant === 'primary'
          ? isDisabled
            ? 'compBackgroundFilledDisabled'
            : updatedIsSelected
            ? 'compBackgroundRest'
            : 'neAccent.500'
          : variant === 'secondary'
          ? isDisabled
            ? 'compBackgroundFilledDisabled'
            : updatedIsSelected
            ? 'compBackgroundRest'
            : 'compBackgroundFilled'
          : isDisabled
          ? 'compBorderDisabled'
          : updatedIsSelected
          ? 'compBackgroundRest'
          : 'compBackgroundRest'
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
        background:
          variant === 'primary'
            ? isDisabled
              ? ''
              : updatedIsSelected
              ? 'compBackgroundSelectedHover'
              : 'neAccent.400'
            : isDisabled
            ? ''
            : updatedIsSelected
            ? 'compBackgroundSelectedHover'
            : 'compBackgroundFilledHover',

        color:
          variant === 'primary'
            ? isDisabled
              ? 'none'
              : updatedIsSelected
              ? 'txHighlightHover'
              : 'neWhite.500'
            : isDisabled
            ? 'none'
            : updatedIsSelected
            ? 'txHighlightHover'
            : 'txPrimaryHover',
        borderColor: isDisabled
          ? 'compBorderDisabled'
          : updatedIsSelected
          ? 'compBorderSelectedHover'
          : 'compBackgroundRest',

        transition: '0.3s ease',
      }}
      _active={{
        bg: '',
      }}
      cursor={isDisabled ? 'not-allowed' : 'pointer'}
      position="relative"
      pointerEvents={isLoading && !isDisabled  ? 'none' : 'auto'}
      px="0px"
      py="0px"
      mx="0px"
      my="0px"
      {...rest}
    >
      {isLoading && !isDisabled ? (
        <Box
          position={'absolute'}
          width="full"
          height={'full'}
          display="flex"
          alignContent={'center'}
          justifyContent="center"
          left={0}
          top={0}
        >
          <Lottie
            speed={1}
            loop
            animationData={loaderDots}
            play
            style={{
              height: '100px',
              width: '100px',
              marginTop: sizeName === 'md' ? '-30px' : '-25px',
            }}
          />
        </Box>
      ) : (
        <Box
          w="full"
          h="full"
          pl={
            sizeName === 'md'
              ? x?.icon && x?.icon !== 'noIco'
                ? '15px'
                : '25px'
              :  x?.icon && x?.icon !== 'noIco'
              ? '25px'
              : '30px'
          }
          pr={sizeName === 'md' ? '25px' : '30px'}
          position="relative"
          display="flex"
          alignItems="center"
          justifyContent="center"
          cursor={isDisabled ? 'not-allowed' : 'pointer'}
        >
          {x?.icon && x?.icon !== 'noIco' && <Ico icon={x?.icon} sizeName="sm" mr="5px" />}
          <Text
            mt={sizeName === 'md' ? '10px' : '15px'}
            mb={sizeName === 'md' ? '9px' : '14px'}
            textStyle="textButton"
            textTransform="uppercase"
            cursor={isDisabled ? 'not-allowed' : 'pointer'}
            isTruncated
          >
            {label}
          </Text>

          <Box
            position="absolute"
            right="0.2em"
            top="-0.2em"
            color={isDisabled ? 'stWarning.300' : 'stWarning.500'}
            _dark={{
              color: isDisabled ? 'stWarning.300' : 'stWarning.400',
            }}
            cursor={isDisabled ? 'not-allowed' : 'pointer'}
          >
            {warning ? <Icon as={IconWarningMark} w="8px" h="8px" /> : <></>}
          </Box>
        </Box>
      )}
    </CustomButton>
  );
};
