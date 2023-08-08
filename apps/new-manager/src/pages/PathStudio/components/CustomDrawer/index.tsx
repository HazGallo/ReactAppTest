import React, { Suspense } from 'react';
import { SkeletonDrawer } from './components/SkeletonDrawer'
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
} from '@chakra-ui/react';
import { propsDrawer } from './interfaces/propsDrawer';
import { scrollBar } from './scrollBar';

const LazyFallback = () => <SkeletonDrawer /> ;

const CustomDrawer = React.memo((props: propsDrawer) => {
  const { isOpen, onClose, children } = props;

  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay bg="bgDrawer" />
      <DrawerContent minWidth="414px" bg="primary">
        <DrawerBody
          width="full"
          outline="none"
          overflowY="auto"
          sx={scrollBar}
          p="0px"
        >
          {/* <Suspense fallback={<LazyFallback />}>{children}</Suspense> */}
         <SkeletonDrawer /> 
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
});

export default CustomDrawer;
