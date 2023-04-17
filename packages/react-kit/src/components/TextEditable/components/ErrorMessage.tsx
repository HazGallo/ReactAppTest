import { Box, Text } from '@chakra-ui/react';

interface Props {
  readOnly: boolean;
  errorMessage: string;
  hasError: boolean;
  sizesType?: string;
}

export const ErrorMessage = (props: Props) => {
  const { readOnly, errorMessage, hasError, sizesType } = props;

  return (
    <Box width="full" minHeight="26px">
      {readOnly === false ? (
        <Box>
          {hasError ? (
            <Text
              textStyle={sizesType ? sizesType : 'sm'}
              paddingLeft=".4em"
              paddingTop=".4em"
              letter-spacing="0px"
              color="compBorderError"
            >
              {errorMessage}
            </Text>
          ) : (
            <></>
          )}
        </Box>
      ) : (
        <></>
      )}
    </Box>
  );
};
