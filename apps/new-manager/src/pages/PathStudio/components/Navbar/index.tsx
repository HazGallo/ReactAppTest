import { useEffect, useState, memo, useMemo } from 'react';
import {
  Box,
  Flex,
  Heading,
  Collapse,
  useMediaQuery,
  TabList,
} from '@chakra-ui/react';
import { shallow } from 'zustand/shallow';

import { Badge, Tag, Button, ButtonIco } from '@iseazy/react-kit';
import { CustomTab } from './components/CustomTab';
import { ColorMode } from './components/ColorMode';

import useSectionsStore from 'src/store/useSectionsStore';
import { usePersistedStore } from 'src/store/usePathListStore';

interface Props {
  tabIndex: number;
}

const Navbar = (props: Props) => {
  const { tabIndex } = props;

  const [isMobile] = useMediaQuery('(max-width: 1110px)');
  const [isOpen, setIsOpen] = useState(false);
  const { seletedPathName } = usePersistedStore(
    (state) => ({
      seletedPathName: state.seletedPathName,
    }),
    shallow
  );

  const { sections } = useSectionsStore(
    (state) => ({
      sections: state.sections,
    }),
    shallow
  );

  const totalElements = useMemo(
    () =>
      sections.reduce(
        (acc, section) => acc + (section?.contents?.length ?? 0),
        0
      ),
    [sections]
  );

  useEffect(() => {
    setIsOpen(!isMobile);
  }, [isMobile]);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  const buttonData = [
    {
      ariaLabel: seletedPathName
        ? seletedPathName
        : 'Efficient Strategies for Retail Success',
    },
    {
      ariaLabel: 'Contents',
      amount: totalElements ?? 0,
    },
    {
      ariaLabel: 'Test Questions',
      amount: 12,
    },
    {
      ariaLabel: 'Game Questions',
      amount: 23,
    },
    {
      ariaLabel: 'Materials',
      amount: 8,
    },
  ];

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
      >
        <Heading size="sm" ml="15px" fontWeight="900">
          Path Studio
        </Heading>
      </Box>

      <Collapse in={isOpen}>
        <Box
          bg={isMobile ? 'primary' : 'transparent'}
          bottom={isMobile ? '0' : 'auto'}
          boxShadow="2xl"
          display={isMobile ? 'block' : 'flex'}
          flexDirection={isMobile ? 'column' : 'row'}
          p={isMobile ? '20px' : '0'}
          position={isMobile ? 'fixed' : 'static'}
          right={isMobile ? (isOpen ? '0' : '-200px') : '0'}
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
            <TabList
              borderBottom="none"
              _active={{ border: '0px', bg: 'transparent' }}
              mb="4px"
              onClick={() => {
                console.info('onClick TabList');
              }}
            >
              <Box
                alignItems={isMobile ? 'flex-start' : 'center'}
                display={'flex'}
                flexDirection={isMobile ? 'column' : 'row'}
                gap="15px"
                justifyContent="center"
              >
                {buttonData.map((value, index) => (
                  <div key={index}>
                    <CustomTab>
                      <Tag
                        amount={value.amount}
                        isSelected={tabIndex === index}
                        label={value.ariaLabel}
                        typeVersion="primary"
                      />
                    </CustomTab>
                  </div>
                ))}
              </Box>
            </TabList>

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
              <Box userSelect={'none'}>
                <Badge type="course" size="xs" />
              </Box>
              <Button
                formats="fixed"
                label="Exit"
                sizeName="md"
                variant="secondary"
              />
            </Box>
          </Box>
        </Box>
      </Collapse>

      {isMobile && (
        <ButtonIco
          aria-label={''}
          backgroundType="backgroundFilled"
          isSelected={isOpen}
          ml="25px"
          onClick={toggleCollapse}
          sizeName={'md'}
          typeIcon="IconDotsHorizontal"
        />
      )}
    </Flex>
  );
};

export default memo(Navbar);
