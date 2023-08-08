import { Box, useMediaQuery } from '@chakra-ui/react';
import { noIcoType, types } from '../../shared/iconsTypes/icons';
import { PlaceholderArea } from '../../components/PlaceholderArea';
import { useState, useRef, useEffect } from 'react';
import { ButtonNew } from '../../components/ButtonNew';
import { DropdownMenu } from '../../components/DropdownMenu';
import { IconsTypes } from '../../shared/iconsTypes/icons';

interface contentData {
  title: string;
  isMenuItem?: boolean;
  icon?: any;
}

interface Props {
  dataMenu: contentData[];
  title: string;
  description: string;
  typeIcon?: types | noIcoType;
  children?: any;
}

export const PlaceholderAreaExtra = (props: Props) => {
  const { description, title, children, typeIcon, dataMenu } = props;

  const [selectedIcon, setSelectedIcon] = useState<types | undefined>(
    undefined
  );
  const [defaultIcon, setDefaultIcon] = useState<types | undefined>(undefined);
  const [isSelected, setIsSelected] = useState<boolean>(false);

  const menuRef = useRef<HTMLDivElement>(null);

  const handleIconClick = () => {
    setIsSelected(!isSelected);
  };

  const handleMenuSelect = (value: string) => {
    const selectedData = dataMenu.find((data) => data.title === value);
    if (selectedData) {
      setSelectedIcon(selectedData.icon);
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

  const [adaptedSizeSm] = useMediaQuery('(max-width: 30rem)');

  return (
    <Box w={'100%'} h={'100%'} p="50px">
      <PlaceholderArea
        title={title}
        description={description}
        typeIcon={typeIcon}
      >
        <DropdownMenu
          iconTypes={IconsTypes}
          positioning={'left'}
          dataMenu={dataMenu}
          onSelect={handleMenuSelect}
          showIcon={true}
          typeMenu={'dropdownMenuOptionIco'}
        >
          <div ref={menuRef}>
            <ButtonNew
              isSelected={isSelected}
              sizeName={adaptedSizeSm ? "md" : "lg"}
              onClick={handleIconClick}
              iconLeft={'IconPlus'}
              label={'New'}
              variant={'primary'}
              formats={'fixed'}
            />
          </div>
        </DropdownMenu>
      </PlaceholderArea>
    </Box>
  );
};
