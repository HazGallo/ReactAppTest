import { Box } from '@chakra-ui/react';
import { useState } from 'react';

import { SelectorPath } from '../../components/Selector/components/SelectorPath';

interface Props {
  icon?: any;
  isDisabled: boolean;
  warning: boolean;
  type:
    | 'SelectorPathExpress'
    | 'SelectorPathSteps'
    | 'SelectorPathWizard'
    | 'SelectorPathInstagram'
    | 'SelectorPathCourse';
}

export const ExampleSelectorPath = (props: Props) => {
  const { type, isDisabled, warning } = props;

  const [isSelected, setIsSelected] = useState(false);

  return (
    <SelectorPath
      type={type}
      isDisabled={isDisabled}
      warning={warning}
      isSelected={isSelected}
      onClick={() => setIsSelected((prev) => !prev)}
    />
  );
};
