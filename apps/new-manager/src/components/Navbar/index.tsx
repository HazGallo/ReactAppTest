import {
  Avatar,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { FiTablet } from 'react-icons/fi';
import { HiInformationCircle } from 'react-icons/hi';
import BtnMenu from '../BtnMenu';
import { IcoSearch } from '../../assets/customIcons';
import BtnColorMode from '../BtnColorMode';

const Navbar = () => {
  return (
    <Flex
      position="fixed"
      left={0}
      top={0}
      height="70px"
      borderBottom="1px"
      borderColor="neGrey.200"
      width="100%"
      justifyContent="space-between"
      paddingLeft="5px"
      paddingRight="20px"
      bg="neWhite.500"
      _dark={{
        bg: 'neGrey.800',
      }}
      zIndex={5}
      alignItems="center"
    >
      <Flex alignItems="center" gap="2">
        <BtnMenu />
        <Text fontSize="18px">
          <strong>iseazy</strong>engage
        </Text>
      </Flex>
      <Flex>
        <InputGroup size="md" display={['none', 'block']}>
          <Input
            variant="filled"
            placeholder="find paths, peoples contents"
            border="none"
            w="300px"
          />
          <InputRightElement children={<IcoSearch />} />
        </InputGroup>
      </Flex>

      <Flex alignItems="center" justifyContent="center" gap="4">
        <FiTablet size={18} />
        <HiInformationCircle size={21} />
        <BtnColorMode />
        <Avatar
          size="xs"
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
        />
      </Flex>
    </Flex>
  );
};

export default Navbar;
