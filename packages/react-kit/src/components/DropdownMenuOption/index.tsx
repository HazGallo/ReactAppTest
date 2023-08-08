import { MenuItem, Icon, Box, Text } from '@chakra-ui/react';
import { MenuItemProps } from '@chakra-ui/react';

import { IconWarningMark } from '../../assets/customIcons';
import { Ico } from '../Ico';

import { typesVersion } from './types/typesVersion';
import { IconsTypes, types } from '../../shared/iconsTypes/icons';
import { optionTypes } from './types/typesIcons';

export type contentType = 'add' | 'remove' | 'selected';
export type cotentCategory = 'noCategory' | 'withCategory';

interface Props extends MenuItemProps {
  label: string;
  iconTypes: types;
  isDisabled?: boolean;
  typeVersion?: contentType;
  warning?: boolean;
  isSelected?: boolean;
  showIcon?: boolean;
  categoryType?: cotentCategory;
  children?: any;
}

export const DropdownMenuOption = (props: Props) => {
  const {
    label,
    iconTypes,
    isDisabled,
    typeVersion,
    warning,
    isSelected,
    showIcon,
    categoryType,
    children,
    ...rest
  } = props;

  const x = typesVersion.find((x) => x.type === typeVersion);
  const y = IconsTypes.find((x) => x.type === iconTypes);
  const icons = optionTypes.find((x) => x.type === label);

  return (
    <MenuItem
      {...rest}
      position="relative"
      width={'full'}
      h="40px"
      background={
        isDisabled
          ? 'transparent'
          : isSelected
          ? 'compBackgroundHover'
          : 'transparent'
      }
      color={
        isDisabled ? 'bgGreyIcon' : isSelected ? 'neAccent.500' : 'txPrimary'
      }
      _dark={{
        color: isDisabled
          ? 'bgGreyIcon'
          : isSelected
          ? 'neAccent.400'
          : 'neBlack',
      }}
      _hover={{
        background: isDisabled ? '' : 'compBackgroundFilledHover',
        transition: '.3 ease',
      }}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      px={categoryType === 'noCategory' ? '20px' : '25px'}
      sx={{
        cursor: isDisabled ? 'not-allowed' : 'pointer',
      }}
    >
      <Box
        display="flex"
        justifyContent="start"
        alignItems="center"
        width={'calc(100% - 1em)'}
      >
        {showIcon && (
          <Ico
            icon={y?.icon ? y?.icon : icons?.icon}
            color={
              isDisabled
                ? 'bgGreyIcon'
                : isSelected
                ? 'neAccent.500'
                : icons?.bg
                ? icons?.bg
                : ''
            }
            sizeName="sm"
            mr="11px"
            sx={{
              cursor: isDisabled ? 'not-allowed' : 'pointer',
            }}
          />
        )}
        <Text
          ml={showIcon ? '0px' : '5px'}
          mr="5px"
          mt="3px"
          textStyle="lg"
          letterSpacing={'-0.16px'}
          sx={{
            cursor: isDisabled ? 'not-allowed' : 'pointer',
          }}
          isTruncated
        >
          {label}
        </Text>
      </Box>
      {warning && (
        <Box
          position="absolute"
          right={'0.4rem'}
          color={isDisabled ? 'stWarning.300' : 'stWarning.500'}
          _dark={{
            color: isDisabled ? 'stWarning.300' : 'stWarning.400',
          }}
          top={'-5px'}
        >
          <Icon
            as={IconWarningMark}
            w="8px"
            h="8px"
            sx={{
              cursor: isDisabled ? 'not-allowed' : 'pointer',
            }}
          />
        </Box>
      )}
      {typeVersion && (
        <Ico
          icon={x?.icon}
          sizeName="xs"
          sx={{
            cursor: isDisabled ? 'not-allowed' : 'pointer',
          }}
        />
      )}
      {children}
    </MenuItem>
  );
};
