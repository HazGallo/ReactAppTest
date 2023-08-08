import { shallow } from 'zustand/shallow';
import { BiFilterAlt } from 'react-icons/bi';

import AppEngage from '../../components/AppEngage';
import GridContentDraggable from '../../components/GridContentDraggable';
import { DrawerParent } from '../../components/DrawerParent/DrawerParent';
import 'react-lazy-load-image-component/src/effects/blur.css';

import {
  Flex,
  Input,
  InputGroup,
  InputRightAddon,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useSettings } from '../../store/settingsStore';
import { useGetVideoList } from '../../hooks/useGetVideoList';
import { Button } from '@iseazy/react-kit';

const PathLearning = () => {
  const { navSize, cardSize, setIsInfoCardDrawer } = useSettings(
    (state) => ({
      navSize: state.navSize,
      cardSize: state.cardSize,
      setIsInfoCardDrawer: state.setIsInfoCardDrawer,
    }),
    shallow
  );
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { data } = useGetVideoList();

  const onChangeOpen = () => {
    setIsInfoCardDrawer({
      title: 'New video',
      description: 'New video description',
      uid: null,
    });
    onOpen();
  };

  return (
    <AppEngage>
      <Flex
        flexDirection="column"
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
              Published
            </Text>
          </Flex>
          <Flex gap="3">
            <Button
              label={cardSize ? 'sm' : 'md'}
              sizeName={'md'}
              variant={'primary'}
              formats={'fixed'}
            />
            <Button
              label="Create"
              onClick={onChangeOpen}
              sizeName={'md'}
              variant={'primary'}
              formats={'fixed'}
            />

            {isOpen && (
              <DrawerParent isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
            )}
          </Flex>
        </Flex>

        <Flex marginTop={['15px', '30px']} marginBottom="20px">
          <InputGroup size="lg">
            <Input variant="filled" placeholder="Find" />
            <InputRightAddon children={<BiFilterAlt />} />
          </InputGroup>
        </Flex>

        {data?.map((element) => (
          <h1 key={element.uid}>{element.uid}</h1>
        ))}
      </Flex>
    </AppEngage>
  );
};

export default PathLearning;
