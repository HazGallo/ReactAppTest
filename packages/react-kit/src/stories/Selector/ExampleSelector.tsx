import { useState } from 'react';
import { types, noIcoType } from '../../shared/iconsTypes/icons';

import { Selector } from '../../components/Selector';

interface Props {
  typeIcon?: types | noIcoType; //It is optional, but for as long as it is not, until they send the new icons
  title: string;
  description?: string;
  isDisabled: boolean;
  warning: boolean;
  type: 'lg' | 'md' | 'sm' | 'selectorBig';
}

export const ExampleSelector = (props: Props) => {
  const { type, typeIcon, title, description, isDisabled, warning } = props;

  const [isSelected, setIsSelected] = useState(false);

  return (
    <Selector
      type={type}
      typeIcon={typeIcon}
      title={title}
      description={description}
      isDisabled={isDisabled}
      warning={warning}
      isSelected={isSelected}
      onClick={() => setIsSelected((prev) => !prev)}
    />
  );
};
