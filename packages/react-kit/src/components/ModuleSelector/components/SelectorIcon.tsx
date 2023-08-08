import { useEffect, useRef, useState } from 'react';
import { MenuButton, Box } from '@chakra-ui/react';

import { ButtonIco } from '../../ButtonIco';
import { DropdownMenu } from '../../DropdownMenu';
import { types } from '../../../shared/iconsTypes/icons';
import '../styles/menuButton.css';

interface contentData {
  title: string;
  isMenuItem?: boolean;
  icon?: any;
}

interface Props {
  dataMenu: contentData[];
  isDisabled?: boolean;
  checked?: boolean;
  warning?: boolean;
  readOnly?: boolean;
}

export const SelectorIcon = (props: Props) => {
  const { isDisabled, warning, dataMenu, readOnly } = props;

  const menuRef = useRef<HTMLDivElement>(null);
  const [isIconChanged, setIsIconChanged] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState<types | undefined>(
    undefined
  );
  const [defaultIcon, setDefaultIcon] = useState<types | undefined>(undefined);
  const [isSelected, setIsSelected] = useState<boolean>(false);

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
    <Box
      mr="5px"
      h={'full'}
      display={'flex'}
      alignItems="center"
      justifyContent={'center'}
    >
      <DropdownMenu
        categoryType={'withCategory'}
        positioning={'left'}
        dataMenu={dataMenu}
        isDisabled={isDisabled || readOnly}
        onSelect={handleMenuSelect}
        warning={warning}
        showIcon={true}
        typeMenu={'buttonIco'}
      >
        <div ref={menuRef}>
          <ButtonIco
            warning={warning}
            isSelected={isSelected}
            sizeName="xl"
            readOnly={readOnly}
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
