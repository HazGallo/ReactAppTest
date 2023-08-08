import { useState } from 'react';

import { ButtonIco } from '../../components/ButtonIco';

import { types } from '../../shared/iconsTypes/icons';

export type contentBackground =
  | 'backgroundDefault'
  | 'backgroundFilled'
  | 'noBackground'
  | 'UncroppedOption'
  | 'createElement';


interface Props {
  sizeName: 'sm' | 'md' | 'lg' | 'xl';
  isDisabled?: boolean;
  warning?: boolean;
  typeIcon: types;
  backgroundType?: contentBackground;
  isSelected?: boolean;
  onClick?: any;
  readOnly?: boolean;
}

export const ButtonIconExample = (props: Props) => {
  const { sizeName, isDisabled, warning, typeIcon, backgroundType, readOnly } = props;

  const [selectState, setSelectState] = useState(false);

  return (
    <ButtonIco
      isSelected={selectState}
      sizeName={sizeName}
      isDisabled={isDisabled}
      warning={warning}
      typeIcon={typeIcon}
      backgroundType={backgroundType}
      onClick={() => setSelectState(!selectState)}
      aria-label={'button-Icon'}
      readOnly={readOnly}
    />
  );
};
