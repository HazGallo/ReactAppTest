import React, { useEffect, useRef, useState } from 'react';

import {
  Box,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  useMediaQuery,
  SimpleGrid,
} from '@chakra-ui/react';

import { DropdownMenuOption } from '../../DropdownMenuOption';
import { IconChevronDown, IconUncropped } from '../../../assets/customIcons';
import { ButtonIco } from '../../../components/ButtonIco';
import { Ico } from '../../../components/Ico';
import { ImageModal } from './ImageModal';
import { ButtonUncropped } from './ButtonUncropped';

import { types } from '../../../shared/iconsTypes/icons';
import { croppingOptions } from '../types/FrameTypes';
import '../styles/menuButton.css';
import {
  getActionButtons,
  getIconSelected,
} from '../types/actionButtonsConfig';

interface Props {
  position: string;
  uncropped: boolean;
  showMenu: boolean;
  isDragging?: boolean;
  placeholderSrc?: string;
  sizeMenu?: 'sm' | 'md';
  file: any;
  progress: number;
  isMenuOpen: any;
  setIsMenuOpen: any;
  onClickEdit: (e: any) => any;
  rootProps: any;
  inputProps: any;
  handlePositionChange: (newPosition: string, index: number) => void;
  handleZoomClick: () => void;
  selectedPosition: number[];
  isLoadingFile?: boolean;
  accept?: any;
}

