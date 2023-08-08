import { Box, TagProps, Text } from '@chakra-ui/react';

import { Ico } from '../Ico';
import { typesVersion } from './types/typesVersion';
import { IconsTypes, types, noIcoType } from '../../shared/iconsTypes/icons';

export type contentType = 'add' | 'remove' | 'selected' | 'link' | 'primary';

interface Props extends TagProps {
  label: string;
  typeIcon?: types | noIcoType;
  isDisabled?: boolean;
  typeVersion?: contentType;
  isSelected?: boolean;
  onClick?: () => void;
  amount?: number;
}

export const Tag = (props: Props) => {
  const {
    isSelected,
    typeVersion,
    label,
    typeIcon,
    isDisabled,
    onClick,
    amount,
    ...rest
  } = props;

  const x = typesVersion.find((x) => x.type === typeVersion);
  const y = IconsTypes.find((x) => x.type === typeIcon);

  return (
    <Box
      {...rest}
      minHeight="36px"
      borderRadius="50px"
      color={
        x?.type === 'remove'
          ? isDisabled
            ? 'bgGreyIcon'
            : isSelected
            ? 'compBorderError'
            : 'neBlack'
          : isDisabled
          ? 'bgGreyIcon'
          : isSelected && typeVersion === 'primary'
          ? 'white'
          : isSelected && typeVersion !== 'primary'
          ? 'txHighlight'
          : 'neBlack'
      }
      background={
        isDisabled
          ? 'compBackgroundHover'
          : isSelected && typeVersion === 'primary'
          ? 'txHighlight'
          : isSelected && typeVersion !== 'primary'
          ? 'compBackgroundRest'
          : 'compBackgroundHover'
      }
      sx={{
        cursor: isDisabled ? 'not-allowed' : 'pointer',
      }}
      _hover={{
        background:
          x?.type === 'remove'
            ? isDisabled
              ? 'compBackgroundHover'
              : isSelected
              ? 'compBackgroundFilledHover'
              : 'compBorderError'
            : isDisabled
            ? 'compBackgroundHover'
            : isSelected && typeVersion === 'primary'
            ? 'txHighlightHover'
            : 'compBackgroundFilledHover',

        color:
          x?.type === 'remove'
            ? isDisabled
              ? 'bgGreyIcon'
              : isSelected
              ? 'compBorderError'
              : 'neWhite.500'
            : isDisabled
            ? 'bgGreyIcon'
            : isSelected && typeVersion === 'primary'
            ? 'neWhite.500'
            : isSelected && typeVersion !== 'primary'
            ? 'txHighlightHover'
            : 'txPrimaryHover',
        transition: '.3 ease',

        border: typeVersion !== 'primary' ? '2px' : '',
        borderColor: isDisabled
          ? 'compBorderDisabled'
          : isSelected
          ? 'compBorderSelectedHover'
          : 'compBorderDisabled',
      }}
      border={typeVersion !== 'primary' ? '2px' : ''}
      borderColor={
        isDisabled
          ? 'compBorderDisabled'
          : isSelected
          ? 'compBorderSelected'
          : 'compBorderRest '
      }
      onClick={onClick}
      px={label.length > 80 ? '2rem' : '20px'}
      py="8px"
      display="flex"
      alignItems="center"
      justifyContent={'center'}
      userSelect={"none"}
    >
      {y?.icon && y?.icon !== 'noIco' && (
        <Ico icon={y?.icon} sizeName="xs" mr="5px" ml="-6px" />
      )}

      <Text
        fontWeight="medium"
        display="flex"
        flexWrap="wrap"
        textStyle="sm"
        wordBreak="break-word"
        sx={{
          cursor: isDisabled ? 'not-allowed' : 'pointer',
          marginBottom: '-3px',
        }}
      >
        {label}
      </Text>
      {amount !== 0 && (
        <Text
          ml="5px"
          fontWeight="medium"
          display="flex"
          flexWrap="wrap"
          textStyle="sm"
          wordBreak="break-word"
          color={isSelected ? 'neGrey.500' : 'txSecondary'}
          sx={{
            cursor: isDisabled ? 'not-allowed' : 'pointer',
            marginBottom: '-3px',
          }}
        >
          {amount}
        </Text>
      )}

      {x?.icon && (
        <Ico
          icon={x?.icon}
          sizeName="xs"
          background="transparent"
          ml="10px"
          mr="-6px"
        />
      )}
    </Box>
  );
};
