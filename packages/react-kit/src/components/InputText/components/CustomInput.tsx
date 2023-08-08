import { ChangeEvent } from 'react';
import { Input } from '@chakra-ui/react';

interface Props {
  value: string;
  onChange: (event: any) => void;
  autoFocus?: boolean;
  placeholder?: string;
  readOnly?: boolean;
  onKeyDown?: any;
  onBlur?: any;
  onClick?: any;
  sizes?: 'md' | 'lg';
  isDisabled?: boolean;
  inputRef?: any;
  backgroundType?: 'primary' | 'secondary';
}

export const CustomInput = (props: Props) => {
  const {
    value,
    onChange,
    autoFocus = false,
    onKeyDown,
    onBlur,
    onClick,
    placeholder,
    sizes,
    readOnly,
    isDisabled,
    inputRef,
    backgroundType,
  } = props;

  return (
    <Input
      readOnly={readOnly}
      borderRadius={'0px'}
      borderColor="transparent"
      focusBorderColor="transparent"
      bg="transparent"
      value={value}
      mt={sizes === 'md' ? '3px' : '4px'}
      ml={sizes === 'md' ? '-1.7px' : '-1.4px'}
      p="0px"
      h="full"
      autoFocus={autoFocus}
      ref={inputRef}
      fontSize={sizes === 'md' ? '14px' : '16px'}
      fontWeight={
        backgroundType === 'primary'
          ? sizes === 'md'
            ? 'regular'
            : 'medium'
          : sizes === 'md'
          ? 'regular'
          : 'regular'
      }
      letterSpacing={sizes === 'md' ? '19' : '18'}
      onChange={onChange}
      placeholder={placeholder === '' ? 'Find in published' : placeholder}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
      onClick={onClick}
      spellCheck={false}
      _placeholder={{ color: 'neGrey.700' }}
      _dark={{
        _placeholder: {
          color: 'neGrey.700',
        },
      }}
      _hover={{
        borderColor: 'transparent',
        focusBorderColor: 'transparent',
        bg: 'transparent',
      }}
      sx={{
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        maxWidth: '100%',
      }}
      cursor={isDisabled ? 'not-allowed' : 'normal'}
      _selection={
        isDisabled
          ? {
              background: 'none',
              color: 'none',
            }
          : {}
      }
    />
  );
};
