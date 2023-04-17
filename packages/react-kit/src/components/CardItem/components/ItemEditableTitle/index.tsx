import { Box, Heading, useMediaQuery } from '@chakra-ui/react';
import { ItemEditableTitleSkeleton } from './ItemEditableTitleSkeleton';
import { TextEditable } from '../../../TextEditable';
import { useState } from 'react';

interface Props {
  title: string;
  placeholder: string;
  readOnly?: boolean;
  autoFocus?: boolean;
  sizeCard?: 'sm' | 'md';
  skeleton?: boolean;
  errorMessage: string;
  hasError: boolean;
  maxRows?: number;
  scrollbar?: boolean;
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
  } = props;

  const [value, setValue] = useState(title);

  const [adaptedSizeSm] = useMediaQuery('(max-width: 30rem)');

  return (
    <Box>
      {skeleton ? (
        <ItemEditableTitleSkeleton sizeCard={sizeCard} value={value} />
      ) : (
        <Box
          w="full"
          h="58px"
          marginBottom={sizeCard == 'md' ? ['-4px', '14.5px'] : '-4px'}
          marginTop={sizeCard == 'md' ? ['-6.5px', '0.5px'] : '-6.5px'}
          marginLeft={sizeCard == 'md' ? ['-3px', '-3px'] : '-3px'}
        >
          <TextEditable
            sizeCard={sizeCard}
            errorMessage={errorMessage}
            readOnly={readOnly}
            sizesType={adaptedSizeSm ? 'xs' : sizeCard == 'md' ? 'sm' : 'xs'}
            setValue={setValue}
            hasError={hasError}
            value={value}
            placeholder={placeholder}
            maxRows={2}
            scrollbar={scrollbar}
          >
            <Heading
              color="text"
              size={adaptedSizeSm ? 'xs' : sizeCard == 'md' ? 'sm' : 'xs'}
              noOfLines={[2, 2]}
              lineHeight={sizeCard == 'md' ? ['16px', '22px'] : '16px'}
            >
              {value}
            </Heading>
          </TextEditable>
        </Box>
      )}
    </Box>
  );
};
