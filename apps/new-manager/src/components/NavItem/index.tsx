import { Flex, Text, Icon, Link } from '@chakra-ui/react';

import { propsNavItem } from './interfaces/propsNavItem';

const NavItem = ({ icon, title, active, navSize }: propsNavItem) => {
  return (
    <Flex mt={2} paddingX={4} flexDir="column" w="100%">
      <Link
        p={2.5}
        borderRadius={8}
        border={active && '2px'}
        w={navSize == 'large' ? '100%' : ''}
        borderColor={active && 'neAccent.500'}
        display={navSize == 'small' ? 'none' : 'flex'}
        _hover={{ textDecor: 'none', backgroundColor: 'neGrey.100' }}
      >
        <Flex alignItems={'center'}>
          <Icon as={icon} fontSize="md" color={active ? 'neAccent.500' : ''} />
          <Text
            fontSize="14px"
            fontWeight="bold"
            ml={2}
            color={active ? 'neAccent.500' : 'neGrey.500'}
          >
            {title}
          </Text>
        </Flex>
      </Link>
    </Flex>
  );
};

export default NavItem;
