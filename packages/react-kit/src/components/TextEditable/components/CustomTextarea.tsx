import React, { ChangeEvent } from 'react';

import { Box, Textarea } from '@chakra-ui/react';
import ResizeTextarea from 'react-textarea-autosize';

import { HeadingTheme } from '../../../theme/sizesHeading/index';
import { TextTheme } from '../../../theme/SizesText/index';

import { textTareaCss } from '../types/textTarea.type';
import { PLACEHOLDER_TEXTAREA } from '../../../shared/constants';

export type sizesType = '2XL' | 'XL' | 'lg' | 'md' | 'sm' | 'xs';

interface Props {
  value?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void; // Propiedad onChange agregada
  setValue: (event: any) => void;
  sizesType: sizesType;
  autoFocus?: boolean;
  scrollbar?: boolean;
  maxRows?: number;
  children?: any;
  placeholder?: string;
  textareaRef?: any;
  sizeCard?: string;
  onKeyDown?: (event: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLTextAreaElement>) => void;
  fieldName?: string;
  defaultValue?: string;
  register?: any;
}

export const CustomTextarea = ({
  value,
  onChange, // Propiedad onChange agregada
  setValue,
  sizesType,
  autoFocus = false,
  scrollbar,
  maxRows,
  onKeyDown,
  onBlur,
  onClick,
  children,
  textareaRef,
  sizeCard,
  placeholder,
  fieldName,
  register,
  defaultValue,
  ...rest
}: Props) => {
  const setFont = () => {
    const typeChild = children.type.render.name;
    const typeDisplayName = children.type.displayName;

    //Heading2
    if (typeChild === 'Heading2' || typeDisplayName === 'Heading') {
      const obj = HeadingTheme.sizes[sizesType];
      return obj;
    }
    //Text2
    const obj = TextTheme[sizesType];
    return obj;
  };

  const { fontSize, fontWeight, letterSpacing } = setFont();

  return (
    <Textarea
      rows={1}
      color="txPrimary"
      width="full"
      resize="none"
      height="full"
      value={value}
      placeholder={placeholder ? placeholder : PLACEHOLDER_TEXTAREA}
      p={'5px'}
      border={0}
      m="0px"
      autoFocus={autoFocus}
      ref={textareaRef}
      borderRadius="4px"
      fontSize={fontSize}
      lineHeight={
        sizeCard === 'md'
          ? ['16px', '22px']
          : sizeCard === 'sm'
          ? '16px'
          : 'normal'
      }
      _hover={{ cursor: 'text' }}
      focusBorderColor="transparent"
      outline="1px solid"
      outlineColor="neAccent.500"
      as={ResizeTextarea} //library implementation for automatic rows
      maxRows={maxRows ?? 10000}
      fontWeight={fontWeight}
      letterSpacing={letterSpacing}
      onChange={onChange} // Propiedad onChange agregada
      onKeyDown={onKeyDown}
      onBlur={onBlur}
      onClick={onClick}
      spellCheck="false"
      _placeholder={{ color: 'neGrey.700' }}
      _dark={{
        _placeholder: {
          color: 'neGrey.700',
        },
      }}
      sx={
        scrollbar === false
          ? {
              '::-webkit-scrollbar': {
                display: 'none',
              },
            }
          : maxRows
          ? { ...textTareaCss }
          : {
              '::-webkit-scrollbar': {
                display: 'none',
              },
            }
      }
      defaultValue={defaultValue}
      {...(fieldName && register && register(fieldName))}
      {...rest}
    >
      {value}
    </Textarea>
  );
};
