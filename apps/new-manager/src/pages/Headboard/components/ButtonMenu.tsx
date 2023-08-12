import { useEffect, useRef, useState } from 'react';
import { DropdownMenu, ButtonNew } from '@iseazy/react-kit';
import { Box } from '@chakra-ui/react';

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
  positioning?: contentPosition;
  isOpen: boolean;
  isSelected?: boolean;
  children?: any;
  onChange?: () => void;
  onSeletedChange?: (title: string) => void;
  warning: boolean;
  isScrolled?: boolean;
}

export const ButtonMenu = (props: Props) => {
  const {
    positioning,
    dataMenu,
    iconTypes,
    isDisabled,
    onChange,
    categoryType,
    isScrolled,
    onSeletedChange,
  } = props;

  const [isSelected, setIsSelected] = useState<boolean>(
    props.isSelected || false
  );

  const menuRef = useRef<HTMLDivElement>(null);

  const handleIconClick = () => {
    if (!isDisabled) {
      setIsSelected(!isSelected);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsSelected(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Box ref={menuRef} zIndex={1} >
      <DropdownMenu
        categoryType={categoryType}
        closeMenu={isScrolled}
        dataMenu={dataMenu}
        iconTypes={iconTypes}
        onChange={onChange}
        onSeletedChange={onSeletedChange}
        positioning={positioning}
        showIcon={isSelected}
        typeMenu={'dropdownMenuOptionIco'}
        typeVersion={'add'}
      >
        <ButtonNew
          formats={'fixed'}
          iconLeft={'IconPlusNew'}
          isDisabled={isDisabled}
          isIconChanged={isSelected}
          isSelected={isSelected}
          label={'New'}
          onClick={handleIconClick}
          sizeName={isScrolled ? 'md' : 'lg'}
          variant={'primary'}
        />
      </DropdownMenu>
    </Box>
  );
};
