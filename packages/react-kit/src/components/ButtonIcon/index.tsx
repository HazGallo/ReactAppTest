import { Box, Heading, IconButton, Icon } from '@chakra-ui/react';
import React from 'react';

import { types, IconsTypes } from '../../shared/iconsTypes/icons';

export interface ButtonIconProps {
  typeIcon: types;
}

export const ButtonIcon = ({ typeIcon }: ButtonIconProps) => {
  const y = IconsTypes.find((x) => x.type === typeIcon);
  return (
    <Box>
      <IconButton
        w={'48px'}
        h={'48px'}
        aria-label="Search database"
        icon={<Icon fontSize={'40px'} as={y?.icon} />}
      />
    </Box>
  );
};
