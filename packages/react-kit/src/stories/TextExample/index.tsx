import { Text } from '@chakra-ui/react'

export type sizesType= 'xl' | 'lg' | 'md' | 'sm' | 'xs';

interface Props {
  size: sizesType;
}

export const TextExample = (props: Props) => {
  const { size } = props;

  return (
    <Text textStyle={size}>
      hello {size} 
    </Text>
  );
};
