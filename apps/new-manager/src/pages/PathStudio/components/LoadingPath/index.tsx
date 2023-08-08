import { Box, Flex, Heading } from '@chakra-ui/react';
import { FileDrop } from '@iseazy/react-kit';

import Lottie from 'react-lottie-player';

import loading from '../../../../assets/animation/courseloading.json';

export const LoadingPath = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      flexDir="column"
      height={'100%'}
      bg="primary"
    >
      <Flex
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Box>
          <Lottie
            speed={1}
            loop
            animationData={loading}
            play
            style={{
              width: '100px',
              height: '100px',
              background: 'transparent',
            }}
          />
        </Box>

        <Heading
          color="neBlack"
          marginTop="5px"
          fontWeight="900"
          fontSize="40px"
          letterSpacing="-0.4px"
        >
          Entering the studio
        </Heading>
      </Flex>

      <Box marginTop="80px">
        <FileDrop />
      </Box>
    </Flex>
  );
};
