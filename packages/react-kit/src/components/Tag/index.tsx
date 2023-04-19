import { Box, Text } from '@chakra-ui/react';
import { typesVersion } from './types/typesVersion';
import { useState } from 'react';
import { Ico } from '../Ico';

export type contentType = 'add' | 'remove' | 'selected' | 'link';

interface Props {
  label: string;
  icon?: any;
  disabled?: boolean;
  typeVersion?: contentType;
  onClick?: () => void;
}

export const Tag = (props: Props) => {
  const { typeVersion, label, icon, disabled, onClick } = props;

  const [isSelected, setIsSelected] = useState(false);

  const x = typesVersion.find((x) => x.type === typeVersion);

  return (
    <Box
      w="full"
      h="36px"
      borderRadius="50px"
      color={
        x?.type === 'remove'
          ? disabled
            ? 'bgGreyIcon '
            : isSelected
            ? 'stError.500'
            : 'neBlack'
          : disabled
          ? 'bgGreyIcon '
          : isSelected
          ? 'neAccent.500'
          : 'neBlack'
      }
      background={
        disabled
          ? 'compBackgroundHover'
          : isSelected
          ? 'compBackgroundHover'
          : 'compBackgroundHover'
      }
      _dark={{
        color:
          x?.type === 'remove'
            ? disabled
              ? 'neGrey.500'
              : isSelected
              ? 'stError.400'
              : 'neWhite.500'
            : disabled
            ? 'neGrey.500'
            : isSelected
            ? 'neAccent.400'
            : 'neBlack',
      }}
      sx={{
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
      _hover={{
        background:
          x?.type === 'remove'
            ? disabled
              ? 'compBackgroundHover'
              : isSelected
              ? 'compBackgroundFilledHover'
              : 'stError.500'
            : disabled
            ? 'compBackgroundHover'
            : 'compBackgroundFilledHover',

        color:
          x?.type === 'remove'
            ? disabled
              ? 'bgGreyIcon'
              : isSelected
              ? 'stError.500'
              : 'neWhite.500'
            : '',

        transition: '.3 ease',
      }}
      onClick={() => setIsSelected((prev) => !prev)}
      px="20px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {icon && <Ico icon={icon} sizeName="xs" mr="5px" ml="-5px" />}

      <Text
        mt="2px"
        fontWeight="normal"
        textStyle="sm"
        sx={{
          cursor: disabled ? 'not-allowed' : 'pointer',
        }}
      >
        {label}
      </Text>

      {typeVersion && (
        <Ico
          icon={x?.icon}
          sizeName="xs"
          onClick={onClick}
          background="transparent"
          ml="10px"
          mr="-5px"
        />
      )}
    </Box>
  );
};
