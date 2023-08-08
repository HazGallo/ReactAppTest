import { Box } from '@chakra-ui/react';
import { InputDropdown } from '../../components/InputDropdown';

import { contentCategory } from '../../components/DropdownMenu';
import { types } from '../../shared/iconsTypes/icons';

export type contentType = 'add' | 'remove' | 'selected';

interface Props {
  categoryTitle?: string;
  categoryType: contentCategory;
  iconTypes?: types;
  disabled?: boolean;
  typeVersion?: contentType;
  isSelected?: boolean;
  children?: any;
  onChange?: () => void;
  onSelect?: any;
  warning: boolean;
  showIcon: boolean;
  dataMenu: any;
  sizeInput: 'md' | 'lg';
  placeholder?: string;
}

const ExampleInput = (props: Props) => {
  const {
    iconTypes,
    disabled,
    categoryType,
    warning,
    showIcon,
    dataMenu,
    typeVersion,
    sizeInput,
    placeholder,
  } = props;
  return (
    <Box margin="30px">
      <InputDropdown
        dataMenu={dataMenu}
        showIcon={showIcon}
        warning={warning}
        disabled={disabled}
        iconTypes={iconTypes}
        categoryType={categoryType}
        typeVersion={typeVersion}
        sizeInput={sizeInput}
        placeholder={placeholder}
      />
    </Box>
  );
};

export default ExampleInput;
