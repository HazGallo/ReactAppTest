import { Box } from '@chakra-ui/react';
import { PlaceholderTestQuestion } from '../../../src/components/PlaceholderTestQuestion';

interface Props {
  title: string;
  description: string;
  reset?: boolean;
  children?: any;
}

export const PlaceholderTestExample = (props: Props) => {
  const { description, title, reset } = props;

  return (
    <Box w={'100%'} h={'100%'} p="50px">
      <PlaceholderTestQuestion
        title={title}
        description={description}
        reset={reset}
        onExcelDataProcessed={(data) => {
          console.log(data); // Aquí puedes acceder a los datos de Excel desde fuera.
        }}
      />
    </Box>
  );
};
