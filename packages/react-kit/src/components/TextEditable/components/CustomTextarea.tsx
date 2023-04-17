import React, { ChangeEvent, useEffect, useRef } from 'react';
import { Textarea, Box } from '@chakra-ui/react';
import ResizeTextarea from 'react-textarea-autosize';
import { HeadingTheme } from '../../../theme/sizesHeading/index';
import { TextTheme } from '../../../theme/SizesText/index';
import { textTareaCss } from '../textTarea.type';

export type sizesType = '2XL' | 'XL' | 'lg' | 'md' | 'sm' | 'xs';

interface Props {
  value: string;
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
}

export const CustomTextarea = (props: Props) => {
  const {
    value,
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
    placeholder
  } = props;

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
      color="text"
      width="full"
      resize="none"
      value={value}
      placeholder={placeholder}
      paddingX={1}
      paddingY={1.2}
      autoFocus={autoFocus}
      ref={textareaRef}
      borderRadius="4px"
      fontSize={fontSize}
      lineHeight={ sizeCard == 'md' ? ['16px', '22px'] : sizeCard == 'sm' ? '16px'   : 'unset'}
      _hover={{ cursor: 'pointer' }}
      focusBorderColor="transparent"
      outline="1px solid"
      outlineColor="neAccent.500"
      _selection={{
        background: 'transparent',
      }}
      as={ResizeTextarea} //library implementation for automatic rows
      maxRows={maxRows ?? 10000}
      fontWeight={fontWeight}
      letterSpacing={letterSpacing}
      onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
        setValue(e.target.value)
      }
      onKeyDown={onKeyDown}
      onBlur={onBlur}
      onClick={onClick}
      spellCheck="false"
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
    >
      {value}
    </Textarea>
  );
};
