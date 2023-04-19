import {
  Box,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  Flex,
} from '@chakra-ui/react';
import { Button } from '@iseazy/react-kit';
import { IoIosArrowBack } from 'react-icons/io';
import { sliceInformation } from '../../store/sliceInformation';
import { propsDrawer } from './interfaces/propsDrawer';


const CustomDrawer = (props: propsDrawer) => {
  const { isOpen, setIsOpen, readonly } = sliceInformation();

  const onClickSave = () => {
    alert('Save Changes!');
  };

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
            <button
              onClick={setIsOpen}
              style={{ background: 'none', outline: 'none' }}
            >
              <IoIosArrowBack size={20} />
            </button>
            <Flex gap="3">
              <Button
                onClick={onClickSave}
                isDisabled={readonly}
                label="Save"
              />
            </Flex>
          </DrawerHeader>
          <DrawerBody width="full">{props.children}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default CustomDrawer;
