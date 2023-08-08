import { Box, Icon, IconButtonProps } from '@chakra-ui/react';
import { IconButton as CustomIconButton } from '@chakra-ui/react';
import { IconWarningMark } from '../../assets/customIcons';
import { Ico, sizesType } from '../Ico';
import { TypesSize } from './types/buttonIcoTypes';
import { IconsTypes, types } from '../../shared/iconsTypes/icons';

export type contentBackground =
  | 'backgroundDefault'
  | 'backgroundFilled'
  | 'noBackground'
  | 'UncroppedOption'
  | 'createElement';

export interface Props extends IconButtonProps {
  sizeName: 'sm' | 'md' | 'lg' | 'xl';
  isDisabled?: boolean;
  warning?: boolean;
  typeIcon?: types; //It is optional, but for as long as it is not, until they send the new icons
  icon?: any;
  backgroundType?: contentBackground;
  isSelected?: boolean;
  onClick?: any;
  readOnly?: boolean;
}

export const ButtonIco = (props: Props) => {
  const {
    isSelected,
    onClick,
    sizeName,
    isDisabled,
    warning,
    typeIcon,
    icon,
    backgroundType = 'backgroundDefault',
    readOnly = false,
    ...rest
  } = props;

  const x = TypesSize.find((x) => x.sizeName === sizeName);
  const y = IconsTypes.find((x) => x.type === typeIcon);

  return (
    <Box height={x?.background} width={x?.background} position="relative">
      <CustomIconButton
        as="div"
        borderRadius={x?.borderRadius}
        width="full"
        height="full"
        minH="full"
        minW="full"
        border={sizeName === 'sm' ? '1px' : '2px'}
        borderColor={
          backgroundType === 'backgroundDefault' ||
          backgroundType === 'backgroundFilled' ||
          backgroundType === 'UncroppedOption' ||
          backgroundType === 'createElement'
            ? isDisabled
              ? 'compBorderDisabled'
              : isSelected
              ? 'compBorderSelected'
              : 'compBorderRest'
            : 'compBorderRest'
        }
        color={
          backgroundType === 'UncroppedOption' ||
          backgroundType === 'createElement'
            ? isDisabled
              ? 'txTertiary'
              : isSelected
              ? 'txHighlight'
              : 'neWhite.500'
            : isDisabled
            ? 'txTertiary'
            : isSelected
            ? 'txHighlight'
            : 'txPrimary'
        }
        background={
          backgroundType === 'backgroundDefault'
            ? isDisabled
              ? 'compBackgroundDisabled'
              : isSelected
              ? 'compBackgroundRest'
              : 'compBackgroundRest'
            : backgroundType === 'backgroundFilled' ||
              backgroundType === 'createElement'
            ? isDisabled
              ? 'compBackgroundFilledDisabled'
              : isSelected
              ? 'compBackgroundRest'
              : 'compBackgroundFilled'
            : backgroundType === 'UncroppedOption'
            ? isDisabled
              ? 'compBackgroundDisabled'
              : isSelected
              ? 'compBackgroundTrasparentSelected'
              : 'compBackgroundTransparent'
            : 'compBackgroundRest'
        }
        _isdisabled={{
          color: 'bgGreyIcon',
          background:
            backgroundType === 'backgroundDefault'
              ? 'whiteAlpha.200'
              : 'transparent',
          cursor: 'not-allowed',
          _hover: {
            color: 'none',
            background:
              backgroundType === 'backgroundDefault'
                ? 'whiteAlpha.200'
                : 'transparent',
          },
          _dark: {
            color: 'neGrey.500',
          },
        }}
        _hover={{
          background:
            backgroundType === 'backgroundDefault'
              ? isDisabled
                ? 'compBorderDisabled'
                : isSelected
                ? 'compBackgroundSelectedHover'
                : 'compBackgroundHover'
              : backgroundType === 'backgroundFilled' ||
                backgroundType === 'createElement'
              ? isDisabled
                ? ''
                : isSelected
                ? 'compBackgroundSelectedHover'
                : 'compBackgroundFilledHover'
              : backgroundType === 'UncroppedOption'
              ? isDisabled
                ? ''
                : isSelected
                ? 'compBackgroundTrasparentSelectedHover'
                : 'compBackgroundTrasparentHover'
              : 'compBackgroundRest',
          color:
            backgroundType === 'UncroppedOption' ||
            backgroundType === 'createElement'
              ? isDisabled
                ? 'none'
                : isSelected
                ? 'txHighlightHover'
                : 'neWhite.500'
              : isDisabled
              ? 'none'
              : isSelected
              ? 'txHighlightHover'
              : 'txPrimaryHover',
          borderColor:
            backgroundType === 'backgroundDefault' ||
            backgroundType === 'backgroundFilled' ||
            backgroundType === 'UncroppedOption'
              ? isDisabled
                ? 'compBorderDisabled'
                : isSelected
                ? 'compBorderSelectedHover'
                : 'compBackgroundRest'
              : 'transparent',
          transition: '.3 ease',
        }}
        cursor={isDisabled ? 'not-allowed' : 'pointer'}
        _active={{
          bg: '',
        }}
        icon={
          <Ico
            icon={y?.icon ? y?.icon : icon}
            sizeName={x?.iconSize as sizesType}
          />
        }
        pointerEvents={readOnly ? 'none' : 'auto'}
        {...rest}
        onClick={onClick}
      />

      <Box
        position="absolute"
        right={sizeName === 'sm' ? '0.1em' : '0.2em'}
        color={isDisabled ? 'stWarning.300' : 'stWarning.500'}
        _dark={{
          color: isDisabled ? 'stWarning.300' : 'stWarning.400',
        }}
        top={
          sizeName === 'sm' ? '-0.6em' : sizeName === 'xl' ? '-0.4em' : '-0.3em'
        }
      >
        {warning && (
          <Icon as={IconWarningMark} w={x?.iconWarning} h={x?.iconWarning} />
        )}
      </Box>
    </Box>
  );
};
