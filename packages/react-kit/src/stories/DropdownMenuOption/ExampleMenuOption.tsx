import { useState } from 'react';

import { Menu, Box } from '@chakra-ui/react';

import { DropdownMenuOption } from '../../components/DropdownMenuOption';
import { types } from '../../shared/iconsTypes/icons';

export type contentType = 'add' | 'remove' | 'selected';
export type contentPosition = 'center' | 'left' | 'right';
export type cotentCategory = 'noCategory' | 'withCategory';

interface Props {
  title: string;
  iconTypes: types;
  isDisabled?: boolean;
  typeVersion?: contentType;
  warning: boolean;
  showIcon?: boolean;
}

export const ExampleMenuOption = (props: Props) => {
  const { typeVersion, title, iconTypes, isDisabled, warning, showIcon } =
    props;

  const [isSelected, setIsSelected] = useState(false);

  return (
    <Menu isLazy isOpen={true}>
      <Box minWidth="364px">
        <DropdownMenuOption
          //borderRadius="8px"
          position="relative"
          key={title}
          value={title}
          iconTypes={iconTypes}
          isDisabled={isDisabled}
          warning={warning}
          typeVersion={typeVersion}
          label={title}
          isSelected={isSelected}
          showIcon={showIcon}
          onClick={() => setIsSelected((prev) => !prev)}
        />
      </Box>
    </Menu>
  );
};
