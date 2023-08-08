import { Box } from '@chakra-ui/react';

import { ImageSelector } from '../../../src/components/ImageSelector';

import { types } from 'src/components/FileDropper/types/iconTypes';

interface Props {
  maxFiles?: number;
  maxSize?: number;
  type?: types;
  hasError: boolean;
  warning: boolean;
  errorMessage: string;
  onDrop: (arg0: any) => void;
  onChange: (event: any) => void;
  onChangeProgress: (progressChange: boolean) => void;
  progressChange?: boolean;
  isDisabled: boolean;
  onSelect: (file: File) => void;
  placeholderSrc?: string;
  sizeMenu?: 'sm' | 'md';
  readonly?: boolean;
}
const SelectorImageExample = (props: Props) => {
  const {
    isDisabled,
    errorMessage,
    placeholderSrc,
    onSelect,
    hasError,
    onChange,
    onChangeProgress,
    onDrop,
    warning,
    maxFiles,
    maxSize,
    progressChange = true,
    type,
    sizeMenu,
    readonly,
  } = props;

  return (
    <Box
      width={['63px', '138px', '364px', '600px', '700px', '850px']}
      height={['66px', '128px', '225px', '400px', '650px', '750px']}
      margin="30px"
    >
      <ImageSelector
        onChangeProgress={onChangeProgress}
        progressChange={progressChange}
        type={type}
        isDisabled={isDisabled}
        errorMessage={errorMessage}
        hasError={hasError}
        warning={warning}
        onDrop={onDrop}
        maxFiles={maxFiles}
        maxSize={maxSize}
        onChange={onChange}
        onSelect={onSelect}
        placeholderSrc={placeholderSrc}
        sizeMenu={sizeMenu}
        readonly={readonly}
      />
    </Box>
  );
};

export default SelectorImageExample;
