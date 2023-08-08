import { useEffect, useRef, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { DropdownMenu } from '../../components/DropdownMenu';
import { ButtonNew } from '../../components/ButtonNew';
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

export const ExampleMenuContent = (props: Props) => {
  const {
    typeVersion,
    dataMenu,
    iconTypes,
    isDisabled,
    warning,
    showIcon,
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
    <Box ml="30px" mt="10px">
      <DropdownMenu
        iconTypes={iconTypes}
        categoryType={'noCategory'}
        positioning={'left'}
        typeVersion={typeVersion}
        dataMenu={dataMenu}
        isDisabled={isDisabled}
        warning={warning}
        showIcon={showIcon}
        typeMenu={'dropdownMenuOptionIco'}
      >
        <div ref={menuRef}>
          <ButtonNew
            sizeName="lg"
            onClick={handleIconClick}
            iconLeft={'IconPlusNew'}
            isIconChanged={isSelected}
            isDisabled={isDisabled}
            label={'New'}
            variant={'primary'}
            formats={'fixed'}
          />
        </div>
      </DropdownMenu>
    </Box>
  );
};
