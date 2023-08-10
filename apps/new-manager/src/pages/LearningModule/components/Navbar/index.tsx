import { useEffect, useState, memo, useMemo } from 'react';
import {
  Box,
  Flex,
  Heading,
  Collapse,
  useMediaQuery,
  Text,
} from '@chakra-ui/react';
import { shallow } from 'zustand/shallow';

import { Badge, Tag, Button, ButtonIco } from '@iseazy/react-kit';
import { ColorMode } from './components/ColorMode';

import useSectionsStore from 'src/store/useSectionsStore';

interface Props {}

const Navbar = (props: Props) => {
  const {} = props;
  const [isMobile] = useMediaQuery('(max-width: 1110px)');

  return (
    <Flex
      alignItems="center"
      bg="neWhite.500"
      borderBottom="1px"
      borderColor="blackAlpha.50"
      height="74px"
      left={0}
      paddingLeft="5px"
      paddingRight="20px"
      pl="35px"
      position="fixed"
      top={0}
      width="100%"
      zIndex={100}
      _dark={{
        bg: 'neGrey.800',
        borderColor: 'whiteAlpha.50',
      }}
    >
      <Box
        alignItems="center"
        display="flex"
        justifyContent="center"
        position="relative"
        borderRight="1px"
        borderColor="blackAlpha.50"
        pr="20px"
      >
        <Text fontSize="18px">
          <strong>iseazy</strong>
          engage
        </Text>
      </Box>

      <Box
        alignItems="center"
        display="flex"
        justifyContent="center"
        position="relative"
        pl="20px"
      >
        <Text textStyle={'lg'}>Store Manager Project</Text>
      </Box>

      <Box
        bg={isMobile ? 'primary' : 'transparent'}
        bottom={isMobile ? '0' : 'auto'}
        boxShadow="2xl"
        display={isMobile ? 'block' : 'flex'}
        flexDirection={isMobile ? 'column' : 'row'}
        p={isMobile ? '20px' : '0'}
        position={isMobile ? 'fixed' : 'static'}
        right={isMobile ? '-200px' : '0'}
        top={isMobile ? '75px' : 'auto'}
        transition="right 0.3s ease-in-out"
        width={isMobile ? ['70%', '50%', '40%', '70%', '80%'] : 'auto'}
        zIndex="999"
      >
        <Box
          alignItems={isMobile ? 'flex-start' : 'center'}
          display="flex"
          flexDirection={isMobile ? 'column' : 'row'}
          gap="15px"
          justifyContent="space-between"
          ml="50px"
        >
          <Box
            alignItems={'center'}
            display={'flex'}
            gap="10px"
            justifyContent="center"
            mr="25px"
            position={isMobile ? 'relative' : 'absolute'}
            right="0"
          >
            <ColorMode />

            <ButtonIco sizeName="md" typeIcon="IconCardBig" aria-label={''} />
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default memo(Navbar);
