import { Flex, Heading, Icon, Text } from '@chakra-ui/react';
import { propsNavHover } from './interfaces/propsNavHover';

const NavHoverBox = ({ title, icon, description }: propsNavHover) => {
  return (
    <>
      <Flex
        position="absolute"
        mt="calc(100px - 7.5px)"
        ml="-10px"
        width={0}
        height={0}
        borderTop="10px solid transparent"
        borderBottom="10px solid transparent"
        borderRight="10px"
        borderColor="neGrey.200"
      />
      <Flex
        h={200}
        w={200}
        flexDir="column"
        alignItems="center"
        justify="center"
        backgroundColor="neGrey.200"
        borderRadius="10px"
        color="neWhite.500"
        textAlign="center"
      >
        <Icon as={icon} fontSize="3xl" mb={4} />
        <Heading size="md" fontWeight="normal">
          {title}
        </Heading>
        <Text>{description}</Text>
      </Flex>
    </>
  );
};

export default NavHoverBox
