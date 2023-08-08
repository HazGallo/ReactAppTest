import { Flex } from '@chakra-ui/react';
import { shallow } from 'zustand/shallow';
import { useSettings } from '../../store/settingsStore';

import { FlexSidevarLeft } from './components/FlexSidevarLeft';
import { FlexSidevarRight } from './components/FlexSidevarRight';

const Sidebar = () => {
  const { navSize } = useSettings(
    (state) => ({ navSize: state.navSize }),
    shallow
  );

  return (
    <Flex
      h="100%"
      pos="fixed"
      zIndex={4}
      flexDir="column"
      minHeight="100%"
      w={[
        navSize == 'small' ? '75px' : '100%',
        navSize == 'small' ? '75px' : '246px',
      ]}
      justifyContent="space-between"
      left={[navSize === 'large' ? '0' : '-100%', '0']}
    >
      <Flex w="100%" h="100%">
        <FlexSidevarLeft />
        <FlexSidevarRight />
      </Flex>
    </Flex>
  );
};

export default Sidebar;
