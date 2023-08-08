import {
  AvatarGroup,
  AvatarProps,
  Box,
  Heading,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import NumberFormat from '../../shared/FormatNumber';
import { UserAvatar } from '../UserAvatar';
import { TypesSizesAvatar } from './types/typesSizesIcons';

export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';

interface Props {
  isDisabled: boolean;
  size: AvatarSize;
  avatars: AvatarProps[];
  maxAvatar?: number;
  amount?: number;
}

export const ItemAmount = (props: Props) => {
  const { avatars, isDisabled, size, amount = 34 } = props;

  const x = TypesSizesAvatar.find((x) => x.sizeName === size);

  const [isLargerThanMd] = useMediaQuery('(min-width: 20em)');
  const [isLargerThanLg] = useMediaQuery('(min-width: 25em)');
  const [isLargerThanXl] = useMediaQuery('(min-width: 30em)');

  const numberAvatars = Math.min(
    Math.max(amount, 0) + 1,
    isLargerThanXl ? 4 : isLargerThanLg ? 3 : isLargerThanMd ? 2 : 1
  );

  return (
    <Box
      position="relative"
      gap={
        size === 'sm' || size === 'md'
          ? '15px'
          : size === 'lg'
          ? '25px'
          : '30px'
      }
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-between'}
      w="full"
    >
      {amount !== 0 && (
        <Box
          position={'relative'}
          height={x?.size}
          display="flex"
          justifyContent="center"
          gap={
            size === 'sm' || size === 'md'
              ? '15px'
              : size === 'lg'
              ? '20px'
              : '30px'
          }
        >
          {avatars.slice(0, numberAvatars - 1).map((avatar: any, index) => (
            <UserAvatar
              sizes={size}
              position="absolute"
              backgroundColor={avatar.backgroundColor ?? 'paCourse'}
              key={index}
              name={avatar.name}
              isDisabled={isDisabled}
              // ml={size === 'xl' ? '-25px' : ''}
              avatarSrc={avatar.src}
              borderWidth={
                size === 'sm' || size === 'md'
                  ? '2px'
                  : size === 'lg'
                  ? '4px'
                  : '5px'
              }
              borderColor={'neWhite.500'}
              _dark={{
                borderColor: 'neBlack.500',
              }}
            />
          ))}
        </Box>
      )}
      <Box
        bg={isDisabled || amount === 0 ? 'bgAvatarDisabled' : 'txHighlight'}
        color={isDisabled || amount === 0 ? 'bgGreyIcon' : 'neWhite.500'}
        height={x?.size}
        paddingX={
          size === 'sm'
            ? '.6rem'
            : size === 'md'
            ? '.8rem'
            : size === 'lg'
            ? '1rem'
            : size === 'xl'
            ? '1.1rem'
            : '1.4rem'
        }
        minWidth={x?.size}
        borderWidth={
          size === 'sm' || size === 'md' ? '2px' : size === 'lg' ? '4px' : '5px'
        }
        borderColor={'neWhite.500'}
        _dark={{
          borderColor: 'neBlack.500',
          color: isDisabled ? 'bgGreyIcon' : 'neBlack.500',
        }}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        fontSize={size}
        borderRadius={'full'}
        left={0}
        cursor={isDisabled ? 'not-allowed' : 'pointer'}
        zIndex={1}
      >
        {x?.sizeName === 'sm' || x?.sizeName === 'md' ? (
          <Text
            textStyle={x?.textSize}
            userSelect={'none'}
            fontWeight={x?.sizeName === 'md' ? 'bold' : 'medium'}
            textTransform="uppercase"
            cursor={isDisabled ? 'not-allowed' : 'pointer'}
            pointerEvents={isDisabled ? 'none' : 'auto'}
            mt="2px"
          >
            <NumberFormat value={amount} language="en-US" />
          </Text>
        ) : (
          <Heading
            size={x?.textSize}
            userSelect={'none'}
            textTransform="uppercase"
            cursor={isDisabled ? 'not-allowed' : 'pointer'}
            pointerEvents={isDisabled ? 'none' : 'auto'}
          >
            <NumberFormat value={amount} language="en-US" />
          </Heading>
        )}
      </Box>
    </Box>
  );
};
