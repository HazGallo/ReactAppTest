import { lazy, useCallback, useEffect, useState } from 'react';

import {
  AbsoluteCenter,
  Box,
  Divider,
  Flex,
  useDisclosure,
} from '@chakra-ui/react';
import {
  Ico,
  ItemGroup,
  ItemGroupNew,
  PlaceholderArea,
} from '@iseazy/react-kit';

import { Headboard } from '../../../Headboard';
import { ButtonMenu } from '../../../Headboard/components/ButtonMenu';
import { dataMenu } from '../../../Headboard/data/dataMenu';
import { scrollCss } from './types/scroll.type';
import { scrollContents } from './types/scrollContents.type';

import { useSettings } from 'src/store/settingsStore';
import useSectionsStore from 'src/store/useSectionsStore';
// import { IconChevronLeft } from '@iseazy/react-kit/src/assets/customIcons';
import { IconChevronLeft } from '../../../../../../../packages/react-kit/src/assets/customIcons';

import { motion } from 'framer-motion';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { animated, config, useTransition } from 'react-spring';
import { getRandomObject } from 'src/data/dataCard';
import { Element } from 'src/store/interfaces/element.interface';
import { v4 as uuidv4 } from 'uuid';

// Drawer exists in Chakra you don't need dynamic import
import DrawerParent from '../DrawerParent/DrawerParent';

// Adding lazy import for GridContentDraggable
const GridContentDraggable = lazy(() => import('../GridContentDraggable'));

// Adding lazy import for TableDataCard
const TableDataCard = lazy(() => import('../TableDataCard'));

import { shallow } from 'zustand/shallow';
import usePathList from 'src/store/usePathListStore';
import { Video } from '../../hooks/interfaces/section.interface';
import { useCreateSection } from '../../hooks/useCreateSection';
import { badgeTypes } from './types/BadgeTypeBg';

