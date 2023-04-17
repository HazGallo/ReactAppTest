import { Text, TextProps } from '@chakra-ui/react';

interface Props extends TextProps {
  size: any;
}

interface SizesLabel {
  [key: string]: any;
}

export const CustomLabel = (props: Props) => {
  const { size, ...rest } = props;

  const indexLabel = size ?? 'md';

  return <Text {...sizesLabel[indexLabel]} {...rest} />
};

const sizesLabel: SizesLabel = {
  button: {
    fontSize: '16px',
    letterSpacing: '0px',
    fontWeight: 'bold',
  },
  xl: {
    fontSize: '20px',
    letterSpacing: '0px',
    fontWeight: 'normal',
  },
  lg: {
    fontSize: '16px',
    letterSpacing: '-0.16px',
    fontWeight: 'medium',
  },
  md: {
    fontSize: '14px',
    letterSpacing: '0px',
    fontWeight: 'normal',
  },
  sm: {
    fontSize: '12px',
    letterSpacing: '0px',
    fontWeight: 'medium',
  },
  xs: {
    fontSize: '10px',
    letterSpacing: '0px',
    fontWeight: 'medium',
  },
};
