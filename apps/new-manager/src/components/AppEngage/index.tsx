import Navbar from '../Navbar';
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
} from '@chakra-ui/react';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Sidebar from '../Sidebar';
import { BiFilterAlt } from 'react-icons/bi';
import { useNavSize } from '../../store/BtnMenu';
import DrapAndDrop from '../DrapAndDrop';

const AppEngage = () => {
  const { navSize, setIsSizeCard, cardSize, setReadonly, readonly } = useNavSize();

  return (
    <Box>
      <Navbar />
      <Flex paddingTop="70px">
        <Flex>
          <Sidebar />
        </Flex>

        <Flex
          flexDirection="column"
          paddingX="30px"
          marginTop="60px"
          width="100%"
          marginLeft={[
            '0',
            navSize == 'small' ? '75px' : '44%',
            navSize == 'small' ? '75px' : '246px',
          ]}
        >
          <Flex justifyContent="space-between" alignItems="center">
            <Flex
              marginTop="-25px"
              gap={[0, 2]}
              flexDirection={['column', 'row']}
            >
              <Text fontSize={['24px', '40px']} fontWeight="bold">
                Wall
              </Text>
              <Text fontSize="40px" fontWeight="bold" color="neAccent.500">
                {' '}
                Published
              </Text>
            </Flex>
            <Flex gap="3">

              <Button onClick={setIsSizeCard}>{cardSize ? 'sm' : 'md'}</Button>
              <Button onClick={setReadonly}>{!readonly ? 'reading mode' : 'Edit Mode'}</Button>
            </Flex>
          </Flex>

          <Flex marginTop={['15px', '30px']} marginBottom="20px">
            <InputGroup size="lg">
              <Input variant="filled" placeholder="Find" />
              <InputRightAddon children={<BiFilterAlt />} />
            </InputGroup>
          </Flex>

          <DrapAndDrop />
        </Flex>
      </Flex>
    </Box>
  );
};

export default AppEngage;
