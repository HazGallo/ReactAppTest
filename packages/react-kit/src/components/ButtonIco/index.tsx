import { Box, Icon, IconButton as CustomIconButton } from '@chakra-ui/react';
import { useState } from 'react';
import { IconWarningMark } from '../../assets/customIcons';
import { TypesSize } from './types/buttonIcoTypes';
import { IconsTypes, types } from './types/IconsTypes';
import { Ico } from '../Ico';

interface Props {
  sizeName: 'xs' | 'sm' | 'md';
  disabled: boolean;
  warning: boolean;
  type: types;
}

export const ButtonIco = (props: Props) => {
  const { sizeName, disabled, warning, type } = props;

  const [selectState, setSelectState] = useState(false);

  const x = TypesSize.find((x) => x.sizeName === sizeName);
  const y = IconsTypes.find((x) => x.type === type);

  return (
    <Box height={x?.background} width={x?.background} position="relative">
      <CustomIconButton
        isDisabled={disabled}
        borderRadius={x?.borderRadius}
        width="full"
        height="full"
        minH="full"
        minW="full"
        color={selectState ? 'neAccent.500' : 'neBlack'}
        background={selectState ? 'compBackgroundHover' : 'compBackgroundRest'}
        _dark={{
          color: selectState ? 'neAccent.400' : 'neBlack',
        }}
        _disabled={{
          color: 'bgGreyIcon',
          background: 'whiteAlpha.200',
          cursor: 'not-allowed',
          _hover: {
            color: 'none',
            background: 'whiteAlpha.200',
          },
          _dark: {
            color: 'neGrey.500',
          },
        }}
        _hover={{
          background: selectState
            ? 'compBackgroundFilledHover'
            : 'compBackgroundHover',
          transition: '.3 ease',
        }}
        icon={<Ico icon={y?.icon} sizeName={sizeName} />}
        aria-label="icon-button"
        onClick={() => setSelectState(!selectState)}
      />
      <Box
        position="absolute"
        right={sizeName === 'xs' ? '0.1em' : '0.2em'}
        color={disabled ? 'stWarning.300' : 'stWarning.500'}
        _dark={{
          color: disabled ? 'stWarning.300' : 'stWarning.400',
        }}
        top={sizeName === 'xs' ? '-0.6em' : '-0.3em'}
      >
        {warning ? (
          <Icon as={IconWarningMark} w={x?.iconWarning} h={x?.iconWarning} />
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
};