export const Contents = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [dataSectionSelected, setdataSectionSelected] = useState<any>();
  const [inputValue, setInputValue] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [showComponent, setShowComponent] = useState(false);
  const [showComponentState, setShowComponentState] = useState(false); // Nuevo estado
  const [showTable, setShowTable] = useState(false);

  const { handleSizeCardMd, handleSizeCardSm, cardSize } = useSettings();

  const {
    addElement,
    createSection,
    IdSectionSelected,
    modifySection,
    modifySections,
    moveSection,
    sectionContents,
    sections,
    updateSectionName,
  } = useSectionsStore(
    (state) => ({
      addElement: state.addElement,
      createSection: state.createSection,
      IdSectionSelected: state.IdSectionSelected,
      modifySection: state.modifySection,
      modifySections: state.modifySections,
      moveSection: state.moveSection,
      sectionContents: state.sectionContents,
      sections: state.sections,
      updateSectionName: state.updateSectionName,
    }),
    shallow
  );

  // we have a big problem here... we need merge sections and sectionsContenst
  const currentSectionContents = sectionContents.find(
    ({ idSection }) => idSection === IdSectionSelected
  );

  const currentSection = sections.find(({ id }) => id === IdSectionSelected);

  const generateAvatars = (contents: any) => {
    let avatar: any = [];

    contents.forEach((element: any) => {
      const bg = badgeTypes.find((x) => x.type.toLowerCase() === element.type);
      avatar.unshift({
        name: element.id,
        src: '',
        backgroundColor: bg?.bg,
      });
    });

    return avatar;
  };

  const handleButtonTable = useCallback(() => {
    setShowTable(true);
  }, []);

  const handleButtonCardSm = useCallback(() => {
    handleSizeCardSm();
    setShowTable(false);
  }, [handleSizeCardSm]);

  const handleButtonCardMd = useCallback(() => {
    handleSizeCardMd();
    setShowTable(false);
  }, [handleSizeCardMd]);

  const handleButtonItemGroup = useCallback(() => {
    setShowComponent(!showComponent);
  }, [showComponent]);

  // en este metodo que le pasamos como props al hooks obtiene la data y una ves ya la tenemos
  //  creamos la seccion en nuestro state de zustand, mas que todo para obtener el id
  const onMutationSuccess = (video: Video) => {
    createSection(video.uid, video.title);
  };

  // llamamos al hooks y le pasamos un metodo para obtener la data una ves ya este cargada
  const createSectionMutation = useCreateSection(onMutationSuccess);
  const { IdCardSelected } = usePathList();

  const handleCreateSection = () => {
    const sectionName = inputValue || 'New section';

    // usamos el mutate para hacer la peticion
    createSectionMutation.mutate({
      id: IdCardSelected,
      title: sectionName,
    });

    setInputValue('');

    requestAnimationFrame(() => {
      const divElement = document.getElementById('scroll2');
      if (divElement) {
        divElement.scrollTo({
          top: divElement.scrollHeight,
          behavior: 'smooth',
        });
      }
    });
  };

  const handleSection = (id: string) => {
    const dataSection = modifySection(id);

    setdataSectionSelected(dataSection);
  };

  const handleDividerHover = (hovered: boolean) => {
    setIsHovered(hovered);
  };

  const transitions = useTransition(showComponentState, {
    from: { width: '0%', opacity: 0 },
    enter: { width: '0%', opacity: 1 },
    config: config.default,
  });

  const onSeletedChange = (title: any, sectionId: string) => {
    const actions: { [key: string]: Function } = {
      'Move to top': () => moveSection(sectionId, 'top'),
      'Move to bottom': () => moveSection(sectionId, 'bottom'),
      'Move up': () => moveSection(sectionId, 'up'),
      'Move down': () => moveSection(sectionId, 'down'),
      Translate: () => onOpen(),
    };

    const action = actions[title];
    if (action) {
      action();
    }
  };

  const variants = {
    hidden: { opacity: 0, y: '10%' },
    visible: { opacity: 1, y: '0%' },
  };

  useEffect(() => {
    if (showComponent) {
      setTimeout(() => {
        setShowComponentState(true);
      }, 200);
    } else {
      setShowComponentState(false);
    }
  }, [showComponent]);

  const onSelected = (title: string) => {
    const dataSection = modifySection(IdSectionSelected);
    handleAddElement(dataSection?.sectionId, title.toLowerCase());
  };

  const handleAddElement = (sectionId: string, title: any) => {
    const newElement: Element = {
      uid: uuidv4(),
      type: {
        title: title,
        is_active: true,
      },
      points: 8,
      author_uid: '80df36f5-7d7d-35ca-a13f-4d121ae0dd6c',
      tags: [
        {
          tag_uid: 'bb9c06d1-7762-38a7-afb5-8bebe6d6b266',
        },
      ],
      topic_weights: [
        {
          topic_uid: '7d364613-edc1-36ee-a024-9a72598a4595',
          weight: 100,
        },
      ],
      translations: [
        {
          title: '',
          description: '',
          is_Default: true,
          language: 'en',
          asset: {
            filePath: '01898cac-5616-77a7-8a05-03d0d5c96435',
            cdnUrl: null,
            mimeType: 'image/png',
            size: 0,
            sizeFormatted: '20 ',
            imageAsset: null,
            isCompressed: false,
            id: 1254,
            uid: '01898cac-5616-77a7-8a05-03d0d5c96435',
            type: 'image',
            createdAt: '2023-07-25T10:50:51+00:00',
            updatedAt: '2023-07-25T10:50:51+00:00',
            deleted: false,
            deletedAt: null,
            active: true,
          },
        },
      ],
      cover: {
        filePath: getRandomObject().coverimage,
        cdnUrl: null,
        mimeType: 'image/png',
        size: 100,
        sizeFormatted: '100 ',
        imageAsset: null,
        isCompressed: false,
        id: 1253,
        uid: '01898cac-5610-7930-8903-0c5ca6f6202e',
        type: 'file',
        createdAt: '2023-07-25T10:50:51+00:00',
        updatedAt: '2023-07-25T10:50:51+00:00',
        deleted: false,
        deletedAt: null,
        active: true,
      },
      newCard: true,
    };

    addElement(sectionId ?? IdSectionSelected, newElement);
  };

  return (
    <Flex
      justifyContent="center"
      alignItems={'center'}
      width={'100%'}
      pl="5%"
      h="100vh"
    >
      <DrawerParent
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        type={'DrawerTranslate'}
      />

      {transitions(
        (styles, item) =>
          item && (
            <animated.div style={styles}>
              <Box
                bg="primary"
                display={'flex'}
                h="100%"
                justifyContent="center"
                position="fixed"
                top="74px"
                w="350px"
                pb="50px"
              >
                <Box
                  alignItems={'center'}
                  color="neGrey.200"
                  px="50px"
                  h="100%"
                  display={'flex'}
                  flexDir={'column'}
                  pt="70px"
                  pb="50px"
                  overflowY="auto"
                  overflowX="hidden"
                  sx={{ ...scrollCss }}
                >
                  <DragDropContext
                    onDragEnd={(result) => {
                      if (!result.destination) return; // cancela el reordenamiento si el item es soltado fuera de la lista

                      const items = Array.from(sections); // copia el arreglo de secciones
                      const [reorderedItem] = items.splice(
                        result.source.index,
                        1
                      ); // elimina el item de su posición original
                      items.splice(result.destination.index, 0, reorderedItem); // inserta el item en su nueva posición

                      modifySections(items); // guarda el nuevo arreglo de secciones
                    }}
                  >
                    <Droppable droppableId="sections">
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                        >
                          {sections.map((section, index) => (
                            <Draggable
                              key={section.id}
                              draggableId={section.id}
                              index={index}
                            >
                              {(provided) => (
                                <Box
                                  width={'270px'}
                                  h="143px"
                                  marginBottom="20px"
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  <ItemGroup
                                    key={section.id}
                                    isSelected={
                                      section.id === IdSectionSelected
                                    }
                                    isDisabled={false}
                                    avatars={generateAvatars(section.contents)}
                                    placeholder={'New section'}
                                    src={''}
                                    BadgeGroupColor={
                                      generateAvatars(section.contents)
                                        .backgroundColor
                                    }
                                    valueHeading={section.name}
                                    readonly={false}
                                    amount={section?.contents?.length ?? 0}
                                    setValueHeading={(name: string) => {
                                      updateSectionName(section.id, name);
                                    }}
                                    onSeletedChange={(title: string) => {
                                      onSeletedChange(title, section.id);
                                      handleSection(IdSectionSelected);
                                    }}
                                    handleCardClick={() => {
                                      handleSection(section.id);
                                    }}
                                  />
                                </Box>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </DragDropContext>

                  <Box width={'270px'} h="143px">
                    <ItemGroupNew
                      isDisabled={false}
                      onChange={(e: any) => setInputValue(e.target.value)}
                      onClickInput={handleCreateSection}
                      onEnterPressInput={handleCreateSection}
                      placeholder={'New section'}
                      value={inputValue}
                    />
                  </Box>
                </Box>

                <Box
                  position="relative"
                  w="10px"
                  display={'flex'}
                  justifyContent="center"
                  onClick={handleButtonItemGroup}
                  onMouseEnter={() => handleDividerHover(true)}
                  onMouseLeave={() => handleDividerHover(false)}
                >
                  <Divider
                    bg={isHovered ? 'neAccent.500' : 'blackAlpha.50"'}
                    h="100%"
                    orientation="vertical"
                    w={isHovered ? '2px' : '1px'}
                    _dark={{
                      bg: isHovered ? 'neAccent.400' : 'whiteAlpha.50"',
                    }}
                    opacity={1}
                  />
                  {isHovered && (
                    <AbsoluteCenter top="70px">
                      <Box
                        borderRadius={'full'}
                        boxShadow="0px 3px 6px"
                        color="bgShadow"
                        h="32px"
                        overflow="hidden"
                        w="32px"
                      >
                        <Box
                          alignItems={'center'}
                          bg="neWhite.500"
                          color={'neGrey.700'}
                          cursor="pointer"
                          display={'flex'}
                          h="full"
                          justifyContent="center"
                          onClick={handleButtonItemGroup}
                          w="full"
                          _hover={{
                            bg: 'neAccent.500',
                            color: 'neWhite.500',
                          }}
                          _dark={{
                            _hover: {
                              bg: 'neAccent.400',
                              color: 'neWhite.500',
                            },
                          }}
                        >
                          <Ico icon={IconChevronLeft} sizeName={'xs'} />
                        </Box>
                      </Box>
                    </AbsoluteCenter>
                  )}
                </Box>
              </Box>
            </animated.div>
          )
      )}

      <Box
        h="100%"
        paddingTop="130px"
        ml={showComponent ? '400px' : ''}
        position={'relative'}
        id="scrollSection"
        overflowY={'auto'}
        sx={{ ...scrollContents }}
        overflowX="hidden"
        pr="5%"
        transition="all .3s ease-in-out"
        w="100%"
      >
        <Headboard
          buttonOne={!showTable && cardSize}
          buttonShow={showComponent}
          buttonThree={showTable}
          buttonTwo={!showTable && !cardSize}
          handleButtonCardMd={handleButtonCardMd}
          handleButtonCardSm={handleButtonCardSm}
          handleButtonItemGroup={handleButtonItemGroup}
          handleButtonTable={handleButtonTable}
          idSection={IdSectionSelected}
          subTitle={currentSection?.name}
        />

        <Box key={IdSectionSelected}>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.4 }}
          >
            {!currentSectionContents ||
            !currentSectionContents?.elements?.length ? (
              <motion.div
                initial={{ y: '5%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <PlaceholderArea
                  title="Add new contents to the section"
                  description={`Create new cards through the "new button"!`}
                  typeIcon="IconArticle"
                >
                  <ButtonMenu
                    categoryType="noCategory"
                    dataMenu={dataMenu}
                    isOpen={false}
                    isScrolled={false}
                    onSeletedChange={onSelected}
                    positioning="top"
                    warning={false}
                  />
                </PlaceholderArea>
              </motion.div>
            ) : (
              <motion.div
                initial={{ y: '5%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {showTable ? (
                  <TableDataCard dataCard={currentSectionContents?.elements} />
                ) : (
                  <GridContentDraggable
                    data={currentSectionContents?.elements}
                    isError={false}
                  />
                )}
              </motion.div>
            )}
          </motion.div>
        </Box>
      </Box>
    </Flex>
  );
};
