import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Box,
  BoxProps,
  Grid,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
} from '@chakra-ui/react';
import { ButtonIco } from '../ButtonIco';
import { DropdownMenuOption } from '../DropdownMenuOption';
import './styles/buttonMenu.css';

export type contentType = 'add' | 'remove' | 'selected';
export type contentPosition = 'center' | 'left' | 'right' | 'top';
export type contentCategory = 'noCategory' | 'withCategory';

interface Categories {
  [key: string]: contentData[];
}

interface contentData {
  title: string;
  isMenuItem?: boolean;
  categoryTitle?: string;
  icon?: any;
}

interface Props extends BoxProps {
  dataMenu: contentData[];
  categoryType?: contentCategory;
  iconTypes?: any;
  isDisabled?: boolean;
  typeVersion?: contentType;
  positioning?: contentPosition;
  isOpen?: boolean;
  children?: any;
  onSelect?: any;
  warning?: boolean;
  onSeletedChange?: (title: string) => void;
  showIcon?: boolean;
  typeMenu: 'buttonIco' | 'dropdownMenuOption' | 'dropdownMenuOptionIco';
  gridQuantity?: number;
}

export const DropdownMenu = (props: Props) => {
  const {
    isOpen: initialIsOpen,
    children,
    positioning,
    typeVersion,
    dataMenu,
    iconTypes,
    isDisabled,
    onSelect,
    warning,
    categoryType,
    showIcon,
    typeMenu,
    gridQuantity = 5,
    onSeletedChange,
    ...rest
  } = props;

  const [isOpen, setIsOpen] = useState(initialIsOpen);
  const [selectedIcon, setSelectedIcon] = useState<string | null>(null);
  const [defaultSelectedIcon, setDefaultSelectedIcon] = useState<string | null>(
    dataMenu.length > 0 ? dataMenu[0].title : null
  );

  const categories: Categories = dataMenu.reduce((acc: Categories, item) => {
    const categoryTitle = item.categoryTitle || '';
    if (!acc[categoryTitle]) {
      acc[categoryTitle] = [];
    }
    acc[categoryTitle].push(item);
    return acc;
  }, {});

  const handleMenuOpen = () => {
    if (!isDisabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleIconClick = (title: string) => {
    setSelectedIcon((prevSelectedIcon) =>
      prevSelectedIcon === title ? null : title
    );

    if (onSeletedChange) {
      onSeletedChange(title);
    }

    onSelect(title);
  };

  return (
    <Box {...rest}>
      <Menu
        placement={
          positioning === 'left'
            ? 'bottom-start'
            : positioning === 'right'
            ? 'bottom-end' : positioning === "top" ? "top" 
            : 'bottom'
        }
        isOpen={isDisabled ? isOpen : initialIsOpen}
        onOpen={handleMenuOpen}
        onClose={handleMenuOpen}
      >
        {children && (
          <MenuButton
            sx={{
              '.css-xl71ch': {
                pointerEvents: 'auto !important',
              },
            }}
          >
            {children}
          </MenuButton>
        )}

        {isOpen && (
          <MenuList
            width={typeMenu === 'dropdownMenuOption' ? '364px' : 'full'}
            pt={categoryType === 'withCategory' ? '1px' : '27px'}
            pb={categoryType === 'withCategory' ? '27px' : '27px'}
            zIndex={999}
            border="none"
            boxShadow="0px 3px 6px"
            color="blackAlpha.300"
            as={motion.div}
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -80 }}
            transition={{ duration: '0.1' }}
            background="neWhite.500"
            _dark={{
              background: 'neGrey.800',
            }}
            cursor={isDisabled ? 'not-allowed' : 'pointer'}
          >
            {Object.entries(categories).map(([categoryTitle, items]) => (
              <Box key={categoryTitle || 'empty-category'}>
                <MenuOptionGroup
                  title={
                    categoryType === 'withCategory' ? categoryTitle || '' : ''
                  }
                  fontSize={typeMenu === 'buttonIco' ? '12px' : '13px'}
                  fontWeight="medium"
                  color="baCategoryMenu"
                  pl={showIcon || typeMenu === 'buttonIco' ? '10px' : '14px'}
                  mt="25px"
                  mb="5px"
                  textTransform="uppercase"
                  display={categoryTitle ? undefined : 'flex'}
                  justifyContent={categoryTitle ? undefined : 'space-between'}
                  userSelect={'none'}
                  cursor={isDisabled ? 'not-allowed' : 'pointer'}
                >
                  {typeMenu === 'dropdownMenuOption' ||
                  typeMenu === 'dropdownMenuOptionIco' ? (
                    items.map((item) => (
                      <DropdownMenuOption
                        key={item.title}
                        value={item.title}
                        iconTypes={item.icon}
                        isDisabled={isDisabled}
                        warning={warning}
                        typeVersion={typeVersion}
                        label={item.title}
                        showIcon={showIcon}
                        onClick={() => handleIconClick(item.title)}
                        my={categoryType === 'withCategory' ? '0px' : '0.4px'}
                        categoryType={categoryType}
                      />
                    ))
                  ) : (
                    <Grid
                      templateColumns={`repeat(${gridQuantity}, 0fr)`}
                      gap={'10px'}
                      mx="25px"
                    >
                      {items.map((item) => (
                        <ButtonIco
                          key={item.title}
                          sizeName={'md'}
                          aria-label={''}
                          isSelected={
                            selectedIcon === null
                              ? item.title === defaultSelectedIcon
                              : selectedIcon === item.title
                          }
                          typeIcon={item.icon}
                          onClick={() => handleIconClick(item.title)}
                          isDisabled={isDisabled}
                        />
                      ))}
                    </Grid>
                  )}
                </MenuOptionGroup>
              </Box>
            ))}
          </MenuList>
        )}
      </Menu>
    </Box>
  );
};
