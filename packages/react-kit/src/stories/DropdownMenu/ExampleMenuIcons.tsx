import { useEffect, useRef, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { DropdownMenu } from '../../components/DropdownMenu';
import { ButtonIco } from '../../components/ButtonIco';
import { types } from '../../shared/iconsTypes/icons';

export type contentType = 'add' | 'remove' | 'selected';
export type contentPosition = 'center' | 'left' | 'right' | 'top';
export type cotentCategory = 'noCategory' | 'withCategory';

interface contentData {
  title: string;
  isMenuItem?: boolean;
  icon?: any;
}

interface Props {
  dataMenu: contentData[];
  categoryTitle?: string;
  categoryType: cotentCategory;
  iconTypes?: any;
  isDisabled?: boolean;
  typeVersion?: contentType;
  positioning?: contentPosition;
  isOpen: boolean;
  isSelected?: boolean;
  children?: any;
  onSelect?: any;
  warning: boolean;
  showIcon?: boolean;
}

export const ExampleMenuIcons = (props: Props) => {
  const {
    positioning,
    typeVersion,
    dataMenu,
    iconTypes,
    isDisabled,
    onSelect,
    categoryType,
    warning,
    showIcon,
  } = props;

  const [isIconChanged, setIsIconChanged] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState<types | undefined>(
    undefined
  );
  const [defaultIcon, setDefaultIcon] = useState<types | undefined>(undefined);
  const [isSelected, setIsSelected] = useState<boolean>(
    props.isSelected || false
  );

  const menuRef = useRef<HTMLDivElement>(null);

  const handleIconClick = () => {
    if (!isDisabled) {
      setIsIconChanged(!isIconChanged);
      setIsSelected(!isSelected);
    }
  };

  const handleMenuSelect = (value: string) => {
    if (!isDisabled) {
      const selectedData = dataMenu.find((data) => data.title === value);
      if (selectedData) {
        setSelectedIcon(selectedData.icon);
        setIsSelected(true);
      }
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsSelected(false);
    }
  };

  useEffect(() => {
    if (dataMenu.length > 0) {
      setDefaultIcon(dataMenu[0].icon);
    }
  }, [dataMenu]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Box ml="100px" mt="10px">
      <DropdownMenu
        iconTypes={iconTypes}
        categoryType={categoryType}
        positioning={positioning}
        typeVersion={typeVersion}
        dataMenu={dataMenu}
        isDisabled={isDisabled}
        onSelect={handleMenuSelect}
        warning={warning}
        showIcon={showIcon}
        typeMenu={'buttonIco'}
        gridQuantity={15}
      >
        <div ref={menuRef}>
          <ButtonIco
            isSelected={isSelected}
            sizeName="md"
            aria-label=""
            onClick={handleIconClick}
            typeIcon={selectedIcon || defaultIcon}
            isDisabled={isDisabled}
          />
        </div>
      </DropdownMenu>
    </Box>
  );
};
