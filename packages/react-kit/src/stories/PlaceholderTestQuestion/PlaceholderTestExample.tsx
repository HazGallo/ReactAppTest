import { Box } from '@chakra-ui/react';
import { PlaceholderTestQuestion } from '../../../src/components/PlaceholderTestQuestion';

interface Props {
  title: string;
  description: string;
  children?: any;
}

export const PlaceholderTestExample = (props: Props) => {
  const { description, title } = props;

  return (
    <Box w={'100%'} h={'100%'} p="50px">
      <PlaceholderTestQuestion
        title={title}
        description={description}
      ></PlaceholderTestQuestion>
    </Box>
  );
};
