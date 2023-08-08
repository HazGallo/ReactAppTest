import { useState } from 'react';

import { Box } from '@chakra-ui/react';

import { types, noIcoType } from '../../shared/iconsTypes/icons';
import { Button } from '../../components/Button';

interface Props {
  label: string;
  typeIcon?: types | noIcoType;
  warning?: boolean;
  sizeName: 'md' | 'lg';
  isDisabled?: boolean;
  isSelected?: boolean;
  variant: 'primary' | 'secondary' | 'tertiary';
  formats: 'fixed' | 'unfixed';
  isLoading?: boolean;
}

export const ButtonExample = (props: Props) => {
  const {
    label,
    typeIcon,
    sizeName,
    isDisabled,
    warning,
    variant,
    formats,
    isLoading,
  } = props;

  const [selectState, setSelectState] = useState(false);

  return (
    <Box
      width={'240px'}
      display={'flex'}
      alignItems="center"
      justifyContent="center"
    >
      <Button
        isSelected={selectState}
        sizeName={sizeName}
        isDisabled={isDisabled}
        warning={warning}
        typeIcon={typeIcon}
        label={label}
        onClick={() => setSelectState(!selectState)}
        variant={variant}
        formats={formats}
        isLoading={isLoading}
      />
    </Box>
  );
};
