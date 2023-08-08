import { Box, Text } from '@chakra-ui/react';
import { ERROR_MESSAGE } from '../../../shared/constants';

interface Props {
  errorMessage: string;
  error: any;
}
export const ErrorMessage = (props: Props) => {
  const { error, errorMessage } = props;

  return (
    <Box width="full" minHeight="23px">
      {error && (
        <Text
          textStyle={'sm'}
          paddingLeft=".4em"
          minWidth="364px"
          paddingTop=".4em"
          letterSpacing="0px"
          color="compBorderError"
        >
          {errorMessage ? errorMessage : ERROR_MESSAGE}
        </Text>
      )}
    </Box>
  );
};