import { Box, SkeletonText, Stack } from '@chakra-ui/react';

interface Props {
  sizeCard?: 'sm' | 'md';
  value?: string;
}

export const ItemEditableTitleSkeleton = (props: Props) => {
  const { sizeCard, value } = props;

  return (
    <Box
      w="full"
      h="58px"
      borderRadius="4px"
      paddingX={1}
      paddingY={1.2}
      marginBottom={sizeCard == 'md' ? ['-4px', '14.5px'] : '-4px'}
      marginTop={sizeCard == 'md' ? ['-6.5px', '0.5px'] : '-6.5px'}
      marginLeft={sizeCard == 'md' ? ['-3px', '-3px'] : '-3px'}
    >
      <Stack>
        <SkeletonText
          noOfLines={2}
          spacing="2"
          skeletonHeight="10px"
          startColor="neGrey.400"
          endColor="neWhite.500"
          _dark={{
            startColor: "whiteAlpha.400",
            endColor: "whiteAlpha.200"
          }}
        >
          {value}
        </SkeletonText>
      </Stack>
    </Box>
  );
};
