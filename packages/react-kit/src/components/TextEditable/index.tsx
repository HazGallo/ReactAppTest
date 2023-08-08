import React, { useState, useEffect, useRef, ChangeEvent } from 'react';

import { Box } from '@chakra-ui/react';

import { CustomTextarea } from './components/CustomTextarea';
import { ErrorMessage } from './components/ErrorMessage';

export type sizesType = '2XL' | 'XL' | 'lg' | 'md' | 'sm' | 'xs';

interface Props {
  readOnly?: boolean;
  autoFocus?: boolean;
  errorMessage?: string;
  withoutErrorMessage?: boolean;
  hasError: boolean;
  sizesType: sizesType;
  children: any;
  value?: string;
  placeholder?: string;
  maxRows?: number;
  scrollbar?: boolean;
  sizeCard?: string;
  setValue: (event: any) => void;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void; // Propiedad onChange agregada
  fieldName?: string;
  defaultValue?: string;
  register?: any;
}

export const TextEditable = (props: Props) => {
  const {
    readOnly = false,
    onBlur,
    errorMessage,
    autoFocus = false,
    sizesType,
    children,
    setValue,
    hasError,
    value,
    placeholder,
    maxRows,
    scrollbar = false,
    fieldName,
    register,
    onChange,
    defaultValue,
    sizeCard,
    withoutErrorMessage,
    ...rest
  } = props;

  const [focusTextarea, setFocusTextarea] = useState(autoFocus);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.selectionStart = textareaRef.current.value.length;
      textareaRef.current.selectionEnd = textareaRef.current.value.length;
      textareaRef.current.scrollTop = textareaRef.current.scrollHeight;
    }
  }, [focusTextarea]);

  const onKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    if (event.key === 'Enter' && textareaRef.current) {
      textareaRef.current.blur();
    }
  };

  const onBlurFunc = (event: React.FocusEvent<HTMLTextAreaElement>): void => {
    setFocusTextarea(false);

    if (onBlur) {
      onBlur(event);
    }
  };

  const onClick = (event: React.MouseEvent<HTMLTextAreaElement>): void => {
    event.preventDefault();

    setFocusTextarea(true);
  };

  return (
    <Box width={'full'} height="full">
      <Box width={'full'} height="full">
        {focusTextarea ? (
          <CustomTextarea
            value={value}
            setValue={setValue}
            sizesType={sizesType}
            autoFocus={true}
            scrollbar={scrollbar}
            textareaRef={textareaRef}
            maxRows={maxRows ?? 10000}
            onKeyDown={onKeyDown}
            onBlur={onBlurFunc}
            children={children}
            onClick={onClick}
            sizeCard={sizeCard}
            placeholder={placeholder}
            fieldName={fieldName}
            register={register}
            onChange={onChange}
            defaultValue={defaultValue}
            {...rest}
          />
        ) : (
          <Box
            pointerEvents={readOnly ? 'none' : 'auto'}
            color="txPrimary"
            p={'5px'}
            borderRadius="4px"
            lineHeight={
              sizeCard == 'md'
                ? ['16px', '22px']
                : sizeCard == 'sm'
                ? '16px'
                : 'normal'
            }
            onClick={(event: any) => onClick(event)}
            onBlur={(event: any) => onBlurFunc(event)}
            outline={hasError ? '1px solid' : 'transparent'}
            outlineColor={hasError ? 'compBorderError' : 'blackAlpha.300'}
            transition=".3s ease"
            _hover={{
              outline: '1px solid',
              outlineColor: hasError ? 'stError.400' : 'blackAlpha.300',
              _dark: {
                outline: '1px solid',
                outlineColor: hasError ? 'stError.500' : 'neWhite.500',
              },
            }}
          >
            {children}
          </Box>
        )}
      </Box>
      {!withoutErrorMessage && (
        <ErrorMessage
          readOnly={readOnly}
          errorMessage={errorMessage}
          hasError={hasError}
          sizesType={sizesType}
        />
      )}
    </Box>
  );
};
