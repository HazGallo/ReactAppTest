import React, { useState, useEffect, useRef } from 'react';
import Quill from 'quill';

import { Box, Icon } from '@chakra-ui/react';
import {
  IcoBold,
  IcoItalic,
  IconBullets,
  IconWarningMark,
} from '../../assets/customIcons';

import { ButtonIco } from '../ButtonIco';
import { PLACEHOLDER_TEXTAREA } from '../../shared/constants';

import 'quill/dist/quill.bubble.css';
import './styles/styles.css';

interface Props {
  isDisabled: boolean;
  placeholder?: string;
  warning: boolean;
  typeResize: 'normal' | 'vertical' | 'horizontal';
  value?: string;
  onChange?: (title: string) => void;
}

export const InputTextArea = ({
  isDisabled,
  placeholder,
  warning,
  typeResize,
  value,
  onChange,
}: Props) => {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const [isTextSelected, setIsTextSelected] = useState(false);
  const [buttonIcoStates, setButtonIcoStates] = useState({
    bold: false,
    italic: false,
    list: false,
  });
  const quillRef = useRef<Quill | null>(null);
  const [selectCursor, setSelectCursor] = useState(false);
  const [currentWidth, setCurrentWidth] = useState<number | undefined>(
    undefined
  );
  const [currentHeight, setCurrentHeight] = useState<number | undefined>(
    undefined
  );
  const [internalValue, setInternalValue] = useState<string>(value || '');

  useEffect(() => {
    setInternalValue(value || '');
  }, [value]);

  const MIN_WIDTH = 200; // Valor mínimo de ancho
  const MIN_HEIGHT = 200; // Valor mínimo de alto

  useEffect(() => {
    if (!isTextSelected) {
      setButtonIcoStates({
        bold: false,
        italic: false,
        list: false,
      });
    }
  }, [isTextSelected]);

  useEffect(() => {
    const editor = document.createElement('div');
    editorRef.current?.appendChild(editor);
    const quill = new Quill(editor, {
      theme: 'snow',
      modules: {
        toolbar: false,
      },
      placeholder: placeholder ? placeholder : PLACEHOLDER_TEXTAREA,
    });
    quillRef.current = quill;

    return () => {
      quillRef.current = null;
      editorRef.current?.removeChild(editor);
    };
  }, [placeholder]);

  useEffect(() => {
    if (quillRef.current) {
      if (internalValue != null) {
        // Save the current selection
        const range = quillRef.current.getSelection();
        // Insert the new content
        quillRef.current.clipboard.dangerouslyPasteHTML(internalValue);
        // Restore the previous selection
        quillRef.current.blur(); // add this line to manually unfocus the editor
        if (range) {
          quillRef.current.setSelection(range);
        }
      }
    }
  }, [internalValue]);

  useEffect(() => {
    setInternalValue(value || '');
  }, [value]);

  useEffect(() => {
    const quill = quillRef.current;

    if (isTextSelected) {
      if (quill) {
        quill.on('text-change', handleContentChange);
        quill.on('selection-change', handleContentChange);
      }

      return () => {
        if (quill) {
          quill.off('text-change', handleContentChange);
          quill.off('selection-change', handleContentChange);
        }
      };
    }
  }, [isTextSelected]);

  const handleContentChange = () => {
    const quill = quillRef.current;

    if (quill) {
      setIsTextSelected(quill.hasFocus());

      const format = quill.getFormat();

      setButtonIcoStates({
        bold: format.bold || false,
        italic: format.italic || false,
        list: format.list || false,
      });

      if (onChange) {
        // Update the internalValue state with the HTML content
        const html = quillRef.current?.root.innerHTML || '';
        setInternalValue(html);
        // Call the external onChange callback, if provided
        onChange(html);
      }
    }
  };

  const handleFormatClick = (format: string) => {
    if (!isDisabled && quillRef.current) {
      const quill = quillRef.current;
      const selection = quill.getSelection();

      if (selection && selection.index != null) {
        const formatValue = quill.getFormat(selection.index, selection.length);
        const isFormatActive = formatValue[format];

        quill.format(format, !isFormatActive);

        setButtonIcoStates((prevState) => ({
          ...prevState,
          [format]: !isFormatActive,
        }));
      }
    }
  };

  const handleFocus = () => {
    setIsTextSelected(true);
  };

  const handleBlur = () => {
    setIsTextSelected(false);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    setSelectCursor(true);
  };

  const handleMouseUp = (e: MouseEvent) => {
    e.preventDefault();
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
    setSelectCursor(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (editorRef.current) {
      let newWidth: number | undefined = undefined;
      let newHeight: number | undefined = undefined;

      if (typeResize === 'normal' || typeResize === 'horizontal') {
        newWidth = e.pageX - editorRef.current.offsetLeft;
        setCurrentWidth(newWidth >= MIN_WIDTH ? newWidth : MIN_WIDTH);
      }

      if (typeResize === 'normal' || typeResize === 'vertical') {
        newHeight = e.pageY - editorRef.current.offsetTop;
        setCurrentHeight(newHeight >= MIN_HEIGHT ? newHeight : MIN_HEIGHT);
      }
    }
  };

  return (
    <Box
      width={currentWidth}
      height={currentHeight}
      minHeight="173px"
      cursor={
        isDisabled
          ? 'not-allowed'
          : selectCursor
          ? typeResize === 'vertical'
            ? 's-resize'
            : typeResize === 'horizontal'
            ? 'w-resize'
            : 'nwse-resize'
          : 'normal'
      }
      position="relative"
      borderRadius="8px"
      bg={isTextSelected ? 'whiteAlpha.100' : 'compBackgroundFilled'}
      _hover={
        isDisabled
          ? { background: '' }
          : isTextSelected
          ? { background: '' }
          : { background: 'compBackgroundFilledHover' }
      }
      border="2px solid"
      borderColor={isTextSelected ? 'blackAlpha.100' : 'whiteAlpha.100'}
      className="input-textarea"
      marginBottom={2} // Margen inferior para evitar que el texto cubra los buttonIco
    >
      <Box
        position="relative"
        fontSize="20px"
        lineHeight="15px"
        color={isDisabled ? 'txTertiary' : 'txPrimary'}
        _hover={{
          color: isDisabled ? 'none' : isTextSelected ? '' : 'txPrimaryHover',
        }}
        letterSpacing={0}
        ml="-7px"
        mt="-2px"
        overflowY="hidden"
        fontWeight="normal"
        userSelect={isDisabled || selectCursor ? 'none' : 'auto'}
        pointerEvents={isDisabled || selectCursor ? 'none' : 'auto'}
        width={currentWidth}
        height={currentHeight}
        paddingBottom="55px"
      >
        <div
          spellCheck="false"
          ref={editorRef}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={
            isDisabled
              ? 'input-textarea ql-editor ql-container placeholderDisabled'
              : isTextSelected
              ? 'ql-editor ql-container placeholderHover'
              : 'ql-editor ql-container placeholderActive'
          }
        />
      </Box>
      <Box>
        <Box position="absolute" bottom="23.5" left="23.5">
          <ButtonIco
            icon={IcoBold}
            sizeName="md"
            isDisabled={isDisabled}
            aria-label="bold"
            backgroundType="backgroundDefault"
            isSelected={buttonIcoStates.bold}
            onClick={() => handleFormatClick('bold')}
          />
        </Box>
        <Box position="absolute" bottom="23.5" left="68.6">
          <ButtonIco
            icon={IcoItalic}
            aria-label="Italic"
            sizeName="md"
            isDisabled={isDisabled}
            backgroundType="backgroundDefault"
            isSelected={buttonIcoStates.italic}
            onClick={() => handleFormatClick('italic')}
          />
        </Box>
        <Box position="absolute" bottom="23.5" right="26.8">
          <ButtonIco
            icon={IconBullets}
            aria-label=""
            sizeName="md"
            isDisabled={isDisabled}
            backgroundType="backgroundDefault"
            isSelected={buttonIcoStates.list}
            onClick={() => handleFormatClick('list')}
          />
        </Box>
        {warning && (
          <Box
            position="absolute"
            top="2px"
            right="8px"
            color={isDisabled ? 'stWarning.300' : 'stWarning.500'}
            _dark={{
              color: isDisabled ? 'stWarning.300' : 'stWarning.400',
            }}
          >
            <Icon as={IconWarningMark} w="9px" h={'9px'} />
          </Box>
        )}
        <Box
          position="absolute"
          bottom="0"
          right="0"
          width="100%"
          height="20px"
          cursor={
            typeResize === 'vertical'
              ? 's-resize'
              : typeResize === 'horizontal'
              ? 'w-resize'
              : 'nwse-resize'
          }
          pointerEvents={isDisabled ? 'none' : 'auto'}
          onMouseDown={handleMouseDown}
        ></Box>
      </Box>
    </Box>
  );
};
