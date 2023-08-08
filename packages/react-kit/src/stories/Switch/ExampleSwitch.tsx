import { useState } from 'react';
import { Switch } from '../../components/Switch';

import { types,noIcoType } from '../../shared/iconsTypes/icons';

interface Props {
  isDisabled?: boolean;
  sizes: 'sm' | 'md';
  iconOn?: types | noIcoType;
  iconOf?: types | noIcoType;
}

export const ExampleSwitch = (props: Props) => {
  const { sizes, iconOf, iconOn, isDisabled } = props;

  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    if (!isDisabled) {
      setChecked(!checked);
    }
  };

  return (
    <Switch
      sizes={sizes}
      iconOf={iconOf}
      iconOn={iconOn}
      isDisabled={isDisabled}
      checked={checked}
      onClick={handleToggle}
    />
  );
};
