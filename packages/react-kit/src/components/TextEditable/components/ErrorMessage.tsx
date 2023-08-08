import { Box, Text } from '@chakra-ui/react';
import { ERROR_MESSAGE } from '../../../shared/constants';

interface Props {
  readOnly: boolean;
  errorMessage?: string;
  hasError: boolean;
  sizesType?: string;
}

export const ErrorMessage = (props: Props) => {
  const { readOnly, errorMessage, hasError, sizesType } = props;

  return (
    <Box width="full" minHeight="26px">
      {readOnly === false && (
        <Box>
          {hasError && (
            <Text
              textStyle={'sm'}
              paddingLeft=".4em"
              paddingTop=".5em"
              letterSpacing="0px"
              color="compBorderError"
            >
              {errorMessage ? errorMessage : ERROR_MESSAGE}
            </Text>
          )}
        </Box>
      )}
    </Box>
  );
};
