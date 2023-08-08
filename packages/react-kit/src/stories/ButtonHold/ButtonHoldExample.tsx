import { useState } from 'react';

import { Box } from '@chakra-ui/react';

import { types, noIcoType } from '../../shared/iconsTypes/icons';
import { ButtonHold } from '../../components/ButtonHold';

interface Props {
  isDisabled?: boolean;
  warning?: boolean;
  cta: string;
  hold: string;
  confirmation: string;
  sizeName: 'md' | 'lg';
  iconCta?: types | noIcoType;
  iconHold?: types | noIcoType;
  iconConfirmation?: types | noIcoType;
}

export const ButtonHoldExample = (props: Props) => {
  const {
    isDisabled,
    sizeName,
    cta,
    hold,
    confirmation,
    warning,
    iconConfirmation,
    iconCta,
    iconHold,
  } = props;

  const [selectState, setSelectState] = useState(false);

  return (
    <Box width={'543px'}>
      <ButtonHold
        isDisabled={isDisabled}
        onClick={() => setSelectState(!selectState)}
        confirmation={confirmation}
        cta={cta}
        hold={hold}
        sizeName={sizeName}
        warning={warning}
        iconCta={iconCta}
        iconHold={iconHold}
        iconConfirmation={iconConfirmation}
      />
    </Box>
  );
};
