import { Flex, Text, Icon, Link } from '@chakra-ui/react';

interface Props {
  icon?: any;
  title?: any;
  description?: any;
  active?: any;
  navSize: any;
}
const NavItem = ({
  icon,
  title,
  active,
  navSize,
}: Props) => {
  return (
    <Flex mt={2} paddingX={4} flexDir="column" w="100%">
      <Link
        border={active && '2px'}
        display={navSize == 'small' ? 'none' : 'flex'}
        borderColor={active && 'neAccent.500'}
        p={2.5}
        borderRadius={8}
        _hover={{ textDecor: 'none', backgroundColor: 'neGrey.100' }}
        w={navSize == 'large' ? '100%' : ''}
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

export default NavItem
