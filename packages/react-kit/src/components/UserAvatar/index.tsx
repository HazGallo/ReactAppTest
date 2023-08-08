import { useState, useEffect } from 'react';
import {
  Avatar,
  AvatarProps,
  Box,
  Heading,
  SkeletonCircle,
  Text,
} from '@chakra-ui/react';
import { TypesSizesAvatar } from './types/typesSizesIcons';
import { getTwoLetters } from './validation/getLetter';

interface UserAvatarProps extends AvatarProps {
  isDisabled: boolean;
  sizes: 'sm' | 'md' | 'lg' | 'xl';
  avatarSrc?: string;
  name: string;
  backgroundColor: string;
}

export const UserAvatar = ({
  avatarSrc,
  isDisabled,
  sizes,
  name,
  backgroundColor,
  ...rest
}: UserAvatarProps) => {
  const x = TypesSizesAvatar.find((x) => x.sizeName === sizes);
  const shortText = getTwoLetters(name);
  const [isLoading, setIsLoading] = useState(false); // Initialize as false

  useEffect(() => {
    if (avatarSrc) {
      setIsLoading(true); // Set isLoading to true when avatarSrc is provided
    }
  }, [avatarSrc]);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <Box position="relative" cursor={isDisabled ? 'not-allowed' : 'pointer'}>
      {avatarSrc && isLoading && (
        <SkeletonCircle
          startColor="neGrey.400"
          endColor="neWhite.500"
          width={x?.size}
          height={x?.size}
          isLoaded={!isLoading}
          position="absolute"
        />
      )}

      <Avatar
        bg={avatarSrc ? '' : backgroundColor}
        width={x?.size}
        height={x?.size}
        className={isDisabled ? 'disabled' : ''}
        icon={<></>}
        src={avatarSrc && avatarSrc}
        onLoad={handleImageLoad}
        style={{
          opacity: isLoading ? 0 : 1,
          pointerEvents: isDisabled ? 'none' : 'auto',
        }}
        userSelect={'none'}
        borderRadius="full"
        _after={{
          content: '""',
          display: 'block',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: isDisabled ? 'neGrey.500' : 'transparent',
          opacity: 0.75,
          borderRadius: 'full',
          zIndex: 2,
        }}
        {...rest}
      >
        {!avatarSrc && (
          <>
            {x?.sizeName === 'sm' || x?.sizeName === 'md' ? (
              <Text
                textStyle={x?.textSize}
                color="blackAlpha.500"
                letterSpacing={x?.letterSpacing}
                cursor={isDisabled ? 'not-allowed' : 'pointer'}
              >
                {shortText ? shortText : undefined}
              </Text>
            ) : (
              <Heading
                size={x?.textSize}
                color="blackAlpha.500"
                letterSpacing={x?.letterSpacing}
                cursor={isDisabled ? 'not-allowed' : 'pointer'}
              >
                {shortText ? shortText : undefined}
              </Heading>
            )}
          </>
        )}
      </Avatar>
    </Box>
  );
};
