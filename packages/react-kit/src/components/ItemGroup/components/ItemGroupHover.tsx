import { Box, Divider, Flex, Text } from '@chakra-ui/react';

import Lottie from 'react-lottie-player';

import itemGroupLoader from '../animation/floating_card.json';

export const ItemGroupHover = () => {
  return (
    <Flex
      width="full"
      height="full"
      minWidth="201px"
      minHeight="150px"
      borderRadius="8px"
      border="2px"
      borderStyle="dashed"
      borderColor="compBorderError"
      bg="bgFileHover"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      position={"absolute"}
    >
      <Box>
        <Lottie
          speed={1}
          loop
          animationData={itemGroupLoader}
          play
          style={{
            width: '48px',
            height: '48px',
            background: 'transparent',
          }}
        />
      </Box>

      <Divider color="borderFileHover" marginTop="1px" width="50%" />

      <Text
        textStyle="xs"
        color="txHighlight"
        marginTop="5px"
        fontWeight="medium"
        fontSize="14px"
      >
        Move it!
      </Text>
    </Flex>
  );
};
