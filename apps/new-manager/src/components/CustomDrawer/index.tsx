import {
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Text,
  Flex,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { IoIosArrowBack } from 'react-icons/io'
import { useNavSize } from '../../store/BtnMenu';

interface Props {
  isOpen?: boolean;
  setIsOpen?: () => void;
  children: ReactNode
}
const CustomDrawer = (props: Props) => {
  const { isOpen, setIsOpen } = useNavSize()

  const onClickSave = () => {
    alert('Save Changes!')
  }

  return (
    <Box>
      <Drawer isOpen={isOpen} placement="right" onClose={setIsOpen}>
        <DrawerOverlay bg="rgba(0,0,0,.1)" />
        <DrawerContent
          minWidth="414px"
          bg="neWhite.500"
          _dark={{ bg: 'neBlack.800' }}
        >

          <DrawerHeader
            borderBottomWidth="1px"
            display="flex"
            w="full"
            paddingX={25}
            paddingY={17}
            justifyContent="space-between"
          >
            <button onClick={setIsOpen} style={{ background: 'none', outline: 'none' }} >
              <IoIosArrowBack size={20} />
            </button>
            <Flex gap="3">
              {/* <ButtonIco
                warning={true}
                disabled={false}
                sizeName="sm"
                type='IconChallenge'
              /> */}
              <Button
                w="90px"
                bg="neAccent.500"
                _hover={{
                  bg: 'neAccent.400',
                }}
                _dark={{
                  bg: 'neAccent.400',
                  _hover: {
                    bg: 'neAccent.500',
                  },
                }}
                onClick={onClickSave}
                rounded="25px"
                fontSize="16px"
              >
                <Text color="neWhite.500">Save</Text>
              </Button>
            </Flex>
          </DrawerHeader>

          <DrawerBody width="full">
            {props.children}
          </DrawerBody>
        </DrawerContent>

      </Drawer>
    </Box >
  );
};

export default CustomDrawer;
