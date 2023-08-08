import { Icon, IconProps } from '@chakra-ui/react';
import { TypesSizesIcons } from './types/typesSizesIcons';

export type sizesType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface Props extends IconProps {
  icon: any;
  sizeName: sizesType;
}

export const Ico = (props: Props) => {
  const { sizeName, icon, ...rest } = props;

  const x = TypesSizesIcons.find((x) => x.sizeName === sizeName);

  return <Icon as={icon} fontSize={x?.size} {...rest} />;
};
