import {
  Box,
  ButtonProps,
  Button as CustomButton,
  Icon,
  Text,
} from '@chakra-ui/react';

import { IconChevronDown, IconWarningMark } from '../../assets/customIcons';
import { Ico } from '../Ico';

import { TypesSize } from './types/buttonTypes';
import { IconsTypes, types, noIcoType } from '../../shared/iconsTypes/icons';

import '@fontsource/roboto';

export interface Props extends ButtonProps {
  label: string;
  iconLeft?: types | noIcoType;
  warning?: boolean;
  sizeName: 'md' | 'lg';
  isDisabled?: boolean;
  isSelected?: boolean;
  formats: 'fixed' | 'unfixed';
  isIconChanged?: any;
}

export const ButtonNew = (props: Props) => {
  const {
    label,
    iconLeft,
    sizeName,
    isDisabled,
    isSelected,
    warning,
    formats = 'fixed',
    isIconChanged,
    ...rest
  } = props;

  const y = TypesSize.find((x) => x.sizeName === sizeName);
  const IL = IconsTypes.find((x) => x.type === iconLeft);

  return (
    <Box
      borderRadius="8px"
      boxShadow="0px 3px 6px"
      color={isDisabled ? 'transparent' : 'bgShadowButton'}
      display={formats === 'fixed' ? 'inline-block' : 'block'}
      width={formats === 'fixed' ? 'unset' : '100%'}
      height={y?.background}
    >
      <CustomButton
        as="div"
        w="full"
        h="full"
        borderRadius="8px"
        overflow="hidden"
        borderWidth="2px"
        borderColor={isDisabled ? 'compBorderDisabled' : 'compBorderRest'}
        color={isDisabled ? 'txTertiary' : 'neWhite.500'}
        background={
          isDisabled ? 'compBackgroundFilledDisabled' : 'neAccent.500'
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
          background: isDisabled ? '' : 'neAccent.400',
          color: isDisabled ? 'none' : 'neWhite.500',
          borderColor: isDisabled ? 'compBorderDisabled' : 'compBackgroundRest',
          transition: '0.3s ease',
        }}
        _active={{
          bg: '',
        }}
        cursor={isDisabled ? 'not-allowed' : 'pointer'}
        position="relative"
        px="0px"
        py="0px"
        mx="0px"
        my="0px"
        {...rest}
      >
        <Box
          w="full"
          h="full"
          pl={
            sizeName === 'md'
              ? IL?.icon && IL?.icon !== 'noIco'
                ? '15px'
                : '25px'
              : IL?.icon && IL?.icon !== 'noIco'
              ? '15px'
              : '30px'
          }
          pr={'15px'}
          position="relative"
          display="flex"
          alignItems="center"
          justifyContent="center"
          cursor={isDisabled ? 'not-allowed' : 'pointer'}
        >
          {IL?.icon && IL?.icon !== 'noIco' && (
            <Ico icon={IL?.icon} sizeName="sm" mr="5px" />
          )}

          <Text
            mt={sizeName === 'md' ? '10px' : '15px'}
            mb={sizeName === 'md' ? '9px' : '14px'}
            fontSize="18px"
            fontWeight={'bold'}
            letterSpacing="-0.45px"
            textTransform="uppercase"
            cursor={isDisabled ? 'not-allowed' : 'pointer'}
            isTruncated
          >
            {label}
          </Text>

          <Box
            w="24px"
            h="24px"
            transform={isIconChanged ? 'rotate(180deg)' : 'rotate(0deg)'}
            transition="transform 0.3s ease"
            cursor={!isDisabled ? 'pointer' : 'not-allowed'}
            ml="20px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Ico icon={IconChevronDown} sizeName="sm" />
          </Box>

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
      </CustomButton>
    </Box>
  );
};
