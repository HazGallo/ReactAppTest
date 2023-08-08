import { useState } from 'react';

import { Box, Heading } from '@chakra-ui/react';

import { TextEditable, sizesType } from '../../components/TextEditable';

import { PLACEHOLDER_TEXTAREA } from '../../shared/constants';

interface Props {
  readOnly?: boolean;
  errorMessage?: string;
  sizesType: sizesType;
  hasError: boolean;
  maxRows?: number;
  scrollbar?: boolean;
  placeholder?: string;
}

export const Content = ({
  errorMessage,
  sizesType,
  readOnly,
  hasError,
  maxRows,
  scrollbar,
  placeholder,
}: Props) => {
  const [value, setValue] = useState('Text Editable');

  const onChangeFunc = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setValue(event.target.value);
  };

  return (
    <Box width="364px">
      <TextEditable
        errorMessage={errorMessage}
        readOnly={readOnly}
        sizesType={sizesType}
        setValue={setValue}
        hasError={hasError}
        value={value}
        maxRows={maxRows}
        scrollbar={scrollbar}
        placeholder={placeholder}
        onChange={onChangeFunc}
      >
        <Heading
          size={sizesType}
          noOfLines={[maxRows ?? 1000, maxRows ?? 1000]}
          lineHeight={'unset'}
          color={value === '' ? 'neGrey.700' : 'txPrimary'}
          _dark={{ color: value === '' ? 'neGrey.700' : 'txPrimary' }}
        >
          {value
            ? value
            : placeholder === ''
            ? PLACEHOLDER_TEXTAREA
            : placeholder}
        </Heading>
      </TextEditable>
    </Box>
  );
};
