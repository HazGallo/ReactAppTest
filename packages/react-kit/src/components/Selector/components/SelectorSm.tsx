import { Box, BoxProps, Icon, Text } from '@chakra-ui/react';
import { Ico } from '../../Ico';
import { IconWarningMark } from '../../../assets/customIcons';
import { IconsTypes, types, noIcoType } from '../../../shared/iconsTypes/icons';

interface Props extends BoxProps {
  typeIcon?: types | noIcoType; //It is optional, but for as long as it is not, until they send the new icons
  title: string;
  isDisabled?: boolean;
  warning?: boolean;
  isSelected?: boolean;
  onClick?: () => void;
}

export const SelectorSm = (props: Props) => {
  const { isSelected, onClick, isDisabled, warning, title, typeIcon, ...rest } =
    props;

  const y = IconsTypes.find((x) => x.type === typeIcon);

  return (
    <Box height="40px" width="full" position="relative">
      <Box
        borderRadius="8px"
        border="2px"
        borderColor={
          isDisabled
            ? 'compBorderDisabled'
            : isSelected
            ? 'compBorderSelected'
            : 'compBorderRest'
        }
        color={
          isDisabled ? 'txTertiary' : isSelected ? 'txHighlight' : 'txPrimary'
        }
        background={
          isDisabled
            ? 'compBackgroundFilledDisabled'
            : isSelected
            ? 'compBackgroundRest'
            : 'compBackgroundFilled'
        }
        _isdisabled={{
          color: 'bgGreyIcon',
          background: 'transparent',
          cursor: 'not-allowed',
          _hover: {
            color: 'none',
            background: 'transparent',
          },
          _dark: {
            color: 'neGrey.500',
          },
        }}
        _hover={{
          background: isDisabled
            ? ''
            : isSelected
            ? 'compBackgroundSelectedHover'
            : 'compBackgroundFilledHover',

          color: isDisabled
            ? 'none'
            : isSelected
            ? 'txHighlightHover'
            : 'txPrimaryHover',
          borderColor: isDisabled
            ? 'compBorderDisabled'
            : isSelected
            ? 'compBorderSelectedHover'
            : 'compBackgroundRest',

          transition: '.3 ease',
        }}
        sx={{
          cursor: isDisabled ? 'not-allowed' : 'pointer',
        }}
        _selection={{
          background: 'none',
          color: 'none',
        }}
        width="full"
        height="full"
        onClick={onClick}
        display="flex"
        justifyContent="center"
        alignItems="center"
        {...rest}
      >
        {y?.icon && y?.icon !== 'noIco' && (
          <Box marginLeft="10px" marginTop="6px">
            <Ico icon={y?.icon} sizeName="sm" />
          </Box>
        )}
        <Text
          ml={y?.icon && y?.icon !== 'noIco' ? '5px' : '15px'}
          mr={y?.icon && y?.icon !== 'noIco' ? '15px' : '15px'}
          textAlign="center"
          textStyle="sm"
          letterSpacing="0px"
          sx={{
            cursor: isDisabled ? 'not-allowed' : 'pointer',
          }}
          _selection={{
            background: 'none',
            color: 'none',
          }}
        >
          {title}
        </Text>
      </Box>
      <Box
        position="absolute"
        right="0.3em"
        color={isDisabled ? 'stWarning.300' : 'stWarning.500'}
        _dark={{
          color: isDisabled ? 'stWarning.300' : 'stWarning.400',
        }}
        top={'-0.2em'}
      >
        {warning && <Icon as={IconWarningMark} w="8px" h="8px" />}
      </Box>
    </Box>
  );
};
