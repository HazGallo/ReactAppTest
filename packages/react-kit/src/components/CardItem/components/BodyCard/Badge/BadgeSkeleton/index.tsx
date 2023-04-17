import {
  Box,
  Skeleton,
  SkeletonText,
  SkeletonCircle,
  Flex,
  Icon,
  Text,
} from '@chakra-ui/react';
import { badgeTypes } from '../ContentBadge/types/BadgeTypes';
import { pathBadgeTypes } from '../PathBadge/types/PathBadgeTypes';
import { contentType } from '../ContentBadge';
import { pathType } from '../PathBadge';

interface Props {
  type: contentType | pathType;
  size?: 'sm' | 'md';
  sizeCard?: 'sm' | 'md';
}

export const BadgeSkeleton = ({ type, size, sizeCard }: Props) => {
  const x = badgeTypes.find((x) => x.type === type);
  const y = pathBadgeTypes.find((x) => x.type === type);

  return (
    <Flex
      bg="neGrey.100"
      _dark={{
        bg: "whiteAlpha.200"
      }}
      rounded={[y?.acronym ? '8px' : 'full', x?.icon ? '112px' : '8px']}
      alignItems="center"
      justifyContent="center"
      minWidth={size === 'sm' || sizeCard === 'sm' ? '41px' : ['41px', 'none']}
      minHeight="41px"
      padding="10px"
    >
      {x?.icon && (
        <SkeletonCircle size="5" startColor="neGrey.400" endColor="neWhite.500" />
      )}

      <Box ml={size === 'sm' || sizeCard === 'sm' ? '0' : ['0', '2px']}>
        {size === 'sm' || sizeCard === 'sm' ? (
          <Skeleton
            startColor="neGrey.400"
            endColor="neWhite.500"
            _dark={{
              startColor: "whiteAlpha.400",
              endColor: "whiteAlpha.200"
            }}
            height="10px"
            display={['none', 'block']}
            paddingX={x?.icon ? '0' : '1'}
          >
            {y?.acronym}
          </Skeleton>
        ) : (
          <Skeleton
            startColor="neGrey.400"
            endColor="neWhite.500"
            _dark={{
              startColor: "whiteAlpha.400",
              endColor: "whiteAlpha.200"
            }}
            height="10px"
            display={['none', 'block']}
            paddingLeft={['0', y?.type ? '0' : '4px']}
          >
            {x?.type ?? y?.type}
          </Skeleton>
        )}
        {
          <Skeleton
            startColor="neGrey.400"
            endColor="neWhite.500"
            _dark={{
              startColor: "whiteAlpha.400",
              endColor: "whiteAlpha.200"
            }}
            height="10px"
            display={['block', 'none']}
            paddingX={x?.icon ? '0' : '<'}
          >
            {y?.acronym}
          </Skeleton>
        }
      </Box>
    </Flex>
  );
};
