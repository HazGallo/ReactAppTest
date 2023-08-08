import 'react-lazy-load-image-component/src/effects/blur.css';

import { Box, Flex } from '@chakra-ui/react';

import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { scrollBar } from './scrollBar';

interface Props {
  children: any;
}

const AppEngage = ({ children }: Props) => {
  return (
    <Box
      bg="neWhite.500"
      _dark={{
        bg: 'neGrey.800',
      }}
      zIndex={999}
      overflowY="auto"
      padding="10px"
      position="relative"
      height="100vh"
      sx={scrollBar}
    >
      <Navbar />
      <Flex paddingTop="70px">
        <Flex>
          <Sidebar />
        </Flex>

        {children}
      </Flex>
    </Box>
  );
};

export default AppEngage;
