import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { FileDrop } from '@iseazy/react-kit';
import Lottie from 'react-lottie-player';
import { getAnimationData, getModuleTitle } from './types/animationTypes';

interface Props {
  typeAnimacion?:
    | 'courseloading'
    | 'expressloading'
    | 'instagramloading'
    | 'stepsLoading';
}

export const LoadingLearning: React.FC<Props> = ({
  typeAnimacion = 'courseloading',
}) => {
  const animationData = getAnimationData(typeAnimacion);
  const moduleTitle = getModuleTitle(typeAnimacion);

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      flexDir="column"
      bg="primary"
    >
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Box>
          <Lottie
            speed={1}
            loop
            animationData={animationData}
            play
            style={{
              width: '64px',
              height: '64px',
              background: 'transparent',
            }}
          />
        </Box>
        <Text
          color="neGrey.700"
          marginTop="40px"
          textStyle="lg"
          letterSpacing="-0.4px"
        >
          Entering the studio
        </Text>
        <Heading color="neBlack" marginTop="5px" size="xl" fontWeight={'900'}>
          {moduleTitle}
        </Heading>
      </Flex>
      <Box marginTop="40px">
        <FileDrop typeAnimacion={typeAnimacion} />
      </Box>
    </Flex>
  );
};
