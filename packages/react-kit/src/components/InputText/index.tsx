import React, { useState, useEffect, useRef } from 'react';

import { Box, Icon } from '@chakra-ui/react';
import { IconWarningMark } from '../../assets/customIcons';

import { Ico } from '../Ico';
import { CustomInput } from './components/CustomInput';
import { ErrorMessage } from './components/ErrorMessage';

import { types, IconsTypes, noIcoType } from '../../shared/iconsTypes/icons';

interface Props {
  errorMessage?: string;
  hasError: boolean;
  isDisabled?: boolean;
  placeholder?: string;
  iconLeft?: types | noIcoType;
  iconRight?: types | noIcoType;
  warning?: boolean;
  sizes?: 'md' | 'lg';
  value?: string;
  onChange: (event: any) => void;
  keepFocus?: boolean; // Nueva propiedad para mantener el enfoque del input
  onEnterPress?: () => void;
  clicked?: boolean;
  backgroundType?: 'primary' | 'secondary';
}

export const InputText = (props: Props) => {
  const {
    errorMessage,
    isDisabled,
    hasError,
    iconLeft,
    iconRight,
    placeholder,
    warning,
    sizes,
    value = '',
    onChange,
    keepFocus,
    onEnterPress,
    clicked,
    backgroundType = 'primary',
    ...rest
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);
  const y = IconsTypes.find((x) => x.type === iconLeft);
  const x = IconsTypes.find((x) => x.type === iconRight);

  const [focusTextarea, setFocusTextarea] = useState(false); // Usar la propiedad keepFocus por defecto o false si no se proporciona
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
    if (event.key === 'Enter') {
      if (onEnterPress) {
        onEnterPress();
      }
    }
  };

  const onBlurFunc = (): void => {
    if (clicked && onEnterPress && inputRef.current) {
      inputRef.current.focus();
    } else {
      setFocusTextarea(false);
    }
  };

  const onClick = (event: React.MouseEvent<HTMLTextAreaElement>): void => {
    event.preventDefault();

    if (!isDisabled) {
      setFocusTextarea(true);
    }
  };

  return (
    <Box w="100%" height="100%" position={'relative'}>
      <Box
        h={sizes === 'md' ? '40px' : '50px'}
        w="100%"
        borderRadius="8px"
        border="2px"
        borderColor={
          isDisabled
            ? 'compBorderDisabled'
            : hasError
            ? 'compBorderError'
            : focusTextarea
            ? 'compBorderSelected'
            : 'compBorderRest'
        }
        color={
          isDisabled
            ? 'txTertiary'
            : focusTextarea
            ? 'txHighlight'
            : 'txPrimary'
        }
        background={
          backgroundType === 'primary'
            ? isDisabled
              ? 'compBackgroundFilledDisabled'
              : focusTextarea
              ? 'whiteAlpha.100'
              : 'compBackgroundFilled'
            : isDisabled
            ? 'compBackgroundFilledDisabled'
            : focusTextarea
            ? 'cdBackground'
            : 'cdBackground'
        }
        _hover={{
          background:
            backgroundType === 'primary'
              ? isDisabled
                ? ''
                : focusTextarea
                ? ''
                : 'compBackgroundFilledHover'
              : isDisabled
              ? ''
              : focusTextarea
              ? ''
              : 'whiteAlpha.700',
          color: isDisabled ? 'none' : focusTextarea ? '' : 'txPrimaryHover',
          borderColor:
            backgroundType === 'primary'
              ? isDisabled
                ? 'compBorderDisabled'
                : hasError
                ? 'stError.400'
                : focusTextarea
                ? 'compBorderSelectedHover'
                : 'compBackgroundRest'
              : isDisabled
              ? 'compBorderDisabled'
              : hasError
              ? 'stError.400'
              : focusTextarea
              ? 'compBackgroundRest'
              : 'compBackgroundRest',

          transition: '.3 ease',
        }}
        _dark={{
          _hover: {
            background:
              backgroundType === 'secondary' && isDisabled
                ? ''
                : focusTextarea
                ? ''
                : 'compBackgroundFilledHover',
          },
        }}
        py="8px"
        pl={y?.icon && y?.icon !== 'noIco' ? '8px' : '15px'}
        pr="8px"
        display={'flex'}
        alignItems={'center'}
        justifyContent="left"
        position={'relative'}
        cursor={isDisabled ? 'not-allowed' : 'normal'}
      >
        {y?.icon && y?.icon !== 'noIco' && (
          <Ico
            icon={y?.icon}
            sizeName={sizes === 'md' ? 'sm' : 'md'}
            mr="9px"
            cursor={isDisabled ? 'not-allowed' : 'normal'}
          />
        )}

        <Box
          w={'full'}
          display={'flex'}
          alignItems={'center'}
          justifyContent="center"
          color={
            isDisabled
              ? 'txTertiary'
              : value === ''
              ? 'txPrimaryHover'
              : focusTextarea
              ? 'txPrimary'
              : ''
          }
          cursor={isDisabled ? 'not-allowed' : 'normal'}
          pointerEvents={isDisabled ? 'none' : 'auto'}
        >
          <CustomInput
            value={value}
            onChange={onChange}
            autoFocus={true}
            onKeyDown={onKeyDown}
            onBlur={onBlurFunc}
            onClick={onClick}
            placeholder={placeholder}
            sizes={sizes}
            readOnly={isDisabled ? true : focusTextarea ? false : true}
            isDisabled={isDisabled}
            inputRef={inputRef}
            backgroundType={backgroundType}
            {...rest}
          />
        </Box>

        <Box
          position="absolute"
          right={'0.3em'}
          top={'-0.4em'}
          color={isDisabled ? 'stWarning.300' : 'stWarning.500'}
          _dark={{
            color: isDisabled ? 'stWarning.300' : 'stWarning.400',
          }}
        >
          {warning && <Icon as={IconWarningMark} w={'9px'} h={'9px'} />}
        </Box>

        {x?.icon && x?.icon !== 'noIco' && (
          <Ico
            icon={x?.icon}
            sizeName={sizes === 'md' ? 'sm' : 'md'}
            mr="5px"
            ml="8px"
            cursor={isDisabled ? 'not-allowed' : 'normal'}
          />
        )}
      </Box>
      {hasError && <ErrorMessage message={errorMessage} error={hasError} />}
    </Box>
  );
};
