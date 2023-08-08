import { Box, Skeleton } from '@chakra-ui/react';

export type ContentTypeStatus = 'Draft' | 'Planned' | 'Published';

interface Props {
  sizeCard?: 'sm' | 'md';
}

export const ItemPublicationStatusSkeleton = (props: Props) => {
  const { sizeCard } = props;

  return (
    <Box
      marginLeft={sizeCard == 'md' ? ['2px', '1px'] : '2px'}
      mt={sizeCard == 'md' ? ['-20px', '-8px'] : '-20px'}
    >
      <Skeleton
        startColor="neGrey.400"
        endColor="neWhite.500"
        _dark={{
          startColor: 'whiteAlpha.400',
          endColor: 'whiteAlpha.200',
        }}
        h={sizeCard == 'md' ? ['6px', '8px'] : '6px'}
        borderRadius="8px"
        w="35%"
      />
    </Box>
  );
};
