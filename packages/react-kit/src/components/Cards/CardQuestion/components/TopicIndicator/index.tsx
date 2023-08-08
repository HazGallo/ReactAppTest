import { Flex, Text, useMediaQuery } from '@chakra-ui/react';
import { Ico } from '../../../../../../src/components/Ico';

import { topicTypes } from '../../types/TopicTypes';

export type typeTopic = 'audio' | 'video' | 'image';

interface Props {
  type: typeTopic;
  title: string;
  bg: string;
  sizeCard?: 'sm' | 'md';
}

const TopicIndicator = ({ type, title, bg, sizeCard }: Props) => {
  const x = topicTypes.find((x) => x.type === type);
  const [adaptedSizeSm] = useMediaQuery('(max-width: 30rem)');

  return (
    <Flex
      padding={0}
      margin={`0px 0px 15px ${
        adaptedSizeSm ? '8px' : sizeCard === 'md' ? '17.67px' : '8px'
      }`}
    >
      <Ico
        color={bg ? bg : 'coAudio'}
        icon={x?.icon}
        sizeName="sm"
        width="16px"
        height="16px"
        // border="2px solid"
        // borderColor="coAudio"
        borderRadius="3px"
      />

      <Text
        fontWeight="medium"
        fontSize="10px"
        letterSpacing="0"
        lineHeight="13px"
        color="neGrey.400"
        marginLeft="5px"
        noOfLines={[1, 1]}
        marginTop="1.8px"
      >
        {title}
      </Text>
    </Flex>
  );
};

export default TopicIndicator;
