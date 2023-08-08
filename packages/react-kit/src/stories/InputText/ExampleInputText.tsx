import { Box } from '@chakra-ui/react';
import { types, noIcoType } from '../../shared/iconsTypes/icons';
import { InputText } from '../../components/InputText';
import { useState } from 'react';

interface Props {
  autoFocus?: boolean;
  errorMessage?: string;
  hasError: boolean;
  isDisabled?: boolean;
  placeholder?: string;
  iconLeft?: types | noIcoType;
  iconRight?: types | noIcoType;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  warning?: boolean;
  sizes?: 'md' | 'lg';
  value?: string;
  backgroundType?: 'primary' | 'secondary';
}

export const ExampleInputText = (props: Props) => {
  const {
    onBlur,
    errorMessage,
    autoFocus = false,
    isDisabled,
    hasError,
    iconLeft,
    iconRight,
    placeholder,
    warning,
    sizes,
    value = '',
    backgroundType,
  } = props;

  const [inputValue, setInputValue] = useState('');

  return (
    <Box width="215px" m="20px">
      <InputText
        hasError={hasError}
        isDisabled={isDisabled}
        iconLeft={iconLeft}
        iconRight={iconRight}
        placeholder={placeholder}
        warning={warning}
        sizes={sizes}
        errorMessage={errorMessage}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        backgroundType={backgroundType}
      />
    </Box>
  );
};
