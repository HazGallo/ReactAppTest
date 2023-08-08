import { Box, BoxProps, Text } from '@chakra-ui/react';
import { Ico } from '../../Ico';

interface Props extends BoxProps {
  isDisabled?: boolean;
  icon?: any;
  title: string;
  isSelected?: boolean;
  onClick?: any;
  typeButton: 'UncroppedOption' | 'backgroundFilled';
}

export const ButtonUncropped = (props: Props) => {
  const {
    isSelected,
    onClick,
    isDisabled,
    icon,
    title,
    typeButton,
    ...rest
  } = props;

  return (
    <Box
      borderRadius={'8px'}
      width="140px"
      height="140px"
      border="2px"
      borderColor={
        isDisabled
          ? 'compBorderDisabled'
          : isSelected
          ? 'compBorderSelected'
          : 'compBorderRest'
      }
      color={
        typeButton === 'UncroppedOption'
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
        typeButton === 'UncroppedOption'
          ? isDisabled
            ? 'compBackgroundDisabled'
            : isSelected
            ? 'compBackgroundTrasparentSelected'
            : 'compBackgroundTransparent'
          : isDisabled ? 'compBackgroundFilledDisabled'
          : isSelected
          ? 'compBackgroundRest'
          : 'compBackgroundFilled'
      }
      _isdisabled={{
        color: 'bgGreyIcon',
        background: 'compBackgroundTransparentDisabled ',
        cursor: 'not-allowed',
        _hover: {
          color: 'none',
          background: 'compBackgroundTransparentDisabled ',
        },
        _dark: {
          color: 'neGrey.500',
        },
      }}
      _hover={{
        background:
          typeButton === 'UncroppedOption'
            ? isDisabled
              ? ''
              : isSelected
              ? 'compBackgroundTrasparentSelectedHover'
              : 'compBackgroundTrasparentHover'
            : isDisabled
            ? ''
            : isSelected
            ? 'compBackgroundSelectedHover'
            : 'compBackgroundFilledHover',

        color:
          typeButton === 'UncroppedOption'
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

        borderColor: isSelected
          ? 'compBorderSelectedHover'
          : 'compBackgroundRest',
        transition: '.3 ease',
      }}
      cursor={isDisabled ? 'not-allowed' : 'pointer'}
      onClick={onClick}
      display="flex"
      flexDir={'column'}
      alignItems="center"
      justifyContent="center"
      userSelect={"none"}
      {...rest}
    >
      <Ico sizeName="lg" icon={icon} />
      <Text textStyle="md" fontWeight={'500'}>
        {title}
      </Text>
    </Box>
  );
};
