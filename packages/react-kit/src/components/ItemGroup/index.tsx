import { useState, useRef, useEffect } from 'react';

import { Box, Flex, Text, Heading } from '@chakra-ui/react';

import { ButtonIco } from '../ButtonIco';
import { TextEditable } from '../TextEditable';
import { ItemAmount } from '../ItemAmount';
import { PLACEHOLDER_TEXTAREA } from '../../shared/constants';

import { dataMenu } from './data/dataMenu';
import { DropdownMenu } from '../DropdownMenu';
import { ItemGroupHover } from './components/ItemGroupHover';

interface Props {
  isDisabled: boolean;
  avatars: any;
  placeholder: string;
  title?: string;
  src: string;
  BadgeGroupColor: string;
  valueHeading: string;
  readonly: boolean;
  onClick?: () => void;
  handleCardClick?: () => void;
  onSeletedChange?: (title: string) => void;
  isSelected?: boolean;
  children?: any;
  setValueHeading: (event: string) => void;
  amount?: number;
  isDragging?: boolean;
  isDraggingItems?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const ItemGroup = ({
  avatars,
  readonly,
  isDisabled,
  placeholder,
  title,
  valueHeading,
  setValueHeading,
  children,
  handleCardClick,
  isSelected,
  onSeletedChange,
  amount,
  isDragging,
  onMouseEnter,
  onMouseLeave,
  isDraggingItems,
}: Props) => {
  const [isEditing, setIsEditing] = useState(false);

  const onChangeFuncHeading = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setValueHeading(event.target.value);
  };

  const handleTextEditableBlur = () => {
    setIsEditing(false);
  };

  const [isIconChanged, setIsIconChanged] = useState(false);
  const [isSelectedMenu, setIsSelectedMenu] = useState<boolean>(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const handleIconClick = () => {
    if (!isDisabled) {
      setIsIconChanged(!isIconChanged);
      setIsSelectedMenu(!isSelectedMenu);
    }
  };

  const handleMenuSelect = (value: string) => {
    if (!isDisabled) {
      const selectedData = dataMenu.find((data) => data.title === value);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsSelectedMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Box
      width="full"
      height="full"
      minWidth="201px"
      minHeight="150px"
      position={'relative'}
    >
      <Box
        zIndex={10}
        position="relative"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        pointerEvents={isDraggingItems ? 'auto' : 'none'}
      >
        <Box
          width="full"
          height="full"
          minWidth="201px"
          minHeight="150px"
          position={'absolute'}
        ></Box>
      </Box>

      {isDragging ? (
        <ItemGroupHover />
      ) : (
        <Box
          width="full"
          height="full"
          minWidth="full"
          minHeight="full"
          borderRadius="8px"
          boxShadow="0px 3px 6px"
          color="bgShadow"
          background={
            isDisabled ? 'compBackgroundFilledDisabled' : 'cdBackground'
          }
          py={children ? '25px' : '18px'}
          px="25px"
          cursor={isDisabled ? 'not-allowed' : 'pointer'}
          onClick={handleCardClick}
          _dark={{
            outlineColor: 'neAccent.400',
          }}
          userSelect={isDisabled ? 'none' : 'auto'}
          position="absolute"
          display={'flex'}
          flexDir="column"
          justifyContent={[
            'normal',
            'normal',
            'center',
            'center',
            'center',
            'center',
          ]}
        >
          {isSelected && !isDisabled && (
            <Box
              borderRadius="8px"
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              border="2px solid"
              borderColor="neAccent.500"
              _dark={{
                borderColor: 'neAccent.400',
              }}
              zIndex="1"
              pointerEvents="none"
            />
          )}

          <Box onClick={readonly ? undefined : (e) => e.stopPropagation()}>
            {children}
          </Box>

          <Flex
            justifyContent="space-between"
            alignItems="center"
            marginTop="9px"
            width="full"
            position="relative"
          >
            <Box marginTop="3px">
              <ItemAmount
                isDisabled={isDisabled}
                size={'md'}
                avatars={avatars}
                amount={amount ?? 23}
              />
            </Box>

            <Box onClick={(e) => e.stopPropagation()}>
              <DropdownMenu
                dataMenu={dataMenu}
                isDisabled={isDisabled}
                showIcon={true}
                typeMenu={'dropdownMenuOptionIco'}
                onSeletedChange={onSeletedChange}
                onSelect={handleMenuSelect}
              >
                <div ref={menuRef}>
                  <ButtonIco
                    isSelected={isSelectedMenu}
                    sizeName="md"
                    aria-label=""
                    onClick={handleIconClick}
                    typeIcon={'IconDotsHorizontal'}
                    isDisabled={isDisabled}
                  />
                </div>
              </DropdownMenu>
            </Box>
          </Flex>

          <Box marginTop="6px">
            {title && (
              <Text
                color={isDisabled ? 'txTertiary' : 'ItemGroupColor'}
                fontWeight="medium"
                letterSpacing="-0.35px"
                fontSize="14px"
                noOfLines={1}
                _dark={{
                  color: isDisabled ? 'txTertiary' : 'neWhite.500',
                }}
                userSelect="none"
              >
                {title}
              </Text>
            )}
          </Box>
          <Box
            width="full"
            height="48px"
            marginLeft="-4px"
            mt="0px"
            onClick={readonly ? undefined : (e) => e.stopPropagation()}
          >
            <TextEditable
              hasError={false}
              sizesType="sm"
              errorMessage="error message"
              placeholder={placeholder}
              readOnly={isDisabled ? true : readonly}
              maxRows={2}
              setValue={setValueHeading}
              value={valueHeading}
              onChange={onChangeFuncHeading}
              onBlur={handleTextEditableBlur}
            >
              <Heading
                color={isDisabled ? 'txTertiary' : ''}
                size="sm"
                noOfLines={2}
                lineHeight="unset"
                userSelect="none"
              >
                {valueHeading
                  ? valueHeading
                  : placeholder === ''
                  ? PLACEHOLDER_TEXTAREA
                  : placeholder}
              </Heading>
            </TextEditable>
          </Box>
        </Box>
      )}
    </Box>
  );
};
