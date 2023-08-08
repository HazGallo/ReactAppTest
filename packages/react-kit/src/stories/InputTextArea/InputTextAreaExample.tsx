import { Box } from '@chakra-ui/react';

import { InputTextArea } from '../../components/InputTextArea';

interface Props {
  isDisabled: boolean;
  placeholder: string;
  warning: boolean;
  typeResize: 'normal' | 'vertical' | 'horizontal';
}

export const InputTextAreaExample = ({
  isDisabled,
  placeholder,
  warning,
  typeResize,
}: Props) => {
  return (
    <Box w={'364px'} h="100%">
      <InputTextArea
        isDisabled={isDisabled}
        placeholder={placeholder}
        warning={warning}
        typeResize={typeResize}
      />
    </Box>
  );
};
