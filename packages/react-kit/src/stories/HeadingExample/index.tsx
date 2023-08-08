import { Heading } from '@chakra-ui/react';

export type sizesType = '2XL' | 'XL' | 'lg' | 'md' | 'sm' | 'xs';

interface Props {
  size: sizesType;
}

export const HeadingExample = (props: Props) => {
  const { size } = props;

  return (
    <Heading size={size} color="neBlack.500" _dark={{ color: 'neWhite.500' }}>
      heading {size}
    </Heading>
  );
};
