import { Box, Flex } from '@chakra-ui/react';
import { contentType } from '../Badge/ContentBadge';
import { pathType } from '../Badge/PathBadge';
import { Badge } from '../Badge';

interface Props {
  type: contentType | pathType;
  children?: any;
  sizeCard?: 'sm' | 'md';
  skeleton?: boolean;
}

export const ItemCardSkeleton = (props: Props) => {
  const { skeleton, children, type, sizeCard, ...rest } = props;

  return (
    <Box>
      <Flex
        position="relative"
        height={sizeCard == 'md' ? ['109px', '213px'] : '109px'}
        overflow="hidden"
      >
        <Flex
          zIndex={40}
          position="absolute"
          cursor="default"
          left={sizeCard == 'md' ? ['10px', '15px'] : '10px'}
          bottom={sizeCard == 'md' ? ['10px', '15px'] : '10px'}
        >
          <Box>
            <Badge
              type={type}
              size="md"
              sizeCard={sizeCard}
              skeleton={skeleton}
            />
          </Box>
        </Flex>
      </Flex>
      <Box
        _dark={{
          bg: 'whiteAlpha.200',
        }}
        bg="neGrey.100"
        marginTop={sizeCard == 'md' ? ['-1.5px', '2px'] : '-1.5px'}
        paddingX={sizeCard == 'md' ? ['2', '3.5'] : '2'}
        pb="20px"
      >
        {children}
      </Box>
    </Box>
  );
};
