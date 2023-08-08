import { Box, Skeleton, SkeletonCircle, Flex } from '@chakra-ui/react';

import { badgeTypes } from '../ContentBadge/types/BadgeTypes';
import { pathBadgeTypes } from '../PathBadge/types/PathBadgeTypes';

import { contentType } from '../ContentBadge';
import { pathType } from '../PathBadge';

interface Props {
  type: contentType | pathType;
  size?: 'xs' | 'sm' | 'md';
  sizeCard?: 'sm' | 'md';
}

export const BadgeSkeleton = ({ type, size, sizeCard }: Props) => {
  const x = badgeTypes.find((x) => x.type === type);
  const y = pathBadgeTypes.find((x) => x.type === type);

  return (
    <Flex
      bg="neGrey.100"
      _dark={{
        bg: 'whiteAlpha.200',
      }}
      rounded={[y?.acronym ? '8px' : 'full', x?.icon ? '112px' : '8px']}
      alignItems="center"
      justifyContent="center"
      width={size === 'sm' || sizeCard === 'sm' ? '44px' : size === 'xs' ? "40px" : ['44px', 'full']}
      height={
        x?.type
        ? ['44px', '44px']
          : size === 'sm' || sizeCard === 'sm'
          ? '44px' : size === 'xs' ? "40px" 
        : ['44px', '35px']
      }
      minWidth={
        size === 'sm' || sizeCard === 'sm' ? '44px' : size === 'xs' ? "40px" : ['44px', 'none']
      }
      minHeight={
        x?.type
          ? ['44px', '44px']
          : size === 'sm' || sizeCard === 'sm'
          ? '44px'
          : size === 'xs' ? "40px"  : ['44px', '35px']
      }
      pl={size === 'sm' || sizeCard === 'sm' || size == "xs" ? '10px' : ['10px', '15px']}
      pr="10px"
      py="10px"
    >
      {x?.icon && (
        <Skeleton
          h="14px"
          w="14px"
          startColor="neGrey.400"
          endColor="neWhite.500"
        />
      )}

      <Box
        ml={
          x?.icon
            ? size === 'sm' || sizeCard === 'sm' || size == "xs"
              ? '0'
              : ['0', '10px']
            : '0px'
        }
      >
        {size === 'sm' || sizeCard === 'sm' || size == "xs" ? (
          <Skeleton
            startColor="neGrey.400"
            endColor="neWhite.500"
            _dark={{
              startColor: 'whiteAlpha.400',
              endColor: 'whiteAlpha.200',
            }}
            height="10px"
            display={['none', 'block']}
            paddingX={x?.icon ? '0' : '1'}
            h="10px"
            borderRadius="8px"
          >
            {y?.acronym}
          </Skeleton>
        ) : (
          <Skeleton
            startColor="neGrey.400"
            endColor="neWhite.500"
            _dark={{
              startColor: 'whiteAlpha.400',
              endColor: 'whiteAlpha.200',
            }}
            height="10px"
            display={['none', 'block']}
            paddingLeft={['0', y?.type ? '0' : '4px']}
            h="10px"
            borderRadius="8px"
          >
            {x?.type ?? y?.type}
          </Skeleton>
        )}
        {
          <Skeleton
            startColor="neGrey.400"
            endColor="neWhite.500"
            _dark={{
              startColor: 'whiteAlpha.400',
              endColor: 'whiteAlpha.200',
            }}
            height="10px"
            display={['block', 'none']}
            paddingX={x?.icon ? '0' : '<'}
            h="10px"
            borderRadius="8px"
          >
            {y?.acronym}
          </Skeleton>
        }
      </Box>
    </Flex>
  );
};
