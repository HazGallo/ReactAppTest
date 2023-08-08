import { useEffect, useRef, useState } from 'react';

import { Box, Icon, Text } from '@chakra-ui/react';
import { IconChevronDown, IconWarningMark } from '../../assets/customIcons';

import { Ico } from '../Ico';
import { DropdownMenu } from '../DropdownMenu/index';

import { types, IconsTypes } from '../../shared/iconsTypes/icons';
import { PLACEHOLDER_INPUT } from '../../shared/constants';

export type contentType = 'add' | 'remove' | 'selected';
export type contentPosition = 'center' | 'left' | 'right';
export type cotentCategory = 'noCategory' | 'withCategory';

interface contentData {
  icon?: any;
  isMenuItem?: boolean;
  title: string;
}

interface Props {
  categoryTitle?: string;
  categoryType: cotentCategory;
  children?: any;
  dataMenu: contentData[];
  disabled?: boolean;
  iconTypes?: types;
  onChange?: () => void;
  placeholder?: string;
  positioning?: contentPosition;
  showIcon: boolean;
  sizeInput: 'md' | 'lg';
  typeVersion?: contentType;
  warning?: boolean;
}

export const InputDropdown = (props: Props) => {
  const {
    categoryType,
    dataMenu,
    disabled,
    iconTypes,
    onChange,
    placeholder,
    positioning,
    showIcon,
    sizeInput,
    typeVersion,
    warning,
  } = props;

  const dropmenuRef = useRef<any>(null);
  const [isIconChanged, setIsIconChanged] = useState(false);
  const [onSelectedValue, setOnSelectedValue] = useState('');
  const [selectedIcon, setSelectedIcon] = useState<any>(null);

  const y = IconsTypes.find((x) => x.type === iconTypes);
  const chosenIcon = IconsTypes.find((x) => x.type === selectedIcon);

  const handleIconClick = () => {
    if (!disabled) {
      setIsIconChanged(!isIconChanged);
    }
  };

  const handleMenuSelect = (value: string) => {
    if (!disabled) {
      setOnSelectedValue(value);

      const selectedData = dataMenu.find((data) => data.title === value);
      if (selectedData) {
        setSelectedIcon(selectedData.icon);
      }
    }
  };

  useEffect(() => {
    const handleClick = (event: any) => {
      if (
        dropmenuRef.current &&
        !dropmenuRef?.current?.contains(event.target)
      ) {
        if (isIconChanged) {
          setIsIconChanged(false);
        }
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [dropmenuRef, isIconChanged]);

  return (
    <DropdownMenu
      categoryType={categoryType}
      dataMenu={dataMenu}
      isDisabled={disabled}
      iconTypes={iconTypes}
      onChange={onChange}
      onSelect={handleMenuSelect}
      positioning={positioning}
      showIcon={showIcon}
      typeMenu={'dropdownMenuOption'}
      typeVersion={typeVersion}
      warning={warning}
    >
      <Box
        ref={dropmenuRef}
        onClick={handleIconClick}
        w="364px"
        h={sizeInput === 'md' ? '40px' : '50px'}
        borderRadius="8px"
        border="2px"
        borderColor={
          disabled
            ? 'compBorderDisabled'
            : isIconChanged
            ? 'compBorderSelected'
            : 'compBorderRest'
        }
        color={
          disabled
            ? 'txTertiary'
            : !onSelectedValue
            ? 'txSecondary'
            : isIconChanged
            ? 'txHighlight'
            : 'txPrimary'
        }
        background={
          disabled
            ? 'compBackgroundFilledDisabled'
            : isIconChanged
            ? 'compBackgroundRest'
            : 'compBackgroundFilled'
        }
        _hover={{
          background: disabled
            ? ''
            : isIconChanged
            ? 'compBackgroundSelectedHover'
            : 'compBackgroundFilledHover',
          color: disabled
            ? 'none'
            : isIconChanged
            ? 'txHighlightHover'
            : 'txPrimaryHover',
          borderColor: disabled
            ? 'compBorderDisabled'
            : isIconChanged
            ? 'compBorderSelectedHover'
            : 'compBackgroundRest',
          transition: '.3s ease',
        }}
        position="relative"
        display={'flex'}
        justifyContent="space-between"
        alignItems={'center'}
        pl="15px"
        pr={showIcon && iconTypes ? '15px' : '25px'}
        cursor={disabled ? 'not-allowed' : 'pointer'}
        _active={{
          bg: '',
        }}
      >
        <Box
          display={'flex'}
          justifyContent="flex-start"
          alignItems={'center'}
          h="full"
          w="full"
        >
          {showIcon && iconTypes && (
            <Ico
              mr="12px"
              icon={selectedIcon ? chosenIcon?.icon : y?.icon}
              sizeName="sm"
            />
          )}

          <Box
            display="flex"
            justifyContent="start"
            alignItems="center"
            width={showIcon && iconTypes ? '270px' : '290px'}
          >
            <Text
              textStyle="lg"
              left={showIcon && iconTypes ? '45px' : '20px'}
              color={onSelectedValue ? '' : 'txSecondary'}
              cursor={disabled ? 'not-allowed' : 'pointer'}
              userSelect="none"
              isTruncated
            >
              {onSelectedValue
                ? onSelectedValue
                : placeholder
                ? placeholder
                : PLACEHOLDER_INPUT}
            </Text>
          </Box>
        </Box>

        <Box
          w="24px"
          h="24px"
          transform={isIconChanged ? 'rotate(180deg)' : 'rotate(0deg)'}
          transition="transform 0.3s ease"
          cursor={!disabled ? 'pointer' : 'not-allowed'}
          onClick={handleIconClick}
          color={
            disabled
              ? 'txTertiary'
              : isIconChanged
              ? 'txHighlight'
              : 'txPrimary'
          }
          _hover={{
            color: disabled
              ? 'none'
              : isIconChanged
              ? 'txHighlightHover'
              : 'txPrimaryHover',
          }}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Ico icon={IconChevronDown} sizeName="sm" />
        </Box>
        {warning && (
          <Box
            position="absolute"
            right={'0.2rem'}
            color={disabled ? 'stWarning.300' : 'stWarning.500'}
            _dark={{
              color: disabled ? 'stWarning.300' : 'stWarning.400',
            }}
            top={'-3px'}
          >
            <Icon
              as={IconWarningMark}
              w="8px"
              h="8px"
              sx={{
                cursor: disabled ? 'not-allowed' : 'pointer',
              }}
            />
          </Box>
        )}
      </Box>
    </DropdownMenu>
  );
};
