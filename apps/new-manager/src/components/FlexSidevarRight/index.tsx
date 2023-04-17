import { Box, Flex, Text } from '@chakra-ui/react';
import NavItem from '../NavItem';
import { useNavSize } from '../../store/BtnMenu';
import { FiHome, FiCalendar, FiUser, FiDollarSign } from 'react-icons/fi';
import { IoPawOutline } from 'react-icons/io5';
import CustomDrawer from '../CustomDrawer';

const FlexSidevarRight = () => {
  const { navSize } = useNavSize();

  return (
    <Flex
      w="78%"
      alignItems={navSize == 'small' ? 'center' : 'flex-start'}
      as="nav"
      display={navSize == 'small' ? 'none' : 'flex'}
      paddingTop={4}
      flexDir="column"
      background={'primary'}
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

      <Flex paddingTop={40} paddingLeft={8}>
        <CustomDrawer />
      </Flex>
    </Flex>
  );
};

export default FlexSidevarRight
