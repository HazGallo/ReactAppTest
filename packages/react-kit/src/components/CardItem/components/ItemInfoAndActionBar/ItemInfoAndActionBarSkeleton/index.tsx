import { Box, Flex, Skeleton, SkeletonText } from '@chakra-ui/react';

interface Props {
  text: string;
  sizeCard?: 'sm' | 'md';
}

export const ItemInfoAndActionBarSkeleton = (props: Props) => {
  const { text, sizeCard } = props;

  return (
    <Box
      color="neWhite.500"
      w="100%"
      marginLeft={sizeCard == 'md' ? ['1px', '1.5px'] : '1px'}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <SkeletonText
          color="neGrey.400"
          noOfLines={1}
          textStyle={sizeCard == 'md' ? ['sm', 'md'] : 'sm'}
          startColor="neGrey.400"
          endColor="neWhite.500"
          _dark={{
            startColor: "whiteAlpha.400",
            endColor: "whiteAlpha.200"
          }}
        >
          {text}
        </SkeletonText>

        <Box
          bg="none"
          marginRight={sizeCard == 'md' ? ['-12px', '-14px'] : '-12px'}
          py="15px"
          px="15px"
          justifyContent="center"
        >
          <Skeleton
            startColor="neGrey.400"
            endColor="neWhite.500"
            _dark={{
              startColor: "whiteAlpha.400",
              endColor: "whiteAlpha.200"
            }}
            w={sizeCard == 'md' ? ['16px', '24px'] : '16px'}
            h={sizeCard == 'md' ? ['8px', '12px'] : '8px'}
          />
        </Box>
      </Flex>
    </Box>
  );
};
