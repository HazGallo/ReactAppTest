import { Box, Flex, Text } from '@chakra-ui/react';
import NavItem from '../../../NavItem';

import { useSettings } from '../../../../store/settingsStore';

import { FiHome, FiCalendar, FiUser, FiDollarSign } from 'react-icons/fi';
import { IoPawOutline } from 'react-icons/io5';

import { shallow } from 'zustand/shallow';

export const FlexSidevarRight = () => {
  const { navSize } = useSettings(
    (state) => ({ navSize: state.navSize }),
    shallow
  );

  return (
    <Flex
      w="78%"
      as="nav"
      paddingTop={4}
      _dark={{
        bg: 'neGrey.800',
      }}
      bg="neWhite.500"
      flexDir="column"
      display={navSize == 'small' ? 'none' : 'flex'}
      alignItems={navSize == 'small' ? 'center' : 'flex-start'}
    >
      <Box>
        <Text fontWeight="bold" fontSize="xl" p={2.5} ml="10px">
          My App
        </Text>
        <Box marginLeft={2} w="100%">
          <NavItem
            navSize={navSize}
            icon={FiHome}
            title="Dashboard"
            active={true}
            description="This is the description for the dashboard."
          />
          <NavItem navSize={navSize} icon={FiCalendar} title="Calendar" />
          <NavItem navSize={navSize} icon={FiUser} title="Clients" />
          <NavItem navSize={navSize} icon={IoPawOutline} title="Animals" />
          <NavItem navSize={navSize} icon={FiDollarSign} title="Stocks" />
        </Box>
      </Box>
    </Flex>
  );
};
