import { Flex, Text, Icon, Box } from '@chakra-ui/react';
import { badgeTypes } from './ContentBadge/types/BadgeTypes';
import { pathBadgeTypes } from './PathBadge/types/PathBadgeTypes';
import { contentType } from './ContentBadge';
import { pathType } from './PathBadge';
import { BadgeSkeleton } from './BadgeSkeleton';

interface Props {
  type: contentType | pathType;
  size?: 'sm' | 'md';
  sizeCard?: 'sm' | 'md';
  skeleton?: boolean;
}

export const Badge = ({ type, size, sizeCard, skeleton }: Props) => {
  const x = badgeTypes.find((x) => x.type === type);
  const y = pathBadgeTypes.find((x) => x.type === type);

  return (
    <Box>
      {skeleton ? (
        <BadgeSkeleton type={type} size={size} sizeCard={sizeCard} />
      ) : (
        <Flex
          bg={x?.bg ?? y?.bg}
          color="neWhite"
          rounded={[y?.acronym ? '8px' : 'full', x?.icon ? '112px' : '8px']}
          alignItems="center"
          justifyContent="center"
          minWidth={
            size === 'sm' || sizeCard === 'sm' ? '41px' : ['41px', 'none']
          }
          minHeight="41px"
          padding="10px"
        >
          {x?.icon && <Icon as={x?.icon} fontSize={24} color="neWhite.500" />}

          <Box fontWeight="600" fontSize="12px" textTransform="uppercase" color="neWhite.500">
            {size === 'sm' || sizeCard === 'sm' ? (
              <Box display={['none', 'block']} paddingX={x?.icon ? '0' : '1'}>
                {y?.acronym}
              </Box>
            ) : (
              <Box
                display={['none', 'block']}
                paddingLeft={['0', y?.type ? '0' : '4px']}
              >
                {x?.type ?? y?.type}
              </Box>
            )}
            {
              <Box display={['block', 'none']} paddingX={x?.icon ? '0' : '<'}>
                {y?.acronym}
              </Box>
            }
          </Box>
        </Flex>
      )}
    </Box>
  );
};
