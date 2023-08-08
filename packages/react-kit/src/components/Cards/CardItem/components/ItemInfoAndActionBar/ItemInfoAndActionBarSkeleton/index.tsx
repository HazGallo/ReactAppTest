import { Box, Flex, Skeleton } from '@chakra-ui/react';

interface Props {
  sizeCard?: 'sm' | 'md';
}

export const ItemInfoAndActionBarSkeleton = (props: Props) => {
  const { sizeCard } = props;

  return (
    <Box
      color="neWhite.500"
      w="100%"
      ml={sizeCard == 'md' ? ['1px', '1.5px'] : '1px'}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Skeleton
          color="neGrey.400"
          startColor="neGrey.400"
          endColor="neWhite.500"
          _dark={{
            startColor: 'whiteAlpha.400',
            endColor: 'whiteAlpha.200',
          }}
          w="30px"
          h={sizeCard == 'md' ? ['6px', '8px'] : '6px'}
          mt={sizeCard == 'md' ? ['10px', '22px'] : '10px'}
          mb="20px"
          borderRadius="8px"
        ></Skeleton>
      </Flex>
    </Box>
  );
};
