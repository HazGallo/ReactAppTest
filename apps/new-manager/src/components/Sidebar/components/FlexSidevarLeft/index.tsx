import { Box, Flex, Icon } from '@chakra-ui/react';

import { Menu } from './data/dataMenu';

export const FlexSidevarLeft = () => {
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
      bg="neWhite.500"
      _dark={{
        bg: 'neGrey.800',
      }}
    >
      {Menu.map((x, i) => (
        <Box key={i}>
          <Icon as={x.icon} fontSize="xl" />
        </Box>
      ))}
    </Flex>
  );
};
