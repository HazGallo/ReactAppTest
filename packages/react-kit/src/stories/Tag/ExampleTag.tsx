import { useState } from 'react';

import { Tag } from '../../components/Tag';
import { types, noIcoType } from '../../shared/iconsTypes/icons';

export type contentType = 'add' | 'remove' | 'selected' | 'link' | 'primary';

interface Props {
  label: string;
  typeIcon?: types | noIcoType;
  isDisabled?: boolean;
  typeVersion?: contentType;
  amount?: number;
}

export const ExampleTag = (props: Props) => {
  const { label, typeIcon, isDisabled, typeVersion, amount } = props;

  const [isSelected, setIsSelected] = useState(false);

  return (
    <Tag
      typeVersion={typeVersion}
      typeIcon={typeIcon}
      label={label}
      amount={amount}
      isDisabled={isDisabled}
      isSelected={isSelected}
      onClick={() => setIsSelected((prev) => !prev)}
    />
  );
};
