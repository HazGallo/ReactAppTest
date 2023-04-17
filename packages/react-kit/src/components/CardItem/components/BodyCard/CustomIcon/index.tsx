import { Icon } from '@chakra-ui/react';
import { IconCheck } from '../../../../../assets/customIcons';

interface Props {
  isChecked: any;
}

export const CustomIcon = (props: Props) => {
  const { isChecked } = props;

  return <>{isChecked ? <Icon as={IconCheck} /> : null}</>;
};

