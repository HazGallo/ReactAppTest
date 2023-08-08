import { Box, Skeleton, Stack } from '@chakra-ui/react';

interface Props {
  sizeCard?: 'sm' | 'md';
}

export const ItemEditableTitleSkeleton = (props: Props) => {
  const { sizeCard } = props;

  return (
    <Box
      w="full"
      h="58px"
      borderRadius="4px"
      paddingX={1}
      marginTop={sizeCard == 'md' ? ['-6.5px', '2px'] : '-6.5px'}
      marginLeft={sizeCard == 'md' ? ['-3px', '-3px'] : '-3px'}
    >
      <Stack>
        <Skeleton
          startColor="neGrey.400"
          endColor="neWhite.500"
          _dark={{
            startColor: 'whiteAlpha.400',
            endColor: 'whiteAlpha.200',
          }}
          h={sizeCard == 'md' ? ['6px', '8px'] : '6px'}
          borderRadius="8px"
          w="80%"
          mb={sizeCard == 'md' ? ['5px', '10px'] : '5px'}
        />
        <Skeleton
          startColor="neGrey.400"
          endColor="neWhite.500"
          _dark={{
            startColor: 'whiteAlpha.400',
            endColor: 'whiteAlpha.200',
          }}
          h={sizeCard == 'md' ? ['6px', '8px'] : '6px'}
          w="55%"
          borderRadius="8px"
        />
      </Stack>
    </Box>
  );
};
