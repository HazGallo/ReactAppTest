import React, { useState } from 'react';
import { Box, Heading, useMediaQuery } from '@chakra-ui/react';

import { ItemEditableTitleSkeleton } from './ItemEditableTitleSkeleton';
import { TextEditable } from '../../../../TextEditable';
import { PLACEHOLDER_TEXTAREA } from '../../../../../shared/constants';

interface Props {
  title: string;
  placeholder: string;
  readOnly?: boolean;
  autoFocus?: boolean;
  sizeCard?: 'sm' | 'md';
  skeleton?: boolean;
  errorMessage?: string;
  hasError: boolean;
  maxRows?: number;
  scrollbar?: boolean;
  onClickEditable?: () => void;
}

export const ItemEditableTitle = (props: Props) => {
  const {
    readOnly,
    title,
    placeholder,
    sizeCard,
    skeleton,
    errorMessage,
    hasError,
    scrollbar,
    onClickEditable,
    maxRows,
  } = props;

  const [value, setValue] = useState(title);

  const [adaptedSizeSm] = useMediaQuery('(max-width: 30rem)');

  const onChangeFunc = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setValue(event.target.value);
  };

  return (
    <Box>
      {skeleton ? (
        <ItemEditableTitleSkeleton sizeCard={sizeCard} />
      ) : (
        <Box
          w="full"
          h="58px"
          marginBottom={sizeCard == 'md' ? ['-2px', '19px'] : '-2px'}
          marginTop={sizeCard == 'md' ? ['-6.5px', '-10px'] : '-6.5px'}
          marginLeft={sizeCard == 'md' ? ['-3px', '-3px'] : '-3px'}
          onClick={onClickEditable}
        >
          <TextEditable
            sizeCard={sizeCard}
            errorMessage={errorMessage}
            withoutErrorMessage={true}
            readOnly={readOnly}
            sizesType={adaptedSizeSm ? 'xs' : sizeCard == 'md' ? 'sm' : 'xs'}
            setValue={setValue}
            hasError={hasError}
            value={value}
            placeholder={placeholder}
            maxRows={maxRows ?? 2}
            scrollbar={scrollbar}
            onChange={onChangeFunc}
          >
            <Heading
              color="text"
              size={adaptedSizeSm ? 'xs' : sizeCard == 'md' ? 'sm' : 'xs'}
              noOfLines={[maxRows ?? 2, maxRows ?? 2]}
              lineHeight={sizeCard == 'md' ? ['16px', '22px'] : '16px'}
              _selection={{
                background: 'none',
                color: 'none',
              }}
            >
              {value
                ? value
                : placeholder === ''
                ? PLACEHOLDER_TEXTAREA
                : placeholder}
            </Heading>
          </TextEditable>
        </Box>
      )}
    </Box>
  );
};
