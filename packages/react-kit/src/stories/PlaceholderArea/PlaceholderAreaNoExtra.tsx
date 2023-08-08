import { Box } from '@chakra-ui/react';
import { noIcoType, types } from '../../shared/iconsTypes/icons';
import { PlaceholderArea } from '../../components/PlaceholderArea';

interface Props {
  title: string;
  description: string;
  typeIcon?: types | noIcoType;
  children?: any;
}

export const PlaceholderAreaNoExtra = (props: Props) => {
  const { description, title, children, typeIcon } = props;

  return (
    <Box w={'100%'} h={'100%'} p="50px">
      <PlaceholderArea
        title={title}
        description={description}
        typeIcon={typeIcon}
      />
    </Box>
  );
};
