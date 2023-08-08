import React from 'react';
import { Flex, Heading, useMediaQuery } from '@chakra-ui/react';

interface BadgeQuestionProps {
  firstValue: string;
  secondValue: string;
  sizeCard?: 'sm' | 'md';
  bg: string;
}

const BadgeQuestion = ({
  firstValue,
  secondValue,
  sizeCard,
  bg,
}: BadgeQuestionProps) => {
  const abText = firstValue.length > 2 ? firstValue.substr(0, 2) : firstValue;
  const abcdText =
    secondValue.length > 4 ? secondValue.substr(0, 4) : secondValue;

  const [adaptedSizeSm] = useMediaQuery('(max-width: 30rem)');

  return (
    <Flex
      width={sizeCard === 'md' && !adaptedSizeSm ? '85px' : ''}
      height="44px"
      borderRadius="112px"
      bg={bg ? bg : 'coAudio'}
    >
      <Flex
        width="24px"
        height="24px"
        borderRadius="25px"
        margin={`10px ${
          sizeCard === 'md' && !adaptedSizeSm ? '5px' : '11px'
        } 10px 11px`}
        bg="neWhite.500"
        fontSize="12px"
        fontWeight="bold"
        color={bg ? bg : 'coAudio'}
        letterSpacing="-0.3px"
        padding="4px"
        textTransform="uppercase"
      >
        {abText}
      </Flex>

      {sizeCard === 'md' && !adaptedSizeSm ? (
        <Heading
          padding={0}
          margin="15px 15px 14px 0"
          fontSize="12px"
          justifyContent="center"
          alignItems="center"
          fontWeight="bold"
          color="neWhite.500"
          letterSpacing="-0.3px"
          textTransform="uppercase"
        >
          {abcdText}
        </Heading>
      ) : (
        <></>
      )}
    </Flex>
  );
};

export default BadgeQuestion;
