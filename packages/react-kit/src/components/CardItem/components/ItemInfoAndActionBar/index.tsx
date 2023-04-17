import { Box, Flex, Icon, Button, ButtonProps, Text } from '@chakra-ui/react';
import { IconDotsHorizontal } from '../../../../assets/customIcons';
import { ItemInfoAndActionBarSkeleton } from './ItemInfoAndActionBarSkeleton';

interface Props extends ButtonProps {
  text: string;
  sizeCard?: 'sm' | 'md';
  skeleton?: boolean;
}

export const ItemInfoAndActionBar = (props: Props) => {
  const { skeleton, text, onClick, sizeCard, ...rest } = props;

  return (
    <Box>
      {skeleton ? (
        <ItemInfoAndActionBarSkeleton text={text} sizeCard={sizeCard} />
      ) : (
        <Box
          color="neWhite"
          w="100%"
          marginLeft={sizeCard == 'md' ? ['1px', '1.5px'] : '1px'}
        >
          <Flex justifyContent="space-between" alignItems="center">
            <Text
              color="neGrey.400"
              textStyle={sizeCard == 'md' ? ['sm', 'md'] : 'sm'}
            >
              {text}
            </Text>

            <Button
              _hover={{
                bg: 'none',
                color: 'neBlack.400',
              }}
              _focus={{
                bg: 'none',
              }}
              _dark={{
                color: 'neWhite.500',
              }}
              color="black"
              bg="none"
              marginRight={sizeCard == 'md' ? ['-12px', '-14px'] : '-12px'}
              justifyContent="center"
              onClick={onClick}
              {...rest}
            >
              <Icon
                as={IconDotsHorizontal}
                w={sizeCard == 'md' ? ['16px', '24px'] : '16px'}
                h={sizeCard == 'md' ? ['16px', '24px'] : '16px'}
              />
            </Button>
          </Flex>
        </Box>
      )}
    </Box>
  );
};
