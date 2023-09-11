import React, { useState } from 'react';
import { Box, Input, Button } from '@chakra-ui/react';

import { useTranslation } from 'react-i18next';

interface SearchInputProps {
  inputValue: string;
  handleChange: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  inputValue,
  handleChange,
}) => {
  const [localValue, setLocalValue] = useState(inputValue);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleChange(localValue);
    }
  };

  const handleButtonClickSingapur = () => {
    handleChange('Singapore'); // Cuando se hace clic en el botón "Singapur"
  };

  const handleButtonClickLondon = () => {
    handleChange('London'); // Cuando se hace clic en el botón "London"
  };

  const handleButtonClickToronto = () => {
    handleChange('Toronto'); // Cuando se hace clic en el botón "Toronto"
  };

  const [t, i18n] = useTranslation('global');

  return (
    <Box w={'60%'}>
      <Box>
        <Input
          bg={'gray.900'}
          color={'white'}
          placeholder={t('SearchInput.Busca-ciudad')}
          size="md"
          _placeholder={{ color: 'white' }}
          value={localValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      </Box>
      <Box mt={'5px'} display={'flex'} justifyContent={'center'} gap={'10px'}>
        <Button
          color={'black'}
          rounded={'sm'}
          outline={'2px solid'}
          outlineColor={'black'}
          onClick={handleButtonClickSingapur}
        >
          Singapore
        </Button>
        <Button
          color={'black'}
          rounded={'sm'}
          outline={'2px solid'}
          outlineColor={'black'}
          onClick={handleButtonClickLondon}
        >
          London
        </Button>
        <Button
          color={'black'}
          rounded={'sm'}
          outline={'2px solid'}
          outlineColor={'black'}
          onClick={handleButtonClickToronto}
        >
          Toronto
        </Button>
      </Box>
    </Box>
  );
};

export default SearchInput;
