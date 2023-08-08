import { Box } from '@chakra-ui/react';
import { TagSystem } from '../../components/TagSystem';

interface Props {
  isDisabled?: boolean;
  type: 'menu' | 'writting';
  warning: boolean;
}

export const TagSystemExample = (props: Props) => {
  const { isDisabled, type, warning } = props;

  return (
    <Box m="10px">
      <TagSystem type={type} warning={warning} isDisabled={isDisabled} />
    </Box>
  );
};