export const ActionBarButtons: React.FC<Props> = (props) => {
  const {
    placeholderSrc,
    position,
    uncropped,
    showMenu,
    file,
    sizeMenu,
    isMenuOpen,
    setIsMenuOpen,
    onClickEdit,
    rootProps,
    handlePositionChange,
    handleZoomClick,
    selectedPosition,
    isLoadingFile,
    accept,
    inputProps
  } = props;

  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenSubMenu, setIsOpenSubMenu] = useState(false);

  const menuRef1 = useRef<HTMLDivElement>(null);
  const menuRef2 = useRef<HTMLDivElement>(null);

  const [isSmallScreen] = useMediaQuery('(max-width: 768px)');

  const iconSelected = getIconSelected(position);
  const actionButtons = getActionButtons(
    uncropped,
    iconSelected,
    isSmallScreen
  );

  useEffect(() => {
    if (!showMenu) {
      setSelectedItems([]);
      setIsMenuOpen(false);
    }
    if ((!isSmallScreen && sizeMenu === 'md') || isLoadingFile) {
      setIsMenuOpen(false);
    }
  }, [showMenu, isMenuOpen, isSmallScreen, sizeMenu]);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (menuRef2.current && !menuRef2.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSelect = (index: number) => {
    if (showMenu) {
      if (selectedItems.includes(index)) {
        setSelectedItems([]);
      } else {
        setSelectedItems([index]);
        setIsOpen(true);
      }
    }
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClose = () => {
    setSelectedItems([]);
  };

  const handleOutsideClick = (event: any): void => {
    const target = event.target as HTMLElement;

    if (target.tagName === 'IMG' || target.closest('IMG')) {
      return;
    }

    handleClose();
  };

  return (
    <>
      {selectedItems.includes(0) && (
        <ImageModal
          placeholderSrc={placeholderSrc}
          onClick={handleOutsideClick}
          isOpen={isOpen}
          handleClose={handleClose}
          file={file}
        />
      )}

      <Box
        width={sizeMenu === 'sm' ? '40px' : 'full'}
        display={sizeMenu === 'sm' ? 'flex' : ''}
        justifyContent="center"
      >
        <Box
          position={'relative'}
          width={sizeMenu === 'sm' ? '40px' : 'full'}
          height={'100%'}
          color={'bgShadow'}
          opacity={
            isSmallScreen && selectedItems.includes(1)
              ? '1'
              : isSmallScreen
              ? '0'
              : '1'
          }
          pointerEvents={
            isSmallScreen && selectedItems.includes(1)
              ? 'auto'
              : isSmallScreen
              ? 'none'
              : 'auto'
          }
        >
          {selectedItems.includes(1) && (
            <Box
              px={['', '15px']}
              display="flex"
              justifyContent="center"
              pb={['', '15px']}
            >
              <SimpleGrid
                columns={3}
                spacing={'10px'}
                pointerEvents={showMenu ? 'auto' : 'none'}
                justifyItems="center"
              >
                {croppingOptions.map((value, index) => (
                  <ButtonIco
                    key={index}
                    aria-label={value.name}
                    typeIcon={value.icon as types}
                    sizeName="md" //fixed
                    isSelected={selectedPosition.includes(index)}
                    onClick={() => handlePositionChange(value.name, index)}
                    backgroundType={
                      isSmallScreen || sizeMenu === 'sm'
                        ? 'backgroundFilled'
                        : 'UncroppedOption'
                    }
                  />
                ))}
              </SimpleGrid>

              <ButtonUncropped
                ml="25px"
                title={'UNCROPPED'}
                icon={IconUncropped}
                isSelected={uncropped}
                onClick={handleZoomClick}
                typeButton={
                  isSmallScreen || sizeMenu === 'sm'
                    ? 'backgroundFilled'
                    : 'UncroppedOption'
                }
              />
            </Box>
          )}
        </Box>

        {/* Menu general */}
        <Flex
          ref={menuRef1}
          position="absolute"
          alignContent="center"
          justifyContent={
            sizeMenu === 'sm' ? 'center' : ['center', 'space-between']
          }
          width={sizeMenu === 'sm' ? '40px' : 'full'}
          borderRadius="8px"
          px="2px"
          bg={'primary'}
        >
          <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(!isMenuOpen)}>
            <Box
              display={['none', 'flex']}
              pointerEvents={['none', 'auto']}
              alignItems="center"
              justifyContent="center"
            >
              {sizeMenu !== 'sm' &&
                actionButtons.map((value, index) => (
                  <Box display={isSmallScreen ? value.display : {}} key={index}>
                    <ButtonIco
                      aria-label={value.action}
                      typeIcon={value.icon as types}
                      sizeName={'md'}
                      backgroundType="noBackground"
                      isSelected={selectedItems.includes(index)}
                      onClick={() => handleSelect(index)}
                    />
                  </Box>
                ))}
            </Box>

            {/* button para activar el menu cuando es responsive */}
            <Box
              display={sizeMenu === 'sm' || isSmallScreen ? 'block' : 'none'}
            >
              <MenuButton>
                <ButtonIco
                  aria-label={'menu'}
                  typeIcon={'IconDotsHorizontal'}
                  sizeName={'md'}
                  backgroundType="noBackground"
                  onClick={handleMenuToggle}
                />
              </MenuButton>
            </Box>

            {sizeMenu !== 'sm' && (
              <Box display={['none', 'inherit']} position="relative">
                <ButtonIco
                  aria-label={'Delete'}
                  typeIcon={isSmallScreen ? 'IconAtom' : 'IconDelete'}
                  sizeName={'md'}
                  backgroundType="noBackground"
                  isSelected={selectedItems.includes(5)}
                  onClick={() => handleSelect(5)}
                />
              </Box>
            )}

            <MenuList
              marginLeft="0"
              width={['full', '364px']}
              paddingY={'25px'}
              color={'bgShadow'}
              boxShadow={isSmallScreen ? '0px 3px 6px' : ''}
              borderRadius="8px"
              onClick={() => {
                setIsMenuOpen(true);
              }}
              display={isMenuOpen ? '' : 'none'}
              bg={'primary'}
            >
              <Box
                display={['inherit', 'none']}
                position="relative"
                onClick={(e) => e.stopPropagation()}
                {...rootProps()}
              >
                <DropdownMenuOption
                  onClick={() => handleSelect(3)}
                  isSelected={selectedItems.includes(3)}
                  label={'Edit'}
                  iconTypes={'IconEdit'}
                  showIcon={true}
                />
              </Box>

              <DropdownMenuOption
                onClick={() => handleSelect(0)}
                isSelected={selectedItems.includes(0)}
                label={'Maximize'}
                iconTypes={'IconMaximize'}
                showIcon={true}
              />

              <DropdownMenuOption
                label={'Frame'}
                iconTypes={
                  uncropped ? 'IconUncropped' : (iconSelected as types)
                }
                showIcon={true}
                isSelected={isOpenSubMenu}
                // onClick={() => setIsOpenSubMenu(true)}
                onMouseEnter={() => setIsOpenSubMenu(true)}
                onMouseLeave={() => setIsOpenSubMenu(false)}
              >
                <Box
                  display="flex"
                  width="full"
                  alignItems="center"
                  justifyContent="flex-end"
                >
                  {/* sub menu */}
                  <Menu
                    isOpen={isOpenSubMenu}
                    onClose={() => setIsOpenSubMenu(false)}
                  >
                    <MenuButton as="div">
                      <Box
                        w="24px"
                        h="24px"
                        mr="-20px"
                        bg={'transparent'}
                        _active={{
                          bg: 'transparent',
                        }}
                        _hover={{
                          bg: 'transparent',
                        }}
                        //   ref={dropmenuRef}

                        display="flex"
                        justifyContent={'center'}
                        alignItems="center"
                      >
                        <Box
                          transform={
                            isOpenSubMenu ? 'rotate(0deg)' : 'rotate(-90deg)'
                          }
                          transition="transform 0.3s ease"
                          cursor={'pointer'}
                          color={isOpenSubMenu ? 'txHighlight' : 'txPrimary'}
                          _hover={{
                            color: isOpenSubMenu
                              ? 'txHighlightHover'
                              : 'txPrimaryHover',
                          }}
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Ico icon={IconChevronDown} sizeName="xs" />
                        </Box>
                      </Box>
                    </MenuButton>

                    <MenuList mx={['10px', '0px']} bg={'primary'}>
                      <Box p="10px" display="flex" justifyContent="center">
                        <SimpleGrid
                          columns={3}
                          spacing={'10px'}
                          pointerEvents={showMenu ? 'auto' : 'none'}
                          justifyItems="center"
                        >
                          {croppingOptions.map((value, index) => (
                            <ButtonIco
                              key={index}
                              aria-label={value.name}
                              typeIcon={value.icon as types}
                              sizeName="md" //fixed
                              isSelected={selectedPosition.includes(index)}
                              onClick={() =>
                                handlePositionChange(value.name, index)
                              }
                              backgroundType={
                                isSmallScreen || sizeMenu === 'sm'
                                  ? 'backgroundFilled'
                                  : 'UncroppedOption'
                              }
                            />
                          ))}
                        </SimpleGrid>

                        <ButtonUncropped
                          ml="25px"
                          title={'UNCROPPED'}
                          icon={IconUncropped}
                          isSelected={uncropped}
                          onClick={handleZoomClick}
                          typeButton={
                            isSmallScreen || sizeMenu === 'sm'
                              ? 'backgroundFilled'
                              : 'UncroppedOption'
                          }
                        />
                      </Box>
                    </MenuList>
                  </Menu>
                </Box>
              </DropdownMenuOption>

              <DropdownMenuOption
                label={'Unsplash'}
                iconTypes={'IconUnsplash'}
                showIcon={true}
              />

              <DropdownMenuOption
                label={'Delete'}
                iconTypes={'IconDelete'}
                showIcon={true}
              />

              <Box
                display={sizeMenu === 'sm' ? 'inherit' : ['inherit', 'none']}
              >
                <DropdownMenuOption
                  label={'IA'}
                  iconTypes={'IconAtom'}
                  showIcon={true}
                />
              </Box>
            </MenuList>
          </Menu>
        </Flex>
      </Box>
    </>
  );
};
