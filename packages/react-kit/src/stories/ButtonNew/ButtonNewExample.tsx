import { useState } from 'react';

import { Box } from '@chakra-ui/react';

import { types, noIcoType } from '../../shared/iconsTypes/icons';
import { ButtonNew } from '../../components/ButtonNew';

interface Props {
  label: string;
  iconLeft?: types | noIcoType;
  warning?: boolean;
  sizeName: 'md' | 'lg';
  isDisabled?: boolean;
  isSelected?: boolean;
  formats: 'fixed' | 'unfixed';
}

export const ButtonNewExample = (props: Props) => {
  const {
    label,
    iconLeft,
    sizeName,
    isDisabled,
    warning,
    isSelected,
    formats,
  } = props;

  const [selectState, setSelectState] = useState(false);

  return (
    <Box
      width={'240px'}
      display={'flex'}
      alignItems="center"
      justifyContent="center"
    >
      <ButtonNew
        isSelected={selectState}
        sizeName={sizeName}
        isDisabled={isDisabled}
        warning={warning}
        iconLeft={iconLeft}
        label={label}
        onClick={() => setSelectState(!selectState)}
        formats={formats}
      />
    </Box>
  );
};
