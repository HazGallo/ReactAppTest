import React from 'react';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
} from '@chakra-ui/react';

import { propsDrawer } from './interfaces/propsDrawer';
import { scrollBar } from './scrollBar';

const CustomDrawer = React.memo((props: propsDrawer) => {
  const { isOpen, onClose, children } = props;

  return (
    <Drawer id="custom-drawer" isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay bg="bgDrawer" />
      <DrawerContent zIndex={1000} minWidth="414px" bg="primary">
        <DrawerBody zIndex={1000} width="full" outline="none" sx={scrollBar}>
          {children}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
});

export default CustomDrawer;
