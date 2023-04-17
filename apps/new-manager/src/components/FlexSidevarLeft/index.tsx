import { FiCalendar, FiUser, FiDollarSign, FiSettings } from 'react-icons/fi';
import { AiFillFire } from 'react-icons/ai';
import { Box, Flex, Icon } from '@chakra-ui/react';

const FlexSidevarLeft = () => {
  const Menu = [
    {
      icon: AiFillFire,
    },
    {
      icon: FiCalendar,
    },
    {
      icon: FiDollarSign,
    },
    {
      icon: FiSettings,
    },
    {
      icon: FiUser,
    },
    {
      icon: FiDollarSign,
    },
    {
      icon: FiCalendar,
    },
  ];
  return (
    <Flex
      flexDir="column"
      gap={8}
      w="50px"
      alignItems="center"
      as="nav"
      borderRight="1px"
      borderColor="neGrey.200"
      paddingTop={8}
    >
      {Menu.map((x, i) => (
        <Box key={i}>
          <Icon as={x.icon} fontSize="xl" />
        </Box>
      ))}
    </Flex>
  );
};

export default FlexSidevarLeft

