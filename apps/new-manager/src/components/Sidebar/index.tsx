import { Flex } from '@chakra-ui/react';
import { sliceInformation } from '../../store/sliceInformation';
import FlexSidevarLeft from '../FlexSidevarLeft';
import FlexSidevarRight from '../FlexSidevarRight';

const Sidebar = () => {
  const { navSize } = sliceInformation();
  return (
    <Flex
      zIndex={4}
      minHeight="100%"
      h="100%"
      flexDir="column"
      background={'primary'}
      pos="fixed"
      justifyContent="space-between"
      left={[navSize === 'large' ? '0' : '-100%', '0']}
      w={[
        navSize == 'small' ? '75px' : '100%',
        navSize == 'small' ? '75px' : '246px',
      ]}
    >
      <Flex w="100%" h="100%">
        <FlexSidevarLeft />
        <FlexSidevarRight />
      </Flex>
    </Flex>
  );
};

export default Sidebar;
