import { Box, ButtonProps, Flex, Text, useMediaQuery } from '@chakra-ui/react';

import { ButtonIco } from '../../../../ButtonIco';
import { ItemInfoAndActionBarSkeleton } from './ItemInfoAndActionBarSkeleton';

interface Props extends ButtonProps {
  text: string;
  sizeCard?: 'sm' | 'md';
  skeleton?: boolean;
}

export const ItemInfoAndActionBar = (props: Props) => {
  const { skeleton, text, onClick, sizeCard, ...rest } = props;

  const [adaptedSizeSm] = useMediaQuery('(max-width: 30rem)');

  return (
    <Box>
      {skeleton ? (
        <ItemInfoAndActionBarSkeleton sizeCard={sizeCard} />
      ) : (
        <Box
          color="neWhite"
          w="100%"
          marginLeft={sizeCard == 'md' ? ['1px', '1.5px'] : '1px'}
          mt={sizeCard == 'sm' ? '8px' : ['8px', '-0.5px']}
          mb={sizeCard == 'sm' ? '5px' : ['5px', '']}
          cursor={'pointer'}
        >
          <Flex justifyContent="space-between" alignItems="center">
            <Text
              marginTop="2px"
              color="neGrey.400"
              fontWeight="medium"
              textStyle={adaptedSizeSm ? 'sm' : sizeCard == 'md' ? 'md' : 'sm'}
              userSelect="none"
              cursor={'pointer'}
              noOfLines={[1, 1]}
            >
              {text}
            </Text>

            <Box onClick={(e) => e.stopPropagation()}>
              <ButtonIco
                sizeName={adaptedSizeSm ? 'sm' : sizeCard == 'md' ? 'md' : 'sm'}
                onClick={onClick}
                aria-label={''}
                typeIcon="IconDotsHorizontal"
                backgroundType="noBackground"
              />
            </Box>
          </Flex>
        </Box>
      )}
    </Box>
  );
};
