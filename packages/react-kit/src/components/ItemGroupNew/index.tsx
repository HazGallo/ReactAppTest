import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { InputText } from '../InputText';
import { ButtonIco } from '../ButtonIco';

interface Props {
  isDisabled: boolean;
  placeholder: string;
  onClick?: () => void;
  onClickInput?: () => void;
  value?: string;
  onChange: (event: any) => void;
  onEnterPressInput?: () => void;
}

export const ItemGroupNew = ({
  onClick,
  onClickInput,
  isDisabled,
  placeholder,
  value,
  onChange,
  onEnterPressInput,
}: Props) => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setIsButtonClicked(true);
    if (onClickInput) {
      onClickInput();
    }
  };

  const handleClickOutside = () => {
    setIsButtonClicked(false);
  };

  return (
    <Box
      width="full"
      height="full"
      minWidth="201px"
      minHeight="150px"
      borderRadius="8px"
      background={isDisabled ? 'compBackgroundFilledDisabled' : 'imageLoad'}
      _dark={{
        bg: isDisabled ? 'compBackgroundFilledDisabled' : 'cdBackground',
      }}
      py={'20px'}
      px="20px"
      cursor={isDisabled ? 'not-allowed' : 'pointer'}
      onClick={handleClickOutside}
      userSelect={isDisabled ? 'none' : 'auto'}
      position="relative"
      display={'flex'}
      flexDir="column"
      justifyContent={'flex-end'}
    >
      <Box
        width="full"
        display={'flex'}
        justifyContent="center"
        alignItems={'center'}
        gap="10px"
      >
        <InputText
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          hasError={false}
          onEnterPress={onEnterPressInput}
          isDisabled={isDisabled}
          clicked={isButtonClicked}
          backgroundType="secondary"
        />

        <Box onClick={(e) => e.stopPropagation()}>
          <ButtonIco
            aria-label={''}
            sizeName={'lg'}
            typeIcon="IconPlus"
            backgroundType="createElement"
            onClick={handleButtonClick}
          />
        </Box>
      </Box>
    </Box>
  );
};
