import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import { ItemGroupNew } from '../../components/ItemGroupNew';

interface Props {
  isDisabled: boolean;
  placeholder: string;
  onClick?: () => void;
}

export const ItemGroupExampleNew = ({
  isDisabled,
  placeholder,
  onClick,
}: Props) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <Box width={'270px'} height={'154px'} m="20px">
      <ItemGroupNew
        isDisabled={isDisabled}
        placeholder={placeholder}
        onClick={onClick}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </Box>
  );
};
