import { Flex, Text, Box, BadgeProps } from '@chakra-ui/react';
import { Ico } from '../Ico';
import { badgeTypes } from './ContentBadge/types/BadgeTypes';
import { pathBadgeTypes } from './PathBadge/types/PathBadgeTypes';
import { contentType } from './ContentBadge';
import { pathType } from './PathBadge';
import { BadgeSkeleton } from './BadgeSkeleton';

interface Props extends BadgeProps {
  type: contentType | pathType;
  size?: 'xs' | 'sm' | 'md';
  sizeCard?: 'sm' | 'md';
  skeleton?: boolean;
}

export const Badge = ({ type, size, sizeCard, skeleton, ...rest }: Props) => {
  const x = badgeTypes.find((x) => x.type === type);
  const y = pathBadgeTypes.find((x) => x.type === type);

  return (
    <Box {...rest}>
      {skeleton ? (
        <BadgeSkeleton type={type} size={size} sizeCard={sizeCard} />
      ) : (
        <Flex
          bg={x?.bg ?? y?.bg}
          color="neWhite"
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
          py="10px"
          cursor={"pointer"}
          pl={y?.acronym ? "10px" : size === 'sm' || sizeCard === 'sm' ? '10px' : ['10px', '11px']}
          pr={y?.acronym ? "10px" : size === 'sm' || sizeCard === 'sm' ? '10px' : ['10px', '15px']}
        >
          {x?.icon && (
            <Ico color="neWhite.500" icon={x?.icon} sizeName={'sm'} />
          )}

          <Box textTransform="uppercase" color="neWhite.500">
            {size === 'sm' || sizeCard === 'sm' || size === 'xs' ? (
              <Text
                textStyle={
                  size === 'sm' || sizeCard === 'sm' ? 'lg' : size === 'xs' ? "sm" : ['lg', 'sm']
                }
                display={['none', 'block']}
                paddingX={x?.icon ? '0' : '1'}
                className="resetBgSelected"
                cursor={"pointer"}
              >
                {y?.acronym}
              </Text>
            ) : (
              <Text
                textStyle="sm"
                display={['none', 'block']}
                paddingLeft={['0', y?.type ? '0' : '4px']}
                className="resetBgSelected"
                cursor={"pointer"}
              >
                {x?.type ?? y?.type}
              </Text>
            )}
            {
              <Text
                textStyle={
                  size === 'sm' || sizeCard === 'sm' ? 'lg' :  size === 'xs' ? "sm" : ['lg', 'sm']
                }
                display={['block', 'none']}
                paddingX={x?.icon ? '0' : '<'}
                className="resetBgSelected"
                cursor={"pointer"}
              >
                {y?.acronym}
              </Text>
            }
          </Box>
        </Flex>
      )}
    </Box>
  );
};
